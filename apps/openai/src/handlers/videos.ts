import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVideosVideoIdRoute,
  getVideosCharactersCharacterIdRoute,
  getVideosRoute,
  getVideosVideoIdContentRoute,
  getVideosVideoIdRoute,
  postVideosCharactersRoute,
  postVideosEditsRoute,
  postVideosExtensionsRoute,
  postVideosRoute,
  postVideosVideoIdRemixRoute,
} from '../routes'

export const postVideosRouteHandler: RouteHandler<typeof postVideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideosRouteHandler: RouteHandler<typeof getVideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVideosCharactersRouteHandler: RouteHandler<
  typeof postVideosCharactersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideosCharactersCharacterIdRouteHandler: RouteHandler<
  typeof getVideosCharactersCharacterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVideosEditsRouteHandler: RouteHandler<typeof postVideosEditsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVideosExtensionsRouteHandler: RouteHandler<
  typeof postVideosExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideosVideoIdRouteHandler: RouteHandler<typeof getVideosVideoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVideosVideoIdRouteHandler: RouteHandler<
  typeof deleteVideosVideoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideosVideoIdContentRouteHandler: RouteHandler<
  typeof getVideosVideoIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVideosVideoIdRemixRouteHandler: RouteHandler<
  typeof postVideosVideoIdRemixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
