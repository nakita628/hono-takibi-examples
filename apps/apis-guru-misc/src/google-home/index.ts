import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssistantAlarmsRoute,
  getBluetoothGetBondedRoute,
  getBluetoothScanResultsRoute,
  getBluetoothStatusRoute,
  getConfiguredNetworksRoute,
  getEurekaInfoRoute,
  getIconPngRoute,
  getNOTICEHtmlGzRoute,
  getOfferRoute,
  getScanResultsRoute,
  getSupportedLocalesRoute,
  getSupportedTimezonesRoute,
  postAssistantA11yModeRoute,
  postAssistantAlarmsDeleteRoute,
  postAssistantAlarmsVolumeRoute,
  postAssistantCheckReadyStatusRoute,
  postAssistantNotificationsRoute,
  postAssistantSetNightModeParamsRoute,
  postBluetoothBondRoute,
  postBluetoothConnectRoute,
  postBluetoothDiscoveryRoute,
  postBluetoothScanRoute,
  postConnectWifiRoute,
  postForgetWifiRoute,
  postGetAppDeviceIdRoute,
  postRebootRoute,
  postScanWifiRoute,
  postSetEurekaInfoRoute,
  postTestInternetDownloadSpeedRoute,
  postUserEqSetEqualizerRoute,
} from './routes'
import {
  getAssistantAlarmsRouteHandler,
  getBluetoothGetBondedRouteHandler,
  getBluetoothScanResultsRouteHandler,
  getBluetoothStatusRouteHandler,
  getConfiguredNetworksRouteHandler,
  getEurekaInfoRouteHandler,
  getIconPngRouteHandler,
  getNOTICEHtmlGzRouteHandler,
  getOfferRouteHandler,
  getScanResultsRouteHandler,
  getSupportedLocalesRouteHandler,
  getSupportedTimezonesRouteHandler,
  postAssistantA11yModeRouteHandler,
  postAssistantAlarmsDeleteRouteHandler,
  postAssistantAlarmsVolumeRouteHandler,
  postAssistantCheckReadyStatusRouteHandler,
  postAssistantNotificationsRouteHandler,
  postAssistantSetNightModeParamsRouteHandler,
  postBluetoothBondRouteHandler,
  postBluetoothConnectRouteHandler,
  postBluetoothDiscoveryRouteHandler,
  postBluetoothScanRouteHandler,
  postConnectWifiRouteHandler,
  postForgetWifiRouteHandler,
  postGetAppDeviceIdRouteHandler,
  postRebootRouteHandler,
  postScanWifiRouteHandler,
  postSetEurekaInfoRouteHandler,
  postTestInternetDownloadSpeedRouteHandler,
  postUserEqSetEqualizerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getNOTICEHtmlGzRoute, getNOTICEHtmlGzRouteHandler)
  .openapi(postAssistantA11yModeRoute, postAssistantA11yModeRouteHandler)
  .openapi(getAssistantAlarmsRoute, getAssistantAlarmsRouteHandler)
  .openapi(postAssistantAlarmsDeleteRoute, postAssistantAlarmsDeleteRouteHandler)
  .openapi(postAssistantAlarmsVolumeRoute, postAssistantAlarmsVolumeRouteHandler)
  .openapi(postAssistantCheckReadyStatusRoute, postAssistantCheckReadyStatusRouteHandler)
  .openapi(postAssistantNotificationsRoute, postAssistantNotificationsRouteHandler)
  .openapi(postAssistantSetNightModeParamsRoute, postAssistantSetNightModeParamsRouteHandler)
  .openapi(postBluetoothBondRoute, postBluetoothBondRouteHandler)
  .openapi(postBluetoothConnectRoute, postBluetoothConnectRouteHandler)
  .openapi(postBluetoothDiscoveryRoute, postBluetoothDiscoveryRouteHandler)
  .openapi(getBluetoothGetBondedRoute, getBluetoothGetBondedRouteHandler)
  .openapi(postBluetoothScanRoute, postBluetoothScanRouteHandler)
  .openapi(getBluetoothScanResultsRoute, getBluetoothScanResultsRouteHandler)
  .openapi(getBluetoothStatusRoute, getBluetoothStatusRouteHandler)
  .openapi(getConfiguredNetworksRoute, getConfiguredNetworksRouteHandler)
  .openapi(postConnectWifiRoute, postConnectWifiRouteHandler)
  .openapi(getEurekaInfoRoute, getEurekaInfoRouteHandler)
  .openapi(postForgetWifiRoute, postForgetWifiRouteHandler)
  .openapi(postGetAppDeviceIdRoute, postGetAppDeviceIdRouteHandler)
  .openapi(getIconPngRoute, getIconPngRouteHandler)
  .openapi(getOfferRoute, getOfferRouteHandler)
  .openapi(postRebootRoute, postRebootRouteHandler)
  .openapi(getScanResultsRoute, getScanResultsRouteHandler)
  .openapi(postScanWifiRoute, postScanWifiRouteHandler)
  .openapi(postSetEurekaInfoRoute, postSetEurekaInfoRouteHandler)
  .openapi(getSupportedLocalesRoute, getSupportedLocalesRouteHandler)
  .openapi(getSupportedTimezonesRoute, getSupportedTimezonesRouteHandler)
  .openapi(postTestInternetDownloadSpeedRoute, postTestInternetDownloadSpeedRouteHandler)
  .openapi(postUserEqSetEqualizerRoute, postUserEqSetEqualizerRouteHandler)

export default app
