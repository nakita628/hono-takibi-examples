import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploymentsDeploymentOwnerDeploymentNameRoute,
  getDeploymentsDeploymentOwnerDeploymentNameRoute,
  getDeploymentsRoute,
  patchDeploymentsDeploymentOwnerDeploymentNameRoute,
  postDeploymentsDeploymentOwnerDeploymentNamePredictionsRoute,
  postDeploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeploymentsDeploymentOwnerDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentsDeploymentOwnerDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeploymentsDeploymentOwnerDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentsDeploymentOwnerDeploymentNamePredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
