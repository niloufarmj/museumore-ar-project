import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import ReturnButton from "../Layouts/ReturnButton";

import React, { useState, useEffect } from "react";
import AddFileButton from "../Layouts/AddFileButton";
import TextArea from "../Layouts/TextArea";
import AddImageButton from "../Layouts/AddImageButton";
import { useNavigate } from "react-router-dom";
import Text from "../Layouts/Text";

import { useTranslation } from 'react-i18next';

function AddItem() {
  const gallary = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState("");
  const [augmentedVideoOrImage, setAugmentedVideoOrImage] = useState("");
  const [extraVideo, setExtraVideo] = useState("");

  const [error, setError] = useState("");

  const [margin, setMargin] = useState("100px");

  const {t, i18n} = useTranslation(['additem']);

  useEffect(() => {
    fetch("http://localhost:8000/api/items/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddItem = async () => {
    if (title == "") {
      setError(t("You should fill title!"));
      // setMargin("58px");
      return;
    } else if (image == null) {
      setError(t("You should choose a target image!"));
      // setMargin("58px");
      return;
    } else {
      const data = new FormData();

      const new_image = new File([image], items.length + ".jpg")

      data.append("gallary_id", gallary.id);
      data.append("target_image", new_image);
      data.append("target_index", items.length);
      data.append("title", title);
      data.append("description", description);
      data.append("audio", audio);
      data.append("augmented_video", augmentedVideoOrImage);
      data.append("extra_video", extraVideo);

      fetch("http://localhost:8000/api/items/", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/dashboard");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <ReturnButton />
      <div style={{ alignItems: "center", marginTop: "3%" }}>
        <AddImageButton
          width="70%"
          marginLeft="15%"
          text={t("add target image")}
          stateChanger={setImage}
        />
        <div style={{ marginTop: "3%" }}></div>
        <Input text={t("Title")} stateChanger={setTitle} />
        <div style={{ marginTop: "3%" }}></div>
        <AddFileButton text={t("add main audio")} stateChanger={setAudio} />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton
          text={t("add augmented image or video")}
          stateChanger={setAugmentedVideoOrImage}
        />
        <div style={{ marginTop: "3%" }}></div>
        <TextArea text={t("Description")} stateChanger={setDescription} />
        <div style={{ marginTop: "1%" }}></div>
        <AddFileButton text={t("add extra video")} stateChanger={setExtraVideo} />
        <div style={{ marginTop: "5%" }}></div>
        {error != "" && (
          <Text marginTop={"25px"} color={"red-text"} text={error} />
        )}
        <Button text={t("Done")} stateChanger={handleAddItem} />
        <div style={{ marginTop: "5%" }}></div>
      </div>
    </>
  );
}

export default AddItem;
