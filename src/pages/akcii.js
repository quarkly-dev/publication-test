import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Image, Button, Text, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import * as Components from "components";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaSkype, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoLogoVk, IoLogoInstagram } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Акции на разработку сайта
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/favicons.png?v=2020-10-20T01:02:25.576Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#C51BAC"
			padding="0 0 0 0"
			position="fixed"
			z-index="1"
			top={0}
			nout-left="0px"
			nout-right="opx"
			nout-width="100%"
			nout-top="0px"
			lg-height="120px"
			sm-bottom="6047.062352941177px"
			sm-height="215px"
			sm-top="0px"
			sm-position="static"
		>
			<Override
				slot="SectionContent"
				width="100%"
				justify-content="center"
				max-width="none"
				align-items="center"
				height="56px"
				nout-width="100%"
			/>
			<Stack width="100%" align-items="center" justify-content="center" lg-margin="5px 0px 0px 0px">
				{"    "}
				<StackItem
					width="65%"
					display="flex"
					height="50px"
					lg-width="100%"
					sm-height="150px"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="left"
						lg-justify-content="center"
						sm-flex-direction="column"
					/>
					<Icon
						category="md"
						icon={MdPhone}
						color="#ffffff"
						width="16px"
						height="16px"
					/>
					<Link
						href="#tel:+7(775)259-06-69"
						font="normal 400 16px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						letter-spacing="1.5px"
						text-decoration-line="initial"
						link-color="#ffffff"
						hover-color="#252b69"
						margin="0 15px 0 5px"
					>
						+7(775)259-06-69
					</Link>
					<Icon
						category="fa"
						icon={FaSkype}
						color="#ffffff"
						font="icomoon"
						width="16px"
					/>
					<Link
						href="#tel:+7(775)259-06-69"
						font="normal 400 16px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						letter-spacing="1.5px"
						text-decoration-line="initial"
						link-color="#ffffff"
						hover-color="#252b69"
						text-transform="uppercase"
						margin="0 15px 0 5px"
					>
						goalob
					</Link>
					<Icon category="md" icon={MdEmail} color="#ffffff" />
					<Link
						href="#tel:+7(775)259-06-69"
						font="normal 400 16px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						letter-spacing="1.5px"
						text-decoration-line="initial"
						link-color="#ffffff"
						hover-color="#252b69"
						text-transform="uppercase"
						margin="0 15px 0 5px"
					>
						admin@newsite.kz
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="35%"
					display="flex"
					height="50px"
					lg-width="100%"
					lg-justify-content="center"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" lg-justify-content="center" />
					{"        "}
					<Icon
						category="io"
						icon={IoLogoVk}
						background="#4A76A8"
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-min-width="40px"
						sm-min-height="40px"
						sm-max-width="40px"
						sm-max-height="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="io"
						icon={IoLogoInstagram}
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						background="#fac305 linear-gradient(90deg,#ec1282 0%,rgba(0,0,0,0) 100%,rgba(0,0,0,0) 100%,transparent 100%) 0 0 no-repeat"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						sm-max-height="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="fa"
						icon={FaTelegramPlane}
						background="#2AA1DD "
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-max-height="40px"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="fa"
						icon={FaWhatsapp}
						background="#0DC143 "
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-max-height="40px"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						sm-display="flex"
						max-height="40px"
						max-width="40px"
						min-height="40px"
						min-width="40px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			background="rgba(197, 27, 172, 0.7)"
			position="fixed"
			display="flex"
			top="56px"
			nout-left="0px"
			nout-right="0px"
			nout-width="100%"
			lg-top="120px"
			lg-bottom="3760.753076923077px"
			lg-height="110.25992307692307px"
			sm-bottom="3708.77px"
			sm-height="75px"
			sm-top="215px"
			sm-position="static"
			sm-background="#121758"
		>
			<Override
				slot="SectionContent"
				width="100%"
				height="56px"
				justify-content="center"
				max-width="none"
				align-items="center"
				sm-width="50%"
			/>
			<Stack
				width="90%"
				align-items="center"
				justify-content="center"
				gap="--cmp-stack-gap-small"
				sm-width="100%"
				nout-align-items="center"
				md-flex-direction="column"
				lg-flex-direction="column"
			>
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					nout-width="100%"
					lg-width="90%"
					sm-width="100%"
					md-flex-direction="column"
					md-width="100%"
					lg-flex-direction="column"
					lg-margin="20px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						lg-justify-content="center"
						sm-justify-content="space-between"
						lg-flex-direction="column"
						md-flex-direction="row"
						md-justify-content="space-between"
					/>
					<Image
						width="135px"
						height="64px"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_Sv9TjK1s.png?v=2020-10-12T16:38:17.044Z"
						lg-display="flex"
						lg-min-height="64px"
					/>
					<Components.MobileMenu display="none" sm-display="flex" md-display="flex" />
					<Menu
						display="flex"
						font="700 17px --fontFamily-googleJura"
						letter-spacing="1.25px"
						sm-display="none"
						lg-font="700 16px --fontFamily-googleJura"
						nout-font="700 16px --fontFamily-googleJura"
						justify-content="center"
						lg-height="none"
						width="70%"
						lg-width="100%"
						md-display="none"
					>
						<Override slot="link-404" display="none" />
						<Override slot="item-404" display="none" />
						<Override
							slot="link"
							color="#000000"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
							active-color="#ffffff"
							active-text-decoration-line="underline"
						/>
						<Override slot="link-akcii">
							Акции
						</Override>
						<Override slot="link-active" color="#ffffff" text-decoration-line="underline" />
						<Override slot="item" min-width="auto" nout-padding="6px 10px 6px 10px" padding="6px 15px 6px 15px" />
						<Override slot="link-o-nas">
							О нас
						</Override>
					</Menu>
					<Button
						border-radius="150px"
						width="235px"
						height="47px"
						font="normal 700 17px/1.5 --fontFamily-googleJura"
						letter-spacing="1.25px"
						color="#707CB6 "
						background="#ffffff"
						hover-cursor="no-drop"
						border-style="outset"
						border-color="#ffffff"
						border-width="2px"
						hover-border-color="#000000"
						lg-display="none"
					>
						Заказать сайт
					</Button>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="100px 0 0px 0"
			background="url(https://img.youtube.com/vi/Ynh9rkHhxyQ/sddefault.jpg) 0% 0%/cover scroll"
			sm-align-items="center"
			sm-justify-content="center"
			nout-background="url(https://img.youtube.com/vi/Ynh9rkHhxyQ/sddefault.jpg) 0% 0/cover scroll"
			sm-background="url(https://img.youtube.com/vi/Ynh9rkHhxyQ/sddefault.jpg) 0% 0%/cover scroll"
		>
			<Override
				slot="SectionContent"
				width="100%"
				max-width="none"
				align-items="center"
				sm-justify-content="center"
			/>
			<StackItem
				width="100%"
				display="flex"
				margin="120px 0px 0px 0px"
				lg-margin="220px 0px 0px 0px"
				lg-flex-direction="row"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 0px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column"
					sm-flex-direction="column"
					sm-align-items="center"
				/>
				{"        "}
				<StackItem
					border-width="20px"
					border-style="solid"
					border-color="rgba(105, 105, 105, 0.5)"
					margin="0px 0px 50px 0px"
					lg-border-width="20px"
					lg-background="rgba(255, 255, 255, 0.7)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					sm-width="90%"
					background="rgba(255, 255, 255, 0.7)"
					width="50%"
					min-width="50%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						sm-flex-direction="column"
						sm-justify-content="center"
						sm-align-items="center"
					/>
					<Text
						font="normal 700 34px/1.5 --fontFamily-serifGeorgia"
						color="#000000"
						width="90%"
						md-text-align="center"
						lg-width="95%"
						md-width="90%"
						lg-font="normal 700 38px/1.5 --fontFamily-googleJura"
						md-font="normal 700 36px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 30px/1.5 --fontFamily-googleJura"
					>
						Вкусные акции на разработку сайта{"\n\n"}
					</Text>
					<Text
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="center"
						lg-width="95%"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						md-font="normal 700 26px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
					>
						В этом разделе у нас предоставлены интересные предложения на разработку вашего сайта, от 15% скидки до вечного хостинга для сайта{"\n\n"}
					</Text>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/8059fa2877880323aaf8249a5024b03e.png?v=2020-10-19T22:30:39.171Z"
					width="555px"
					height="561px"
					sm-width="90%"
					object-position="50% 100%"
					sm-margin="-40px 0px 0px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#f2f2f2" padding="0 0 0 0">
			<Override slot="SectionContent" width="100%" justify-content="center" md-width="80%" />
			<Text
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				color="#000000"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				text-shadow="1px 1px 2px #000"
				margin="40px 0px 0px 0px"
			>
				1. Вечный хостинг для вашего сайта{"\n\t\t\n\t\n\n\n\n"}
			</Text>
			<Text
				font="700 20px --fontFamily-googleJura"
				text-align="center"
				color="#252b69"
				lg-font="700 20px --fontFamily-googleJura"
				margin="10px 0px 40px 0px"
			>
				Получите безграничное пользование вашим сайтом сроком на 100 лет{"\n\t\t\t\t\t\n\n"}
			</Text>
		</Section>
		<Section background="#121212">
			<Override
				slot="SectionContent"
				width="100%"
				lg-align-items="center"
				nout-justify-content="center"
				nout-align-items="center"
			/>
			<Text
				font="700 44px --fontFamily-googleJura"
				text-align="center"
				color="#ffffff"
				margin="30px 0 50px 0"
				lg-font="700 40px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-width="90%"
				md-width="90%"
			>
				Вечный хостинг в цифрах{"\n\n"}
			</Text>
			<Stack
				lg-width="100%"
				lg-justify-content="center"
				margin="0 0 30px 0"
				sm-flex-direction="row"
				justify-content="center"
				lg-flex-direction="row"
				lg-align-items="center"
				width="100%"
				flex-direction="row"
				align-items="center"
				sm-width="90%"
			>
				{"    "}
				<StackItem width="21%" md-width="40%" sm-width="90%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						flex-direction="column"
						align-items="center"
					/>
					<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_HsVhAXkG.png?v=2020-10-19T23:12:15.961Z" width="72px" height="72px" text-align="left" />
					<Text
						font="normal 400 18px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						sm-width="60%"
					>
						42+{"\n\n"}
					</Text>
					<Text
						font="normal 300 16px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						margin="-20px 0px 0px 0px"
						sm-width="60%"
					>
						Разработанных нами сайта подключили вечный хостинг{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="5%" height="60%" md-height="30%" sm-display="none">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						sm-flex-direction="column"
						sm-align-items="center"
						flex-direction="column"
						align-items="center"
						md-justify-content="flex-start"
						md-align-items="center"
					/>
					<Hr
						background="#ffffff"
						width="600%"
						margin="0 0 0 0px"
						height="0px"
						md-width="1000%"
						md-margin="0px 20px 0px 0px"
					/>
				</StackItem>
				<StackItem width="21%" md-width="40%" sm-width="90%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						flex-direction="column"
						align-items="center"
					/>
					<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_7jEt9RGe.png?v=2020-10-19T23:18:32.661Z" width="72px" height="72px" text-align="left" />
					<Text
						font="normal 400 18px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						sm-width="60%"
					>
						7{"\n\n"}
					</Text>
					<Text
						font="normal 300 16px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						margin="-20px 0px 0px 0px"
						sm-width="60%"
					>
						Клиентов подключили вечный хостинг к нескольким сайтам{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="5%" height="60%" md-display="none">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						sm-flex-direction="column"
						sm-align-items="center"
						flex-direction="column"
						align-items="center"
					/>
					<Hr background="#ffffff" width="600%" margin="0 0 0 0px" height="0px" />
				</StackItem>
				<StackItem width="21%" md-width="90%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						flex-direction="column"
						align-items="center"
					/>
					<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_12BHbrnk.png?v=2020-10-19T23:18:45.718Z" width="72px" height="72px" text-align="left" />
					<Text
						font="normal 400 18px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						sm-width="60%"
					>
						99${"\n\n"}
					</Text>
					<Text
						font="normal 300 16px/1.5 --fontFamily-googleJura"
						text-align="center"
						width="100%"
						color="#ffffff"
						margin="-20px 0px 0px 0px"
						md-width="40%"
						sm-width="60%"
					>
						Стоимость вечного хостинга, для одного вашего сайта{"\n\n"}
					</Text>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0 0 0 0" background="#f2f2f2" nout-align-items="center" nout-justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				justify-content="center"
				md-width="80%"
				align-items="center"
			/>
			<Text
				font="700 30px --fontFamily-googleJura"
				text-align="center"
				color="#000000"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				margin="40px 0px 0px 0px"
				width="100%"
			>
				Подробнее о вечном хостинге{"\n\n"}
			</Text>
			<StackItem width="90%" margin="30px 0px 30px 0px">
				<Override slot="StackItemContent" justify-content="center" flex-direction="column" align-items="center" />
				<Text
					font="700 20px --fontFamily-googleJura"
					text-align="left"
					color="#252b69"
					width="90%"
					margin="0px 1 1 1"
					nout-width="90%"
					lg-width="100%"
					lg-font="700 18px --fontFamily-googleJura"
					md-font="700 16px --fontFamily-googleJura"
				>
					Во-первых. Вы получаете возможность экономить на своем сайте приличную сумму денег. 
В среднем ~50$ / год{"\n\n"}
				</Text>
				<Text
					font="700 20px --fontFamily-googleJura"
					text-align="left"
					color="#252b69"
					width="90%"
					margin="0px 1 1 1"
					nout-width="90%"
					lg-width="100%"
					lg-font="700 18px --fontFamily-googleJura"
					md-font="700 16px --fontFamily-googleJura"
				>
					Во-вторых. Хостинг предоставляется в партнерстве с компанией uKit Group, которая оказывает услуги хостинга с 2005 года и у которых обслуживается уже более 3,5 млн. сайтов{"\n\n"}
				</Text>
				<Text
					font="700 20px --fontFamily-googleJura"
					text-align="left"
					color="#252b69"
					width="90%"
					margin="0px 1 1 1"
					nout-width="90%"
					lg-width="100%"
					lg-font="700 18px --fontFamily-googleJura"
					md-font="700 16px --fontFamily-googleJura"
				>
					В-третьих. Ваш вечный хостинг можно будет перенести на новый сайт, если Вы смените сферу деятельности{"\n\n"}
				</Text>
			</StackItem>
			<StackItem margin="20px 2 40px 2" nout-width="90%" width="90%">
				<Override slot="StackItemContent" justify-content="center" margin="0 0 30px 0" />
				<Button
					width="430px"
					height="60px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#2F9DB4 0,#3AB7B8 37.47%,#76DBC7 100%) !important"
					margin="0 0 20px 0"
					hover-box-shadow="0 0 15px 0 #22a5ff"
					sm-width="90%"
					sm-height="60px"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
				>
					заказать разработку сайта и вечный хостинг
				</Button>
			</StackItem>
		</Section>
		<Section padding="0 0 0 0" background="#ffffff" nout-align-items="center" nout-justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				justify-content="center"
				md-width="90%"
				align-items="center"
			/>
			<Text
				font="700 44px --fontFamily-googleJura"
				text-align="center"
				color="#000000"
				margin="60px 0 20px 0"
				lg-font="700 40px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-width="90%"
				width="90%"
				sm-font="700 30px --fontFamily-googleJura"
			>
				2. Брифинг на разработку{"\n\n"}
			</Text>
			<Text
				font="700 30px --fontFamily-googleJura"
				text-align="center"
				color="#000000"
				lg-font="700 24px --fontFamily-googleJura"
				md-font="700 24px --fontFamily-googleJura"
				sm-width="90%"
				width="90%"
				sm-font="700 20px --fontFamily-googleJura"
			>
				Заполните наш полный брифинг на разработку сайта и получить примерную стоимость вашего заказа и увеличьте скидку на 15%{"\n\n"}
			</Text>
			<Text
				font="700 17px --fontFamily-googleJura"
				text-align="center"
				color="#252b69"
				lg-font="700 15px --fontFamily-googleJura"
				md-font="700 15px --fontFamily-googleJura"
				sm-width="90%"
				width="90%"
				margin="0 0 50px 0"
			>
				(заполнить бриф, вы можете процентов на 70%, чтобы получить скидку){"\n\n"}
			</Text>
			<StackItem margin="20px 2 40px 2" nout-width="90%" width="90%">
				<Override slot="StackItemContent" justify-content="center" margin="0 0 30px 0" />
				<Button
					width="430px"
					height="60px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#FF8177 0,#CF556C 37.47%,#B12A5B 100%) !important"
					margin="0 0 30px 0"
					hover-box-shadow="0 0 15px 0 #ff2263"
					sm-height="60px"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
					sm-width="90%"
				>
					заказать разработку сайта и вечный хостинг
				</Button>
			</StackItem>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_cGxZspFm.png?v=2020-10-18T11:36:05.781Z) top center scroll,linear-gradient(315deg,#003b7d 0,#C51BAC 100%)" padding="30px 0 10px 0">
			<Override slot="SectionContent" width="100%" justify-content="center" sm-align-items="center" />
			<Text
				font="700 44px --fontFamily-googleJura"
				text-align="center"
				color="#ffffff"
				margin="30px 0 50px 0"
				lg-font="700 40px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-width="90%"
				width="100%"
			>
				Стоит ли заказывать у нас?
			</Text>
			<Hr
				width="100%"
				height="0.75px"
				background="#0072ff"
				border-color="#0082ff"
				border-style="none"
				margin="0px 0px 0p 0px"
			/>
			<StackItem width="100%">
				<Override slot="StackItemContent" justify-content="center" />
				<Text
					font="700 20px --fontFamily-googleJura"
					text-align="center"
					color="#ffffff"
					width="90%"
					margin="50px 1 0 1"
					lg-font="700 18px --fontFamily-googleJura"
					md-font="700 16px --fontFamily-googleJura"
				>
					Если у вас остались сомнения, то посмотрите наши работы в разделе "
					<Link
						href="https://newsite.kz/portfolio_web_studii"
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Портфолио
					</Link>
					", так как портфолио это зеркало Web-студии и если вам там понравятся наши работы, то наверняка вам и понравится наш разработанный сайт для вас.
					<br />
					Также рекомендуем вам прочитать отзывы о нас в специальном разделе
				</Text>
			</StackItem>
			<Hr
				width="100%"
				background="#0072ff"
				border-color="#0082ff"
				border-style="none"
				border-width="1px 0 0 0"
			/>
			<StackItem margin="10px 0px 10px 0px">
				<Override
					slot="StackItemContent"
					justify-content="space-evenly"
					margin="0 0 30px 0"
					sm-flex-direction="column"
					sm-align-items="center"
				/>
				<Button
					width="155px"
					height="58px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#FF8177 0,#CF556C 37.47%,#B12A5B 100%) !important"
					margin="0 0 20px 0"
					hover-box-shadow="0 0 15px 0 #ff2263"
					sm-height="45px"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
				>
					наши работы
				</Button>
				<Button
					width="185px"
					height="58px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#2F9DB4 0,#3AB7B8 37.47%,#76DBC7 100%) !important"
					margin="0 0 20px 0"
					hover-box-shadow="0 0 15px 0 #22a5ff"
					sm-height="45px"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
				>
					оформить заказ
				</Button>
			</StackItem>
		</Section>
		<Section background="#000000">
			<Override slot="SectionContent" width="100%" justify-content="center" flex-direction="column" />
			<Stack justify-content="center">
				<StackItem width="100%" display="flex" height="50px" margin="20px 0px 0px 0px">
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
					{"        "}
					<Icon
						category="io"
						icon={IoLogoVk}
						background="#4A76A8"
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-min-width="40px"
						sm-min-height="40px"
						sm-max-width="40px"
						sm-max-height="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="io"
						icon={IoLogoInstagram}
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						background="#fac305 linear-gradient(90deg,#ec1282 0%,rgba(0,0,0,0) 100%,rgba(0,0,0,0) 100%,transparent 100%) 0 0 no-repeat"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						sm-max-height="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="fa"
						icon={FaTelegramPlane}
						background="#2AA1DD "
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-max-height="40px"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						max-height="40px"
						min-height="40px"
						min-width="40px"
						max-width="40px"
					/>
					<Icon
						category="fa"
						icon={FaWhatsapp}
						background="#0DC143 "
						width="40px"
						height="40px"
						display="flex"
						color="#ffffff"
						hover-color="#000000"
						border-radius="50px"
						margin="0 5px 0 5px"
						sm-max-height="40px"
						sm-max-width="40px"
						sm-min-height="40px"
						sm-min-width="40px"
						sm-display="flex"
						max-height="40px"
						max-width="40px"
						min-height="40px"
						min-width="40px"
					/>
					{"    "}
				</StackItem>
				<StackItem>
					<Override slot="StackItemContent" justify-content="center" />
					<Text
						font="400 18px --fontFamily-googleFiraSansCondensed"
						text-align="center"
						color="#ffffff"
						width="100%"
						margin="50px 1 0 1"
						lg-font="400 16px --fontFamily-googleFiraSansCondensed"
						lg-width="90%"
						sm-font="400 14px --fontFamily-googleFiraSansCondensed"
					>
						© 2015 - 2020 | Все права защищены, фирма зарегистрирована на территории Казахстана и выполняет заказы по всему миру{"\n\t\t\t\t\t\n            "}
					</Text>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
	</Theme>;
});