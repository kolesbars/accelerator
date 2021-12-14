import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  padding: 0;
  margin: 0;
`;

const NotFoundScreen = styled.div`
  position: relative;
  height: 100vh;
`;

const NotFound = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

const NotFound404 = styled.div`
  position: relative;
  height: 200px;
  margin: 0px auto 20px;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 236px;
  font-weight: 200;
  margin: 0px;
  color: #ffa500;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: #211b19;
  background: #fff;
  padding: 10px 5px;
  margin: auto;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
`;

const Link = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  padding: 13px 23px;
  background: #ff6300;
  font-size: 18px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;

  &:hover {
    color: #ff6300;
    background: #211b19;
  }
`;

export { Container, NotFound, NotFoundScreen, NotFound404, Title, Text, Link };
