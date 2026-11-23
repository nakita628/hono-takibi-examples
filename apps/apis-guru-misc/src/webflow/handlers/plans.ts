import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlansPlanIdRoute,
  getPlansRoute,
  optionsPlansPlanIdRoute,
  optionsPlansRoute,
} from '../routes'

export const getPlansRouteHandler: RouteHandler<typeof getPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsPlansRouteHandler: RouteHandler<typeof optionsPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlansPlanIdRouteHandler: RouteHandler<typeof getPlansPlanIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsPlansPlanIdRouteHandler: RouteHandler<typeof optionsPlansPlanIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
