import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetContactPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsGetContactPolicyHandler = app.openapi(
  postXAmzTargetSSMContactsGetContactPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
