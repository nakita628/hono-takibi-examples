import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsDeleteRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
