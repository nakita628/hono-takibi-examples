import { OpenAPIHono } from '@hono/zod-openapi'
import { postStandardDeviationRoute } from '../routes'

const app = new OpenAPIHono()

export const standardDeviationHandler = app.openapi(postStandardDeviationRoute, (c) => {
  throw new Error('Not implemented')
})
