import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssessmentFrameworksFrameworkIdRoute,
  deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRoute,
  deleteAssessmentsAssessmentIdReportsAssessmentReportIdRoute,
  deleteAssessmentsAssessmentIdRoute,
  deleteControlsControlIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAccountOrganizationAdminAccountRoute,
  getAccountStatusRoute,
  getAssessmentFrameworksFrameworkIdRoute,
  getAssessmentFrameworksFrameworkTypeRoute,
  getAssessmentFrameworkShareRequestsRequestTypeRoute,
  getAssessmentReportsRoute,
  getAssessmentsAssessmentIdChangelogsRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRoute,
  getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRoute,
  getAssessmentsAssessmentIdEvidenceFoldersRoute,
  getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRoute,
  getAssessmentsAssessmentIdRoute,
  getAssessmentsRoute,
  getControlsControlIdRoute,
  getControlsControlTypeRoute,
  getDataSourceKeywordsSourceRoute,
  getDelegationsRoute,
  getInsightsAssessmentsAssessmentIdRoute,
  getInsightsControlDomainsByAssessmentAssessmentIdRoute,
  getInsightsControlDomainsRoute,
  getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute,
  getInsightsControlsControlDomainIdRoute,
  getInsightsRoute,
  getNotificationsRoute,
  getServicesRoute,
  getSettingsAttributeRoute,
  getTagsResourceArnRoute,
  postAccountDeregisterAccountRoute,
  postAccountDeregisterOrganizationAdminAccountRoute,
  postAccountRegisterAccountRoute,
  postAccountRegisterOrganizationAdminAccountRoute,
  postAssessmentFrameworksFrameworkIdShareRequestsRoute,
  postAssessmentFrameworksRoute,
  postAssessmentReportsIntegrityRoute,
  postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRoute,
  postAssessmentsAssessmentIdDelegationsRoute,
  postAssessmentsAssessmentIdReportsRoute,
  postAssessmentsRoute,
  postControlsRoute,
  postTagsResourceArnRoute,
  putAssessmentFrameworksFrameworkIdRoute,
  putAssessmentFrameworkShareRequestsRequestIdRoute,
  putAssessmentsAssessmentIdAssociateToAssessmentReportRoute,
  putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRoute,
  putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRoute,
  putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRoute,
  putAssessmentsAssessmentIdControlSetsControlSetIdStatusRoute,
  putAssessmentsAssessmentIdDelegationsRoute,
  putAssessmentsAssessmentIdDisassociateFromAssessmentReportRoute,
  putAssessmentsAssessmentIdRoute,
  putAssessmentsAssessmentIdStatusRoute,
  putControlsControlIdRoute,
  putSettingsRoute,
} from './routes'
import {
  deleteAssessmentFrameworksFrameworkIdRouteHandler,
  deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRouteHandler,
  deleteAssessmentsAssessmentIdReportsAssessmentReportIdRouteHandler,
  deleteAssessmentsAssessmentIdRouteHandler,
  deleteControlsControlIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAccountOrganizationAdminAccountRouteHandler,
  getAccountStatusRouteHandler,
  getAssessmentFrameworksFrameworkIdRouteHandler,
  getAssessmentFrameworksFrameworkTypeRouteHandler,
  getAssessmentFrameworkShareRequestsRequestTypeRouteHandler,
  getAssessmentReportsRouteHandler,
  getAssessmentsAssessmentIdChangelogsRouteHandler,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRouteHandler,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRouteHandler,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRouteHandler,
  getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRouteHandler,
  getAssessmentsAssessmentIdEvidenceFoldersRouteHandler,
  getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRouteHandler,
  getAssessmentsAssessmentIdRouteHandler,
  getAssessmentsRouteHandler,
  getControlsControlIdRouteHandler,
  getControlsControlTypeRouteHandler,
  getDataSourceKeywordsSourceRouteHandler,
  getDelegationsRouteHandler,
  getInsightsAssessmentsAssessmentIdRouteHandler,
  getInsightsControlDomainsByAssessmentAssessmentIdRouteHandler,
  getInsightsControlDomainsRouteHandler,
  getInsightsControlsByAssessmentControlDomainIdAssessmentIdRouteHandler,
  getInsightsControlsControlDomainIdRouteHandler,
  getInsightsRouteHandler,
  getNotificationsRouteHandler,
  getServicesRouteHandler,
  getSettingsAttributeRouteHandler,
  getTagsResourceArnRouteHandler,
  postAccountDeregisterAccountRouteHandler,
  postAccountDeregisterOrganizationAdminAccountRouteHandler,
  postAccountRegisterAccountRouteHandler,
  postAccountRegisterOrganizationAdminAccountRouteHandler,
  postAssessmentFrameworksFrameworkIdShareRequestsRouteHandler,
  postAssessmentFrameworksRouteHandler,
  postAssessmentReportsIntegrityRouteHandler,
  postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRouteHandler,
  postAssessmentsAssessmentIdDelegationsRouteHandler,
  postAssessmentsAssessmentIdReportsRouteHandler,
  postAssessmentsRouteHandler,
  postControlsRouteHandler,
  postTagsResourceArnRouteHandler,
  putAssessmentFrameworksFrameworkIdRouteHandler,
  putAssessmentFrameworkShareRequestsRequestIdRouteHandler,
  putAssessmentsAssessmentIdAssociateToAssessmentReportRouteHandler,
  putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRouteHandler,
  putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRouteHandler,
  putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRouteHandler,
  putAssessmentsAssessmentIdControlSetsControlSetIdStatusRouteHandler,
  putAssessmentsAssessmentIdDelegationsRouteHandler,
  putAssessmentsAssessmentIdDisassociateFromAssessmentReportRouteHandler,
  putAssessmentsAssessmentIdRouteHandler,
  putAssessmentsAssessmentIdStatusRouteHandler,
  putControlsControlIdRouteHandler,
  putSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putAssessmentsAssessmentIdAssociateToAssessmentReportRoute,
    putAssessmentsAssessmentIdAssociateToAssessmentReportRouteHandler,
  )
  .openapi(
    putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRoute,
    putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRouteHandler,
  )
  .openapi(
    postAssessmentsAssessmentIdDelegationsRoute,
    postAssessmentsAssessmentIdDelegationsRouteHandler,
  )
  .openapi(
    putAssessmentsAssessmentIdDelegationsRoute,
    putAssessmentsAssessmentIdDelegationsRouteHandler,
  )
  .openapi(
    putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRoute,
    putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRouteHandler,
  )
  .openapi(
    postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRoute,
    postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRouteHandler,
  )
  .openapi(postAssessmentsRoute, postAssessmentsRouteHandler)
  .openapi(getAssessmentsRoute, getAssessmentsRouteHandler)
  .openapi(postAssessmentFrameworksRoute, postAssessmentFrameworksRouteHandler)
  .openapi(postAssessmentsAssessmentIdReportsRoute, postAssessmentsAssessmentIdReportsRouteHandler)
  .openapi(postControlsRoute, postControlsRouteHandler)
  .openapi(deleteAssessmentsAssessmentIdRoute, deleteAssessmentsAssessmentIdRouteHandler)
  .openapi(getAssessmentsAssessmentIdRoute, getAssessmentsAssessmentIdRouteHandler)
  .openapi(putAssessmentsAssessmentIdRoute, putAssessmentsAssessmentIdRouteHandler)
  .openapi(
    deleteAssessmentFrameworksFrameworkIdRoute,
    deleteAssessmentFrameworksFrameworkIdRouteHandler,
  )
  .openapi(getAssessmentFrameworksFrameworkIdRoute, getAssessmentFrameworksFrameworkIdRouteHandler)
  .openapi(putAssessmentFrameworksFrameworkIdRoute, putAssessmentFrameworksFrameworkIdRouteHandler)
  .openapi(
    deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRoute,
    deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRouteHandler,
  )
  .openapi(
    deleteAssessmentsAssessmentIdReportsAssessmentReportIdRoute,
    deleteAssessmentsAssessmentIdReportsAssessmentReportIdRouteHandler,
  )
  .openapi(deleteControlsControlIdRoute, deleteControlsControlIdRouteHandler)
  .openapi(getControlsControlIdRoute, getControlsControlIdRouteHandler)
  .openapi(putControlsControlIdRoute, putControlsControlIdRouteHandler)
  .openapi(postAccountDeregisterAccountRoute, postAccountDeregisterAccountRouteHandler)
  .openapi(
    postAccountDeregisterOrganizationAdminAccountRoute,
    postAccountDeregisterOrganizationAdminAccountRouteHandler,
  )
  .openapi(
    putAssessmentsAssessmentIdDisassociateFromAssessmentReportRoute,
    putAssessmentsAssessmentIdDisassociateFromAssessmentReportRouteHandler,
  )
  .openapi(getAccountStatusRoute, getAccountStatusRouteHandler)
  .openapi(
    getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRoute,
    getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRouteHandler,
  )
  .openapi(
    getAssessmentsAssessmentIdChangelogsRoute,
    getAssessmentsAssessmentIdChangelogsRouteHandler,
  )
  .openapi(getDelegationsRoute, getDelegationsRouteHandler)
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRoute,
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRouteHandler,
  )
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRoute,
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRouteHandler,
  )
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRoute,
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRouteHandler,
  )
  .openapi(
    getAssessmentsAssessmentIdEvidenceFoldersRoute,
    getAssessmentsAssessmentIdEvidenceFoldersRouteHandler,
  )
  .openapi(
    getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRoute,
    getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRouteHandler,
  )
  .openapi(getInsightsRoute, getInsightsRouteHandler)
  .openapi(getInsightsAssessmentsAssessmentIdRoute, getInsightsAssessmentsAssessmentIdRouteHandler)
  .openapi(getAccountOrganizationAdminAccountRoute, getAccountOrganizationAdminAccountRouteHandler)
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(getSettingsAttributeRoute, getSettingsAttributeRouteHandler)
  .openapi(
    getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute,
    getInsightsControlsByAssessmentControlDomainIdAssessmentIdRouteHandler,
  )
  .openapi(
    getAssessmentFrameworkShareRequestsRequestTypeRoute,
    getAssessmentFrameworkShareRequestsRequestTypeRouteHandler,
  )
  .openapi(
    getAssessmentFrameworksFrameworkTypeRoute,
    getAssessmentFrameworksFrameworkTypeRouteHandler,
  )
  .openapi(getAssessmentReportsRoute, getAssessmentReportsRouteHandler)
  .openapi(getInsightsControlDomainsRoute, getInsightsControlDomainsRouteHandler)
  .openapi(
    getInsightsControlDomainsByAssessmentAssessmentIdRoute,
    getInsightsControlDomainsByAssessmentAssessmentIdRouteHandler,
  )
  .openapi(getInsightsControlsControlDomainIdRoute, getInsightsControlsControlDomainIdRouteHandler)
  .openapi(getControlsControlTypeRoute, getControlsControlTypeRouteHandler)
  .openapi(getDataSourceKeywordsSourceRoute, getDataSourceKeywordsSourceRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postAccountRegisterAccountRoute, postAccountRegisterAccountRouteHandler)
  .openapi(
    postAccountRegisterOrganizationAdminAccountRoute,
    postAccountRegisterOrganizationAdminAccountRouteHandler,
  )
  .openapi(
    postAssessmentFrameworksFrameworkIdShareRequestsRoute,
    postAssessmentFrameworksFrameworkIdShareRequestsRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRoute,
    putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRouteHandler,
  )
  .openapi(
    putAssessmentsAssessmentIdControlSetsControlSetIdStatusRoute,
    putAssessmentsAssessmentIdControlSetsControlSetIdStatusRouteHandler,
  )
  .openapi(
    putAssessmentFrameworkShareRequestsRequestIdRoute,
    putAssessmentFrameworkShareRequestsRequestIdRouteHandler,
  )
  .openapi(putAssessmentsAssessmentIdStatusRoute, putAssessmentsAssessmentIdStatusRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(postAssessmentReportsIntegrityRoute, postAssessmentReportsIntegrityRouteHandler)

export default app
