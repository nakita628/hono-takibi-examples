import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmoji(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.emoji.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDark(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.dark.$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSize(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['matrix-avatar'][
      ':size'
    ].$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBanToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBanToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'][':banId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBotToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcast(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].broadcast.$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendees(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].attendees.$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
      'request-assistance'
    ].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
      'request-assistance'
    ].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].rooms.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].rooms.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitch(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].switch.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionDashboardEvents(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].dashboard.events.$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEvents(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['mutual-events'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionCallToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionCallToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$put(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionCallToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionCallToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownload(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].download.$get(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].ring[':attendeeId'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].dialout[':attendeeId'].$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token']['notification-state'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[':messageId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[
      ':messageId'
    ].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShare(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenShare(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarize(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].summarize.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContext(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].context.$get(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].reminder.$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].reminder.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
      ':messageId'
    ].reminder.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingReminders(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['upcoming-reminders'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenRead(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRead(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverview(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.overview.$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].pin.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].pin.$delete(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelf(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
      ':messageId'
    ].pin.self.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentions(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].mentions.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolder(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].attachment.folder.$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachment(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].attachment.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionTags(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionTags(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$post(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionTagsTagId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$delete(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionTagsReorder(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.reorder.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsed(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].collapsed.$put(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionFileFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].file[':fileId'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshare[':shareToken'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionGuestTokenName(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].guest[':token'].name.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguages(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'].languages.$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguages(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
      'translation-languages'
    ].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguage(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
      ':token'
    ].language.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguage(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'][
      'target-language'
    ].$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccount(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$get(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionMatrixAccount(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$put(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAccount(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccount(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheck(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.check.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$get(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackup(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.backup.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixRoom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.join.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBridgeToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionBridgeToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBridgeToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcess(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].process.$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionPollToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].draft[':pollId'].$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionPollTokenDrafts(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].drafts.$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormat(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].export[
      ':format'
    ].$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionPresetsRoom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].presets.room.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionPublicshareauth(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshareauth.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRecordingToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$delete(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotification(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].notification.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetry(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].retry.$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChat(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token']['share-chat'].$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionListedRoom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion']['listed-room'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRooms(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['breakout-rooms'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelf(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['note-to-self'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotify(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].notify.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCalls(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['notify-calls'].$post(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescription(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].description.$put(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObject(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].object.$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$get(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipants(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
      'breakout-rooms'
    ].participants.$get(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelf(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.self.$delete(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendees(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].attendees.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$delete(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnly(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['read-only'].$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListable(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].listable.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissions(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['mention-permissions'].$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPassword(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].password.$put(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTags(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].tags.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.active.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.active.$delete(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsState(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.state.$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$delete(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsMode(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].permissions[':mode'].$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissions(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].attendees.permissions.$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAll(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
      ':token'
    ].attendees.permissions.all.$put(args, options),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobby(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.lobby.$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSip(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.sip.$put(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsent(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['recording-consent'].$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitations(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants[
      'resend-invitations'
    ].$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpiration(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['message-expiration'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmails(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['import-emails'].$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilities(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].capabilities.$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeeting(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].meeting.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionSettingsUser(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.user.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionSignalingSettings(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.settings.$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionSignalingToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionSignalingToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedTempUserAvatar(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedTempUserAvatar(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecent(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads.recent.$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreads(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['subscribed-threads'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[':threadId'].$get(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[':threadId'].$put(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotify(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
      ':messageId'
    ].notify.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSize(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][':size'].$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDark(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][':size'].dark.$get(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSize(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
      ':size'
    ].$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDark(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
      ':size'
    ].dark.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionFederationInvitation(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].federation.active.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].federation.active.$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessage(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].message.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[':messageId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[
      ':messageId'
    ].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionBotAskFeatures(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot['ask-features'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBotAdmin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot.admin.$get(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionCertificateExpiration(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].certificate.expiration.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrial(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].hostedsignalingserver.requesttrial.$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDelete(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].hostedsignalingserver.delete.$delete(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$get(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$post(
      args,
      options,
    ),
  )
}

export async function putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTest(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].test.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionBridgeVersion(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.version.$get(args, options),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionBridge(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.$delete(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.welcome[':serverId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionSettingsSip(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.sip.$post(args, options),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.welcome[':serverId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingBackend(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.backend.$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUpload(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token']['request-upload'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStore(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].store.$post(
      args,
      options,
    ),
  )
}

export async function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].pin[':pin'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialin(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['verify-dialin'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialIn(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['direct-dial-in'].$post(args, options),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialout(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['verify-dialout'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialIn(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['open-dial-in'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialout(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['rejected-dialout'].$delete(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsSpreedApiApiVersionSignalingBackend(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.backend.$post(args, options),
  )
}
