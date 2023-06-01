import React, { useEffect} from "react";
import styled from "styled-components";
import { Card } from "../UI/card/Card";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { Snackbaaar } from "../UI/Snackbar";
import { snackbarActions } from "../../store/snackbar";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  const { open } = useSelector((state) => state.snackbar);
  console.log(open);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  function onCloseHandler() {
dispatch(snackbarActions.doClose())
  }
  return (
    <Container>
      {open && (
        <Snackbaaar
          handleClose={onCloseHandler}
      
        />
      )}
      <Card>
        {meals?.map((meal) => (
          <MealItem
            key={meal._id}
            meal={meal}
          />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`;
