import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegressionApiRoute } from '../routes'

const app = new OpenAPIHono()

export const regressionHandler = app.openapi(postRegressionApiRoute, (c) => {
  throw new Error('Not implemented')
})
