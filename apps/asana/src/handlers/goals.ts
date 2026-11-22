import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGoalsGoalGidRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsRoute,
  postGoalsGoalGidAddCustomFieldSettingRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidRemoveCustomFieldSettingRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsRoute,
  putGoalsGoalGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalsHandler = app
  .openapi(getGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidSetMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidSetMetricCurrentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsGoalGidParentGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
