import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseSearchCaseSearchIdRoute, getCaseSearchRoute } from '../routes'

export const getCaseSearchRouteHandler: RouteHandler<typeof getCaseSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseSearchCaseSearchIdRouteHandler: RouteHandler<
  typeof getCaseSearchCaseSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
