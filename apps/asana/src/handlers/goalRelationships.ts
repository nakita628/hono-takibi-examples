import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  postGoalsGoalGidAddSupportingRelationshipRoute,
  postGoalsGoalGidRemoveSupportingRelationshipRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalRelationshipsHandler = app
  .openapi(getGoalRelationshipsGoalRelationshipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGoalRelationshipsGoalRelationshipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidAddSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGoalsGoalGidRemoveSupportingRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
