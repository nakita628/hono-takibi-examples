import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDocumentSplitsDocumentSplitIdRoute,
  getDocumentSplitsRoute,
  postDocumentSplitsRoute,
} from '../routes'

export const postDocumentSplitsRouteHandler: RouteHandler<typeof postDocumentSplitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocumentSplitsRouteHandler: RouteHandler<typeof getDocumentSplitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDocumentSplitsDocumentSplitIdRouteHandler: RouteHandler<
  typeof getDocumentSplitsDocumentSplitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
