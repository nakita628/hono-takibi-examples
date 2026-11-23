import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetQueryStateRoute } from '../routes'

const app = new OpenAPIHono()

export const getQueryStateHandler = app.openapi(postGetQueryStateRoute, (c) => {
  throw new Error('Not implemented')
})
