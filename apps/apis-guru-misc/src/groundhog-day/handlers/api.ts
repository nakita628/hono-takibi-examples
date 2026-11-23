import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1GroundhogsRoute,
  getApiV1GroundhogsSlugRoute,
  getApiV1PredictionsRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from '../routes'

export const getApiV1RouteHandler: RouteHandler<typeof getApiV1Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroundhogsRouteHandler: RouteHandler<typeof getApiV1GroundhogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1GroundhogsSlugRouteHandler: RouteHandler<
  typeof getApiV1GroundhogsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PredictionsRouteHandler: RouteHandler<
  typeof getApiV1PredictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SpecRouteHandler: RouteHandler<typeof getApiV1SpecRoute> = async (c) => {
  throw new Error('Not implemented')
}
