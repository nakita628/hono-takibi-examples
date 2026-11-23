import { OpenAPIHono } from '@hono/zod-openapi'
import { postFreeBusyRoute } from '../routes'

const app = new OpenAPIHono()

export const freeBusyHandler = app.openapi(postFreeBusyRoute, (c) => {
  throw new Error('Not implemented')
})
