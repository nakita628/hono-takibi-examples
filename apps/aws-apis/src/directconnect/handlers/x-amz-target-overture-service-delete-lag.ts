import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteLagRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteLagHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
