import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteLagRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDeleteLagHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
