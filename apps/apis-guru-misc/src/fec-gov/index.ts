import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuditCaseIndexRoute,
  getAuditCategoryIndexRoute,
  getAuditPrimaryCategoryIndexRoute,
  getCalendarDatesExportIndexRoute,
  getCalendarDatesIndexRoute,
  getCandidateCandidateIdCommitteesHistoryCycleIndexRoute,
  getCandidateCandidateIdCommitteesHistoryIndexRoute,
  getCandidateCandidateIdCommitteesIndexRoute,
  getCandidateCandidateIdFilingsIndexRoute,
  getCandidateCandidateIdHistoryCycleIndexRoute,
  getCandidateCandidateIdHistoryIndexRoute,
  getCandidateCandidateIdIndexRoute,
  getCandidateCandidateIdTotalsIndexRoute,
  getCandidatesIndexRoute,
  getCandidatesSearchIndexRoute,
  getCandidatesTotalsAggregatesIndexRoute,
  getCandidatesTotalsByOfficeByPartyIndexRoute,
  getCandidatesTotalsByOfficeIndexRoute,
  getCandidatesTotalsIndexRoute,
  getCommitteeCommitteeIdCandidatesHistoryCycleIndexRoute,
  getCommitteeCommitteeIdCandidatesHistoryIndexRoute,
  getCommitteeCommitteeIdCandidatesIndexRoute,
  getCommitteeCommitteeIdFilingsIndexRoute,
  getCommitteeCommitteeIdHistoryCycleIndexRoute,
  getCommitteeCommitteeIdHistoryIndexRoute,
  getCommitteeCommitteeIdIndexRoute,
  getCommitteeCommitteeIdReportsIndexRoute,
  getCommitteeCommitteeIdTotalsIndexRoute,
  getCommitteesIndexRoute,
  getCommunicationCostsAggregatesIndexRoute,
  getCommunicationCostsByCandidateIndexRoute,
  getCommunicationCostsIndexRoute,
  getCommunicationCostsTotalsByCandidateIndexRoute,
  getEfileFilingsIndexRoute,
  getEfileReportsHouseSenateIndexRoute,
  getEfileReportsPacPartyIndexRoute,
  getEfileReportsPresidentialIndexRoute,
  getElectionDatesIndexRoute,
  getElectioneeringAggregatesIndexRoute,
  getElectioneeringByCandidateIndexRoute,
  getElectioneeringIndexRoute,
  getElectioneeringTotalsByCandidateIndexRoute,
  getElectionsIndexRoute,
  getElectionsSearchIndexRoute,
  getElectionsSummaryIndexRoute,
  getFilingsIndexRoute,
  getLegalSearchIndexRoute,
  getNamesAuditCandidatesIndexRoute,
  getNamesAuditCommitteesIndexRoute,
  getNamesCandidatesIndexRoute,
  getNamesCommitteesIndexRoute,
  getOperationsLogIndexRoute,
  getPresidentialContributionsByCandidateIndexRoute,
  getPresidentialContributionsBySizeIndexRoute,
  getPresidentialContributionsByStateIndexRoute,
  getPresidentialCoverageEndDateIndexRoute,
  getPresidentialFinancialSummaryIndexRoute,
  getRadAnalystIndexRoute,
  getReportingDatesIndexRoute,
  getReportsEntityTypeIndexRoute,
  getSchedulesScheduleAByEmployerIndexRoute,
  getSchedulesScheduleAByOccupationIndexRoute,
  getSchedulesScheduleABySizeByCandidateIndexRoute,
  getSchedulesScheduleABySizeIndexRoute,
  getSchedulesScheduleAByStateByCandidateIndexRoute,
  getSchedulesScheduleAByStateByCandidateTotalsIndexRoute,
  getSchedulesScheduleAByStateIndexRoute,
  getSchedulesScheduleAByStateTotalsIndexRoute,
  getSchedulesScheduleAByZipIndexRoute,
  getSchedulesScheduleAEfileIndexRoute,
  getSchedulesScheduleAIndexRoute,
  getSchedulesScheduleASubIdIndexRoute,
  getSchedulesScheduleBByPurposeIndexRoute,
  getSchedulesScheduleBByRecipientIdIndexRoute,
  getSchedulesScheduleBByRecipientIndexRoute,
  getSchedulesScheduleBEfileIndexRoute,
  getSchedulesScheduleBIndexRoute,
  getSchedulesScheduleBSubIdIndexRoute,
  getSchedulesScheduleCIndexRoute,
  getSchedulesScheduleCSubIdIndexRoute,
  getSchedulesScheduleDIndexRoute,
  getSchedulesScheduleDSubIdIndexRoute,
  getSchedulesScheduleEByCandidateIndexRoute,
  getSchedulesScheduleEEfileIndexRoute,
  getSchedulesScheduleEIndexRoute,
  getSchedulesScheduleETotalsByCandidateIndexRoute,
  getSchedulesScheduleFIndexRoute,
  getSchedulesScheduleFSubIdIndexRoute,
  getStateElectionOfficeIndexRoute,
  getTotalsByEntityIndexRoute,
  getTotalsEntityTypeIndexRoute,
} from './routes'
import {
  getAuditCaseIndexRouteHandler,
  getAuditCategoryIndexRouteHandler,
  getAuditPrimaryCategoryIndexRouteHandler,
  getCalendarDatesExportIndexRouteHandler,
  getCalendarDatesIndexRouteHandler,
  getCandidateCandidateIdCommitteesHistoryCycleIndexRouteHandler,
  getCandidateCandidateIdCommitteesHistoryIndexRouteHandler,
  getCandidateCandidateIdCommitteesIndexRouteHandler,
  getCandidateCandidateIdFilingsIndexRouteHandler,
  getCandidateCandidateIdHistoryCycleIndexRouteHandler,
  getCandidateCandidateIdHistoryIndexRouteHandler,
  getCandidateCandidateIdIndexRouteHandler,
  getCandidateCandidateIdTotalsIndexRouteHandler,
  getCandidatesIndexRouteHandler,
  getCandidatesSearchIndexRouteHandler,
  getCandidatesTotalsAggregatesIndexRouteHandler,
  getCandidatesTotalsByOfficeByPartyIndexRouteHandler,
  getCandidatesTotalsByOfficeIndexRouteHandler,
  getCandidatesTotalsIndexRouteHandler,
  getCommitteeCommitteeIdCandidatesHistoryCycleIndexRouteHandler,
  getCommitteeCommitteeIdCandidatesHistoryIndexRouteHandler,
  getCommitteeCommitteeIdCandidatesIndexRouteHandler,
  getCommitteeCommitteeIdFilingsIndexRouteHandler,
  getCommitteeCommitteeIdHistoryCycleIndexRouteHandler,
  getCommitteeCommitteeIdHistoryIndexRouteHandler,
  getCommitteeCommitteeIdIndexRouteHandler,
  getCommitteeCommitteeIdReportsIndexRouteHandler,
  getCommitteeCommitteeIdTotalsIndexRouteHandler,
  getCommitteesIndexRouteHandler,
  getCommunicationCostsAggregatesIndexRouteHandler,
  getCommunicationCostsByCandidateIndexRouteHandler,
  getCommunicationCostsIndexRouteHandler,
  getCommunicationCostsTotalsByCandidateIndexRouteHandler,
  getEfileFilingsIndexRouteHandler,
  getEfileReportsHouseSenateIndexRouteHandler,
  getEfileReportsPacPartyIndexRouteHandler,
  getEfileReportsPresidentialIndexRouteHandler,
  getElectionDatesIndexRouteHandler,
  getElectioneeringAggregatesIndexRouteHandler,
  getElectioneeringByCandidateIndexRouteHandler,
  getElectioneeringIndexRouteHandler,
  getElectioneeringTotalsByCandidateIndexRouteHandler,
  getElectionsIndexRouteHandler,
  getElectionsSearchIndexRouteHandler,
  getElectionsSummaryIndexRouteHandler,
  getFilingsIndexRouteHandler,
  getLegalSearchIndexRouteHandler,
  getNamesAuditCandidatesIndexRouteHandler,
  getNamesAuditCommitteesIndexRouteHandler,
  getNamesCandidatesIndexRouteHandler,
  getNamesCommitteesIndexRouteHandler,
  getOperationsLogIndexRouteHandler,
  getPresidentialContributionsByCandidateIndexRouteHandler,
  getPresidentialContributionsBySizeIndexRouteHandler,
  getPresidentialContributionsByStateIndexRouteHandler,
  getPresidentialCoverageEndDateIndexRouteHandler,
  getPresidentialFinancialSummaryIndexRouteHandler,
  getRadAnalystIndexRouteHandler,
  getReportingDatesIndexRouteHandler,
  getReportsEntityTypeIndexRouteHandler,
  getSchedulesScheduleAByEmployerIndexRouteHandler,
  getSchedulesScheduleAByOccupationIndexRouteHandler,
  getSchedulesScheduleABySizeByCandidateIndexRouteHandler,
  getSchedulesScheduleABySizeIndexRouteHandler,
  getSchedulesScheduleAByStateByCandidateIndexRouteHandler,
  getSchedulesScheduleAByStateByCandidateTotalsIndexRouteHandler,
  getSchedulesScheduleAByStateIndexRouteHandler,
  getSchedulesScheduleAByStateTotalsIndexRouteHandler,
  getSchedulesScheduleAByZipIndexRouteHandler,
  getSchedulesScheduleAEfileIndexRouteHandler,
  getSchedulesScheduleAIndexRouteHandler,
  getSchedulesScheduleASubIdIndexRouteHandler,
  getSchedulesScheduleBByPurposeIndexRouteHandler,
  getSchedulesScheduleBByRecipientIdIndexRouteHandler,
  getSchedulesScheduleBByRecipientIndexRouteHandler,
  getSchedulesScheduleBEfileIndexRouteHandler,
  getSchedulesScheduleBIndexRouteHandler,
  getSchedulesScheduleBSubIdIndexRouteHandler,
  getSchedulesScheduleCIndexRouteHandler,
  getSchedulesScheduleCSubIdIndexRouteHandler,
  getSchedulesScheduleDIndexRouteHandler,
  getSchedulesScheduleDSubIdIndexRouteHandler,
  getSchedulesScheduleEByCandidateIndexRouteHandler,
  getSchedulesScheduleEEfileIndexRouteHandler,
  getSchedulesScheduleEIndexRouteHandler,
  getSchedulesScheduleETotalsByCandidateIndexRouteHandler,
  getSchedulesScheduleFIndexRouteHandler,
  getSchedulesScheduleFSubIdIndexRouteHandler,
  getStateElectionOfficeIndexRouteHandler,
  getTotalsByEntityIndexRouteHandler,
  getTotalsEntityTypeIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuditCaseIndexRoute, getAuditCaseIndexRouteHandler)
  .openapi(getAuditCategoryIndexRoute, getAuditCategoryIndexRouteHandler)
  .openapi(getAuditPrimaryCategoryIndexRoute, getAuditPrimaryCategoryIndexRouteHandler)
  .openapi(getCalendarDatesIndexRoute, getCalendarDatesIndexRouteHandler)
  .openapi(getCalendarDatesExportIndexRoute, getCalendarDatesExportIndexRouteHandler)
  .openapi(getCandidateCandidateIdIndexRoute, getCandidateCandidateIdIndexRouteHandler)
  .openapi(
    getCandidateCandidateIdCommitteesIndexRoute,
    getCandidateCandidateIdCommitteesIndexRouteHandler,
  )
  .openapi(
    getCandidateCandidateIdCommitteesHistoryIndexRoute,
    getCandidateCandidateIdCommitteesHistoryIndexRouteHandler,
  )
  .openapi(
    getCandidateCandidateIdCommitteesHistoryCycleIndexRoute,
    getCandidateCandidateIdCommitteesHistoryCycleIndexRouteHandler,
  )
  .openapi(
    getCandidateCandidateIdFilingsIndexRoute,
    getCandidateCandidateIdFilingsIndexRouteHandler,
  )
  .openapi(
    getCandidateCandidateIdHistoryIndexRoute,
    getCandidateCandidateIdHistoryIndexRouteHandler,
  )
  .openapi(
    getCandidateCandidateIdHistoryCycleIndexRoute,
    getCandidateCandidateIdHistoryCycleIndexRouteHandler,
  )
  .openapi(getCandidateCandidateIdTotalsIndexRoute, getCandidateCandidateIdTotalsIndexRouteHandler)
  .openapi(getCandidatesIndexRoute, getCandidatesIndexRouteHandler)
  .openapi(getCandidatesSearchIndexRoute, getCandidatesSearchIndexRouteHandler)
  .openapi(getCandidatesTotalsIndexRoute, getCandidatesTotalsIndexRouteHandler)
  .openapi(getCandidatesTotalsAggregatesIndexRoute, getCandidatesTotalsAggregatesIndexRouteHandler)
  .openapi(getCandidatesTotalsByOfficeIndexRoute, getCandidatesTotalsByOfficeIndexRouteHandler)
  .openapi(
    getCandidatesTotalsByOfficeByPartyIndexRoute,
    getCandidatesTotalsByOfficeByPartyIndexRouteHandler,
  )
  .openapi(getCommitteeCommitteeIdIndexRoute, getCommitteeCommitteeIdIndexRouteHandler)
  .openapi(
    getCommitteeCommitteeIdCandidatesIndexRoute,
    getCommitteeCommitteeIdCandidatesIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdCandidatesHistoryIndexRoute,
    getCommitteeCommitteeIdCandidatesHistoryIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdCandidatesHistoryCycleIndexRoute,
    getCommitteeCommitteeIdCandidatesHistoryCycleIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdFilingsIndexRoute,
    getCommitteeCommitteeIdFilingsIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdHistoryIndexRoute,
    getCommitteeCommitteeIdHistoryIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdHistoryCycleIndexRoute,
    getCommitteeCommitteeIdHistoryCycleIndexRouteHandler,
  )
  .openapi(
    getCommitteeCommitteeIdReportsIndexRoute,
    getCommitteeCommitteeIdReportsIndexRouteHandler,
  )
  .openapi(getCommitteeCommitteeIdTotalsIndexRoute, getCommitteeCommitteeIdTotalsIndexRouteHandler)
  .openapi(getCommitteesIndexRoute, getCommitteesIndexRouteHandler)
  .openapi(getCommunicationCostsIndexRoute, getCommunicationCostsIndexRouteHandler)
  .openapi(
    getCommunicationCostsAggregatesIndexRoute,
    getCommunicationCostsAggregatesIndexRouteHandler,
  )
  .openapi(
    getCommunicationCostsByCandidateIndexRoute,
    getCommunicationCostsByCandidateIndexRouteHandler,
  )
  .openapi(
    getCommunicationCostsTotalsByCandidateIndexRoute,
    getCommunicationCostsTotalsByCandidateIndexRouteHandler,
  )
  .openapi(getEfileFilingsIndexRoute, getEfileFilingsIndexRouteHandler)
  .openapi(getEfileReportsHouseSenateIndexRoute, getEfileReportsHouseSenateIndexRouteHandler)
  .openapi(getEfileReportsPacPartyIndexRoute, getEfileReportsPacPartyIndexRouteHandler)
  .openapi(getEfileReportsPresidentialIndexRoute, getEfileReportsPresidentialIndexRouteHandler)
  .openapi(getElectionDatesIndexRoute, getElectionDatesIndexRouteHandler)
  .openapi(getElectioneeringIndexRoute, getElectioneeringIndexRouteHandler)
  .openapi(getElectioneeringAggregatesIndexRoute, getElectioneeringAggregatesIndexRouteHandler)
  .openapi(getElectioneeringByCandidateIndexRoute, getElectioneeringByCandidateIndexRouteHandler)
  .openapi(
    getElectioneeringTotalsByCandidateIndexRoute,
    getElectioneeringTotalsByCandidateIndexRouteHandler,
  )
  .openapi(getElectionsIndexRoute, getElectionsIndexRouteHandler)
  .openapi(getElectionsSearchIndexRoute, getElectionsSearchIndexRouteHandler)
  .openapi(getElectionsSummaryIndexRoute, getElectionsSummaryIndexRouteHandler)
  .openapi(getFilingsIndexRoute, getFilingsIndexRouteHandler)
  .openapi(getLegalSearchIndexRoute, getLegalSearchIndexRouteHandler)
  .openapi(getNamesAuditCandidatesIndexRoute, getNamesAuditCandidatesIndexRouteHandler)
  .openapi(getNamesAuditCommitteesIndexRoute, getNamesAuditCommitteesIndexRouteHandler)
  .openapi(getNamesCandidatesIndexRoute, getNamesCandidatesIndexRouteHandler)
  .openapi(getNamesCommitteesIndexRoute, getNamesCommitteesIndexRouteHandler)
  .openapi(getOperationsLogIndexRoute, getOperationsLogIndexRouteHandler)
  .openapi(
    getPresidentialContributionsByCandidateIndexRoute,
    getPresidentialContributionsByCandidateIndexRouteHandler,
  )
  .openapi(
    getPresidentialContributionsBySizeIndexRoute,
    getPresidentialContributionsBySizeIndexRouteHandler,
  )
  .openapi(
    getPresidentialContributionsByStateIndexRoute,
    getPresidentialContributionsByStateIndexRouteHandler,
  )
  .openapi(
    getPresidentialCoverageEndDateIndexRoute,
    getPresidentialCoverageEndDateIndexRouteHandler,
  )
  .openapi(
    getPresidentialFinancialSummaryIndexRoute,
    getPresidentialFinancialSummaryIndexRouteHandler,
  )
  .openapi(getRadAnalystIndexRoute, getRadAnalystIndexRouteHandler)
  .openapi(getReportingDatesIndexRoute, getReportingDatesIndexRouteHandler)
  .openapi(getReportsEntityTypeIndexRoute, getReportsEntityTypeIndexRouteHandler)
  .openapi(getSchedulesScheduleAIndexRoute, getSchedulesScheduleAIndexRouteHandler)
  .openapi(
    getSchedulesScheduleAByEmployerIndexRoute,
    getSchedulesScheduleAByEmployerIndexRouteHandler,
  )
  .openapi(
    getSchedulesScheduleAByOccupationIndexRoute,
    getSchedulesScheduleAByOccupationIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleABySizeIndexRoute, getSchedulesScheduleABySizeIndexRouteHandler)
  .openapi(
    getSchedulesScheduleABySizeByCandidateIndexRoute,
    getSchedulesScheduleABySizeByCandidateIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleAByStateIndexRoute, getSchedulesScheduleAByStateIndexRouteHandler)
  .openapi(
    getSchedulesScheduleAByStateByCandidateIndexRoute,
    getSchedulesScheduleAByStateByCandidateIndexRouteHandler,
  )
  .openapi(
    getSchedulesScheduleAByStateByCandidateTotalsIndexRoute,
    getSchedulesScheduleAByStateByCandidateTotalsIndexRouteHandler,
  )
  .openapi(
    getSchedulesScheduleAByStateTotalsIndexRoute,
    getSchedulesScheduleAByStateTotalsIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleAByZipIndexRoute, getSchedulesScheduleAByZipIndexRouteHandler)
  .openapi(getSchedulesScheduleAEfileIndexRoute, getSchedulesScheduleAEfileIndexRouteHandler)
  .openapi(getSchedulesScheduleASubIdIndexRoute, getSchedulesScheduleASubIdIndexRouteHandler)
  .openapi(getSchedulesScheduleBIndexRoute, getSchedulesScheduleBIndexRouteHandler)
  .openapi(
    getSchedulesScheduleBByPurposeIndexRoute,
    getSchedulesScheduleBByPurposeIndexRouteHandler,
  )
  .openapi(
    getSchedulesScheduleBByRecipientIndexRoute,
    getSchedulesScheduleBByRecipientIndexRouteHandler,
  )
  .openapi(
    getSchedulesScheduleBByRecipientIdIndexRoute,
    getSchedulesScheduleBByRecipientIdIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleBEfileIndexRoute, getSchedulesScheduleBEfileIndexRouteHandler)
  .openapi(getSchedulesScheduleBSubIdIndexRoute, getSchedulesScheduleBSubIdIndexRouteHandler)
  .openapi(getSchedulesScheduleCIndexRoute, getSchedulesScheduleCIndexRouteHandler)
  .openapi(getSchedulesScheduleCSubIdIndexRoute, getSchedulesScheduleCSubIdIndexRouteHandler)
  .openapi(getSchedulesScheduleDIndexRoute, getSchedulesScheduleDIndexRouteHandler)
  .openapi(getSchedulesScheduleDSubIdIndexRoute, getSchedulesScheduleDSubIdIndexRouteHandler)
  .openapi(getSchedulesScheduleEIndexRoute, getSchedulesScheduleEIndexRouteHandler)
  .openapi(
    getSchedulesScheduleEByCandidateIndexRoute,
    getSchedulesScheduleEByCandidateIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleEEfileIndexRoute, getSchedulesScheduleEEfileIndexRouteHandler)
  .openapi(
    getSchedulesScheduleETotalsByCandidateIndexRoute,
    getSchedulesScheduleETotalsByCandidateIndexRouteHandler,
  )
  .openapi(getSchedulesScheduleFIndexRoute, getSchedulesScheduleFIndexRouteHandler)
  .openapi(getSchedulesScheduleFSubIdIndexRoute, getSchedulesScheduleFSubIdIndexRouteHandler)
  .openapi(getStateElectionOfficeIndexRoute, getStateElectionOfficeIndexRouteHandler)
  .openapi(getTotalsByEntityIndexRoute, getTotalsByEntityIndexRouteHandler)
  .openapi(getTotalsEntityTypeIndexRoute, getTotalsEntityTypeIndexRouteHandler)

export default app
