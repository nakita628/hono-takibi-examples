import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationUpdateJobActionUpdateJobRoute,
  postOperationUpdateJobActionUpdateJobRoute,
} from '../routes'

export const getOperationUpdateJobActionUpdateJobRouteHandler: RouteHandler<
  typeof getOperationUpdateJobActionUpdateJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationUpdateJobActionUpdateJobRouteHandler: RouteHandler<
  typeof postOperationUpdateJobActionUpdateJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
