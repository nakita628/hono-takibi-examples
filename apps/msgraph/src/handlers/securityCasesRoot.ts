import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  deleteSecurityCasesRoute,
  getSecurityCasesEdiscoveryCasesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupServiceProvisioningErrorsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupServiceProvisioningErrorsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1Route,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  getSecurityCasesEdiscoveryCasesRoute,
  getSecurityCasesRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  patchSecurityCasesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityActivateRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityReleaseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityUpdateIndexRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityCloseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityReopenRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityReleaseRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityUpdateIndexRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityApplyHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityRemoveHoldRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityAddToReviewSetRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityExportRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityApplyTagsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityExportRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityEstimateStatisticsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityExportReportRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityExportResultRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityPurgeDataRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsMicrosoftGraphSecurityResetToDefaultRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  postSecurityCasesEdiscoveryCasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCasesRootHandler = app
  .openapi(getSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersEdiscoveryCaseMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCaseMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityActivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityApplyHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityReleaseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityRemoveHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdMicrosoftGraphSecurityUpdateIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupServiceProvisioningErrorsCountRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
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
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityApplyHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansMicrosoftGraphSecurityRemoveHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityCloseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdMicrosoftGraphSecurityReopenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityApplyHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityReleaseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityRemoveHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdMicrosoftGraphSecurityUpdateIndexRoute,
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
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityApplyHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesMicrosoftGraphSecurityRemoveHoldRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityAddToReviewSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdMicrosoftGraphSecurityExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityApplyTagsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdMicrosoftGraphSecurityExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityEstimateStatisticsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityExportReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityExportResultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdMicrosoftGraphSecurityPurgeDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRoute,
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
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsMicrosoftGraphSecurityResetToDefaultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
