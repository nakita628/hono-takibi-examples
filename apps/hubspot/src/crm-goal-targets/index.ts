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
} from './routes'
import {
  deleteCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  getCrmObjects202609GoalTargetsRouteHandler,
  patchCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  postCrmObjects202609GoalTargetsBatchArchiveRouteHandler,
  postCrmObjects202609GoalTargetsBatchCreateRouteHandler,
  postCrmObjects202609GoalTargetsBatchReadRouteHandler,
  postCrmObjects202609GoalTargetsBatchUpdateRouteHandler,
  postCrmObjects202609GoalTargetsBatchUpsertRouteHandler,
  postCrmObjects202609GoalTargetsGdprDeleteRouteHandler,
  postCrmObjects202609GoalTargetsMergeRouteHandler,
  postCrmObjects202609GoalTargetsRouteHandler,
  postCrmObjects202609GoalTargetsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609GoalTargetsRoute, getCrmObjects202609GoalTargetsRouteHandler)
  .openapi(postCrmObjects202609GoalTargetsRoute, postCrmObjects202609GoalTargetsRouteHandler)
  .openapi(
    postCrmObjects202609GoalTargetsBatchArchiveRoute,
    postCrmObjects202609GoalTargetsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsBatchCreateRoute,
    postCrmObjects202609GoalTargetsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsBatchReadRoute,
    postCrmObjects202609GoalTargetsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsBatchUpdateRoute,
    postCrmObjects202609GoalTargetsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsBatchUpsertRoute,
    postCrmObjects202609GoalTargetsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsGdprDeleteRoute,
    postCrmObjects202609GoalTargetsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsMergeRoute,
    postCrmObjects202609GoalTargetsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609GoalTargetsSearchRoute,
    postCrmObjects202609GoalTargetsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609GoalTargetsGoalTargetIdRoute,
    getCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609GoalTargetsGoalTargetIdRoute,
    deleteCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609GoalTargetsGoalTargetIdRoute,
    patchCrmObjects202609GoalTargetsGoalTargetIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRoute,
    getCrmObjects202609GoalTargetsGoalTargetIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
