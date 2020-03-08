import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "react-configurable-grid";

interface ICardProps {
  title: string;
  summary: string;
  rating: string;
  release: string;
  imageSrc: string;
}

const StyledWrapper = styled.div`
  padding: 2em 2em 0 1em;
  background: #efefef;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.5em;
  @media screen and (max-width: 768px) {
    padding: 2em 2em 0;
  }
  h2 {
    margin: 0 0 0.7em 0;
    font-size: 2.7em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  p {
    font-size: 1.6em;
    line-height: 1.2em;
    margin: 0 0 1em 0;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  span {
    font-weight: 600;
  }
`;

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  img {
    box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.55);
    margin-bottom: 2em;
    max-width: 90%;
    @media screen and (max-width: 576px) {
      width: 65%;
    }
  }
`;

const StyledExtraDataWrapper = styled.div`
  display: flex;
  margin: 0 0 1.5em 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  p {
    font-size: 1.6em;
    line-height: 1.2em;
    margin: 0 1em 0 0;
  }
`;

const StyledBtnWrapper = styled.div`
  margin: 0 0 1.5em 0;
  display: flex;
  justify-content: flex-end;
  a {
    font-size: 1.2em;
    text-transform: uppercase;
    color: #727272;
    text-decoration: none;
    padding: 0.5em;
    margin: 0 0 1em 0;
    color: #727272;
    text-decoration: none;
    border-radius: 0.2em;
    transition: all 0.35s linear;
    font-weight: 600;

    &:hover {
      color: #242424;
      background: #e0e0e0;
    }
  }
`;

const Card: React.FC<ICardProps> = ({
  title,
  summary,
  rating,
  release,
  imageSrc
}) => (
  <StyledWrapper>
    <Row>
      <Col xs={12} md={5} lg={5} xl={3}>
        <StyledImgWrapper>
          <img src={imageSrc} />
        </StyledImgWrapper>
      </Col>
      <Col xs={12} md={7} lg={7} xl={9}>
        <h2>{title}</h2>
        <p>{summary}</p>
        <StyledExtraDataWrapper>
          <p>
            <span>Rating:</span> {rating}
          </p>
          <p>
            <span> Release:</span> {release}
          </p>
        </StyledExtraDataWrapper>
        <StyledBtnWrapper>
          <Link href="/" as={"/"}>
            <a>Back Home</a>
          </Link>
        </StyledBtnWrapper>
      </Col>
    </Row>
  </StyledWrapper>
);

export default Card;
