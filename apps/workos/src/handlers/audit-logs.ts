import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuditLogsActionsActionNameSchemasRoute,
  getAuditLogsActionsRoute,
  getAuditLogsExportsAuditLogExportIdRoute,
  postAuditLogsActionsActionNameSchemasRoute,
  postAuditLogsEventsRoute,
  postAuditLogsExportsRoute,
} from '../routes'

export const getAuditLogsActionsRouteHandler: RouteHandler<
  typeof getAuditLogsActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuditLogsActionsActionNameSchemasRouteHandler: RouteHandler<
  typeof postAuditLogsActionsActionNameSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuditLogsActionsActionNameSchemasRouteHandler: RouteHandler<
  typeof getAuditLogsActionsActionNameSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuditLogsEventsRouteHandler: RouteHandler<
  typeof postAuditLogsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuditLogsExportsRouteHandler: RouteHandler<
  typeof postAuditLogsExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuditLogsExportsAuditLogExportIdRouteHandler: RouteHandler<
  typeof getAuditLogsExportsAuditLogExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
