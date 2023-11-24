import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Tasks from './components/Tasks'

import {
  MainContainer,
  TaskInputContainer,
  TaskDisplayContainer,
  Heading,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddButton,
  TagsHeading,
  TagsContainer,
  TasksContainer,
  TagsButton,
  TagListItem,
  NoTaskText,
} from './style'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(prev => ({
        myTaskList: [...prev.myTaskList, {id, taskName, taskCategory, bgColor}],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTag = event => {
    this.setState(prev => ({
      activeTag:
        prev.activeTag === event.target.value ? 'INITIAL' : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)

    return (
      <MainContainer>
        <TaskInputContainer>
          <Heading>Create a Task</Heading>
          <InputContainer>
            <LabelText for="textInput">Task</LabelText>
            <Input
              id="textInput"
              type="text"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onChangeInputTask}
            />
            <LabelText for="optionInput">Tags</LabelText>
            <Select
              id="optionInput"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="button" onClick={this.onClickButton}>
            Add Task
          </AddButton>
        </TaskInputContainer>
        <TaskDisplayContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(each => {
              const isActive = activeTag === each.optionId

              return (
                <TagListItem key={each.optionId}>
                  <TagsButton
                    type="button"
                    value={each.optionId}
                    isActive={isActive}
                    onClick={this.onClickTag}
                  >
                    {each.displayText}
                  </TagsButton>
                </TagListItem>
              )
            })}
          </TagsContainer>
          <TagsHeading>Tasks</TagsHeading>
          <TasksContainer>
            {filterTaskList.length === 0 ? (
              <NoTaskText>No Tasks Added Yet</NoTaskText>
            ) : (
              filterTaskList.map(each => (
                <Tasks key={each.id} taskDetails={each} />
              ))
            )}
          </TasksContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App
