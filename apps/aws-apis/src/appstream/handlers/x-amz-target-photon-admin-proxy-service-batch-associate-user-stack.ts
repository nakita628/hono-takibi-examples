import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
