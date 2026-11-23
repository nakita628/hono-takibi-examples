import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCertificatesCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesRoute,
  postCertificatesRoute,
  putCertificatesCertificateIdNewStatusRoute,
} from '../routes'

export const postCertificatesRouteHandler: RouteHandler<typeof postCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCertificatesRouteHandler: RouteHandler<typeof getCertificatesRoute> = async (c) => {
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

export const putCertificatesCertificateIdNewStatusRouteHandler: RouteHandler<
  typeof putCertificatesCertificateIdNewStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
