import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTreatyCongressRoute,
  getTreatyCongressTreatyNumberActionsRoute,
  getTreatyCongressTreatyNumberCommitteesRoute,
  getTreatyCongressTreatyNumberRoute,
  getTreatyCongressTreatyNumberTreatySuffixActionsRoute,
  getTreatyCongressTreatyNumberTreatySuffixRoute,
  getTreatyRoute,
} from '../routes'

export const getTreatyRouteHandler: RouteHandler<typeof getTreatyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressRouteHandler: RouteHandler<typeof getTreatyCongressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressTreatyNumberRouteHandler: RouteHandler<
  typeof getTreatyCongressTreatyNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressTreatyNumberTreatySuffixRouteHandler: RouteHandler<
  typeof getTreatyCongressTreatyNumberTreatySuffixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressTreatyNumberActionsRouteHandler: RouteHandler<
  typeof getTreatyCongressTreatyNumberActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressTreatyNumberTreatySuffixActionsRouteHandler: RouteHandler<
  typeof getTreatyCongressTreatyNumberTreatySuffixActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTreatyCongressTreatyNumberCommitteesRouteHandler: RouteHandler<
  typeof getTreatyCongressTreatyNumberCommitteesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
