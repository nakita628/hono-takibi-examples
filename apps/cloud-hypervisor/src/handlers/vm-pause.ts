import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmPauseRoute } from '../routes'

export const putVmPauseRouteHandler: RouteHandler<typeof putVmPauseRoute> = async (c) => {
  throw new Error('Not implemented')
}
