import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdIntegrationsSlugRoute,
  deleteApiV4ProjectsIdIntegrationsSlugRoute,
  deleteApiV4ProjectsIdServicesSlugRoute,
  getApiV4GroupsIdIntegrationsRoute,
  getApiV4GroupsIdIntegrationsSlugRoute,
  getApiV4ProjectsIdIntegrationsRoute,
  getApiV4ProjectsIdIntegrationsSlugRoute,
  getApiV4ProjectsIdServicesRoute,
  getApiV4ProjectsIdServicesSlugRoute,
  postApiV4IntegrationsSlackEventsRoute,
  postApiV4IntegrationsSlackInteractionsRoute,
  postApiV4IntegrationsSlackOptionsRoute,
  postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTriggerRoute,
  postApiV4ProjectsIdServicesMattermostSlashCommandsTriggerRoute,
  postApiV4SlackTriggerRoute,
  putApiV4GroupsIdIntegrationsAppleAppStoreRoute,
  putApiV4GroupsIdIntegrationsAsanaRoute,
  putApiV4GroupsIdIntegrationsAssemblaRoute,
  putApiV4GroupsIdIntegrationsBambooRoute,
  putApiV4GroupsIdIntegrationsBugzillaRoute,
  putApiV4GroupsIdIntegrationsBuildkiteRoute,
  putApiV4GroupsIdIntegrationsCampfireRoute,
  putApiV4GroupsIdIntegrationsClickupRoute,
  putApiV4GroupsIdIntegrationsConfluenceRoute,
  putApiV4GroupsIdIntegrationsCustomIssueTrackerRoute,
  putApiV4GroupsIdIntegrationsDatadogRoute,
  putApiV4GroupsIdIntegrationsDiffblueCoverRoute,
  putApiV4GroupsIdIntegrationsDiscordRoute,
  putApiV4GroupsIdIntegrationsDroneCiRoute,
  putApiV4GroupsIdIntegrationsEmailsOnPushRoute,
  putApiV4GroupsIdIntegrationsEwmRoute,
  putApiV4GroupsIdIntegrationsExternalWikiRoute,
  putApiV4GroupsIdIntegrationsGitGuardianRoute,
  putApiV4GroupsIdIntegrationsGithubRoute,
  putApiV4GroupsIdIntegrationsGitlabSlackApplicationRoute,
  putApiV4GroupsIdIntegrationsGoogleCloudPlatformArtifactRegistryRoute,
  putApiV4GroupsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederationRoute,
  putApiV4GroupsIdIntegrationsGooglePlayRoute,
  putApiV4GroupsIdIntegrationsHangoutsChatRoute,
  putApiV4GroupsIdIntegrationsHarborRoute,
  putApiV4GroupsIdIntegrationsIrkerRoute,
  putApiV4GroupsIdIntegrationsJenkinsRoute,
  putApiV4GroupsIdIntegrationsJiraCloudAppRoute,
  putApiV4GroupsIdIntegrationsJiraRoute,
  putApiV4GroupsIdIntegrationsLinearRoute,
  putApiV4GroupsIdIntegrationsMatrixRoute,
  putApiV4GroupsIdIntegrationsMattermostRoute,
  putApiV4GroupsIdIntegrationsMattermostSlashCommandsRoute,
  putApiV4GroupsIdIntegrationsMicrosoftTeamsRoute,
  putApiV4GroupsIdIntegrationsMockCiRoute,
  putApiV4GroupsIdIntegrationsMockMonitoringRoute,
  putApiV4GroupsIdIntegrationsPackagistRoute,
  putApiV4GroupsIdIntegrationsPhorgeRoute,
  putApiV4GroupsIdIntegrationsPipelinesEmailRoute,
  putApiV4GroupsIdIntegrationsPivotaltrackerRoute,
  putApiV4GroupsIdIntegrationsPumbleRoute,
  putApiV4GroupsIdIntegrationsPushoverRoute,
  putApiV4GroupsIdIntegrationsRedmineRoute,
  putApiV4GroupsIdIntegrationsSlackRoute,
  putApiV4GroupsIdIntegrationsSquashTmRoute,
  putApiV4GroupsIdIntegrationsTeamcityRoute,
  putApiV4GroupsIdIntegrationsTelegramRoute,
  putApiV4GroupsIdIntegrationsUnifyCircuitRoute,
  putApiV4GroupsIdIntegrationsWebexTeamsRoute,
  putApiV4GroupsIdIntegrationsYoutrackRoute,
  putApiV4GroupsIdIntegrationsZentaoRoute,
  putApiV4ProjectsIdIntegrationsAppleAppStoreRoute,
  putApiV4ProjectsIdIntegrationsAsanaRoute,
  putApiV4ProjectsIdIntegrationsAssemblaRoute,
  putApiV4ProjectsIdIntegrationsBambooRoute,
  putApiV4ProjectsIdIntegrationsBugzillaRoute,
  putApiV4ProjectsIdIntegrationsBuildkiteRoute,
  putApiV4ProjectsIdIntegrationsCampfireRoute,
  putApiV4ProjectsIdIntegrationsClickupRoute,
  putApiV4ProjectsIdIntegrationsConfluenceRoute,
  putApiV4ProjectsIdIntegrationsCustomIssueTrackerRoute,
  putApiV4ProjectsIdIntegrationsDatadogRoute,
  putApiV4ProjectsIdIntegrationsDiffblueCoverRoute,
  putApiV4ProjectsIdIntegrationsDiscordRoute,
  putApiV4ProjectsIdIntegrationsDroneCiRoute,
  putApiV4ProjectsIdIntegrationsEmailsOnPushRoute,
  putApiV4ProjectsIdIntegrationsEwmRoute,
  putApiV4ProjectsIdIntegrationsExternalWikiRoute,
  putApiV4ProjectsIdIntegrationsGitGuardianRoute,
  putApiV4ProjectsIdIntegrationsGithubRoute,
  putApiV4ProjectsIdIntegrationsGitlabSlackApplicationRoute,
  putApiV4ProjectsIdIntegrationsGoogleCloudPlatformArtifactRegistryRoute,
  putApiV4ProjectsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederationRoute,
  putApiV4ProjectsIdIntegrationsGooglePlayRoute,
  putApiV4ProjectsIdIntegrationsHangoutsChatRoute,
  putApiV4ProjectsIdIntegrationsHarborRoute,
  putApiV4ProjectsIdIntegrationsIrkerRoute,
  putApiV4ProjectsIdIntegrationsJenkinsRoute,
  putApiV4ProjectsIdIntegrationsJiraCloudAppRoute,
  putApiV4ProjectsIdIntegrationsJiraRoute,
  putApiV4ProjectsIdIntegrationsLinearRoute,
  putApiV4ProjectsIdIntegrationsMatrixRoute,
  putApiV4ProjectsIdIntegrationsMattermostRoute,
  putApiV4ProjectsIdIntegrationsMattermostSlashCommandsRoute,
  putApiV4ProjectsIdIntegrationsMicrosoftTeamsRoute,
  putApiV4ProjectsIdIntegrationsMockCiRoute,
  putApiV4ProjectsIdIntegrationsMockMonitoringRoute,
  putApiV4ProjectsIdIntegrationsPackagistRoute,
  putApiV4ProjectsIdIntegrationsPhorgeRoute,
  putApiV4ProjectsIdIntegrationsPipelinesEmailRoute,
  putApiV4ProjectsIdIntegrationsPivotaltrackerRoute,
  putApiV4ProjectsIdIntegrationsPumbleRoute,
  putApiV4ProjectsIdIntegrationsPushoverRoute,
  putApiV4ProjectsIdIntegrationsRedmineRoute,
  putApiV4ProjectsIdIntegrationsSlackRoute,
  putApiV4ProjectsIdIntegrationsSquashTmRoute,
  putApiV4ProjectsIdIntegrationsTeamcityRoute,
  putApiV4ProjectsIdIntegrationsTelegramRoute,
  putApiV4ProjectsIdIntegrationsUnifyCircuitRoute,
  putApiV4ProjectsIdIntegrationsWebexTeamsRoute,
  putApiV4ProjectsIdIntegrationsYoutrackRoute,
  putApiV4ProjectsIdIntegrationsZentaoRoute,
  putApiV4ProjectsIdServicesAppleAppStoreRoute,
  putApiV4ProjectsIdServicesAsanaRoute,
  putApiV4ProjectsIdServicesAssemblaRoute,
  putApiV4ProjectsIdServicesBambooRoute,
  putApiV4ProjectsIdServicesBugzillaRoute,
  putApiV4ProjectsIdServicesBuildkiteRoute,
  putApiV4ProjectsIdServicesCampfireRoute,
  putApiV4ProjectsIdServicesClickupRoute,
  putApiV4ProjectsIdServicesConfluenceRoute,
  putApiV4ProjectsIdServicesCustomIssueTrackerRoute,
  putApiV4ProjectsIdServicesDatadogRoute,
  putApiV4ProjectsIdServicesDiffblueCoverRoute,
  putApiV4ProjectsIdServicesDiscordRoute,
  putApiV4ProjectsIdServicesDroneCiRoute,
  putApiV4ProjectsIdServicesEmailsOnPushRoute,
  putApiV4ProjectsIdServicesEwmRoute,
  putApiV4ProjectsIdServicesExternalWikiRoute,
  putApiV4ProjectsIdServicesGitGuardianRoute,
  putApiV4ProjectsIdServicesGithubRoute,
  putApiV4ProjectsIdServicesGitlabSlackApplicationRoute,
  putApiV4ProjectsIdServicesGoogleCloudPlatformArtifactRegistryRoute,
  putApiV4ProjectsIdServicesGoogleCloudPlatformWorkloadIdentityFederationRoute,
  putApiV4ProjectsIdServicesGooglePlayRoute,
  putApiV4ProjectsIdServicesHangoutsChatRoute,
  putApiV4ProjectsIdServicesHarborRoute,
  putApiV4ProjectsIdServicesIrkerRoute,
  putApiV4ProjectsIdServicesJenkinsRoute,
  putApiV4ProjectsIdServicesJiraCloudAppRoute,
  putApiV4ProjectsIdServicesJiraRoute,
  putApiV4ProjectsIdServicesLinearRoute,
  putApiV4ProjectsIdServicesMatrixRoute,
  putApiV4ProjectsIdServicesMattermostRoute,
  putApiV4ProjectsIdServicesMattermostSlashCommandsRoute,
  putApiV4ProjectsIdServicesMicrosoftTeamsRoute,
  putApiV4ProjectsIdServicesMockCiRoute,
  putApiV4ProjectsIdServicesMockMonitoringRoute,
  putApiV4ProjectsIdServicesPackagistRoute,
  putApiV4ProjectsIdServicesPhorgeRoute,
  putApiV4ProjectsIdServicesPipelinesEmailRoute,
  putApiV4ProjectsIdServicesPivotaltrackerRoute,
  putApiV4ProjectsIdServicesPumbleRoute,
  putApiV4ProjectsIdServicesPushoverRoute,
  putApiV4ProjectsIdServicesRedmineRoute,
  putApiV4ProjectsIdServicesSlackRoute,
  putApiV4ProjectsIdServicesSquashTmRoute,
  putApiV4ProjectsIdServicesTeamcityRoute,
  putApiV4ProjectsIdServicesTelegramRoute,
  putApiV4ProjectsIdServicesUnifyCircuitRoute,
  putApiV4ProjectsIdServicesWebexTeamsRoute,
  putApiV4ProjectsIdServicesYoutrackRoute,
  putApiV4ProjectsIdServicesZentaoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(postApiV4IntegrationsSlackOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4IntegrationsSlackInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4IntegrationsSlackEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesAppleAppStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesAsanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesAssemblaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesBambooRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesBugzillaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesBuildkiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesCampfireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesConfluenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesCustomIssueTrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesDatadogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesDiffblueCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesDroneCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesEmailsOnPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesExternalWikiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGitlabSlackApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGooglePlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesHangoutsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesHarborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesIrkerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesJenkinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesJiraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesJiraCloudAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesLinearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMattermostSlashCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPackagistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPhorgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPipelinesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPivotaltrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPumbleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesRedmineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesEwmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesYoutrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesClickupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesTeamcityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesUnifyCircuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesWebexTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesZentaoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesSquashTmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGitGuardianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGoogleCloudPlatformArtifactRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesGoogleCloudPlatformWorkloadIdentityFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMockCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdServicesMockMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdServicesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdServicesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdServicesMattermostSlashCommandsTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsAppleAppStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsAsanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsAssemblaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsBambooRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsBugzillaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsBuildkiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsCampfireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsConfluenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsCustomIssueTrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsDatadogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsDiffblueCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsDroneCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsEmailsOnPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsExternalWikiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsGitlabSlackApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsGooglePlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsHangoutsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsHarborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsIrkerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsJenkinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsJiraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsJiraCloudAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsLinearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsMattermostSlashCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPackagistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPhorgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPipelinesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPivotaltrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPumbleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsRedmineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsEwmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsYoutrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsClickupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsTeamcityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsUnifyCircuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsWebexTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsZentaoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsSquashTmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsGitGuardianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsGoogleCloudPlatformArtifactRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV4ProjectsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiV4ProjectsIdIntegrationsMockCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdIntegrationsMockMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsAppleAppStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsAsanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsAssemblaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsBambooRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsBugzillaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsBuildkiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsCampfireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsConfluenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsCustomIssueTrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsDatadogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsDiffblueCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsDroneCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsEmailsOnPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsExternalWikiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGitlabSlackApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGooglePlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsHangoutsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsHarborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsIrkerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsJenkinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsJiraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsJiraCloudAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsLinearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMattermostSlashCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPackagistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPhorgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPipelinesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPivotaltrackerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPumbleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsRedmineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsEwmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsYoutrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsClickupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMicrosoftTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMattermostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsTeamcityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsUnifyCircuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsWebexTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsZentaoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsSquashTmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGitGuardianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGoogleCloudPlatformArtifactRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsGoogleCloudPlatformWorkloadIdentityFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMockCiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdIntegrationsMockMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdIntegrationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SlackTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
