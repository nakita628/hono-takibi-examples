import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentstrategiesDeploymentStrategyIdRoute,
  getDeploymentstrategiesRoute,
  patchDeploymentstrategiesDeploymentStrategyIdRoute,
  postDeploymentstrategiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentstrategiesHandler = app
  .openapi(postDeploymentstrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentstrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentstrategiesDeploymentStrategyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeploymentstrategiesDeploymentStrategyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
