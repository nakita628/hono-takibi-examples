import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssessmentsAssessmentIdReportsAssessmentReportIdRoute,
  deleteAssessmentsAssessmentIdRoute,
  getAssessmentsAssessmentIdChangelogsRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRoute,
  getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRoute,
  getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRoute,
  getAssessmentsAssessmentIdEvidenceFoldersRoute,
  getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRoute,
  getAssessmentsAssessmentIdRoute,
  getAssessmentsRoute,
  postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRoute,
  postAssessmentsAssessmentIdDelegationsRoute,
  postAssessmentsAssessmentIdReportsRoute,
  postAssessmentsRoute,
  putAssessmentsAssessmentIdAssociateToAssessmentReportRoute,
  putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRoute,
  putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRoute,
  putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRoute,
  putAssessmentsAssessmentIdControlSetsControlSetIdStatusRoute,
  putAssessmentsAssessmentIdDelegationsRoute,
  putAssessmentsAssessmentIdDisassociateFromAssessmentReportRoute,
  putAssessmentsAssessmentIdRoute,
  putAssessmentsAssessmentIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentsHandler = app
  .openapi(putAssessmentsAssessmentIdAssociateToAssessmentReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssessmentsAssessmentIdDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssessmentsAssessmentIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssessmentsAssessmentIdReportsAssessmentReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdDisassociateFromAssessmentReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssessmentsAssessmentIdChangelogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAssessmentsAssessmentIdEvidenceFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdControlSetsControlSetIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssessmentsAssessmentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
