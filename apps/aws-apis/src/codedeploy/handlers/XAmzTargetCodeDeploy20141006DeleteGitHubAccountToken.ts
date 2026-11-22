import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
