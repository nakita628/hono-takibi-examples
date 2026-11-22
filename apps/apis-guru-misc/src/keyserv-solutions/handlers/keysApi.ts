import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1KeysApiCurrentSerialRoute,
  getV1KeysApiCustomSerialRoute,
  getV1KeysApiExpirySerialRoute,
  getV1KeysApiFindSerialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysApiHandler = app
  .openapi(getV1KeysApiCurrentSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiCustomSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiExpirySerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiFindSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
