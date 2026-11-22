import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute,
  putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matterbridgeHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
