import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDocumentsIdRoute,
  getDocumentsIdRoute,
  patchDocumentsIdRoute,
  postDocumentsRoute,
} from '../routes'

export const postDocumentsRouteHandler: RouteHandler<typeof postDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsIdRouteHandler: RouteHandler<typeof getDocumentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDocumentsIdRouteHandler: RouteHandler<typeof deleteDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDocumentsIdRouteHandler: RouteHandler<typeof patchDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
