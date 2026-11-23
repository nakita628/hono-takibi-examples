import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHistoryFilesPathRoute,
  getHistoryFoldersPathRoute,
  getHistoryLoginRoute,
  getHistoryRoute,
  getHistoryUsersUserIdRoute,
} from '../routes'

export const getHistoryRouteHandler: RouteHandler<typeof getHistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHistoryFilesPathRouteHandler: RouteHandler<
  typeof getHistoryFilesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHistoryFoldersPathRouteHandler: RouteHandler<
  typeof getHistoryFoldersPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHistoryLoginRouteHandler: RouteHandler<typeof getHistoryLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHistoryUsersUserIdRouteHandler: RouteHandler<
  typeof getHistoryUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
