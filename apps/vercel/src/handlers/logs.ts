import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(
  getV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
