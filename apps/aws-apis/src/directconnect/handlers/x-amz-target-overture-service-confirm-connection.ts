import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceConfirmConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
