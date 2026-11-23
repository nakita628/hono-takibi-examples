import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePrincipalIdFormatRoute,
  postActionDescribePrincipalIdFormatRoute,
} from '../routes'

export const getActionDescribePrincipalIdFormatRouteHandler: RouteHandler<
  typeof getActionDescribePrincipalIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePrincipalIdFormatRouteHandler: RouteHandler<
  typeof postActionDescribePrincipalIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
