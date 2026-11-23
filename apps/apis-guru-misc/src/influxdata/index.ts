import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationsAuthIDRoute,
  deleteBucketsBucketIDLabelsLabelIDRoute,
  deleteBucketsBucketIDMembersUserIDRoute,
  deleteBucketsBucketIDOwnersUserIDRoute,
  deleteBucketsBucketIDRoute,
  deleteChecksCheckIDLabelsLabelIDRoute,
  deleteChecksCheckIDRoute,
  deleteDashboardsDashboardIDCellsCellIDRoute,
  deleteDashboardsDashboardIDLabelsLabelIDRoute,
  deleteDashboardsDashboardIDMembersUserIDRoute,
  deleteDashboardsDashboardIDOwnersUserIDRoute,
  deleteDashboardsDashboardIDRoute,
  deleteDbrpsDbrpIDRoute,
  deleteDocumentsTemplatesTemplateIDLabelsLabelIDRoute,
  deleteDocumentsTemplatesTemplateIDRoute,
  deleteLabelsLabelIDRoute,
  deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute,
  deleteNotificationEndpointsEndpointIDRoute,
  deleteNotificationRulesRuleIDLabelsLabelIDRoute,
  deleteNotificationRulesRuleIDRoute,
  deleteOrgsOrgIDMembersUserIDRoute,
  deleteOrgsOrgIDOwnersUserIDRoute,
  deleteOrgsOrgIDRoute,
  deleteScrapersScraperTargetIDLabelsLabelIDRoute,
  deleteScrapersScraperTargetIDMembersUserIDRoute,
  deleteScrapersScraperTargetIDOwnersUserIDRoute,
  deleteScrapersScraperTargetIDRoute,
  deleteSourcesSourceIDRoute,
  deleteStacksStackIdRoute,
  deleteTasksTaskIDLabelsLabelIDRoute,
  deleteTasksTaskIDMembersUserIDRoute,
  deleteTasksTaskIDOwnersUserIDRoute,
  deleteTasksTaskIDRoute,
  deleteTasksTaskIDRunsRunIDRoute,
  deleteTelegrafsTelegrafIDLabelsLabelIDRoute,
  deleteTelegrafsTelegrafIDMembersUserIDRoute,
  deleteTelegrafsTelegrafIDOwnersUserIDRoute,
  deleteTelegrafsTelegrafIDRoute,
  deleteUsersUserIDRoute,
  deleteVariablesVariableIDLabelsLabelIDRoute,
  deleteVariablesVariableIDRoute,
  getAuthorizationsAuthIDRoute,
  getAuthorizationsRoute,
  getBucketsBucketIDLabelsRoute,
  getBucketsBucketIDMembersRoute,
  getBucketsBucketIDOwnersRoute,
  getBucketsBucketIDRoute,
  getBucketsRoute,
  getChecksCheckIDLabelsRoute,
  getChecksCheckIDQueryRoute,
  getChecksCheckIDRoute,
  getChecksRoute,
  getDashboardsDashboardIDCellsCellIDViewRoute,
  getDashboardsDashboardIDLabelsRoute,
  getDashboardsDashboardIDMembersRoute,
  getDashboardsDashboardIDOwnersRoute,
  getDashboardsDashboardIDRoute,
  getDashboardsRoute,
  getDbrpsDbrpIDRoute,
  getDbrpsRoute,
  getDocumentsTemplatesRoute,
  getDocumentsTemplatesTemplateIDLabelsRoute,
  getDocumentsTemplatesTemplateIDRoute,
  getFlagsRoute,
  getHealthRoute,
  getLabelsLabelIDRoute,
  getLabelsRoute,
  getMeRoute,
  getNotificationEndpointsEndpointIDLabelsRoute,
  getNotificationEndpointsEndpointIDRoute,
  getNotificationEndpointsRoute,
  getNotificationRulesRoute,
  getNotificationRulesRuleIDLabelsRoute,
  getNotificationRulesRuleIDQueryRoute,
  getNotificationRulesRuleIDRoute,
  getOrgsOrgIDMembersRoute,
  getOrgsOrgIDOwnersRoute,
  getOrgsOrgIDRoute,
  getOrgsOrgIDSecretsRoute,
  getOrgsRoute,
  getQuerySuggestionsNameRoute,
  getQuerySuggestionsRoute,
  getReadyRoute,
  getRoute,
  getScrapersRoute,
  getScrapersScraperTargetIDLabelsRoute,
  getScrapersScraperTargetIDMembersRoute,
  getScrapersScraperTargetIDOwnersRoute,
  getScrapersScraperTargetIDRoute,
  getSetupRoute,
  getSourcesRoute,
  getSourcesSourceIDBucketsRoute,
  getSourcesSourceIDHealthRoute,
  getSourcesSourceIDRoute,
  getStacksRoute,
  getStacksStackIdRoute,
  getTasksRoute,
  getTasksTaskIDLabelsRoute,
  getTasksTaskIDLogsRoute,
  getTasksTaskIDMembersRoute,
  getTasksTaskIDOwnersRoute,
  getTasksTaskIDRoute,
  getTasksTaskIDRunsRoute,
  getTasksTaskIDRunsRunIDLogsRoute,
  getTasksTaskIDRunsRunIDRoute,
  getTelegrafPluginsRoute,
  getTelegrafsRoute,
  getTelegrafsTelegrafIDLabelsRoute,
  getTelegrafsTelegrafIDMembersRoute,
  getTelegrafsTelegrafIDOwnersRoute,
  getTelegrafsTelegrafIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  getVariablesRoute,
  getVariablesVariableIDLabelsRoute,
  getVariablesVariableIDRoute,
  patchAuthorizationsAuthIDRoute,
  patchBucketsBucketIDRoute,
  patchChecksCheckIDRoute,
  patchDashboardsDashboardIDCellsCellIDRoute,
  patchDashboardsDashboardIDCellsCellIDViewRoute,
  patchDashboardsDashboardIDRoute,
  patchDbrpsDbrpIDRoute,
  patchLabelsLabelIDRoute,
  patchNotificationEndpointsEndpointIDRoute,
  patchNotificationRulesRuleIDRoute,
  patchOrgsOrgIDRoute,
  patchOrgsOrgIDSecretsRoute,
  patchScrapersScraperTargetIDRoute,
  patchSourcesSourceIDRoute,
  patchStacksStackIdRoute,
  patchTasksTaskIDRoute,
  patchUsersUserIDRoute,
  patchVariablesVariableIDRoute,
  postAuthorizationsRoute,
  postBucketsBucketIDLabelsRoute,
  postBucketsBucketIDMembersRoute,
  postBucketsBucketIDOwnersRoute,
  postBucketsRoute,
  postChecksCheckIDLabelsRoute,
  postChecksRoute,
  postDashboardsDashboardIDCellsRoute,
  postDashboardsDashboardIDLabelsRoute,
  postDashboardsDashboardIDMembersRoute,
  postDashboardsDashboardIDOwnersRoute,
  postDashboardsRoute,
  postDbrpsRoute,
  postDeleteRoute,
  postDocumentsTemplatesRoute,
  postDocumentsTemplatesTemplateIDLabelsRoute,
  postLabelsRoute,
  postNotificationEndpointsEndpointIDLabelsRoute,
  postNotificationEndpointsRoute,
  postNotificationRulesRoute,
  postNotificationRulesRuleIDLabelsRoute,
  postOrgsOrgIDMembersRoute,
  postOrgsOrgIDOwnersRoute,
  postOrgsOrgIDSecretsDeleteRoute,
  postOrgsRoute,
  postQueryAnalyzeRoute,
  postQueryAstRoute,
  postQueryRoute,
  postScrapersRoute,
  postScrapersScraperTargetIDLabelsRoute,
  postScrapersScraperTargetIDMembersRoute,
  postScrapersScraperTargetIDOwnersRoute,
  postSetupRoute,
  postSigninRoute,
  postSignoutRoute,
  postSourcesRoute,
  postStacksRoute,
  postStacksStackIdUninstallRoute,
  postTasksRoute,
  postTasksTaskIDLabelsRoute,
  postTasksTaskIDMembersRoute,
  postTasksTaskIDOwnersRoute,
  postTasksTaskIDRunsRoute,
  postTasksTaskIDRunsRunIDRetryRoute,
  postTelegrafsRoute,
  postTelegrafsTelegrafIDLabelsRoute,
  postTelegrafsTelegrafIDMembersRoute,
  postTelegrafsTelegrafIDOwnersRoute,
  postTemplatesApplyRoute,
  postTemplatesExportRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
  postVariablesRoute,
  postVariablesVariableIDLabelsRoute,
  postWriteRoute,
  putChecksCheckIDRoute,
  putDashboardsDashboardIDCellsRoute,
  putDocumentsTemplatesTemplateIDRoute,
  putMePasswordRoute,
  putNotificationEndpointsEndpointIDRoute,
  putNotificationRulesRuleIDRoute,
  putTelegrafsTelegrafIDRoute,
  putVariablesVariableIDRoute,
} from './routes'
import {
  deleteAuthorizationsAuthIDRouteHandler,
  deleteBucketsBucketIDLabelsLabelIDRouteHandler,
  deleteBucketsBucketIDMembersUserIDRouteHandler,
  deleteBucketsBucketIDOwnersUserIDRouteHandler,
  deleteBucketsBucketIDRouteHandler,
  deleteChecksCheckIDLabelsLabelIDRouteHandler,
  deleteChecksCheckIDRouteHandler,
  deleteDashboardsDashboardIDCellsCellIDRouteHandler,
  deleteDashboardsDashboardIDLabelsLabelIDRouteHandler,
  deleteDashboardsDashboardIDMembersUserIDRouteHandler,
  deleteDashboardsDashboardIDOwnersUserIDRouteHandler,
  deleteDashboardsDashboardIDRouteHandler,
  deleteDbrpsDbrpIDRouteHandler,
  deleteDocumentsTemplatesTemplateIDLabelsLabelIDRouteHandler,
  deleteDocumentsTemplatesTemplateIDRouteHandler,
  deleteLabelsLabelIDRouteHandler,
  deleteNotificationEndpointsEndpointIDLabelsLabelIDRouteHandler,
  deleteNotificationEndpointsEndpointIDRouteHandler,
  deleteNotificationRulesRuleIDLabelsLabelIDRouteHandler,
  deleteNotificationRulesRuleIDRouteHandler,
  deleteOrgsOrgIDMembersUserIDRouteHandler,
  deleteOrgsOrgIDOwnersUserIDRouteHandler,
  deleteOrgsOrgIDRouteHandler,
  deleteScrapersScraperTargetIDLabelsLabelIDRouteHandler,
  deleteScrapersScraperTargetIDMembersUserIDRouteHandler,
  deleteScrapersScraperTargetIDOwnersUserIDRouteHandler,
  deleteScrapersScraperTargetIDRouteHandler,
  deleteSourcesSourceIDRouteHandler,
  deleteStacksStackIdRouteHandler,
  deleteTasksTaskIDLabelsLabelIDRouteHandler,
  deleteTasksTaskIDMembersUserIDRouteHandler,
  deleteTasksTaskIDOwnersUserIDRouteHandler,
  deleteTasksTaskIDRouteHandler,
  deleteTasksTaskIDRunsRunIDRouteHandler,
  deleteTelegrafsTelegrafIDLabelsLabelIDRouteHandler,
  deleteTelegrafsTelegrafIDMembersUserIDRouteHandler,
  deleteTelegrafsTelegrafIDOwnersUserIDRouteHandler,
  deleteTelegrafsTelegrafIDRouteHandler,
  deleteUsersUserIDRouteHandler,
  deleteVariablesVariableIDLabelsLabelIDRouteHandler,
  deleteVariablesVariableIDRouteHandler,
  getAuthorizationsAuthIDRouteHandler,
  getAuthorizationsRouteHandler,
  getBucketsBucketIDLabelsRouteHandler,
  getBucketsBucketIDMembersRouteHandler,
  getBucketsBucketIDOwnersRouteHandler,
  getBucketsBucketIDRouteHandler,
  getBucketsRouteHandler,
  getChecksCheckIDLabelsRouteHandler,
  getChecksCheckIDQueryRouteHandler,
  getChecksCheckIDRouteHandler,
  getChecksRouteHandler,
  getDashboardsDashboardIDCellsCellIDViewRouteHandler,
  getDashboardsDashboardIDLabelsRouteHandler,
  getDashboardsDashboardIDMembersRouteHandler,
  getDashboardsDashboardIDOwnersRouteHandler,
  getDashboardsDashboardIDRouteHandler,
  getDashboardsRouteHandler,
  getDbrpsDbrpIDRouteHandler,
  getDbrpsRouteHandler,
  getDocumentsTemplatesRouteHandler,
  getDocumentsTemplatesTemplateIDLabelsRouteHandler,
  getDocumentsTemplatesTemplateIDRouteHandler,
  getFlagsRouteHandler,
  getHealthRouteHandler,
  getLabelsLabelIDRouteHandler,
  getLabelsRouteHandler,
  getMeRouteHandler,
  getNotificationEndpointsEndpointIDLabelsRouteHandler,
  getNotificationEndpointsEndpointIDRouteHandler,
  getNotificationEndpointsRouteHandler,
  getNotificationRulesRouteHandler,
  getNotificationRulesRuleIDLabelsRouteHandler,
  getNotificationRulesRuleIDQueryRouteHandler,
  getNotificationRulesRuleIDRouteHandler,
  getOrgsOrgIDMembersRouteHandler,
  getOrgsOrgIDOwnersRouteHandler,
  getOrgsOrgIDRouteHandler,
  getOrgsOrgIDSecretsRouteHandler,
  getOrgsRouteHandler,
  getQuerySuggestionsNameRouteHandler,
  getQuerySuggestionsRouteHandler,
  getReadyRouteHandler,
  getRouteHandler,
  getScrapersRouteHandler,
  getScrapersScraperTargetIDLabelsRouteHandler,
  getScrapersScraperTargetIDMembersRouteHandler,
  getScrapersScraperTargetIDOwnersRouteHandler,
  getScrapersScraperTargetIDRouteHandler,
  getSetupRouteHandler,
  getSourcesRouteHandler,
  getSourcesSourceIDBucketsRouteHandler,
  getSourcesSourceIDHealthRouteHandler,
  getSourcesSourceIDRouteHandler,
  getStacksRouteHandler,
  getStacksStackIdRouteHandler,
  getTasksRouteHandler,
  getTasksTaskIDLabelsRouteHandler,
  getTasksTaskIDLogsRouteHandler,
  getTasksTaskIDMembersRouteHandler,
  getTasksTaskIDOwnersRouteHandler,
  getTasksTaskIDRouteHandler,
  getTasksTaskIDRunsRouteHandler,
  getTasksTaskIDRunsRunIDLogsRouteHandler,
  getTasksTaskIDRunsRunIDRouteHandler,
  getTelegrafPluginsRouteHandler,
  getTelegrafsRouteHandler,
  getTelegrafsTelegrafIDLabelsRouteHandler,
  getTelegrafsTelegrafIDMembersRouteHandler,
  getTelegrafsTelegrafIDOwnersRouteHandler,
  getTelegrafsTelegrafIDRouteHandler,
  getUsersRouteHandler,
  getUsersUserIDRouteHandler,
  getVariablesRouteHandler,
  getVariablesVariableIDLabelsRouteHandler,
  getVariablesVariableIDRouteHandler,
  patchAuthorizationsAuthIDRouteHandler,
  patchBucketsBucketIDRouteHandler,
  patchChecksCheckIDRouteHandler,
  patchDashboardsDashboardIDCellsCellIDRouteHandler,
  patchDashboardsDashboardIDCellsCellIDViewRouteHandler,
  patchDashboardsDashboardIDRouteHandler,
  patchDbrpsDbrpIDRouteHandler,
  patchLabelsLabelIDRouteHandler,
  patchNotificationEndpointsEndpointIDRouteHandler,
  patchNotificationRulesRuleIDRouteHandler,
  patchOrgsOrgIDRouteHandler,
  patchOrgsOrgIDSecretsRouteHandler,
  patchScrapersScraperTargetIDRouteHandler,
  patchSourcesSourceIDRouteHandler,
  patchStacksStackIdRouteHandler,
  patchTasksTaskIDRouteHandler,
  patchUsersUserIDRouteHandler,
  patchVariablesVariableIDRouteHandler,
  postAuthorizationsRouteHandler,
  postBucketsBucketIDLabelsRouteHandler,
  postBucketsBucketIDMembersRouteHandler,
  postBucketsBucketIDOwnersRouteHandler,
  postBucketsRouteHandler,
  postChecksCheckIDLabelsRouteHandler,
  postChecksRouteHandler,
  postDashboardsDashboardIDCellsRouteHandler,
  postDashboardsDashboardIDLabelsRouteHandler,
  postDashboardsDashboardIDMembersRouteHandler,
  postDashboardsDashboardIDOwnersRouteHandler,
  postDashboardsRouteHandler,
  postDbrpsRouteHandler,
  postDeleteRouteHandler,
  postDocumentsTemplatesRouteHandler,
  postDocumentsTemplatesTemplateIDLabelsRouteHandler,
  postLabelsRouteHandler,
  postNotificationEndpointsEndpointIDLabelsRouteHandler,
  postNotificationEndpointsRouteHandler,
  postNotificationRulesRouteHandler,
  postNotificationRulesRuleIDLabelsRouteHandler,
  postOrgsOrgIDMembersRouteHandler,
  postOrgsOrgIDOwnersRouteHandler,
  postOrgsOrgIDSecretsDeleteRouteHandler,
  postOrgsRouteHandler,
  postQueryAnalyzeRouteHandler,
  postQueryAstRouteHandler,
  postQueryRouteHandler,
  postScrapersRouteHandler,
  postScrapersScraperTargetIDLabelsRouteHandler,
  postScrapersScraperTargetIDMembersRouteHandler,
  postScrapersScraperTargetIDOwnersRouteHandler,
  postSetupRouteHandler,
  postSigninRouteHandler,
  postSignoutRouteHandler,
  postSourcesRouteHandler,
  postStacksRouteHandler,
  postStacksStackIdUninstallRouteHandler,
  postTasksRouteHandler,
  postTasksTaskIDLabelsRouteHandler,
  postTasksTaskIDMembersRouteHandler,
  postTasksTaskIDOwnersRouteHandler,
  postTasksTaskIDRunsRouteHandler,
  postTasksTaskIDRunsRunIDRetryRouteHandler,
  postTelegrafsRouteHandler,
  postTelegrafsTelegrafIDLabelsRouteHandler,
  postTelegrafsTelegrafIDMembersRouteHandler,
  postTelegrafsTelegrafIDOwnersRouteHandler,
  postTemplatesApplyRouteHandler,
  postTemplatesExportRouteHandler,
  postUsersRouteHandler,
  postUsersUserIDPasswordRouteHandler,
  postVariablesRouteHandler,
  postVariablesVariableIDLabelsRouteHandler,
  postWriteRouteHandler,
  putChecksCheckIDRouteHandler,
  putDashboardsDashboardIDCellsRouteHandler,
  putDocumentsTemplatesTemplateIDRouteHandler,
  putMePasswordRouteHandler,
  putNotificationEndpointsEndpointIDRouteHandler,
  putNotificationRulesRuleIDRouteHandler,
  putTelegrafsTelegrafIDRouteHandler,
  putVariablesVariableIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAuthorizationsRoute, getAuthorizationsRouteHandler)
  .openapi(postAuthorizationsRoute, postAuthorizationsRouteHandler)
  .openapi(deleteAuthorizationsAuthIDRoute, deleteAuthorizationsAuthIDRouteHandler)
  .openapi(getAuthorizationsAuthIDRoute, getAuthorizationsAuthIDRouteHandler)
  .openapi(patchAuthorizationsAuthIDRoute, patchAuthorizationsAuthIDRouteHandler)
  .openapi(getBucketsRoute, getBucketsRouteHandler)
  .openapi(postBucketsRoute, postBucketsRouteHandler)
  .openapi(deleteBucketsBucketIDRoute, deleteBucketsBucketIDRouteHandler)
  .openapi(getBucketsBucketIDRoute, getBucketsBucketIDRouteHandler)
  .openapi(patchBucketsBucketIDRoute, patchBucketsBucketIDRouteHandler)
  .openapi(getBucketsBucketIDLabelsRoute, getBucketsBucketIDLabelsRouteHandler)
  .openapi(postBucketsBucketIDLabelsRoute, postBucketsBucketIDLabelsRouteHandler)
  .openapi(deleteBucketsBucketIDLabelsLabelIDRoute, deleteBucketsBucketIDLabelsLabelIDRouteHandler)
  .openapi(getBucketsBucketIDMembersRoute, getBucketsBucketIDMembersRouteHandler)
  .openapi(postBucketsBucketIDMembersRoute, postBucketsBucketIDMembersRouteHandler)
  .openapi(deleteBucketsBucketIDMembersUserIDRoute, deleteBucketsBucketIDMembersUserIDRouteHandler)
  .openapi(getBucketsBucketIDOwnersRoute, getBucketsBucketIDOwnersRouteHandler)
  .openapi(postBucketsBucketIDOwnersRoute, postBucketsBucketIDOwnersRouteHandler)
  .openapi(deleteBucketsBucketIDOwnersUserIDRoute, deleteBucketsBucketIDOwnersUserIDRouteHandler)
  .openapi(getChecksRoute, getChecksRouteHandler)
  .openapi(postChecksRoute, postChecksRouteHandler)
  .openapi(deleteChecksCheckIDRoute, deleteChecksCheckIDRouteHandler)
  .openapi(getChecksCheckIDRoute, getChecksCheckIDRouteHandler)
  .openapi(patchChecksCheckIDRoute, patchChecksCheckIDRouteHandler)
  .openapi(putChecksCheckIDRoute, putChecksCheckIDRouteHandler)
  .openapi(getChecksCheckIDLabelsRoute, getChecksCheckIDLabelsRouteHandler)
  .openapi(postChecksCheckIDLabelsRoute, postChecksCheckIDLabelsRouteHandler)
  .openapi(deleteChecksCheckIDLabelsLabelIDRoute, deleteChecksCheckIDLabelsLabelIDRouteHandler)
  .openapi(getChecksCheckIDQueryRoute, getChecksCheckIDQueryRouteHandler)
  .openapi(getDashboardsRoute, getDashboardsRouteHandler)
  .openapi(postDashboardsRoute, postDashboardsRouteHandler)
  .openapi(deleteDashboardsDashboardIDRoute, deleteDashboardsDashboardIDRouteHandler)
  .openapi(getDashboardsDashboardIDRoute, getDashboardsDashboardIDRouteHandler)
  .openapi(patchDashboardsDashboardIDRoute, patchDashboardsDashboardIDRouteHandler)
  .openapi(postDashboardsDashboardIDCellsRoute, postDashboardsDashboardIDCellsRouteHandler)
  .openapi(putDashboardsDashboardIDCellsRoute, putDashboardsDashboardIDCellsRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDCellsCellIDRoute,
    deleteDashboardsDashboardIDCellsCellIDRouteHandler,
  )
  .openapi(
    patchDashboardsDashboardIDCellsCellIDRoute,
    patchDashboardsDashboardIDCellsCellIDRouteHandler,
  )
  .openapi(
    getDashboardsDashboardIDCellsCellIDViewRoute,
    getDashboardsDashboardIDCellsCellIDViewRouteHandler,
  )
  .openapi(
    patchDashboardsDashboardIDCellsCellIDViewRoute,
    patchDashboardsDashboardIDCellsCellIDViewRouteHandler,
  )
  .openapi(getDashboardsDashboardIDLabelsRoute, getDashboardsDashboardIDLabelsRouteHandler)
  .openapi(postDashboardsDashboardIDLabelsRoute, postDashboardsDashboardIDLabelsRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDLabelsLabelIDRoute,
    deleteDashboardsDashboardIDLabelsLabelIDRouteHandler,
  )
  .openapi(getDashboardsDashboardIDMembersRoute, getDashboardsDashboardIDMembersRouteHandler)
  .openapi(postDashboardsDashboardIDMembersRoute, postDashboardsDashboardIDMembersRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDMembersUserIDRoute,
    deleteDashboardsDashboardIDMembersUserIDRouteHandler,
  )
  .openapi(getDashboardsDashboardIDOwnersRoute, getDashboardsDashboardIDOwnersRouteHandler)
  .openapi(postDashboardsDashboardIDOwnersRoute, postDashboardsDashboardIDOwnersRouteHandler)
  .openapi(
    deleteDashboardsDashboardIDOwnersUserIDRoute,
    deleteDashboardsDashboardIDOwnersUserIDRouteHandler,
  )
  .openapi(getDbrpsRoute, getDbrpsRouteHandler)
  .openapi(postDbrpsRoute, postDbrpsRouteHandler)
  .openapi(deleteDbrpsDbrpIDRoute, deleteDbrpsDbrpIDRouteHandler)
  .openapi(getDbrpsDbrpIDRoute, getDbrpsDbrpIDRouteHandler)
  .openapi(patchDbrpsDbrpIDRoute, patchDbrpsDbrpIDRouteHandler)
  .openapi(postDeleteRoute, postDeleteRouteHandler)
  .openapi(getDocumentsTemplatesRoute, getDocumentsTemplatesRouteHandler)
  .openapi(postDocumentsTemplatesRoute, postDocumentsTemplatesRouteHandler)
  .openapi(deleteDocumentsTemplatesTemplateIDRoute, deleteDocumentsTemplatesTemplateIDRouteHandler)
  .openapi(getDocumentsTemplatesTemplateIDRoute, getDocumentsTemplatesTemplateIDRouteHandler)
  .openapi(putDocumentsTemplatesTemplateIDRoute, putDocumentsTemplatesTemplateIDRouteHandler)
  .openapi(
    getDocumentsTemplatesTemplateIDLabelsRoute,
    getDocumentsTemplatesTemplateIDLabelsRouteHandler,
  )
  .openapi(
    postDocumentsTemplatesTemplateIDLabelsRoute,
    postDocumentsTemplatesTemplateIDLabelsRouteHandler,
  )
  .openapi(
    deleteDocumentsTemplatesTemplateIDLabelsLabelIDRoute,
    deleteDocumentsTemplatesTemplateIDLabelsLabelIDRouteHandler,
  )
  .openapi(getFlagsRoute, getFlagsRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getLabelsRoute, getLabelsRouteHandler)
  .openapi(postLabelsRoute, postLabelsRouteHandler)
  .openapi(deleteLabelsLabelIDRoute, deleteLabelsLabelIDRouteHandler)
  .openapi(getLabelsLabelIDRoute, getLabelsLabelIDRouteHandler)
  .openapi(patchLabelsLabelIDRoute, patchLabelsLabelIDRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(putMePasswordRoute, putMePasswordRouteHandler)
  .openapi(getNotificationEndpointsRoute, getNotificationEndpointsRouteHandler)
  .openapi(postNotificationEndpointsRoute, postNotificationEndpointsRouteHandler)
  .openapi(
    deleteNotificationEndpointsEndpointIDRoute,
    deleteNotificationEndpointsEndpointIDRouteHandler,
  )
  .openapi(getNotificationEndpointsEndpointIDRoute, getNotificationEndpointsEndpointIDRouteHandler)
  .openapi(
    patchNotificationEndpointsEndpointIDRoute,
    patchNotificationEndpointsEndpointIDRouteHandler,
  )
  .openapi(putNotificationEndpointsEndpointIDRoute, putNotificationEndpointsEndpointIDRouteHandler)
  .openapi(
    getNotificationEndpointsEndpointIDLabelsRoute,
    getNotificationEndpointsEndpointIDLabelsRouteHandler,
  )
  .openapi(
    postNotificationEndpointsEndpointIDLabelsRoute,
    postNotificationEndpointsEndpointIDLabelsRouteHandler,
  )
  .openapi(
    deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute,
    deleteNotificationEndpointsEndpointIDLabelsLabelIDRouteHandler,
  )
  .openapi(getNotificationRulesRoute, getNotificationRulesRouteHandler)
  .openapi(postNotificationRulesRoute, postNotificationRulesRouteHandler)
  .openapi(deleteNotificationRulesRuleIDRoute, deleteNotificationRulesRuleIDRouteHandler)
  .openapi(getNotificationRulesRuleIDRoute, getNotificationRulesRuleIDRouteHandler)
  .openapi(patchNotificationRulesRuleIDRoute, patchNotificationRulesRuleIDRouteHandler)
  .openapi(putNotificationRulesRuleIDRoute, putNotificationRulesRuleIDRouteHandler)
  .openapi(getNotificationRulesRuleIDLabelsRoute, getNotificationRulesRuleIDLabelsRouteHandler)
  .openapi(postNotificationRulesRuleIDLabelsRoute, postNotificationRulesRuleIDLabelsRouteHandler)
  .openapi(
    deleteNotificationRulesRuleIDLabelsLabelIDRoute,
    deleteNotificationRulesRuleIDLabelsLabelIDRouteHandler,
  )
  .openapi(getNotificationRulesRuleIDQueryRoute, getNotificationRulesRuleIDQueryRouteHandler)
  .openapi(getOrgsRoute, getOrgsRouteHandler)
  .openapi(postOrgsRoute, postOrgsRouteHandler)
  .openapi(deleteOrgsOrgIDRoute, deleteOrgsOrgIDRouteHandler)
  .openapi(getOrgsOrgIDRoute, getOrgsOrgIDRouteHandler)
  .openapi(patchOrgsOrgIDRoute, patchOrgsOrgIDRouteHandler)
  .openapi(getOrgsOrgIDMembersRoute, getOrgsOrgIDMembersRouteHandler)
  .openapi(postOrgsOrgIDMembersRoute, postOrgsOrgIDMembersRouteHandler)
  .openapi(deleteOrgsOrgIDMembersUserIDRoute, deleteOrgsOrgIDMembersUserIDRouteHandler)
  .openapi(getOrgsOrgIDOwnersRoute, getOrgsOrgIDOwnersRouteHandler)
  .openapi(postOrgsOrgIDOwnersRoute, postOrgsOrgIDOwnersRouteHandler)
  .openapi(deleteOrgsOrgIDOwnersUserIDRoute, deleteOrgsOrgIDOwnersUserIDRouteHandler)
  .openapi(getOrgsOrgIDSecretsRoute, getOrgsOrgIDSecretsRouteHandler)
  .openapi(patchOrgsOrgIDSecretsRoute, patchOrgsOrgIDSecretsRouteHandler)
  .openapi(postOrgsOrgIDSecretsDeleteRoute, postOrgsOrgIDSecretsDeleteRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(postQueryAnalyzeRoute, postQueryAnalyzeRouteHandler)
  .openapi(postQueryAstRoute, postQueryAstRouteHandler)
  .openapi(getQuerySuggestionsRoute, getQuerySuggestionsRouteHandler)
  .openapi(getQuerySuggestionsNameRoute, getQuerySuggestionsNameRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getScrapersRoute, getScrapersRouteHandler)
  .openapi(postScrapersRoute, postScrapersRouteHandler)
  .openapi(deleteScrapersScraperTargetIDRoute, deleteScrapersScraperTargetIDRouteHandler)
  .openapi(getScrapersScraperTargetIDRoute, getScrapersScraperTargetIDRouteHandler)
  .openapi(patchScrapersScraperTargetIDRoute, patchScrapersScraperTargetIDRouteHandler)
  .openapi(getScrapersScraperTargetIDLabelsRoute, getScrapersScraperTargetIDLabelsRouteHandler)
  .openapi(postScrapersScraperTargetIDLabelsRoute, postScrapersScraperTargetIDLabelsRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDLabelsLabelIDRoute,
    deleteScrapersScraperTargetIDLabelsLabelIDRouteHandler,
  )
  .openapi(getScrapersScraperTargetIDMembersRoute, getScrapersScraperTargetIDMembersRouteHandler)
  .openapi(postScrapersScraperTargetIDMembersRoute, postScrapersScraperTargetIDMembersRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDMembersUserIDRoute,
    deleteScrapersScraperTargetIDMembersUserIDRouteHandler,
  )
  .openapi(getScrapersScraperTargetIDOwnersRoute, getScrapersScraperTargetIDOwnersRouteHandler)
  .openapi(postScrapersScraperTargetIDOwnersRoute, postScrapersScraperTargetIDOwnersRouteHandler)
  .openapi(
    deleteScrapersScraperTargetIDOwnersUserIDRoute,
    deleteScrapersScraperTargetIDOwnersUserIDRouteHandler,
  )
  .openapi(getSetupRoute, getSetupRouteHandler)
  .openapi(postSetupRoute, postSetupRouteHandler)
  .openapi(postSigninRoute, postSigninRouteHandler)
  .openapi(postSignoutRoute, postSignoutRouteHandler)
  .openapi(getSourcesRoute, getSourcesRouteHandler)
  .openapi(postSourcesRoute, postSourcesRouteHandler)
  .openapi(deleteSourcesSourceIDRoute, deleteSourcesSourceIDRouteHandler)
  .openapi(getSourcesSourceIDRoute, getSourcesSourceIDRouteHandler)
  .openapi(patchSourcesSourceIDRoute, patchSourcesSourceIDRouteHandler)
  .openapi(getSourcesSourceIDBucketsRoute, getSourcesSourceIDBucketsRouteHandler)
  .openapi(getSourcesSourceIDHealthRoute, getSourcesSourceIDHealthRouteHandler)
  .openapi(getStacksRoute, getStacksRouteHandler)
  .openapi(postStacksRoute, postStacksRouteHandler)
  .openapi(deleteStacksStackIdRoute, deleteStacksStackIdRouteHandler)
  .openapi(getStacksStackIdRoute, getStacksStackIdRouteHandler)
  .openapi(patchStacksStackIdRoute, patchStacksStackIdRouteHandler)
  .openapi(postStacksStackIdUninstallRoute, postStacksStackIdUninstallRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(postTasksRoute, postTasksRouteHandler)
  .openapi(deleteTasksTaskIDRoute, deleteTasksTaskIDRouteHandler)
  .openapi(getTasksTaskIDRoute, getTasksTaskIDRouteHandler)
  .openapi(patchTasksTaskIDRoute, patchTasksTaskIDRouteHandler)
  .openapi(getTasksTaskIDLabelsRoute, getTasksTaskIDLabelsRouteHandler)
  .openapi(postTasksTaskIDLabelsRoute, postTasksTaskIDLabelsRouteHandler)
  .openapi(deleteTasksTaskIDLabelsLabelIDRoute, deleteTasksTaskIDLabelsLabelIDRouteHandler)
  .openapi(getTasksTaskIDLogsRoute, getTasksTaskIDLogsRouteHandler)
  .openapi(getTasksTaskIDMembersRoute, getTasksTaskIDMembersRouteHandler)
  .openapi(postTasksTaskIDMembersRoute, postTasksTaskIDMembersRouteHandler)
  .openapi(deleteTasksTaskIDMembersUserIDRoute, deleteTasksTaskIDMembersUserIDRouteHandler)
  .openapi(getTasksTaskIDOwnersRoute, getTasksTaskIDOwnersRouteHandler)
  .openapi(postTasksTaskIDOwnersRoute, postTasksTaskIDOwnersRouteHandler)
  .openapi(deleteTasksTaskIDOwnersUserIDRoute, deleteTasksTaskIDOwnersUserIDRouteHandler)
  .openapi(getTasksTaskIDRunsRoute, getTasksTaskIDRunsRouteHandler)
  .openapi(postTasksTaskIDRunsRoute, postTasksTaskIDRunsRouteHandler)
  .openapi(deleteTasksTaskIDRunsRunIDRoute, deleteTasksTaskIDRunsRunIDRouteHandler)
  .openapi(getTasksTaskIDRunsRunIDRoute, getTasksTaskIDRunsRunIDRouteHandler)
  .openapi(getTasksTaskIDRunsRunIDLogsRoute, getTasksTaskIDRunsRunIDLogsRouteHandler)
  .openapi(postTasksTaskIDRunsRunIDRetryRoute, postTasksTaskIDRunsRunIDRetryRouteHandler)
  .openapi(getTelegrafPluginsRoute, getTelegrafPluginsRouteHandler)
  .openapi(getTelegrafsRoute, getTelegrafsRouteHandler)
  .openapi(postTelegrafsRoute, postTelegrafsRouteHandler)
  .openapi(deleteTelegrafsTelegrafIDRoute, deleteTelegrafsTelegrafIDRouteHandler)
  .openapi(getTelegrafsTelegrafIDRoute, getTelegrafsTelegrafIDRouteHandler)
  .openapi(putTelegrafsTelegrafIDRoute, putTelegrafsTelegrafIDRouteHandler)
  .openapi(getTelegrafsTelegrafIDLabelsRoute, getTelegrafsTelegrafIDLabelsRouteHandler)
  .openapi(postTelegrafsTelegrafIDLabelsRoute, postTelegrafsTelegrafIDLabelsRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDLabelsLabelIDRoute,
    deleteTelegrafsTelegrafIDLabelsLabelIDRouteHandler,
  )
  .openapi(getTelegrafsTelegrafIDMembersRoute, getTelegrafsTelegrafIDMembersRouteHandler)
  .openapi(postTelegrafsTelegrafIDMembersRoute, postTelegrafsTelegrafIDMembersRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDMembersUserIDRoute,
    deleteTelegrafsTelegrafIDMembersUserIDRouteHandler,
  )
  .openapi(getTelegrafsTelegrafIDOwnersRoute, getTelegrafsTelegrafIDOwnersRouteHandler)
  .openapi(postTelegrafsTelegrafIDOwnersRoute, postTelegrafsTelegrafIDOwnersRouteHandler)
  .openapi(
    deleteTelegrafsTelegrafIDOwnersUserIDRoute,
    deleteTelegrafsTelegrafIDOwnersUserIDRouteHandler,
  )
  .openapi(postTemplatesApplyRoute, postTemplatesApplyRouteHandler)
  .openapi(postTemplatesExportRoute, postTemplatesExportRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersUserIDRoute, deleteUsersUserIDRouteHandler)
  .openapi(getUsersUserIDRoute, getUsersUserIDRouteHandler)
  .openapi(patchUsersUserIDRoute, patchUsersUserIDRouteHandler)
  .openapi(postUsersUserIDPasswordRoute, postUsersUserIDPasswordRouteHandler)
  .openapi(getVariablesRoute, getVariablesRouteHandler)
  .openapi(postVariablesRoute, postVariablesRouteHandler)
  .openapi(deleteVariablesVariableIDRoute, deleteVariablesVariableIDRouteHandler)
  .openapi(getVariablesVariableIDRoute, getVariablesVariableIDRouteHandler)
  .openapi(patchVariablesVariableIDRoute, patchVariablesVariableIDRouteHandler)
  .openapi(putVariablesVariableIDRoute, putVariablesVariableIDRouteHandler)
  .openapi(getVariablesVariableIDLabelsRoute, getVariablesVariableIDLabelsRouteHandler)
  .openapi(postVariablesVariableIDLabelsRoute, postVariablesVariableIDLabelsRouteHandler)
  .openapi(
    deleteVariablesVariableIDLabelsLabelIDRoute,
    deleteVariablesVariableIDLabelsLabelIDRouteHandler,
  )
  .openapi(postWriteRoute, postWriteRouteHandler)

export default app
