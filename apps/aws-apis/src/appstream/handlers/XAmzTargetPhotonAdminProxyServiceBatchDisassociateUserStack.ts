import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
