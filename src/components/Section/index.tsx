import React from "react";

import {
  Container,
  HeaderWrapper,
  Header,
  ImagesPageIcon,
  DropboxLogo,
  Content,
} from "./styles";

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Terkom</span>
          </h1>

          <section>
            <button>
              <ImagesPageIcon />
            </button>

            <button onClick={handleToggle}>
              {buttonVariant === 0 ? "Acessar" : "Interagir"}
            </button>
          </section>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
