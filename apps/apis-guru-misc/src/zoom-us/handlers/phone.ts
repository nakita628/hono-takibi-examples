import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  deletePhoneBlockedListBlockedListIdRoute,
  deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute,
  deletePhoneCallQueuesCallQueueIdMembersRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  deletePhoneCallQueuesCallQueueIdRoute,
  deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  deletePhoneDevicesDeviceIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdRoute,
  deletePhoneSitesSiteIdRoute,
  deletePhoneUsersUserIdCallingPlansTypeRoute,
  deletePhoneUsersUserIdCallLogsCallLogIdRoute,
  deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneUsersUserIdSettingsSettingTypeRoute,
  deletePhoneVoiceMailsVoicemailIdRoute,
  getPhoneBlockedListBlockedListIdRoute,
  getPhoneBlockedListRoute,
  getPhoneCallingPlansRoute,
  getPhoneCallLogsRoute,
  getPhoneCallQueuesCallQueueIdRecordingsRoute,
  getPhoneCallQueuesCallQueueIdRoute,
  getPhoneCallQueuesRoute,
  getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  getPhoneCommonAreaPhonesRoute,
  getPhoneDevicesDeviceIdRoute,
  getPhoneDevicesRoute,
  getPhoneMetricsCallLogsCallIdQosRoute,
  getPhoneMetricsCallLogsCallIdRoute,
  getPhoneMetricsCallLogsRoute,
  getPhoneNumbersNumberIdRoute,
  getPhoneNumbersRoute,
  getPhoneRecordingsRoute,
  getPhoneReportsOperationlogsRoute,
  getPhoneSettingTemplatesRoute,
  getPhoneSettingTemplatesTemplateIdRoute,
  getPhoneSharedLineGroupsRoute,
  getPhoneSharedLineGroupsSharedLineGroupIdRoute,
  getPhoneSipTrunkTrunksRoute,
  getPhoneSitesRoute,
  getPhoneSitesSiteIdRoute,
  getPhoneUsersRoute,
  getPhoneUsersUserIdCallLogsRoute,
  getPhoneUsersUserIdRecordingsRoute,
  getPhoneUsersUserIdRoute,
  getPhoneUsersUserIdSettingsRoute,
  getPhoneUsersUserIdVoiceMailsRoute,
  patchPhoneAutoReceptionistsAutoReceptionistIdRoute,
  patchPhoneBlockedListBlockedListIdRoute,
  patchPhoneCallQueuesCallQueueIdRoute,
  patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  patchPhoneDevicesDeviceIdRoute,
  patchPhoneNumbersNumberIdRoute,
  patchPhoneSettingTemplatesTemplateIdRoute,
  patchPhoneSharedLineGroupsSharedLineGroupIdRoute,
  patchPhoneSitesSiteIdRoute,
  patchPhoneUsersUserIdRoute,
  patchPhoneUsersUserIdSettingsSettingTypeRoute,
  postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  postPhoneAutoReceptionistsRoute,
  postPhoneBlockedListRoute,
  postPhoneByocNumbersRoute,
  postPhoneCallQueuesCallQueueIdMembersRoute,
  postPhoneCallQueuesCallQueueIdPhoneNumbersRoute,
  postPhoneCallQueuesRoute,
  postPhoneCommonAreaPhonesRoute,
  postPhoneDevicesRoute,
  postPhoneSettingTemplatesRoute,
  postPhoneSharedLineGroupsRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute,
  postPhoneSitesRoute,
  postPhoneUsersUserIdCallingPlansRoute,
  postPhoneUsersUserIdPhoneNumbersRoute,
  postPhoneUsersUserIdSettingsSettingTypeRoute,
  putPhoneCallQueuesCallQueueIdManagerRoute,
  putPhoneCompanyNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneHandler = app
  .openapi(postPhoneAutoReceptionistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneAutoReceptionistsAutoReceptionistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneBlockedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneBlockedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneByocNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneCallQueuesCallQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPhoneCallQueuesCallQueueIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesCallQueueIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCallQueuesCallQueueIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallQueuesCallQueueIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCommonAreaPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCommonAreaPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPhoneCompanyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneMetricsCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneMetricsCallLogsCallIdQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneMetricsCallLogsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneReportsOperationlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSettingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSettingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSharedLineGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdCallLogsCallLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdCallingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdCallingPlansTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdVoiceMailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneVoiceMailsVoicemailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
