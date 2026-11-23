import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceAssociateIpGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceAssociateIpGroupsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceAssociateIpGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
