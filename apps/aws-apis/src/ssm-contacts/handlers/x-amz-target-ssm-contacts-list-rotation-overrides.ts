import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListRotationOverridesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListRotationOverridesHandler = app.openapi(
  postXAmzTargetSSMContactsListRotationOverridesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
