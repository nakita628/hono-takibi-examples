import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasetsNameRoute,
  deleteJobsNameRoute,
  deleteProjectsNameRoute,
  deleteRecipesNameRecipeVersionRecipeVersionRoute,
  deleteRulesetsNameRoute,
  deleteSchedulesNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getDatasetsNameRoute,
  getDatasetsRoute,
  getJobsNameJobRunRunIdRoute,
  getJobsNameJobRunsRoute,
  getJobsNameRoute,
  getJobsRoute,
  getProjectsNameRoute,
  getProjectsRoute,
  getRecipesNameRoute,
  getRecipesRoute,
  getRecipeVersionsNameRoute,
  getRulesetsNameRoute,
  getRulesetsRoute,
  getSchedulesNameRoute,
  getSchedulesRoute,
  getTagsResourceArnRoute,
  postDatasetsRoute,
  postJobsNameJobRunRunIdStopJobRunRoute,
  postJobsNameStartJobRunRoute,
  postProfileJobsRoute,
  postProjectsRoute,
  postRecipeJobsRoute,
  postRecipesNameBatchDeleteRecipeVersionRoute,
  postRecipesNamePublishRecipeRoute,
  postRecipesRoute,
  postRulesetsRoute,
  postSchedulesRoute,
  postTagsResourceArnRoute,
  putDatasetsNameRoute,
  putProfileJobsNameRoute,
  putProjectsNameRoute,
  putProjectsNameSendProjectSessionActionRoute,
  putProjectsNameStartProjectSessionRoute,
  putRecipeJobsNameRoute,
  putRecipesNameRoute,
  putRulesetsNameRoute,
  putSchedulesNameRoute,
} from './routes'
import {
  deleteDatasetsNameRouteHandler,
  deleteJobsNameRouteHandler,
  deleteProjectsNameRouteHandler,
  deleteRecipesNameRecipeVersionRecipeVersionRouteHandler,
  deleteRulesetsNameRouteHandler,
  deleteSchedulesNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getDatasetsNameRouteHandler,
  getDatasetsRouteHandler,
  getJobsNameJobRunRunIdRouteHandler,
  getJobsNameJobRunsRouteHandler,
  getJobsNameRouteHandler,
  getJobsRouteHandler,
  getProjectsNameRouteHandler,
  getProjectsRouteHandler,
  getRecipesNameRouteHandler,
  getRecipesRouteHandler,
  getRecipeVersionsNameRouteHandler,
  getRulesetsNameRouteHandler,
  getRulesetsRouteHandler,
  getSchedulesNameRouteHandler,
  getSchedulesRouteHandler,
  getTagsResourceArnRouteHandler,
  postDatasetsRouteHandler,
  postJobsNameJobRunRunIdStopJobRunRouteHandler,
  postJobsNameStartJobRunRouteHandler,
  postProfileJobsRouteHandler,
  postProjectsRouteHandler,
  postRecipeJobsRouteHandler,
  postRecipesNameBatchDeleteRecipeVersionRouteHandler,
  postRecipesNamePublishRecipeRouteHandler,
  postRecipesRouteHandler,
  postRulesetsRouteHandler,
  postSchedulesRouteHandler,
  postTagsResourceArnRouteHandler,
  putDatasetsNameRouteHandler,
  putProfileJobsNameRouteHandler,
  putProjectsNameRouteHandler,
  putProjectsNameSendProjectSessionActionRouteHandler,
  putProjectsNameStartProjectSessionRouteHandler,
  putRecipeJobsNameRouteHandler,
  putRecipesNameRouteHandler,
  putRulesetsNameRouteHandler,
  putSchedulesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postRecipesNameBatchDeleteRecipeVersionRoute,
    postRecipesNameBatchDeleteRecipeVersionRouteHandler,
  )
  .openapi(postDatasetsRoute, postDatasetsRouteHandler)
  .openapi(getDatasetsRoute, getDatasetsRouteHandler)
  .openapi(postProfileJobsRoute, postProfileJobsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postRecipesRoute, postRecipesRouteHandler)
  .openapi(getRecipesRoute, getRecipesRouteHandler)
  .openapi(postRecipeJobsRoute, postRecipeJobsRouteHandler)
  .openapi(postRulesetsRoute, postRulesetsRouteHandler)
  .openapi(getRulesetsRoute, getRulesetsRouteHandler)
  .openapi(postSchedulesRoute, postSchedulesRouteHandler)
  .openapi(getSchedulesRoute, getSchedulesRouteHandler)
  .openapi(deleteDatasetsNameRoute, deleteDatasetsNameRouteHandler)
  .openapi(getDatasetsNameRoute, getDatasetsNameRouteHandler)
  .openapi(putDatasetsNameRoute, putDatasetsNameRouteHandler)
  .openapi(deleteJobsNameRoute, deleteJobsNameRouteHandler)
  .openapi(getJobsNameRoute, getJobsNameRouteHandler)
  .openapi(deleteProjectsNameRoute, deleteProjectsNameRouteHandler)
  .openapi(getProjectsNameRoute, getProjectsNameRouteHandler)
  .openapi(putProjectsNameRoute, putProjectsNameRouteHandler)
  .openapi(
    deleteRecipesNameRecipeVersionRecipeVersionRoute,
    deleteRecipesNameRecipeVersionRecipeVersionRouteHandler,
  )
  .openapi(deleteRulesetsNameRoute, deleteRulesetsNameRouteHandler)
  .openapi(getRulesetsNameRoute, getRulesetsNameRouteHandler)
  .openapi(putRulesetsNameRoute, putRulesetsNameRouteHandler)
  .openapi(deleteSchedulesNameRoute, deleteSchedulesNameRouteHandler)
  .openapi(getSchedulesNameRoute, getSchedulesNameRouteHandler)
  .openapi(putSchedulesNameRoute, putSchedulesNameRouteHandler)
  .openapi(getJobsNameJobRunRunIdRoute, getJobsNameJobRunRunIdRouteHandler)
  .openapi(getRecipesNameRoute, getRecipesNameRouteHandler)
  .openapi(putRecipesNameRoute, putRecipesNameRouteHandler)
  .openapi(getJobsNameJobRunsRoute, getJobsNameJobRunsRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(getRecipeVersionsNameRoute, getRecipeVersionsNameRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postRecipesNamePublishRecipeRoute, postRecipesNamePublishRecipeRouteHandler)
  .openapi(
    putProjectsNameSendProjectSessionActionRoute,
    putProjectsNameSendProjectSessionActionRouteHandler,
  )
  .openapi(postJobsNameStartJobRunRoute, postJobsNameStartJobRunRouteHandler)
  .openapi(putProjectsNameStartProjectSessionRoute, putProjectsNameStartProjectSessionRouteHandler)
  .openapi(postJobsNameJobRunRunIdStopJobRunRoute, postJobsNameJobRunRunIdStopJobRunRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putProfileJobsNameRoute, putProfileJobsNameRouteHandler)
  .openapi(putRecipeJobsNameRoute, putRecipeJobsNameRouteHandler)

export default app
