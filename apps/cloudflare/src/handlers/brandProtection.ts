import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBrandProtectionBrandsPatternsRoute,
  deleteAccountsAccountIdBrandProtectionBrandsRoute,
  deleteAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesQueryIdRoute,
  deleteAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
  deleteAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesQueryIdRoute,
  deleteAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdRoute,
  deleteAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute,
  getAccountsAccountIdBrandProtectionAlertsRoute,
  getAccountsAccountIdBrandProtectionBrandsPatternsRoute,
  getAccountsAccountIdBrandProtectionBrandsRoute,
  getAccountsAccountIdBrandProtectionDomainInfoRoute,
  getAccountsAccountIdBrandProtectionRecentSubmissionsRoute,
  getAccountsAccountIdBrandProtectionSubmissionInfoRoute,
  getAccountsAccountIdBrandProtectionTrackedDomainsRoute,
  getAccountsAccountIdBrandProtectionUrlInfoRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionDomainMatchesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesExamplesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionLogoMatchesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdPdfRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionTotalQueriesRoute,
  getAccountsAccountIdCloudforceOneV2BrandProtectionUrlInfoRoute,
  getLiveRoute,
  getReadyRoute,
  patchAccountsAccountIdBrandProtectionAlertsClearRoute,
  patchAccountsAccountIdBrandProtectionAlertsRefuteRoute,
  patchAccountsAccountIdBrandProtectionAlertsRoute,
  patchAccountsAccountIdBrandProtectionAlertsVerifyRoute,
  patchAccountsAccountIdBrandProtectionClearRoute,
  patchAccountsAccountIdBrandProtectionRefuteRoute,
  patchAccountsAccountIdBrandProtectionVerifyRoute,
  patchAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesQueryIdRoute,
  postAccountsAccountIdBrandProtectionBrandsPatternsRoute,
  postAccountsAccountIdBrandProtectionBrandsRoute,
  postAccountsAccountIdBrandProtectionSubmitRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionDomainMatchesBulkDismissRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionDomainTrialRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionLetterGenerateRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionLogoSearchRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionQueriesQueryIdMatchesDomainIdDismissRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionQueriesQueryIdMatchesDomainIdUndismissRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesLookupRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesRoute,
  postAccountsAccountIdCloudforceOneV2BrandProtectionUrlSubmitRoute,
  postInternalSubmitRoute,
  putAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
  putAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandProtectionHandler = app
  .openapi(getAccountsAccountIdBrandProtectionAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionAlertsClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionAlertsRefuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionAlertsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBrandProtectionBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBrandProtectionBrandsPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionBrandsPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionBrandsPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionDomainInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionRecentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionRefuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionSubmissionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBrandProtectionSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionTrackedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBrandProtectionUrlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBrandProtectionVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionDomainMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdCloudforceOneV2BrandProtectionDomainMatchesBulkDismissRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2BrandProtectionDomainQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionDomainTrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionLetterGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdCloudforceOneV2BrandProtectionLetterTemplatesTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionLogoMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2BrandProtectionLogoQueriesQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionLogoSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdCloudforceOneV2BrandProtectionQueriesQueryIdMatchesDomainIdDismissRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdCloudforceOneV2BrandProtectionQueriesQueryIdMatchesDomainIdUndismissRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneV2BrandProtectionTakedownNoticesNoticeIdLettersLetterIdPdfRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionTotalQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2BrandProtectionUrlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2BrandProtectionUrlSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternalSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
