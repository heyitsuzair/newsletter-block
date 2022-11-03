import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	description: metadata.description,
	title: metadata.title,
	icon: metadata.icon,
	edit: Edit,
	save,
});
