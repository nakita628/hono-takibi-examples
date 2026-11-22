import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateLoginProfileRoute, postActionUpdateLoginProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateLoginProfileHandler = app
  .openapi(getActionUpdateLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
