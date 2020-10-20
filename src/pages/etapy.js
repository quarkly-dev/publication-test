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
				Этапы создания сайта | NewSite
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/favicons.png?v=2020-10-20T01:02:25.576Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#FF7F62"
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
			background="rgba(255, 127, 98, 0.7)"
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
						color="#000000"
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
		<Section padding="100px 0 0px 0" background="url(https://newsite.kz/__scale/uploads/s/k/h/k/khkzeuuy5gmd/img/full_Sz6scQGR.png?quality=60&width=1500&webp=1) center center/cover fixed">
			<Override slot="SectionContent" width="100%" max-width="none" align-items="center" />
			<Stack width="90%" lg-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" width="90%" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Text
						font="normal 700 60px/1.5 --fontFamily-serifGeorgia"
						width="90%"
						margin="250px 0px 250px 0px"
						lg-margin="250px 0px 50px 0px"
						lg-text-align="center"
						nout-width="100%"
						sm-font="normal 700 45px/1.5 --fontFamily-serifGeorgia"
						sm-margin="0px 0px 50px 0px"
					>
						Этапы создания
вашего сайта{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" align-items="flex-end" />
					{"        "}
					<Image
						width="100%"
						height="100%"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/6236f542818e5326b1de09ba4e0b39ee.png?v=2020-10-19T10:53:11.759Z"
						object-fit="contain"
						object-position="50% 100%"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Override slot="SectionContent" width="100%" lg-align-items="center" />
			<Text
				font="700 44px --fontFamily-googleJura"
				text-align="center"
				color="#121212"
				margin="30px 0 30px 0"
				lg-font="700 40px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				lg-width="90%"
			>
				Здесь вы можете увидеть в каком порядке оказывается услуга по создания сайта{"\n\t\t\t\t\t\n\n"}
			</Text>
		</Section>
		<Section background="#f7f7f7">
			<Override
				slot="SectionContent"
				width="100%"
				lg-align-items="center"
				nout-justify-content="center"
				nout-align-items="center"
			/>
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
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-margin="0 0px 0px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Выбор необходимой услуги{"\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_mUK8estO.png?v=2020-10-19T11:35:30.078Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Вы выбираете необходимую услугу из списка услуг нашей студии.{"\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-70px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="120px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column-reverse"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
							sm-align-items="center"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Вам необходимо будет оставить либо только ваши контактные данные в 
специальной форме в меню "Заказать сайт", либо заполнить полный брифинг 
на разработку сайта:{"\n\n"}
						</Text>
						<StackItem margin="0 0 20px 0" width="95%">
							<Override slot="StackItemContent" sm-justify-content="center" />
							<Button
								border-color="rgb(255, 142, 0)"
								border-style="solid"
								border-width="2px"
								font="normal 400 15px/1.5 --fontFamily-sansHelvetica"
								text-transform="uppercase"
								background="#ffffff"
								color="#000000"
								box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
								hover-box-shadow="6px 6px 20px -1px rgba(0, 0, 0, 0.12)"
								hover-font="normal 400 15px/1.5 --fontFamily-sansHelvetica"
							>
								Заказать разработку
							</Button>
						</StackItem>
					</StackItem>
					<StackItem width="10%" display="flex" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_zxDhvQGo.png?v=2020-10-19T12:13:47.078Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-width="80%"
						sm-margin="30px 0px 0px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Вы заполняете анкету и оставляете заявку{"\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-120px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="160px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-margin="30px 0px 0px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Мы связываемся с вами и обговариваем детали{"\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_fCCsqwA8.png?v=2020-10-19T12:19:42.206Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Мы связываемся с вами любым удобным для вас способом, будь то 
мессенджеры (Whats'app, Telegram, Viber) или через социальные сети, 
обговариваем детали работы и получаем от вас дополнительную информацию 
для разработки сайта{"\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-120px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="140px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column-reverse"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							В течение 3-х рабочих дней предоставляем первоначальный дизайн вашего 
сайта, вносим все правки, которые укажите вы и после этого начинаем 
заполнять сайт вашей информацией (товарами, услугами, контактными 
данными и прочее){"\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_FLgwAKHa.png?v=2020-10-19T12:24:00.362Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-width="80%"
						sm-margin="30px 0px 0px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Приступаем к разработке макета{"\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-105px 5px -70px 0px" lg-display="none">
					<Hr width="3px" height="110px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-margin="30px 0px 0px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Получаем предоплату{"\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_eNxqTlfZ.png?v=2020-10-19T12:25:43.770Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-margin="0px 0px 30px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							После согласования макета получаем предоплату в размере 20-30% от стоимости заказа.{"\n\t\t\t\t\n\t\t\t\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-90px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="105px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column-reverse"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-margin="0px 0px 30px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Полностью заполняем сайт всей необходимой для вас информацией и вносим 
последние изменения, которые согласовываем с вами, а также проверяем 
работу сайта на различных устройствах{"\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_o0nQfpO0.png?v=2020-10-19T12:27:01.885Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-margin="30px 0px 0px 0px"
						sm-width="80%"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Финальный этап разработки{"\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-120px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="120px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-width="80%"
						sm-margin="30px 0px 0px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Прием заказа и передача сайта под Ваше управление{"\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\n\n"}
						</Text>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_Z7bZ3pYY.png?v=2020-10-19T12:28:24.527Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Передаем все права пользования сайтом в ваш аккаунт, вместе с хостингом и
 доменом и обучаем Вас размещать какую-либо информацию на сайте (статьи,
 товары, услуги и т.п.){"\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				<StackItem width="100%" margin="-120px 5px -120px 0px" lg-display="none">
					<Hr width="3px" height="120px" background="#000000" />
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						justify-content="center"
						width="100%"
						sm-flex-direction="column-reverse"
						sm-align-items="center"
					/>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						box-shadow="0 3px 0 rgba(215, 228, 237, 0.72), 0px 16px 20px -1px rgba(215, 228, 237, 0.67)"
						sm-width="80%"
						sm-margin="0px 0px 30px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
							sm-align-items="center"
						/>
						<Text font="normal 300 16px/1.5 --fontFamily-googleJura" text-align="left" width="95%">
							Вы оплачиваете работу полностью и оставляете нам отзыв и рекомендуем наши услуги своим друзьям :){"\n\n"}
						</Text>
						<StackItem margin="0 0 20px 0" width="95%">
							<Override slot="StackItemContent" sm-justify-content="center" />
							<Button
								border-color="rgb(255, 142, 0)"
								border-style="solid"
								border-width="2px"
								font="normal 400 15px/1.5 --fontFamily-sansHelvetica"
								text-transform="uppercase"
								background="#ffffff"
								color="#000000"
								box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
								hover-box-shadow="6px 6px 20px -1px rgba(0, 0, 0, 0.12)"
								hover-font="normal 400 15px/1.5 --fontFamily-sansHelvetica"
							>
								Заказать разработку
							</Button>
						</StackItem>
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" lg-display="none">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						<StackItem box-shadow="0 0 0 7px #fff, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 6px rgba(0, 0, 0, .05)" width="80px" height="80px" border-radius="11px">
							<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
							<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_R0B7AsRH.png?v=2020-10-19T12:30:28.062Z" width="72px" height="72px" text-align="left" />
						</StackItem>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						background="#ffffff"
						border-radius="11px"
						margin="30px 0px 30px 0px"
						hover-box-shadow="0 3px 0 rgba(215, 228, 237, 0.72)"
						box-shadow="6px 6px 10px -1px rgba(0, 0, 0, 0.12)"
						sm-width="80%"
						sm-margin="30px 0px 0px 0px"
					>
						<Override
							slot="StackItemContent"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							width="100%"
						/>
						<Text
							font="normal 400 24px/1.5 --fontFamily-sansHelvetica"
							text-align="center"
							text-transform="uppercase"
							hover-color="#ff7b00"
							hover-font="normal 400 26px/1.5 --fontFamily-sansHelvetica"
							width="95%"
						>
							Вы оплачиваете и оставляете отзыв (по желанию){"\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\n\n"}
						</Text>
					</StackItem>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_cGxZspFm.png?v=2020-10-18T11:36:05.781Z) top center scroll,linear-gradient(315deg,#FF7F62 0,#262af3 100%)" padding="30px 0 10px 0">
			<Override slot="SectionContent" width="100%" justify-content="center" />
			<Text
				font="700 44px --fontFamily-googleJura"
				text-align="center"
				color="#ffffff"
				margin="30px 0 50px 0"
				lg-font="700 40px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-margin="30px 0 0px 0"
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