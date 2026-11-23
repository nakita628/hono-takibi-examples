import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGoalsGoalGidRoute,
  getGoalsGoalGidParentGoalsRoute,
  getGoalsGoalGidRoute,
  getGoalsRoute,
  postGoalsGoalGidAddFollowersRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveFollowersRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  postGoalsGoalGidSetMetricCurrentValueRoute,
  postGoalsGoalGidSetMetricRoute,
  postGoalsRoute,
  putGoalsGoalGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalsHandler = app
  .openapi(getGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGoalsGoalGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalsGoalGidParentGoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidSetMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidSetMetricCurrentValueRoute, (c) => {
    throw new Error('Not implemented')
  })
