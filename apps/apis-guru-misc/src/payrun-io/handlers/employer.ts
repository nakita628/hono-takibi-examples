import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const deleteEmployerEmployerIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypeCisLineTypeIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdCisLineTypeCisLineTypeIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdCisLineTypeCisLineTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdCisLineTypesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdCisLineTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisLineTypesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisLineTypesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdCisTransactionCisTransactionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdCisTransactionCisTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisTransactionCisTransactionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisTransactionCisTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdCisTransactionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdCisTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdDpsMessageDpsMessageIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdDpsMessageDpsMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdDpsMessageDpsMessageIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdDpsMessageDpsMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdDpsMessageDpsMessageIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdDpsMessageDpsMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdDpsMessageDpsMessageIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdDpsMessageDpsMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdDpsMessagesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdDpsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdDpsMessagesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdDpsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdEmployeeEmployeeIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdEmployeeEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdCommentariesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdCommentariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdEmployeeEmployeeIdPayInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdPayRunsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdPayRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdSecretsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdEmployeeEmployeeIdSecretsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdEmployeeEmployeeIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdEmployeesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEmployeesEffectiveDateSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEmployeesEffectiveDateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdHolidaySchemeHolidaySchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdHolidaySchemesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdHolidaySchemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdHolidaySchemesEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdHolidaySchemesEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalInstructionJournalInstructionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalInstructionJournalInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdJournalInstructionJournalInstructionIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdJournalInstructionJournalInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalInstructionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdJournalInstructionsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdJournalInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLineJournalLineIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLineJournalLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLineJournalLineIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLineJournalLineIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLinesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLinesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdJournalLinesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdJournalLinesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdNominalCodeNominalCodeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdNominalCodeNominalCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdNominalCodeNominalCodeIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdNominalCodeNominalCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdNominalCodeNominalCodeIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdNominalCodeNominalCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdNominalCodesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdNominalCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdNominalCodesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdNominalCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPayCodePayCodeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPayCodePayCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdPayCodePayCodeIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdPayCodePayCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPayCodePayCodeIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPayCodePayCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPayCodePayCodeIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdPayCodesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdPayCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPayCodesEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPayCodesEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPaySchedulePayScheduleIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPaySchedulePayScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPaySchedulePayScheduleIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPaySchedulePayScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulePayScheduleIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdPaySchedulesRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdPaySchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPaySchedulesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPaySchedulesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPensionPensionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPensionPensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionPensionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionPensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdPensionPensionIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdPensionPensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdPensionPensionIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdPensionPensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionPensionIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionPensionIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdPensionPensionIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdPensionPensionIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionPensionIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionPensionIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdPensionsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdPensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdPensionsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdPensionsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdReportLineReportLineIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdReportLineReportLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdReportLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdReportLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdReportingInstructionReportingInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdReportingInstructionReportingInstructionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdReportingInstructionReportingInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdReportingInstructionReportingInstructionIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdReportingInstructionReportingInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdReportingInstructionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdReportingInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdReportingInstructionsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdReportingInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRevisionRevisionNumberSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRevisionRevisionNumberSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRevisionsSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRevisionsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionRtiTransactionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionsSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdRtiTransactionsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdRtiTransactionsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSecretSecretIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSecretSecretIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSecretSecretIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSecretSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSecretsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdSecretsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdSubContractorSubContractorIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdSubContractorSubContractorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSubContractorSubContractorIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSubContractorSubContractorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRouteHandler: RouteHandler<
  typeof patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdRevisionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployerEmployerIdSubContractorsRouteHandler: RouteHandler<
  typeof postEmployerEmployerIdSubContractorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSubContractorsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSubContractorsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdTagTagIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdTagTagIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdTagsEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdTagsEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRouteHandler: RouteHandler<
  typeof putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionsTagTagIdRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionsTagTagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdThirdPartyTransactionsTagsRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdThirdPartyTransactionsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmployerEmployerIdEffectiveDateRouteHandler: RouteHandler<
  typeof deleteEmployerEmployerIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEffectiveDateRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEffectiveDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployerEmployerIdEffectiveDateSummaryRouteHandler: RouteHandler<
  typeof getEmployerEmployerIdEffectiveDateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
