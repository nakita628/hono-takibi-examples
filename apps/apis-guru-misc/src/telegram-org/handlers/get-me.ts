import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetMeRoute } from '../routes'

const app = new OpenAPIHono()

export const getMeHandler = app.openapi(postGetMeRoute, (c) => {
  throw new Error('Not implemented')
})
