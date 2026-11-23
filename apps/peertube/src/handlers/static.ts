import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStaticStreamingPlaylistsHlsFilenameRoute,
  getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
  getStaticWebVideosFilenameRoute,
  getStaticWebVideosPrivateFilenameRoute,
} from '../routes'

export const getStaticWebVideosFilenameRouteHandler: RouteHandler<
  typeof getStaticWebVideosFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticWebVideosPrivateFilenameRouteHandler: RouteHandler<
  typeof getStaticWebVideosPrivateFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticStreamingPlaylistsHlsFilenameRouteHandler: RouteHandler<
  typeof getStaticStreamingPlaylistsHlsFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticStreamingPlaylistsHlsPrivateFilenameRouteHandler: RouteHandler<
  typeof getStaticStreamingPlaylistsHlsPrivateFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
