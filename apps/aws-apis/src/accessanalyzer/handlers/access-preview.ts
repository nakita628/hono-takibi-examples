import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccessPreviewAccessPreviewIdAnalyzerArnRoute,
  postAccessPreviewAccessPreviewIdRoute,
  putAccessPreviewRoute,
} from '../routes'

export const putAccessPreviewRouteHandler: RouteHandler<typeof putAccessPreviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAccessPreviewAccessPreviewIdAnalyzerArnRouteHandler: RouteHandler<
  typeof getAccessPreviewAccessPreviewIdAnalyzerArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccessPreviewAccessPreviewIdRouteHandler: RouteHandler<
  typeof postAccessPreviewAccessPreviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
