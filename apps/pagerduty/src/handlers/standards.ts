import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStandardsRoute,
  putStandardsIdRoute,
  getStandardsScoresResourceTypeRoute,
  getStandardsScoresResourceTypeIdRoute,
} from '../routes'

export const getStandardsRouteHandler: RouteHandler<typeof getStandardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putStandardsIdRouteHandler: RouteHandler<typeof putStandardsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStandardsScoresResourceTypeRouteHandler: RouteHandler<
  typeof getStandardsScoresResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStandardsScoresResourceTypeIdRouteHandler: RouteHandler<
  typeof getStandardsScoresResourceTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
