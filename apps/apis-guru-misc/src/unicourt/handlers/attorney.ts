import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAttorneyAttorneyIdAssociatedPartiesRoute,
  getAttorneyAttorneyIdRoute,
} from '../routes'

export const getAttorneyAttorneyIdRouteHandler: RouteHandler<
  typeof getAttorneyAttorneyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttorneyAttorneyIdAssociatedPartiesRouteHandler: RouteHandler<
  typeof getAttorneyAttorneyIdAssociatedPartiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
