import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsUpdateRotationHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
