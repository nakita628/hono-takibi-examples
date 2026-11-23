import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIndexPhpAppsOauth2AuthorizeRoute,
  postIndexPhpAppsOauth2ApiV1TokenRoute,
} from '../routes'

export const getIndexPhpAppsOauth2AuthorizeRouteHandler: RouteHandler<
  typeof getIndexPhpAppsOauth2AuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIndexPhpAppsOauth2ApiV1TokenRouteHandler: RouteHandler<
  typeof postIndexPhpAppsOauth2ApiV1TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
