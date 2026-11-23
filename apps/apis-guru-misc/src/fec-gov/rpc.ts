import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuditCaseIndex(
  args: InferRequestType<(typeof client)['audit-case']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audit-case'].index.$get(args, options))
}

export async function getAuditCategoryIndex(
  args: InferRequestType<(typeof client)['audit-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audit-category'].index.$get(args, options))
}

export async function getAuditPrimaryCategoryIndex(
  args: InferRequestType<(typeof client)['audit-primary-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audit-primary-category'].index.$get(args, options))
}

export async function getCalendarDatesIndex(
  args: InferRequestType<(typeof client)['calendar-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calendar-dates'].index.$get(args, options))
}

export async function getCalendarDatesExportIndex(
  args: InferRequestType<(typeof client)['calendar-dates']['export']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['calendar-dates'].export.index.$get(args, options))
}

export async function getCandidateCandidateIdIndex(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidate[':candidate_id'].index.$get(args, options))
}

export async function getCandidateCandidateIdCommitteesIndex(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['committees']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidate[':candidate_id'].committees.index.$get(args, options))
}

export async function getCandidateCandidateIdCommitteesHistoryIndex(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.candidate[':candidate_id'].committees.history.index.$get(args, options),
  )
}

export async function getCandidateCandidateIdCommitteesHistoryCycleIndex(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['committees']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.candidate[':candidate_id'].committees.history[':cycle'].index.$get(args, options),
  )
}

export async function getCandidateCandidateIdFilingsIndex(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['filings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidate[':candidate_id'].filings.index.$get(args, options))
}

export async function getCandidateCandidateIdHistoryIndex(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['history']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidate[':candidate_id'].history.index.$get(args, options))
}

export async function getCandidateCandidateIdHistoryCycleIndex(
  args: InferRequestType<
    (typeof client.candidate)[':candidate_id']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.candidate[':candidate_id'].history[':cycle'].index.$get(args, options),
  )
}

export async function getCandidateCandidateIdTotalsIndex(
  args: InferRequestType<(typeof client.candidate)[':candidate_id']['totals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidate[':candidate_id'].totals.index.$get(args, options))
}

export async function getCandidatesIndex(
  args: InferRequestType<typeof client.candidates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.index.$get(args, options))
}

export async function getCandidatesSearchIndex(
  args: InferRequestType<typeof client.candidates.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.search.index.$get(args, options))
}

export async function getCandidatesTotalsIndex(
  args: InferRequestType<typeof client.candidates.totals.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.totals.index.$get(args, options))
}

export async function getCandidatesTotalsAggregatesIndex(
  args: InferRequestType<typeof client.candidates.totals.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.totals.aggregates.index.$get(args, options))
}

export async function getCandidatesTotalsByOfficeIndex(
  args: InferRequestType<typeof client.candidates.totals.by_office.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.totals.by_office.index.$get(args, options))
}

export async function getCandidatesTotalsByOfficeByPartyIndex(
  args: InferRequestType<typeof client.candidates.totals.by_office.by_party.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.candidates.totals.by_office.by_party.index.$get(args, options))
}

export async function getCommitteeCommitteeIdIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].index.$get(args, options))
}

export async function getCommitteeCommitteeIdCandidatesIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['candidates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].candidates.index.$get(args, options))
}

export async function getCommitteeCommitteeIdCandidatesHistoryIndex(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':committee_id'].candidates.history.index.$get(args, options),
  )
}

export async function getCommitteeCommitteeIdCandidatesHistoryCycleIndex(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['candidates']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':committee_id'].candidates.history[':cycle'].index.$get(args, options),
  )
}

export async function getCommitteeCommitteeIdFilingsIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['filings']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].filings.index.$get(args, options))
}

export async function getCommitteeCommitteeIdHistoryIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['history']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].history.index.$get(args, options))
}

export async function getCommitteeCommitteeIdHistoryCycleIndex(
  args: InferRequestType<
    (typeof client.committee)[':committee_id']['history'][':cycle']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':committee_id'].history[':cycle'].index.$get(args, options),
  )
}

export async function getCommitteeCommitteeIdReportsIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['reports']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].reports.index.$get(args, options))
}

export async function getCommitteeCommitteeIdTotalsIndex(
  args: InferRequestType<(typeof client.committee)[':committee_id']['totals']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':committee_id'].totals.index.$get(args, options))
}

export async function getCommitteesIndex(
  args: InferRequestType<typeof client.committees.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committees.index.$get(args, options))
}

export async function getCommunicationCostsIndex(
  args: InferRequestType<typeof client.communication_costs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.communication_costs.index.$get(args, options))
}

export async function getCommunicationCostsAggregatesIndex(
  args: InferRequestType<typeof client.communication_costs.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.communication_costs.aggregates.index.$get(args, options))
}

export async function getCommunicationCostsByCandidateIndex(
  args: InferRequestType<typeof client.communication_costs.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.communication_costs.by_candidate.index.$get(args, options))
}

export async function getCommunicationCostsTotalsByCandidateIndex(
  args: InferRequestType<typeof client.communication_costs.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.communication_costs.totals.by_candidate.index.$get(args, options),
  )
}

export async function getEfileFilingsIndex(
  args: InferRequestType<typeof client.efile.filings.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.efile.filings.index.$get(args, options))
}

export async function getEfileReportsHouseSenateIndex(
  args: InferRequestType<(typeof client.efile.reports)['house-senate']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.efile.reports['house-senate'].index.$get(args, options))
}

export async function getEfileReportsPacPartyIndex(
  args: InferRequestType<(typeof client.efile.reports)['pac-party']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.efile.reports['pac-party'].index.$get(args, options))
}

export async function getEfileReportsPresidentialIndex(
  args: InferRequestType<typeof client.efile.reports.presidential.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.efile.reports.presidential.index.$get(args, options))
}

export async function getElectionDatesIndex(
  args: InferRequestType<(typeof client)['election-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['election-dates'].index.$get(args, options))
}

export async function getElectioneeringIndex(
  args: InferRequestType<typeof client.electioneering.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.electioneering.index.$get(args, options))
}

export async function getElectioneeringAggregatesIndex(
  args: InferRequestType<typeof client.electioneering.aggregates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.electioneering.aggregates.index.$get(args, options))
}

export async function getElectioneeringByCandidateIndex(
  args: InferRequestType<typeof client.electioneering.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.electioneering.by_candidate.index.$get(args, options))
}

export async function getElectioneeringTotalsByCandidateIndex(
  args: InferRequestType<typeof client.electioneering.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.electioneering.totals.by_candidate.index.$get(args, options))
}

export async function getElectionsIndex(
  args: InferRequestType<typeof client.elections.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.elections.index.$get(args, options))
}

export async function getElectionsSearchIndex(
  args: InferRequestType<typeof client.elections.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.elections.search.index.$get(args, options))
}

export async function getElectionsSummaryIndex(
  args: InferRequestType<typeof client.elections.summary.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.elections.summary.index.$get(args, options))
}

export async function getFilingsIndex(
  args: InferRequestType<typeof client.filings.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.filings.index.$get(args, options))
}

export async function getLegalSearchIndex(
  args: InferRequestType<typeof client.legal.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal.search.index.$get(args, options))
}

export async function getNamesAuditCandidatesIndex(
  args: InferRequestType<typeof client.names.audit_candidates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.audit_candidates.index.$get(args, options))
}

export async function getNamesAuditCommitteesIndex(
  args: InferRequestType<typeof client.names.audit_committees.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.audit_committees.index.$get(args, options))
}

export async function getNamesCandidatesIndex(
  args: InferRequestType<typeof client.names.candidates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.candidates.index.$get(args, options))
}

export async function getNamesCommitteesIndex(
  args: InferRequestType<typeof client.names.committees.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.committees.index.$get(args, options))
}

export async function getOperationsLogIndex(
  args: InferRequestType<(typeof client)['operations-log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['operations-log'].index.$get(args, options))
}

export async function getPresidentialContributionsByCandidateIndex(
  args: InferRequestType<typeof client.presidential.contributions.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.presidential.contributions.by_candidate.index.$get(args, options),
  )
}

export async function getPresidentialContributionsBySizeIndex(
  args: InferRequestType<typeof client.presidential.contributions.by_size.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presidential.contributions.by_size.index.$get(args, options))
}

export async function getPresidentialContributionsByStateIndex(
  args: InferRequestType<typeof client.presidential.contributions.by_state.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presidential.contributions.by_state.index.$get(args, options))
}

export async function getPresidentialCoverageEndDateIndex(
  args: InferRequestType<typeof client.presidential.coverage_end_date.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presidential.coverage_end_date.index.$get(args, options))
}

export async function getPresidentialFinancialSummaryIndex(
  args: InferRequestType<typeof client.presidential.financial_summary.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presidential.financial_summary.index.$get(args, options))
}

export async function getRadAnalystIndex(
  args: InferRequestType<(typeof client)['rad-analyst']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rad-analyst'].index.$get(args, options))
}

export async function getReportingDatesIndex(
  args: InferRequestType<(typeof client)['reporting-dates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reporting-dates'].index.$get(args, options))
}

export async function getReportsEntityTypeIndex(
  args: InferRequestType<(typeof client.reports)[':entity_type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':entity_type'].index.$get(args, options))
}

export async function getSchedulesScheduleAIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.index.$get(args, options))
}

export async function getSchedulesScheduleAByEmployerIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_employer.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_employer.index.$get(args, options))
}

export async function getSchedulesScheduleAByOccupationIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_occupation.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_occupation.index.$get(args, options))
}

export async function getSchedulesScheduleABySizeIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_size.index.$get(args, options))
}

export async function getSchedulesScheduleABySizeByCandidateIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_size.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedules.schedule_a.by_size.by_candidate.index.$get(args, options),
  )
}

export async function getSchedulesScheduleAByStateIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_state.index.$get(args, options))
}

export async function getSchedulesScheduleAByStateByCandidateIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedules.schedule_a.by_state.by_candidate.index.$get(args, options),
  )
}

export async function getSchedulesScheduleAByStateByCandidateTotalsIndex(
  args: InferRequestType<
    typeof client.schedules.schedule_a.by_state.by_candidate.totals.index.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedules.schedule_a.by_state.by_candidate.totals.index.$get(args, options),
  )
}

export async function getSchedulesScheduleAByStateTotalsIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_state.totals.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_state.totals.index.$get(args, options))
}

export async function getSchedulesScheduleAByZipIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.by_zip.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.by_zip.index.$get(args, options))
}

export async function getSchedulesScheduleAEfileIndex(
  args: InferRequestType<typeof client.schedules.schedule_a.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a.efile.index.$get(args, options))
}

export async function getSchedulesScheduleASubIdIndex(
  args: InferRequestType<(typeof client.schedules.schedule_a)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_a[':sub_id'].index.$get(args, options))
}

export async function getSchedulesScheduleBIndex(
  args: InferRequestType<typeof client.schedules.schedule_b.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b.index.$get(args, options))
}

export async function getSchedulesScheduleBByPurposeIndex(
  args: InferRequestType<typeof client.schedules.schedule_b.by_purpose.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b.by_purpose.index.$get(args, options))
}

export async function getSchedulesScheduleBByRecipientIndex(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b.by_recipient.index.$get(args, options))
}

export async function getSchedulesScheduleBByRecipientIdIndex(
  args: InferRequestType<typeof client.schedules.schedule_b.by_recipient_id.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b.by_recipient_id.index.$get(args, options))
}

export async function getSchedulesScheduleBEfileIndex(
  args: InferRequestType<typeof client.schedules.schedule_b.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b.efile.index.$get(args, options))
}

export async function getSchedulesScheduleBSubIdIndex(
  args: InferRequestType<(typeof client.schedules.schedule_b)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_b[':sub_id'].index.$get(args, options))
}

export async function getSchedulesScheduleCIndex(
  args: InferRequestType<typeof client.schedules.schedule_c.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_c.index.$get(args, options))
}

export async function getSchedulesScheduleCSubIdIndex(
  args: InferRequestType<(typeof client.schedules.schedule_c)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_c[':sub_id'].index.$get(args, options))
}

export async function getSchedulesScheduleDIndex(
  args: InferRequestType<typeof client.schedules.schedule_d.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_d.index.$get(args, options))
}

export async function getSchedulesScheduleDSubIdIndex(
  args: InferRequestType<(typeof client.schedules.schedule_d)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_d[':sub_id'].index.$get(args, options))
}

export async function getSchedulesScheduleEIndex(
  args: InferRequestType<typeof client.schedules.schedule_e.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_e.index.$get(args, options))
}

export async function getSchedulesScheduleEByCandidateIndex(
  args: InferRequestType<typeof client.schedules.schedule_e.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_e.by_candidate.index.$get(args, options))
}

export async function getSchedulesScheduleEEfileIndex(
  args: InferRequestType<typeof client.schedules.schedule_e.efile.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_e.efile.index.$get(args, options))
}

export async function getSchedulesScheduleETotalsByCandidateIndex(
  args: InferRequestType<typeof client.schedules.schedule_e.totals.by_candidate.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedules.schedule_e.totals.by_candidate.index.$get(args, options),
  )
}

export async function getSchedulesScheduleFIndex(
  args: InferRequestType<typeof client.schedules.schedule_f.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_f.index.$get(args, options))
}

export async function getSchedulesScheduleFSubIdIndex(
  args: InferRequestType<(typeof client.schedules.schedule_f)[':sub_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.schedule_f[':sub_id'].index.$get(args, options))
}

export async function getStateElectionOfficeIndex(
  args: InferRequestType<(typeof client)['state-election-office']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['state-election-office'].index.$get(args, options))
}

export async function getTotalsByEntityIndex(
  args: InferRequestType<typeof client.totals.by_entity.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.totals.by_entity.index.$get(args, options))
}

export async function getTotalsEntityTypeIndex(
  args: InferRequestType<(typeof client.totals)[':entity_type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.totals[':entity_type'].index.$get(args, options))
}
