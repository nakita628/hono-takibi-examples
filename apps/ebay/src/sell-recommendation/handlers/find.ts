import { OpenAPIHono } from '@hono/zod-openapi'
import { postFindRoute } from '../routes'

const app = new OpenAPIHono()

export const findHandler = app.openapi(postFindRoute, (c) => {
  throw new Error('Not implemented')
})
