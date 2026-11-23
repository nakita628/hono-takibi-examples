import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmmShutdownRoute } from '../routes'

export const putVmmShutdownRouteHandler: RouteHandler<typeof putVmmShutdownRoute> = async (c) => {
  throw new Error('Not implemented')
}
