import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDisassociateIpGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDisassociateIpGroupsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDisassociateIpGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
