import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberOrderDocumentsNumberOrderDocumentIdRoute,
  getNumberOrderDocumentsRoute,
  patchNumberOrderDocumentsNumberOrderDocumentIdRoute,
  postNumberOrderDocumentsRoute,
} from '../routes'

export const getNumberOrderDocumentsRouteHandler: RouteHandler<
  typeof getNumberOrderDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberOrderDocumentsRouteHandler: RouteHandler<
  typeof postNumberOrderDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumberOrderDocumentsNumberOrderDocumentIdRouteHandler: RouteHandler<
  typeof getNumberOrderDocumentsNumberOrderDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNumberOrderDocumentsNumberOrderDocumentIdRouteHandler: RouteHandler<
  typeof patchNumberOrderDocumentsNumberOrderDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
