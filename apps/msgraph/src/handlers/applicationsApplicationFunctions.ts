import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplicationsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationsApplicationFunctionsHandler = app.openapi(
  getApplicationsDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
