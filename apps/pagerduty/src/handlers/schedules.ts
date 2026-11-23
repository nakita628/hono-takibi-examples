import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSchedulesIdOverridesOverrideIdRoute,
  deleteSchedulesIdRoute,
  getSchedulesIdAuditRecordsRoute,
  getSchedulesIdOverridesRoute,
  getSchedulesIdRoute,
  getSchedulesIdUsersRoute,
  getSchedulesRoute,
  postSchedulesIdOverridesRoute,
  postSchedulesPreviewRoute,
  postSchedulesRoute,
  putSchedulesIdRoute,
} from '../routes'

export const getSchedulesRouteHandler: RouteHandler<typeof getSchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchedulesRouteHandler: RouteHandler<typeof postSchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesIdRouteHandler: RouteHandler<typeof getSchedulesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSchedulesIdRouteHandler: RouteHandler<typeof deleteSchedulesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSchedulesIdRouteHandler: RouteHandler<typeof putSchedulesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesIdAuditRecordsRouteHandler: RouteHandler<
  typeof getSchedulesIdAuditRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesIdOverridesRouteHandler: RouteHandler<
  typeof getSchedulesIdOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchedulesIdOverridesRouteHandler: RouteHandler<
  typeof postSchedulesIdOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSchedulesIdOverridesOverrideIdRouteHandler: RouteHandler<
  typeof deleteSchedulesIdOverridesOverrideIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchedulesIdUsersRouteHandler: RouteHandler<
  typeof getSchedulesIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchedulesPreviewRouteHandler: RouteHandler<
  typeof postSchedulesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
