const Message = ({children, tipo}) => {
  return (
    <div className={`alert ${tipo}`}>{children}</div>
  )
}

export default Message
