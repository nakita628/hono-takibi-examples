import { OpenAPIHono } from '@hono/zod-openapi'
import { postViolationsVerificationStateViolationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const violationsHandler = app.openapi(
  postViolationsVerificationStateViolationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
