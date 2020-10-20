import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Image, Button, Text } from "@quarkly/widgets";
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
				Портфолио нашей Web-студии | NewSite
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/favicons.png?v=2020-10-20T01:02:25.576Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#000749"
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
			background="rgba(0, 7, 73, 0.7)"
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
							color="#707CB6 "
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
		<Section padding="100px 0 100px 0" background="url(https://newsite.kz/uploads/s/k/h/k/khkzeuuy5gmd/img/full_7NM3Pxd6.png) top center/cover scroll" sm-align-items="center" sm-justify-content="center">
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
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/faa6c0bc9e14973a973389677a45f127.png?v=2020-10-19T17:31:48.223Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-200px 0px 0px 0px"
				/>
				<StackItem
					background="rgba(7, 6, 74, 0.69)"
					box-shadow="7px 6px 4px 0 rgba(0,0,0,.35)"
					border-width="20px"
					border-style="solid"
					border-color="#ffffff"
					width="586px"
					min-width="586px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					sm-width="90%"
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
						font="normal 700 44px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="center"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 38px/1.5 --fontFamily-googleJura"
						md-font="normal 700 36px/1.5 --fontFamily-googleJura"
					>
						Наше портфолио{"\n\n"}
					</Text>
					<Text
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="center"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						md-font="normal 700 26px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
					>
						Если вам понравятся наши работы на этой странице,  то рекомендуем вам незамедлительно написать нам и мы для вас подготовим ни чуть не хуже дизайн вашего сайта, а может быть даже лучше, так как наш навык растет с каждой выполненой работой{"\n\n"}
					</Text>
					<Button
						width="440px"
						height="56px"
						border-radius="50px"
						font="normal 600 16px/1 --fontFamily-googleJura"
						text-transform="uppercase"
						background="linear-gradient(90deg,#2F9DB4 0,#3AB7B8 37.47%,#76DBC7 100%) !important"
						hover-box-shadow="0 0 15px 0 #22a5ff"
						sm-width="90%"
						sm-margin="30px 50px -20px 50px"
						margin="10px 10px 30px 10px"
						display="block"
						sm-display="block"
						lg-margin="50px 10px 0px 10px"
					>
						Рассчитать стоимость сайта и оформить заказ
					</Button>
				</StackItem>
				{"    "}
			</StackItem>
		</Section>
		<Section lg-justify-content="center" padding="0 0 0 0" margin="0px 0 0px 0">
			<Override
				slot="SectionContent"
				width="100%"
				lg-align-items="center"
				nout-justify-content="center"
				nout-align-items="center"
				align-items="center"
				justify-content="center"
			/>
			<Text
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				text-shadow="1px 1px 2px #000000"
				color="#252b69"
				margin="50px 0 0px 0"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 36px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				md-width="90%"
				nout-width="90%"
			>
				Раздел с нашими выполненными работами{"\n\t\t\n\t\n\n\n\n"}
			</Text>
			<Text
				font="700 20px --fontFamily-googleJura"
				text-align="center"
				color="#252b69"
				margin="0px 0 50px 0"
				lg-font="700 18px --fontFamily-googleJura"
				md-font="700 18px --fontFamily-googleJura"
				sm-font="700 20px --fontFamily-googleJura"
				md-width="90%"
				sm-margin="40px 0px 50px 0px"
			>
				В этом разделе вы можете увидеть наши работы разных тематик{"\n\t\t\t\t\t\n\n"}
			</Text>
		</Section>
		<Section background="#126fcb" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Интернет-магазин MAD-style{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Интернет-магазин эксклюзивных акссесуаров, где художники сами вручную рисуют эскизы для своих товаров (кошельков, сумок и одежды){"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 2 000{"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t"}
								<br />
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								товаров размещено на сайте{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 15{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								категорий товаров на сайте{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/137c183889799bfd1b8ebea1bdd23336.png?v=2020-10-19T19:09:08.337Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0 -100px 0"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#403192" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Онлайн кинотеатр Filmi{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Онлайн кинотеатр на котором находится большая база фильмов, сериалов и мультфильмов, которые возможно просматривать с любых устройств{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 30 000{"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								посетителей заходит на сайт ежемесячно{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 150 000{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								страниц посещаются ежемесячно{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/e68237557b0e606671eeacbd0aa171b6.png?v=2020-10-19T20:10:57.856Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#640a64" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Клуб пользователей uKit{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Самая большая площадка для пользователей визуального конструктора сайтов uKit, в котором имеется большое количество лайфхаков{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 40
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								решений было разработано{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 15{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								шаблонов продаются для uKit{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_IMJ9SGeA.png?v=2020-10-19T20:12:29.639Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#e94999" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Тур "Девичник" в Турции{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Программа тура "Девичника" в Турции, которая проходила летом 2019 года, тур был распланирован на каждый день по таймлайну{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 1 100{"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								посетителей зашло на сайт{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 3{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								тура провели за лето{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_tXF3ajzy.png?v=2020-10-19T20:13:48.569Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#e12229" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Шаблон для сайта автозапчастей{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Разработали готовый шаблон на продажу для сайтов доставки автозапчастей, масел и прочего, который продается на нашей платформе{" "}
						<Link href="http://ukit.top/" color="#ffffff">
							uKit.top
						</Link>
						{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 13
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								установок этого шаблона на свои сайты{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 16{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								кружек кофе выпито при разработке{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_w48FUBXJ.png?v=2020-10-19T20:15:42.042Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#00b875" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Старый дизайн сайта NewSite.kz{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Это старый дизайн нашей веб-студии, который ни чем не хуже нынешнего, но он нам настолько надоел, что мы решили сделать новый сайт.{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 700{"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								заявок мы получили с этого сайта{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 4{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								года просуществовал этот сайт{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_spkgAeBE.png?v=2020-10-19T20:17:01.532Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#126fcb" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Кинопортал Kinox{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Онлайн кинопортал фильмов, сериалов и мультфильмов, где предоставлено более 20 000 материалов и страниц сайта{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 300{"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								категорий и жанров на сайте{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 500{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								персональных страниц актеров{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_xvtnwIWa.png?v=2020-10-19T20:18:53.063Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#ffdd61" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Show Makers{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Организация уникальных шоу-номеров для мероприятий по всей России и СНГ{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 130
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								шоу было заказано через сайта{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 11{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								дней было потрачено на разработку сайта{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-width="1px"
							border-style="solid"
							border-color="#524f4e"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_49fK98oG.png?v=2020-10-19T20:22:17.512Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#f7f7f7" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						БКК ПРАВОВЕД{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Весь спектр юридических услуг и  консультации  в г.Электросталь по различным отраслям  права для граждан, военнослужащих.{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 30
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								юридических услуг размещено на сайте{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 7{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								дней было потрачено на разработку сайта{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_hAW2k4GQ.png?v=2020-10-19T20:23:56.109Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#d9efff" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Шаблон для сайта стоматологии{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#000000"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Разработали готовый шаблон на продажу для сайтов стоматологий, который продается на нашей платформе{" "}
						<Link href="http://uKit.top" color="#000000">
							uKit.top
						</Link>
						{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 10
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								установок этого шаблона на свои сайты{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 17{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#000000"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								кружек кофе выпито при разработке{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_rW27Mqma.png?v=2020-10-19T20:26:33.872Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#21c7fe" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Агенство недвижимости в Турции{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Онлайн агентство оказывающее широкий спектр услуг в сфере продажи недвижимости в Антальи, Стамбуле и Алании{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 80
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								объектов на продажу есть на сайте{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 4{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								раза меняли цветовую схему для сайта{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_qOYdAQjG.png?v=2020-10-19T20:27:45.285Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
			</StackItem>
		</Section>
		<Section background="#e12229" sm-align-items="center" sm-justify-content="center" padding="0 0 0 0">
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
				margin="0px 0px 0px 0px"
				lg-margin="100px 0px 100px 0px"
				sm-align-items="center"
				sm-justify-content="center"
				nout-width="95%"
				sm-margin="0px 0px 100px 0px"
			>
				<Override
					slot="StackItemContent"
					justify-content="center"
					align-items="center"
					lg-flex-direction="column-reverse"
					sm-flex-direction="column-reverse"
				/>
				{"        "}
				<StackItem
					min-width="620px"
					margin="0px 0px 0px 0px"
					lg-border-width="0px"
					lg-background="rgba(7, 6, 74, 0)"
					lg-box-shadow="7px 6px 4px 0 rgba(0, 0, 0, 0)"
					lg-width="90%"
					sm-min-width="90%"
					width="620px"
					md-width="100%"
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
						font="normal 700 30px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						lg-width="680px"
						md-width="90%"
						lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 24px/1.5 --fontFamily-googleJura"
					>
						Шаблон для доставки еды{"\n\n"}
					</Text>
					<Text
						font="normal 700 20px/1.5 --fontFamily-googleJura"
						color="#ffffff"
						width="90%"
						md-text-align="left"
						md-width="90%"
						lg-width="680px"
						lg-font="normal 700 18px/1.5 --fontFamily-googleJura"
						sm-font="normal 700 16px/1.5 --fontFamily-googleJura"
					>
						Разработали готовый шаблон на продажу для сайтов доставки еды, суши, пиццы и прочее, который продается на нашей платформе{" "}
						<Link href="http://ukit.top/" color="#ffffff">
							uKit.top
						</Link>
						{"\n\n"}
					</Text>
					<Stack width="95%" lg-justify-content="center">
						{"    "}
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 7
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								установок этого шаблона на свои сайты{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex" lg-width="40%" sm-width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 700 31px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								lg-font="normal 700 28px/1.5 --fontFamily-googleJura"
								sm-font="normal 700 20px/1.5 --fontFamily-googleJura"
							>
								&gt; 8{"\n\n"}
							</Text>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleJura"
								color="#ffffff"
								width="90%"
								md-text-align="left"
								margin="-20px 0px 0px 0px"
								lg-font="normal 600 18px/1.5 --fontFamily-googleJura"
								sm-font="normal 600 15px/1.5 --fontFamily-googleJura"
							>
								кружек кофе выпито при разработке{"\n\n"}
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					<StackItem width="90%" sm-width="100%">
						<Override slot="StackItemContent" lg-justify-content="center" />
						<Button
							width="240px"
							height="51px"
							border-radius="50px"
							font="normal 600 11px/1 --fontFamily-googleMontserrat"
							text-transform="uppercase"
							hover-box-shadow="0 0 15px 0 #22a5ff"
							sm-width="90%"
							sm-margin="30px 50px -30px 50px"
							display="block"
							sm-display="block"
							color="#524f4e"
							background="#ffffff"
							box-shadow="0 8px 15px rgba(0,0,0,.1)"
							margin="30px 0px 0px 0px"
							hover-background="#252b69"
							hover-color="#ffffff"
							lg-width="80%"
							border-color="#524f4e"
							border-width="1px"
							border-style="solid"
						>
							посмотреть работу
						</Button>
					</StackItem>
				</StackItem>
				<Image
					src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_ORcXckgH.png?v=2020-10-19T20:30:29.017Z"
					width="555px"
					height="561px"
					sm-width="100%"
					sm-margin="-100px 0px -100px 0px"
				/>
				{"    "}
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