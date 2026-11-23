import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollaboratorsRoute } from '../routes'

export const postCollaboratorsRouteHandler: RouteHandler<typeof postCollaboratorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
