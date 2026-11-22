import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRoute,
  getPropertiesHistoryRoute,
  getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRoute,
  getPropertiesLatestRoute,
  postPropertiesBatchAggregatesRoute,
  postPropertiesBatchHistoryRoute,
  postPropertiesBatchLatestRoute,
  postPropertiesRoute,
} from '../routes'

export const postPropertiesBatchAggregatesRouteHandler: RouteHandler<
  typeof postPropertiesBatchAggregatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertiesBatchLatestRouteHandler: RouteHandler<
  typeof postPropertiesBatchLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertiesBatchHistoryRouteHandler: RouteHandler<
  typeof postPropertiesBatchHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertiesRouteHandler: RouteHandler<typeof postPropertiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRouteHandler: RouteHandler<
  typeof getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertiesLatestRouteHandler: RouteHandler<
  typeof getPropertiesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertiesHistoryRouteHandler: RouteHandler<
  typeof getPropertiesHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRouteHandler: RouteHandler<
  typeof getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
