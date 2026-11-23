import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataV1AvailabilityIndexRoute,
  getDataV1ConstraintVariableRoute,
  getDataV1MapNewRoute,
  getDataV1ValuesRoute,
} from '../routes'

export const getDataV1AvailabilityIndexRouteHandler: RouteHandler<
  typeof getDataV1AvailabilityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataV1ConstraintVariableRouteHandler: RouteHandler<
  typeof getDataV1ConstraintVariableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataV1MapNewRouteHandler: RouteHandler<typeof getDataV1MapNewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataV1ValuesRouteHandler: RouteHandler<typeof getDataV1ValuesRoute> = async (c) => {
  throw new Error('Not implemented')
}
