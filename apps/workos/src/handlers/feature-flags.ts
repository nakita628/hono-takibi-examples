import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFeatureFlagsSlugTargetsResourceIdRoute,
  getFeatureFlagsRoute,
  getFeatureFlagsSlugRoute,
  postFeatureFlagsSlugTargetsResourceIdRoute,
  putFeatureFlagsSlugDisableRoute,
  putFeatureFlagsSlugEnableRoute,
} from '../routes'

export const getFeatureFlagsRouteHandler: RouteHandler<typeof getFeatureFlagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeatureFlagsSlugRouteHandler: RouteHandler<
  typeof getFeatureFlagsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeatureFlagsSlugDisableRouteHandler: RouteHandler<
  typeof putFeatureFlagsSlugDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeatureFlagsSlugEnableRouteHandler: RouteHandler<
  typeof putFeatureFlagsSlugEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeatureFlagsSlugTargetsResourceIdRouteHandler: RouteHandler<
  typeof postFeatureFlagsSlugTargetsResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFeatureFlagsSlugTargetsResourceIdRouteHandler: RouteHandler<
  typeof deleteFeatureFlagsSlugTargetsResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
