import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAssociateConnectionWithLagRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAssociateConnectionWithLagHandler = app.openapi(
  postXAmzTargetOvertureServiceAssociateConnectionWithLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
