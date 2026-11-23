import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getScenesDashboardIndexRoute,
  getScenesOrderListIndexRoute,
  getScenesRecurrenceListIndexRoute,
  getScenesTaskListIndexRoute,
} from '../routes'

export const getScenesDashboardIndexRouteHandler: RouteHandler<
  typeof getScenesDashboardIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScenesOrderListIndexRouteHandler: RouteHandler<
  typeof getScenesOrderListIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScenesRecurrenceListIndexRouteHandler: RouteHandler<
  typeof getScenesRecurrenceListIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScenesTaskListIndexRouteHandler: RouteHandler<
  typeof getScenesTaskListIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
