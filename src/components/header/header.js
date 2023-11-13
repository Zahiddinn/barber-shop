import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div>
      <div className='logo'></div>
      <div className='head_nav' sx={{
        // color: #EFE7E2,
        // fontFamily: Fira Sans,
        // fontsize: 15,
        // fontstyle: normal,
        // fontweight: 400,
        // lineheight: 135%
      }}>
        <Button variant='text'>Text</Button>
        <Button variant='text'>Text</Button>
        <Button variant='text'>Text</Button>
        <Button variant='text'>Text</Button>
        <Button variant='text'>Text</Button>
      </div>
    </div>
  );
};

export default Header;
