import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

export const uiLoaderConfig : NgxUiLoaderConfig = {
    "bgsColor": "#0053c1",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-fade-rotating",
  "blur": 5,
  "fgsColor": "#0430ff",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#0430ff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "Hang on a moment..Fetching Data....",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "threshold": 500
};

export const uiLoaderModule = [ 
    NgxUiLoaderModule.forRoot(uiLoaderConfig),
    NgxUiLoaderRouterModule
];