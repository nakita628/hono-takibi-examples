import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesIdRoute,
  getImagesIdRoute,
  getImagesRoute,
  postBatchQrcodeRoute,
  postImagesRoute,
  postQrcodeContactRoute,
  postQrcodeCryptoRoute,
  postQrcodeEmailRoute,
  postQrcodeGeoRoute,
  postQrcodePhoneRoute,
  postQrcodeRoute,
  postQrcodeSmsRoute,
  postQrcodeTextRoute,
  postQrcodeWifiRoute,
} from './routes'
import {
  deleteImagesIdRouteHandler,
  getImagesIdRouteHandler,
  getImagesRouteHandler,
  postBatchQrcodeRouteHandler,
  postImagesRouteHandler,
  postQrcodeContactRouteHandler,
  postQrcodeCryptoRouteHandler,
  postQrcodeEmailRouteHandler,
  postQrcodeGeoRouteHandler,
  postQrcodePhoneRouteHandler,
  postQrcodeRouteHandler,
  postQrcodeSmsRouteHandler,
  postQrcodeTextRouteHandler,
  postQrcodeWifiRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBatchQrcodeRoute, postBatchQrcodeRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(postImagesRoute, postImagesRouteHandler)
  .openapi(deleteImagesIdRoute, deleteImagesIdRouteHandler)
  .openapi(getImagesIdRoute, getImagesIdRouteHandler)
  .openapi(postQrcodeRoute, postQrcodeRouteHandler)
  .openapi(postQrcodeContactRoute, postQrcodeContactRouteHandler)
  .openapi(postQrcodeCryptoRoute, postQrcodeCryptoRouteHandler)
  .openapi(postQrcodeEmailRoute, postQrcodeEmailRouteHandler)
  .openapi(postQrcodeGeoRoute, postQrcodeGeoRouteHandler)
  .openapi(postQrcodePhoneRoute, postQrcodePhoneRouteHandler)
  .openapi(postQrcodeSmsRoute, postQrcodeSmsRouteHandler)
  .openapi(postQrcodeTextRoute, postQrcodeTextRouteHandler)
  .openapi(postQrcodeWifiRoute, postQrcodeWifiRouteHandler)

export default app
