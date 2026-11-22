import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsDeleteRotationHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
