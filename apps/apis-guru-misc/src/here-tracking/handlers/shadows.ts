import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShadowsV2TrackingIdRoute,
  getShadowsV2HealthRoute,
  getShadowsV2TrackingIdRoute,
  getShadowsV2TrackingIdStateRoute,
  getShadowsV2TrackingIdStateSelectorRoute,
  getShadowsV2VersionRoute,
  getShadowsV4Route,
  postShadowsV2BatchRoute,
  putShadowsV2TrackingIdRoute,
} from '../routes'

export const postShadowsV2BatchRouteHandler: RouteHandler<typeof postShadowsV2BatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShadowsV2HealthRouteHandler: RouteHandler<typeof getShadowsV2HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShadowsV2VersionRouteHandler: RouteHandler<
  typeof getShadowsV2VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShadowsV2TrackingIdRouteHandler: RouteHandler<
  typeof deleteShadowsV2TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShadowsV2TrackingIdRouteHandler: RouteHandler<
  typeof getShadowsV2TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShadowsV2TrackingIdRouteHandler: RouteHandler<
  typeof putShadowsV2TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShadowsV2TrackingIdStateRouteHandler: RouteHandler<
  typeof getShadowsV2TrackingIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShadowsV2TrackingIdStateSelectorRouteHandler: RouteHandler<
  typeof getShadowsV2TrackingIdStateSelectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShadowsV4RouteHandler: RouteHandler<typeof getShadowsV4Route> = async (c) => {
  throw new Error('Not implemented')
}
