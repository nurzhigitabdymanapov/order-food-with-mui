import React from "react";
import styled from "styled-components";
import { Modal, Box } from "@mui/material";

export const Modalui = ({ children, onClick }) => {
  return (
    <StyledBackdrop open={onClick} onClose={onClick}>
      <ModalStyle>{children}</ModalStyle>
    </StyledBackdrop>
  );
};

const ModalStyle = styled(Box)`
  position: fixed;
  top: 22vh;
  left: 4%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 42rem;
  left: calc(50% - 20rem);

  z-index: 999;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledBackdrop = styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1305px;
  background-color: rgba(0, 0, 0, 0.75);

  backdrop-filter: blur(2px);

  z-index: 998;
`;
