import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddNetRoute } from '../routes'

export const putVmAddNetRouteHandler: RouteHandler<typeof putVmAddNetRoute> = async (c) => {
  throw new Error('Not implemented')
}
