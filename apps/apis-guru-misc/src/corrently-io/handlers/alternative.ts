import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAlternativeEaseeLastSessionsRoute,
  getAlternativeOcppLastSessionsRoute,
  getAlternativeOpenmeterActivitiesRoute,
  getAlternativeOpenmeterMetersRoute,
  getAlternativeOpenmeterReadingsRoute,
} from '../routes'

export const getAlternativeEaseeLastSessionsRouteHandler: RouteHandler<
  typeof getAlternativeEaseeLastSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlternativeOcppLastSessionsRouteHandler: RouteHandler<
  typeof getAlternativeOcppLastSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlternativeOpenmeterActivitiesRouteHandler: RouteHandler<
  typeof getAlternativeOpenmeterActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlternativeOpenmeterMetersRouteHandler: RouteHandler<
  typeof getAlternativeOpenmeterMetersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlternativeOpenmeterReadingsRouteHandler: RouteHandler<
  typeof getAlternativeOpenmeterReadingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
