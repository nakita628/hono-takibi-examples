import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrderOrderIdShipRoute } from '../routes'

const app = new OpenAPIHono()

export const orderOrderIdShipHandler = app.openapi(postV1OrderOrderIdShipRoute, (c) => {
  throw new Error('Not implemented')
})
