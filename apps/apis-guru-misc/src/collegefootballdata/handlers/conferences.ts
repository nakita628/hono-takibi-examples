import { OpenAPIHono } from '@hono/zod-openapi'
import { getConferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const conferencesHandler = app.openapi(getConferencesRoute, (c) => {
  throw new Error('Not implemented')
})
