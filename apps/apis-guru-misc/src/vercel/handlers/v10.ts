import type { RouteHandler } from '@hono/zod-openapi'
import type { postV10ProjectsIdOrNameEnvRoute } from '../routes'

export const postV10ProjectsIdOrNameEnvRouteHandler: RouteHandler<
  typeof postV10ProjectsIdOrNameEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}
