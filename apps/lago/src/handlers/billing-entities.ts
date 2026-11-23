import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillingEntitiesCodeRoute,
  getBillingEntitiesRoute,
  postBillingEntitiesRoute,
  putBillingEntitiesCodeRoute,
} from '../routes'

export const getBillingEntitiesRouteHandler: RouteHandler<typeof getBillingEntitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBillingEntitiesRouteHandler: RouteHandler<
  typeof postBillingEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillingEntitiesCodeRouteHandler: RouteHandler<
  typeof getBillingEntitiesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBillingEntitiesCodeRouteHandler: RouteHandler<
  typeof putBillingEntitiesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
