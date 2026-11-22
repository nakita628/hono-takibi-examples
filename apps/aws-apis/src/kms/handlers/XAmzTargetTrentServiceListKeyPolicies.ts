import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListKeyPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListKeyPoliciesHandler = app.openapi(
  postXAmzTargetTrentServiceListKeyPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
