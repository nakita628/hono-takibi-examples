import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStaticStreamingPlaylistsHlsFilenameRoute,
  getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
  getStaticWebseedFilenameRoute,
  getStaticWebseedPrivateFilenameRoute,
} from '../routes'

export const getStaticStreamingPlaylistsHlsPrivateFilenameRouteHandler: RouteHandler<
  typeof getStaticStreamingPlaylistsHlsPrivateFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticStreamingPlaylistsHlsFilenameRouteHandler: RouteHandler<
  typeof getStaticStreamingPlaylistsHlsFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticWebseedPrivateFilenameRouteHandler: RouteHandler<
  typeof getStaticWebseedPrivateFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaticWebseedFilenameRouteHandler: RouteHandler<
  typeof getStaticWebseedFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
