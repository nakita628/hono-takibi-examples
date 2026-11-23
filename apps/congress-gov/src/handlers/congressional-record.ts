import type { RouteHandler } from '@hono/zod-openapi'
import type { getCongressionalRecordRoute } from '../routes'

export const getCongressionalRecordRouteHandler: RouteHandler<
  typeof getCongressionalRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
