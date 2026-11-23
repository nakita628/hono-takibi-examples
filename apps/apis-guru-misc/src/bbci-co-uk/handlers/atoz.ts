import type { RouteHandler } from '@hono/zod-openapi'
import type { getAtozLetterProgrammesRoute } from '../routes'

export const getAtozLetterProgrammesRouteHandler: RouteHandler<
  typeof getAtozLetterProgrammesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
