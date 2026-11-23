import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternalFindingsReportsRoute,
  getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute,
  getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute,
  postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute,
} from '../routes'

export const getInternalFindingsReportsRouteHandler: RouteHandler<
  typeof getInternalFindingsReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRouteHandler: RouteHandler<
  typeof getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRouteHandler: RouteHandler<
  typeof getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRouteHandler: RouteHandler<
  typeof postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
