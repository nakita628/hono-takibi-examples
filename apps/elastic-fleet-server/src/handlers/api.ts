import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiStatusRouteHandler: RouteHandler<typeof getApiStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetAgentsEnrollRouteHandler: RouteHandler<
  typeof postApiFleetAgentsEnrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetAgentsIdCheckinRouteHandler: RouteHandler<
  typeof postApiFleetAgentsIdCheckinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetAgentsIdAcksRouteHandler: RouteHandler<
  typeof postApiFleetAgentsIdAcksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFleetArtifactsIdSha2RouteHandler: RouteHandler<
  typeof getApiFleetArtifactsIdSha2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetUploadsRouteHandler: RouteHandler<
  typeof postApiFleetUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiFleetUploadsIdChunkNumRouteHandler: RouteHandler<
  typeof putApiFleetUploadsIdChunkNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetUploadsIdRouteHandler: RouteHandler<
  typeof postApiFleetUploadsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFleetFileIdRouteHandler: RouteHandler<typeof getApiFleetFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRouteHandler: RouteHandler<
  typeof getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFleetAgentsIdAuditUnenrollRouteHandler: RouteHandler<
  typeof postApiFleetAgentsIdAuditUnenrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}
