import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocumentsDocumentIdRoute,
  deleteDocumentsRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
  optionsDocumentsDocumentIdRoute,
  optionsDocumentsRoute,
  patchDocumentsDocumentIdRoute,
  postDocumentsRoute,
} from '../routes'

export const deleteDocumentsRouteHandler: RouteHandler<typeof deleteDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsRouteHandler: RouteHandler<typeof getDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDocumentsRouteHandler: RouteHandler<typeof optionsDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDocumentsRouteHandler: RouteHandler<typeof postDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof deleteDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof optionsDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof patchDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
