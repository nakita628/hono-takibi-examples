import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourceProfilesArtifactsResourceArnRoute,
  getResourceProfilesDetectionsResourceArnRoute,
  patchResourceProfilesDetectionsResourceArnRoute,
} from '../routes'

export const getResourceProfilesArtifactsResourceArnRouteHandler: RouteHandler<
  typeof getResourceProfilesArtifactsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourceProfilesDetectionsResourceArnRouteHandler: RouteHandler<
  typeof getResourceProfilesDetectionsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourceProfilesDetectionsResourceArnRouteHandler: RouteHandler<
  typeof patchResourceProfilesDetectionsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
