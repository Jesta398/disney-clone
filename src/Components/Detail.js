import React from 'react';
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/disneyplusimage.jpg" />
            </Background>

            <ImageTitle>
                <img src="/images/viewers-pixar.png" />
            </ImageTitle>
            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span />
                    <span />
                </AddList>
                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
            </Controls>
            <SubTitle>
                2018 + 7m + Family + Fantasy + kids + Animations
            </SubTitle>
            <Description>
            A Chinese couple, consisting of a husband and a wife, live in Toronto, Canada. While the wife cooks some dumplings after the husband leaves for work, one of the dumplings comes alive.
            The woman takes sympathy for the creature and she decides to raise it as her own child. However, since the Bao is very soft and frail, the mother becomes overprotective of it while the Bao grows, and in his teenage years, he grows more rebellious and independent,
            </Description>
        </Container>


    )
}

export default Detail

const Container = styled.div`
  
  min-height: calc(100vh-250px);
  overflow-x: hidden;
 position:relative;
  padding: 0 calc(3.5vw + 5px);
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  bottom:0;
  z-index:-1;
  
     img {
        width: 100vw;
        height: 100vh;
        object-fit:cover;
     }
        `;

const ImageTitle = styled.div`
        height: 30vh;
        min-height: 170px;
        width: 35vw;
        min-width:200px;
        img {
          max-width: 100%;
          min-width: 100%;
          object-fit:contain;
        }
      `;

const Player = styled.button`
      font-size: 15px;
      margin: 0px 22px 0px 0px;
      padding: 0px 24px;
      height: 56px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1.8px;
      text-align: center;
      text-transform: uppercase;
      background: rgb (249, 249, 249);
      border: none;
      color: rgb(0, 0, 0);
      img {
        width: 32px;
      }
      &:hover {
        background: rgb(198, 198, 198);
      }`;

const Trailer = styled(Player)`
     background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     text-transform:uppercase;
    `;

const AddList = styled.div`
      margin-right: 16px;
      height: 44px;
      width: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      border: 2px solid white;
      cursor: pointer;
      span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
          height: 2px;
          transform: translate(1px, 0px) rotate(0deg);
          width: 16px;
        }
        &:nth-child(2) {
          height: 16px;
          transform: translateX(-8px) rotate(0deg);
          width: 2px;
        }
      }
    `;

const GroupWatch = styled.div`
      height: 44px;
      width: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: white;
      div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
    `;
    const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top:26px;
 
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  `;
    
    