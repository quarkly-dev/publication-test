import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `

<style>
.title  {  margin-bottom: 20px;  padding:20px }  
#Ticker {
	color: #fff;
	text-decoration: none;
}
</style>
<center><a id="Ticker" href="/" target="_blank">1</a>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});