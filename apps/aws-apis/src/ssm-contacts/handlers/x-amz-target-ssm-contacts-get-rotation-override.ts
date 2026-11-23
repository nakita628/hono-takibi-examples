import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsGetRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsGetRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
