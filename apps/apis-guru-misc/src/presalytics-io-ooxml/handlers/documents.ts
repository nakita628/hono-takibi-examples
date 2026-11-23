import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocumentsIdRoute,
  getDocumentsChildObjectsIdRoute,
  getDocumentsDocumentTypeIdRoute,
  getDocumentsDocumentTypeRoute,
  getDocumentsDocumentTypeTypeIdTypeIdRoute,
  getDocumentsDownloadIdRoute,
  getDocumentsIdRoute,
  postDocumentsCloneIdRoute,
  postDocumentsRoute,
} from '../routes'

export const postDocumentsRouteHandler: RouteHandler<typeof postDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsChildObjectsIdRouteHandler: RouteHandler<
  typeof getDocumentsChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocumentsCloneIdRouteHandler: RouteHandler<
  typeof postDocumentsCloneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentTypeRouteHandler: RouteHandler<
  typeof getDocumentsDocumentTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentTypeTypeIdTypeIdRouteHandler: RouteHandler<
  typeof getDocumentsDocumentTypeTypeIdTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentTypeIdRouteHandler: RouteHandler<
  typeof getDocumentsDocumentTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDownloadIdRouteHandler: RouteHandler<
  typeof getDocumentsDownloadIdRoute
> = async (c) => {
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
