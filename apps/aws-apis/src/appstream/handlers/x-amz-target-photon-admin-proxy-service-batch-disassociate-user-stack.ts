import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceBatchDisassociateUserStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
