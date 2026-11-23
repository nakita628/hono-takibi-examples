import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProvidersLyricsLyricIdRoute,
  getProvidersSubtitlesSubtitlesSubtitleIdRoute,
} from '../routes'

export const getProvidersLyricsLyricIdRouteHandler: RouteHandler<
  typeof getProvidersLyricsLyricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSubtitlesSubtitlesSubtitleIdRouteHandler: RouteHandler<
  typeof getProvidersSubtitlesSubtitlesSubtitleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
