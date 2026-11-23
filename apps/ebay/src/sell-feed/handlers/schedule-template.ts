import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getScheduleTemplateRoute,
  getScheduleTemplateScheduleTemplateIdRoute,
} from '../routes'

export const getScheduleTemplateRouteHandler: RouteHandler<
  typeof getScheduleTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getScheduleTemplateScheduleTemplateIdRouteHandler: RouteHandler<
  typeof getScheduleTemplateScheduleTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
