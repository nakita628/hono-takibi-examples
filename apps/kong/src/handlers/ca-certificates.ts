import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCaCertificatesCaCertificateIdRoute,
  getCaCertificatesCaCertificateIdRoute,
  getCaCertificatesRoute,
  patchCaCertificatesCaCertificateIdRoute,
  postCaCertificatesRoute,
  putCaCertificatesCaCertificateIdRoute,
} from '../routes'

export const getCaCertificatesRouteHandler: RouteHandler<typeof getCaCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCaCertificatesRouteHandler: RouteHandler<typeof postCaCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCaCertificatesCaCertificateIdRouteHandler: RouteHandler<
  typeof deleteCaCertificatesCaCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaCertificatesCaCertificateIdRouteHandler: RouteHandler<
  typeof getCaCertificatesCaCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCaCertificatesCaCertificateIdRouteHandler: RouteHandler<
  typeof patchCaCertificatesCaCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCaCertificatesCaCertificateIdRouteHandler: RouteHandler<
  typeof putCaCertificatesCaCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
