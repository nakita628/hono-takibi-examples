import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCertificatesIdRoute,
  getCertificatesActionsIdRoute,
  getCertificatesActionsRoute,
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  getCertificatesIdRoute,
  getCertificatesRoute,
  postCertificatesIdActionsRetryRoute,
  postCertificatesRoute,
  putCertificatesIdRoute,
} from '../routes'

export const getCertificatesRouteHandler: RouteHandler<typeof getCertificatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCertificatesRouteHandler: RouteHandler<typeof postCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCertificatesActionsRouteHandler: RouteHandler<
  typeof getCertificatesActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesActionsIdRouteHandler: RouteHandler<
  typeof getCertificatesActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesIdRouteHandler: RouteHandler<typeof getCertificatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCertificatesIdRouteHandler: RouteHandler<typeof putCertificatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCertificatesIdRouteHandler: RouteHandler<
  typeof deleteCertificatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesIdActionsRouteHandler: RouteHandler<
  typeof getCertificatesIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCertificatesIdActionsRetryRouteHandler: RouteHandler<
  typeof postCertificatesIdActionsRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesIdActionsActionIdRouteHandler: RouteHandler<
  typeof getCertificatesIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
