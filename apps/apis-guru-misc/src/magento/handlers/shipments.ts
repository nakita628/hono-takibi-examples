import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ShipmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const shipmentsHandler = app.openapi(getV1ShipmentsRoute, (c) => {
  throw new Error('Not implemented')
})
