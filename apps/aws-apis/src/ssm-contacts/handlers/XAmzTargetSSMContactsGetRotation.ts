import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsGetRotationHandler = app.openapi(
  postXAmzTargetSSMContactsGetRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
