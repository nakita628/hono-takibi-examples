import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListApplicationRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006ListApplicationRevisionsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListApplicationRevisionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
