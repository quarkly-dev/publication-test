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
				О компании | NewSite
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/favicons.png?v=2020-10-20T01:02:25.576Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#6063FE"
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
			background="rgba(96, 99, 254, 0.7)"
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
		<Section padding="100px 0 0px 0" background="url(https://newsite.kz/__scale/uploads/s/k/h/k/khkzeuuy5gmd/img/full_E5rpSbiV.png?quality=60&width=1500&webp=1) center center/cover fixed">
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
						О нашей команде
студии NewSite
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
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/83a8fb36a3ace839ef52f1fc7027901a.png?v=2020-10-18T20:04:12.790Z"
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
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				color="#121212"
				margin="50px 0 30px 0"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				lg-width="90%"
			>
				МЫ — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА
			</Text>
			<Stack
				lg-width="100%"
				lg-justify-content="center"
				margin="0 0 50px 0"
				sm-flex-direction="column"
				nout-justify-content="center"
				justify-content="center"
				lg-flex-direction="column"
				lg-align-items="center"
			>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="70%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/852168b641b2f4f0cb1b3d5ab69c92e5.png?v=2020-10-18T21:33:28.888Z" />
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					background="url(https://ulanding.io/uploads/s/i/p/c/ipc0tljp0pkq/img/full_YlgwSlru.png) center center/cover local"
					lg-width="70%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<StackItem
						width="90%"
						background="#ffffff"
						box-shadow="8px 0 19px 0 rgba(158,171,203,.08)"
						border-radius="11px"
						height="90%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" justify-content="center" flex-direction="column" align-items="center" />
						<StackItem
							width="90%"
							background="#ffffff"
							box-shadow="8px 0 19px 0 rgba(158,171,203,.08)"
							border-radius="11px"
							margin="30px 0px 30px 0px"
						>
							<Override
								slot="StackItemContent"
								justify-content="center"
								flex-direction="column"
								align-items="center"
								width="100%"
							/>
							<Text font="normal 400 18px/1.5 --fontFamily-googleFiraSansCondensed" text-align="center" sm-font="normal 400 16px/1.5 --fontFamily-googleFiraSansCondensed">
								Мы одна из культовых Веб-Студий и нам более 4-х лет и поэтому у нас такие низкие цены с сравнением нынешних цен на рынке услуг в данной сфере, так как мы оптимизировали большую часть процессов и благодаря этому работа над вашим сайтом займет максимально короткий период, так как работа над проектом распределена сразу по всем отделам.{" "}
								<br />
								<br />
								<br />
								<br />
								Мы создаем сайты любой сложности от сайтов визиток до крупных интернет-магазинов и порталов, в этом вы можете убедиться сами зайдя в наше "
								<Link href="https://newsite.kz/portfolio_web_studii">
									Портфолио
								</Link>
								".
							</Text>
						</StackItem>
					</StackItem>
					{"    "}
				</StackItem>
				<StackItem
					width="70%"
					display="flex"
					sm-width="100%"
					nout-width="65%"
					lg-width="90%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Text font="700 23px --fontFamily-googleJura" color="#252b69">
						Наша команда
					</Text>
					<Text font="700 13px --fontFamily-googleJura" color="#949494">
						Основа нашего бизнеса
					</Text>
					<Text font="700 17px --fontFamily-googleJura">
						Мы собрали свою команду мечты и создаем самый мощный бизнес в сфере услуг веб-дизайна
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="30%" display="flex" sm-width="100%" nout-width="20%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					<Image width="169px" height="169px" src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/fe89560a9eaf4a1495bfd7a809d9ee94.png?v=2020-10-18T21:42:35.351Z" />
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="url(https://newsite.kz/uploads/s/k/h/k/khkzeuuy5gmd/img/full_l4LKyAUb.png) center center/cover scroll" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				width="100%"
				justify-content="center"
				md-width="80%"
				lg-align-items="center"
				align-items="center"
			/>
			<Text
				font="700 52px --fontFamily-googleJura"
				text-align="center"
				color="#ffffff"
				lg-font="700 46px --fontFamily-googleJura"
				md-font="700 40px --fontFamily-googleJura"
				sm-font="700 36px --fontFamily-googleJura"
				text-shadow="1px 1px 2px #000"
				margin="80px 0px 0px 0px"
				lg-width="90%"
				width="90%"
			>
				Почему именно у нас стоит заказать разработку сайта
			</Text>
			<Stack
				justify-content="space-around"
				margin="30px 0px 80px 0px"
				lg-justify-content="center"
				lg-flex-direction="column"
				lg-align-items="center"
				nout-width="90%"
				sm-width="90%"
			>
				{"    "}
				<StackItem width="30%" display="flex" lg-width="70%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Image
						width="128px"
						height="128px"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_qtXVjaBj.png?v=2020-10-18T21:50:28.063Z"
						hover-transform="rotate(360deg)"
						hover-transition="all 0.75s ease-out 0s"
					/>
					<Text font="700 20px --fontFamily-googleJura" color="#ffffff" text-align="center" width="90%">
						БОЛЬШОЙ ОПЫТ РАБОТЫ
					</Text>
					<Text
						font="400 15px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						text-align="center"
						width="90%"
						sm-font="400 14px --fontFamily-googleFiraSansCondensed"
					>
						Большой опыт в создании и продвижение любых проектов, будь-то обычные сайты визитки до интернет-магазинов и крупных порталов
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="30%" display="flex" lg-width="70%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Image
						width="128px"
						height="128px"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_qtXVjaBj.png?v=2020-10-18T21:50:28.063Z"
						hover-transform="rotate(360deg)"
						hover-transition="all 0.75s ease-out 0s"
					/>
					<Text font="700 20px --fontFamily-googleJura" color="#ffffff" text-align="center" width="90%">
						БОЛЬШОЙ ОПЫТ РАБОТЫ
					</Text>
					<Text
						font="400 15px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						text-align="center"
						width="90%"
						sm-font="400 14px --fontFamily-googleFiraSansCondensed"
					>
						Большой опыт в создании и продвижение любых проектов, будь-то обычные сайты визитки до интернет-магазинов и крупных порталов
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="30%" display="flex" lg-width="70%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Image
						width="128px"
						height="128px"
						src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_qtXVjaBj.png?v=2020-10-18T21:50:28.063Z"
						hover-transform="rotate(360deg)"
						hover-transition="all 0.75s ease-out 0s"
					/>
					<Text font="700 20px --fontFamily-googleJura" color="#ffffff" text-align="center" width="90%">
						БОЛЬШОЙ ОПЫТ РАБОТЫ
					</Text>
					<Text
						font="400 15px --fontFamily-googleFiraSansCondensed"
						color="#ffffff"
						text-align="center"
						width="90%"
						sm-font="400 14px --fontFamily-googleFiraSansCondensed"
					>
						Большой опыт в создании и продвижение любых проектов, будь-то обычные сайты визитки до интернет-магазинов и крупных порталов
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#f2f2f2" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
			/>
			<Text text-align="center" color="#1a1a1a" font="700 30px --fontFamily-googleJura" margin="80px 0px 0px 0px">
				Команда{"\n\n"}
			</Text>
			<Text
				text-align="center"
				font="400 18px --fontFamily-googleFiraSansCondensed"
				color="#1a1a1a"
				width="90%"
				max-width="750px"
			>
				В студии работают только профессионалы высшего качества — познакомьтесь с нашими ведущими специалистами.{"\n\n"}
			</Text>
			<Stack
				width="100%"
				gap="0px"
				nout-flex-direction="row"
				nout-justify-content="center"
				md-flex-direction="column"
				md-align-items="center"
				justify-content="center"
				flex-direction="row"
				margin="50px 0px 80px 0px"
			>
				{"    "}
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="0px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_IaDP8DlS.png?v=2020-10-18T23:02:23.894Z" object-fit="cover" lg-display="inline-block" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Иван Куричев{"\n\t\t\t\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							CEO
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							Основатель Web-студии, самостоятельно занимается разработкой и введением своих собственных дополнительных проектов{"\n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="0px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_KxFtXxDe.jpg?v=2020-10-18T23:40:08.367Z" object-fit="cover" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Марк Аврелов{"\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Главный дизайнер{"\n\n"}
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							В 2009 году закончил Женевский институт дизайна, проходил стажировку в таких ведущих компаниях, как Moder Art и InterDesign. Награжден премией The Creative Mind за проект оформления сайта отеля Two Doors. В работе предпочитает придерживаться минималистичного стиля{"\n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="2px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_ymVh0k5s.jpg?v=2020-10-18T23:40:57.538Z" object-fit="cover" lg-display="inline-block" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Ксения Гузий{"\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							SMM-Менеджер{"\n\n"}
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							Ксения получила юридическое образование, однако не стала работать 
по специальности, а занялась ведением и оформлением социальных сетей. 
Прошла специальные курсы, работала в компании Furnifuture. Сейчас же именно она отвечает за оформление наших групп в социальных сетях{"\n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="50px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_dK7eoPSY.jpg?v=2020-10-18T23:50:33.315Z" object-fit="cover" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Александр Семенов{"\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Программист-верстальщик{"\n\n"}
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							Получив классическое образование в сфере программирования, поехал 
продолжать обучение в Москву. Вскоре попал на стажировку в международную
 компанию Austra по программе 
для молодых талантов. Вернувшись, приступил к работе в компании NewSite.
 Ориентируется на классические приемы верстки.{"\n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="50px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
						lg-margin="50px 0px 50px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_gsqdx33T.jpg?v=2020-10-18T23:51:01.834Z" object-fit="cover" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Никита Половинко{"\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Дизайнер{"\n\n"}
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							Удачные логотипы, оригинальные лэндинги, уникальные шрифты, для него нет
 ничего сложного. Никита работает с нами уже более четырех лет. Он делал
 с нами не только простые одностраничные предложения, но и создавал 
дизайн для крупных маркетплейс проектов. Он знает, как должны выглядеть 
страницы интернет-магазинов, чтобы клиент захотел покупать на сайте 
больше или с легкостью доверил свои контактные данные 
интернет-магазину.{" \n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="27%"
					display="flex"
					lg-width="90%"
					md-width="85%"
					background="#ffffff"
					box-shadow="0 10px 10px rgba(0, 0, 2, 0.05)"
					margin="50px 20px 0px 20px"
					lg-margin="10px 20px 10px 20px"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						flex-direction="column"
						sm-justify-content="center"
						sm-flex-direction="column"
						sm-align-items="center"
						align-items="center"
					/>
					<StackItem
						width="85%"
						display="flex"
						lg-width="90%"
						md-width="85%"
						height="85%"
						margin="40px 0px 40px 0px"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							sm-justify-content="center"
							sm-flex-direction="column"
							sm-align-items="center"
							align-items="flex-start"
						/>
						<Image src="https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_cXcD5CzB.png?v=2020-10-18T23:51:30.048Z" object-fit="cover" width="90%" />
						<Text
							text-align="left"
							font="700 22px --fontFamily-googleJura"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							Екатерина Байдак{"\n\n"}
						</Text>
						<Text
							text-align="left"
							font="400 14px --fontFamily-googleRoboto"
							color="#1a1a1a"
							width="90%"
							max-width="750px"
						>
							SEO-Специалист{"\n\n"}
						</Text>
						<Text text-align="left" font="300 14px --fontFamily-googleRoboto" color="#1a1a1a">
							Один из ведущих специалистов в сфере продвижения сайтов, если вы нашли наш сайт, то это ее заслуга :)
							<br />
							Работает в NewSite уже 3 года. За это время зарекомендовала себя как отличный специалист.{"\n\n"}
						</Text>
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="url(https://uploads.quarkly.io/5f82df518a25ab001e4e7775/images/full_cGxZspFm.png?v=2020-10-18T11:36:05.781Z) top center scroll,linear-gradient(315deg,#282bad 0,#6063FE 100%)" padding="30px 0 10px 0">
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
					Также рекомендуем вам прочитать отзывы о нас в специальном разделе{"\n\n"}
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