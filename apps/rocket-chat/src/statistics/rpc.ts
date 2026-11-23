import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1StatisticsList(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['statistics.list'].$get(args, options))
}

export async function getApiV1Statistics(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statistics.$get(args, options))
}

export async function postApiV1StatisticsTelemetry(
  args: InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['statistics.telemetry'].$post(args, options))
}

export async function getApiV1EngagementDashboardUsersNewUsers(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].users['new-users'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardUsersActiveUsers(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].users['active-users'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeek(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1EngagementDashboardUsersChatBusierHourlyData(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardUsersChatBusierWeeklyData(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardMessagesMessagesSent(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardMessagesOrigin(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].messages.origin.$get(args, options),
  )
}

export async function getApiV1EngagementDashboardMessagesTopFivePopularChannels(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(args, options),
  )
}

export async function getApiV1EngagementDashboardChannelsList(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['engagement-dashboard'].channels.list.$get(args, options),
  )
}
