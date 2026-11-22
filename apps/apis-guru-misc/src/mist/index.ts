import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  apiTokenHandler,
  constantsHandler,
  installerHandler,
  loginHandler,
  loginWithOAuth2Handler,
  mobileHandler,
  mspsAdminsHandler,
  mspsHandler,
  mspsInventoryHandler,
  mspsInvitesHandler,
  mspsLicensesHandler,
  mspsLogoHandler,
  mspsLogsHandler,
  mspsOrgGroupsHandler,
  mspsOrgsHandler,
  mspsSearchHandler,
  mspsSLEsHandler,
  mspsSSOHandler,
  mspsSSORolesHandler,
  mspsStatsHandler,
  mspsTicketsHandler,
  orgs128THandler,
  orgsAdminsHandler,
  orgsAlarmsHandler,
  orgsAlarmTemplatesHandler,
  orgsAPITokensHandler,
  orgsAPTemplatesHandler,
  orgsAssetFiltersHandler,
  orgsAssetsHandler,
  orgsCallsHandler,
  orgsCertHandler,
  orgsClaimHandler,
  orgsClientsHandler,
  orgsCRLHandler,
  orgsDeviceProfilesHandler,
  orgsDevicesEVPNHandler,
  orgsDevicesHandler,
  orgsDevicesOthersHandler,
  orgsDevicesSSRHandler,
  orgsDevicesUtilitiesHandler,
  orgsDevicesZscalerHandler,
  orgsGatewayTemplatesHandler,
  orgsGuestsHandler,
  orgsHandler,
  orgsInventoryHandler,
  orgsInvitesHandler,
  orgsJSIHandler,
  orgsLicensesHandler,
  orgsLogsHandler,
  orgsMapsHandler,
  orgsMarvisHandler,
  orgsMxClustersHandler,
  orgsMxEdgesHandler,
  orgsMxTunnelsHandler,
  orgsNACHandler,
  orgsNetworksHandler,
  orgsNetworkTemplatesHandler,
  orgsOAuthHandler,
  orgsPremiumAnalyticsHandler,
  orgsPskPortalsHandler,
  orgsPsksHandler,
  orgsRFTemplatesHandler,
  orgsSDKClientsHandler,
  orgsSDKInvitesHandler,
  orgsSDKTemplatesHandler,
  orgsSecPoliciesHandler,
  orgsServicePoliciesHandler,
  orgsServicesHandler,
  orgsSettingHandler,
  orgsSitegroupsHandler,
  orgsSitesHandler,
  orgsSiteTemplatesHandler,
  orgsSLEsHandler,
  orgsSSOHandler,
  orgsSSORolesHandler,
  orgsStatsHandler,
  orgsStatsTunnelsHandler,
  orgsSubscriptionsHandler,
  orgsTemplatesHandler,
  orgsTicketsHandler,
  orgsVPNsHandler,
  orgsWebhooksHandler,
  orgsWlansHandler,
  orgsWxRulesHandler,
  orgsWxTagsHandler,
  orgsWxTunnelsHandler,
  selfHandler,
  sitesAlarmsHandler,
  sitesAnomalyHandler,
  sitesApplicationsHandler,
  sitesAssetFiltersHandler,
  sitesAssetsHandler,
  sitesBeaconsHandler,
  sitesCallsHandler,
  sitesClientsHandler,
  sitesDevicesAPsHandler,
  sitesDevicesHandler,
  sitesDevicesOthersHandler,
  sitesDevicesStatsHandler,
  sitesDevicesSwitchesEVPNHandler,
  sitesDevicesSwitchesHandler,
  sitesDevicesSwitchesVirtualChassisHandler,
  sitesDevicesUtilitiesHandler,
  sitesDevicesWANEdgesHAHandler,
  sitesDevicesWANEdgesHandler,
  sitesEventsHandler,
  sitesGuestsHandler,
  sitesHandler,
  sitesInsightsHandler,
  sitesLicensesHandler,
  sitesLocationHandler,
  sitesMapsHandler,
  sitesMxEdgesHandler,
  sitesMxTunnelsHandler,
  sitesPcapsHandler,
  sitesPsksHandler,
  sitesRfdiagsHandler,
  sitesRoguesHandler,
  sitesRRMHandler,
  sitesRssizonesHandler,
  sitesSettingHandler,
  sitesSkyatpHandler,
  sitesSLEsHandler,
  sitesStatsHandler,
  sitesSubscriptionsHandler,
  sitesSyntheticTestsHandler,
  sitesUISettingsHandler,
  sitesVBeaconsHandler,
  sitesWebhooksHandler,
  sitesWiredClientsHandler,
  sitesWlansHandler,
  sitesWxRulesHandler,
  sitesWxTagsHandler,
  sitesWxTunnelsHandler,
  sitesZonesHandler,
  webhookSamplesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', constantsHandler)
  .route('/', installerHandler)
  .route('/', adminHandler)
  .route('/', loginHandler)
  .route('/', loginWithOAuth2Handler)
  .route('/', mobileHandler)
  .route('/', mspsHandler)
  .route('/', mspsAdminsHandler)
  .route('/', mspsLicensesHandler)
  .route('/', mspsSLEsHandler)
  .route('/', mspsInventoryHandler)
  .route('/', mspsInvitesHandler)
  .route('/', mspsLogoHandler)
  .route('/', mspsLogsHandler)
  .route('/', mspsOrgGroupsHandler)
  .route('/', mspsOrgsHandler)
  .route('/', mspsSearchHandler)
  .route('/', mspsSSORolesHandler)
  .route('/', mspsSSOHandler)
  .route('/', mspsStatsHandler)
  .route('/', mspsTicketsHandler)
  .route('/', orgsHandler)
  .route('/', orgs128THandler)
  .route('/', orgsAdminsHandler)
  .route('/', orgsAlarmsHandler)
  .route('/', orgsAlarmTemplatesHandler)
  .route('/', orgsAPITokensHandler)
  .route('/', orgsAPTemplatesHandler)
  .route('/', orgsAssetFiltersHandler)
  .route('/', orgsAssetsHandler)
  .route('/', orgsCallsHandler)
  .route('/', orgsCertHandler)
  .route('/', orgsClaimHandler)
  .route('/', orgsClientsHandler)
  .route('/', orgsCRLHandler)
  .route('/', orgsDeviceProfilesHandler)
  .route('/', orgsDevicesHandler)
  .route('/', orgsDevicesEVPNHandler)
  .route('/', orgsGatewayTemplatesHandler)
  .route('/', orgsGuestsHandler)
  .route('/', orgsSLEsHandler)
  .route('/', orgsInventoryHandler)
  .route('/', orgsInvitesHandler)
  .route('/', orgsJSIHandler)
  .route('/', orgsLicensesHandler)
  .route('/', orgsLogsHandler)
  .route('/', orgsMapsHandler)
  .route('/', orgsMxClustersHandler)
  .route('/', orgsMxEdgesHandler)
  .route('/', orgsMxTunnelsHandler)
  .route('/', orgsNACHandler)
  .route('/', orgsNetworksHandler)
  .route('/', orgsNetworkTemplatesHandler)
  .route('/', orgsDevicesOthersHandler)
  .route('/', orgsPremiumAnalyticsHandler)
  .route('/', orgsPskPortalsHandler)
  .route('/', orgsPsksHandler)
  .route('/', orgsRFTemplatesHandler)
  .route('/', orgsSDKClientsHandler)
  .route('/', orgsSDKInvitesHandler)
  .route('/', orgsSDKTemplatesHandler)
  .route('/', orgsSecPoliciesHandler)
  .route('/', orgsServicePoliciesHandler)
  .route('/', orgsServicesHandler)
  .route('/', orgsSettingHandler)
  .route('/', orgsDevicesZscalerHandler)
  .route('/', orgsOAuthHandler)
  .route('/', orgsSitegroupsHandler)
  .route('/', orgsSitesHandler)
  .route('/', orgsSiteTemplatesHandler)
  .route('/', orgsSSORolesHandler)
  .route('/', orgsSSOHandler)
  .route('/', orgsDevicesSSRHandler)
  .route('/', orgsStatsHandler)
  .route('/', orgsDevicesUtilitiesHandler)
  .route('/', sitesDevicesStatsHandler)
  .route('/', orgsStatsTunnelsHandler)
  .route('/', orgsVPNsHandler)
  .route('/', orgsSubscriptionsHandler)
  .route('/', orgsTemplatesHandler)
  .route('/', orgsTicketsHandler)
  .route('/', orgsMarvisHandler)
  .route('/', orgsWebhooksHandler)
  .route('/', orgsWlansHandler)
  .route('/', orgsWxRulesHandler)
  .route('/', orgsWxTagsHandler)
  .route('/', orgsWxTunnelsHandler)
  .route('/', selfHandler)
  .route('/', apiTokenHandler)
  .route('/', sitesHandler)
  .route('/', sitesAlarmsHandler)
  .route('/', sitesAnomalyHandler)
  .route('/', sitesApplicationsHandler)
  .route('/', sitesAssetFiltersHandler)
  .route('/', sitesAssetsHandler)
  .route('/', sitesBeaconsHandler)
  .route('/', sitesCallsHandler)
  .route('/', sitesClientsHandler)
  .route('/', sitesDevicesHandler)
  .route('/', sitesDevicesAPsHandler)
  .route('/', sitesDevicesUtilitiesHandler)
  .route('/', sitesDevicesSwitchesHandler)
  .route('/', sitesSyntheticTestsHandler)
  .route('/', sitesDevicesWANEdgesHandler)
  .route('/', sitesDevicesWANEdgesHAHandler)
  .route('/', sitesDevicesSwitchesVirtualChassisHandler)
  .route('/', sitesEventsHandler)
  .route('/', sitesDevicesSwitchesEVPNHandler)
  .route('/', sitesGuestsHandler)
  .route('/', sitesInsightsHandler)
  .route('/', sitesLicensesHandler)
  .route('/', sitesLocationHandler)
  .route('/', sitesMapsHandler)
  .route('/', sitesMxEdgesHandler)
  .route('/', sitesMxTunnelsHandler)
  .route('/', sitesDevicesOthersHandler)
  .route('/', sitesPcapsHandler)
  .route('/', sitesPsksHandler)
  .route('/', sitesRfdiagsHandler)
  .route('/', sitesRoguesHandler)
  .route('/', sitesRRMHandler)
  .route('/', sitesRssizonesHandler)
  .route('/', sitesSettingHandler)
  .route('/', sitesSkyatpHandler)
  .route('/', sitesSLEsHandler)
  .route('/', sitesStatsHandler)
  .route('/', sitesSubscriptionsHandler)
  .route('/', sitesUISettingsHandler)
  .route('/', sitesVBeaconsHandler)
  .route('/', sitesWebhooksHandler)
  .route('/', sitesWiredClientsHandler)
  .route('/', sitesWlansHandler)
  .route('/', sitesWxRulesHandler)
  .route('/', sitesWxTagsHandler)
  .route('/', sitesWxTunnelsHandler)
  .route('/', sitesZonesHandler)
  .route('/', webhookSamplesHandler)

export default app
