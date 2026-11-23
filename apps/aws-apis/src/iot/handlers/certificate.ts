import type { RouteHandler } from '@hono/zod-openapi'
import type { postCertificateRegisterNoCaRoute, postCertificateRegisterRoute } from '../routes'

export const postCertificateRegisterRouteHandler: RouteHandler<
  typeof postCertificateRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCertificateRegisterNoCaRouteHandler: RouteHandler<
  typeof postCertificateRegisterNoCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
