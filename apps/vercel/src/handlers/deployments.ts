import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV13DeploymentsIdRoute,
  getV13DeploymentsIdOrUrlRoute,
  getV3DeploymentsIdOrUrlEventsRoute,
  getV6DeploymentsIdFilesRoute,
  getV7DeploymentsRoute,
  getV8DeploymentsIdFilesFileIdRoute,
  patchV12DeploymentsIdCancelRoute,
  patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRoute,
  postV13DeploymentsRoute,
  postV2FilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getV3DeploymentsIdOrUrlEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV13DeploymentsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV13DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV12DeploymentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV8DeploymentsIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV7DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV13DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
