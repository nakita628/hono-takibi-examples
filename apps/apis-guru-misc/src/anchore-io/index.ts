import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountnameRoute,
  deleteAccountsAccountnameUsersUsernameCredentialsRoute,
  deleteAccountsAccountnameUsersUsernameRoute,
  deleteArchivesImagesImageDigestRoute,
  deleteArchivesRulesRuleIdRoute,
  deleteEventsEventIdRoute,
  deleteEventsRoute,
  deleteImagesByIdImageIdRoute,
  deleteImagesImageDigestRoute,
  deleteImagesRoute,
  deleteImportsImagesOperationIdRoute,
  deletePoliciesPolicyIdRoute,
  deleteRegistriesRegistryRoute,
  deleteSubscriptionsSubscriptionIdRoute,
  deleteSystemFeedsFeedGroupRoute,
  deleteSystemFeedsFeedRoute,
  deleteSystemServicesServicenameHostidRoute,
  getAccountRoute,
  getAccountsAccountnameRoute,
  getAccountsAccountnameUsersRoute,
  getAccountsAccountnameUsersUsernameCredentialsRoute,
  getAccountsAccountnameUsersUsernameRoute,
  getAccountsRoute,
  getArchivesImagesImageDigestRoute,
  getArchivesImagesRoute,
  getArchivesRoute,
  getArchivesRulesRoute,
  getArchivesRulesRuleIdRoute,
  getEventsEventIdRoute,
  getEventsRoute,
  getEventTypesRoute,
  getHealthRoute,
  getImagesByIdImageIdCheckRoute,
  getImagesByIdImageIdContentCtypeRoute,
  getImagesByIdImageIdContentFilesRoute,
  getImagesByIdImageIdContentJavaRoute,
  getImagesByIdImageIdContentRoute,
  getImagesByIdImageIdRoute,
  getImagesByIdImageIdVulnRoute,
  getImagesByIdImageIdVulnVtypeRoute,
  getImagesImageDigestArtifactsFileContentSearchRoute,
  getImagesImageDigestArtifactsRetrievedFilesRoute,
  getImagesImageDigestArtifactsSecretSearchRoute,
  getImagesImageDigestCheckRoute,
  getImagesImageDigestContentCtypeRoute,
  getImagesImageDigestContentFilesRoute,
  getImagesImageDigestContentJavaRoute,
  getImagesImageDigestContentMalwareRoute,
  getImagesImageDigestContentRoute,
  getImagesImageDigestMetadataMtypeRoute,
  getImagesImageDigestMetadataRoute,
  getImagesImageDigestRoute,
  getImagesImageDigestSbomsNativeRoute,
  getImagesImageDigestVulnRoute,
  getImagesImageDigestVulnVtypeRoute,
  getImagesRoute,
  getImportsImagesOperationIdDockerfileRoute,
  getImportsImagesOperationIdImageConfigRoute,
  getImportsImagesOperationIdManifestRoute,
  getImportsImagesOperationIdPackagesRoute,
  getImportsImagesOperationIdParentManifestRoute,
  getImportsImagesOperationIdRoute,
  getImportsImagesRoute,
  getPoliciesPolicyIdRoute,
  getPoliciesRoute,
  getQueryImagesByPackageRoute,
  getQueryImagesByVulnerabilityRoute,
  getQueryVulnerabilitiesRoute,
  getRegistriesRegistryRoute,
  getRegistriesRoute,
  getRoute,
  getStatusRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSummariesImagetagsRoute,
  getSystemErrorCodesRoute,
  getSystemFeedsRoute,
  getSystemPolicySpecRoute,
  getSystemRoute,
  getSystemServicesRoute,
  getSystemServicesServicenameHostidRoute,
  getSystemServicesServicenameRoute,
  getUserCredentialsRoute,
  getUserRoute,
  getVersionRoute,
  postAccountsAccountnameUsersRoute,
  postAccountsAccountnameUsersUsernameCredentialsRoute,
  postAccountsRoute,
  postArchivesImagesRoute,
  postArchivesRulesRoute,
  postImagesRoute,
  postImportImagesRoute,
  postImportsImagesOperationIdDockerfileRoute,
  postImportsImagesOperationIdImageConfigRoute,
  postImportsImagesOperationIdManifestRoute,
  postImportsImagesOperationIdPackagesRoute,
  postImportsImagesOperationIdParentManifestRoute,
  postImportsImagesRoute,
  postOauthTokenRoute,
  postPoliciesRoute,
  postRegistriesRoute,
  postRepositoriesRoute,
  postSubscriptionsRoute,
  postSystemFeedsRoute,
  postSystemWebhooksWebhookTypeTestRoute,
  postUserCredentialsRoute,
  putAccountsAccountnameStateRoute,
  putPoliciesPolicyIdRoute,
  putRegistriesRegistryRoute,
  putSubscriptionsSubscriptionIdRoute,
  putSystemFeedsFeedGroupRoute,
  putSystemFeedsFeedRoute,
} from './routes'
import {
  deleteAccountsAccountnameRouteHandler,
  deleteAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  deleteAccountsAccountnameUsersUsernameRouteHandler,
  deleteArchivesImagesImageDigestRouteHandler,
  deleteArchivesRulesRuleIdRouteHandler,
  deleteEventsEventIdRouteHandler,
  deleteEventsRouteHandler,
  deleteImagesByIdImageIdRouteHandler,
  deleteImagesImageDigestRouteHandler,
  deleteImagesRouteHandler,
  deleteImportsImagesOperationIdRouteHandler,
  deletePoliciesPolicyIdRouteHandler,
  deleteRegistriesRegistryRouteHandler,
  deleteSubscriptionsSubscriptionIdRouteHandler,
  deleteSystemFeedsFeedGroupRouteHandler,
  deleteSystemFeedsFeedRouteHandler,
  deleteSystemServicesServicenameHostidRouteHandler,
  getAccountRouteHandler,
  getAccountsAccountnameRouteHandler,
  getAccountsAccountnameUsersRouteHandler,
  getAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  getAccountsAccountnameUsersUsernameRouteHandler,
  getAccountsRouteHandler,
  getArchivesImagesImageDigestRouteHandler,
  getArchivesImagesRouteHandler,
  getArchivesRouteHandler,
  getArchivesRulesRouteHandler,
  getArchivesRulesRuleIdRouteHandler,
  getEventsEventIdRouteHandler,
  getEventsRouteHandler,
  getEventTypesRouteHandler,
  getHealthRouteHandler,
  getImagesByIdImageIdCheckRouteHandler,
  getImagesByIdImageIdContentCtypeRouteHandler,
  getImagesByIdImageIdContentFilesRouteHandler,
  getImagesByIdImageIdContentJavaRouteHandler,
  getImagesByIdImageIdContentRouteHandler,
  getImagesByIdImageIdRouteHandler,
  getImagesByIdImageIdVulnRouteHandler,
  getImagesByIdImageIdVulnVtypeRouteHandler,
  getImagesImageDigestArtifactsFileContentSearchRouteHandler,
  getImagesImageDigestArtifactsRetrievedFilesRouteHandler,
  getImagesImageDigestArtifactsSecretSearchRouteHandler,
  getImagesImageDigestCheckRouteHandler,
  getImagesImageDigestContentCtypeRouteHandler,
  getImagesImageDigestContentFilesRouteHandler,
  getImagesImageDigestContentJavaRouteHandler,
  getImagesImageDigestContentMalwareRouteHandler,
  getImagesImageDigestContentRouteHandler,
  getImagesImageDigestMetadataMtypeRouteHandler,
  getImagesImageDigestMetadataRouteHandler,
  getImagesImageDigestRouteHandler,
  getImagesImageDigestSbomsNativeRouteHandler,
  getImagesImageDigestVulnRouteHandler,
  getImagesImageDigestVulnVtypeRouteHandler,
  getImagesRouteHandler,
  getImportsImagesOperationIdDockerfileRouteHandler,
  getImportsImagesOperationIdImageConfigRouteHandler,
  getImportsImagesOperationIdManifestRouteHandler,
  getImportsImagesOperationIdPackagesRouteHandler,
  getImportsImagesOperationIdParentManifestRouteHandler,
  getImportsImagesOperationIdRouteHandler,
  getImportsImagesRouteHandler,
  getPoliciesPolicyIdRouteHandler,
  getPoliciesRouteHandler,
  getQueryImagesByPackageRouteHandler,
  getQueryImagesByVulnerabilityRouteHandler,
  getQueryVulnerabilitiesRouteHandler,
  getRegistriesRegistryRouteHandler,
  getRegistriesRouteHandler,
  getRouteHandler,
  getStatusRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  getSummariesImagetagsRouteHandler,
  getSystemErrorCodesRouteHandler,
  getSystemFeedsRouteHandler,
  getSystemPolicySpecRouteHandler,
  getSystemRouteHandler,
  getSystemServicesRouteHandler,
  getSystemServicesServicenameHostidRouteHandler,
  getSystemServicesServicenameRouteHandler,
  getUserCredentialsRouteHandler,
  getUserRouteHandler,
  getVersionRouteHandler,
  postAccountsAccountnameUsersRouteHandler,
  postAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  postAccountsRouteHandler,
  postArchivesImagesRouteHandler,
  postArchivesRulesRouteHandler,
  postImagesRouteHandler,
  postImportImagesRouteHandler,
  postImportsImagesOperationIdDockerfileRouteHandler,
  postImportsImagesOperationIdImageConfigRouteHandler,
  postImportsImagesOperationIdManifestRouteHandler,
  postImportsImagesOperationIdPackagesRouteHandler,
  postImportsImagesOperationIdParentManifestRouteHandler,
  postImportsImagesRouteHandler,
  postOauthTokenRouteHandler,
  postPoliciesRouteHandler,
  postRegistriesRouteHandler,
  postRepositoriesRouteHandler,
  postSubscriptionsRouteHandler,
  postSystemFeedsRouteHandler,
  postSystemWebhooksWebhookTypeTestRouteHandler,
  postUserCredentialsRouteHandler,
  putAccountsAccountnameStateRouteHandler,
  putPoliciesPolicyIdRouteHandler,
  putRegistriesRegistryRouteHandler,
  putSubscriptionsSubscriptionIdRouteHandler,
  putSystemFeedsFeedGroupRouteHandler,
  putSystemFeedsFeedRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(deleteAccountsAccountnameRoute, deleteAccountsAccountnameRouteHandler)
  .openapi(getAccountsAccountnameRoute, getAccountsAccountnameRouteHandler)
  .openapi(putAccountsAccountnameStateRoute, putAccountsAccountnameStateRouteHandler)
  .openapi(getAccountsAccountnameUsersRoute, getAccountsAccountnameUsersRouteHandler)
  .openapi(postAccountsAccountnameUsersRoute, postAccountsAccountnameUsersRouteHandler)
  .openapi(
    deleteAccountsAccountnameUsersUsernameRoute,
    deleteAccountsAccountnameUsersUsernameRouteHandler,
  )
  .openapi(
    getAccountsAccountnameUsersUsernameRoute,
    getAccountsAccountnameUsersUsernameRouteHandler,
  )
  .openapi(
    deleteAccountsAccountnameUsersUsernameCredentialsRoute,
    deleteAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  )
  .openapi(
    getAccountsAccountnameUsersUsernameCredentialsRoute,
    getAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  )
  .openapi(
    postAccountsAccountnameUsersUsernameCredentialsRoute,
    postAccountsAccountnameUsersUsernameCredentialsRouteHandler,
  )
  .openapi(getArchivesRoute, getArchivesRouteHandler)
  .openapi(getArchivesImagesRoute, getArchivesImagesRouteHandler)
  .openapi(postArchivesImagesRoute, postArchivesImagesRouteHandler)
  .openapi(deleteArchivesImagesImageDigestRoute, deleteArchivesImagesImageDigestRouteHandler)
  .openapi(getArchivesImagesImageDigestRoute, getArchivesImagesImageDigestRouteHandler)
  .openapi(getArchivesRulesRoute, getArchivesRulesRouteHandler)
  .openapi(postArchivesRulesRoute, postArchivesRulesRouteHandler)
  .openapi(deleteArchivesRulesRuleIdRoute, deleteArchivesRulesRuleIdRouteHandler)
  .openapi(getArchivesRulesRuleIdRoute, getArchivesRulesRuleIdRouteHandler)
  .openapi(getEventTypesRoute, getEventTypesRouteHandler)
  .openapi(deleteEventsRoute, deleteEventsRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(deleteEventsEventIdRoute, deleteEventsEventIdRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(deleteImagesRoute, deleteImagesRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(postImagesRoute, postImagesRouteHandler)
  .openapi(deleteImagesByIdImageIdRoute, deleteImagesByIdImageIdRouteHandler)
  .openapi(getImagesByIdImageIdRoute, getImagesByIdImageIdRouteHandler)
  .openapi(getImagesByIdImageIdCheckRoute, getImagesByIdImageIdCheckRouteHandler)
  .openapi(getImagesByIdImageIdContentRoute, getImagesByIdImageIdContentRouteHandler)
  .openapi(getImagesByIdImageIdContentFilesRoute, getImagesByIdImageIdContentFilesRouteHandler)
  .openapi(getImagesByIdImageIdContentJavaRoute, getImagesByIdImageIdContentJavaRouteHandler)
  .openapi(getImagesByIdImageIdContentCtypeRoute, getImagesByIdImageIdContentCtypeRouteHandler)
  .openapi(getImagesByIdImageIdVulnRoute, getImagesByIdImageIdVulnRouteHandler)
  .openapi(getImagesByIdImageIdVulnVtypeRoute, getImagesByIdImageIdVulnVtypeRouteHandler)
  .openapi(deleteImagesImageDigestRoute, deleteImagesImageDigestRouteHandler)
  .openapi(getImagesImageDigestRoute, getImagesImageDigestRouteHandler)
  .openapi(
    getImagesImageDigestArtifactsFileContentSearchRoute,
    getImagesImageDigestArtifactsFileContentSearchRouteHandler,
  )
  .openapi(
    getImagesImageDigestArtifactsRetrievedFilesRoute,
    getImagesImageDigestArtifactsRetrievedFilesRouteHandler,
  )
  .openapi(
    getImagesImageDigestArtifactsSecretSearchRoute,
    getImagesImageDigestArtifactsSecretSearchRouteHandler,
  )
  .openapi(getImagesImageDigestCheckRoute, getImagesImageDigestCheckRouteHandler)
  .openapi(getImagesImageDigestContentRoute, getImagesImageDigestContentRouteHandler)
  .openapi(getImagesImageDigestContentFilesRoute, getImagesImageDigestContentFilesRouteHandler)
  .openapi(getImagesImageDigestContentJavaRoute, getImagesImageDigestContentJavaRouteHandler)
  .openapi(getImagesImageDigestContentMalwareRoute, getImagesImageDigestContentMalwareRouteHandler)
  .openapi(getImagesImageDigestContentCtypeRoute, getImagesImageDigestContentCtypeRouteHandler)
  .openapi(getImagesImageDigestMetadataRoute, getImagesImageDigestMetadataRouteHandler)
  .openapi(getImagesImageDigestMetadataMtypeRoute, getImagesImageDigestMetadataMtypeRouteHandler)
  .openapi(getImagesImageDigestSbomsNativeRoute, getImagesImageDigestSbomsNativeRouteHandler)
  .openapi(getImagesImageDigestVulnRoute, getImagesImageDigestVulnRouteHandler)
  .openapi(getImagesImageDigestVulnVtypeRoute, getImagesImageDigestVulnVtypeRouteHandler)
  .openapi(postImportImagesRoute, postImportImagesRouteHandler)
  .openapi(getImportsImagesRoute, getImportsImagesRouteHandler)
  .openapi(postImportsImagesRoute, postImportsImagesRouteHandler)
  .openapi(deleteImportsImagesOperationIdRoute, deleteImportsImagesOperationIdRouteHandler)
  .openapi(getImportsImagesOperationIdRoute, getImportsImagesOperationIdRouteHandler)
  .openapi(
    getImportsImagesOperationIdDockerfileRoute,
    getImportsImagesOperationIdDockerfileRouteHandler,
  )
  .openapi(
    postImportsImagesOperationIdDockerfileRoute,
    postImportsImagesOperationIdDockerfileRouteHandler,
  )
  .openapi(
    getImportsImagesOperationIdImageConfigRoute,
    getImportsImagesOperationIdImageConfigRouteHandler,
  )
  .openapi(
    postImportsImagesOperationIdImageConfigRoute,
    postImportsImagesOperationIdImageConfigRouteHandler,
  )
  .openapi(
    getImportsImagesOperationIdManifestRoute,
    getImportsImagesOperationIdManifestRouteHandler,
  )
  .openapi(
    postImportsImagesOperationIdManifestRoute,
    postImportsImagesOperationIdManifestRouteHandler,
  )
  .openapi(
    getImportsImagesOperationIdPackagesRoute,
    getImportsImagesOperationIdPackagesRouteHandler,
  )
  .openapi(
    postImportsImagesOperationIdPackagesRoute,
    postImportsImagesOperationIdPackagesRouteHandler,
  )
  .openapi(
    getImportsImagesOperationIdParentManifestRoute,
    getImportsImagesOperationIdParentManifestRouteHandler,
  )
  .openapi(
    postImportsImagesOperationIdParentManifestRoute,
    postImportsImagesOperationIdParentManifestRouteHandler,
  )
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(getPoliciesRoute, getPoliciesRouteHandler)
  .openapi(postPoliciesRoute, postPoliciesRouteHandler)
  .openapi(deletePoliciesPolicyIdRoute, deletePoliciesPolicyIdRouteHandler)
  .openapi(getPoliciesPolicyIdRoute, getPoliciesPolicyIdRouteHandler)
  .openapi(putPoliciesPolicyIdRoute, putPoliciesPolicyIdRouteHandler)
  .openapi(getQueryImagesByPackageRoute, getQueryImagesByPackageRouteHandler)
  .openapi(getQueryImagesByVulnerabilityRoute, getQueryImagesByVulnerabilityRouteHandler)
  .openapi(getQueryVulnerabilitiesRoute, getQueryVulnerabilitiesRouteHandler)
  .openapi(getRegistriesRoute, getRegistriesRouteHandler)
  .openapi(postRegistriesRoute, postRegistriesRouteHandler)
  .openapi(deleteRegistriesRegistryRoute, deleteRegistriesRegistryRouteHandler)
  .openapi(getRegistriesRegistryRoute, getRegistriesRegistryRouteHandler)
  .openapi(putRegistriesRegistryRoute, putRegistriesRegistryRouteHandler)
  .openapi(postRepositoriesRoute, postRepositoriesRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(deleteSubscriptionsSubscriptionIdRoute, deleteSubscriptionsSubscriptionIdRouteHandler)
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(putSubscriptionsSubscriptionIdRoute, putSubscriptionsSubscriptionIdRouteHandler)
  .openapi(getSummariesImagetagsRoute, getSummariesImagetagsRouteHandler)
  .openapi(getSystemRoute, getSystemRouteHandler)
  .openapi(getSystemErrorCodesRoute, getSystemErrorCodesRouteHandler)
  .openapi(getSystemFeedsRoute, getSystemFeedsRouteHandler)
  .openapi(postSystemFeedsRoute, postSystemFeedsRouteHandler)
  .openapi(deleteSystemFeedsFeedRoute, deleteSystemFeedsFeedRouteHandler)
  .openapi(putSystemFeedsFeedRoute, putSystemFeedsFeedRouteHandler)
  .openapi(deleteSystemFeedsFeedGroupRoute, deleteSystemFeedsFeedGroupRouteHandler)
  .openapi(putSystemFeedsFeedGroupRoute, putSystemFeedsFeedGroupRouteHandler)
  .openapi(getSystemPolicySpecRoute, getSystemPolicySpecRouteHandler)
  .openapi(getSystemServicesRoute, getSystemServicesRouteHandler)
  .openapi(getSystemServicesServicenameRoute, getSystemServicesServicenameRouteHandler)
  .openapi(
    deleteSystemServicesServicenameHostidRoute,
    deleteSystemServicesServicenameHostidRouteHandler,
  )
  .openapi(getSystemServicesServicenameHostidRoute, getSystemServicesServicenameHostidRouteHandler)
  .openapi(postSystemWebhooksWebhookTypeTestRoute, postSystemWebhooksWebhookTypeTestRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(getUserCredentialsRoute, getUserCredentialsRouteHandler)
  .openapi(postUserCredentialsRoute, postUserCredentialsRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
