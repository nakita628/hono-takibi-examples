import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocumentsIdRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  patchDocumentsIdRoute,
  postDocumentsRoute,
} from '../routes'

export const getDocumentsRouteHandler: RouteHandler<typeof getDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocumentsRouteHandler: RouteHandler<typeof postDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDocumentsIdRouteHandler: RouteHandler<typeof deleteDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocumentsIdRouteHandler: RouteHandler<typeof getDocumentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDocumentsIdRouteHandler: RouteHandler<typeof patchDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocumentsIdDownloadRouteHandler: RouteHandler<
  typeof getDocumentsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
