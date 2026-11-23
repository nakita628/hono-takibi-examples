import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  deleteEmployerEmployerIdCisTransactionCisTransactionIdRoute,
  deleteEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  deleteEmployerEmployerIdEffectiveDateRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  deleteEmployerEmployerIdNominalCodeNominalCodeIdRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  deleteEmployerEmployerIdPensionPensionIdEffectiveDateRoute,
  deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdPensionPensionIdRoute,
  deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
  deleteEmployerEmployerIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdRoute,
  deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRoute,
  deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  deleteEmployerEmployerIdSecretSecretIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  deleteEmployerEmployerIdTagTagIdRoute,
  deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute,
  deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  getEmployerEmployerIdCisLineTypesRoute,
  getEmployerEmployerIdCisLineTypesTagsRoute,
  getEmployerEmployerIdCisLineTypesTagTagIdRoute,
  getEmployerEmployerIdCisTransactionCisTransactionIdRoute,
  getEmployerEmployerIdCisTransactionsRoute,
  getEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  getEmployerEmployerIdDpsMessagesRoute,
  getEmployerEmployerIdEffectiveDateRoute,
  getEmployerEmployerIdEffectiveDateSummaryRoute,
  getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdCommentariesRoute,
  getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute,
  getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryRoute,
  getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayRunsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryRoute,
  getEmployerEmployerIdEmployeeEmployeeIdRevisionsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryRoute,
  getEmployerEmployerIdEmployeeEmployeeIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdSecretsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdSummaryRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  getEmployerEmployerIdEmployeesEffectiveDateRoute,
  getEmployerEmployerIdEmployeesEffectiveDateSummaryRoute,
  getEmployerEmployerIdEmployeesRoute,
  getEmployerEmployerIdEmployeesSummaryRoute,
  getEmployerEmployerIdEmployeesTagsRoute,
  getEmployerEmployerIdEmployeesTagTagIdRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  getEmployerEmployerIdHolidaySchemesEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemesRoute,
  getEmployerEmployerIdHolidaySchemesTagsRoute,
  getEmployerEmployerIdHolidaySchemesTagTagIdRoute,
  getEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  getEmployerEmployerIdJournalInstructionsRoute,
  getEmployerEmployerIdJournalLineJournalLineIdRoute,
  getEmployerEmployerIdJournalLineJournalLineIdTagsRoute,
  getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  getEmployerEmployerIdJournalLinesRoute,
  getEmployerEmployerIdJournalLinesTagsRoute,
  getEmployerEmployerIdJournalLinesTagTagIdRoute,
  getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRoute,
  getEmployerEmployerIdNominalCodeNominalCodeIdRoute,
  getEmployerEmployerIdNominalCodesRoute,
  getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute,
  getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdPayCodePayCodeIdRevisionsRoute,
  getEmployerEmployerIdPayCodePayCodeIdRoute,
  getEmployerEmployerIdPayCodePayCodeIdTagsRoute,
  getEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  getEmployerEmployerIdPayCodesEffectiveDateRoute,
  getEmployerEmployerIdPayCodesRoute,
  getEmployerEmployerIdPayCodesTagsRoute,
  getEmployerEmployerIdPayCodesTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  getEmployerEmployerIdPaySchedulesRoute,
  getEmployerEmployerIdPaySchedulesTagsRoute,
  getEmployerEmployerIdPaySchedulesTagTagIdRoute,
  getEmployerEmployerIdPensionPensionIdEffectiveDateRoute,
  getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdPensionPensionIdRevisionsRoute,
  getEmployerEmployerIdPensionPensionIdRoute,
  getEmployerEmployerIdPensionsEffectiveDateRoute,
  getEmployerEmployerIdPensionsRoute,
  getEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
  getEmployerEmployerIdReportingInstructionsRoute,
  getEmployerEmployerIdReportLineReportLineIdRoute,
  getEmployerEmployerIdReportLinesRoute,
  getEmployerEmployerIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdRevisionRevisionNumberSummaryRoute,
  getEmployerEmployerIdRevisionsRoute,
  getEmployerEmployerIdRevisionsSummaryRoute,
  getEmployerEmployerIdRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  getEmployerEmployerIdRtiTransactionsRoute,
  getEmployerEmployerIdRtiTransactionsSummaryRoute,
  getEmployerEmployerIdRtiTransactionsTagsRoute,
  getEmployerEmployerIdRtiTransactionsTagTagIdRoute,
  getEmployerEmployerIdSecretSecretIdRoute,
  getEmployerEmployerIdSecretsRoute,
  getEmployerEmployerIdSubContractorsEffectiveDateRoute,
  getEmployerEmployerIdSubContractorsRoute,
  getEmployerEmployerIdSubContractorsTagsRoute,
  getEmployerEmployerIdSubContractorsTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRevisionsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  getEmployerEmployerIdSummaryRoute,
  getEmployerEmployerIdTagsEffectiveDateRoute,
  getEmployerEmployerIdTagsRoute,
  getEmployerEmployerIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdTagTagIdRoute,
  getEmployerEmployerIdThirdPartyTransactionsRoute,
  getEmployerEmployerIdThirdPartyTransactionsTagsRoute,
  getEmployerEmployerIdThirdPartyTransactionsTagTagIdRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
  patchEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  patchEmployerEmployerIdEmployeeEmployeeIdRoute,
  patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  patchEmployerEmployerIdPayCodePayCodeIdRoute,
  patchEmployerEmployerIdPensionPensionIdRoute,
  patchEmployerEmployerIdRoute,
  patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  patchEmployerEmployerIdSubContractorSubContractorIdRoute,
  postEmployerEmployerIdCisLineTypesRoute,
  postEmployerEmployerIdDpsMessagesRoute,
  postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute,
  postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute,
  postEmployerEmployerIdEmployeeEmployeeIdSecretsRoute,
  postEmployerEmployerIdEmployeesRoute,
  postEmployerEmployerIdHolidaySchemesRoute,
  postEmployerEmployerIdJournalInstructionsRoute,
  postEmployerEmployerIdNominalCodesRoute,
  postEmployerEmployerIdPayCodesRoute,
  postEmployerEmployerIdPaySchedulesRoute,
  postEmployerEmployerIdPensionsRoute,
  postEmployerEmployerIdReportingInstructionsRoute,
  postEmployerEmployerIdSecretsRoute,
  postEmployerEmployerIdSubContractorsRoute,
  postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute,
  putEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  putEmployerEmployerIdDpsMessageDpsMessageIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute,
  putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  putEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  putEmployerEmployerIdNominalCodeNominalCodeIdRoute,
  putEmployerEmployerIdPayCodePayCodeIdRoute,
  putEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  putEmployerEmployerIdPensionPensionIdRoute,
  putEmployerEmployerIdReportingInstructionReportingInstructionIdRoute,
  putEmployerEmployerIdRoute,
  putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  putEmployerEmployerIdSecretSecretIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  putEmployerEmployerIdTagTagIdRoute,
  putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerHandler = app
  .openapi(deleteEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdCisLineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdCisTransactionCisTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisTransactionCisTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdDpsMessageDpsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdDpsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdDpsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdEmployeeEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdCommentariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeeEmployeeIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdHolidaySchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdNominalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdNominalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPaySchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPensionPensionIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportLineReportLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdReportingInstructionReportingInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdReportingInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdReportingInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionRevisionNumberSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSubContractorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
