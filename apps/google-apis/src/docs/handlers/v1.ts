import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1DocumentsDocumentIdRoute,
  postV1DocumentsDocumentIdBatchUpdateRoute,
  postV1DocumentsRoute,
} from '../routes'

export const postV1DocumentsRouteHandler: RouteHandler<typeof postV1DocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getV1DocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DocumentsDocumentIdBatchUpdateRouteHandler: RouteHandler<
  typeof postV1DocumentsDocumentIdBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
