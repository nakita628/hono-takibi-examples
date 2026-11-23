import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAssociateMacSecKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAssociateMacSecKeyHandler = app.openapi(
  postXAmzTargetOvertureServiceAssociateMacSecKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
