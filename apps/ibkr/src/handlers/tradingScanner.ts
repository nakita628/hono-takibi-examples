import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ApiIserverScannerParamsRoute, postV1ApiIserverScannerRunRoute } from '../routes'

const app = new OpenAPIHono()

export const tradingScannerHandler = app
  .openapi(postV1ApiIserverScannerRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverScannerParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
