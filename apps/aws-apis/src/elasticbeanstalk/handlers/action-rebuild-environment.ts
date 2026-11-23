import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebuildEnvironmentRoute, postActionRebuildEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRebuildEnvironmentHandler = app
  .openapi(getActionRebuildEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebuildEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
