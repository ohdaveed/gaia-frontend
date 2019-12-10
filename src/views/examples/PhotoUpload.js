import React, { useState } from "react";

import classnames from "classnames";

// reactstrap components
import {
	Button,
	Card,
	CardTitle,
	Row,
	Col,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	CardText
} from "reactstrap";

// core components
import SectionNavbars from "views/index-sections/SectionNavbars.js";

import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PhotoUpload = (props) => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("photo-upload");
		return function cleanup() {
			document.body.classList.remove("photo-upload");
		};
	});

	const [imgCollection, setImgCollection] = useState("");
	const [client, setClient] = useState("");
	const [section, setSection] = useState("Section");

	const onFileChange = (files) => {
		let items = files.map((fileItem) => fileItem.file);
		setImgCollection([...imgCollection, items]);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		var formData = new FormData();

		for (let img in imgCollection[0]) {
			formData.append("imgCollection", imgCollection[0][img]);
		}

		formData.append("folder", "folder-name");
	};

	return (
		<>
			<div>
				<SectionNavbars />
			</div>
			<div>
				<FilePond
					files={imgCollection}
					allowMultiple={true}
					maxFiles={3}
					server={null}
					instantUpload={false}
					onupdatefiles={(fileItems) => {
						onFileChange(fileItems);
					}}></FilePond>
			</div>
		</>
	);
};

export default PhotoUpload;
