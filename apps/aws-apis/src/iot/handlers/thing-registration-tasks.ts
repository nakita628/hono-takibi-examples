import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getThingRegistrationTasksRoute,
  getThingRegistrationTasksTaskIdReportsReportTypeRoute,
  getThingRegistrationTasksTaskIdRoute,
  postThingRegistrationTasksRoute,
  putThingRegistrationTasksTaskIdCancelRoute,
} from '../routes'

export const getThingRegistrationTasksTaskIdRouteHandler: RouteHandler<
  typeof getThingRegistrationTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingRegistrationTasksTaskIdReportsReportTypeRouteHandler: RouteHandler<
  typeof getThingRegistrationTasksTaskIdReportsReportTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingRegistrationTasksRouteHandler: RouteHandler<
  typeof getThingRegistrationTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postThingRegistrationTasksRouteHandler: RouteHandler<
  typeof postThingRegistrationTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putThingRegistrationTasksTaskIdCancelRouteHandler: RouteHandler<
  typeof putThingRegistrationTasksTaskIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
