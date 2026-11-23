import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListGroupMembersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListGroupMembersHandler = app.openapi(
  postXAmzTargetWorkMailServiceListGroupMembersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
