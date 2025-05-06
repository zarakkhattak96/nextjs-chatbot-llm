"use client";

import { theme } from "antd";

import type { ThemeConfig } from "antd";

const globalTokens = theme.getDesignToken();

const colors: ThemeConfig["token"] = {
	colorPrimary: "#1036F0",
	colorPrimaryBgHover: "#BAE0FF",
	colorPrimaryBorder: "#00000026",
	colorPrimaryBorderHover: "#69B1FF",
	colorPrimaryHover: "#4096FF",
	colorPrimaryActive: "#0958D9",
	colorPrimaryTextHover: "#4096FF",
	colorPrimaryTextActive: "#0958D9",
	colorBgContainer: "#FFFFFF",
	colorFillSecondary: "#F0F0F0",
};

const padding: ThemeConfig["token"] = {
	paddingSM: 12,
	paddingLG: 24,
};

const margin: ThemeConfig["token"] = {
	marginSM: 12,
	marginLG: 24,
};

const token: ThemeConfig["token"] = {
	...colors,
	...padding,
	...margin,
};
export const lightTheme: ThemeConfig = {
	cssVar: true,
	hashed: false,
	token,
	components: {
		Layout: {
			headerBg: globalTokens.colorWhite,
			headerPadding: `${globalTokens.paddingMD}px ${globalTokens.paddingXL}px`,
			footerBg: "#000000",
			footerPadding: "60px 0",
			siderBg: globalTokens.colorWhite,
			headerHeight: 86,
		},
		Button: {
			controlHeight: 40,
			colorPrimary: token.colorPrimary,
			colorPrimaryHover: globalTokens.colorPrimaryHover,
			colorPrimaryActive: globalTokens.colorPrimary,
			fontSize: globalTokens.fontSizeLG,
			lineHeight: globalTokens.lineHeightLG,
			boxShadow: "0px 2px 0px 0px #00000005",
			borderRadiusLG: globalTokens.borderRadiusSM,
			borderRadius: globalTokens.borderRadiusSM,
			borderRadiusSM: globalTokens.borderRadiusSM,
			borderRadiusXS: globalTokens.borderRadiusSM,
		},
		Table: {
			headerBg: token.colorFillSecondary,
			headerBorderRadius: globalTokens.borderRadiusSM,
			borderColor: globalTokens.colorBorderSecondary,
		},
		Input: {
			controlHeight: 40,
			borderRadius: globalTokens.borderRadiusSM,
			colorBorder: globalTokens.colorBorder,
		},
		InputNumber: {
			// @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'number'.
			controlWidth: "100%",
			borderRadiusLG: globalTokens.borderRadius,
			controlHeight: 40,
		},
		Select: {
			controlHeight: 40,
			singleItemHeightLG: 40,
			borderRadiusLG: globalTokens.borderRadiusSM,
			borderRadius: globalTokens.borderRadiusSM,
			colorBorder: globalTokens.colorBorder,
		},
		DatePicker: {
			borderRadiusLG: globalTokens.borderRadiusSM,
			colorBorder: globalTokens.colorBorder,
			borderRadius: globalTokens.borderRadiusSM,
			controlHeight: 40,
		},
		Form: {
			controlHeight: 40,
			itemMarginBottom: globalTokens.marginSM,
			verticalLabelPadding: 0,
		},
		Slider: {
			colorBgElevated: token.colorPrimary,
			handleColor: token.colorPrimary,
			trackBg: token.colorPrimary,
			trackHoverBg: globalTokens.colorIconHover,
			dotActiveBorderColor: globalTokens.colorIconHover,
			colorPrimaryBorderHover: globalTokens.colorIconHover,
		},
		Typography: {
			colorLink: globalTokens.colorText,
		},
		Checkbox: {
			colorPrimary: globalTokens.colorPrimary,
		},
		Menu: {
			subMenuItemBg: token.colorBgContainer,
		},
	},
};
