import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInboxesInboxIdDocumentsRoute,
  deleteInboxesInboxIdRoute,
  getInboxesInboxIdDocumentsRoute,
  getInboxesInboxIdDocumentVersionsRoute,
  getInboxesInboxIdPaginatedRoute,
  getInboxesInboxIdRoute,
  getInboxesRoute,
  patchInboxesInboxIdRoute,
  postInboxesInboxIdReprocessRoute,
  postInboxesRoute,
} from '../routes'

export const getInboxesRouteHandler: RouteHandler<typeof getInboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboxesRouteHandler: RouteHandler<typeof postInboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInboxesInboxIdRouteHandler: RouteHandler<
  typeof deleteInboxesInboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboxesInboxIdRouteHandler: RouteHandler<typeof getInboxesInboxIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchInboxesInboxIdRouteHandler: RouteHandler<
  typeof patchInboxesInboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboxesInboxIdDocumentVersionsRouteHandler: RouteHandler<
  typeof getInboxesInboxIdDocumentVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInboxesInboxIdDocumentsRouteHandler: RouteHandler<
  typeof deleteInboxesInboxIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboxesInboxIdDocumentsRouteHandler: RouteHandler<
  typeof getInboxesInboxIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboxesInboxIdPaginatedRouteHandler: RouteHandler<
  typeof getInboxesInboxIdPaginatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboxesInboxIdReprocessRouteHandler: RouteHandler<
  typeof postInboxesInboxIdReprocessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
