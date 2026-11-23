import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDisassociateConnectionFromLagRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDisassociateConnectionFromLagHandler = app.openapi(
  postXAmzTargetOvertureServiceDisassociateConnectionFromLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
