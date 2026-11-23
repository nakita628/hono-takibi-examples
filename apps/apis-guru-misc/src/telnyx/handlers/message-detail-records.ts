import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessageDetailRecordsIdMessageBodyRoute,
  getMessageDetailRecordsRoute,
} from '../routes'

export const getMessageDetailRecordsRouteHandler: RouteHandler<
  typeof getMessageDetailRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessageDetailRecordsIdMessageBodyRouteHandler: RouteHandler<
  typeof getMessageDetailRecordsIdMessageBodyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
