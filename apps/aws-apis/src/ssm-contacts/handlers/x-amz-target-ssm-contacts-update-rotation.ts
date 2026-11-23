import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsUpdateRotationHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
