import { OpenAPIHono } from '@hono/zod-openapi'
import { postGlobalRoute } from '../routes'

const app = new OpenAPIHono()

export const globalHandler = app.openapi(postGlobalRoute, (c) => {
  throw new Error('Not implemented')
})
