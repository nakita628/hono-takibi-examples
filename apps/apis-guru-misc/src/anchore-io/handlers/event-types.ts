import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const eventTypesHandler = app.openapi(getEventTypesRoute, (c) => {
  throw new Error('Not implemented')
})
