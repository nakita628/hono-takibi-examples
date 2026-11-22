import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127PutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127PutResourcePolicyHandler = app.openapi(
  postXAmzTargetComprehend20171127PutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
