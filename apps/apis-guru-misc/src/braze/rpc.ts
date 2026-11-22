import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCampaignsDataSeries(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.data_series.$get(args, options))
}

export async function getCampaignsDetails(
  args: InferRequestType<typeof client.campaigns.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.details.$get(args, options))
}

export async function getCampaignsList(
  args: InferRequestType<typeof client.campaigns.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.list.$get(args, options))
}

export async function getCanvasDataSeries(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canvas.data_series.$get(args, options))
}

export async function getCanvasDataSummary(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canvas.data_summary.$get(args, options))
}

export async function getCanvasDetails(
  args: InferRequestType<typeof client.canvas.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canvas.details.$get(args, options))
}

export async function getCanvasList(
  args: InferRequestType<typeof client.canvas.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canvas.list.$get(args, options))
}

export async function postCanvasTriggerScheduleCreate(
  args: InferRequestType<typeof client.canvas.trigger.schedule.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canvas.trigger.schedule.create.$post(args, options))
}

export async function getContentBlocksInfo(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_blocks.info.$get(args, options))
}

export async function getContentBlocksList(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_blocks.list.$get(args, options))
}

export async function getEmailHardBounces(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.hard_bounces.$get(args, options))
}

export async function getEmailUnsubscribes(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.unsubscribes.$get(args, options))
}

export async function getEventsDataSeries(
  args: InferRequestType<typeof client.events.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.data_series.$get(args, options))
}

export async function getEventsList(
  args: InferRequestType<typeof client.events.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.list.$get(args, options))
}

export async function getFeedDataSeries(
  args: InferRequestType<typeof client.feed.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feed.data_series.$get(args, options))
}

export async function getFeedDetails(
  args: InferRequestType<typeof client.feed.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feed.details.$get(args, options))
}

export async function getFeedList(
  args: InferRequestType<typeof client.feed.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feed.list.$get(args, options))
}

export async function getKpiDauDataSeries(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kpi.dau.data_series.$get(args, options))
}

export async function getKpiMauDataSeries(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kpi.mau.data_series.$get(args, options))
}

export async function getKpiNewUsersDataSeries(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kpi.new_users.data_series.$get(args, options))
}

export async function getKpiUninstallsDataSeries(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kpi.uninstalls.data_series.$get(args, options))
}

export async function getMessagesScheduledBroadcasts(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.scheduled_broadcasts.$get(args, options))
}

export async function getSegmentsDataSeries(
  args: InferRequestType<typeof client.segments.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.data_series.$get(args, options))
}

export async function getSegmentsDetails(
  args: InferRequestType<typeof client.segments.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.details.$get(args, options))
}

export async function getSegmentsList(
  args: InferRequestType<typeof client.segments.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.list.$get(args, options))
}

export async function getSendsDataSeries(
  args: InferRequestType<typeof client.sends.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sends.data_series.$get(args, options))
}

export async function getSessionsDataSeries(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.data_series.$get(args, options))
}

export async function getSubscriptionStatusGet(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription.status.get.$get(args, options))
}

export async function getSubscriptionUserStatus(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription.user.status.$get(args, options))
}

export async function getTemplatesEmailInfo(
  args: InferRequestType<typeof client.templates.email.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.email.info.$get(args, options))
}

export async function getTemplatesEmailList(
  args: InferRequestType<typeof client.templates.email.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.email.list.$get(args, options))
}
