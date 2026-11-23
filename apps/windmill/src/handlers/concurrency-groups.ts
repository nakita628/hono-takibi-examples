import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConcurrencyGroupsPruneConcurrencyIdRoute,
  getConcurrencyGroupsIdKeyRoute,
  getConcurrencyGroupsListRoute,
} from '../routes'

export const getConcurrencyGroupsListRouteHandler: RouteHandler<
  typeof getConcurrencyGroupsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConcurrencyGroupsPruneConcurrencyIdRouteHandler: RouteHandler<
  typeof deleteConcurrencyGroupsPruneConcurrencyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConcurrencyGroupsIdKeyRouteHandler: RouteHandler<
  typeof getConcurrencyGroupsIdKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
