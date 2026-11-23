import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAssetsIdRoute,
  getAssetsIdRoute,
  getAssetsRoute,
  postAssetsRoute,
} from '../routes'

export const postAssetsRouteHandler: RouteHandler<typeof postAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsRouteHandler: RouteHandler<typeof getAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAssetsIdRouteHandler: RouteHandler<typeof deleteAssetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsIdRouteHandler: RouteHandler<typeof getAssetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
