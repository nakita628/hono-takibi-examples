import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2CertificatesCertificateIdRoute,
  getV2CertificatesCertificateIdRoute,
  getV2CertificatesRoute,
  postV2CertificatesRoute,
} from '../routes'

export const getV2CertificatesRouteHandler: RouteHandler<typeof getV2CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CertificatesRouteHandler: RouteHandler<typeof postV2CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2CertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteV2CertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getV2CertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
