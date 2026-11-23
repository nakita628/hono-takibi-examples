import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachTrafficSourcesRoute, postActionAttachTrafficSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAttachTrafficSourcesHandler = app
  .openapi(getActionAttachTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
