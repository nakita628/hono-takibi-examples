import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  deleteProjectsProjectIdJobsJobIdDeleteRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  getProjectsProjectIdDatasetsDatasetIdModelsRoute,
  getProjectsProjectIdDatasetsDatasetIdRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute,
  getProjectsProjectIdDatasetsRoute,
  getProjectsProjectIdJobsJobIdRoute,
  getProjectsProjectIdJobsRoute,
  getProjectsProjectIdQueriesJobIdRoute,
  getProjectsProjectIdServiceAccountRoute,
  getProjectsRoute,
  patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
  patchProjectsProjectIdDatasetsDatasetIdRoute,
  patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
  postProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesRoute,
  postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute,
  postProjectsProjectIdDatasetsDatasetIdUndeleteRoute,
  postProjectsProjectIdDatasetsRoute,
  postProjectsProjectIdJobsJobIdCancelRoute,
  postProjectsProjectIdJobsRoute,
  postProjectsProjectIdQueriesRoute,
  postResourceGetIamPolicyRoute,
  postResourceSetIamPolicyRoute,
  postResourceTestIamPermissionsRoute,
  putProjectsProjectIdDatasetsDatasetIdRoute,
  putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
  putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
} from './routes'
import {
  deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  deleteProjectsProjectIdDatasetsDatasetIdRouteHandler,
  deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  deleteProjectsProjectIdJobsJobIdDeleteRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdModelsRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdTablesRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRouteHandler,
  getProjectsProjectIdDatasetsRouteHandler,
  getProjectsProjectIdJobsJobIdRouteHandler,
  getProjectsProjectIdJobsRouteHandler,
  getProjectsProjectIdQueriesJobIdRouteHandler,
  getProjectsProjectIdServiceAccountRouteHandler,
  getProjectsRouteHandler,
  patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  patchProjectsProjectIdDatasetsDatasetIdRouteHandler,
  patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  postProjectsProjectIdDatasetsDatasetIdRoutinesRouteHandler,
  postProjectsProjectIdDatasetsDatasetIdTablesRouteHandler,
  postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRouteHandler,
  postProjectsProjectIdDatasetsDatasetIdUndeleteRouteHandler,
  postProjectsProjectIdDatasetsRouteHandler,
  postProjectsProjectIdJobsJobIdCancelRouteHandler,
  postProjectsProjectIdJobsRouteHandler,
  postProjectsProjectIdQueriesRouteHandler,
  postResourceGetIamPolicyRouteHandler,
  postResourceSetIamPolicyRouteHandler,
  postResourceTestIamPermissionsRouteHandler,
  putProjectsProjectIdDatasetsDatasetIdRouteHandler,
  putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  putProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(getProjectsProjectIdDatasetsRoute, getProjectsProjectIdDatasetsRouteHandler)
  .openapi(postProjectsProjectIdDatasetsRoute, postProjectsProjectIdDatasetsRouteHandler)
  .openapi(
    deleteProjectsProjectIdDatasetsDatasetIdRoute,
    deleteProjectsProjectIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdRoute,
    getProjectsProjectIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdDatasetsDatasetIdRoute,
    patchProjectsProjectIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdDatasetsDatasetIdRoute,
    putProjectsProjectIdDatasetsDatasetIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdModelsRoute,
    getProjectsProjectIdDatasetsDatasetIdModelsRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
    deleteProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
    getProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRoute,
    patchProjectsProjectIdDatasetsDatasetIdModelsModelIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
    getProjectsProjectIdDatasetsDatasetIdRoutinesRouteHandler,
  )
  .openapi(
    postProjectsProjectIdDatasetsDatasetIdRoutinesRoute,
    postProjectsProjectIdDatasetsDatasetIdRoutinesRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
    deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
    getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRoute,
    putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdTablesRoute,
    getProjectsProjectIdDatasetsDatasetIdTablesRouteHandler,
  )
  .openapi(
    postProjectsProjectIdDatasetsDatasetIdTablesRoute,
    postProjectsProjectIdDatasetsDatasetIdTablesRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
    deleteProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
    patchProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdDatasetsDatasetIdTablesTableIdRoute,
    putProjectsProjectIdDatasetsDatasetIdTablesTableIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRoute,
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataRouteHandler,
  )
  .openapi(
    postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRoute,
    postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllRouteHandler,
  )
  .openapi(
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRoute,
    getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesRouteHandler,
  )
  .openapi(
    postProjectsProjectIdDatasetsDatasetIdUndeleteRoute,
    postProjectsProjectIdDatasetsDatasetIdUndeleteRouteHandler,
  )
  .openapi(getProjectsProjectIdJobsRoute, getProjectsProjectIdJobsRouteHandler)
  .openapi(postProjectsProjectIdJobsRoute, postProjectsProjectIdJobsRouteHandler)
  .openapi(getProjectsProjectIdJobsJobIdRoute, getProjectsProjectIdJobsJobIdRouteHandler)
  .openapi(
    postProjectsProjectIdJobsJobIdCancelRoute,
    postProjectsProjectIdJobsJobIdCancelRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdJobsJobIdDeleteRoute,
    deleteProjectsProjectIdJobsJobIdDeleteRouteHandler,
  )
  .openapi(postProjectsProjectIdQueriesRoute, postProjectsProjectIdQueriesRouteHandler)
  .openapi(getProjectsProjectIdQueriesJobIdRoute, getProjectsProjectIdQueriesJobIdRouteHandler)
  .openapi(getProjectsProjectIdServiceAccountRoute, getProjectsProjectIdServiceAccountRouteHandler)
  .openapi(postResourceGetIamPolicyRoute, postResourceGetIamPolicyRouteHandler)
  .openapi(postResourceSetIamPolicyRoute, postResourceSetIamPolicyRouteHandler)
  .openapi(postResourceTestIamPermissionsRoute, postResourceTestIamPermissionsRouteHandler)

export default app
