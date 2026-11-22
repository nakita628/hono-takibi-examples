import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DeploymentsDeploymentIdChecksCheckIdRoute,
  getV1DeploymentsDeploymentIdChecksRoute,
  patchV1DeploymentsDeploymentIdChecksCheckIdRoute,
  postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute,
  postV1DeploymentsDeploymentIdChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksHandler = app
  .openapi(postV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
