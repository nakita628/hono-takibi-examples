import { OpenAPIHono } from '@hono/zod-openapi'
import { getLorInventoryV1CardsMeRoute } from '../routes'

const app = new OpenAPIHono()

export const lorInventoryV1Handler = app.openapi(getLorInventoryV1CardsMeRoute, (c) => {
  throw new Error('Not implemented')
})
