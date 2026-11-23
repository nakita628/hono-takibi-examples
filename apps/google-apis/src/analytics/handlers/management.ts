import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteManagementAccountsAccountIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdFiltersFilterIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
  deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  getManagementAccountsAccountIdEntityUserLinksRoute,
  getManagementAccountsAccountIdFiltersFilterIdRoute,
  getManagementAccountsAccountIdFiltersRoute,
  getManagementAccountsAccountIdWebpropertiesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
  getManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
  getManagementAccountsRoute,
  getManagementAccountSummariesRoute,
  getManagementSegmentsRoute,
  patchManagementAccountsAccountIdFiltersFilterIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
  postManagementAccountsAccountIdEntityUserLinksRoute,
  postManagementAccountsAccountIdFiltersRoute,
  postManagementAccountsAccountIdWebpropertiesRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute,
  postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
  postManagementClientIdHashClientIdRoute,
  putManagementAccountsAccountIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdFiltersFilterIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
  putManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managementHandler = app
  .openapi(getManagementAccountSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdEntityUserLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdEntityUserLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteManagementAccountsAccountIdEntityUserLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagementAccountsAccountIdEntityUserLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteManagementAccountsAccountIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchManagementAccountsAccountIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagementAccountsAccountIdFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdWebpropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdWebpropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagementAccountsAccountIdWebpropertiesWebPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postManagementClientIdHashClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagementSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
