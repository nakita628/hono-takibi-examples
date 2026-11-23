import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutScheduledUpdateGroupActionRoute,
  postActionPutScheduledUpdateGroupActionRoute,
} from '../routes'

export const getActionPutScheduledUpdateGroupActionRouteHandler: RouteHandler<
  typeof getActionPutScheduledUpdateGroupActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutScheduledUpdateGroupActionRouteHandler: RouteHandler<
  typeof postActionPutScheduledUpdateGroupActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
