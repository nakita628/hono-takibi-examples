import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountIdentitiesIdentityIdRoute,
  deleteAccountMfaAuthenticatorsTypeRoute,
  deleteAccountSessionsRoute,
  deleteAccountSessionsSessionIdRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdRoute,
  deleteDatabasesDatabaseIdRoute,
  deleteFunctionsFunctionIdDeploymentsDeploymentIdRoute,
  deleteFunctionsFunctionIdExecutionsExecutionIdRoute,
  deleteFunctionsFunctionIdRoute,
  deleteFunctionsFunctionIdVariablesVariableIdRoute,
  deleteMessagingMessagesMessageIdRoute,
  deleteMessagingProvidersProviderIdRoute,
  deleteMessagingTopicsTopicIdRoute,
  deleteMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
  deleteSitesSiteIdDeploymentsDeploymentIdRoute,
  deleteSitesSiteIdLogsLogIdRoute,
  deleteSitesSiteIdRoute,
  deleteSitesSiteIdVariablesVariableIdRoute,
  deleteStorageBucketsBucketIdFilesFileIdRoute,
  deleteStorageBucketsBucketIdRoute,
  deleteTeamsTeamIdMembershipsMembershipIdRoute,
  deleteTeamsTeamIdRoute,
  deleteTokensTokenIdRoute,
  deleteUsersIdentitiesIdentityIdRoute,
  deleteUsersUserIdMfaAuthenticatorsTypeRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdSessionsRoute,
  deleteUsersUserIdSessionsSessionIdRoute,
  deleteUsersUserIdTargetsTargetIdRoute,
  getAccountIdentitiesRoute,
  getAccountLogsRoute,
  getAccountMfaFactorsRoute,
  getAccountMfaRecoveryCodesRoute,
  getAccountPrefsRoute,
  getAccountRoute,
  getAccountSessionsRoute,
  getAccountSessionsSessionIdRoute,
  getAccountTokensOauth2ProviderRoute,
  getAvatarsBrowsersCodeRoute,
  getAvatarsCreditCardsCodeRoute,
  getAvatarsFaviconRoute,
  getAvatarsFlagsCodeRoute,
  getAvatarsImageRoute,
  getAvatarsInitialsRoute,
  getAvatarsQrRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdRoute,
  getDatabasesDatabaseIdCollectionsRoute,
  getDatabasesDatabaseIdRoute,
  getDatabasesRoute,
  getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRoute,
  getFunctionsFunctionIdDeploymentsDeploymentIdRoute,
  getFunctionsFunctionIdDeploymentsRoute,
  getFunctionsFunctionIdExecutionsExecutionIdRoute,
  getFunctionsFunctionIdExecutionsRoute,
  getFunctionsFunctionIdRoute,
  getFunctionsFunctionIdVariablesRoute,
  getFunctionsFunctionIdVariablesVariableIdRoute,
  getFunctionsRoute,
  getFunctionsRuntimesRoute,
  getFunctionsSpecificationsRoute,
  getHealthAntiVirusRoute,
  getHealthCacheRoute,
  getHealthCertificateRoute,
  getHealthDbRoute,
  getHealthPubsubRoute,
  getHealthQueueBuildsRoute,
  getHealthQueueCertificatesRoute,
  getHealthQueueDatabasesRoute,
  getHealthQueueDeletesRoute,
  getHealthQueueFailedNameRoute,
  getHealthQueueFunctionsRoute,
  getHealthQueueLogsRoute,
  getHealthQueueMailsRoute,
  getHealthQueueMessagingRoute,
  getHealthQueueMigrationsRoute,
  getHealthQueueStatsResourcesRoute,
  getHealthQueueStatsUsageRoute,
  getHealthQueueWebhooksRoute,
  getHealthRoute,
  getHealthStorageLocalRoute,
  getHealthStorageRoute,
  getHealthTimeRoute,
  getLocaleCodesRoute,
  getLocaleContinentsRoute,
  getLocaleCountriesEuRoute,
  getLocaleCountriesPhonesRoute,
  getLocaleCountriesRoute,
  getLocaleCurrenciesRoute,
  getLocaleLanguagesRoute,
  getLocaleRoute,
  getMessagingMessagesMessageIdLogsRoute,
  getMessagingMessagesMessageIdRoute,
  getMessagingMessagesMessageIdTargetsRoute,
  getMessagingMessagesRoute,
  getMessagingProvidersProviderIdLogsRoute,
  getMessagingProvidersProviderIdRoute,
  getMessagingProvidersRoute,
  getMessagingSubscribersSubscriberIdLogsRoute,
  getMessagingTopicsRoute,
  getMessagingTopicsTopicIdLogsRoute,
  getMessagingTopicsTopicIdRoute,
  getMessagingTopicsTopicIdSubscribersRoute,
  getMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
  getSitesFrameworksRoute,
  getSitesRoute,
  getSitesSiteIdDeploymentsDeploymentIdDownloadRoute,
  getSitesSiteIdDeploymentsDeploymentIdRoute,
  getSitesSiteIdDeploymentsRoute,
  getSitesSiteIdLogsLogIdRoute,
  getSitesSiteIdLogsRoute,
  getSitesSiteIdRoute,
  getSitesSiteIdVariablesRoute,
  getSitesSiteIdVariablesVariableIdRoute,
  getSitesSpecificationsRoute,
  getStorageBucketsBucketIdFilesFileIdDownloadRoute,
  getStorageBucketsBucketIdFilesFileIdPreviewRoute,
  getStorageBucketsBucketIdFilesFileIdRoute,
  getStorageBucketsBucketIdFilesFileIdViewRoute,
  getStorageBucketsBucketIdFilesRoute,
  getStorageBucketsBucketIdRoute,
  getStorageBucketsRoute,
  getTeamsRoute,
  getTeamsTeamIdMembershipsMembershipIdRoute,
  getTeamsTeamIdMembershipsRoute,
  getTeamsTeamIdPrefsRoute,
  getTeamsTeamIdRoute,
  getTokensBucketsBucketIdFilesFileIdRoute,
  getTokensTokenIdRoute,
  getUsersIdentitiesRoute,
  getUsersRoute,
  getUsersUserIdLogsRoute,
  getUsersUserIdMembershipsRoute,
  getUsersUserIdMfaFactorsRoute,
  getUsersUserIdMfaRecoveryCodesRoute,
  getUsersUserIdPrefsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSessionsRoute,
  getUsersUserIdTargetsRoute,
  getUsersUserIdTargetsTargetIdRoute,
  patchAccountEmailRoute,
  patchAccountMfaRecoveryCodesRoute,
  patchAccountMfaRoute,
  patchAccountNameRoute,
  patchAccountPasswordRoute,
  patchAccountPhoneRoute,
  patchAccountPrefsRoute,
  patchAccountSessionsSessionIdRoute,
  patchAccountStatusRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  patchFunctionsFunctionIdDeploymentRoute,
  patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRoute,
  patchMessagingMessagesEmailMessageIdRoute,
  patchMessagingMessagesPushMessageIdRoute,
  patchMessagingMessagesSmsMessageIdRoute,
  patchMessagingProvidersApnsProviderIdRoute,
  patchMessagingProvidersFcmProviderIdRoute,
  patchMessagingProvidersMailgunProviderIdRoute,
  patchMessagingProvidersMsg91ProviderIdRoute,
  patchMessagingProvidersSendgridProviderIdRoute,
  patchMessagingProvidersSmtpProviderIdRoute,
  patchMessagingProvidersTelesignProviderIdRoute,
  patchMessagingProvidersTextmagicProviderIdRoute,
  patchMessagingProvidersTwilioProviderIdRoute,
  patchMessagingProvidersVonageProviderIdRoute,
  patchMessagingTopicsTopicIdRoute,
  patchSitesSiteIdDeploymentRoute,
  patchSitesSiteIdDeploymentsDeploymentIdStatusRoute,
  patchTeamsTeamIdMembershipsMembershipIdRoute,
  patchTeamsTeamIdMembershipsMembershipIdStatusRoute,
  patchTokensTokenIdRoute,
  patchUsersUserIdEmailRoute,
  patchUsersUserIdMfaRecoveryCodesRoute,
  patchUsersUserIdMfaRoute,
  patchUsersUserIdNameRoute,
  patchUsersUserIdPasswordRoute,
  patchUsersUserIdPhoneRoute,
  patchUsersUserIdPrefsRoute,
  patchUsersUserIdStatusRoute,
  patchUsersUserIdTargetsTargetIdRoute,
  patchUsersUserIdVerificationPhoneRoute,
  patchUsersUserIdVerificationRoute,
  postAccountJwtsRoute,
  postAccountMfaAuthenticatorsTypeRoute,
  postAccountMfaChallengeRoute,
  postAccountMfaRecoveryCodesRoute,
  postAccountRecoveryRoute,
  postAccountRoute,
  postAccountSessionsAnonymousRoute,
  postAccountSessionsEmailRoute,
  postAccountSessionsTokenRoute,
  postAccountTokensEmailRoute,
  postAccountTokensMagicUrlRoute,
  postAccountTokensPhoneRoute,
  postAccountVerificationPhoneRoute,
  postAccountVerificationRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
  postDatabasesDatabaseIdCollectionsRoute,
  postDatabasesRoute,
  postFunctionsFunctionIdDeploymentsDuplicateRoute,
  postFunctionsFunctionIdDeploymentsRoute,
  postFunctionsFunctionIdDeploymentsTemplateRoute,
  postFunctionsFunctionIdDeploymentsVcsRoute,
  postFunctionsFunctionIdExecutionsRoute,
  postFunctionsFunctionIdVariablesRoute,
  postFunctionsRoute,
  postGraphqlMutationRoute,
  postGraphqlRoute,
  postMessagingMessagesEmailRoute,
  postMessagingMessagesPushRoute,
  postMessagingMessagesSmsRoute,
  postMessagingProvidersApnsRoute,
  postMessagingProvidersFcmRoute,
  postMessagingProvidersMailgunRoute,
  postMessagingProvidersMsg91Route,
  postMessagingProvidersSendgridRoute,
  postMessagingProvidersSmtpRoute,
  postMessagingProvidersTelesignRoute,
  postMessagingProvidersTextmagicRoute,
  postMessagingProvidersTwilioRoute,
  postMessagingProvidersVonageRoute,
  postMessagingTopicsRoute,
  postMessagingTopicsTopicIdSubscribersRoute,
  postSitesRoute,
  postSitesSiteIdDeploymentsDuplicateRoute,
  postSitesSiteIdDeploymentsRoute,
  postSitesSiteIdDeploymentsTemplateRoute,
  postSitesSiteIdDeploymentsVcsRoute,
  postSitesSiteIdVariablesRoute,
  postStorageBucketsBucketIdFilesRoute,
  postStorageBucketsRoute,
  postTeamsRoute,
  postTeamsTeamIdMembershipsRoute,
  postTokensBucketsBucketIdFilesFileIdRoute,
  postUsersArgon2Route,
  postUsersBcryptRoute,
  postUsersMd5Route,
  postUsersPhpassRoute,
  postUsersRoute,
  postUsersScryptModifiedRoute,
  postUsersScryptRoute,
  postUsersShaRoute,
  postUsersUserIdJwtsRoute,
  postUsersUserIdSessionsRoute,
  postUsersUserIdTargetsRoute,
  postUsersUserIdTokensRoute,
  putAccountMfaAuthenticatorsTypeRoute,
  putAccountMfaChallengeRoute,
  putAccountRecoveryRoute,
  putAccountSessionsMagicUrlRoute,
  putAccountSessionsPhoneRoute,
  putAccountVerificationPhoneRoute,
  putAccountVerificationRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdRoute,
  putDatabasesDatabaseIdRoute,
  putFunctionsFunctionIdRoute,
  putFunctionsFunctionIdVariablesVariableIdRoute,
  putSitesSiteIdRoute,
  putSitesSiteIdVariablesVariableIdRoute,
  putStorageBucketsBucketIdFilesFileIdRoute,
  putStorageBucketsBucketIdRoute,
  putTeamsTeamIdPrefsRoute,
  putTeamsTeamIdRoute,
  putUsersUserIdLabelsRoute,
  putUsersUserIdMfaRecoveryCodesRoute,
} from './routes'
import {
  deleteAccountIdentitiesIdentityIdRouteHandler,
  deleteAccountMfaAuthenticatorsTypeRouteHandler,
  deleteAccountSessionsRouteHandler,
  deleteAccountSessionsSessionIdRouteHandler,
  deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRouteHandler,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRouteHandler,
  deleteDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  deleteDatabasesDatabaseIdRouteHandler,
  deleteFunctionsFunctionIdDeploymentsDeploymentIdRouteHandler,
  deleteFunctionsFunctionIdExecutionsExecutionIdRouteHandler,
  deleteFunctionsFunctionIdRouteHandler,
  deleteFunctionsFunctionIdVariablesVariableIdRouteHandler,
  deleteMessagingMessagesMessageIdRouteHandler,
  deleteMessagingProvidersProviderIdRouteHandler,
  deleteMessagingTopicsTopicIdRouteHandler,
  deleteMessagingTopicsTopicIdSubscribersSubscriberIdRouteHandler,
  deleteSitesSiteIdDeploymentsDeploymentIdRouteHandler,
  deleteSitesSiteIdLogsLogIdRouteHandler,
  deleteSitesSiteIdRouteHandler,
  deleteSitesSiteIdVariablesVariableIdRouteHandler,
  deleteStorageBucketsBucketIdFilesFileIdRouteHandler,
  deleteStorageBucketsBucketIdRouteHandler,
  deleteTeamsTeamIdMembershipsMembershipIdRouteHandler,
  deleteTeamsTeamIdRouteHandler,
  deleteTokensTokenIdRouteHandler,
  deleteUsersIdentitiesIdentityIdRouteHandler,
  deleteUsersUserIdMfaAuthenticatorsTypeRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteUsersUserIdSessionsRouteHandler,
  deleteUsersUserIdSessionsSessionIdRouteHandler,
  deleteUsersUserIdTargetsTargetIdRouteHandler,
  getAccountIdentitiesRouteHandler,
  getAccountLogsRouteHandler,
  getAccountMfaFactorsRouteHandler,
  getAccountMfaRecoveryCodesRouteHandler,
  getAccountPrefsRouteHandler,
  getAccountRouteHandler,
  getAccountSessionsRouteHandler,
  getAccountSessionsSessionIdRouteHandler,
  getAccountTokensOauth2ProviderRouteHandler,
  getAvatarsBrowsersCodeRouteHandler,
  getAvatarsCreditCardsCodeRouteHandler,
  getAvatarsFaviconRouteHandler,
  getAvatarsFlagsCodeRouteHandler,
  getAvatarsImageRouteHandler,
  getAvatarsInitialsRouteHandler,
  getAvatarsQrRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesRouteHandler,
  getDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  getDatabasesDatabaseIdCollectionsRouteHandler,
  getDatabasesDatabaseIdRouteHandler,
  getDatabasesRouteHandler,
  getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRouteHandler,
  getFunctionsFunctionIdDeploymentsDeploymentIdRouteHandler,
  getFunctionsFunctionIdDeploymentsRouteHandler,
  getFunctionsFunctionIdExecutionsExecutionIdRouteHandler,
  getFunctionsFunctionIdExecutionsRouteHandler,
  getFunctionsFunctionIdRouteHandler,
  getFunctionsFunctionIdVariablesRouteHandler,
  getFunctionsFunctionIdVariablesVariableIdRouteHandler,
  getFunctionsRouteHandler,
  getFunctionsRuntimesRouteHandler,
  getFunctionsSpecificationsRouteHandler,
  getHealthAntiVirusRouteHandler,
  getHealthCacheRouteHandler,
  getHealthCertificateRouteHandler,
  getHealthDbRouteHandler,
  getHealthPubsubRouteHandler,
  getHealthQueueBuildsRouteHandler,
  getHealthQueueCertificatesRouteHandler,
  getHealthQueueDatabasesRouteHandler,
  getHealthQueueDeletesRouteHandler,
  getHealthQueueFailedNameRouteHandler,
  getHealthQueueFunctionsRouteHandler,
  getHealthQueueLogsRouteHandler,
  getHealthQueueMailsRouteHandler,
  getHealthQueueMessagingRouteHandler,
  getHealthQueueMigrationsRouteHandler,
  getHealthQueueStatsResourcesRouteHandler,
  getHealthQueueStatsUsageRouteHandler,
  getHealthQueueWebhooksRouteHandler,
  getHealthRouteHandler,
  getHealthStorageLocalRouteHandler,
  getHealthStorageRouteHandler,
  getHealthTimeRouteHandler,
  getLocaleCodesRouteHandler,
  getLocaleContinentsRouteHandler,
  getLocaleCountriesEuRouteHandler,
  getLocaleCountriesPhonesRouteHandler,
  getLocaleCountriesRouteHandler,
  getLocaleCurrenciesRouteHandler,
  getLocaleLanguagesRouteHandler,
  getLocaleRouteHandler,
  getMessagingMessagesMessageIdLogsRouteHandler,
  getMessagingMessagesMessageIdRouteHandler,
  getMessagingMessagesMessageIdTargetsRouteHandler,
  getMessagingMessagesRouteHandler,
  getMessagingProvidersProviderIdLogsRouteHandler,
  getMessagingProvidersProviderIdRouteHandler,
  getMessagingProvidersRouteHandler,
  getMessagingSubscribersSubscriberIdLogsRouteHandler,
  getMessagingTopicsRouteHandler,
  getMessagingTopicsTopicIdLogsRouteHandler,
  getMessagingTopicsTopicIdRouteHandler,
  getMessagingTopicsTopicIdSubscribersRouteHandler,
  getMessagingTopicsTopicIdSubscribersSubscriberIdRouteHandler,
  getSitesFrameworksRouteHandler,
  getSitesRouteHandler,
  getSitesSiteIdDeploymentsDeploymentIdDownloadRouteHandler,
  getSitesSiteIdDeploymentsDeploymentIdRouteHandler,
  getSitesSiteIdDeploymentsRouteHandler,
  getSitesSiteIdLogsLogIdRouteHandler,
  getSitesSiteIdLogsRouteHandler,
  getSitesSiteIdRouteHandler,
  getSitesSiteIdVariablesRouteHandler,
  getSitesSiteIdVariablesVariableIdRouteHandler,
  getSitesSpecificationsRouteHandler,
  getStorageBucketsBucketIdFilesFileIdDownloadRouteHandler,
  getStorageBucketsBucketIdFilesFileIdPreviewRouteHandler,
  getStorageBucketsBucketIdFilesFileIdRouteHandler,
  getStorageBucketsBucketIdFilesFileIdViewRouteHandler,
  getStorageBucketsBucketIdFilesRouteHandler,
  getStorageBucketsBucketIdRouteHandler,
  getStorageBucketsRouteHandler,
  getTeamsRouteHandler,
  getTeamsTeamIdMembershipsMembershipIdRouteHandler,
  getTeamsTeamIdMembershipsRouteHandler,
  getTeamsTeamIdPrefsRouteHandler,
  getTeamsTeamIdRouteHandler,
  getTokensBucketsBucketIdFilesFileIdRouteHandler,
  getTokensTokenIdRouteHandler,
  getUsersIdentitiesRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdLogsRouteHandler,
  getUsersUserIdMembershipsRouteHandler,
  getUsersUserIdMfaFactorsRouteHandler,
  getUsersUserIdMfaRecoveryCodesRouteHandler,
  getUsersUserIdPrefsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdSessionsRouteHandler,
  getUsersUserIdTargetsRouteHandler,
  getUsersUserIdTargetsTargetIdRouteHandler,
  patchAccountEmailRouteHandler,
  patchAccountMfaRecoveryCodesRouteHandler,
  patchAccountMfaRouteHandler,
  patchAccountNameRouteHandler,
  patchAccountPasswordRouteHandler,
  patchAccountPhoneRouteHandler,
  patchAccountPrefsRouteHandler,
  patchAccountSessionsSessionIdRouteHandler,
  patchAccountStatusRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  patchFunctionsFunctionIdDeploymentRouteHandler,
  patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRouteHandler,
  patchMessagingMessagesEmailMessageIdRouteHandler,
  patchMessagingMessagesPushMessageIdRouteHandler,
  patchMessagingMessagesSmsMessageIdRouteHandler,
  patchMessagingProvidersApnsProviderIdRouteHandler,
  patchMessagingProvidersFcmProviderIdRouteHandler,
  patchMessagingProvidersMailgunProviderIdRouteHandler,
  patchMessagingProvidersMsg91ProviderIdRouteHandler,
  patchMessagingProvidersSendgridProviderIdRouteHandler,
  patchMessagingProvidersSmtpProviderIdRouteHandler,
  patchMessagingProvidersTelesignProviderIdRouteHandler,
  patchMessagingProvidersTextmagicProviderIdRouteHandler,
  patchMessagingProvidersTwilioProviderIdRouteHandler,
  patchMessagingProvidersVonageProviderIdRouteHandler,
  patchMessagingTopicsTopicIdRouteHandler,
  patchSitesSiteIdDeploymentRouteHandler,
  patchSitesSiteIdDeploymentsDeploymentIdStatusRouteHandler,
  patchTeamsTeamIdMembershipsMembershipIdRouteHandler,
  patchTeamsTeamIdMembershipsMembershipIdStatusRouteHandler,
  patchTokensTokenIdRouteHandler,
  patchUsersUserIdEmailRouteHandler,
  patchUsersUserIdMfaRecoveryCodesRouteHandler,
  patchUsersUserIdMfaRouteHandler,
  patchUsersUserIdNameRouteHandler,
  patchUsersUserIdPasswordRouteHandler,
  patchUsersUserIdPhoneRouteHandler,
  patchUsersUserIdPrefsRouteHandler,
  patchUsersUserIdStatusRouteHandler,
  patchUsersUserIdTargetsTargetIdRouteHandler,
  patchUsersUserIdVerificationPhoneRouteHandler,
  patchUsersUserIdVerificationRouteHandler,
  postAccountJwtsRouteHandler,
  postAccountMfaAuthenticatorsTypeRouteHandler,
  postAccountMfaChallengeRouteHandler,
  postAccountMfaRecoveryCodesRouteHandler,
  postAccountRecoveryRouteHandler,
  postAccountRouteHandler,
  postAccountSessionsAnonymousRouteHandler,
  postAccountSessionsEmailRouteHandler,
  postAccountSessionsTokenRouteHandler,
  postAccountTokensEmailRouteHandler,
  postAccountTokensMagicUrlRouteHandler,
  postAccountTokensPhoneRouteHandler,
  postAccountVerificationPhoneRouteHandler,
  postAccountVerificationRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  postDatabasesDatabaseIdCollectionsCollectionIdIndexesRouteHandler,
  postDatabasesDatabaseIdCollectionsRouteHandler,
  postDatabasesRouteHandler,
  postFunctionsFunctionIdDeploymentsDuplicateRouteHandler,
  postFunctionsFunctionIdDeploymentsRouteHandler,
  postFunctionsFunctionIdDeploymentsTemplateRouteHandler,
  postFunctionsFunctionIdDeploymentsVcsRouteHandler,
  postFunctionsFunctionIdExecutionsRouteHandler,
  postFunctionsFunctionIdVariablesRouteHandler,
  postFunctionsRouteHandler,
  postGraphqlMutationRouteHandler,
  postGraphqlRouteHandler,
  postMessagingMessagesEmailRouteHandler,
  postMessagingMessagesPushRouteHandler,
  postMessagingMessagesSmsRouteHandler,
  postMessagingProvidersApnsRouteHandler,
  postMessagingProvidersFcmRouteHandler,
  postMessagingProvidersMailgunRouteHandler,
  postMessagingProvidersMsg91RouteHandler,
  postMessagingProvidersSendgridRouteHandler,
  postMessagingProvidersSmtpRouteHandler,
  postMessagingProvidersTelesignRouteHandler,
  postMessagingProvidersTextmagicRouteHandler,
  postMessagingProvidersTwilioRouteHandler,
  postMessagingProvidersVonageRouteHandler,
  postMessagingTopicsRouteHandler,
  postMessagingTopicsTopicIdSubscribersRouteHandler,
  postSitesRouteHandler,
  postSitesSiteIdDeploymentsDuplicateRouteHandler,
  postSitesSiteIdDeploymentsRouteHandler,
  postSitesSiteIdDeploymentsTemplateRouteHandler,
  postSitesSiteIdDeploymentsVcsRouteHandler,
  postSitesSiteIdVariablesRouteHandler,
  postStorageBucketsBucketIdFilesRouteHandler,
  postStorageBucketsRouteHandler,
  postTeamsRouteHandler,
  postTeamsTeamIdMembershipsRouteHandler,
  postTokensBucketsBucketIdFilesFileIdRouteHandler,
  postUsersArgon2RouteHandler,
  postUsersBcryptRouteHandler,
  postUsersMd5RouteHandler,
  postUsersPhpassRouteHandler,
  postUsersRouteHandler,
  postUsersScryptModifiedRouteHandler,
  postUsersScryptRouteHandler,
  postUsersShaRouteHandler,
  postUsersUserIdJwtsRouteHandler,
  postUsersUserIdSessionsRouteHandler,
  postUsersUserIdTargetsRouteHandler,
  postUsersUserIdTokensRouteHandler,
  putAccountMfaAuthenticatorsTypeRouteHandler,
  putAccountMfaChallengeRouteHandler,
  putAccountRecoveryRouteHandler,
  putAccountSessionsMagicUrlRouteHandler,
  putAccountSessionsPhoneRouteHandler,
  putAccountVerificationPhoneRouteHandler,
  putAccountVerificationRouteHandler,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  putDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  putDatabasesDatabaseIdRouteHandler,
  putFunctionsFunctionIdRouteHandler,
  putFunctionsFunctionIdVariablesVariableIdRouteHandler,
  putSitesSiteIdRouteHandler,
  putSitesSiteIdVariablesVariableIdRouteHandler,
  putStorageBucketsBucketIdFilesFileIdRouteHandler,
  putStorageBucketsBucketIdRouteHandler,
  putTeamsTeamIdPrefsRouteHandler,
  putTeamsTeamIdRouteHandler,
  putUsersUserIdLabelsRouteHandler,
  putUsersUserIdMfaRecoveryCodesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(postAccountRoute, postAccountRouteHandler)
  .openapi(patchAccountEmailRoute, patchAccountEmailRouteHandler)
  .openapi(getAccountIdentitiesRoute, getAccountIdentitiesRouteHandler)
  .openapi(deleteAccountIdentitiesIdentityIdRoute, deleteAccountIdentitiesIdentityIdRouteHandler)
  .openapi(postAccountJwtsRoute, postAccountJwtsRouteHandler)
  .openapi(getAccountLogsRoute, getAccountLogsRouteHandler)
  .openapi(patchAccountMfaRoute, patchAccountMfaRouteHandler)
  .openapi(postAccountMfaAuthenticatorsTypeRoute, postAccountMfaAuthenticatorsTypeRouteHandler)
  .openapi(putAccountMfaAuthenticatorsTypeRoute, putAccountMfaAuthenticatorsTypeRouteHandler)
  .openapi(deleteAccountMfaAuthenticatorsTypeRoute, deleteAccountMfaAuthenticatorsTypeRouteHandler)
  .openapi(postAccountMfaChallengeRoute, postAccountMfaChallengeRouteHandler)
  .openapi(putAccountMfaChallengeRoute, putAccountMfaChallengeRouteHandler)
  .openapi(getAccountMfaFactorsRoute, getAccountMfaFactorsRouteHandler)
  .openapi(getAccountMfaRecoveryCodesRoute, getAccountMfaRecoveryCodesRouteHandler)
  .openapi(postAccountMfaRecoveryCodesRoute, postAccountMfaRecoveryCodesRouteHandler)
  .openapi(patchAccountMfaRecoveryCodesRoute, patchAccountMfaRecoveryCodesRouteHandler)
  .openapi(patchAccountNameRoute, patchAccountNameRouteHandler)
  .openapi(patchAccountPasswordRoute, patchAccountPasswordRouteHandler)
  .openapi(patchAccountPhoneRoute, patchAccountPhoneRouteHandler)
  .openapi(getAccountPrefsRoute, getAccountPrefsRouteHandler)
  .openapi(patchAccountPrefsRoute, patchAccountPrefsRouteHandler)
  .openapi(postAccountRecoveryRoute, postAccountRecoveryRouteHandler)
  .openapi(putAccountRecoveryRoute, putAccountRecoveryRouteHandler)
  .openapi(getAccountSessionsRoute, getAccountSessionsRouteHandler)
  .openapi(deleteAccountSessionsRoute, deleteAccountSessionsRouteHandler)
  .openapi(postAccountSessionsAnonymousRoute, postAccountSessionsAnonymousRouteHandler)
  .openapi(postAccountSessionsEmailRoute, postAccountSessionsEmailRouteHandler)
  .openapi(putAccountSessionsMagicUrlRoute, putAccountSessionsMagicUrlRouteHandler)
  .openapi(putAccountSessionsPhoneRoute, putAccountSessionsPhoneRouteHandler)
  .openapi(postAccountSessionsTokenRoute, postAccountSessionsTokenRouteHandler)
  .openapi(getAccountSessionsSessionIdRoute, getAccountSessionsSessionIdRouteHandler)
  .openapi(patchAccountSessionsSessionIdRoute, patchAccountSessionsSessionIdRouteHandler)
  .openapi(deleteAccountSessionsSessionIdRoute, deleteAccountSessionsSessionIdRouteHandler)
  .openapi(patchAccountStatusRoute, patchAccountStatusRouteHandler)
  .openapi(postAccountTokensEmailRoute, postAccountTokensEmailRouteHandler)
  .openapi(postAccountTokensMagicUrlRoute, postAccountTokensMagicUrlRouteHandler)
  .openapi(getAccountTokensOauth2ProviderRoute, getAccountTokensOauth2ProviderRouteHandler)
  .openapi(postAccountTokensPhoneRoute, postAccountTokensPhoneRouteHandler)
  .openapi(postAccountVerificationRoute, postAccountVerificationRouteHandler)
  .openapi(putAccountVerificationRoute, putAccountVerificationRouteHandler)
  .openapi(postAccountVerificationPhoneRoute, postAccountVerificationPhoneRouteHandler)
  .openapi(putAccountVerificationPhoneRoute, putAccountVerificationPhoneRouteHandler)
  .openapi(getAvatarsBrowsersCodeRoute, getAvatarsBrowsersCodeRouteHandler)
  .openapi(getAvatarsCreditCardsCodeRoute, getAvatarsCreditCardsCodeRouteHandler)
  .openapi(getAvatarsFaviconRoute, getAvatarsFaviconRouteHandler)
  .openapi(getAvatarsFlagsCodeRoute, getAvatarsFlagsCodeRouteHandler)
  .openapi(getAvatarsImageRoute, getAvatarsImageRouteHandler)
  .openapi(getAvatarsInitialsRoute, getAvatarsInitialsRouteHandler)
  .openapi(getAvatarsQrRoute, getAvatarsQrRouteHandler)
  .openapi(getDatabasesRoute, getDatabasesRouteHandler)
  .openapi(postDatabasesRoute, postDatabasesRouteHandler)
  .openapi(getDatabasesDatabaseIdRoute, getDatabasesDatabaseIdRouteHandler)
  .openapi(putDatabasesDatabaseIdRoute, putDatabasesDatabaseIdRouteHandler)
  .openapi(deleteDatabasesDatabaseIdRoute, deleteDatabasesDatabaseIdRouteHandler)
  .openapi(getDatabasesDatabaseIdCollectionsRoute, getDatabasesDatabaseIdCollectionsRouteHandler)
  .openapi(postDatabasesDatabaseIdCollectionsRoute, postDatabasesDatabaseIdCollectionsRouteHandler)
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    putDatabasesDatabaseIdCollectionsCollectionIdRoute,
    putDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    deleteDatabasesDatabaseIdCollectionsCollectionIdRoute,
    deleteDatabasesDatabaseIdCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdAttributesRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdAttributesRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRouteHandler,
  )
  .openapi(
    deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
    deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  )
  .openapi(
    putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
    putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  )
  .openapi(
    deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
    deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
    putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
    deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRouteHandler,
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRoute,
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdIndexesRouteHandler,
  )
  .openapi(
    postDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
    postDatabasesDatabaseIdCollectionsCollectionIdIndexesRouteHandler,
  )
  .openapi(
    getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
    getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRouteHandler,
  )
  .openapi(
    deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
    deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRouteHandler,
  )
  .openapi(getFunctionsRoute, getFunctionsRouteHandler)
  .openapi(postFunctionsRoute, postFunctionsRouteHandler)
  .openapi(getFunctionsRuntimesRoute, getFunctionsRuntimesRouteHandler)
  .openapi(getFunctionsSpecificationsRoute, getFunctionsSpecificationsRouteHandler)
  .openapi(getFunctionsFunctionIdRoute, getFunctionsFunctionIdRouteHandler)
  .openapi(putFunctionsFunctionIdRoute, putFunctionsFunctionIdRouteHandler)
  .openapi(deleteFunctionsFunctionIdRoute, deleteFunctionsFunctionIdRouteHandler)
  .openapi(patchFunctionsFunctionIdDeploymentRoute, patchFunctionsFunctionIdDeploymentRouteHandler)
  .openapi(getFunctionsFunctionIdDeploymentsRoute, getFunctionsFunctionIdDeploymentsRouteHandler)
  .openapi(postFunctionsFunctionIdDeploymentsRoute, postFunctionsFunctionIdDeploymentsRouteHandler)
  .openapi(
    postFunctionsFunctionIdDeploymentsDuplicateRoute,
    postFunctionsFunctionIdDeploymentsDuplicateRouteHandler,
  )
  .openapi(
    postFunctionsFunctionIdDeploymentsTemplateRoute,
    postFunctionsFunctionIdDeploymentsTemplateRouteHandler,
  )
  .openapi(
    postFunctionsFunctionIdDeploymentsVcsRoute,
    postFunctionsFunctionIdDeploymentsVcsRouteHandler,
  )
  .openapi(
    getFunctionsFunctionIdDeploymentsDeploymentIdRoute,
    getFunctionsFunctionIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    deleteFunctionsFunctionIdDeploymentsDeploymentIdRoute,
    deleteFunctionsFunctionIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRoute,
    getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRouteHandler,
  )
  .openapi(
    patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRoute,
    patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRouteHandler,
  )
  .openapi(getFunctionsFunctionIdExecutionsRoute, getFunctionsFunctionIdExecutionsRouteHandler)
  .openapi(postFunctionsFunctionIdExecutionsRoute, postFunctionsFunctionIdExecutionsRouteHandler)
  .openapi(
    getFunctionsFunctionIdExecutionsExecutionIdRoute,
    getFunctionsFunctionIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    deleteFunctionsFunctionIdExecutionsExecutionIdRoute,
    deleteFunctionsFunctionIdExecutionsExecutionIdRouteHandler,
  )
  .openapi(getFunctionsFunctionIdVariablesRoute, getFunctionsFunctionIdVariablesRouteHandler)
  .openapi(postFunctionsFunctionIdVariablesRoute, postFunctionsFunctionIdVariablesRouteHandler)
  .openapi(
    getFunctionsFunctionIdVariablesVariableIdRoute,
    getFunctionsFunctionIdVariablesVariableIdRouteHandler,
  )
  .openapi(
    putFunctionsFunctionIdVariablesVariableIdRoute,
    putFunctionsFunctionIdVariablesVariableIdRouteHandler,
  )
  .openapi(
    deleteFunctionsFunctionIdVariablesVariableIdRoute,
    deleteFunctionsFunctionIdVariablesVariableIdRouteHandler,
  )
  .openapi(postGraphqlRoute, postGraphqlRouteHandler)
  .openapi(postGraphqlMutationRoute, postGraphqlMutationRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getHealthAntiVirusRoute, getHealthAntiVirusRouteHandler)
  .openapi(getHealthCacheRoute, getHealthCacheRouteHandler)
  .openapi(getHealthCertificateRoute, getHealthCertificateRouteHandler)
  .openapi(getHealthDbRoute, getHealthDbRouteHandler)
  .openapi(getHealthPubsubRoute, getHealthPubsubRouteHandler)
  .openapi(getHealthQueueBuildsRoute, getHealthQueueBuildsRouteHandler)
  .openapi(getHealthQueueCertificatesRoute, getHealthQueueCertificatesRouteHandler)
  .openapi(getHealthQueueDatabasesRoute, getHealthQueueDatabasesRouteHandler)
  .openapi(getHealthQueueDeletesRoute, getHealthQueueDeletesRouteHandler)
  .openapi(getHealthQueueFailedNameRoute, getHealthQueueFailedNameRouteHandler)
  .openapi(getHealthQueueFunctionsRoute, getHealthQueueFunctionsRouteHandler)
  .openapi(getHealthQueueLogsRoute, getHealthQueueLogsRouteHandler)
  .openapi(getHealthQueueMailsRoute, getHealthQueueMailsRouteHandler)
  .openapi(getHealthQueueMessagingRoute, getHealthQueueMessagingRouteHandler)
  .openapi(getHealthQueueMigrationsRoute, getHealthQueueMigrationsRouteHandler)
  .openapi(getHealthQueueStatsResourcesRoute, getHealthQueueStatsResourcesRouteHandler)
  .openapi(getHealthQueueStatsUsageRoute, getHealthQueueStatsUsageRouteHandler)
  .openapi(getHealthQueueWebhooksRoute, getHealthQueueWebhooksRouteHandler)
  .openapi(getHealthStorageRoute, getHealthStorageRouteHandler)
  .openapi(getHealthStorageLocalRoute, getHealthStorageLocalRouteHandler)
  .openapi(getHealthTimeRoute, getHealthTimeRouteHandler)
  .openapi(getLocaleRoute, getLocaleRouteHandler)
  .openapi(getLocaleCodesRoute, getLocaleCodesRouteHandler)
  .openapi(getLocaleContinentsRoute, getLocaleContinentsRouteHandler)
  .openapi(getLocaleCountriesRoute, getLocaleCountriesRouteHandler)
  .openapi(getLocaleCountriesEuRoute, getLocaleCountriesEuRouteHandler)
  .openapi(getLocaleCountriesPhonesRoute, getLocaleCountriesPhonesRouteHandler)
  .openapi(getLocaleCurrenciesRoute, getLocaleCurrenciesRouteHandler)
  .openapi(getLocaleLanguagesRoute, getLocaleLanguagesRouteHandler)
  .openapi(getMessagingMessagesRoute, getMessagingMessagesRouteHandler)
  .openapi(postMessagingMessagesEmailRoute, postMessagingMessagesEmailRouteHandler)
  .openapi(
    patchMessagingMessagesEmailMessageIdRoute,
    patchMessagingMessagesEmailMessageIdRouteHandler,
  )
  .openapi(postMessagingMessagesPushRoute, postMessagingMessagesPushRouteHandler)
  .openapi(
    patchMessagingMessagesPushMessageIdRoute,
    patchMessagingMessagesPushMessageIdRouteHandler,
  )
  .openapi(postMessagingMessagesSmsRoute, postMessagingMessagesSmsRouteHandler)
  .openapi(patchMessagingMessagesSmsMessageIdRoute, patchMessagingMessagesSmsMessageIdRouteHandler)
  .openapi(getMessagingMessagesMessageIdRoute, getMessagingMessagesMessageIdRouteHandler)
  .openapi(deleteMessagingMessagesMessageIdRoute, deleteMessagingMessagesMessageIdRouteHandler)
  .openapi(getMessagingMessagesMessageIdLogsRoute, getMessagingMessagesMessageIdLogsRouteHandler)
  .openapi(
    getMessagingMessagesMessageIdTargetsRoute,
    getMessagingMessagesMessageIdTargetsRouteHandler,
  )
  .openapi(getMessagingProvidersRoute, getMessagingProvidersRouteHandler)
  .openapi(postMessagingProvidersApnsRoute, postMessagingProvidersApnsRouteHandler)
  .openapi(
    patchMessagingProvidersApnsProviderIdRoute,
    patchMessagingProvidersApnsProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersFcmRoute, postMessagingProvidersFcmRouteHandler)
  .openapi(
    patchMessagingProvidersFcmProviderIdRoute,
    patchMessagingProvidersFcmProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersMailgunRoute, postMessagingProvidersMailgunRouteHandler)
  .openapi(
    patchMessagingProvidersMailgunProviderIdRoute,
    patchMessagingProvidersMailgunProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersMsg91Route, postMessagingProvidersMsg91RouteHandler)
  .openapi(
    patchMessagingProvidersMsg91ProviderIdRoute,
    patchMessagingProvidersMsg91ProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersSendgridRoute, postMessagingProvidersSendgridRouteHandler)
  .openapi(
    patchMessagingProvidersSendgridProviderIdRoute,
    patchMessagingProvidersSendgridProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersSmtpRoute, postMessagingProvidersSmtpRouteHandler)
  .openapi(
    patchMessagingProvidersSmtpProviderIdRoute,
    patchMessagingProvidersSmtpProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersTelesignRoute, postMessagingProvidersTelesignRouteHandler)
  .openapi(
    patchMessagingProvidersTelesignProviderIdRoute,
    patchMessagingProvidersTelesignProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersTextmagicRoute, postMessagingProvidersTextmagicRouteHandler)
  .openapi(
    patchMessagingProvidersTextmagicProviderIdRoute,
    patchMessagingProvidersTextmagicProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersTwilioRoute, postMessagingProvidersTwilioRouteHandler)
  .openapi(
    patchMessagingProvidersTwilioProviderIdRoute,
    patchMessagingProvidersTwilioProviderIdRouteHandler,
  )
  .openapi(postMessagingProvidersVonageRoute, postMessagingProvidersVonageRouteHandler)
  .openapi(
    patchMessagingProvidersVonageProviderIdRoute,
    patchMessagingProvidersVonageProviderIdRouteHandler,
  )
  .openapi(getMessagingProvidersProviderIdRoute, getMessagingProvidersProviderIdRouteHandler)
  .openapi(deleteMessagingProvidersProviderIdRoute, deleteMessagingProvidersProviderIdRouteHandler)
  .openapi(
    getMessagingProvidersProviderIdLogsRoute,
    getMessagingProvidersProviderIdLogsRouteHandler,
  )
  .openapi(
    getMessagingSubscribersSubscriberIdLogsRoute,
    getMessagingSubscribersSubscriberIdLogsRouteHandler,
  )
  .openapi(getMessagingTopicsRoute, getMessagingTopicsRouteHandler)
  .openapi(postMessagingTopicsRoute, postMessagingTopicsRouteHandler)
  .openapi(getMessagingTopicsTopicIdRoute, getMessagingTopicsTopicIdRouteHandler)
  .openapi(patchMessagingTopicsTopicIdRoute, patchMessagingTopicsTopicIdRouteHandler)
  .openapi(deleteMessagingTopicsTopicIdRoute, deleteMessagingTopicsTopicIdRouteHandler)
  .openapi(getMessagingTopicsTopicIdLogsRoute, getMessagingTopicsTopicIdLogsRouteHandler)
  .openapi(
    getMessagingTopicsTopicIdSubscribersRoute,
    getMessagingTopicsTopicIdSubscribersRouteHandler,
  )
  .openapi(
    postMessagingTopicsTopicIdSubscribersRoute,
    postMessagingTopicsTopicIdSubscribersRouteHandler,
  )
  .openapi(
    getMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
    getMessagingTopicsTopicIdSubscribersSubscriberIdRouteHandler,
  )
  .openapi(
    deleteMessagingTopicsTopicIdSubscribersSubscriberIdRoute,
    deleteMessagingTopicsTopicIdSubscribersSubscriberIdRouteHandler,
  )
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(postSitesRoute, postSitesRouteHandler)
  .openapi(getSitesFrameworksRoute, getSitesFrameworksRouteHandler)
  .openapi(getSitesSpecificationsRoute, getSitesSpecificationsRouteHandler)
  .openapi(getSitesSiteIdRoute, getSitesSiteIdRouteHandler)
  .openapi(putSitesSiteIdRoute, putSitesSiteIdRouteHandler)
  .openapi(deleteSitesSiteIdRoute, deleteSitesSiteIdRouteHandler)
  .openapi(patchSitesSiteIdDeploymentRoute, patchSitesSiteIdDeploymentRouteHandler)
  .openapi(getSitesSiteIdDeploymentsRoute, getSitesSiteIdDeploymentsRouteHandler)
  .openapi(postSitesSiteIdDeploymentsRoute, postSitesSiteIdDeploymentsRouteHandler)
  .openapi(
    postSitesSiteIdDeploymentsDuplicateRoute,
    postSitesSiteIdDeploymentsDuplicateRouteHandler,
  )
  .openapi(postSitesSiteIdDeploymentsTemplateRoute, postSitesSiteIdDeploymentsTemplateRouteHandler)
  .openapi(postSitesSiteIdDeploymentsVcsRoute, postSitesSiteIdDeploymentsVcsRouteHandler)
  .openapi(
    getSitesSiteIdDeploymentsDeploymentIdRoute,
    getSitesSiteIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    deleteSitesSiteIdDeploymentsDeploymentIdRoute,
    deleteSitesSiteIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getSitesSiteIdDeploymentsDeploymentIdDownloadRoute,
    getSitesSiteIdDeploymentsDeploymentIdDownloadRouteHandler,
  )
  .openapi(
    patchSitesSiteIdDeploymentsDeploymentIdStatusRoute,
    patchSitesSiteIdDeploymentsDeploymentIdStatusRouteHandler,
  )
  .openapi(getSitesSiteIdLogsRoute, getSitesSiteIdLogsRouteHandler)
  .openapi(getSitesSiteIdLogsLogIdRoute, getSitesSiteIdLogsLogIdRouteHandler)
  .openapi(deleteSitesSiteIdLogsLogIdRoute, deleteSitesSiteIdLogsLogIdRouteHandler)
  .openapi(getSitesSiteIdVariablesRoute, getSitesSiteIdVariablesRouteHandler)
  .openapi(postSitesSiteIdVariablesRoute, postSitesSiteIdVariablesRouteHandler)
  .openapi(getSitesSiteIdVariablesVariableIdRoute, getSitesSiteIdVariablesVariableIdRouteHandler)
  .openapi(putSitesSiteIdVariablesVariableIdRoute, putSitesSiteIdVariablesVariableIdRouteHandler)
  .openapi(
    deleteSitesSiteIdVariablesVariableIdRoute,
    deleteSitesSiteIdVariablesVariableIdRouteHandler,
  )
  .openapi(getStorageBucketsRoute, getStorageBucketsRouteHandler)
  .openapi(postStorageBucketsRoute, postStorageBucketsRouteHandler)
  .openapi(getStorageBucketsBucketIdRoute, getStorageBucketsBucketIdRouteHandler)
  .openapi(putStorageBucketsBucketIdRoute, putStorageBucketsBucketIdRouteHandler)
  .openapi(deleteStorageBucketsBucketIdRoute, deleteStorageBucketsBucketIdRouteHandler)
  .openapi(getStorageBucketsBucketIdFilesRoute, getStorageBucketsBucketIdFilesRouteHandler)
  .openapi(postStorageBucketsBucketIdFilesRoute, postStorageBucketsBucketIdFilesRouteHandler)
  .openapi(
    getStorageBucketsBucketIdFilesFileIdRoute,
    getStorageBucketsBucketIdFilesFileIdRouteHandler,
  )
  .openapi(
    putStorageBucketsBucketIdFilesFileIdRoute,
    putStorageBucketsBucketIdFilesFileIdRouteHandler,
  )
  .openapi(
    deleteStorageBucketsBucketIdFilesFileIdRoute,
    deleteStorageBucketsBucketIdFilesFileIdRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketIdFilesFileIdDownloadRoute,
    getStorageBucketsBucketIdFilesFileIdDownloadRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketIdFilesFileIdPreviewRoute,
    getStorageBucketsBucketIdFilesFileIdPreviewRouteHandler,
  )
  .openapi(
    getStorageBucketsBucketIdFilesFileIdViewRoute,
    getStorageBucketsBucketIdFilesFileIdViewRouteHandler,
  )
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(postTeamsRoute, postTeamsRouteHandler)
  .openapi(getTeamsTeamIdRoute, getTeamsTeamIdRouteHandler)
  .openapi(putTeamsTeamIdRoute, putTeamsTeamIdRouteHandler)
  .openapi(deleteTeamsTeamIdRoute, deleteTeamsTeamIdRouteHandler)
  .openapi(getTeamsTeamIdMembershipsRoute, getTeamsTeamIdMembershipsRouteHandler)
  .openapi(postTeamsTeamIdMembershipsRoute, postTeamsTeamIdMembershipsRouteHandler)
  .openapi(
    getTeamsTeamIdMembershipsMembershipIdRoute,
    getTeamsTeamIdMembershipsMembershipIdRouteHandler,
  )
  .openapi(
    patchTeamsTeamIdMembershipsMembershipIdRoute,
    patchTeamsTeamIdMembershipsMembershipIdRouteHandler,
  )
  .openapi(
    deleteTeamsTeamIdMembershipsMembershipIdRoute,
    deleteTeamsTeamIdMembershipsMembershipIdRouteHandler,
  )
  .openapi(
    patchTeamsTeamIdMembershipsMembershipIdStatusRoute,
    patchTeamsTeamIdMembershipsMembershipIdStatusRouteHandler,
  )
  .openapi(getTeamsTeamIdPrefsRoute, getTeamsTeamIdPrefsRouteHandler)
  .openapi(putTeamsTeamIdPrefsRoute, putTeamsTeamIdPrefsRouteHandler)
  .openapi(
    getTokensBucketsBucketIdFilesFileIdRoute,
    getTokensBucketsBucketIdFilesFileIdRouteHandler,
  )
  .openapi(
    postTokensBucketsBucketIdFilesFileIdRoute,
    postTokensBucketsBucketIdFilesFileIdRouteHandler,
  )
  .openapi(getTokensTokenIdRoute, getTokensTokenIdRouteHandler)
  .openapi(patchTokensTokenIdRoute, patchTokensTokenIdRouteHandler)
  .openapi(deleteTokensTokenIdRoute, deleteTokensTokenIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(postUsersArgon2Route, postUsersArgon2RouteHandler)
  .openapi(postUsersBcryptRoute, postUsersBcryptRouteHandler)
  .openapi(getUsersIdentitiesRoute, getUsersIdentitiesRouteHandler)
  .openapi(deleteUsersIdentitiesIdentityIdRoute, deleteUsersIdentitiesIdentityIdRouteHandler)
  .openapi(postUsersMd5Route, postUsersMd5RouteHandler)
  .openapi(postUsersPhpassRoute, postUsersPhpassRouteHandler)
  .openapi(postUsersScryptRoute, postUsersScryptRouteHandler)
  .openapi(postUsersScryptModifiedRoute, postUsersScryptModifiedRouteHandler)
  .openapi(postUsersShaRoute, postUsersShaRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdEmailRoute, patchUsersUserIdEmailRouteHandler)
  .openapi(postUsersUserIdJwtsRoute, postUsersUserIdJwtsRouteHandler)
  .openapi(putUsersUserIdLabelsRoute, putUsersUserIdLabelsRouteHandler)
  .openapi(getUsersUserIdLogsRoute, getUsersUserIdLogsRouteHandler)
  .openapi(getUsersUserIdMembershipsRoute, getUsersUserIdMembershipsRouteHandler)
  .openapi(patchUsersUserIdMfaRoute, patchUsersUserIdMfaRouteHandler)
  .openapi(
    deleteUsersUserIdMfaAuthenticatorsTypeRoute,
    deleteUsersUserIdMfaAuthenticatorsTypeRouteHandler,
  )
  .openapi(getUsersUserIdMfaFactorsRoute, getUsersUserIdMfaFactorsRouteHandler)
  .openapi(getUsersUserIdMfaRecoveryCodesRoute, getUsersUserIdMfaRecoveryCodesRouteHandler)
  .openapi(putUsersUserIdMfaRecoveryCodesRoute, putUsersUserIdMfaRecoveryCodesRouteHandler)
  .openapi(patchUsersUserIdMfaRecoveryCodesRoute, patchUsersUserIdMfaRecoveryCodesRouteHandler)
  .openapi(patchUsersUserIdNameRoute, patchUsersUserIdNameRouteHandler)
  .openapi(patchUsersUserIdPasswordRoute, patchUsersUserIdPasswordRouteHandler)
  .openapi(patchUsersUserIdPhoneRoute, patchUsersUserIdPhoneRouteHandler)
  .openapi(getUsersUserIdPrefsRoute, getUsersUserIdPrefsRouteHandler)
  .openapi(patchUsersUserIdPrefsRoute, patchUsersUserIdPrefsRouteHandler)
  .openapi(getUsersUserIdSessionsRoute, getUsersUserIdSessionsRouteHandler)
  .openapi(postUsersUserIdSessionsRoute, postUsersUserIdSessionsRouteHandler)
  .openapi(deleteUsersUserIdSessionsRoute, deleteUsersUserIdSessionsRouteHandler)
  .openapi(deleteUsersUserIdSessionsSessionIdRoute, deleteUsersUserIdSessionsSessionIdRouteHandler)
  .openapi(patchUsersUserIdStatusRoute, patchUsersUserIdStatusRouteHandler)
  .openapi(getUsersUserIdTargetsRoute, getUsersUserIdTargetsRouteHandler)
  .openapi(postUsersUserIdTargetsRoute, postUsersUserIdTargetsRouteHandler)
  .openapi(getUsersUserIdTargetsTargetIdRoute, getUsersUserIdTargetsTargetIdRouteHandler)
  .openapi(patchUsersUserIdTargetsTargetIdRoute, patchUsersUserIdTargetsTargetIdRouteHandler)
  .openapi(deleteUsersUserIdTargetsTargetIdRoute, deleteUsersUserIdTargetsTargetIdRouteHandler)
  .openapi(postUsersUserIdTokensRoute, postUsersUserIdTokensRouteHandler)
  .openapi(patchUsersUserIdVerificationRoute, patchUsersUserIdVerificationRouteHandler)
  .openapi(patchUsersUserIdVerificationPhoneRoute, patchUsersUserIdVerificationPhoneRouteHandler)

export default app
