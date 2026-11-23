import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingAnythingRoute,
  deleteAnythingRoute,
  deleteDelayDelayRoute,
  deleteDeleteRoute,
  deleteRedirectToRoute,
  deleteStatusCodesRoute,
  getAbsoluteRedirectNRoute,
  getAnythingAnythingRoute,
  getAnythingRoute,
  getBase64ValueRoute,
  getBasicAuthUserPasswdRoute,
  getBearerRoute,
  getBrotliRoute,
  getBytesNRoute,
  getCacheRoute,
  getCacheValueRoute,
  getCookiesDeleteRoute,
  getCookiesRoute,
  getCookiesSetNameValueRoute,
  getCookiesSetRoute,
  getDeflateRoute,
  getDelayDelayRoute,
  getDenyRoute,
  getDigestAuthQopUserPasswdAlgorithmRoute,
  getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute,
  getDigestAuthQopUserPasswdRoute,
  getDripRoute,
  getEncodingUtf8Route,
  getEtagEtagRoute,
  getGetRoute,
  getGzipRoute,
  getHeadersRoute,
  getHiddenBasicAuthUserPasswdRoute,
  getHtmlRoute,
  getImageJpegRoute,
  getImagePngRoute,
  getImageRoute,
  getImageSvgRoute,
  getImageWebpRoute,
  getIpRoute,
  getJsonRoute,
  getLinksNOffsetRoute,
  getRangeNumbytesRoute,
  getRedirectNRoute,
  getRedirectToRoute,
  getRelativeRedirectNRoute,
  getResponseHeadersRoute,
  getRobotsTxtRoute,
  getStatusCodesRoute,
  getStreamBytesNRoute,
  getStreamNRoute,
  getUserAgentRoute,
  getUuidRoute,
  getXmlRoute,
  patchAnythingAnythingRoute,
  patchAnythingRoute,
  patchDelayDelayRoute,
  patchPatchRoute,
  patchRedirectToRoute,
  patchStatusCodesRoute,
  postAnythingAnythingRoute,
  postAnythingRoute,
  postDelayDelayRoute,
  postPostRoute,
  postRedirectToRoute,
  postResponseHeadersRoute,
  postStatusCodesRoute,
  putAnythingAnythingRoute,
  putAnythingRoute,
  putDelayDelayRoute,
  putPutRoute,
  putRedirectToRoute,
  putStatusCodesRoute,
  traceAnythingAnythingRoute,
  traceAnythingRoute,
  traceDelayDelayRoute,
  traceRedirectToRoute,
  traceStatusCodesRoute,
} from './routes'
import {
  deleteAnythingAnythingRouteHandler,
  deleteAnythingRouteHandler,
  deleteDelayDelayRouteHandler,
  deleteDeleteRouteHandler,
  deleteRedirectToRouteHandler,
  deleteStatusCodesRouteHandler,
  getAbsoluteRedirectNRouteHandler,
  getAnythingAnythingRouteHandler,
  getAnythingRouteHandler,
  getBase64ValueRouteHandler,
  getBasicAuthUserPasswdRouteHandler,
  getBearerRouteHandler,
  getBrotliRouteHandler,
  getBytesNRouteHandler,
  getCacheRouteHandler,
  getCacheValueRouteHandler,
  getCookiesDeleteRouteHandler,
  getCookiesRouteHandler,
  getCookiesSetNameValueRouteHandler,
  getCookiesSetRouteHandler,
  getDeflateRouteHandler,
  getDelayDelayRouteHandler,
  getDenyRouteHandler,
  getDigestAuthQopUserPasswdAlgorithmRouteHandler,
  getDigestAuthQopUserPasswdAlgorithmStaleAfterRouteHandler,
  getDigestAuthQopUserPasswdRouteHandler,
  getDripRouteHandler,
  getEncodingUtf8RouteHandler,
  getEtagEtagRouteHandler,
  getGetRouteHandler,
  getGzipRouteHandler,
  getHeadersRouteHandler,
  getHiddenBasicAuthUserPasswdRouteHandler,
  getHtmlRouteHandler,
  getImageJpegRouteHandler,
  getImagePngRouteHandler,
  getImageRouteHandler,
  getImageSvgRouteHandler,
  getImageWebpRouteHandler,
  getIpRouteHandler,
  getJsonRouteHandler,
  getLinksNOffsetRouteHandler,
  getRangeNumbytesRouteHandler,
  getRedirectNRouteHandler,
  getRedirectToRouteHandler,
  getRelativeRedirectNRouteHandler,
  getResponseHeadersRouteHandler,
  getRobotsTxtRouteHandler,
  getStatusCodesRouteHandler,
  getStreamBytesNRouteHandler,
  getStreamNRouteHandler,
  getUserAgentRouteHandler,
  getUuidRouteHandler,
  getXmlRouteHandler,
  patchAnythingAnythingRouteHandler,
  patchAnythingRouteHandler,
  patchDelayDelayRouteHandler,
  patchPatchRouteHandler,
  patchRedirectToRouteHandler,
  patchStatusCodesRouteHandler,
  postAnythingAnythingRouteHandler,
  postAnythingRouteHandler,
  postDelayDelayRouteHandler,
  postPostRouteHandler,
  postRedirectToRouteHandler,
  postResponseHeadersRouteHandler,
  postStatusCodesRouteHandler,
  putAnythingAnythingRouteHandler,
  putAnythingRouteHandler,
  putDelayDelayRouteHandler,
  putPutRouteHandler,
  putRedirectToRouteHandler,
  putStatusCodesRouteHandler,
  traceAnythingAnythingRouteHandler,
  traceAnythingRouteHandler,
  traceDelayDelayRouteHandler,
  traceRedirectToRouteHandler,
  traceStatusCodesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAbsoluteRedirectNRoute, getAbsoluteRedirectNRouteHandler)
  .openapi(deleteAnythingRoute, deleteAnythingRouteHandler)
  .openapi(getAnythingRoute, getAnythingRouteHandler)
  .openapi(patchAnythingRoute, patchAnythingRouteHandler)
  .openapi(postAnythingRoute, postAnythingRouteHandler)
  .openapi(putAnythingRoute, putAnythingRouteHandler)
  .openapi(traceAnythingRoute, traceAnythingRouteHandler)
  .openapi(deleteAnythingAnythingRoute, deleteAnythingAnythingRouteHandler)
  .openapi(getAnythingAnythingRoute, getAnythingAnythingRouteHandler)
  .openapi(patchAnythingAnythingRoute, patchAnythingAnythingRouteHandler)
  .openapi(postAnythingAnythingRoute, postAnythingAnythingRouteHandler)
  .openapi(putAnythingAnythingRoute, putAnythingAnythingRouteHandler)
  .openapi(traceAnythingAnythingRoute, traceAnythingAnythingRouteHandler)
  .openapi(getBase64ValueRoute, getBase64ValueRouteHandler)
  .openapi(getBasicAuthUserPasswdRoute, getBasicAuthUserPasswdRouteHandler)
  .openapi(getBearerRoute, getBearerRouteHandler)
  .openapi(getBrotliRoute, getBrotliRouteHandler)
  .openapi(getBytesNRoute, getBytesNRouteHandler)
  .openapi(getCacheRoute, getCacheRouteHandler)
  .openapi(getCacheValueRoute, getCacheValueRouteHandler)
  .openapi(getCookiesRoute, getCookiesRouteHandler)
  .openapi(getCookiesDeleteRoute, getCookiesDeleteRouteHandler)
  .openapi(getCookiesSetRoute, getCookiesSetRouteHandler)
  .openapi(getCookiesSetNameValueRoute, getCookiesSetNameValueRouteHandler)
  .openapi(getDeflateRoute, getDeflateRouteHandler)
  .openapi(deleteDelayDelayRoute, deleteDelayDelayRouteHandler)
  .openapi(getDelayDelayRoute, getDelayDelayRouteHandler)
  .openapi(patchDelayDelayRoute, patchDelayDelayRouteHandler)
  .openapi(postDelayDelayRoute, postDelayDelayRouteHandler)
  .openapi(putDelayDelayRoute, putDelayDelayRouteHandler)
  .openapi(traceDelayDelayRoute, traceDelayDelayRouteHandler)
  .openapi(deleteDeleteRoute, deleteDeleteRouteHandler)
  .openapi(getDenyRoute, getDenyRouteHandler)
  .openapi(getDigestAuthQopUserPasswdRoute, getDigestAuthQopUserPasswdRouteHandler)
  .openapi(
    getDigestAuthQopUserPasswdAlgorithmRoute,
    getDigestAuthQopUserPasswdAlgorithmRouteHandler,
  )
  .openapi(
    getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute,
    getDigestAuthQopUserPasswdAlgorithmStaleAfterRouteHandler,
  )
  .openapi(getDripRoute, getDripRouteHandler)
  .openapi(getEncodingUtf8Route, getEncodingUtf8RouteHandler)
  .openapi(getEtagEtagRoute, getEtagEtagRouteHandler)
  .openapi(getGetRoute, getGetRouteHandler)
  .openapi(getGzipRoute, getGzipRouteHandler)
  .openapi(getHeadersRoute, getHeadersRouteHandler)
  .openapi(getHiddenBasicAuthUserPasswdRoute, getHiddenBasicAuthUserPasswdRouteHandler)
  .openapi(getHtmlRoute, getHtmlRouteHandler)
  .openapi(getImageRoute, getImageRouteHandler)
  .openapi(getImageJpegRoute, getImageJpegRouteHandler)
  .openapi(getImagePngRoute, getImagePngRouteHandler)
  .openapi(getImageSvgRoute, getImageSvgRouteHandler)
  .openapi(getImageWebpRoute, getImageWebpRouteHandler)
  .openapi(getIpRoute, getIpRouteHandler)
  .openapi(getJsonRoute, getJsonRouteHandler)
  .openapi(getLinksNOffsetRoute, getLinksNOffsetRouteHandler)
  .openapi(patchPatchRoute, patchPatchRouteHandler)
  .openapi(postPostRoute, postPostRouteHandler)
  .openapi(putPutRoute, putPutRouteHandler)
  .openapi(getRangeNumbytesRoute, getRangeNumbytesRouteHandler)
  .openapi(deleteRedirectToRoute, deleteRedirectToRouteHandler)
  .openapi(getRedirectToRoute, getRedirectToRouteHandler)
  .openapi(patchRedirectToRoute, patchRedirectToRouteHandler)
  .openapi(postRedirectToRoute, postRedirectToRouteHandler)
  .openapi(putRedirectToRoute, putRedirectToRouteHandler)
  .openapi(traceRedirectToRoute, traceRedirectToRouteHandler)
  .openapi(getRedirectNRoute, getRedirectNRouteHandler)
  .openapi(getRelativeRedirectNRoute, getRelativeRedirectNRouteHandler)
  .openapi(getResponseHeadersRoute, getResponseHeadersRouteHandler)
  .openapi(postResponseHeadersRoute, postResponseHeadersRouteHandler)
  .openapi(getRobotsTxtRoute, getRobotsTxtRouteHandler)
  .openapi(deleteStatusCodesRoute, deleteStatusCodesRouteHandler)
  .openapi(getStatusCodesRoute, getStatusCodesRouteHandler)
  .openapi(patchStatusCodesRoute, patchStatusCodesRouteHandler)
  .openapi(postStatusCodesRoute, postStatusCodesRouteHandler)
  .openapi(putStatusCodesRoute, putStatusCodesRouteHandler)
  .openapi(traceStatusCodesRoute, traceStatusCodesRouteHandler)
  .openapi(getStreamBytesNRoute, getStreamBytesNRouteHandler)
  .openapi(getStreamNRoute, getStreamNRouteHandler)
  .openapi(getUserAgentRoute, getUserAgentRouteHandler)
  .openapi(getUuidRoute, getUuidRouteHandler)
  .openapi(getXmlRoute, getXmlRouteHandler)

export default app
