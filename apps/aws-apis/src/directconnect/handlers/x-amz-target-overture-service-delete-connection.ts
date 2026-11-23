import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
