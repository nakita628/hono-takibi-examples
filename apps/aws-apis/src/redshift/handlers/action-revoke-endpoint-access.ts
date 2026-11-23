import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRevokeEndpointAccessRoute, postActionRevokeEndpointAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRevokeEndpointAccessHandler = app
  .openapi(getActionRevokeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
