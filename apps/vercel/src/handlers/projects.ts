import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postProjectsIdOrNameTransferRequestRoute,
  putProjectsTransferRequestCodeRoute,
} from '../routes'

export const postProjectsIdOrNameTransferRequestRouteHandler: RouteHandler<
  typeof postProjectsIdOrNameTransferRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsTransferRequestCodeRouteHandler: RouteHandler<
  typeof putProjectsTransferRequestCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
