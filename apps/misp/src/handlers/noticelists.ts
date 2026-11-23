import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNoticelistsRoute,
  getNoticelistsViewNoticelistIdRoute,
  postNoticelistsToggleEnableNoticelistIdRoute,
  postNoticelistsUpdateRoute,
} from '../routes'

export const getNoticelistsRouteHandler: RouteHandler<typeof getNoticelistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNoticelistsViewNoticelistIdRouteHandler: RouteHandler<
  typeof getNoticelistsViewNoticelistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNoticelistsToggleEnableNoticelistIdRouteHandler: RouteHandler<
  typeof postNoticelistsToggleEnableNoticelistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNoticelistsUpdateRouteHandler: RouteHandler<
  typeof postNoticelistsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
