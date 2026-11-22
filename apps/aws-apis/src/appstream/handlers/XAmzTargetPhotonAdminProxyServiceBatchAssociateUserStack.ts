import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceBatchAssociateUserStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
