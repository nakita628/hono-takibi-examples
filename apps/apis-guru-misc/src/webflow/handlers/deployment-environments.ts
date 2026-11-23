import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  getDeploymentEnvironmentsRoute,
  optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute,
  optionsDeploymentEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentEnvironmentsHandler = app
  .openapi(getDeploymentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDeploymentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentEnvironmentsDeploymentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsDeploymentEnvironmentsDeploymentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
