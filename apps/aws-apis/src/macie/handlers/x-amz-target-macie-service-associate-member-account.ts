import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceAssociateMemberAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMacieServiceAssociateMemberAccountHandler = app.openapi(
  postXAmzTargetMacieServiceAssociateMemberAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
