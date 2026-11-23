import type { RouteHandler } from '@hono/zod-openapi'
import type { postQuantumTasksRoute } from '../routes'

export const postQuantumTasksRouteHandler: RouteHandler<typeof postQuantumTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
