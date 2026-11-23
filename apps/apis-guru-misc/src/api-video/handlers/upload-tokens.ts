import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUploadTokensUploadTokenRoute,
  getUploadTokensRoute,
  getUploadTokensUploadTokenRoute,
  postUploadTokensRoute,
} from '../routes'

export const getUploadTokensRouteHandler: RouteHandler<typeof getUploadTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadTokensRouteHandler: RouteHandler<typeof postUploadTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUploadTokensUploadTokenRouteHandler: RouteHandler<
  typeof deleteUploadTokensUploadTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadTokensUploadTokenRouteHandler: RouteHandler<
  typeof getUploadTokensUploadTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
