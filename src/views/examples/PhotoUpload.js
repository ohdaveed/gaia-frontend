import React, { useState } from "react";

// import classnames from "classnames";

// reactstrap components
import {
	
} from "reactstrap";

// core components
import SectionNavbars from "views/index-sections/SectionNavbars.js";

// filepond compoments
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
	// const [client, setClient] = useState("");
	// const [section, setSection] = useState("Section");

	const onFileChange = (files) => {
		let items = files.map((fileItem) => fileItem.file);
		setImgCollection([...imgCollection, items]);
	};

 	//eslint-disable-next-line
	const onSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

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
                    server="http://localhost:4000/photos/upload"
                    instantUpload={true}
                    // oninit={() => this.handleInit()}
                    onupdatefiles={(fileItems) => {
                        onFileChange(fileItems);
                    }}
                ></FilePond>
            </div>
        </>
    );
};

export default PhotoUpload;
