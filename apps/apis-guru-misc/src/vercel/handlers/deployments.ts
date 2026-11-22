import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV13DeploymentsIdRoute,
  getV11DeploymentsDeploymentIdBuildsRoute,
  getV13DeploymentsIdOrUrlRoute,
  getV2DeploymentsIdOrUrlEventsRoute,
  getV6DeploymentsIdFilesFileIdRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DeploymentsRoute,
  patchV12DeploymentsIdCancelRoute,
  postV13DeploymentsRoute,
  postV2FilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getV11DeploymentsDeploymentIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV12DeploymentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV13DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV13DeploymentsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV13DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsIdOrUrlEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DeploymentsIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
