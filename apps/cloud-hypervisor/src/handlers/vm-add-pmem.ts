import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmAddPmemRoute } from '../routes'

export const putVmAddPmemRouteHandler: RouteHandler<typeof putVmAddPmemRoute> = async (c) => {
  throw new Error('Not implemented')
}
