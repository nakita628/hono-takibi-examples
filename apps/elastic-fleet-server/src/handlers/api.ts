import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute,
  getApiFleetArtifactsIdSha2Route,
  getApiFleetFileIdRoute,
  getApiStatusRoute,
  postApiFleetAgentsEnrollRoute,
  postApiFleetAgentsIdAcksRoute,
  postApiFleetAgentsIdAuditUnenrollRoute,
  postApiFleetAgentsIdCheckinRoute,
  postApiFleetUploadsIdRoute,
  postApiFleetUploadsRoute,
  putApiFleetUploadsIdChunkNumRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetAgentsEnrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetAgentsIdCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetAgentsIdAcksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFleetArtifactsIdSha2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiFleetUploadsIdChunkNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFleetFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFleetAgentsIdAuditUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
