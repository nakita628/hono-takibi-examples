import { OpenAPIHono } from '@hono/zod-openapi'
import { getDealItemRoute } from '../routes'

const app = new OpenAPIHono()

export const dealItemHandler = app.openapi(getDealItemRoute, (c) => {
  throw new Error('Not implemented')
})
