import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBinListDownloadRoute,
  getBinLookupRoute,
  getConvertRoute,
  getEmailValidateRoute,
  getEmailVerifyRoute,
  getGeocodeAddressRoute,
  getGeocodeReverseRoute,
  getHlrLookupRoute,
  getHostReputationRoute,
  getIpBlocklistDownloadRoute,
  getIpBlocklistRoute,
  getIpInfoRoute,
  getIpProbeRoute,
  getPhoneValidateRoute,
  getUaLookupRoute,
  getUrlInfoRoute,
  getVerifySecurityCodeRoute,
  postBadWordFilterRoute,
  postBrowserBotRoute,
  postHtmlCleanRoute,
  postHtmlRenderRoute,
  postImageResizeRoute,
  postImageWatermarkRoute,
  postPhonePlaybackRoute,
  postPhoneVerifyRoute,
  postQrCodeRoute,
  postSmsVerifyRoute,
} from './routes'
import {
  getBinListDownloadRouteHandler,
  getBinLookupRouteHandler,
  getConvertRouteHandler,
  getEmailValidateRouteHandler,
  getEmailVerifyRouteHandler,
  getGeocodeAddressRouteHandler,
  getGeocodeReverseRouteHandler,
  getHlrLookupRouteHandler,
  getHostReputationRouteHandler,
  getIpBlocklistDownloadRouteHandler,
  getIpBlocklistRouteHandler,
  getIpInfoRouteHandler,
  getIpProbeRouteHandler,
  getPhoneValidateRouteHandler,
  getUaLookupRouteHandler,
  getUrlInfoRouteHandler,
  getVerifySecurityCodeRouteHandler,
  postBadWordFilterRouteHandler,
  postBrowserBotRouteHandler,
  postHtmlCleanRouteHandler,
  postHtmlRenderRouteHandler,
  postImageResizeRouteHandler,
  postImageWatermarkRouteHandler,
  postPhonePlaybackRouteHandler,
  postPhoneVerifyRouteHandler,
  postQrCodeRouteHandler,
  postSmsVerifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBadWordFilterRoute, postBadWordFilterRouteHandler)
  .openapi(getBinListDownloadRoute, getBinListDownloadRouteHandler)
  .openapi(getBinLookupRoute, getBinLookupRouteHandler)
  .openapi(postBrowserBotRoute, postBrowserBotRouteHandler)
  .openapi(getConvertRoute, getConvertRouteHandler)
  .openapi(getEmailValidateRoute, getEmailValidateRouteHandler)
  .openapi(getEmailVerifyRoute, getEmailVerifyRouteHandler)
  .openapi(getGeocodeAddressRoute, getGeocodeAddressRouteHandler)
  .openapi(getGeocodeReverseRoute, getGeocodeReverseRouteHandler)
  .openapi(getHlrLookupRoute, getHlrLookupRouteHandler)
  .openapi(getHostReputationRoute, getHostReputationRouteHandler)
  .openapi(postHtmlCleanRoute, postHtmlCleanRouteHandler)
  .openapi(postHtmlRenderRoute, postHtmlRenderRouteHandler)
  .openapi(postImageResizeRoute, postImageResizeRouteHandler)
  .openapi(postImageWatermarkRoute, postImageWatermarkRouteHandler)
  .openapi(getIpBlocklistRoute, getIpBlocklistRouteHandler)
  .openapi(getIpBlocklistDownloadRoute, getIpBlocklistDownloadRouteHandler)
  .openapi(getIpInfoRoute, getIpInfoRouteHandler)
  .openapi(getIpProbeRoute, getIpProbeRouteHandler)
  .openapi(postPhonePlaybackRoute, postPhonePlaybackRouteHandler)
  .openapi(getPhoneValidateRoute, getPhoneValidateRouteHandler)
  .openapi(postPhoneVerifyRoute, postPhoneVerifyRouteHandler)
  .openapi(postQrCodeRoute, postQrCodeRouteHandler)
  .openapi(postSmsVerifyRoute, postSmsVerifyRouteHandler)
  .openapi(getUaLookupRoute, getUaLookupRouteHandler)
  .openapi(getUrlInfoRoute, getUrlInfoRouteHandler)
  .openapi(getVerifySecurityCodeRoute, getVerifySecurityCodeRouteHandler)

export default app
