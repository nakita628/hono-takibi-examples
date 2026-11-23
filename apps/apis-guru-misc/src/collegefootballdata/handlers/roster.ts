import { OpenAPIHono } from '@hono/zod-openapi'
import { getRosterRoute } from '../routes'

const app = new OpenAPIHono()

export const rosterHandler = app.openapi(getRosterRoute, (c) => {
  throw new Error('Not implemented')
})
