import { OpenAPIHono } from '@hono/zod-openapi'
import { postMultischemaOfEverythingRoute } from '../routes'

const app = new OpenAPIHono()

export const multischemaHandler = app.openapi(postMultischemaOfEverythingRoute, (c) => {
  throw new Error('Not implemented')
})
