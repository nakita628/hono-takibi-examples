import { OpenAPIHono } from '@hono/zod-openapi'
import { getChannelsScopeAppInstanceUserMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsScopeAppInstanceUserMembershipsHandler = app.openapi(
  getChannelsScopeAppInstanceUserMembershipsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
