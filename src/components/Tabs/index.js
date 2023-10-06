import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }
  const activeButtonClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-item ${activeButtonClassName}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
