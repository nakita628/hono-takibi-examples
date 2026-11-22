import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachInstancesRoute, postActionAttachInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachInstancesHandler = app
  .openapi(getActionAttachInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
