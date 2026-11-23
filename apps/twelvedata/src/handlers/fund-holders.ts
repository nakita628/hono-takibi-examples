import type { RouteHandler } from '@hono/zod-openapi'
import type { getFundHoldersRoute } from '../routes'

export const getFundHoldersRouteHandler: RouteHandler<typeof getFundHoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}
