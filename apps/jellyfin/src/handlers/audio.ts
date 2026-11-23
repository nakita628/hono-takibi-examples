import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAudioItemIdLyricsRoute,
  getAudioItemIdLyricsRoute,
  getAudioItemIdRemoteSearchLyricsRoute,
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  getAudioItemIdUniversalRoute,
  headAudioItemIdStreamContainerRoute,
  headAudioItemIdStreamRoute,
  headAudioItemIdUniversalRoute,
  postAudioItemIdLyricsRoute,
  postAudioItemIdRemoteSearchLyricsLyricIdRoute,
} from '../routes'

export const getAudioItemIdStreamRouteHandler: RouteHandler<
  typeof getAudioItemIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headAudioItemIdStreamRouteHandler: RouteHandler<
  typeof headAudioItemIdStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioItemIdStreamContainerRouteHandler: RouteHandler<
  typeof getAudioItemIdStreamContainerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headAudioItemIdStreamContainerRouteHandler: RouteHandler<
  typeof headAudioItemIdStreamContainerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioItemIdLyricsRouteHandler: RouteHandler<
  typeof getAudioItemIdLyricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudioItemIdLyricsRouteHandler: RouteHandler<
  typeof postAudioItemIdLyricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAudioItemIdLyricsRouteHandler: RouteHandler<
  typeof deleteAudioItemIdLyricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioItemIdRemoteSearchLyricsRouteHandler: RouteHandler<
  typeof getAudioItemIdRemoteSearchLyricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudioItemIdRemoteSearchLyricsLyricIdRouteHandler: RouteHandler<
  typeof postAudioItemIdRemoteSearchLyricsLyricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioItemIdUniversalRouteHandler: RouteHandler<
  typeof getAudioItemIdUniversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headAudioItemIdUniversalRouteHandler: RouteHandler<
  typeof headAudioItemIdUniversalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
