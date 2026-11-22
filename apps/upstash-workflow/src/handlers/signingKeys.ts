import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2KeysRoute, postV2KeysRotateRoute } from '../routes'

const app = new OpenAPIHono()

export const signingKeysHandler = app
  .openapi(getV2KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KeysRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
