import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDisassociateMacSecKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDisassociateMacSecKeyHandler = app.openapi(
  postXAmzTargetOvertureServiceDisassociateMacSecKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
