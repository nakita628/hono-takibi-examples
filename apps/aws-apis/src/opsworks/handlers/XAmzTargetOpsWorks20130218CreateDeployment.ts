import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CreateDeploymentHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
