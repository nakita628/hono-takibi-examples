import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchClubsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchClubsHandler = app.openapi(postSearchClubsRoute, (c) => {
  throw new Error('Not implemented')
})
