import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentproSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const contentproSearchHandler = app.openapi(getContentproSearchRoute, (c) => {
  throw new Error('Not implemented')
})
