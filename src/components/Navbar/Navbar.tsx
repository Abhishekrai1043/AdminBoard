import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="admin.png"  alt="" />
       <span>AdminBoard</span> 
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/menu.png" height={20}  alt="" />
        <img src="expand.svg" alt="" />
        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://cdn.pixabay.com/photo/2024/02/28/04/53/man-8601195_1280.png" alt="" />
          <span>Myth</span>
        </div>
        <img src="setting.svg"alt="" />
      </div>
    </div>
  )
}

export default Navbar