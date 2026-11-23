import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBtPlansRoute,
  getBtPlanTokenRoute,
  getBtTokenValidateRoute,
  postBtTokenAssignRoute,
} from '../routes'

export const getBtPlanTokenRouteHandler: RouteHandler<typeof getBtPlanTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBtPlansRouteHandler: RouteHandler<typeof getBtPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBtTokenAssignRouteHandler: RouteHandler<typeof postBtTokenAssignRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBtTokenValidateRouteHandler: RouteHandler<typeof getBtTokenValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
