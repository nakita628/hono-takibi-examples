import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDocumentsDocumentIdProgressRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsDocumentIdSimilarsRoute,
  getDocumentsRoute,
  getDocumentsSubjectsRoute,
  postDocumentsDocumentIdRegeneratePreviewRoute,
  postDocumentsDocumentIdUseAsDraftRoute,
  postDocumentsDocumentIdUseAsRegularRoute,
} from '../routes'

export const getDocumentsRouteHandler: RouteHandler<typeof getDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsSubjectsRouteHandler: RouteHandler<
  typeof getDocumentsSubjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentIdProgressRouteHandler: RouteHandler<
  typeof getDocumentsDocumentIdProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocumentsDocumentIdRegeneratePreviewRouteHandler: RouteHandler<
  typeof postDocumentsDocumentIdRegeneratePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentIdSimilarsRouteHandler: RouteHandler<
  typeof getDocumentsDocumentIdSimilarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocumentsDocumentIdUseAsDraftRouteHandler: RouteHandler<
  typeof postDocumentsDocumentIdUseAsDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDocumentsDocumentIdUseAsRegularRouteHandler: RouteHandler<
  typeof postDocumentsDocumentIdUseAsRegularRoute
> = async (c) => {
  throw new Error('Not implemented')
}
