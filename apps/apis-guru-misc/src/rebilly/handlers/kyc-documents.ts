import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getKycDocumentsIdRoute,
  getKycDocumentsRoute,
  postKycDocumentsIdAcceptanceRoute,
  postKycDocumentsIdMatchesRoute,
  postKycDocumentsIdRejectionRoute,
  postKycDocumentsIdReviewRoute,
  postKycDocumentsRoute,
  putKycDocumentsIdRoute,
} from '../routes'

export const getKycDocumentsRouteHandler: RouteHandler<typeof getKycDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKycDocumentsRouteHandler: RouteHandler<typeof postKycDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKycDocumentsIdRouteHandler: RouteHandler<typeof getKycDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKycDocumentsIdRouteHandler: RouteHandler<typeof putKycDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postKycDocumentsIdAcceptanceRouteHandler: RouteHandler<
  typeof postKycDocumentsIdAcceptanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKycDocumentsIdMatchesRouteHandler: RouteHandler<
  typeof postKycDocumentsIdMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKycDocumentsIdRejectionRouteHandler: RouteHandler<
  typeof postKycDocumentsIdRejectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKycDocumentsIdReviewRouteHandler: RouteHandler<
  typeof postKycDocumentsIdReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
