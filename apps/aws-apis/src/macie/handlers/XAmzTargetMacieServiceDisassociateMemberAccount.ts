import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceDisassociateMemberAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMacieServiceDisassociateMemberAccountHandler = app.openapi(
  postXAmzTargetMacieServiceDisassociateMemberAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
