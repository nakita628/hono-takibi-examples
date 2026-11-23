import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternalFindingsReportsRoute,
  getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute,
  getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute,
  postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getInternalFindingsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
