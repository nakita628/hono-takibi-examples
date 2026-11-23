import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrossListingsRoute } from '../routes'

const app = new OpenAPIHono()

export const crossListingsHandler = app.openapi(getCrossListingsRoute, (c) => {
  throw new Error('Not implemented')
})
