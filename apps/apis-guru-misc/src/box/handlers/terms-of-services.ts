import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTermsOfServicesRoute,
  getTermsOfServicesTermsOfServiceIdRoute,
  postTermsOfServicesRoute,
  putTermsOfServicesTermsOfServiceIdRoute,
} from '../routes'

export const getTermsOfServicesRouteHandler: RouteHandler<typeof getTermsOfServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTermsOfServicesRouteHandler: RouteHandler<
  typeof postTermsOfServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTermsOfServicesTermsOfServiceIdRouteHandler: RouteHandler<
  typeof getTermsOfServicesTermsOfServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTermsOfServicesTermsOfServiceIdRouteHandler: RouteHandler<
  typeof putTermsOfServicesTermsOfServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
