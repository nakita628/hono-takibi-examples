import type { RouteHandler } from '@hono/zod-openapi'
import type { postCodeExecuteRoute } from '../routes'

export const postCodeExecuteRouteHandler: RouteHandler<typeof postCodeExecuteRoute> = async (c) => {
  throw new Error('Not implemented')
}
