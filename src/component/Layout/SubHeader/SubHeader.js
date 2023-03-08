import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./SubHeader.scss";

const SubHeader = ({ page, subPage }) => {
  return (
    <div className="subHeader">
      <Container>
        <div className="subContent">
          <div className="left">
            <h4 className="title">{page ? page : "Page"}</h4>
          </div>
          <div className="right">
            <Link to="/">Home</Link>
            <ChevronRightIcon className="icon" />
            <p>{subPage && subPage}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
