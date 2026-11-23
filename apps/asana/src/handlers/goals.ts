import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGoalsGoalGidRoute,
  getGoalsGoalGidCustomFieldSettingsRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsGoalGidStoriesRoute,
  getGoalsRoute,
  postGoalsGoalGidAddCustomFieldSettingRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveCustomFieldSettingRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsGoalGidStoriesRoute,
  postGoalsRoute,
  putGoalsGoalGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalsHandler = app
  .openapi(getGoalsGoalGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getGoalsGoalGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
