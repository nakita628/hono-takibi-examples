import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute,
  deleteSecurityThreatIntelligenceArticlesArticleIdRoute,
  deleteSecurityThreatIntelligenceHostComponentsHostComponentIdRoute,
  deleteSecurityThreatIntelligenceHostCookiesHostCookieIdRoute,
  deleteSecurityThreatIntelligenceHostPairsHostPairIdRoute,
  deleteSecurityThreatIntelligenceHostPortsHostPortIdRoute,
  deleteSecurityThreatIntelligenceHostsHostIdReputationRoute,
  deleteSecurityThreatIntelligenceHostsHostIdRoute,
  deleteSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute,
  deleteSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute,
  deleteSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
  deleteSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute,
  deleteSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute,
  deleteSecurityThreatIntelligenceRoute,
  deleteSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute,
  deleteSecurityThreatIntelligenceSubdomainsSubdomainIdRoute,
  deleteSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
  deleteSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute,
  deleteSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute,
  deleteSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute,
  getSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdArtifactRoute,
  getSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute,
  getSecurityThreatIntelligenceArticleIndicatorsCountRoute,
  getSecurityThreatIntelligenceArticleIndicatorsRoute,
  getSecurityThreatIntelligenceArticlesArticleIdIndicatorsArticleIndicatorIdRoute,
  getSecurityThreatIntelligenceArticlesArticleIdIndicatorsCountRoute,
  getSecurityThreatIntelligenceArticlesArticleIdIndicatorsRoute,
  getSecurityThreatIntelligenceArticlesArticleIdRoute,
  getSecurityThreatIntelligenceArticlesCountRoute,
  getSecurityThreatIntelligenceArticlesRoute,
  getSecurityThreatIntelligenceHostComponentsCountRoute,
  getSecurityThreatIntelligenceHostComponentsHostComponentIdHostRoute,
  getSecurityThreatIntelligenceHostComponentsHostComponentIdRoute,
  getSecurityThreatIntelligenceHostComponentsRoute,
  getSecurityThreatIntelligenceHostCookiesCountRoute,
  getSecurityThreatIntelligenceHostCookiesHostCookieIdHostRoute,
  getSecurityThreatIntelligenceHostCookiesHostCookieIdRoute,
  getSecurityThreatIntelligenceHostCookiesRoute,
  getSecurityThreatIntelligenceHostPairsCountRoute,
  getSecurityThreatIntelligenceHostPairsHostPairIdChildHostRoute,
  getSecurityThreatIntelligenceHostPairsHostPairIdParentHostRoute,
  getSecurityThreatIntelligenceHostPairsHostPairIdRoute,
  getSecurityThreatIntelligenceHostPairsRoute,
  getSecurityThreatIntelligenceHostPortsCountRoute,
  getSecurityThreatIntelligenceHostPortsHostPortIdHostRoute,
  getSecurityThreatIntelligenceHostPortsHostPortIdMostRecentSslCertificateRoute,
  getSecurityThreatIntelligenceHostPortsHostPortIdRoute,
  getSecurityThreatIntelligenceHostPortsRoute,
  getSecurityThreatIntelligenceHostsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdChildHostPairsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdChildHostPairsHostPairIdRoute,
  getSecurityThreatIntelligenceHostsHostIdChildHostPairsRoute,
  getSecurityThreatIntelligenceHostsHostIdComponentsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdComponentsHostComponentIdRoute,
  getSecurityThreatIntelligenceHostsHostIdComponentsRoute,
  getSecurityThreatIntelligenceHostsHostIdCookiesCountRoute,
  getSecurityThreatIntelligenceHostsHostIdCookiesHostCookieIdRoute,
  getSecurityThreatIntelligenceHostsHostIdCookiesRoute,
  getSecurityThreatIntelligenceHostsHostIdHostPairsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdHostPairsHostPairIdRoute,
  getSecurityThreatIntelligenceHostsHostIdHostPairsRoute,
  getSecurityThreatIntelligenceHostsHostIdParentHostPairsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdParentHostPairsHostPairIdRoute,
  getSecurityThreatIntelligenceHostsHostIdParentHostPairsRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsPassiveDnsRecordIdRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsReverseCountRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsReversePassiveDnsRecordIdRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsReverseRoute,
  getSecurityThreatIntelligenceHostsHostIdPassiveDnsRoute,
  getSecurityThreatIntelligenceHostsHostIdPortsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdPortsHostPortIdRoute,
  getSecurityThreatIntelligenceHostsHostIdPortsRoute,
  getSecurityThreatIntelligenceHostsHostIdReputationRoute,
  getSecurityThreatIntelligenceHostsHostIdRoute,
  getSecurityThreatIntelligenceHostsHostIdSslCertificatesCountRoute,
  getSecurityThreatIntelligenceHostsHostIdSslCertificatesHostSslCertificateIdRoute,
  getSecurityThreatIntelligenceHostsHostIdSslCertificatesRoute,
  getSecurityThreatIntelligenceHostsHostIdSubdomainsCountRoute,
  getSecurityThreatIntelligenceHostsHostIdSubdomainsRoute,
  getSecurityThreatIntelligenceHostsHostIdSubdomainsSubdomainIdRoute,
  getSecurityThreatIntelligenceHostsHostIdTrackersCountRoute,
  getSecurityThreatIntelligenceHostsHostIdTrackersHostTrackerIdRoute,
  getSecurityThreatIntelligenceHostsHostIdTrackersRoute,
  getSecurityThreatIntelligenceHostsHostIdWhoisRoute,
  getSecurityThreatIntelligenceHostsRoute,
  getSecurityThreatIntelligenceHostSslCertificatesCountRoute,
  getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdHostRoute,
  getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute,
  getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdSslCertificateRoute,
  getSecurityThreatIntelligenceHostSslCertificatesRoute,
  getSecurityThreatIntelligenceHostTrackersCountRoute,
  getSecurityThreatIntelligenceHostTrackersHostTrackerIdHostRoute,
  getSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute,
  getSecurityThreatIntelligenceHostTrackersRoute,
  getSecurityThreatIntelligenceIntelligenceProfileIndicatorsCountRoute,
  getSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdArtifactRoute,
  getSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
  getSecurityThreatIntelligenceIntelligenceProfileIndicatorsRoute,
  getSecurityThreatIntelligenceIntelProfilesCountRoute,
  getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsCountRoute,
  getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsIntelligenceProfileIndicatorIdRoute,
  getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsRoute,
  getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute,
  getSecurityThreatIntelligenceIntelProfilesRoute,
  getSecurityThreatIntelligencePassiveDnsRecordsCountRoute,
  getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdArtifactRoute,
  getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdParentHostRoute,
  getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute,
  getSecurityThreatIntelligencePassiveDnsRecordsRoute,
  getSecurityThreatIntelligenceRoute,
  getSecurityThreatIntelligenceSslCertificatesCountRoute,
  getSecurityThreatIntelligenceSslCertificatesRoute,
  getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsCountRoute,
  getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsHostIdRoute,
  getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsRoute,
  getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute,
  getSecurityThreatIntelligenceSubdomainsCountRoute,
  getSecurityThreatIntelligenceSubdomainsRoute,
  getSecurityThreatIntelligenceSubdomainsSubdomainIdHostRoute,
  getSecurityThreatIntelligenceSubdomainsSubdomainIdRoute,
  getSecurityThreatIntelligenceVulnerabilitiesCountRoute,
  getSecurityThreatIntelligenceVulnerabilitiesRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesArticleIdRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesCountRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsCountRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
  getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute,
  getSecurityThreatIntelligenceWhoisHistoryRecordsCountRoute,
  getSecurityThreatIntelligenceWhoisHistoryRecordsRoute,
  getSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdHostRoute,
  getSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute,
  getSecurityThreatIntelligenceWhoisRecordsCountRoute,
  getSecurityThreatIntelligenceWhoisRecordsRoute,
  getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryCountRoute,
  getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryRoute,
  getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryWhoisHistoryRecordIdRoute,
  getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHostRoute,
  getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute,
  patchSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute,
  patchSecurityThreatIntelligenceArticlesArticleIdRoute,
  patchSecurityThreatIntelligenceHostComponentsHostComponentIdRoute,
  patchSecurityThreatIntelligenceHostCookiesHostCookieIdRoute,
  patchSecurityThreatIntelligenceHostPairsHostPairIdRoute,
  patchSecurityThreatIntelligenceHostPortsHostPortIdRoute,
  patchSecurityThreatIntelligenceHostsHostIdReputationRoute,
  patchSecurityThreatIntelligenceHostsHostIdRoute,
  patchSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute,
  patchSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute,
  patchSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
  patchSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute,
  patchSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute,
  patchSecurityThreatIntelligenceRoute,
  patchSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute,
  patchSecurityThreatIntelligenceSubdomainsSubdomainIdRoute,
  patchSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
  patchSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute,
  patchSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute,
  patchSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute,
  postSecurityThreatIntelligenceArticleIndicatorsRoute,
  postSecurityThreatIntelligenceArticlesRoute,
  postSecurityThreatIntelligenceHostComponentsRoute,
  postSecurityThreatIntelligenceHostCookiesRoute,
  postSecurityThreatIntelligenceHostPairsRoute,
  postSecurityThreatIntelligenceHostPortsRoute,
  postSecurityThreatIntelligenceHostsRoute,
  postSecurityThreatIntelligenceHostSslCertificatesRoute,
  postSecurityThreatIntelligenceHostTrackersRoute,
  postSecurityThreatIntelligenceIntelligenceProfileIndicatorsRoute,
  postSecurityThreatIntelligenceIntelProfilesRoute,
  postSecurityThreatIntelligencePassiveDnsRecordsRoute,
  postSecurityThreatIntelligenceSslCertificatesRoute,
  postSecurityThreatIntelligenceSubdomainsRoute,
  postSecurityThreatIntelligenceVulnerabilitiesRoute,
  postSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsRoute,
  postSecurityThreatIntelligenceWhoisHistoryRecordsRoute,
  postSecurityThreatIntelligenceWhoisRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityThreatIntelligenceHandler = app
  .openapi(getSecurityThreatIntelligenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticleIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceArticleIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticleIndicatorsArticleIndicatorIdArtifactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticleIndicatorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesArticleIdIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesArticleIdIndicatorsArticleIndicatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesArticleIdIndicatorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceArticlesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostComponentsHostComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostComponentsHostComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostComponentsHostComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostComponentsHostComponentIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostComponentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostCookiesHostCookieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostCookiesHostCookieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostCookiesHostCookieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostCookiesHostCookieIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostCookiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPairsHostPairIdChildHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPairsHostPairIdParentHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPairsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPortsHostPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostPortsHostPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostPortsHostPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPortsHostPortIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPortsHostPortIdMostRecentSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostsHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostsHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdChildHostPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdChildHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdChildHostPairsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdComponentsHostComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdComponentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdCookiesHostCookieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdCookiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdHostPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdHostPairsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdParentHostPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdParentHostPairsHostPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdParentHostPairsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPassiveDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPassiveDnsPassiveDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPassiveDnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPassiveDnsReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceHostsHostIdPassiveDnsReversePassiveDnsRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceHostsHostIdPassiveDnsReverseCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPortsHostPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostsHostIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostsHostIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceHostsHostIdSslCertificatesHostSslCertificateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceHostsHostIdSslCertificatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdSubdomainsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdTrackersHostTrackerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdTrackersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsHostIdWhoisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceHostSslCertificatesHostSslCertificateIdSslCertificateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceHostSslCertificatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceHostTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceHostTrackersHostTrackerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostTrackersHostTrackerIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceHostTrackersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceIntelligenceProfileIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceIntelligenceProfileIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityThreatIntelligenceIntelligenceProfileIndicatorsIntelligenceProfileIndicatorIdArtifactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceIntelligenceProfileIndicatorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceIntelProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceIntelProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsIntelligenceProfileIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityThreatIntelligenceIntelProfilesIntelligenceProfileIdIndicatorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceIntelProfilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligencePassiveDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligencePassiveDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdArtifactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligencePassiveDnsRecordsPassiveDnsRecordIdParentHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligencePassiveDnsRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceSslCertificatesSslCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsHostIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityThreatIntelligenceSslCertificatesSslCertificateIdRelatedHostsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceSslCertificatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSubdomainsSubdomainIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceSubdomainsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesArticleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdArticlesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsVulnerabilityComponentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesVulnerabilityIdComponentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceVulnerabilitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisHistoryRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceWhoisHistoryRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisHistoryRecordsWhoisHistoryRecordIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisHistoryRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityThreatIntelligenceWhoisRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryWhoisHistoryRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisRecordsWhoisRecordIdHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityThreatIntelligenceWhoisRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
