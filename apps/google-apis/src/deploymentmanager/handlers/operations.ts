import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
