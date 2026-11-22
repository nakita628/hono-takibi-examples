import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdCustodianSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesEdiscoveryNoncustodialDataSourceIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdNoncustodialSourcesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsEdiscoveryReviewTagId1Route,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdChildTagsRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  getSecurityCasesEdiscoveryCasesRoute,
  getSecurityCasesRoute,
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
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute,
  postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute,
  postSecurityCasesEdiscoveryCasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCasesRootHandler = app
  .openapi(deleteSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdLastIndexOperationRoute,
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdSiteSourcesSiteSourceIdSiteRoute,
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUnifiedGroupSourcesUnifiedGroupSourceIdGroupRoute,
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdCustodiansEdiscoveryCustodianIdUserSourcesUserSourceIdRoute,
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
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdDataSourceRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdNoncustodialDataSourcesEdiscoveryNoncustodialDataSourceIdLastIndexOperationRoute,
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
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdOperationsCaseOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdReviewSetsEdiscoveryReviewSetIdQueriesEdiscoveryReviewSetQueryIdRoute,
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
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAddToReviewSetOperationRoute,
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
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdAdditionalSourcesDataSourceIdRoute,
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSearchesEdiscoverySearchIdLastEstimateStatisticsOperationRoute,
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
  .openapi(deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsEdiscoveryReviewTagIdParentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
