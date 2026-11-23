import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionReleaseHostsRoute, postActionReleaseHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionReleaseHostsHandler = app
  .openapi(getActionReleaseHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReleaseHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
