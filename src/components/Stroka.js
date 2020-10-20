import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
var CharTimeout = 80; 
	var StoryTimeout = 2000; 

	var Summaries = new Array();
	var SiteLinks = new Array();

		Summaries[1] = 'СОЗДАНИЕ КОРПОРАТИВНЫХ САЙТОВ И ВИЗИТОК';
		SiteLinks[1] = '/';
		Summaries[0] = 'СОЗДАНИЕ ИНТЕРНЕТ-МАГАЗИНОВ И КАТАЛОГОВ';
		SiteLinks[0] = '/';
        Summaries[2] = 'СОЗДАНИЕ lANDING PAGE (ОДНОСТРАНИЧНИКОВ)';
		SiteLinks[2] = '/';


	function startTicker(){
		massiveItemCount =  Number(Summaries.length); 

		CurrentStory     = -1;
		CurrentLength    = 0;

		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();     
	}

	function runTheTicker(){
		var myTimeout;  

		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
			AnchorObject.href = SiteLinks[CurrentStory];
		}

		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}

		setTimeout("runTheTicker()", myTimeout);
	}

	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "|";
	}

	startTicker();
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});