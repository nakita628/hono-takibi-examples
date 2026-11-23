import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttachmentsIdRoute,
  getAttachmentsIdRoute,
  putAttachmentsIdRoute,
} from '../routes'

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
