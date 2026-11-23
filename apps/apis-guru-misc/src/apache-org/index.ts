import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  deleteDagsDagIdDagRunsDagRunIdRoute,
  deleteDagsDagIdRoute,
  deletePoolsPoolNameRoute,
  deleteRolesRoleNameRoute,
  deleteUsersUsernameRoute,
  deleteVariablesVariableKeyRoute,
  getConfigRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsRoute,
  getDagsDagIdDagRunsDagRunIdRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
  getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute,
  getDagsDagIdDagRunsRoute,
  getDagsDagIdDetailsRoute,
  getDagsDagIdRoute,
  getDagsDagIdTasksRoute,
  getDagsDagIdTasksTaskIdRoute,
  getDagSourcesFileTokenRoute,
  getDagsRoute,
  getDagWarningsRoute,
  getDatasetsEventsRoute,
  getDatasetsRoute,
  getDatasetsUriRoute,
  getEventLogsEventLogIdRoute,
  getEventLogsRoute,
  getHealthRoute,
  getImportErrorsImportErrorIdRoute,
  getImportErrorsRoute,
  getPermissionsRoute,
  getPluginsRoute,
  getPoolsPoolNameRoute,
  getPoolsRoute,
  getProvidersRoute,
  getRolesRoleNameRoute,
  getRolesRoute,
  getUsersRoute,
  getUsersUsernameRoute,
  getVariablesRoute,
  getVariablesVariableKeyRoute,
  getVersionRoute,
  patchConnectionsConnectionIdRoute,
  patchDagsDagIdDagRunsDagRunIdRoute,
  patchDagsDagIdDagRunsDagRunIdSetNoteRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute,
  patchDagsDagIdRoute,
  patchDagsRoute,
  patchPoolsPoolNameRoute,
  patchRolesRoleNameRoute,
  patchUsersUsernameRoute,
  patchVariablesVariableKeyRoute,
  postConnectionsRoute,
  postConnectionsTestRoute,
  postDagsDagIdClearTaskInstancesRoute,
  postDagsDagIdDagRunsDagRunIdClearRoute,
  postDagsDagIdDagRunsRoute,
  postDagsDagIdUpdateTaskInstancesStateRoute,
  postDagsTildeDagRunsListRoute,
  postDagsTildeDagRunsTildeTaskInstancesListRoute,
  postPoolsRoute,
  postRolesRoute,
  postUsersRoute,
  postVariablesRoute,
} from './routes'
import {
  deleteConnectionsConnectionIdRouteHandler,
  deleteDagsDagIdDagRunsDagRunIdRouteHandler,
  deleteDagsDagIdRouteHandler,
  deletePoolsPoolNameRouteHandler,
  deleteRolesRoleNameRouteHandler,
  deleteUsersUsernameRouteHandler,
  deleteVariablesVariableKeyRouteHandler,
  getConfigRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  getConnectionsRouteHandler,
  getDagsDagIdDagRunsDagRunIdRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRouteHandler,
  getDagsDagIdDagRunsRouteHandler,
  getDagsDagIdDetailsRouteHandler,
  getDagsDagIdRouteHandler,
  getDagsDagIdTasksRouteHandler,
  getDagsDagIdTasksTaskIdRouteHandler,
  getDagSourcesFileTokenRouteHandler,
  getDagsRouteHandler,
  getDagWarningsRouteHandler,
  getDatasetsEventsRouteHandler,
  getDatasetsRouteHandler,
  getDatasetsUriRouteHandler,
  getEventLogsEventLogIdRouteHandler,
  getEventLogsRouteHandler,
  getHealthRouteHandler,
  getImportErrorsImportErrorIdRouteHandler,
  getImportErrorsRouteHandler,
  getPermissionsRouteHandler,
  getPluginsRouteHandler,
  getPoolsPoolNameRouteHandler,
  getPoolsRouteHandler,
  getProvidersRouteHandler,
  getRolesRoleNameRouteHandler,
  getRolesRouteHandler,
  getUsersRouteHandler,
  getUsersUsernameRouteHandler,
  getVariablesRouteHandler,
  getVariablesVariableKeyRouteHandler,
  getVersionRouteHandler,
  patchConnectionsConnectionIdRouteHandler,
  patchDagsDagIdDagRunsDagRunIdRouteHandler,
  patchDagsDagIdDagRunsDagRunIdSetNoteRouteHandler,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRouteHandler,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRouteHandler,
  patchDagsDagIdRouteHandler,
  patchDagsRouteHandler,
  patchPoolsPoolNameRouteHandler,
  patchRolesRoleNameRouteHandler,
  patchUsersUsernameRouteHandler,
  patchVariablesVariableKeyRouteHandler,
  postConnectionsRouteHandler,
  postConnectionsTestRouteHandler,
  postDagsDagIdClearTaskInstancesRouteHandler,
  postDagsDagIdDagRunsDagRunIdClearRouteHandler,
  postDagsDagIdDagRunsRouteHandler,
  postDagsDagIdUpdateTaskInstancesStateRouteHandler,
  postDagsTildeDagRunsListRouteHandler,
  postDagsTildeDagRunsTildeTaskInstancesListRouteHandler,
  postPoolsRouteHandler,
  postRolesRouteHandler,
  postUsersRouteHandler,
  postVariablesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(postConnectionsRoute, postConnectionsRouteHandler)
  .openapi(postConnectionsTestRoute, postConnectionsTestRouteHandler)
  .openapi(deleteConnectionsConnectionIdRoute, deleteConnectionsConnectionIdRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(patchConnectionsConnectionIdRoute, patchConnectionsConnectionIdRouteHandler)
  .openapi(getDagSourcesFileTokenRoute, getDagSourcesFileTokenRouteHandler)
  .openapi(getDagWarningsRoute, getDagWarningsRouteHandler)
  .openapi(getDagsRoute, getDagsRouteHandler)
  .openapi(patchDagsRoute, patchDagsRouteHandler)
  .openapi(deleteDagsDagIdRoute, deleteDagsDagIdRouteHandler)
  .openapi(getDagsDagIdRoute, getDagsDagIdRouteHandler)
  .openapi(patchDagsDagIdRoute, patchDagsDagIdRouteHandler)
  .openapi(postDagsDagIdClearTaskInstancesRoute, postDagsDagIdClearTaskInstancesRouteHandler)
  .openapi(getDagsDagIdDagRunsRoute, getDagsDagIdDagRunsRouteHandler)
  .openapi(postDagsDagIdDagRunsRoute, postDagsDagIdDagRunsRouteHandler)
  .openapi(deleteDagsDagIdDagRunsDagRunIdRoute, deleteDagsDagIdDagRunsDagRunIdRouteHandler)
  .openapi(getDagsDagIdDagRunsDagRunIdRoute, getDagsDagIdDagRunsDagRunIdRouteHandler)
  .openapi(patchDagsDagIdDagRunsDagRunIdRoute, patchDagsDagIdDagRunsDagRunIdRouteHandler)
  .openapi(postDagsDagIdDagRunsDagRunIdClearRoute, postDagsDagIdDagRunsDagRunIdClearRouteHandler)
  .openapi(
    patchDagsDagIdDagRunsDagRunIdSetNoteRoute,
    patchDagsDagIdDagRunsDagRunIdSetNoteRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  )
  .openapi(
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRoute,
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberRouteHandler,
  )
  .openapi(
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRoute,
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
    getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  )
  .openapi(
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRoute,
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexRouteHandler,
  )
  .openapi(
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRoute,
    patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteRouteHandler,
  )
  .openapi(
    getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRoute,
    getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsRouteHandler,
  )
  .openapi(getDagsDagIdDetailsRoute, getDagsDagIdDetailsRouteHandler)
  .openapi(getDagsDagIdTasksRoute, getDagsDagIdTasksRouteHandler)
  .openapi(getDagsDagIdTasksTaskIdRoute, getDagsDagIdTasksTaskIdRouteHandler)
  .openapi(
    postDagsDagIdUpdateTaskInstancesStateRoute,
    postDagsDagIdUpdateTaskInstancesStateRouteHandler,
  )
  .openapi(postDagsTildeDagRunsListRoute, postDagsTildeDagRunsListRouteHandler)
  .openapi(
    postDagsTildeDagRunsTildeTaskInstancesListRoute,
    postDagsTildeDagRunsTildeTaskInstancesListRouteHandler,
  )
  .openapi(getDatasetsRoute, getDatasetsRouteHandler)
  .openapi(getDatasetsEventsRoute, getDatasetsEventsRouteHandler)
  .openapi(getDatasetsUriRoute, getDatasetsUriRouteHandler)
  .openapi(getEventLogsRoute, getEventLogsRouteHandler)
  .openapi(getEventLogsEventLogIdRoute, getEventLogsEventLogIdRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getImportErrorsRoute, getImportErrorsRouteHandler)
  .openapi(getImportErrorsImportErrorIdRoute, getImportErrorsImportErrorIdRouteHandler)
  .openapi(getPermissionsRoute, getPermissionsRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(getPoolsRoute, getPoolsRouteHandler)
  .openapi(postPoolsRoute, postPoolsRouteHandler)
  .openapi(deletePoolsPoolNameRoute, deletePoolsPoolNameRouteHandler)
  .openapi(getPoolsPoolNameRoute, getPoolsPoolNameRouteHandler)
  .openapi(patchPoolsPoolNameRoute, patchPoolsPoolNameRouteHandler)
  .openapi(getProvidersRoute, getProvidersRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(deleteRolesRoleNameRoute, deleteRolesRoleNameRouteHandler)
  .openapi(getRolesRoleNameRoute, getRolesRoleNameRouteHandler)
  .openapi(patchRolesRoleNameRoute, patchRolesRoleNameRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersUsernameRoute, deleteUsersUsernameRouteHandler)
  .openapi(getUsersUsernameRoute, getUsersUsernameRouteHandler)
  .openapi(patchUsersUsernameRoute, patchUsersUsernameRouteHandler)
  .openapi(getVariablesRoute, getVariablesRouteHandler)
  .openapi(postVariablesRoute, postVariablesRouteHandler)
  .openapi(deleteVariablesVariableKeyRoute, deleteVariablesVariableKeyRouteHandler)
  .openapi(getVariablesVariableKeyRoute, getVariablesVariableKeyRouteHandler)
  .openapi(patchVariablesVariableKeyRoute, patchVariablesVariableKeyRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
