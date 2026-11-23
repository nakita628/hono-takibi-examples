import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getZipDownloadsZipDownloadIdContentRoute,
  getZipDownloadsZipDownloadIdStatusRoute,
  postZipDownloadsRoute,
} from '../routes'

export const postZipDownloadsRouteHandler: RouteHandler<typeof postZipDownloadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getZipDownloadsZipDownloadIdContentRouteHandler: RouteHandler<
  typeof getZipDownloadsZipDownloadIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZipDownloadsZipDownloadIdStatusRouteHandler: RouteHandler<
  typeof getZipDownloadsZipDownloadIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
