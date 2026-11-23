import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmCoredumpRoute } from '../routes'

export const putVmCoredumpRouteHandler: RouteHandler<typeof putVmCoredumpRoute> = async (c) => {
  throw new Error('Not implemented')
}
