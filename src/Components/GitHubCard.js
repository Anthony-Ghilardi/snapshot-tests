import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={require("../Assets/image_67228673.JPG")}
      alt="Photo of Me"
      style={{ 
      height: "100%", 
      objectFit: "cover",
      }} />
      <Card.Body>
        <Card.Title>Anthony-Ghilardi</Card.Title>
        <Card.Text>
          I am learning how to become a software developer! 
          I currently work at The Home Depot part time and have 
          considered trying to become a Junior Developer for The Home Depot!
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;