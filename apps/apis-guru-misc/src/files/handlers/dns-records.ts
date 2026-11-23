import type { RouteHandler } from '@hono/zod-openapi'
import type { getDnsRecordsRoute } from '../routes'

export const getDnsRecordsRouteHandler: RouteHandler<typeof getDnsRecordsRoute> = async (c) => {
  throw new Error('Not implemented')
}
