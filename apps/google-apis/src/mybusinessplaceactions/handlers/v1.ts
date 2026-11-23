import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentPlaceActionLinksRoute,
  getV1PlaceActionTypeMetadataRoute,
  patchV1NameRoute,
  postV1ParentPlaceActionLinksRoute,
} from '../routes'

export const getV1PlaceActionTypeMetadataRouteHandler: RouteHandler<
  typeof getV1PlaceActionTypeMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentPlaceActionLinksRouteHandler: RouteHandler<
  typeof getV1ParentPlaceActionLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentPlaceActionLinksRouteHandler: RouteHandler<
  typeof postV1ParentPlaceActionLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
