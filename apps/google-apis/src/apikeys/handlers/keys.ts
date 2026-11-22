import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2KeysLookupKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app.openapi(getV2KeysLookupKeyRoute, (c) => {
  throw new Error('Not implemented')
})
