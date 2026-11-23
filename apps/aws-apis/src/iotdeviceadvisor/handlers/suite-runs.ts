import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuiteRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const suiteRunsHandler = app.openapi(getSuiteRunsRoute, (c) => {
  throw new Error('Not implemented')
})
