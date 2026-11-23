import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta1NameRoute,
  getV1beta1ParentInsightsRoute,
  getV1beta1ParentRecommendationsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameMarkAcceptedRoute,
  postV1beta1NameMarkClaimedRoute,
  postV1beta1NameMarkDismissedRoute,
  postV1beta1NameMarkFailedRoute,
  postV1beta1NameMarkSucceededRoute,
} from '../routes'

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta1NameRouteHandler: RouteHandler<typeof patchV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameMarkAcceptedRouteHandler: RouteHandler<
  typeof postV1beta1NameMarkAcceptedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameMarkClaimedRouteHandler: RouteHandler<
  typeof postV1beta1NameMarkClaimedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameMarkDismissedRouteHandler: RouteHandler<
  typeof postV1beta1NameMarkDismissedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameMarkFailedRouteHandler: RouteHandler<
  typeof postV1beta1NameMarkFailedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameMarkSucceededRouteHandler: RouteHandler<
  typeof postV1beta1NameMarkSucceededRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentInsightsRouteHandler: RouteHandler<
  typeof getV1beta1ParentInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentRecommendationsRouteHandler: RouteHandler<
  typeof getV1beta1ParentRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
