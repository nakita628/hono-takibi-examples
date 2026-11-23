import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsGetRotationHandler = app.openapi(
  postXAmzTargetSSMContactsGetRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
