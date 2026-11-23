import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const createComponentHandler = app.openapi(putCreateComponentRoute, (c) => {
  throw new Error('Not implemented')
})
