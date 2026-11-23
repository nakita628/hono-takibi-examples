import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
