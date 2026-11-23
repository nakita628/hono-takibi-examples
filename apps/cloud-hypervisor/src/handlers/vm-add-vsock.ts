import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddVsockRoute } from '../routes'

export const putVmAddVsockRouteHandler: RouteHandler<typeof putVmAddVsockRoute> = async (c) => {
  throw new Error('Not implemented')
}
