import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsDeleteRotationHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
