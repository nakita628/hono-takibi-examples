import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCardIssuersIdRoute,
  getCardIssuersRoute,
  postCardIssuersRoute,
  putCardIssuersIdRoute,
} from '../routes'

export const postCardIssuersRouteHandler: RouteHandler<typeof postCardIssuersRoute> = async (
  c,
) => {}

export const getCardIssuersRouteHandler: RouteHandler<typeof getCardIssuersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCardIssuersIdRouteHandler: RouteHandler<typeof putCardIssuersIdRoute> = async (
  c,
) => {}

export const deleteCardIssuersIdRouteHandler: RouteHandler<
  typeof deleteCardIssuersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
