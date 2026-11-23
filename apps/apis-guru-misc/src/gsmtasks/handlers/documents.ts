import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocumentsIdIndexRoute,
  getDocumentsIdIndexRoute,
  getDocumentsIndexRoute,
  postDocumentsBatchDeleteIndexRoute,
  postDocumentsIndexRoute,
} from '../routes'

export const getDocumentsIndexRouteHandler: RouteHandler<typeof getDocumentsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDocumentsIndexRouteHandler: RouteHandler<typeof postDocumentsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDocumentsBatchDeleteIndexRouteHandler: RouteHandler<
  typeof postDocumentsBatchDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDocumentsIdIndexRouteHandler: RouteHandler<
  typeof deleteDocumentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsIdIndexRouteHandler: RouteHandler<
  typeof getDocumentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
