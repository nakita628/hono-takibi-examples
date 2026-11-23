import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceAssociateMemberToGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceAssociateMemberToGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceAssociateMemberToGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
