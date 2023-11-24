import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 35vw;
  background-color: #1a171d;
`

export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  height: 100vh;
  width: 65vw;
  background-color: #000000;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 35px;
  font-family: 'roboto';
  margin: 20px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin: 10px;
`

export const LabelText = styled.label`
  font-family: 'roboto';
  color: white;
  font-size: 22px;
  color: #ffffff;
  margin: 5px;
`

export const Input = styled.input`
  height: 22px;
  font-size: 20px;
  width: 94%;
  cursor: pointer;
  outline: none;
  margin: 5px;
  padding: 20px;
  margin-bottom: 20px;
  font-family: 'roboto';
`

export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: 'roboto';
  font-weight: normal;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  padding: 10px;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  height: 45px;
  width: 150px;
  border-radius: 5px;
  border: 0px;
  margin: 20px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  padding-top: 10px;
`

export const TagsHeading = styled.h1`
  font-family: 'roboto';
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
`

export const NoTaskText = styled.p`
  font-family: 'roboto';
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
`

export const TagsContainer = styled.ul`
  font-family: 'roboto';
  display: flex;
  flex-direction: 'column';
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`

export const TagsButton = styled.button`
  font-family: 'roboto';
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  color: #ffffff;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  outline: none;
  margin: 10px;
`

export const TagListItem = styled.li`
  list-style-type: none;
`

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5px;
`
