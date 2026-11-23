import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKvpairsIdRoute,
  getKvpairsIdRoute,
  getKvpairsRoute,
  postKvpairsRoute,
  putKvpairsIdRoute,
} from '../routes'

export const getKvpairsRouteHandler: RouteHandler<typeof getKvpairsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKvpairsRouteHandler: RouteHandler<typeof postKvpairsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKvpairsIdRouteHandler: RouteHandler<typeof deleteKvpairsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKvpairsIdRouteHandler: RouteHandler<typeof getKvpairsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putKvpairsIdRouteHandler: RouteHandler<typeof putKvpairsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
