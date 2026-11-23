import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCounterpartyCounterpartyIdRoute,
  getCounterpartyCounterpartyIdRoute,
  postCounterpartyRoute,
} from '../routes'

export const postCounterpartyRouteHandler: RouteHandler<typeof postCounterpartyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCounterpartyCounterpartyIdRouteHandler: RouteHandler<
  typeof getCounterpartyCounterpartyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCounterpartyCounterpartyIdRouteHandler: RouteHandler<
  typeof deleteCounterpartyCounterpartyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
