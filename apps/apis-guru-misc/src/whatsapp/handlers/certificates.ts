import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCertificatesWebhooksCaRoute,
  getCertificatesExternalCaRoute,
  getCertificatesWebhooksCaRoute,
  postCertificatesExternalRoute,
  postCertificatesWebhooksCaRoute,
} from '../routes'

export const postCertificatesExternalRouteHandler: RouteHandler<
  typeof postCertificatesExternalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesExternalCaRouteHandler: RouteHandler<
  typeof getCertificatesExternalCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCertificatesWebhooksCaRouteHandler: RouteHandler<
  typeof deleteCertificatesWebhooksCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCertificatesWebhooksCaRouteHandler: RouteHandler<
  typeof getCertificatesWebhooksCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCertificatesWebhooksCaRouteHandler: RouteHandler<
  typeof postCertificatesWebhooksCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
