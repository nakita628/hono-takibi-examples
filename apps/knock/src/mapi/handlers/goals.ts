import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
  deleteV1GoalsGoalKeyRoute,
  getV1GoalsGoalKeyAttachmentsRoute,
  getV1GoalsGoalKeyRoute,
  getV1GoalsRoute,
  postV1GoalsGoalKeyCloneRoute,
  putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
  putV1GoalsGoalKeyRoute,
  putV1GoalsGoalKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const goalsHandler = app
  .openapi(getV1GoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GoalsGoalKeyCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GoalsGoalKeyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
