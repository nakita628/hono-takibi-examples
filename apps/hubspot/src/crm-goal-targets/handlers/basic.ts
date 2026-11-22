import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609GoalTargetsGoalTargetIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRoute,
  getCrmObjects202609GoalTargetsGoalTargetIdRoute,
  getCrmObjects202609GoalTargetsRoute,
  patchCrmObjects202609GoalTargetsGoalTargetIdRoute,
  postCrmObjects202609GoalTargetsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609GoalTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609GoalTargetsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
