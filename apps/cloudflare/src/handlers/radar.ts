import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRadarAgentReadinessSummaryDimensionRoute,
  getRadarAiBotsSummaryDimensionRoute,
  getRadarAiBotsSummaryUserAgentRoute,
  getRadarAiBotsTimeseriesGroupsDimensionRoute,
  getRadarAiBotsTimeseriesGroupsUserAgentRoute,
  getRadarAiBotsTimeseriesRoute,
  getRadarAiInferenceSummaryDimensionRoute,
  getRadarAiInferenceSummaryModelRoute,
  getRadarAiInferenceSummaryTaskRoute,
  getRadarAiInferenceTimeseriesGroupsDimensionRoute,
  getRadarAiInferenceTimeseriesGroupsModelRoute,
  getRadarAiInferenceTimeseriesGroupsTaskRoute,
  getRadarAiMarkdownForAgentsSummaryRoute,
  getRadarAiMarkdownForAgentsTimeseriesRoute,
  getRadarAnnotationsIdRoute,
  getRadarAnnotationsOutagesLocationsRoute,
  getRadarAnnotationsOutagesRoute,
  getRadarAnnotationsRoute,
  getRadarAs112SummaryDimensionRoute,
  getRadarAs112SummaryDnssecRoute,
  getRadarAs112SummaryEdnsRoute,
  getRadarAs112SummaryIpVersionRoute,
  getRadarAs112SummaryProtocolRoute,
  getRadarAs112SummaryQueryTypeRoute,
  getRadarAs112SummaryResponseCodesRoute,
  getRadarAs112TimeseriesGroupsDimensionRoute,
  getRadarAs112TimeseriesGroupsDnssecRoute,
  getRadarAs112TimeseriesGroupsEdnsRoute,
  getRadarAs112TimeseriesGroupsIpVersionRoute,
  getRadarAs112TimeseriesGroupsProtocolRoute,
  getRadarAs112TimeseriesGroupsQueryTypeRoute,
  getRadarAs112TimeseriesGroupsResponseCodesRoute,
  getRadarAs112TimeseriesRoute,
  getRadarAs112TopLocationsDnssecDnssecRoute,
  getRadarAs112TopLocationsEdnsEdnsRoute,
  getRadarAs112TopLocationsIpVersionIpVersionRoute,
  getRadarAs112TopLocationsRoute,
  getRadarAttacksLayer3SummaryBitrateRoute,
  getRadarAttacksLayer3SummaryDimensionRoute,
  getRadarAttacksLayer3SummaryDurationRoute,
  getRadarAttacksLayer3SummaryIndustryRoute,
  getRadarAttacksLayer3SummaryIpVersionRoute,
  getRadarAttacksLayer3SummaryProtocolRoute,
  getRadarAttacksLayer3SummaryVectorRoute,
  getRadarAttacksLayer3SummaryVerticalRoute,
  getRadarAttacksLayer3TimeseriesGroupsBitrateRoute,
  getRadarAttacksLayer3TimeseriesGroupsDimensionRoute,
  getRadarAttacksLayer3TimeseriesGroupsDurationRoute,
  getRadarAttacksLayer3TimeseriesGroupsIndustryRoute,
  getRadarAttacksLayer3TimeseriesGroupsIpVersionRoute,
  getRadarAttacksLayer3TimeseriesGroupsProtocolRoute,
  getRadarAttacksLayer3TimeseriesGroupsVectorRoute,
  getRadarAttacksLayer3TimeseriesGroupsVerticalRoute,
  getRadarAttacksLayer3TimeseriesRoute,
  getRadarAttacksLayer3TopAttacksRoute,
  getRadarAttacksLayer3TopIndustryRoute,
  getRadarAttacksLayer3TopLocationsOriginRoute,
  getRadarAttacksLayer3TopLocationsTargetRoute,
  getRadarAttacksLayer3TopVerticalRoute,
  getRadarAttacksLayer7SummaryDimensionRoute,
  getRadarAttacksLayer7SummaryHttpMethodRoute,
  getRadarAttacksLayer7SummaryHttpVersionRoute,
  getRadarAttacksLayer7SummaryIndustryRoute,
  getRadarAttacksLayer7SummaryIpVersionRoute,
  getRadarAttacksLayer7SummaryManagedRulesRoute,
  getRadarAttacksLayer7SummaryMitigationProductRoute,
  getRadarAttacksLayer7SummaryVerticalRoute,
  getRadarAttacksLayer7TimeseriesGroupsDimensionRoute,
  getRadarAttacksLayer7TimeseriesGroupsHttpMethodRoute,
  getRadarAttacksLayer7TimeseriesGroupsHttpVersionRoute,
  getRadarAttacksLayer7TimeseriesGroupsIndustryRoute,
  getRadarAttacksLayer7TimeseriesGroupsIpVersionRoute,
  getRadarAttacksLayer7TimeseriesGroupsManagedRulesRoute,
  getRadarAttacksLayer7TimeseriesGroupsMitigationProductRoute,
  getRadarAttacksLayer7TimeseriesGroupsVerticalRoute,
  getRadarAttacksLayer7TimeseriesRoute,
  getRadarAttacksLayer7TopAsesOriginRoute,
  getRadarAttacksLayer7TopAttacksRoute,
  getRadarAttacksLayer7TopIndustryRoute,
  getRadarAttacksLayer7TopLocationsOriginRoute,
  getRadarAttacksLayer7TopLocationsTargetRoute,
  getRadarAttacksLayer7TopVerticalRoute,
  getRadarBgpHijacksEventsRoute,
  getRadarBgpIpsTimeseriesRoute,
  getRadarBgpIpsTopAsesRoute,
  getRadarBgpLeaksEventsRoute,
  getRadarBgpRoutesAsesRoute,
  getRadarBgpRoutesMoasRoute,
  getRadarBgpRoutesPathsAsnRoute,
  getRadarBgpRoutesPfx2asRoute,
  getRadarBgpRoutesRealtimeRoute,
  getRadarBgpRoutesStatsRoute,
  getRadarBgpRoutesUpstreamsAsnTimeseriesRoute,
  getRadarBgpRpkiAspaChangesRoute,
  getRadarBgpRpkiAspaSnapshotRoute,
  getRadarBgpRpkiAspaTimeseriesRoute,
  getRadarBgpRpkiRoasTimeseriesRoute,
  getRadarBgpTimeseriesRoute,
  getRadarBgpTopAsesPrefixesRoute,
  getRadarBgpTopAsesRoute,
  getRadarBgpTopPrefixesRoute,
  getRadarBotsBotSlugRoute,
  getRadarBotsCrawlersSummaryDimensionRoute,
  getRadarBotsCrawlersTimeseriesGroupsDimensionRoute,
  getRadarBotsRoute,
  getRadarBotsSummaryDimensionRoute,
  getRadarBotsTimeseriesGroupsDimensionRoute,
  getRadarBotsTimeseriesRoute,
  getRadarCtAuthoritiesCaSlugRoute,
  getRadarCtAuthoritiesRoute,
  getRadarCtLogsLogSlugRoute,
  getRadarCtLogsRoute,
  getRadarCtSummaryDimensionRoute,
  getRadarCtTimeseriesGroupsDimensionRoute,
  getRadarCtTimeseriesRoute,
  getRadarDatasetsAliasRoute,
  getRadarDatasetsRoute,
  getRadarDnsSummaryCacheHitRoute,
  getRadarDnsSummaryDimensionRoute,
  getRadarDnsSummaryDnssecAwareRoute,
  getRadarDnsSummaryDnssecE2eRoute,
  getRadarDnsSummaryDnssecRoute,
  getRadarDnsSummaryIpVersionRoute,
  getRadarDnsSummaryMatchingAnswerRoute,
  getRadarDnsSummaryProtocolRoute,
  getRadarDnsSummaryQueryTypeRoute,
  getRadarDnsSummaryResponseCodeRoute,
  getRadarDnsSummaryResponseTtlRoute,
  getRadarDnsTimeseriesGroupsCacheHitRoute,
  getRadarDnsTimeseriesGroupsDimensionRoute,
  getRadarDnsTimeseriesGroupsDnssecAwareRoute,
  getRadarDnsTimeseriesGroupsDnssecE2eRoute,
  getRadarDnsTimeseriesGroupsDnssecRoute,
  getRadarDnsTimeseriesGroupsIpVersionRoute,
  getRadarDnsTimeseriesGroupsMatchingAnswerRoute,
  getRadarDnsTimeseriesGroupsProtocolRoute,
  getRadarDnsTimeseriesGroupsQueryTypeRoute,
  getRadarDnsTimeseriesGroupsResponseCodeRoute,
  getRadarDnsTimeseriesGroupsResponseTtlRoute,
  getRadarDnsTimeseriesRoute,
  getRadarDnsTopAsesRoute,
  getRadarDnsTopLocationsRoute,
  getRadarEmailRoutingSummaryArcRoute,
  getRadarEmailRoutingSummaryDimensionRoute,
  getRadarEmailRoutingSummaryDkimRoute,
  getRadarEmailRoutingSummaryDmarcRoute,
  getRadarEmailRoutingSummaryEncryptedRoute,
  getRadarEmailRoutingSummaryIpVersionRoute,
  getRadarEmailRoutingSummarySpfRoute,
  getRadarEmailRoutingTimeseriesGroupsArcRoute,
  getRadarEmailRoutingTimeseriesGroupsDimensionRoute,
  getRadarEmailRoutingTimeseriesGroupsDkimRoute,
  getRadarEmailRoutingTimeseriesGroupsDmarcRoute,
  getRadarEmailRoutingTimeseriesGroupsEncryptedRoute,
  getRadarEmailRoutingTimeseriesGroupsIpVersionRoute,
  getRadarEmailRoutingTimeseriesGroupsSpfRoute,
  getRadarEmailSecuritySummaryArcRoute,
  getRadarEmailSecuritySummaryDimensionRoute,
  getRadarEmailSecuritySummaryDkimRoute,
  getRadarEmailSecuritySummaryDmarcRoute,
  getRadarEmailSecuritySummaryMaliciousRoute,
  getRadarEmailSecuritySummarySpamRoute,
  getRadarEmailSecuritySummarySpfRoute,
  getRadarEmailSecuritySummarySpoofRoute,
  getRadarEmailSecuritySummaryThreatCategoryRoute,
  getRadarEmailSecuritySummaryTlsVersionRoute,
  getRadarEmailSecurityTimeseriesGroupsArcRoute,
  getRadarEmailSecurityTimeseriesGroupsDimensionRoute,
  getRadarEmailSecurityTimeseriesGroupsDkimRoute,
  getRadarEmailSecurityTimeseriesGroupsDmarcRoute,
  getRadarEmailSecurityTimeseriesGroupsMaliciousRoute,
  getRadarEmailSecurityTimeseriesGroupsSpamRoute,
  getRadarEmailSecurityTimeseriesGroupsSpfRoute,
  getRadarEmailSecurityTimeseriesGroupsSpoofRoute,
  getRadarEmailSecurityTimeseriesGroupsThreatCategoryRoute,
  getRadarEmailSecurityTimeseriesGroupsTlsVersionRoute,
  getRadarEmailSecurityTopTldsMaliciousMaliciousRoute,
  getRadarEmailSecurityTopTldsRoute,
  getRadarEmailSecurityTopTldsSpamSpamRoute,
  getRadarEmailSecurityTopTldsSpoofSpoofRoute,
  getRadarEntitiesAsnsAsnAsSetRoute,
  getRadarEntitiesAsnsAsnRelRoute,
  getRadarEntitiesAsnsAsnRoute,
  getRadarEntitiesAsnsBotnetThreatFeedRoute,
  getRadarEntitiesAsnsIpRoute,
  getRadarEntitiesAsnsRoute,
  getRadarEntitiesIpRoute,
  getRadarEntitiesLocationsLocationRoute,
  getRadarEntitiesLocationsRoute,
  getRadarGeolocationsGeoIdRoute,
  getRadarGeolocationsRoute,
  getRadarHttpSummaryBotClassRoute,
  getRadarHttpSummaryDeviceTypeRoute,
  getRadarHttpSummaryDimensionRoute,
  getRadarHttpSummaryHttpProtocolRoute,
  getRadarHttpSummaryHttpVersionRoute,
  getRadarHttpSummaryIpVersionRoute,
  getRadarHttpSummaryOsRoute,
  getRadarHttpSummaryPostQuantumRoute,
  getRadarHttpSummaryTlsVersionRoute,
  getRadarHttpTimeseriesGroupsBotClassRoute,
  getRadarHttpTimeseriesGroupsBrowserFamilyRoute,
  getRadarHttpTimeseriesGroupsBrowserRoute,
  getRadarHttpTimeseriesGroupsDeviceTypeRoute,
  getRadarHttpTimeseriesGroupsDimensionRoute,
  getRadarHttpTimeseriesGroupsHttpProtocolRoute,
  getRadarHttpTimeseriesGroupsHttpVersionRoute,
  getRadarHttpTimeseriesGroupsIpVersionRoute,
  getRadarHttpTimeseriesGroupsOsRoute,
  getRadarHttpTimeseriesGroupsPostQuantumRoute,
  getRadarHttpTimeseriesGroupsTlsVersionRoute,
  getRadarHttpTimeseriesRoute,
  getRadarHttpTopAsesBotClassBotClassRoute,
  getRadarHttpTopAsesBrowserFamilyBrowserFamilyRoute,
  getRadarHttpTopAsesDeviceTypeDeviceTypeRoute,
  getRadarHttpTopAsesHttpProtocolHttpProtocolRoute,
  getRadarHttpTopAsesHttpVersionHttpVersionRoute,
  getRadarHttpTopAsesIpVersionIpVersionRoute,
  getRadarHttpTopAsesOsOsRoute,
  getRadarHttpTopAsesRoute,
  getRadarHttpTopAsesTlsVersionTlsVersionRoute,
  getRadarHttpTopBrowserFamilyRoute,
  getRadarHttpTopBrowserRoute,
  getRadarHttpTopLocationsBotClassBotClassRoute,
  getRadarHttpTopLocationsBrowserFamilyBrowserFamilyRoute,
  getRadarHttpTopLocationsDeviceTypeDeviceTypeRoute,
  getRadarHttpTopLocationsHttpProtocolHttpProtocolRoute,
  getRadarHttpTopLocationsHttpVersionHttpVersionRoute,
  getRadarHttpTopLocationsIpVersionIpVersionRoute,
  getRadarHttpTopLocationsOsOsRoute,
  getRadarHttpTopLocationsRoute,
  getRadarHttpTopLocationsTlsVersionTlsVersionRoute,
  getRadarLeakedCredentialChecksSummaryBotClassRoute,
  getRadarLeakedCredentialChecksSummaryCompromisedRoute,
  getRadarLeakedCredentialChecksSummaryDimensionRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsBotClassRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsCompromisedRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsDimensionRoute,
  getRadarNetflowsSummaryDimensionRoute,
  getRadarNetflowsSummaryRoute,
  getRadarNetflowsTimeseriesGroupsDimensionRoute,
  getRadarNetflowsTimeseriesRoute,
  getRadarNetflowsTopAsesRoute,
  getRadarNetflowsTopLocationsRoute,
  getRadarOriginsRoute,
  getRadarOriginsSlugRoute,
  getRadarOriginsSummaryDimensionRoute,
  getRadarOriginsTimeseriesGroupsDimensionRoute,
  getRadarOriginsTimeseriesRoute,
  getRadarPostQuantumOriginSummaryDimensionRoute,
  getRadarPostQuantumOriginTimeseriesGroupsDimensionRoute,
  getRadarPostQuantumTlsSupportRoute,
  getRadarQualityIqiSummaryRoute,
  getRadarQualityIqiTimeseriesGroupsRoute,
  getRadarQualitySpeedHistogramRoute,
  getRadarQualitySpeedSummaryRoute,
  getRadarQualitySpeedTopAsesRoute,
  getRadarQualitySpeedTopLocationsRoute,
  getRadarRankingDomainDomainRoute,
  getRadarRankingInternetServicesCategoriesRoute,
  getRadarRankingInternetServicesTimeseriesGroupsRoute,
  getRadarRankingInternetServicesTopRoute,
  getRadarRankingTimeseriesGroupsRoute,
  getRadarRankingTopRoute,
  getRadarRobotsTxtTopDomainCategoriesRoute,
  getRadarRobotsTxtTopUserAgentsDirectiveRoute,
  getRadarSearchGlobalRoute,
  getRadarTcpResetsTimeoutsSummaryRoute,
  getRadarTcpResetsTimeoutsTimeseriesGroupsRoute,
  getRadarTldsPerformanceSummaryDimensionRoute,
  getRadarTldsPerformanceTimeseriesGroupsDimensionRoute,
  getRadarTldsRoute,
  getRadarTldsTldRoute,
  getRadarTrafficAnomaliesLocationsRoute,
  getRadarTrafficAnomaliesRoute,
  getRadarTrafficAnomaliesUuidRoute,
  getRadarVerifiedBotsTopBotsRoute,
  getRadarVerifiedBotsTopCategoriesRoute,
  postRadarDatasetsDownloadRoute,
} from '../routes'

export const getRadarAgentReadinessSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAgentReadinessSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiBotsSummaryUserAgentRouteHandler: RouteHandler<
  typeof getRadarAiBotsSummaryUserAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiBotsSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAiBotsSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiBotsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarAiBotsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiBotsTimeseriesGroupsUserAgentRouteHandler: RouteHandler<
  typeof getRadarAiBotsTimeseriesGroupsUserAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiBotsTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarAiBotsTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceSummaryModelRouteHandler: RouteHandler<
  typeof getRadarAiInferenceSummaryModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceSummaryTaskRouteHandler: RouteHandler<
  typeof getRadarAiInferenceSummaryTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAiInferenceSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceTimeseriesGroupsModelRouteHandler: RouteHandler<
  typeof getRadarAiInferenceTimeseriesGroupsModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceTimeseriesGroupsTaskRouteHandler: RouteHandler<
  typeof getRadarAiInferenceTimeseriesGroupsTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiInferenceTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarAiInferenceTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiMarkdownForAgentsSummaryRouteHandler: RouteHandler<
  typeof getRadarAiMarkdownForAgentsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAiMarkdownForAgentsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarAiMarkdownForAgentsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAnnotationsRouteHandler: RouteHandler<
  typeof getRadarAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAnnotationsOutagesRouteHandler: RouteHandler<
  typeof getRadarAnnotationsOutagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAnnotationsOutagesLocationsRouteHandler: RouteHandler<
  typeof getRadarAnnotationsOutagesLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAnnotationsIdRouteHandler: RouteHandler<
  typeof getRadarAnnotationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryDnssecRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryEdnsRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryEdnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryProtocolRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryQueryTypeRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryResponseCodesRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryResponseCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112SummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAs112SummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsDnssecRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsEdnsRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsEdnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsProtocolRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsQueryTypeRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsResponseCodesRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsResponseCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarAs112TimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TopLocationsRouteHandler: RouteHandler<
  typeof getRadarAs112TopLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TopLocationsDnssecDnssecRouteHandler: RouteHandler<
  typeof getRadarAs112TopLocationsDnssecDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TopLocationsEdnsEdnsRouteHandler: RouteHandler<
  typeof getRadarAs112TopLocationsEdnsEdnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAs112TopLocationsIpVersionIpVersionRouteHandler: RouteHandler<
  typeof getRadarAs112TopLocationsIpVersionIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryBitrateRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryBitrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryDurationRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryDurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryProtocolRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryVectorRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryVectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3SummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3SummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsBitrateRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsBitrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsDurationRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsDurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsProtocolRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsVectorRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsVectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TopAttacksRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TopAttacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TopIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TopIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TopLocationsOriginRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TopLocationsOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TopLocationsTargetRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TopLocationsTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer3TopVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer3TopVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryHttpMethodRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryHttpMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryHttpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryManagedRulesRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryManagedRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryMitigationProductRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryMitigationProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7SummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7SummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsHttpMethodRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsHttpMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsHttpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsManagedRulesRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsManagedRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsMitigationProductRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsMitigationProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopAsesOriginRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopAsesOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopAttacksRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopAttacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopIndustryRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopIndustryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopLocationsOriginRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopLocationsOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopLocationsTargetRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopLocationsTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarAttacksLayer7TopVerticalRouteHandler: RouteHandler<
  typeof getRadarAttacksLayer7TopVerticalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpHijacksEventsRouteHandler: RouteHandler<
  typeof getRadarBgpHijacksEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpIpsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBgpIpsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpIpsTopAsesRouteHandler: RouteHandler<
  typeof getRadarBgpIpsTopAsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpLeaksEventsRouteHandler: RouteHandler<
  typeof getRadarBgpLeaksEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesAsesRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesAsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesMoasRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesMoasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesPathsAsnRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesPathsAsnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesPfx2asRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesPfx2asRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesRealtimeRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesRealtimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesStatsRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRoutesUpstreamsAsnTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBgpRoutesUpstreamsAsnTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRpkiAspaChangesRouteHandler: RouteHandler<
  typeof getRadarBgpRpkiAspaChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRpkiAspaSnapshotRouteHandler: RouteHandler<
  typeof getRadarBgpRpkiAspaSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRpkiAspaTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBgpRpkiAspaTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpRpkiRoasTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBgpRpkiRoasTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBgpTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpTopAsesRouteHandler: RouteHandler<typeof getRadarBgpTopAsesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarBgpTopAsesPrefixesRouteHandler: RouteHandler<
  typeof getRadarBgpTopAsesPrefixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBgpTopPrefixesRouteHandler: RouteHandler<
  typeof getRadarBgpTopPrefixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsRouteHandler: RouteHandler<typeof getRadarBotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsCrawlersSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarBotsCrawlersSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsCrawlersTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarBotsCrawlersTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarBotsSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarBotsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarBotsTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarBotsBotSlugRouteHandler: RouteHandler<
  typeof getRadarBotsBotSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtAuthoritiesRouteHandler: RouteHandler<
  typeof getRadarCtAuthoritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtAuthoritiesCaSlugRouteHandler: RouteHandler<
  typeof getRadarCtAuthoritiesCaSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtLogsRouteHandler: RouteHandler<typeof getRadarCtLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtLogsLogSlugRouteHandler: RouteHandler<
  typeof getRadarCtLogsLogSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarCtSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtTimeseriesRouteHandler: RouteHandler<
  typeof getRadarCtTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarCtTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarCtTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDatasetsRouteHandler: RouteHandler<typeof getRadarDatasetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRadarDatasetsDownloadRouteHandler: RouteHandler<
  typeof postRadarDatasetsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDatasetsAliasRouteHandler: RouteHandler<
  typeof getRadarDatasetsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryCacheHitRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryCacheHitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryDnssecRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryDnssecAwareRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryDnssecAwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryDnssecE2eRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryDnssecE2eRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryMatchingAnswerRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryMatchingAnswerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryProtocolRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryQueryTypeRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryResponseCodeRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryResponseCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryResponseTtlRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryResponseTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarDnsSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsCacheHitRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsCacheHitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsDnssecRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsDnssecAwareRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsDnssecAwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsDnssecE2eRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsDnssecE2eRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsMatchingAnswerRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsMatchingAnswerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsProtocolRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsQueryTypeRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsResponseCodeRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsResponseCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsResponseTtlRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsResponseTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarDnsTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTopAsesRouteHandler: RouteHandler<typeof getRadarDnsTopAsesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarDnsTopLocationsRouteHandler: RouteHandler<
  typeof getRadarDnsTopLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryArcRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryArcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryDkimRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryDmarcRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryDmarcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryEncryptedRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryEncryptedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummarySpfRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummarySpfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsArcRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsArcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsDkimRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsDmarcRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsDmarcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsEncryptedRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsEncryptedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsSpfRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsSpfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailRoutingTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarEmailRoutingTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryArcRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryArcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryDkimRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryDmarcRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryDmarcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryMaliciousRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryMaliciousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummarySpamRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummarySpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummarySpfRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummarySpfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummarySpoofRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummarySpoofRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryThreatCategoryRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryThreatCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryTlsVersionRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecuritySummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarEmailSecuritySummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsArcRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsArcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsDkimRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsDkimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsDmarcRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsDmarcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsMaliciousRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsMaliciousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsSpamRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsSpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsSpfRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsSpfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsSpoofRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsSpoofRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsThreatCategoryRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsThreatCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsTlsVersionRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTopTldsRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTopTldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTopTldsMaliciousMaliciousRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTopTldsMaliciousMaliciousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTopTldsSpamSpamRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTopTldsSpamSpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEmailSecurityTopTldsSpoofSpoofRouteHandler: RouteHandler<
  typeof getRadarEmailSecurityTopTldsSpoofSpoofRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsBotnetThreatFeedRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsBotnetThreatFeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsIpRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsAsnRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsAsnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsAsnAsSetRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsAsnAsSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesAsnsAsnRelRouteHandler: RouteHandler<
  typeof getRadarEntitiesAsnsAsnRelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesIpRouteHandler: RouteHandler<typeof getRadarEntitiesIpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesLocationsRouteHandler: RouteHandler<
  typeof getRadarEntitiesLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarEntitiesLocationsLocationRouteHandler: RouteHandler<
  typeof getRadarEntitiesLocationsLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarGeolocationsRouteHandler: RouteHandler<
  typeof getRadarGeolocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarGeolocationsGeoIdRouteHandler: RouteHandler<
  typeof getRadarGeolocationsGeoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryBotClassRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryDeviceTypeRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryDeviceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryHttpProtocolRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryHttpProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryHttpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryIpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryOsRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryOsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryPostQuantumRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryPostQuantumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryTlsVersionRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarHttpSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsBotClassRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsBrowserRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsBrowserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsBrowserFamilyRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsBrowserFamilyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsDeviceTypeRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsDeviceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsHttpProtocolRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsHttpProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsHttpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsIpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsOsRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsOsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsPostQuantumRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsPostQuantumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsTlsVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarHttpTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesBotClassBotClassRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesBotClassBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesBrowserFamilyBrowserFamilyRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesBrowserFamilyBrowserFamilyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesDeviceTypeDeviceTypeRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesDeviceTypeDeviceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesHttpProtocolHttpProtocolRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesHttpProtocolHttpProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesHttpVersionHttpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesHttpVersionHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesIpVersionIpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesIpVersionIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesOsOsRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesOsOsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopAsesTlsVersionTlsVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopAsesTlsVersionTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopBrowserRouteHandler: RouteHandler<
  typeof getRadarHttpTopBrowserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopBrowserFamilyRouteHandler: RouteHandler<
  typeof getRadarHttpTopBrowserFamilyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsBotClassBotClassRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsBotClassBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsBrowserFamilyBrowserFamilyRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsBrowserFamilyBrowserFamilyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsDeviceTypeDeviceTypeRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsDeviceTypeDeviceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsHttpProtocolHttpProtocolRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsHttpProtocolHttpProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsHttpVersionHttpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsHttpVersionHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsIpVersionIpVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsIpVersionIpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsOsOsRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsOsOsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarHttpTopLocationsTlsVersionTlsVersionRouteHandler: RouteHandler<
  typeof getRadarHttpTopLocationsTlsVersionTlsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksSummaryBotClassRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksSummaryBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksSummaryCompromisedRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksSummaryCompromisedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksTimeseriesGroupsBotClassRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksTimeseriesGroupsBotClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksTimeseriesGroupsCompromisedRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksTimeseriesGroupsCompromisedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarLeakedCredentialChecksTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarLeakedCredentialChecksTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsSummaryRouteHandler: RouteHandler<
  typeof getRadarNetflowsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarNetflowsSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarNetflowsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarNetflowsTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsTopAsesRouteHandler: RouteHandler<
  typeof getRadarNetflowsTopAsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarNetflowsTopLocationsRouteHandler: RouteHandler<
  typeof getRadarNetflowsTopLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarOriginsRouteHandler: RouteHandler<typeof getRadarOriginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarOriginsSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarOriginsSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarOriginsTimeseriesRouteHandler: RouteHandler<
  typeof getRadarOriginsTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarOriginsTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarOriginsTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarOriginsSlugRouteHandler: RouteHandler<
  typeof getRadarOriginsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarPostQuantumOriginSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarPostQuantumOriginSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarPostQuantumOriginTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarPostQuantumOriginTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarPostQuantumTlsSupportRouteHandler: RouteHandler<
  typeof getRadarPostQuantumTlsSupportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualityIqiSummaryRouteHandler: RouteHandler<
  typeof getRadarQualityIqiSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualityIqiTimeseriesGroupsRouteHandler: RouteHandler<
  typeof getRadarQualityIqiTimeseriesGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualitySpeedHistogramRouteHandler: RouteHandler<
  typeof getRadarQualitySpeedHistogramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualitySpeedSummaryRouteHandler: RouteHandler<
  typeof getRadarQualitySpeedSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualitySpeedTopAsesRouteHandler: RouteHandler<
  typeof getRadarQualitySpeedTopAsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQualitySpeedTopLocationsRouteHandler: RouteHandler<
  typeof getRadarQualitySpeedTopLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingDomainDomainRouteHandler: RouteHandler<
  typeof getRadarRankingDomainDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingInternetServicesCategoriesRouteHandler: RouteHandler<
  typeof getRadarRankingInternetServicesCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingInternetServicesTimeseriesGroupsRouteHandler: RouteHandler<
  typeof getRadarRankingInternetServicesTimeseriesGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingInternetServicesTopRouteHandler: RouteHandler<
  typeof getRadarRankingInternetServicesTopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingTimeseriesGroupsRouteHandler: RouteHandler<
  typeof getRadarRankingTimeseriesGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRankingTopRouteHandler: RouteHandler<typeof getRadarRankingTopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarRobotsTxtTopDomainCategoriesRouteHandler: RouteHandler<
  typeof getRadarRobotsTxtTopDomainCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarRobotsTxtTopUserAgentsDirectiveRouteHandler: RouteHandler<
  typeof getRadarRobotsTxtTopUserAgentsDirectiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarSearchGlobalRouteHandler: RouteHandler<
  typeof getRadarSearchGlobalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTcpResetsTimeoutsSummaryRouteHandler: RouteHandler<
  typeof getRadarTcpResetsTimeoutsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTcpResetsTimeoutsTimeseriesGroupsRouteHandler: RouteHandler<
  typeof getRadarTcpResetsTimeoutsTimeseriesGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTldsRouteHandler: RouteHandler<typeof getRadarTldsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTldsPerformanceSummaryDimensionRouteHandler: RouteHandler<
  typeof getRadarTldsPerformanceSummaryDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTldsPerformanceTimeseriesGroupsDimensionRouteHandler: RouteHandler<
  typeof getRadarTldsPerformanceTimeseriesGroupsDimensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTldsTldRouteHandler: RouteHandler<typeof getRadarTldsTldRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTrafficAnomaliesRouteHandler: RouteHandler<
  typeof getRadarTrafficAnomaliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTrafficAnomaliesLocationsRouteHandler: RouteHandler<
  typeof getRadarTrafficAnomaliesLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarTrafficAnomaliesUuidRouteHandler: RouteHandler<
  typeof getRadarTrafficAnomaliesUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarVerifiedBotsTopBotsRouteHandler: RouteHandler<
  typeof getRadarVerifiedBotsTopBotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarVerifiedBotsTopCategoriesRouteHandler: RouteHandler<
  typeof getRadarVerifiedBotsTopCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
