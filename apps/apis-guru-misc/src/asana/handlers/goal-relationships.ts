import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGoalRelationshipsGoalRelationshipGidRoute,
  getGoalRelationshipsRoute,
  putGoalRelationshipsGoalRelationshipGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalRelationshipsHandler = app
  .openapi(getGoalRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoalRelationshipsGoalRelationshipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGoalRelationshipsGoalRelationshipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
