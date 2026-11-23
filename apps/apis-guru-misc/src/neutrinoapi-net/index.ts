import { OpenAPIHono } from '@hono/zod-openapi'
import {
  badWordFilterHandler,
  binListDownloadHandler,
  binLookupHandler,
  browserBotHandler,
  convertHandler,
  emailValidateHandler,
  emailVerifyHandler,
  geocodeAddressHandler,
  geocodeReverseHandler,
  hlrLookupHandler,
  hostReputationHandler,
  htmlCleanHandler,
  htmlRenderHandler,
  imageResizeHandler,
  imageWatermarkHandler,
  ipBlocklistDownloadHandler,
  ipBlocklistHandler,
  ipInfoHandler,
  ipProbeHandler,
  phonePlaybackHandler,
  phoneValidateHandler,
  phoneVerifyHandler,
  qrCodeHandler,
  smsVerifyHandler,
  uaLookupHandler,
  urlInfoHandler,
  verifySecurityCodeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', badWordFilterHandler)
  .route('/', binListDownloadHandler)
  .route('/', binLookupHandler)
  .route('/', browserBotHandler)
  .route('/', convertHandler)
  .route('/', emailValidateHandler)
  .route('/', emailVerifyHandler)
  .route('/', geocodeAddressHandler)
  .route('/', geocodeReverseHandler)
  .route('/', hlrLookupHandler)
  .route('/', hostReputationHandler)
  .route('/', htmlCleanHandler)
  .route('/', htmlRenderHandler)
  .route('/', imageResizeHandler)
  .route('/', imageWatermarkHandler)
  .route('/', ipBlocklistHandler)
  .route('/', ipBlocklistDownloadHandler)
  .route('/', ipInfoHandler)
  .route('/', ipProbeHandler)
  .route('/', phonePlaybackHandler)
  .route('/', phoneValidateHandler)
  .route('/', phoneVerifyHandler)
  .route('/', qrCodeHandler)
  .route('/', smsVerifyHandler)
  .route('/', uaLookupHandler)
  .route('/', urlInfoHandler)
  .route('/', verifySecurityCodeHandler)

export default app
