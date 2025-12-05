import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="honeycomb">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* full screen center */

  @-webkit-keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .honeycomb {
    height: 24px;
    width: 24px;
    position: relative;
  }

  .honeycomb div {
    animation: honeycomb 2.1s infinite backwards;
    background: #fef08a;
    height: 12px;
    width: 24px;
    margin-top: 6px;
    position: absolute;
  }

  .honeycomb div:after,
  .honeycomb div:before {
    content: "";
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
  }

  .honeycomb div:after {
    top: -6px;
    border-bottom: 6px solid #fef08a;
  }

  .honeycomb div:before {
    bottom: -6px;
    border-top: 6px solid #fef08a;
  }

  .honeycomb div:nth-child(1) {
    animation-delay: 0s;
    left: -28px;
    top: 0;
  }
  .honeycomb div:nth-child(2) {
    animation-delay: 0.1s;
    left: -14px;
    top: 22px;
  }
  .honeycomb div:nth-child(3) {
    animation-delay: 0.2s;
    left: 14px;
    top: 22px;
  }
  .honeycomb div:nth-child(4) {
    animation-delay: 0.3s;
    left: 28px;
    top: 0;
  }
  .honeycomb div:nth-child(5) {
    animation-delay: 0.4s;
    left: 14px;
    top: -22px;
  }
  .honeycomb div:nth-child(6) {
    animation-delay: 0.5s;
    left: -14px;
    top: -22px;
  }
  .honeycomb div:nth-child(7) {
    animation-delay: 0.6s;
    left: 0;
    top: 0;
  }
`;

export default Loader;
