import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSslcertificatesRoute,
  getSslcertificatesSha1FingerprintDownloadRoute,
  getSslcertificatesSha1FingerprintRoute,
} from '../routes'

export const getSslcertificatesRouteHandler: RouteHandler<typeof getSslcertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSslcertificatesSha1FingerprintRouteHandler: RouteHandler<
  typeof getSslcertificatesSha1FingerprintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSslcertificatesSha1FingerprintDownloadRouteHandler: RouteHandler<
  typeof getSslcertificatesSha1FingerprintDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
