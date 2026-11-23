import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postStatementsDownloadRoute,
  postStatementsListRoute,
  postStatementsRefreshRoute,
} from '../routes'

export const postStatementsListRouteHandler: RouteHandler<typeof postStatementsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStatementsDownloadRouteHandler: RouteHandler<
  typeof postStatementsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStatementsRefreshRouteHandler: RouteHandler<
  typeof postStatementsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
