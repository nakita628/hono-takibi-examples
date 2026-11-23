import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDetectorDetectorIdAdministrator(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].administrator.$get(args, options))
}

export async function postDetectorDetectorIdAdministrator(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].administrator.$post(args, options))
}

export async function getDetectorDetectorIdMaster(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].master.$get(args, options))
}

export async function postDetectorDetectorIdMaster(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].master.$post(args, options))
}

export async function postDetectorDetectorIdFindingsArchive(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.archive.$post(args, options))
}

export async function getDetector(
  args: InferRequestType<typeof client.detector.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector.$get(args, options))
}

export async function postDetector(
  args: InferRequestType<typeof client.detector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector.$post(args, options))
}

export async function getDetectorDetectorIdFilter(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].filter.$get(args, options))
}

export async function postDetectorDetectorIdFilter(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].filter.$post(args, options))
}

export async function getDetectorDetectorIdIpset(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].ipset.$get(args, options))
}

export async function postDetectorDetectorIdIpset(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].ipset.$post(args, options))
}

export async function getDetectorDetectorIdMember(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.$get(args, options))
}

export async function postDetectorDetectorIdMember(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.$post(args, options))
}

export async function getDetectorDetectorIdPublishingDestination(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].publishingDestination.$get(args, options),
  )
}

export async function postDetectorDetectorIdPublishingDestination(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].publishingDestination.$post(args, options),
  )
}

export async function postDetectorDetectorIdFindingsCreate(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.create.$post(args, options))
}

export async function getDetectorDetectorIdThreatintelset(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].threatintelset.$get(args, options))
}

export async function postDetectorDetectorIdThreatintelset(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].threatintelset.$post(args, options))
}

export async function postInvitationDecline(
  args: InferRequestType<typeof client.invitation.decline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.decline.$post(args, options))
}

export async function getDetectorDetectorId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].$get(args, options))
}

export async function postDetectorDetectorId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].$post(args, options))
}

export async function deleteDetectorDetectorId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].$delete(args, options))
}

export async function getDetectorDetectorIdFilterFilterName(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].filter[':filterName'].$get(args, options),
  )
}

export async function postDetectorDetectorIdFilterFilterName(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].filter[':filterName'].$post(args, options),
  )
}

export async function deleteDetectorDetectorIdFilterFilterName(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].filter[':filterName'].$delete(args, options),
  )
}

export async function getDetectorDetectorIdIpsetIpSetId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$get(args, options))
}

export async function postDetectorDetectorIdIpsetIpSetId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$post(args, options))
}

export async function deleteDetectorDetectorIdIpsetIpSetId(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].ipset[':ipSetId'].$delete(args, options),
  )
}

export async function postInvitationDelete(
  args: InferRequestType<typeof client.invitation.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.delete.$post(args, options))
}

export async function postDetectorDetectorIdMemberDelete(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.delete.$post(args, options))
}

export async function getDetectorDetectorIdPublishingDestinationDestinationId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].publishingDestination[':destinationId'].$get(args, options),
  )
}

export async function postDetectorDetectorIdPublishingDestinationDestinationId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].publishingDestination[':destinationId'].$post(args, options),
  )
}

export async function deleteDetectorDetectorIdPublishingDestinationDestinationId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].publishingDestination[':destinationId'].$delete(args, options),
  )
}

export async function getDetectorDetectorIdThreatintelsetThreatIntelSetId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$get(args, options),
  )
}

export async function postDetectorDetectorIdThreatintelsetThreatIntelSetId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$post(args, options),
  )
}

export async function deleteDetectorDetectorIdThreatintelsetThreatIntelSetId(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$delete(args, options),
  )
}

export async function postDetectorDetectorIdMalwareScans(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId']['malware-scans'].$post(args, options))
}

export async function getDetectorDetectorIdAdmin(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].admin.$get(args, options))
}

export async function postDetectorDetectorIdAdmin(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].admin.$post(args, options))
}

export async function postAdminDisable(
  args: InferRequestType<typeof client.admin.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.disable.$post(args, options))
}

export async function postDetectorDetectorIdAdministratorDisassociate(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].administrator.disassociate.$post(args, options),
  )
}

export async function postDetectorDetectorIdMasterDisassociate(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['master']['disassociate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].master.disassociate.$post(args, options),
  )
}

export async function postDetectorDetectorIdMemberDisassociate(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['member']['disassociate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].member.disassociate.$post(args, options),
  )
}

export async function postAdminEnable(
  args: InferRequestType<typeof client.admin.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.enable.$post(args, options))
}

export async function postDetectorDetectorIdCoverageStatistics(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['coverage']['statistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].coverage.statistics.$post(args, options),
  )
}

export async function postDetectorDetectorIdFindingsGet(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.get.$post(args, options))
}

export async function postDetectorDetectorIdFindingsStatistics(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['findings']['statistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].findings.statistics.$post(args, options),
  )
}

export async function getInvitationCount(
  args: InferRequestType<typeof client.invitation.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.count.$get(args, options))
}

export async function getDetectorDetectorIdMalwareScanSettings(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId']['malware-scan-settings'].$get(args, options),
  )
}

export async function postDetectorDetectorIdMalwareScanSettings(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId']['malware-scan-settings'].$post(args, options),
  )
}

export async function postDetectorDetectorIdMemberDetectorGet(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].member.detector.get.$post(args, options),
  )
}

export async function postDetectorDetectorIdMemberGet(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.get.$post(args, options))
}

export async function postDetectorDetectorIdFreeTrialDaysRemaining(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].freeTrial.daysRemaining.$post(args, options),
  )
}

export async function postDetectorDetectorIdUsageStatistics(
  args: InferRequestType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].usage.statistics.$post(args, options))
}

export async function postDetectorDetectorIdMemberInvite(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.invite.$post(args, options))
}

export async function postDetectorDetectorIdCoverage(
  args: InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].coverage.$post(args, options))
}

export async function postDetectorDetectorIdFindings(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.$post(args, options))
}

export async function getInvitation(
  args: InferRequestType<typeof client.invitation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.$get(args, options))
}

export async function getAdmin(
  args: InferRequestType<typeof client.admin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postDetectorDetectorIdMemberStart(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.start.$post(args, options))
}

export async function postDetectorDetectorIdMemberStop(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].member.stop.$post(args, options))
}

export async function postDetectorDetectorIdFindingsUnarchive(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.unarchive.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postDetectorDetectorIdFindingsFeedback(
  args: InferRequestType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.detector[':detectorId'].findings.feedback.$post(args, options))
}

export async function postDetectorDetectorIdMemberDetectorUpdate(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.detector[':detectorId'].member.detector.update.$post(args, options),
  )
}
