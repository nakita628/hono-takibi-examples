import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  getV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute,
  getV2DeploymentsDeploymentIdCheckRunsRoute,
  getV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  getV2ProjectsProjectIdOrNameChecksCheckIdRunsRoute,
  getV2ProjectsProjectIdOrNameChecksRoute,
  patchV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute,
  patchV2ProjectsProjectIdOrNameChecksCheckIdRoute,
  postV2DeploymentsDeploymentIdCheckRunsRoute,
  postV2ProjectsProjectIdOrNameChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksV2Handler = app
  .openapi(getV2ProjectsProjectIdOrNameChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdOrNameChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProjectsProjectIdOrNameChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdOrNameChecksCheckIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsDeploymentIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DeploymentsDeploymentIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DeploymentsDeploymentIdCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
