import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDownloadDBLogFilePortionRoute,
  postActionDownloadDBLogFilePortionRoute,
} from '../routes'

export const getActionDownloadDBLogFilePortionRouteHandler: RouteHandler<
  typeof getActionDownloadDBLogFilePortionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDownloadDBLogFilePortionRouteHandler: RouteHandler<
  typeof postActionDownloadDBLogFilePortionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
