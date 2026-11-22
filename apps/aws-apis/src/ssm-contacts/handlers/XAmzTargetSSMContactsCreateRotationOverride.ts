import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsCreateRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsCreateRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsCreateRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
