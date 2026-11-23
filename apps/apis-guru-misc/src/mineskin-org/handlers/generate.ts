import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postGenerateUploadRoute,
  postGenerateUrlRoute,
  postGenerateUserRoute,
} from '../routes'

export const postGenerateUploadRouteHandler: RouteHandler<typeof postGenerateUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGenerateUrlRouteHandler: RouteHandler<typeof postGenerateUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGenerateUserRouteHandler: RouteHandler<typeof postGenerateUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
