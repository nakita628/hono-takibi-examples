import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getElectionsIndexRoute,
  getElectionsSearchIndexRoute,
  getElectionsSummaryIndexRoute,
} from '../routes'

export const getElectionsIndexRouteHandler: RouteHandler<typeof getElectionsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getElectionsSearchIndexRouteHandler: RouteHandler<
  typeof getElectionsSearchIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getElectionsSummaryIndexRouteHandler: RouteHandler<
  typeof getElectionsSummaryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
