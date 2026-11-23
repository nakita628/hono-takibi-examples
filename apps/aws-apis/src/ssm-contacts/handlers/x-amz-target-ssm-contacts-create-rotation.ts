import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsCreateRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsCreateRotationHandler = app.openapi(
  postXAmzTargetSSMContactsCreateRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
