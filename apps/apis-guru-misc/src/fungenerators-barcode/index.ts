import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBarcodeDecodeTypesRoute,
  getBarcodeEncodeRoute,
  getBarcodeEncodeTypesRoute,
  postBarcodeDecodeRoute,
} from './routes'
import {
  getBarcodeDecodeTypesRouteHandler,
  getBarcodeEncodeRouteHandler,
  getBarcodeEncodeTypesRouteHandler,
  postBarcodeDecodeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBarcodeDecodeRoute, postBarcodeDecodeRouteHandler)
  .openapi(getBarcodeDecodeTypesRoute, getBarcodeDecodeTypesRouteHandler)
  .openapi(getBarcodeEncodeRoute, getBarcodeEncodeRouteHandler)
  .openapi(getBarcodeEncodeTypesRoute, getBarcodeEncodeTypesRouteHandler)

export default app
