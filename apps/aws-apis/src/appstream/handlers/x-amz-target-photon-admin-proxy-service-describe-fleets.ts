import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeFleetsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
