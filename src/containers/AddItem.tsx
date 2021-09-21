import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_HERO } from "../state/actions";
import { IHeroUI } from "../types";
import styles from "./AddItem.module.css";

const AddItem = () => {
  const initialHeroState: IHeroUI = {
    id: '',
    title: "",
    image: "",
    description: "",
    published: false,
  };
  const [hero, setHero] = useState(initialHeroState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  };

  const saveHero = () => {
    const { title, image, description } = hero;

    const id = title.replace(/\s+/g, "-").toLowerCase();
    // prevent create empty
    if (!id) {
      setError("Sorry, title can not be empty")
      return 
    }
    const res = {
      id,
      title,
      image,
      description,
      published: false,
    };

    setHero(res);

    dispatch({
      type: CREATE_HERO,
      payload: res,
    });
    setSubmitted(true);
  };

  const newHero = () => {
    setHero(initialHeroState);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h4>You submitted Hero successfully!</h4>
          <button onClick={newHero}>
            Add
          </button>
        </div>
      ) : (
        <div className={styles.submitForm}>
          <h4>Add new hero form</h4>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={hero.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div>
            <label htmlFor="image">Image (put url here)</label>
            <input
              type="textarea"
              value={hero.image}
              onChange={handleInputChange}
              name="image"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={hero.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveHero}>Submit</button>
          <div>{error}</div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
