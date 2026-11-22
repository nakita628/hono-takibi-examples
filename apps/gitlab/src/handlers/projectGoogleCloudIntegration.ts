import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdGoogleCloudSetupIntegrationsShRoute,
  getApiV4ProjectsIdGoogleCloudSetupRunnerDeploymentProjectShRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectGoogleCloudIntegrationHandler = app
  .openapi(getApiV4ProjectsIdGoogleCloudSetupIntegrationsShRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdGoogleCloudSetupRunnerDeploymentProjectShRoute, (c) => {
    throw new Error('Not implemented')
  })
