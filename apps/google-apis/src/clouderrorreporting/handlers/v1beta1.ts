import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1ProjectNameEventsRoute,
  getV1beta1GroupNameRoute,
  getV1beta1ProjectNameEventsRoute,
  getV1beta1ProjectNameGroupStatsRoute,
  postV1beta1ProjectNameEventsReportRoute,
  putV1beta1NameRoute,
} from '../routes'

export const getV1beta1GroupNameRouteHandler: RouteHandler<
  typeof getV1beta1GroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1beta1NameRouteHandler: RouteHandler<typeof putV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1beta1ProjectNameEventsRouteHandler: RouteHandler<
  typeof deleteV1beta1ProjectNameEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ProjectNameEventsRouteHandler: RouteHandler<
  typeof getV1beta1ProjectNameEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ProjectNameEventsReportRouteHandler: RouteHandler<
  typeof postV1beta1ProjectNameEventsReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ProjectNameGroupStatsRouteHandler: RouteHandler<
  typeof getV1beta1ProjectNameGroupStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
