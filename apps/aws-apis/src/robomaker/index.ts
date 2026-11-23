import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postBatchDeleteWorldsRoute,
  postBatchDescribeSimulationJobRoute,
  postCancelDeploymentJobRoute,
  postCancelSimulationJobBatchRoute,
  postCancelSimulationJobRoute,
  postCancelWorldExportJobRoute,
  postCancelWorldGenerationJobRoute,
  postCreateDeploymentJobRoute,
  postCreateFleetRoute,
  postCreateRobotApplicationRoute,
  postCreateRobotApplicationVersionRoute,
  postCreateRobotRoute,
  postCreateSimulationApplicationRoute,
  postCreateSimulationApplicationVersionRoute,
  postCreateSimulationJobRoute,
  postCreateWorldExportJobRoute,
  postCreateWorldGenerationJobRoute,
  postCreateWorldTemplateRoute,
  postDeleteFleetRoute,
  postDeleteRobotApplicationRoute,
  postDeleteRobotRoute,
  postDeleteSimulationApplicationRoute,
  postDeleteWorldTemplateRoute,
  postDeregisterRobotRoute,
  postDescribeDeploymentJobRoute,
  postDescribeFleetRoute,
  postDescribeRobotApplicationRoute,
  postDescribeRobotRoute,
  postDescribeSimulationApplicationRoute,
  postDescribeSimulationJobBatchRoute,
  postDescribeSimulationJobRoute,
  postDescribeWorldExportJobRoute,
  postDescribeWorldGenerationJobRoute,
  postDescribeWorldRoute,
  postDescribeWorldTemplateRoute,
  postGetWorldTemplateBodyRoute,
  postListDeploymentJobsRoute,
  postListFleetsRoute,
  postListRobotApplicationsRoute,
  postListRobotsRoute,
  postListSimulationApplicationsRoute,
  postListSimulationJobBatchesRoute,
  postListSimulationJobsRoute,
  postListWorldExportJobsRoute,
  postListWorldGenerationJobsRoute,
  postListWorldsRoute,
  postListWorldTemplatesRoute,
  postRegisterRobotRoute,
  postRestartSimulationJobRoute,
  postStartSimulationJobBatchRoute,
  postSyncDeploymentJobRoute,
  postTagsResourceArnRoute,
  postUpdateRobotApplicationRoute,
  postUpdateSimulationApplicationRoute,
  postUpdateWorldTemplateRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postBatchDeleteWorldsRouteHandler,
  postBatchDescribeSimulationJobRouteHandler,
  postCancelDeploymentJobRouteHandler,
  postCancelSimulationJobBatchRouteHandler,
  postCancelSimulationJobRouteHandler,
  postCancelWorldExportJobRouteHandler,
  postCancelWorldGenerationJobRouteHandler,
  postCreateDeploymentJobRouteHandler,
  postCreateFleetRouteHandler,
  postCreateRobotApplicationRouteHandler,
  postCreateRobotApplicationVersionRouteHandler,
  postCreateRobotRouteHandler,
  postCreateSimulationApplicationRouteHandler,
  postCreateSimulationApplicationVersionRouteHandler,
  postCreateSimulationJobRouteHandler,
  postCreateWorldExportJobRouteHandler,
  postCreateWorldGenerationJobRouteHandler,
  postCreateWorldTemplateRouteHandler,
  postDeleteFleetRouteHandler,
  postDeleteRobotApplicationRouteHandler,
  postDeleteRobotRouteHandler,
  postDeleteSimulationApplicationRouteHandler,
  postDeleteWorldTemplateRouteHandler,
  postDeregisterRobotRouteHandler,
  postDescribeDeploymentJobRouteHandler,
  postDescribeFleetRouteHandler,
  postDescribeRobotApplicationRouteHandler,
  postDescribeRobotRouteHandler,
  postDescribeSimulationApplicationRouteHandler,
  postDescribeSimulationJobBatchRouteHandler,
  postDescribeSimulationJobRouteHandler,
  postDescribeWorldExportJobRouteHandler,
  postDescribeWorldGenerationJobRouteHandler,
  postDescribeWorldRouteHandler,
  postDescribeWorldTemplateRouteHandler,
  postGetWorldTemplateBodyRouteHandler,
  postListDeploymentJobsRouteHandler,
  postListFleetsRouteHandler,
  postListRobotApplicationsRouteHandler,
  postListRobotsRouteHandler,
  postListSimulationApplicationsRouteHandler,
  postListSimulationJobBatchesRouteHandler,
  postListSimulationJobsRouteHandler,
  postListWorldExportJobsRouteHandler,
  postListWorldGenerationJobsRouteHandler,
  postListWorldsRouteHandler,
  postListWorldTemplatesRouteHandler,
  postRegisterRobotRouteHandler,
  postRestartSimulationJobRouteHandler,
  postStartSimulationJobBatchRouteHandler,
  postSyncDeploymentJobRouteHandler,
  postTagsResourceArnRouteHandler,
  postUpdateRobotApplicationRouteHandler,
  postUpdateSimulationApplicationRouteHandler,
  postUpdateWorldTemplateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBatchDeleteWorldsRoute, postBatchDeleteWorldsRouteHandler)
  .openapi(postBatchDescribeSimulationJobRoute, postBatchDescribeSimulationJobRouteHandler)
  .openapi(postCancelDeploymentJobRoute, postCancelDeploymentJobRouteHandler)
  .openapi(postCancelSimulationJobRoute, postCancelSimulationJobRouteHandler)
  .openapi(postCancelSimulationJobBatchRoute, postCancelSimulationJobBatchRouteHandler)
  .openapi(postCancelWorldExportJobRoute, postCancelWorldExportJobRouteHandler)
  .openapi(postCancelWorldGenerationJobRoute, postCancelWorldGenerationJobRouteHandler)
  .openapi(postCreateDeploymentJobRoute, postCreateDeploymentJobRouteHandler)
  .openapi(postCreateFleetRoute, postCreateFleetRouteHandler)
  .openapi(postCreateRobotRoute, postCreateRobotRouteHandler)
  .openapi(postCreateRobotApplicationRoute, postCreateRobotApplicationRouteHandler)
  .openapi(postCreateRobotApplicationVersionRoute, postCreateRobotApplicationVersionRouteHandler)
  .openapi(postCreateSimulationApplicationRoute, postCreateSimulationApplicationRouteHandler)
  .openapi(
    postCreateSimulationApplicationVersionRoute,
    postCreateSimulationApplicationVersionRouteHandler,
  )
  .openapi(postCreateSimulationJobRoute, postCreateSimulationJobRouteHandler)
  .openapi(postCreateWorldExportJobRoute, postCreateWorldExportJobRouteHandler)
  .openapi(postCreateWorldGenerationJobRoute, postCreateWorldGenerationJobRouteHandler)
  .openapi(postCreateWorldTemplateRoute, postCreateWorldTemplateRouteHandler)
  .openapi(postDeleteFleetRoute, postDeleteFleetRouteHandler)
  .openapi(postDeleteRobotRoute, postDeleteRobotRouteHandler)
  .openapi(postDeleteRobotApplicationRoute, postDeleteRobotApplicationRouteHandler)
  .openapi(postDeleteSimulationApplicationRoute, postDeleteSimulationApplicationRouteHandler)
  .openapi(postDeleteWorldTemplateRoute, postDeleteWorldTemplateRouteHandler)
  .openapi(postDeregisterRobotRoute, postDeregisterRobotRouteHandler)
  .openapi(postDescribeDeploymentJobRoute, postDescribeDeploymentJobRouteHandler)
  .openapi(postDescribeFleetRoute, postDescribeFleetRouteHandler)
  .openapi(postDescribeRobotRoute, postDescribeRobotRouteHandler)
  .openapi(postDescribeRobotApplicationRoute, postDescribeRobotApplicationRouteHandler)
  .openapi(postDescribeSimulationApplicationRoute, postDescribeSimulationApplicationRouteHandler)
  .openapi(postDescribeSimulationJobRoute, postDescribeSimulationJobRouteHandler)
  .openapi(postDescribeSimulationJobBatchRoute, postDescribeSimulationJobBatchRouteHandler)
  .openapi(postDescribeWorldRoute, postDescribeWorldRouteHandler)
  .openapi(postDescribeWorldExportJobRoute, postDescribeWorldExportJobRouteHandler)
  .openapi(postDescribeWorldGenerationJobRoute, postDescribeWorldGenerationJobRouteHandler)
  .openapi(postDescribeWorldTemplateRoute, postDescribeWorldTemplateRouteHandler)
  .openapi(postGetWorldTemplateBodyRoute, postGetWorldTemplateBodyRouteHandler)
  .openapi(postListDeploymentJobsRoute, postListDeploymentJobsRouteHandler)
  .openapi(postListFleetsRoute, postListFleetsRouteHandler)
  .openapi(postListRobotApplicationsRoute, postListRobotApplicationsRouteHandler)
  .openapi(postListRobotsRoute, postListRobotsRouteHandler)
  .openapi(postListSimulationApplicationsRoute, postListSimulationApplicationsRouteHandler)
  .openapi(postListSimulationJobBatchesRoute, postListSimulationJobBatchesRouteHandler)
  .openapi(postListSimulationJobsRoute, postListSimulationJobsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postListWorldExportJobsRoute, postListWorldExportJobsRouteHandler)
  .openapi(postListWorldGenerationJobsRoute, postListWorldGenerationJobsRouteHandler)
  .openapi(postListWorldTemplatesRoute, postListWorldTemplatesRouteHandler)
  .openapi(postListWorldsRoute, postListWorldsRouteHandler)
  .openapi(postRegisterRobotRoute, postRegisterRobotRouteHandler)
  .openapi(postRestartSimulationJobRoute, postRestartSimulationJobRouteHandler)
  .openapi(postStartSimulationJobBatchRoute, postStartSimulationJobBatchRouteHandler)
  .openapi(postSyncDeploymentJobRoute, postSyncDeploymentJobRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateRobotApplicationRoute, postUpdateRobotApplicationRouteHandler)
  .openapi(postUpdateSimulationApplicationRoute, postUpdateSimulationApplicationRouteHandler)
  .openapi(postUpdateWorldTemplateRoute, postUpdateWorldTemplateRouteHandler)

export default app
