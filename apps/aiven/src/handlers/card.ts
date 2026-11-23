import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCardCardIdRoute,
  getCardRoute,
  postCardRoute,
  putCardCardIdRoute,
} from '../routes'

export const postCardRouteHandler: RouteHandler<typeof postCardRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardRouteHandler: RouteHandler<typeof getCardRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCardCardIdRouteHandler: RouteHandler<typeof deleteCardCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCardCardIdRouteHandler: RouteHandler<typeof putCardCardIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
