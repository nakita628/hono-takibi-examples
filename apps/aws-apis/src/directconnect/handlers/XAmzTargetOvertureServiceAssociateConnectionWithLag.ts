import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAssociateConnectionWithLagRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceAssociateConnectionWithLagHandler = app.openapi(
  postXAmzTargetOvertureServiceAssociateConnectionWithLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
