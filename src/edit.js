import "./editor.scss";
import { InnerBlocks } from "@wordpress/block-editor";

const TEMPLATE = [
	[
		"core/columns",
		{},
		[
			[
				"core/column",
				{
					verticalAlign: "mid",
					templateLock: true,
				},
				[
					[
						"core/heading",
						{
							placeholder: "Enter Heading",
						},
					],
					[
						"core/paragraph",
						{
							placeholder: "Enter Description",
						},
					],
					["core/image"],
				],
			],
			[
				"core/column",
				{
					verticalAlign: "mid",
					// templateLock: true,
				},
				[
					[
						"core/shortcode",
						{
							text: "Generate Form From WP Forms Or Any Form Builder And Replace This Text With Shortcode",
						},
					],
				],
			],
		],
	],
];

export default function Edit() {
	return <InnerBlocks template={TEMPLATE} />;
}
