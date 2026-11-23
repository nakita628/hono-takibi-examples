import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceLogsGetLogFilePathRoute, getServiceLogsListFilesRoute } from '../routes'

export const getServiceLogsListFilesRouteHandler: RouteHandler<
  typeof getServiceLogsListFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceLogsGetLogFilePathRouteHandler: RouteHandler<
  typeof getServiceLogsGetLogFilePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
