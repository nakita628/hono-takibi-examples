import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlacesPlaceIdRoute,
  getPlacesCountRoute,
  getPlacesMicrosoftGraphRoomCountRoute,
  getPlacesMicrosoftGraphRoomRoute,
  getPlacesPlaceIdMicrosoftGraphRoomRoute,
  getPlacesPlaceIdRoute,
  getPlacesRoute,
  patchPlacesPlaceIdRoute,
  postPlacesRoute,
} from '../routes'

export const getPlacesRouteHandler: RouteHandler<typeof getPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlacesRouteHandler: RouteHandler<typeof postPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesCountRouteHandler: RouteHandler<typeof getPlacesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesMicrosoftGraphRoomRouteHandler: RouteHandler<
  typeof getPlacesMicrosoftGraphRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesMicrosoftGraphRoomCountRouteHandler: RouteHandler<
  typeof getPlacesMicrosoftGraphRoomCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlacesPlaceIdRouteHandler: RouteHandler<
  typeof deletePlacesPlaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdRouteHandler: RouteHandler<typeof getPlacesPlaceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPlacesPlaceIdRouteHandler: RouteHandler<typeof patchPlacesPlaceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceIdMicrosoftGraphRoomRouteHandler: RouteHandler<
  typeof getPlacesPlaceIdMicrosoftGraphRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}
