import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBarcodeDecodeTypesRoute,
  getBarcodeEncodeRoute,
  getBarcodeEncodeTypesRoute,
  postBarcodeDecodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const barcodeHandler = app
  .openapi(postBarcodeDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBarcodeDecodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBarcodeEncodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBarcodeEncodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
