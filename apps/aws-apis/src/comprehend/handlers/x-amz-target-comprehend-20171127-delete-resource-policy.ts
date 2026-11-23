import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetComprehend20171127DeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
