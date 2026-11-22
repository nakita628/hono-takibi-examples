import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsGetRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsGetRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
