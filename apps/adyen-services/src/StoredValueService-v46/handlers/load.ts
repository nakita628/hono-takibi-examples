import { OpenAPIHono } from '@hono/zod-openapi'
import { postLoadRoute } from '../routes'

const app = new OpenAPIHono()

export const loadHandler = app.openapi(postLoadRoute, (c) => {
  throw new Error('Not implemented')
})
