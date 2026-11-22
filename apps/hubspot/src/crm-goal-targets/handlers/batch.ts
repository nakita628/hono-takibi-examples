import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609GoalTargetsBatchArchiveRoute,
  postCrmObjects202609GoalTargetsBatchCreateRoute,
  postCrmObjects202609GoalTargetsBatchReadRoute,
  postCrmObjects202609GoalTargetsBatchUpdateRoute,
  postCrmObjects202609GoalTargetsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
