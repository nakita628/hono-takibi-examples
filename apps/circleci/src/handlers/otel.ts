import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOtelExportersOtelExporterIdRoute,
  getOtelExportersRoute,
  postOtelExportersRoute,
} from '../routes'

export const getOtelExportersRouteHandler: RouteHandler<typeof getOtelExportersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOtelExportersRouteHandler: RouteHandler<typeof postOtelExportersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOtelExportersOtelExporterIdRouteHandler: RouteHandler<
  typeof deleteOtelExportersOtelExporterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
