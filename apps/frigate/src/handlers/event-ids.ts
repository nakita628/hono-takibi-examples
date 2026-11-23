import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventIdsHandler = app.openapi(getEventIdsRoute, (c) => {
  throw new Error('Not implemented')
})
