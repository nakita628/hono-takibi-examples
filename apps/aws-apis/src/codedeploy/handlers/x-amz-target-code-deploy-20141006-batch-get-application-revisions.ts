import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
