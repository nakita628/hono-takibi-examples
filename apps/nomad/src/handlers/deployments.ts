import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentAllocationsDeploymentIDRoute,
  getDeploymentDeploymentIDRoute,
  getDeploymentsRoute,
  postDeploymentAllocationHealthDeploymentIDRoute,
  postDeploymentFailDeploymentIDRoute,
  postDeploymentPauseDeploymentIDRoute,
  postDeploymentPromoteDeploymentIDRoute,
  postDeploymentUnblockDeploymentIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getDeploymentDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentAllocationHealthDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentAllocationsDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentFailDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentPauseDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentPromoteDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentUnblockDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
