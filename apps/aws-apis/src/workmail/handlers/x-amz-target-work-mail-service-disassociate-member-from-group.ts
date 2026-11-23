import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDisassociateMemberFromGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceDisassociateMemberFromGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
