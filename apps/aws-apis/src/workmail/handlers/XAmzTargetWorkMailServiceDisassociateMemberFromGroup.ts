import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDisassociateMemberFromGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceDisassociateMemberFromGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
