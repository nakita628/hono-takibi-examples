import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCertificatesCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesRoute,
  postCertificatesRoute,
} from '../routes'

export const getCertificatesRouteHandler: RouteHandler<typeof getCertificatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCertificatesRouteHandler: RouteHandler<typeof postCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
