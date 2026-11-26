import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLogsRoute,
  getLogsSchemasRoute,
  getLogsTypesRoute,
  getLogsGroupsGroupIdEventsRoute,
  getLogsEventTimeAndIdRoute,
} from '../routes'

export const getLogsRouteHandler: RouteHandler<typeof getLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsSchemasRouteHandler: RouteHandler<typeof getLogsSchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsTypesRouteHandler: RouteHandler<typeof getLogsTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsGroupsGroupIdEventsRouteHandler: RouteHandler<
  typeof getLogsGroupsGroupIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsEventTimeAndIdRouteHandler: RouteHandler<
  typeof getLogsEventTimeAndIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
