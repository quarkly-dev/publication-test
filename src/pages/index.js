import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Image, Button, Text, Box, Hr } from "@quarkly/widgets";
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
				Создание сайтов - Web Студия NewSite
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/favicons.png?v=2020-10-20T01:02:25.576Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#2F3573"
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
			background="rgba(47, 53, 115, 0.7)"
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
		<Section padding="100px 0 100px 0" background="url(https://newsite.kz/uploads/s/k/h/k/khkzeuuy5gmd/img/full_l4LKyAUb.png) center center/cover scroll">
			<Override slot="SectionContent" width="100%" max-width="none" align-items="center" />
			<Section padding="0 0 0 0">
				<Override
					slot="SectionContent"
					align-items="center"
					width="90%"
					max-width="None"
					justify-content="flex-end"
					nout-width="100%"
				/>
				<Section
					align-items="center"
					justify-content="center"
					padding="90px 0 24px 0"
					nout-width="100%"
					nout-justify-content="center"
					lg-padding="250px 0 24px 0"
					margin="50px 0 0 0"
					sm-margin="0px 0 0 0"
					sm-padding="0px 0 0px 0"
				>
					<Components.Stroka />
					<Components.EmbedHTML
						font="normal 600 47px/1.2 --fontFamily-googleJura"
						color="#ffffff"
						nout-font="normal 600 36px/1.2 --fontFamily-googleJura"
						lg-font="normal 600 30px/1.2 --fontFamily-googleJura"
						sm-font="normal 600 24px/1.2 --fontFamily-googleJura"
					/>
				</Section>
				<Text
					color="#ffffff"
					font="700 30px --fontFamily-googleJura"
					text-align="center"
					nout-width="94%"
					lg-font="700 26px --fontFamily-googleJura"
					md-font="700 24px --fontFamily-googleJura"
					sm-font="700 20px --fontFamily-googleJura"
				>
					Мы одна из культовых Веб-Студий и нам более 4-х лет и поэтому у нас такие низкие цены с сравнением нынешних цен на рынке услуг в данной сфере, так как мы оптимизировали большую часть процессов.
				</Text>
				<Text
					color="#ffffff"
					font="700 30px --fontFamily-googleJura"
					text-align="center"
					hover-text-decoration-line="underline"
					nout-width="94%"
					lg-font="700 26px --fontFamily-googleJura"
					md-font="700 24px --fontFamily-googleJura"
					sm-font="700 20px --fontFamily-googleJura"
				>
					Мы создаем сайты любой сложности от сайтов визиток до крупных 
интернет-магазинов и порталов, в этом вы можете убедиться сами зайдя в 
наше "Портфолио"{"\n\n"}
				</Text>
				<Button
					width="440px"
					height="56px"
					border-radius="50px"
					font="normal 600 16px/1 --fontFamily-googleJura"
					text-transform="uppercase"
					margin="50px"
					background="linear-gradient(90deg,#2F9DB4 0,#3AB7B8 37.47%,#76DBC7 100%) !important"
					hover-box-shadow="0 0 15px 0 #22a5ff"
					sm-width="90%"
					sm-margin="30px 50px 30px 50px"
				>
					Рассчитать стоимость сайта и оформить заказ
				</Button>
			</Section>
		</Section>
		<Section lg-justify-content="center" padding="0 0 0 0" margin="50px 0 50px 0">
			<Override slot="SectionContent" width="100%" lg-align-items="center" />
			<Text
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				text-shadow="1px 1px 2px #000000"
				color="#121212"
				margin="30px 0 30px 0"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				sm-width="90%"
			>
				Создание сайтов на заказ{"\n\t\t\n\t\n\n\n\n"}
			</Text>
			<Stack lg-width="100%" lg-justify-content="center" margin="0 0 30px 0" sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<StackItem width="95%">
						<Override
							slot="StackItemContent"
							box-shadow="0 10px 10px 0 rgba(0, 0, 2, 0.05)"
							background="#ffffff"
							justify-content="center"
							flex-direction="column"
							align-items="center"
							sm-align-items="center"
						/>
						<Text font="700 22px --fontFamily-googleJura" margin="30px 1 1 1" lg-text-align="center" sm-font="700 18px --fontFamily-googleJura">
							Сайт-визитка или лендинг{"\n\t\t\t\n\n"}
						</Text>
						<Stack flex-direction="row" justify-content="center" width="90%">
							{"    "}
							<StackItem width="40%" display="flex" justify-content="flex-end" md-width="50%">
								<Override slot="StackItemContent" justify-content="flex-end" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									Цена: 79$
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" justify-content="flex-start" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									text-decoration-line="line-through"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									120$
								</Text>
								{"    "}
							</StackItem>
							<Text font="normal 300 14px/1.5 --fontFamily-googleRoboto" text-align="center">
								Одностраничный яркий, оригинальный рекламный сайт, направленный на продвижение вашей персоны или какого либо определенного товара.
							</Text>
							<StackItem>
								<Override slot="StackItemContent" sm-align-items="center" sm-justify-content="center" />
								<Button
									margin="0 0 30px 0"
									width="143px"
									height="38px"
									text-transform="uppercase"
									color="#ffffff"
									font="normal 300 16px/1.5 --fontFamily-googleRoboto"
									text-align="center"
									hover-box-shadow="0 4px 7px 1px rgba(52, 18, 117, 0.2)"
									hover-background="#ff0003"
									sm-width="100%"
									sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
									sm-padding="5px 5px 5px 5px"
								>
									подробнее
								</Button>
							</StackItem>
							{"    "}
						</Stack>
					</StackItem>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<StackItem width="95%">
						<Override
							slot="StackItemContent"
							box-shadow="0 10px 10px 0 rgba(0, 0, 2, 0.05)"
							background="#ffffff"
							justify-content="center"
							flex-direction="column"
							align-items="center"
						/>
						<Text font="700 22px --fontFamily-googleJura" margin="30px 1 1 1" lg-text-align="center" sm-font="700 18px --fontFamily-googleJura">
							Бизнес-сайт, каталог, блог или форум{"\n\t\t\t\n\n"}
						</Text>
						<Stack flex-direction="row" justify-content="center" width="90%">
							{"    "}
							<StackItem width="40%" display="flex" justify-content="flex-end" md-width="50%">
								<Override slot="StackItemContent" justify-content="flex-end" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									Цена: 129$
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" justify-content="flex-start" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									text-decoration-line="line-through"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									150$
								</Text>
								{"    "}
							</StackItem>
							<Text font="normal 300 14px/1.5 --fontFamily-googleRoboto" text-align="center">
								Вы получите презентабельный ресурс, формирующий репутацию компании и выгодно представляющий ее услуги.{"\n\n"}
							</Text>
							<StackItem>
								<Override slot="StackItemContent" sm-justify-content="center" />
								<Button
									margin="0 0 30px 0"
									width="143px"
									height="38px"
									text-transform="uppercase"
									color="#ffffff"
									font="normal 300 16px/1.5 --fontFamily-googleRoboto"
									text-align="center"
									hover-box-shadow="0 4px 7px 1px rgba(52, 18, 117, 0.2)"
									hover-background="#ff0003"
									sm-width="100%"
									sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
									sm-padding="0 5px 0 5px"
								>
									Подробнее
								</Button>
							</StackItem>
							{"    "}
						</Stack>
					</StackItem>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<StackItem width="95%">
						<Override
							slot="StackItemContent"
							box-shadow="0 10px 10px 0 rgba(0, 0, 2, 0.05)"
							background="#ffffff"
							justify-content="center"
							flex-direction="column"
							align-items="center"
						/>
						<Text font="700 22px --fontFamily-googleJura" margin="30px 1 1 1" lg-text-align="center" sm-font="700 18px --fontFamily-googleJura">
							Интернет-магазин или витрина товаров{"\n\n"}
						</Text>
						<Stack flex-direction="row" justify-content="center" width="90%">
							{"    "}
							<StackItem width="40%" display="flex" justify-content="flex-end" md-width="50%">
								<Override slot="StackItemContent" justify-content="flex-end" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									Цена: 179$
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" justify-content="flex-start" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									text-decoration-line="line-through"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									250$
								</Text>
								{"    "}
							</StackItem>
							<Text font="normal 300 14px/1.5 --fontFamily-googleRoboto" text-align="center">
								Вы получите презентабельный ресурс, формирующий репутацию компании и выгодно представляющий ее услуги.{"\n\n"}
							</Text>
							<StackItem>
								<Override slot="StackItemContent" />
								<Button
									margin="0 0 30px 0"
									width="143px"
									height="38px"
									text-transform="uppercase"
									color="#ffffff"
									font="normal 300 16px/1.5 --fontFamily-googleRoboto"
									text-align="center"
									hover-box-shadow="0 4px 7px 1px rgba(52, 18, 117, 0.2)"
									hover-background="#ff0003"
									sm-width="100%"
									sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
									sm-padding="0 5px 0 5px"
								>
									Подробнее
								</Button>
							</StackItem>
							{"    "}
						</Stack>
					</StackItem>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<StackItem width="95%">
						<Override
							slot="StackItemContent"
							box-shadow="0 10px 10px 0 rgba(0, 0, 2, 0.05)"
							background="#ffffff"
							justify-content="center"
							flex-direction="column"
							align-items="center"
						/>
						<Text font="700 22px --fontFamily-googleJura" margin="30px 1 1 1" lg-text-align="center" sm-font="700 18px --fontFamily-googleJura">
							Бизнес-сайт, каталог, блог или форум{"\n\t\t\t\n\n"}
						</Text>
						<Stack flex-direction="row" justify-content="center" width="90%">
							{"    "}
							<StackItem width="40%" display="flex" justify-content="flex-end" md-width="50%">
								<Override slot="StackItemContent" justify-content="flex-end" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									Цена: 129$
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" justify-content="flex-start" />
								{"        "}
								<Text
									font="normal 700 14px/1.5 --fontFamily-googleRoboto"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="#ff0000"
									text-decoration-line="line-through"
									sm-font="normal 700 12px/1.5 --fontFamily-googleRoboto"
								>
									150$
								</Text>
								{"    "}
							</StackItem>
							<Text font="normal 300 14px/1.5 --fontFamily-googleRoboto" text-align="center">
								Вы получите презентабельный ресурс, формирующий репутацию компании и выгодно представляющий ее услуги.{"\n\n"}
							</Text>
							<StackItem>
								<Override slot="StackItemContent" />
								<Button
									margin="0 0 30px 0"
									width="143px"
									height="38px"
									text-transform="uppercase"
									color="#ffffff"
									font="normal 300 16px/1.5 --fontFamily-googleRoboto"
									text-align="center"
									hover-box-shadow="0 4px 7px 1px rgba(52, 18, 117, 0.2)"
									hover-background="#ff0003"
									sm-width="100%"
									sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
									sm-padding="0 5px 0 5px"
								>
									Подробнее
								</Button>
							</StackItem>
							{"    "}
						</Stack>
					</StackItem>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#000000" flex-direction="column" align-items="center">
			<Override
				slot="SectionContent"
				justify-content="center"
				width="100%"
				lg-align-items="center"
				nout-align-items="center"
			/>
			<Text
				font="600 32px --fontFamily-googleJura"
				text-align="center"
				color="#ffffff"
				lg-width="90%"
				margin="50px 0px 0px 0px"
				nout-width="90%"
				lg-font="600 28px --fontFamily-googleJura"
				sm-font="600 22px --fontFamily-googleJura"
				sm-margin="50px 0px 0px 0px"
			>
				Оставьте заявку на бесплатную консультацию прямо сейчас и получите скидку на наши услуги в размере 5%
			</Text>
			<Stack align-items="center" justify-content="center" margin="20px 0 40px 0" sm-margin="10px 0 40px 0">
				{"    "}
				<StackItem width="20%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" justify-content="center" />
					<Box
						height="170px"
						width="170px"
						border-color="#ffffff"
						border-width="10px"
						background="#000000"
						border-style="solid"
						sm-height="80px"
						md-border-width="0px"
						sm-width="200px"
						sm-border-width={0}
					>
						<Text
							color="#ffffff"
							font="600 90px --fontFamily-googleRoboto"
							text-align="center"
							md-font="600 50px --fontFamily-googleRoboto"
							sm-font="600 25px --fontFamily-googleRoboto"
						>
							00
						</Text>
						<Text color="#ffffff" text-align="center" font="300 20px --fontFamily-googleRoboto" sm-font="300 12px --fontFamily-googleRoboto">
							дней
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<Text color="#ffffff" font="700 80px --fontFamily-googleRoboto" sm-display="none">
					:
				</Text>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" justify-content="center" />
					<Box
						height="170px"
						width="170px"
						border-color="#ffffff"
						border-width="10px"
						background="#000000"
						border-style="solid"
						sm-border-width={0}
						sm-height="80px"
						md-border-width="0px"
						sm-width="200px"
					>
						<Text
							color="#ffffff"
							font="600 90px --fontFamily-googleRoboto"
							text-align="center"
							md-font="600 50px --fontFamily-googleRoboto"
							sm-font="600 25px --fontFamily-googleRoboto"
						>
							00
						</Text>
						<Text color="#ffffff" text-align="center" font="300 20px --fontFamily-googleRoboto" sm-font="300 12px --fontFamily-googleRoboto">
							часов
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<Text font="700 80px --fontFamily-googleRoboto" color="#ffffff" sm-font="700 30px --fontFamily-googleRoboto">
					:
				</Text>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" justify-content="center" />
					<Box
						height="170px"
						width="170px"
						border-color="#ffffff"
						border-width="10px"
						background="#000000"
						border-style="solid"
						sm-border-width={0}
						sm-height="80px"
						md-border-width="0px"
						sm-width="200px"
					>
						<Text
							color="#ffffff"
							font="600 90px --fontFamily-googleRoboto"
							text-align="center"
							md-font="600 50px --fontFamily-googleRoboto"
							sm-font="600 25px --fontFamily-googleRoboto"
						>
							00
						</Text>
						<Text color="#ffffff" text-align="center" font="300 20px --fontFamily-googleRoboto" sm-font="300 12px --fontFamily-googleRoboto">
							минут
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<Text font="700 80px --fontFamily-googleRoboto" color="#ffffff" sm-font="700 30px --fontFamily-googleRoboto">
					:
				</Text>
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" justify-content="center" />
					<Box
						height="170px"
						width="170px"
						border-color="#ffffff"
						border-width="10px"
						background="#000000"
						border-style="solid"
						sm-border-width={0}
						sm-height="80px"
						md-border-width="0px"
						sm-width="200px"
					>
						<Text
							color="#ffffff"
							font="600 90px --fontFamily-googleRoboto"
							text-align="center"
							md-font="600 50px --fontFamily-googleRoboto"
							sm-font="600 25px --fontFamily-googleRoboto"
						>
							00
						</Text>
						<Text color="#ffffff" text-align="center" font="300 20px --fontFamily-googleRoboto" sm-font="300 12px --fontFamily-googleRoboto">
							секунд
						</Text>
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<StackItem>
				<Override slot="StackItemContent" justify-content="center" />
				<Button
					width="190px"
					height="60px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#FF8177 0,#CF556C 37.47%,#B12A5B 100%) !important"
					margin="0 0 20px 0"
					hover-box-shadow="0 0 15px 0 #de0b42"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
					sm-width="170px"
					sm-height="50px"
				>
					Оставить заявку
				</Button>
			</StackItem>
		</Section>
		<Section background="#f2f2f2" padding="0 0 0 0">
			<Override slot="SectionContent" width="100%" justify-content="center" md-width="80%" />
			<Text
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				color="#252b69"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
			>
				Отзывы клиенов{"\n\n"}
			</Text>
			<Text
				font="700 22px --fontFamily-googleJura"
				text-align="center"
				color="#252b69"
				margin="30px 0 -10px 0"
				lg-font="700 20px --fontFamily-googleJura"
			>
				— Дмитрий Дадонов, гендиректор Diditen{"\n\n"}
			</Text>
			<StackItem width="100%">
				<Override slot="StackItemContent" justify-content="center" />
				<Text
					font="300 16px --fontFamily-googleRoboto"
					text-align="center"
					color="#252b69"
					width="90%"
					margin="0px 1 1 1"
					nout-width="90%"
					sm-margin="20px 0px 0px 0px"
				>
					Очень благодарен сотрудникам компании newsite за отличный сервис и 
качественную работу. Работают оперативно, с легкостью решают все 
возникающие вопросы! Рекомендую как надежного партнера в создании и 
продвижении бизнеса. Все выполняется на высшем техническом и 
дизайнерском уровне. А так же, приятно радуют цены за услуги!{"\n\n"}
				</Text>
			</StackItem>
			<Stack justify-content="safe center" margin="30px 3 3 3" sm-margin="40px 0px 0px 0px">
				{"    "}
				<StackItem width="122px" display="flex">
					<Image width="90px" height="90px" src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_9euAuBCR.jpg?v=2020-10-17T13:57:14.562Z" />
					{"        "}{"    "}
				</StackItem>
				<StackItem width="122px" display="flex">
					<Image width="90px" height="90px" src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_tYCmXsds.jpg?v=2020-10-17T13:57:28.664Z" />
					{"        "}{"    "}
				</StackItem>
				<StackItem width="122px" display="flex">
					<Image width="90px" height="90px" src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_yTGIAFoQ.jpg?v=2020-10-17T13:57:33.019Z" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<StackItem margin="20px 2 40px 2">
				<Override slot="StackItemContent" justify-content="center" margin="0 0 30px 0" />
				<Button
					width="245px"
					height="60px"
					text-transform="uppercase"
					font="normal 600 16px/1.5 --fontFamily-googleJura"
					border-radius="50px"
					background="linear-gradient(90deg,#2F9DB4 0,#3AB7B8 37.47%,#76DBC7 100%) !important"
					margin="0 0 20px 0"
					hover-box-shadow="0 0 15px 0 #22a5ff"
					sm-width="230px"
					sm-height="50px"
					sm-font="normal 600 14px/1.5 --fontFamily-googleJura"
				>
					посмотреть все отзывы
				</Button>
			</StackItem>
		</Section>
		<Section background="#ffffff">
			<Override slot="SectionContent" width="100%" flex-direction="row" justify-content="center" />
			<Stack width="100%" nout-justify-content="center">
				<StackItem width="90%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" sm-align-items="center" />
					<Text
						font="700 44px --fontFamily-googleJura"
						text-align="left"
						color="#252b69"
						margin="60px 0px 0px 0px"
						lg-font="700 40px --fontFamily-googleJura"
						sm-font="700 30px --fontFamily-googleJura"
						sm-text-align="center"
					>
						Продвижение вашего сайта{"\n\t\t\t\t\t\n\n"}
					</Text>
					<Text
						font="italic 700 20px --fontFamily-googleJura"
						text-align="left"
						color="#000000"
						margin="20px 0 -10px 0"
						lg-font="italic 700 18px --fontFamily-googleJura"
						md-font="italic 700 16px --fontFamily-googleJura"
						sm-font="italic 700 14px --fontFamily-googleJura"
						sm-text-align="center"
					>
						Мы также занимаемся продвижением сайтов в поисковой выдачи, настройками контекстной рекламы и написание уникальных текстов для вашего сайта{"\n\n"}
					</Text>
					<Text
						font="700 20px --fontFamily-googleJura"
						text-align="left"
						color="#ff0000"
						margin="20px 0 -25px 0"
						lg-font="700 18px --fontFamily-googleJura"
						sm-font="700 14px --fontFamily-googleJura"
						md-font="700 16px --fontFamily-googleJura"
						sm-text-align="center"
					>
						Стоимость от 35${"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				{"    "}{"    "}
			</Stack>
		</Section>
		<Section background="url(https://newsite.kz/__scale/uploads/s/k/h/k/khkzeuuy5gmd/img/full_lY4FDxYQ.png?quality=60&width=1500&webp=1) top center scroll" padding="0 0 0 0">
			<Override slot="SectionContent" width="100%" flex-direction="row" justify-content="center" />
			<Stack
				width="100%"
				gap="0px"
				nout-flex-direction="row"
				nout-justify-content="center"
				md-flex-direction="column"
				md-align-items="center"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					lg-width="35%"
					nout-width="37%"
					md-width="85%"
				>
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
					/>
					<Button
						width="143px"
						height="44px"
						text-transform="uppercase"
						color="#ffffff"
						font="normal 300 16px/1.5 --fontFamily-googleRoboto"
						text-align="center"
						background="#242a68"
						hover-border-width="1px"
						hover-border-color="#252b69"
						hover-background="rgba(37, 43, 105, 0.39)"
						hover-border-style="solid"
						margin="20px 0 30px 0"
						border-radius="5px"
						sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
						sm-height="40px"
						sm-width="140px"
					>
						Подробнее
					</Button>
					<Text
						font="700 44px --fontFamily-googleJura"
						text-align="left"
						color="#252b69"
						margin="100px 0px 0px 0px"
						lg-font="700 40px --fontFamily-googleJura"
						sm-font="700 30px --fontFamily-googleJura"
						sm-text-align="center"
					>
						Наша команда
					</Text>
					<Text
						font="italic 400 18px --fontFamily-googleFiraSansCondensed"
						text-align="left"
						color="#000000"
						margin="20px 0 -10px 0"
						lg-font="italic 400 16px --fontFamily-googleFiraSansCondensed"
						sm-font="italic 400 14px --fontFamily-googleFiraSansCondensed"
						md-font="italic 400 14px --fontFamily-googleFiraSansCondensed"
						sm-text-align="center"
					>
						Мы собрали свою команду мечты и создаем самый мощный бизнес в сфере услуг веб-дизайна{"\n\n"}
					</Text>
					<Button
						width="320px"
						height="44px"
						text-transform="uppercase"
						color="#ffffff"
						font="normal 300 16px/1.5 --fontFamily-googleRoboto"
						text-align="center"
						background="#242a68"
						hover-border-width="1px"
						hover-border-color="#252b69"
						hover-background="rgba(37, 43, 105, 0.39)"
						hover-border-style="solid"
						margin="20px 0 30px 0"
						border-radius="5px"
						md-width="240px"
						md-height="60px"
						sm-font="normal 300 12px/1.5 --fontFamily-googleRoboto"
						sm-height="50px"
						sm-width="180px"
					>
						ознакомиться с командой
					</Button>
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="52%"
					nout-width="50%"
					md-width="60%"
					sm-width="100%"
				>
					<Override slot="StackItemContent" md-align-items="flex-end" align-items="flex-end" />
					<Image
						width="700px"
						height="395px"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/1d0859d64d1e6e25c771b6ee31d7ed57.png?v=2020-10-17T14:55:14.468Z"
						nout-display="flex"
						display="flex"
						md-height="300px"
						sm-width="100%"
					/>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_cGxZspFm.png?v=2020-10-18T11:36:05.781Z) top center scroll,linear-gradient(315deg,#1C2049 0,#2C3485 100%) !important" padding="30px 0 10px 0">
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
				Стоит ли заказывать у нас?{"\n\n"}
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
					<Link href="https://newsite.kz/portfolio_web_studii" color="#ffffff">
						Портфолио
					</Link>
					", так как портфолио это зеркало Web-студии и если вам там понравятся наши работы, то наверняка вам и понравится наш разработанный сайт для вас.{"\n\t\t\t\t\t\n\n"}
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
						© 2015 - 2020 | Все права защищены, фирма зарегистрирована на территории Казахстана и выполняет заказы по всему миру{"\n\t\t\t\t\t\n            \n\n"}
					</Text>
				</StackItem>
				{"    "}{"    "}
			</Stack>
		</Section>
	</Theme>;
});