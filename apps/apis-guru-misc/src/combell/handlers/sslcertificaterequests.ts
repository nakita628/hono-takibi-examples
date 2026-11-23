import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSslcertificaterequestsIdRoute,
  getSslcertificaterequestsRoute,
  postSslcertificaterequestsRoute,
  putSslcertificaterequestsIdRoute,
} from '../routes'

export const getSslcertificaterequestsRouteHandler: RouteHandler<
  typeof getSslcertificaterequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSslcertificaterequestsRouteHandler: RouteHandler<
  typeof postSslcertificaterequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSslcertificaterequestsIdRouteHandler: RouteHandler<
  typeof getSslcertificaterequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSslcertificaterequestsIdRouteHandler: RouteHandler<
  typeof putSslcertificaterequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
