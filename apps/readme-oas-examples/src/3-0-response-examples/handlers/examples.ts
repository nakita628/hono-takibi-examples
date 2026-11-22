import { OpenAPIHono } from '@hono/zod-openapi'
import { getExamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const examplesHandler = app.openapi(getExamplesRoute, (c) => {
  throw new Error('Not implemented')
})
