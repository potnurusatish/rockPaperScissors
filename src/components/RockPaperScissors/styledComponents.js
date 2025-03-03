import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Option = styled.h1`
  font-size: 25px;
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #ffffff;
  margin-top: auto;
  margin-bottom: auto;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  padding: 10px;
  border-radius: 10px;
  height: 100px;
  width: 150px;
`

export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
  margin-top: 0px;
  margin-bottom: 30px;
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`

export const PopupImage = styled.img`
  width: 90%;
  align-self: center;
`

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`

export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content: center;
`

export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: center;
`

export const GameUserOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
