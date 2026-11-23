import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsCreateRotationOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsCreateRotationOverrideHandler = app.openapi(
  postXAmzTargetSSMContactsCreateRotationOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
