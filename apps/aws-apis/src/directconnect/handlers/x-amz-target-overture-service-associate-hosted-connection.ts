import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAssociateHostedConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAssociateHostedConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceAssociateHostedConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
