import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateJobRoute } from '../routes'

export const postValidateJobRouteHandler: RouteHandler<typeof postValidateJobRoute> = async (c) => {
  throw new Error('Not implemented')
}
