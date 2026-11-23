import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsSendActivationCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsSendActivationCodeHandler = app.openapi(
  postXAmzTargetSSMContactsSendActivationCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
