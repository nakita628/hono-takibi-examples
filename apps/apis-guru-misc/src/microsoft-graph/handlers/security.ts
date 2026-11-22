import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSecurityAlertsCountRoute,
  getSecurityAlertsV2CountRoute,
  getSecurityAttackSimulationSimulationAutomationsCountRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute,
  getSecurityAttackSimulationSimulationsCountRoute,
  getSecurityCasesEdiscoveryCasesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute,
  getSecurityIncidentsCountRoute,
  getSecurityIncidentsIncidentIdAlertsCountRoute,
  getSecuritySecureScoreControlProfilesCountRoute,
  getSecuritySecureScoresCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityHandler = app
  .openapi(getSecurityAlertsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2CountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationSimulationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityIncidentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityIncidentsIncidentIdAlertsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySecureScoreControlProfilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySecureScoresCountRoute, (c) => {
    throw new Error('Not implemented')
  })
