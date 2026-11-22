import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
