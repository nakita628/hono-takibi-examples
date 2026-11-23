import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postApiDeletePicRoute,
  postApiInfoRoute,
  postApiSearchRoute,
  postApiUploadPicRoute,
} from '../routes'

export const postApiDeletePicRouteHandler: RouteHandler<typeof postApiDeletePicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiInfoRouteHandler: RouteHandler<typeof postApiInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSearchRouteHandler: RouteHandler<typeof postApiSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadPicRouteHandler: RouteHandler<typeof postApiUploadPicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
