import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinearregRoute } from '../routes'

const app = new OpenAPIHono()

export const linearregHandler = app.openapi(getLinearregRoute, (c) => {
  throw new Error('Not implemented')
})
