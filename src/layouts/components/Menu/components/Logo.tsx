import { connect } from "react-redux";

import logo from "@/assets/images/lk_logo.png";
import logoMd from "@/assets/images/lk_logo_md.png";
const Logo = (props: any) => {
	const { isCollapse } = props;
	return (
		<div className="logo-box">
			<img src={!isCollapse ? logo : logoMd} alt="logo" className={!isCollapse ? "logo-img" : "logo-img-md"} />
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(Logo);
