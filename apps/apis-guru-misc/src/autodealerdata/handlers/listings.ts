import { OpenAPIHono } from '@hono/zod-openapi'
import { getListingsRoute } from '../routes'

const app = new OpenAPIHono()

export const listingsHandler = app.openapi(getListingsRoute, (c) => {
  throw new Error('Not implemented')
})
