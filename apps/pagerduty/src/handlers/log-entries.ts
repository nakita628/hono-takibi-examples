import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLogEntriesIdRoute,
  getLogEntriesRoute,
  putLogEntriesIdChannelRoute,
} from '../routes'

export const getLogEntriesRouteHandler: RouteHandler<typeof getLogEntriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogEntriesIdRouteHandler: RouteHandler<typeof getLogEntriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLogEntriesIdChannelRouteHandler: RouteHandler<
  typeof putLogEntriesIdChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
