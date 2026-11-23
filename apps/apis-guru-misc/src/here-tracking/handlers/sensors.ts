import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSensorsV3Route,
  deleteSensorsV3SensorRuleIdRoute,
  getSensorsV3HealthRoute,
  getSensorsV3Route,
  getSensorsV3SensorRuleIdRoute,
  getSensorsV3VersionRoute,
  postSensorsV3Route,
  putSensorsV3SensorRuleIdRoute,
} from '../routes'

export const deleteSensorsV3RouteHandler: RouteHandler<typeof deleteSensorsV3Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getSensorsV3RouteHandler: RouteHandler<typeof getSensorsV3Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postSensorsV3RouteHandler: RouteHandler<typeof postSensorsV3Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getSensorsV3HealthRouteHandler: RouteHandler<typeof getSensorsV3HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSensorsV3VersionRouteHandler: RouteHandler<
  typeof getSensorsV3VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSensorsV3SensorRuleIdRouteHandler: RouteHandler<
  typeof deleteSensorsV3SensorRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSensorsV3SensorRuleIdRouteHandler: RouteHandler<
  typeof getSensorsV3SensorRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSensorsV3SensorRuleIdRouteHandler: RouteHandler<
  typeof putSensorsV3SensorRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
