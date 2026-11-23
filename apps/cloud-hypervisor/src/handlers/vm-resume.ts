import type { RouteHandler } from '@hono/zod-openapi'
import type { putVmResumeRoute } from '../routes'

export const putVmResumeRouteHandler: RouteHandler<typeof putVmResumeRoute> = async (c) => {
  throw new Error('Not implemented')
}
