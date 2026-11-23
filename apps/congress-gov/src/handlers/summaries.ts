import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSummariesCongressBillTypeRoute,
  getSummariesCongressRoute,
  getSummariesRoute,
} from '../routes'

export const getSummariesRouteHandler: RouteHandler<typeof getSummariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSummariesCongressRouteHandler: RouteHandler<
  typeof getSummariesCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSummariesCongressBillTypeRouteHandler: RouteHandler<
  typeof getSummariesCongressBillTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
