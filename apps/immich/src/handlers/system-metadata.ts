import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemMetadataAdminOnboardingRoute,
  postSystemMetadataAdminOnboardingRoute,
  getSystemMetadataReverseGeocodingStateRoute,
  getSystemMetadataVersionCheckStateRoute,
} from '../routes'

export const getSystemMetadataAdminOnboardingRouteHandler: RouteHandler<
  typeof getSystemMetadataAdminOnboardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemMetadataAdminOnboardingRouteHandler: RouteHandler<
  typeof postSystemMetadataAdminOnboardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemMetadataReverseGeocodingStateRouteHandler: RouteHandler<
  typeof getSystemMetadataReverseGeocodingStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemMetadataVersionCheckStateRouteHandler: RouteHandler<
  typeof getSystemMetadataVersionCheckStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
