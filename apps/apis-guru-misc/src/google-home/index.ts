import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assistantHandler,
  bluetoothHandler,
  configuredNetworksHandler,
  connectWifiHandler,
  eurekaInfoHandler,
  forgetWifiHandler,
  getAppDeviceIdHandler,
  iconPngHandler,
  noticeHtmlGzHandler,
  offerHandler,
  rebootHandler,
  scanResultsHandler,
  scanWifiHandler,
  setEurekaInfoHandler,
  supportedLocalesHandler,
  supportedTimezonesHandler,
  testInternetDownloadSpeedHandler,
  userEqHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', noticeHtmlGzHandler)
  .route('/', assistantHandler)
  .route('/', bluetoothHandler)
  .route('/', configuredNetworksHandler)
  .route('/', connectWifiHandler)
  .route('/', eurekaInfoHandler)
  .route('/', forgetWifiHandler)
  .route('/', getAppDeviceIdHandler)
  .route('/', iconPngHandler)
  .route('/', offerHandler)
  .route('/', rebootHandler)
  .route('/', scanResultsHandler)
  .route('/', scanWifiHandler)
  .route('/', setEurekaInfoHandler)
  .route('/', supportedLocalesHandler)
  .route('/', supportedTimezonesHandler)
  .route('/', testInternetDownloadSpeedHandler)
  .route('/', userEqHandler)

export default app
