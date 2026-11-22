import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBill(
  args: InferRequestType<typeof client.bill.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bill.$get(args, options))
}

export async function getBillCongress(
  args: InferRequestType<(typeof client.bill)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bill[':congress'].$get(args, options))
}

export async function getBillCongressBillType(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bill[':congress'][':billType'].$get(args, options))
}

export async function getBillCongressBillTypeBillNumber(
  args: InferRequestType<(typeof client.bill)[':congress'][':billType'][':billNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberActions(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].actions.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberAmendments(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].amendments.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberCommittees(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].committees.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberCosponsors(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['cosponsors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].cosponsors.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberRelatedbills(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['relatedbills']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].relatedbills.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberSubjects(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['subjects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].subjects.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberSummaries(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].summaries.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberText(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].text.$get(args, options),
  )
}

export async function getBillCongressBillTypeBillNumberTitles(
  args: InferRequestType<
    (typeof client.bill)[':congress'][':billType'][':billNumber']['titles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bill[':congress'][':billType'][':billNumber'].titles.$get(args, options),
  )
}

export async function getLawCongress(
  args: InferRequestType<(typeof client.law)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.law[':congress'].$get(args, options))
}

export async function getLawCongressLawType(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.law[':congress'][':lawType'].$get(args, options))
}

export async function getLawCongressLawTypeLawNumber(
  args: InferRequestType<(typeof client.law)[':congress'][':lawType'][':lawNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.law[':congress'][':lawType'][':lawNumber'].$get(args, options))
}

export async function getAmendment(
  args: InferRequestType<typeof client.amendment.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amendment.$get(args, options))
}

export async function getAmendmentCongress(
  args: InferRequestType<(typeof client.amendment)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amendment[':congress'].$get(args, options))
}

export async function getAmendmentCongressAmendmentType(
  args: InferRequestType<(typeof client.amendment)[':congress'][':amendmentType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.amendment[':congress'][':amendmentType'].$get(args, options))
}

export async function getAmendmentCongressAmendmentTypeAmendmentNumber(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.amendment[':congress'][':amendmentType'][':amendmentNumber'].$get(args, options),
  )
}

export async function getAmendmentCongressAmendmentTypeAmendmentNumberActions(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.amendment[':congress'][':amendmentType'][':amendmentNumber'].actions.$get(args, options),
  )
}

export async function getAmendmentCongressAmendmentTypeAmendmentNumberCosponsors(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['cosponsors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.amendment[':congress'][':amendmentType'][':amendmentNumber'].cosponsors.$get(
      args,
      options,
    ),
  )
}

export async function getAmendmentCongressAmendmentTypeAmendmentNumberAmendments(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.amendment[':congress'][':amendmentType'][':amendmentNumber'].amendments.$get(
      args,
      options,
    ),
  )
}

export async function getAmendmentCongressAmendmentTypeAmendmentNumberText(
  args: InferRequestType<
    (typeof client.amendment)[':congress'][':amendmentType'][':amendmentNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.amendment[':congress'][':amendmentType'][':amendmentNumber'].text.$get(args, options),
  )
}

export async function getSummaries(
  args: InferRequestType<typeof client.summaries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.summaries.$get(args, options))
}

export async function getSummariesCongress(
  args: InferRequestType<(typeof client.summaries)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.summaries[':congress'].$get(args, options))
}

export async function getSummariesCongressBillType(
  args: InferRequestType<(typeof client.summaries)[':congress'][':billType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.summaries[':congress'][':billType'].$get(args, options))
}

export async function getCongress(
  args: InferRequestType<typeof client.congress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.congress.$get(args, options))
}

export async function getCongressCongress(
  args: InferRequestType<(typeof client.congress)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.congress[':congress'].$get(args, options))
}

export async function getCongressCurrent(
  args: InferRequestType<typeof client.congress.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.congress.current.$get(args, options))
}

export async function getMember(
  args: InferRequestType<typeof client.member.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.member.$get(args, options))
}

export async function getMemberBioguideId(
  args: InferRequestType<(typeof client.member)[':bioguideId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.member[':bioguideId'].$get(args, options))
}

export async function getMemberBioguideIdSponsoredLegislation(
  args: InferRequestType<(typeof client.member)[':bioguideId']['sponsored-legislation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.member[':bioguideId']['sponsored-legislation'].$get(args, options),
  )
}

export async function getMemberBioguideIdCosponsoredLegislation(
  args: InferRequestType<(typeof client.member)[':bioguideId']['cosponsored-legislation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.member[':bioguideId']['cosponsored-legislation'].$get(args, options),
  )
}

export async function getMemberCongressCongress(
  args: InferRequestType<(typeof client.member.congress)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.member.congress[':congress'].$get(args, options))
}

export async function getMemberStateCode(
  args: InferRequestType<(typeof client.member)[':stateCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.member[':stateCode'].$get(args, options))
}

export async function getMemberStateCodeDistrict(
  args: InferRequestType<(typeof client.member)[':stateCode'][':district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.member[':stateCode'][':district'].$get(args, options))
}

export async function getMemberCongressCongressStateCodeDistrict(
  args: InferRequestType<
    (typeof client.member.congress)[':congress'][':stateCode'][':district']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.member.congress[':congress'][':stateCode'][':district'].$get(args, options),
  )
}

export async function getHouseVote(
  args: InferRequestType<(typeof client)['house-vote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-vote'].$get(args, options))
}

export async function getHouseVoteCongress(
  args: InferRequestType<(typeof client)['house-vote'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-vote'][':congress'].$get(args, options))
}

export async function getHouseVoteCongressSession(
  args: InferRequestType<(typeof client)['house-vote'][':congress'][':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-vote'][':congress'][':session'].$get(args, options))
}

export async function getHouseVoteCongressSessionVoteNumber(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['house-vote'][':congress'][':session'][':voteNumber'].$get(args, options),
  )
}

export async function getHouseVoteCongressSessionVoteNumberMembers(
  args: InferRequestType<
    (typeof client)['house-vote'][':congress'][':session'][':voteNumber']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['house-vote'][':congress'][':session'][':voteNumber'].members.$get(args, options),
  )
}

export async function getCommittee(
  args: InferRequestType<typeof client.committee.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee.$get(args, options))
}

export async function getCommitteeChamber(
  args: InferRequestType<(typeof client.committee)[':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':chamber'].$get(args, options))
}

export async function getCommitteeCongress(
  args: InferRequestType<(typeof client.committee)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':congress'].$get(args, options))
}

export async function getCommitteeCongressChamber(
  args: InferRequestType<(typeof client.committee)[':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':congress'][':chamber'].$get(args, options))
}

export async function getCommitteeChamberCommitteeCode(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.committee[':chamber'][':committeeCode'].$get(args, options))
}

export async function getCommitteeCongressChamberCommitteeCode(
  args: InferRequestType<
    (typeof client.committee)[':congress'][':chamber'][':committeeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':congress'][':chamber'][':committeeCode'].$get(args, options),
  )
}

export async function getCommitteeChamberCommitteeCodeBills(
  args: InferRequestType<(typeof client.committee)[':chamber'][':committeeCode']['bills']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':chamber'][':committeeCode'].bills.$get(args, options),
  )
}

export async function getCommitteeChamberCommitteeCodeReports(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':chamber'][':committeeCode'].reports.$get(args, options),
  )
}

export async function getCommitteeChamberCommitteeCodeNominations(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['nominations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':chamber'][':committeeCode'].nominations.$get(args, options),
  )
}

export async function getCommitteeChamberCommitteeCodeHouseCommunication(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['house-communication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':chamber'][':committeeCode']['house-communication'].$get(args, options),
  )
}

export async function getCommitteeChamberCommitteeCodeSenateCommunication(
  args: InferRequestType<
    (typeof client.committee)[':chamber'][':committeeCode']['senate-communication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.committee[':chamber'][':committeeCode']['senate-communication'].$get(args, options),
  )
}

export async function getCommitteeReport(
  args: InferRequestType<(typeof client)['committee-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-report'].$get(args, options))
}

export async function getCommitteeReportCongress(
  args: InferRequestType<(typeof client)['committee-report'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-report'][':congress'].$get(args, options))
}

export async function getCommitteeReportCongressReportType(
  args: InferRequestType<(typeof client)['committee-report'][':congress'][':reportType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-report'][':congress'][':reportType'].$get(args, options),
  )
}

export async function getCommitteeReportCongressReportTypeReportNumber(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-report'][':congress'][':reportType'][':reportNumber'].$get(args, options),
  )
}

export async function getCommitteeReportCongressReportTypeReportNumberText(
  args: InferRequestType<
    (typeof client)['committee-report'][':congress'][':reportType'][':reportNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-report'][':congress'][':reportType'][':reportNumber'].text.$get(
      args,
      options,
    ),
  )
}

export async function getCommitteePrint(
  args: InferRequestType<(typeof client)['committee-print']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-print'].$get(args, options))
}

export async function getCommitteePrintCongress(
  args: InferRequestType<(typeof client)['committee-print'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-print'][':congress'].$get(args, options))
}

export async function getCommitteePrintCongressChamber(
  args: InferRequestType<(typeof client)['committee-print'][':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-print'][':congress'][':chamber'].$get(args, options))
}

export async function getCommitteePrintCongressChamberJacketNumber(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-print'][':congress'][':chamber'][':jacketNumber'].$get(args, options),
  )
}

export async function getCommitteePrintCongressChamberJacketNumberText(
  args: InferRequestType<
    (typeof client)['committee-print'][':congress'][':chamber'][':jacketNumber']['text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-print'][':congress'][':chamber'][':jacketNumber'].text.$get(args, options),
  )
}

export async function getCommitteeMeeting(
  args: InferRequestType<(typeof client)['committee-meeting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-meeting'].$get(args, options))
}

export async function getCommitteeMeetingCongress(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['committee-meeting'][':congress'].$get(args, options))
}

export async function getCommitteeMeetingCongressChamber(
  args: InferRequestType<(typeof client)['committee-meeting'][':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-meeting'][':congress'][':chamber'].$get(args, options),
  )
}

export async function getCommitteeMeetingCongressChamberEventId(
  args: InferRequestType<
    (typeof client)['committee-meeting'][':congress'][':chamber'][':eventId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['committee-meeting'][':congress'][':chamber'][':eventId'].$get(args, options),
  )
}

export async function getHearing(
  args: InferRequestType<typeof client.hearing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hearing.$get(args, options))
}

export async function getHearingCongress(
  args: InferRequestType<(typeof client.hearing)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hearing[':congress'].$get(args, options))
}

export async function getHearingCongressChamber(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hearing[':congress'][':chamber'].$get(args, options))
}

export async function getHearingCongressChamberJacketNumber(
  args: InferRequestType<(typeof client.hearing)[':congress'][':chamber'][':jacketNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hearing[':congress'][':chamber'][':jacketNumber'].$get(args, options),
  )
}

export async function getCongressionalRecord(
  args: InferRequestType<(typeof client)['congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['congressional-record'].$get(args, options))
}

export async function getDailyCongressionalRecord(
  args: InferRequestType<(typeof client)['daily-congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['daily-congressional-record'].$get(args, options))
}

export async function getDailyCongressionalRecordVolumeNumber(
  args: InferRequestType<(typeof client)['daily-congressional-record'][':volumeNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['daily-congressional-record'][':volumeNumber'].$get(args, options),
  )
}

export async function getDailyCongressionalRecordVolumeNumberIssueNumber(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['daily-congressional-record'][':volumeNumber'][':issueNumber'].$get(args, options),
  )
}

export async function getDailyCongressionalRecordVolumeNumberIssueNumberArticles(
  args: InferRequestType<
    (typeof client)['daily-congressional-record'][':volumeNumber'][':issueNumber']['articles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['daily-congressional-record'][':volumeNumber'][':issueNumber'].articles.$get(
      args,
      options,
    ),
  )
}

export async function getBoundCongressionalRecord(
  args: InferRequestType<(typeof client)['bound-congressional-record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bound-congressional-record'].$get(args, options))
}

export async function getBoundCongressionalRecordYear(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bound-congressional-record'][':year'].$get(args, options))
}

export async function getBoundCongressionalRecordYearMonth(
  args: InferRequestType<(typeof client)['bound-congressional-record'][':year'][':month']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['bound-congressional-record'][':year'][':month'].$get(args, options),
  )
}

export async function getBoundCongressionalRecordYearMonthDay(
  args: InferRequestType<
    (typeof client)['bound-congressional-record'][':year'][':month'][':day']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['bound-congressional-record'][':year'][':month'][':day'].$get(args, options),
  )
}

export async function getHouseCommunication(
  args: InferRequestType<(typeof client)['house-communication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-communication'].$get(args, options))
}

export async function getHouseCommunicationCongress(
  args: InferRequestType<(typeof client)['house-communication'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-communication'][':congress'].$get(args, options))
}

export async function getHouseCommunicationCongressCommunicationType(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['house-communication'][':congress'][':communicationType'].$get(args, options),
  )
}

export async function getHouseCommunicationCongressCommunicationTypeCommunicationNumber(
  args: InferRequestType<
    (typeof client)['house-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['house-communication'][':congress'][':communicationType'][':communicationNumber'].$get(
      args,
      options,
    ),
  )
}

export async function getHouseRequirement(
  args: InferRequestType<(typeof client)['house-requirement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-requirement'].$get(args, options))
}

export async function getHouseRequirementRequirementNumber(
  args: InferRequestType<(typeof client)['house-requirement'][':requirementNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['house-requirement'][':requirementNumber'].$get(args, options))
}

export async function getHouseRequirementRequirementNumberMatchingCommunications(
  args: InferRequestType<
    (typeof client)['house-requirement'][':requirementNumber']['matching-communications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['house-requirement'][':requirementNumber']['matching-communications'].$get(
      args,
      options,
    ),
  )
}

export async function getSenateCommunication(
  args: InferRequestType<(typeof client)['senate-communication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['senate-communication'].$get(args, options))
}

export async function getSenateCommunicationCongress(
  args: InferRequestType<(typeof client)['senate-communication'][':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['senate-communication'][':congress'].$get(args, options))
}

export async function getSenateCommunicationCongressCommunicationType(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['senate-communication'][':congress'][':communicationType'].$get(args, options),
  )
}

export async function getSenateCommunicationCongressCommunicationTypeCommunicationNumber(
  args: InferRequestType<
    (typeof client)['senate-communication'][':congress'][':communicationType'][':communicationNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['senate-communication'][':congress'][':communicationType'][':communicationNumber'].$get(
      args,
      options,
    ),
  )
}

export async function getNomination(
  args: InferRequestType<typeof client.nomination.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nomination.$get(args, options))
}

export async function getNominationCongress(
  args: InferRequestType<(typeof client.nomination)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nomination[':congress'].$get(args, options))
}

export async function getNominationCongressNominationNumber(
  args: InferRequestType<(typeof client.nomination)[':congress'][':nominationNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nomination[':congress'][':nominationNumber'].$get(args, options),
  )
}

export async function getNominationCongressNominationNumberOrdinal(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber'][':ordinal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nomination[':congress'][':nominationNumber'][':ordinal'].$get(args, options),
  )
}

export async function getNominationCongressNominationNumberActions(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nomination[':congress'][':nominationNumber'].actions.$get(args, options),
  )
}

export async function getNominationCongressNominationNumberCommittees(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nomination[':congress'][':nominationNumber'].committees.$get(args, options),
  )
}

export async function getNominationCongressNominationNumberHearings(
  args: InferRequestType<
    (typeof client.nomination)[':congress'][':nominationNumber']['hearings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nomination[':congress'][':nominationNumber'].hearings.$get(args, options),
  )
}

export async function getCrsreport(
  args: InferRequestType<typeof client.crsreport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crsreport.$get(args, options))
}

export async function getCrsreportReportNumber(
  args: InferRequestType<(typeof client.crsreport)[':reportNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crsreport[':reportNumber'].$get(args, options))
}

export async function getTreaty(
  args: InferRequestType<typeof client.treaty.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.treaty.$get(args, options))
}

export async function getTreatyCongress(
  args: InferRequestType<(typeof client.treaty)[':congress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.treaty[':congress'].$get(args, options))
}

export async function getTreatyCongressTreatyNumber(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.treaty[':congress'][':treatyNumber'].$get(args, options))
}

export async function getTreatyCongressTreatyNumberTreatySuffix(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.treaty[':congress'][':treatyNumber'][':treatySuffix'].$get(args, options),
  )
}

export async function getTreatyCongressTreatyNumberActions(
  args: InferRequestType<(typeof client.treaty)[':congress'][':treatyNumber']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.treaty[':congress'][':treatyNumber'].actions.$get(args, options),
  )
}

export async function getTreatyCongressTreatyNumberTreatySuffixActions(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber'][':treatySuffix']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.treaty[':congress'][':treatyNumber'][':treatySuffix'].actions.$get(args, options),
  )
}

export async function getTreatyCongressTreatyNumberCommittees(
  args: InferRequestType<
    (typeof client.treaty)[':congress'][':treatyNumber']['committees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.treaty[':congress'][':treatyNumber'].committees.$get(args, options),
  )
}
