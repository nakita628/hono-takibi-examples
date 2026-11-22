import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsDeleteRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
