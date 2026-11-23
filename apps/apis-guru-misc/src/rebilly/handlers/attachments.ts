import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttachmentsIdRoute,
  getAttachmentsIdRoute,
  getAttachmentsRoute,
  postAttachmentsRoute,
  putAttachmentsIdRoute,
} from '../routes'

export const getAttachmentsRouteHandler: RouteHandler<typeof getAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachmentsRouteHandler: RouteHandler<typeof postAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttachmentsIdRouteHandler: RouteHandler<
  typeof deleteAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentsIdRouteHandler: RouteHandler<typeof getAttachmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAttachmentsIdRouteHandler: RouteHandler<typeof putAttachmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
