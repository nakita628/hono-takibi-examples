import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
