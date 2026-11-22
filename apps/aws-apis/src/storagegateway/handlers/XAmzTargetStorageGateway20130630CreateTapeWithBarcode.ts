import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateTapeWithBarcodeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630CreateTapeWithBarcodeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateTapeWithBarcodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
