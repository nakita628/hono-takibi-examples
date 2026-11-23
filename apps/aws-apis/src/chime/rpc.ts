import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumber(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId#operation=associate-phone-number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId#operation=associate-phone-number'].$post(
      args,
      options,
    ),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbers(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId#operation=associate-phone-numbers'].$post(
      args,
      options,
    ),
  )
}

export async function postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbers(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=associate-phone-numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connector-groups'][
      ':voiceConnectorGroupId#operation=associate-phone-numbers'
    ].$post(args, options),
  )
}

export async function postAccountsAccountIdOperationAssociateSigninDelegateGroups(
  args: InferRequestType<
    (typeof client.accounts)[':accountId#operation=associate-signin-delegate-groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId#operation=associate-signin-delegate-groups'].$post(args, options),
  )
}

export async function postMeetingsMeetingIdAttendeesOperationBatchCreate(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees#operation=batch-create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId']['attendees#operation=batch-create'].$post(args, options),
  )
}

export async function postChannelsChannelArnMembershipsOperationBatchCreate(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships#operation=batch-create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn']['memberships#operation=batch-create'].$post(args, options),
  )
}

export async function postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreate(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships#operation=batch-create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId']['memberships#operation=batch-create'].$post(
      args,
      options,
    ),
  )
}

export async function postPhoneNumbersOperationBatchDelete(
  args: InferRequestType<(typeof client)['phone-numbers#operation=batch-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers#operation=batch-delete'].$post(args, options))
}

export async function postAccountsAccountIdUsersOperationSuspend(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users#operation=suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['users#operation=suspend'].$post(args, options),
  )
}

export async function postAccountsAccountIdUsersOperationUnsuspend(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users#operation=unsuspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['users#operation=unsuspend'].$post(args, options),
  )
}

export async function postPhoneNumbersOperationBatchUpdate(
  args: InferRequestType<(typeof client)['phone-numbers#operation=batch-update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers#operation=batch-update'].$post(args, options))
}

export async function getAccountsAccountIdUsers(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].users.$get(args, options))
}

export async function postAccountsAccountIdUsers(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].users.$post(args, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAppInstances(
  args: InferRequestType<(typeof client)['app-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'].$get(args, options))
}

export async function postAppInstances(
  args: InferRequestType<(typeof client)['app-instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'].$post(args, options))
}

export async function getAppInstancesAppInstanceArnAdmins(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'][':appInstanceArn'].admins.$get(args, options))
}

export async function postAppInstancesAppInstanceArnAdmins(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['admins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'][':appInstanceArn'].admins.$post(args, options))
}

export async function postAppInstanceUsers(
  args: InferRequestType<(typeof client)['app-instance-users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instance-users'].$post(args, options))
}

export async function getMeetingsMeetingIdAttendees(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].attendees.$get(args, options))
}

export async function postMeetingsMeetingIdAttendees(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['attendees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].attendees.$post(args, options))
}

export async function getAccountsAccountIdBots(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].bots.$get(args, options))
}

export async function postAccountsAccountIdBots(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].bots.$post(args, options))
}

export async function postChannels(
  args: InferRequestType<typeof client.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$post(args, options))
}

export async function getChannelsChannelArnBans(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].bans.$get(args, options))
}

export async function postChannelsChannelArnBans(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].bans.$post(args, options))
}

export async function getChannelsChannelArnMemberships(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].memberships.$get(args, options))
}

export async function postChannelsChannelArnMemberships(
  args: InferRequestType<(typeof client.channels)[':channelArn']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].memberships.$post(args, options))
}

export async function getChannelsChannelArnModerators(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].moderators.$get(args, options))
}

export async function postChannelsChannelArnModerators(
  args: InferRequestType<(typeof client.channels)[':channelArn']['moderators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].moderators.$post(args, options))
}

export async function getMediaCapturePipelines(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['media-capture-pipelines'].$get(args, options))
}

export async function postMediaCapturePipelines(
  args: InferRequestType<(typeof client)['media-capture-pipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['media-capture-pipelines'].$post(args, options))
}

export async function getMeetings(
  args: InferRequestType<typeof client.meetings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings.$get(args, options))
}

export async function postMeetings(
  args: InferRequestType<typeof client.meetings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings.$post(args, options))
}

export async function postMeetingsMeetingIdDialOuts(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['dial-outs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId']['dial-outs'].$post(args, options))
}

export async function postMeetingsOperationCreateAttendees(
  args: InferRequestType<(typeof client)['meetings#operation=create-attendees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['meetings#operation=create-attendees'].$post(args, options))
}

export async function getPhoneNumberOrders(
  args: InferRequestType<(typeof client)['phone-number-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number-orders'].$get(args, options))
}

export async function postPhoneNumberOrders(
  args: InferRequestType<(typeof client)['phone-number-orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number-orders'].$post(args, options))
}

export async function getVoiceConnectorsVoiceConnectorIdProxySessions(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$get(args, options),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdProxySessions(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['proxy-sessions'].$post(args, options),
  )
}

export async function getAccountsAccountIdRooms(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].rooms.$get(args, options))
}

export async function postAccountsAccountIdRooms(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].rooms.$post(args, options))
}

export async function getAccountsAccountIdRoomsRoomIdMemberships(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId'].memberships.$get(args, options),
  )
}

export async function postAccountsAccountIdRoomsRoomIdMemberships(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId'].memberships.$post(args, options),
  )
}

export async function getSipMediaApplications(
  args: InferRequestType<(typeof client)['sip-media-applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-media-applications'].$get(args, options))
}

export async function postSipMediaApplications(
  args: InferRequestType<(typeof client)['sip-media-applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-media-applications'].$post(args, options))
}

export async function postSipMediaApplicationsSipMediaApplicationIdCalls(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId'].calls.$post(args, options),
  )
}

export async function getSipRules(
  args: InferRequestType<(typeof client)['sip-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-rules'].$get(args, options))
}

export async function postSipRules(
  args: InferRequestType<(typeof client)['sip-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-rules'].$post(args, options))
}

export async function postAccountsAccountIdUsersOperationCreate(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users#operation=create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['users#operation=create'].$post(args, options),
  )
}

export async function getVoiceConnectors(
  args: InferRequestType<(typeof client)['voice-connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connectors'].$get(args, options))
}

export async function postVoiceConnectors(
  args: InferRequestType<(typeof client)['voice-connectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connectors'].$post(args, options))
}

export async function getVoiceConnectorGroups(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connector-groups'].$get(args, options))
}

export async function postVoiceConnectorGroups(
  args: InferRequestType<(typeof client)['voice-connector-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connector-groups'].$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function postAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$post(args, options))
}

export async function deleteAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$delete(args, options))
}

export async function getAppInstancesAppInstanceArn(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'][':appInstanceArn'].$get(args, options))
}

export async function putAppInstancesAppInstanceArn(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'][':appInstanceArn'].$put(args, options))
}

export async function deleteAppInstancesAppInstanceArn(
  args: InferRequestType<(typeof client)['app-instances'][':appInstanceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instances'][':appInstanceArn'].$delete(args, options))
}

export async function getAppInstancesAppInstanceArnAdminsAppInstanceAdminArn(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$get(args, options),
  )
}

export async function deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArn(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['admins'][':appInstanceAdminArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn'].admins[':appInstanceAdminArn'].$delete(
      args,
      options,
    ),
  )
}

export async function getAppInstancesAppInstanceArnStreamingConfigurations(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn']['streaming-configurations'].$get(args, options),
  )
}

export async function putAppInstancesAppInstanceArnStreamingConfigurations(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn']['streaming-configurations'].$put(args, options),
  )
}

export async function deleteAppInstancesAppInstanceArnStreamingConfigurations(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['streaming-configurations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn']['streaming-configurations'].$delete(args, options),
  )
}

export async function getAppInstanceUsersAppInstanceUserArn(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instance-users'][':appInstanceUserArn'].$get(args, options),
  )
}

export async function putAppInstanceUsersAppInstanceUserArn(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instance-users'][':appInstanceUserArn'].$put(args, options),
  )
}

export async function deleteAppInstanceUsersAppInstanceUserArn(
  args: InferRequestType<(typeof client)['app-instance-users'][':appInstanceUserArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instance-users'][':appInstanceUserArn'].$delete(args, options),
  )
}

export async function getMeetingsMeetingIdAttendeesAttendeeId(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].attendees[':attendeeId'].$get(args, options),
  )
}

export async function deleteMeetingsMeetingIdAttendeesAttendeeId(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].attendees[':attendeeId'].$delete(args, options),
  )
}

export async function getChannelsChannelArn(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].$get(args, options))
}

export async function putChannelsChannelArn(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].$put(args, options))
}

export async function deleteChannelsChannelArn(
  args: InferRequestType<(typeof client.channels)[':channelArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].$delete(args, options))
}

export async function getChannelsChannelArnBansMemberArn(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].bans[':memberArn'].$get(args, options))
}

export async function deleteChannelsChannelArnBansMemberArn(
  args: InferRequestType<(typeof client.channels)[':channelArn']['bans'][':memberArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].bans[':memberArn'].$delete(args, options),
  )
}

export async function getChannelsChannelArnMembershipsMemberArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].memberships[':memberArn'].$get(args, options),
  )
}

export async function deleteChannelsChannelArnMembershipsMemberArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['memberships'][':memberArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].memberships[':memberArn'].$delete(args, options),
  )
}

export async function getChannelsChannelArnMessagesMessageId(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].messages[':messageId'].$get(args, options),
  )
}

export async function putChannelsChannelArnMessagesMessageId(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages'][':messageId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].messages[':messageId'].$put(args, options),
  )
}

export async function deleteChannelsChannelArnMessagesMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['messages'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].messages[':messageId'].$delete(args, options),
  )
}

export async function getChannelsChannelArnModeratorsChannelModeratorArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].moderators[':channelModeratorArn'].$get(args, options),
  )
}

export async function deleteChannelsChannelArnModeratorsChannelModeratorArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['moderators'][':channelModeratorArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].moderators[':channelModeratorArn'].$delete(args, options),
  )
}

export async function getAccountsAccountIdBotsBotIdEventsConfiguration(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].bots[':botId']['events-configuration'].$get(args, options),
  )
}

export async function putAccountsAccountIdBotsBotIdEventsConfiguration(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].bots[':botId']['events-configuration'].$put(args, options),
  )
}

export async function deleteAccountsAccountIdBotsBotIdEventsConfiguration(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId']['events-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].bots[':botId']['events-configuration'].$delete(args, options),
  )
}

export async function getMediaCapturePipelinesMediaPipelineId(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-capture-pipelines'][':mediaPipelineId'].$get(args, options),
  )
}

export async function deleteMediaCapturePipelinesMediaPipelineId(
  args: InferRequestType<(typeof client)['media-capture-pipelines'][':mediaPipelineId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-capture-pipelines'][':mediaPipelineId'].$delete(args, options),
  )
}

export async function getMeetingsMeetingId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].$get(args, options))
}

export async function deleteMeetingsMeetingId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].$delete(args, options))
}

export async function getPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers'][':phoneNumberId'].$get(args, options))
}

export async function postPhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers'][':phoneNumberId'].$post(args, options))
}

export async function deletePhoneNumbersPhoneNumberId(
  args: InferRequestType<(typeof client)['phone-numbers'][':phoneNumberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers'][':phoneNumberId'].$delete(args, options))
}

export async function getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$get(
      args,
      options,
    ),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionId(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['proxy-sessions'][':proxySessionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdRoomsRoomId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].rooms[':roomId'].$get(args, options))
}

export async function postAccountsAccountIdRoomsRoomId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].rooms[':roomId'].$post(args, options))
}

export async function deleteAccountsAccountIdRoomsRoomId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['rooms'][':roomId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].rooms[':roomId'].$delete(args, options))
}

export async function postAccountsAccountIdRoomsRoomIdMembershipsMemberId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$post(args, options),
  )
}

export async function deleteAccountsAccountIdRoomsRoomIdMembershipsMemberId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['memberships'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId'].memberships[':memberId'].$delete(args, options),
  )
}

export async function getSipMediaApplicationsSipMediaApplicationId(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId'].$get(args, options),
  )
}

export async function putSipMediaApplicationsSipMediaApplicationId(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId'].$put(args, options),
  )
}

export async function deleteSipMediaApplicationsSipMediaApplicationId(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId'].$delete(args, options),
  )
}

export async function getSipRulesSipRuleId(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-rules'][':sipRuleId'].$get(args, options))
}

export async function putSipRulesSipRuleId(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-rules'][':sipRuleId'].$put(args, options))
}

export async function deleteSipRulesSipRuleId(
  args: InferRequestType<(typeof client)['sip-rules'][':sipRuleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sip-rules'][':sipRuleId'].$delete(args, options))
}

export async function getVoiceConnectorsVoiceConnectorId(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connectors'][':voiceConnectorId'].$get(args, options))
}

export async function putVoiceConnectorsVoiceConnectorId(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connectors'][':voiceConnectorId'].$put(args, options))
}

export async function deleteVoiceConnectorsVoiceConnectorId(
  args: InferRequestType<(typeof client)['voice-connectors'][':voiceConnectorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['voice-connectors'][':voiceConnectorId'].$delete(args, options))
}

export async function getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$get(
      args,
      options,
    ),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$put(
      args,
      options,
    ),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['emergency-calling-configuration'].$delete(
      args,
      options,
    ),
  )
}

export async function getVoiceConnectorGroupsVoiceConnectorGroupId(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connector-groups'][':voiceConnectorGroupId'].$get(args, options),
  )
}

export async function putVoiceConnectorGroupsVoiceConnectorGroupId(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connector-groups'][':voiceConnectorGroupId'].$put(args, options),
  )
}

export async function deleteVoiceConnectorGroupsVoiceConnectorGroupId(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connector-groups'][':voiceConnectorGroupId'].$delete(args, options),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdOrigination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].origination.$get(args, options),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdOrigination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].origination.$put(args, options),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdOrigination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['origination']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].origination.$delete(args, options),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$get(
      args,
      options,
    ),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$put(
      args,
      options,
    ),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxy(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['programmable-numbers']['proxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['programmable-numbers'].proxy.$delete(
      args,
      options,
    ),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdStreamingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$get(args, options),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdStreamingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$put(args, options),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdStreamingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['streaming-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['streaming-configuration'].$delete(
      args,
      options,
    ),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdTermination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination.$get(args, options),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdTermination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination.$put(args, options),
  )
}

export async function deleteVoiceConnectorsVoiceConnectorIdTermination(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination.$delete(args, options),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDelete(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination[
      'credentials#operation=delete'
    ].$post(args, options),
  )
}

export async function getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-membership&app-instance-user-arn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn#scope=app-instance-user-membership&app-instance-user-arn'].$get(
      args,
      options,
    ),
  )
}

export async function getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArn(
  args: InferRequestType<
    (typeof client.channels)[':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[
      ':channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn'
    ].$get(args, options),
  )
}

export async function postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumber(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId#operation=disassociate-phone-number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId#operation=disassociate-phone-number'].$post(
      args,
      options,
    ),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbers(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId#operation=disassociate-phone-numbers'].$post(
      args,
      options,
    ),
  )
}

export async function postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbers(
  args: InferRequestType<
    (typeof client)['voice-connector-groups'][':voiceConnectorGroupId#operation=disassociate-phone-numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connector-groups'][
      ':voiceConnectorGroupId#operation=disassociate-phone-numbers'
    ].$post(args, options),
  )
}

export async function postAccountsAccountIdOperationDisassociateSigninDelegateGroups(
  args: InferRequestType<
    (typeof client.accounts)[':accountId#operation=disassociate-signin-delegate-groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId#operation=disassociate-signin-delegate-groups'].$post(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].settings.$get(args, options))
}

export async function putAccountsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].settings.$put(args, options))
}

export async function getAppInstancesAppInstanceArnRetentionSettings(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn']['retention-settings'].$get(args, options),
  )
}

export async function putAppInstancesAppInstanceArnRetentionSettings(
  args: InferRequestType<
    (typeof client)['app-instances'][':appInstanceArn']['retention-settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['app-instances'][':appInstanceArn']['retention-settings'].$put(args, options),
  )
}

export async function getAccountsAccountIdBotsBotId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].bots[':botId'].$get(args, options))
}

export async function postAccountsAccountIdBotsBotId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['bots'][':botId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].bots[':botId'].$post(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$get(args, options))
}

export async function putSettings(
  args: InferRequestType<typeof client.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$put(args, options))
}

export async function getEndpointsMessagingSession(
  args: InferRequestType<(typeof client.endpoints)['messaging-session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints['messaging-session'].$get(args, options))
}

export async function getPhoneNumberOrdersPhoneNumberOrderId(
  args: InferRequestType<(typeof client)['phone-number-orders'][':phoneNumberOrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['phone-number-orders'][':phoneNumberOrderId'].$get(args, options),
  )
}

export async function getSettingsPhoneNumber(
  args: InferRequestType<(typeof client.settings)['phone-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['phone-number'].$get(args, options))
}

export async function putSettingsPhoneNumber(
  args: InferRequestType<(typeof client.settings)['phone-number']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['phone-number'].$put(args, options))
}

export async function getAccountsAccountIdRetentionSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['retention-settings'].$get(args, options),
  )
}

export async function putAccountsAccountIdRetentionSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['retention-settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['retention-settings'].$put(args, options),
  )
}

export async function getSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$get(
      args,
      options,
    ),
  )
}

export async function putSipMediaApplicationsSipMediaApplicationIdLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['logging-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId']['logging-configuration'].$put(
      args,
      options,
    ),
  )
}

export async function getAccountsAccountIdUsersUserId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].users[':userId'].$get(args, options))
}

export async function postAccountsAccountIdUsersUserId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].users[':userId'].$post(args, options))
}

export async function getAccountsAccountIdUsersUserIdSettings(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId'].settings.$get(args, options),
  )
}

export async function putAccountsAccountIdUsersUserIdSettings(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId'].settings.$put(args, options),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$get(args, options),
  )
}

export async function putVoiceConnectorsVoiceConnectorIdLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['logging-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId']['logging-configuration'].$put(args, options),
  )
}

export async function getVoiceConnectorsVoiceConnectorIdTerminationHealth(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['health']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination.health.$get(args, options),
  )
}

export async function postAccountsAccountIdUsersOperationAdd(
  args: InferRequestType<(typeof client.accounts)[':accountId']['users#operation=add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId']['users#operation=add'].$post(args, options),
  )
}

export async function getAppInstanceUsersAppInstanceArn(
  args: InferRequestType<(typeof client)['app-instance-users#app-instance-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['app-instance-users#app-instance-arn'].$get(args, options))
}

export async function getMeetingsMeetingIdAttendeesAttendeeIdTags(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].attendees[':attendeeId'].tags.$get(args, options),
  )
}

export async function getChannelsScopeAppInstanceUserMemberships(
  args: InferRequestType<(typeof client)['channels#scope=app-instance-user-memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['channels#scope=app-instance-user-memberships'].$get(args, options),
  )
}

export async function getChannelsChannelArnMessages(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].messages.$get(args, options))
}

export async function postChannelsChannelArnMessages(
  args: InferRequestType<(typeof client.channels)[':channelArn']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].messages.$post(args, options))
}

export async function getChannelsAppInstanceArn(
  args: InferRequestType<(typeof client)['channels#app-instance-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['channels#app-instance-arn'].$get(args, options))
}

export async function getChannelsScopeAppInstanceUserModeratedChannels(
  args: InferRequestType<
    (typeof client)['channels#scope=app-instance-user-moderated-channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['channels#scope=app-instance-user-moderated-channels'].$get(args, options),
  )
}

export async function getMeetingsMeetingIdTags(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].tags.$get(args, options))
}

export async function getPhoneNumbers(
  args: InferRequestType<(typeof client)['phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-numbers'].$get(args, options))
}

export async function getPhoneNumberCountriesProductType(
  args: InferRequestType<(typeof client)['phone-number-countries#product-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-number-countries#product-type'].$get(args, options))
}

export async function getTagsArn(
  args: InferRequestType<(typeof client)['tags#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#arn'].$get(args, options))
}

export async function getVoiceConnectorsVoiceConnectorIdTerminationCredentials(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination.credentials.$get(args, options),
  )
}

export async function postAccountsAccountIdUsersUserIdOperationLogout(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId#operation=logout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId#operation=logout'].$post(args, options),
  )
}

export async function postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPut(
  args: InferRequestType<
    (typeof client)['voice-connectors'][':voiceConnectorId']['termination']['credentials#operation=put']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['voice-connectors'][':voiceConnectorId'].termination['credentials#operation=put'].$post(
      args,
      options,
    ),
  )
}

export async function postChannelsChannelArnMessagesMessageIdOperationRedact(
  args: InferRequestType<
    (typeof client.channels)[':channelArn']['messages'][':messageId#operation=redact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channelArn'].messages[':messageId#operation=redact'].$post(args, options),
  )
}

export async function postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedact(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['conversations'][':conversationId']['messages'][':messageId#operation=redact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].conversations[':conversationId'].messages[
      ':messageId#operation=redact'
    ].$post(args, options),
  )
}

export async function postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedact(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['rooms'][':roomId']['messages'][':messageId#operation=redact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].rooms[':roomId'].messages[':messageId#operation=redact'].$post(
      args,
      options,
    ),
  )
}

export async function postAccountsAccountIdBotsBotIdOperationRegenerateSecurityToken(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['bots'][':botId#operation=regenerate-security-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].bots[':botId#operation=regenerate-security-token'].$post(
      args,
      options,
    ),
  )
}

export async function postAccountsAccountIdUsersUserIdOperationResetPersonalPin(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId#operation=reset-personal-pin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId#operation=reset-personal-pin'].$post(
      args,
      options,
    ),
  )
}

export async function postPhoneNumbersPhoneNumberIdOperationRestore(
  args: InferRequestType<
    (typeof client)['phone-numbers'][':phoneNumberId#operation=restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['phone-numbers'][':phoneNumberId#operation=restore'].$post(args, options),
  )
}

export async function getSearchTypePhoneNumbers(
  args: InferRequestType<(typeof client)['search#type=phone-numbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['search#type=phone-numbers'].$get(args, options))
}

export async function postMeetingsMeetingIdTranscriptionOperationStart(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['transcription#operation=start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId']['transcription#operation=start'].$post(args, options),
  )
}

export async function postMeetingsMeetingIdTranscriptionOperationStop(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['transcription#operation=stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId']['transcription#operation=stop'].$post(args, options),
  )
}

export async function postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAdd(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=add']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=add'].$post(
      args,
      options,
    ),
  )
}

export async function postMeetingsMeetingIdTagsOperationAdd(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId']['tags#operation=add'].$post(args, options),
  )
}

export async function postTagsOperationTagResource(
  args: InferRequestType<(typeof client)['tags#operation=tag-resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#operation=tag-resource'].$post(args, options))
}

export async function postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDelete(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['attendees'][':attendeeId']['tags#operation=delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].attendees[':attendeeId']['tags#operation=delete'].$post(
      args,
      options,
    ),
  )
}

export async function postMeetingsMeetingIdTagsOperationDelete(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['tags#operation=delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId']['tags#operation=delete'].$post(args, options),
  )
}

export async function postTagsOperationUntagResource(
  args: InferRequestType<(typeof client)['tags#operation=untag-resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#operation=untag-resource'].$post(args, options))
}

export async function putChannelsChannelArnReadMarker(
  args: InferRequestType<(typeof client.channels)[':channelArn']['readMarker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channelArn'].readMarker.$put(args, options))
}

export async function postSipMediaApplicationsSipMediaApplicationIdCallsTransactionId(
  args: InferRequestType<
    (typeof client)['sip-media-applications'][':sipMediaApplicationId']['calls'][':transactionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sip-media-applications'][':sipMediaApplicationId'].calls[':transactionId'].$post(
      args,
      options,
    ),
  )
}

export async function postEmergencyCallingAddress(
  args: InferRequestType<(typeof client)['emergency-calling']['address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['emergency-calling'].address.$post(args, options))
}
