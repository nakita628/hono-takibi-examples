import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1BatchesBatchIdResultsRoute,
  getV1BatchesBatchIdRoute,
  getV1BatchesRoute,
  postV1BatchesBatchIdCancelRoute,
  postV1BatchesFilesRoute,
  postV1BatchesRoute,
  putUploadUrlRoute,
} from '../routes'

export const postV1BatchesFilesRouteHandler: RouteHandler<typeof postV1BatchesFilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUploadUrlRouteHandler: RouteHandler<typeof putUploadUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BatchesRouteHandler: RouteHandler<typeof postV1BatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BatchesRouteHandler: RouteHandler<typeof getV1BatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BatchesBatchIdRouteHandler: RouteHandler<
  typeof getV1BatchesBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BatchesBatchIdResultsRouteHandler: RouteHandler<
  typeof getV1BatchesBatchIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BatchesBatchIdCancelRouteHandler: RouteHandler<
  typeof postV1BatchesBatchIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
