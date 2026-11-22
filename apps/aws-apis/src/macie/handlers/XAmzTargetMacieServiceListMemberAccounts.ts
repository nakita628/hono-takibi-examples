import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMacieServiceListMemberAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMacieServiceListMemberAccountsHandler = app.openapi(
  postXAmzTargetMacieServiceListMemberAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
