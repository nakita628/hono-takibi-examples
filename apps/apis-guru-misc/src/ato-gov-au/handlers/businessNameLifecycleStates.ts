import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsBusinessNameLifecycleStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const businessNameLifecycleStatesHandler = app.openapi(
  getClassificationsBusinessNameLifecycleStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
