import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609GoalTargetsGoalTargetIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRoute,
  getCrmObjects202609GoalTargetsGoalTargetIdRoute,
  getCrmObjects202609GoalTargetsRoute,
  patchCrmObjects202609GoalTargetsGoalTargetIdRoute,
  postCrmObjects202609GoalTargetsBatchArchiveRoute,
  postCrmObjects202609GoalTargetsBatchCreateRoute,
  postCrmObjects202609GoalTargetsBatchReadRoute,
  postCrmObjects202609GoalTargetsBatchUpdateRoute,
  postCrmObjects202609GoalTargetsBatchUpsertRoute,
  postCrmObjects202609GoalTargetsGdprDeleteRoute,
  postCrmObjects202609GoalTargetsMergeRoute,
  postCrmObjects202609GoalTargetsRoute,
  postCrmObjects202609GoalTargetsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609GoalTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609GoalTargetsGoalTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609GoalTargetsGoalTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609GoalTargetsGoalTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
