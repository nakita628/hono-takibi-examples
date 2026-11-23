import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getThingsThingNameJobsJobIdRoute,
  getThingsThingNameJobsRoute,
  postThingsThingNameJobsJobIdRoute,
  putThingsThingNameJobsNextRoute,
} from '../routes'

export const getThingsThingNameJobsJobIdRouteHandler: RouteHandler<
  typeof getThingsThingNameJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postThingsThingNameJobsJobIdRouteHandler: RouteHandler<
  typeof postThingsThingNameJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingsThingNameJobsRouteHandler: RouteHandler<
  typeof getThingsThingNameJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putThingsThingNameJobsNextRouteHandler: RouteHandler<
  typeof putThingsThingNameJobsNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
