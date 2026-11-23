import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
