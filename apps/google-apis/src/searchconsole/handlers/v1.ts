import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1UrlInspectionIndexInspectRoute,
  postV1UrlTestingToolsMobileFriendlyTestRunRoute,
} from '../routes'

export const postV1UrlInspectionIndexInspectRouteHandler: RouteHandler<
  typeof postV1UrlInspectionIndexInspectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1UrlTestingToolsMobileFriendlyTestRunRouteHandler: RouteHandler<
  typeof postV1UrlTestingToolsMobileFriendlyTestRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
