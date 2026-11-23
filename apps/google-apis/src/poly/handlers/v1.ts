import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1AssetsRoute,
  getV1NameAssetsRoute,
  getV1NameLikedassetsRoute,
  getV1NameRoute,
} from '../routes'

export const getV1AssetsRouteHandler: RouteHandler<typeof getV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameAssetsRouteHandler: RouteHandler<typeof getV1NameAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameLikedassetsRouteHandler: RouteHandler<
  typeof getV1NameLikedassetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
