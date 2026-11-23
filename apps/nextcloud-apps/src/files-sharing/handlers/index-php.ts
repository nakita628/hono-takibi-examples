import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIndexPhpAppsFilesSharingPublicpreviewTokenRoute,
  getIndexPhpSTokenPreviewRoute,
  postIndexPhpAppsFilesSharingShareinfoRoute,
} from '../routes'

export const getIndexPhpSTokenPreviewRouteHandler: RouteHandler<
  typeof getIndexPhpSTokenPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIndexPhpAppsFilesSharingPublicpreviewTokenRouteHandler: RouteHandler<
  typeof getIndexPhpAppsFilesSharingPublicpreviewTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexPhpAppsFilesSharingShareinfoRouteHandler: RouteHandler<
  typeof postIndexPhpAppsFilesSharingShareinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
