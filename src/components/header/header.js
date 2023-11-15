import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <div className='wrapper'>
          <div className='logo'>
            <Button variant='text'>Cool Barber</Button>
          </div>
          <div className='head_nav'>
            <Button variant='text'>Text</Button>
            <Button variant='text'>Text</Button>
            <Button variant='text'>Text</Button>
            <Button variant='text'>Text</Button>
            <Button variant='text'>Text</Button>
          </div>
          <div className='head_contacts'>
            <div >
              <Button variant='text'>302 W 50th St, NY, NY 10019</Button>
            </div>
            <div className="contact_tel">
              <Button className="btn_tel" variant='text'>8 (800) 000-00-00</Button>
              <Button className="btn_tel" variant='text'>Daily from 9 to 20</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
