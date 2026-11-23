import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Apps(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.$get(args, options))
}

export async function postV1Apps(
  args: InferRequestType<typeof client.v1.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.$post(args, options))
}

export async function getV1AppsApplicationIdCampaigns(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].campaigns.$get(args, options))
}

export async function postV1AppsApplicationIdCampaigns(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].campaigns.$post(args, options))
}

export async function getV1TemplatesTemplateNameEmail(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].email.$get(args, options))
}

export async function putV1TemplatesTemplateNameEmail(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].email.$put(args, options))
}

export async function postV1TemplatesTemplateNameEmail(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].email.$post(args, options))
}

export async function deleteV1TemplatesTemplateNameEmail(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].email.$delete(args, options))
}

export async function getV1AppsApplicationIdJobsExport(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].jobs.export.$get(args, options))
}

export async function postV1AppsApplicationIdJobsExport(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].jobs.export.$post(args, options))
}

export async function getV1AppsApplicationIdJobsImport(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].jobs.import.$get(args, options))
}

export async function postV1AppsApplicationIdJobsImport(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].jobs.import.$post(args, options))
}

export async function getV1TemplatesTemplateNameInapp(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].inapp.$get(args, options))
}

export async function putV1TemplatesTemplateNameInapp(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].inapp.$put(args, options))
}

export async function postV1TemplatesTemplateNameInapp(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].inapp.$post(args, options))
}

export async function deleteV1TemplatesTemplateNameInapp(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].inapp.$delete(args, options))
}

export async function getV1AppsApplicationIdJourneys(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].journeys.$get(args, options))
}

export async function postV1AppsApplicationIdJourneys(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].journeys.$post(args, options))
}

export async function getV1TemplatesTemplateNamePush(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].push.$get(args, options))
}

export async function putV1TemplatesTemplateNamePush(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].push.$put(args, options))
}

export async function postV1TemplatesTemplateNamePush(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].push.$post(args, options))
}

export async function deleteV1TemplatesTemplateNamePush(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].push.$delete(args, options))
}

export async function getV1Recommenders(
  args: InferRequestType<typeof client.v1.recommenders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.recommenders.$get(args, options))
}

export async function postV1Recommenders(
  args: InferRequestType<typeof client.v1.recommenders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.recommenders.$post(args, options))
}

export async function getV1AppsApplicationIdSegments(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].segments.$get(args, options))
}

export async function postV1AppsApplicationIdSegments(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].segments.$post(args, options))
}

export async function getV1TemplatesTemplateNameSms(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].sms.$get(args, options))
}

export async function putV1TemplatesTemplateNameSms(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].sms.$put(args, options))
}

export async function postV1TemplatesTemplateNameSms(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].sms.$post(args, options))
}

export async function deleteV1TemplatesTemplateNameSms(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].sms.$delete(args, options))
}

export async function getV1TemplatesTemplateNameVoice(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].voice.$get(args, options))
}

export async function putV1TemplatesTemplateNameVoice(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].voice.$put(args, options))
}

export async function postV1TemplatesTemplateNameVoice(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].voice.$post(args, options))
}

export async function deleteV1TemplatesTemplateNameVoice(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates[':template-name'].voice.$delete(args, options))
}

export async function getV1AppsApplicationIdChannelsAdm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.adm.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsAdm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.adm.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsAdm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.adm.$delete(args, options))
}

export async function getV1AppsApplicationIdChannelsApns(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.apns.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsApns(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.apns.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsApns(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.apns.$delete(args, options))
}

export async function getV1AppsApplicationIdChannelsApnsSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_sandbox.$get(args, options),
  )
}

export async function putV1AppsApplicationIdChannelsApnsSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_sandbox.$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdChannelsApnsSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_sandbox.$delete(args, options),
  )
}

export async function getV1AppsApplicationIdChannelsApnsVoip(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip.$get(args, options),
  )
}

export async function putV1AppsApplicationIdChannelsApnsVoip(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip.$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdChannelsApnsVoip(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip.$delete(args, options),
  )
}

export async function getV1AppsApplicationIdChannelsApnsVoipSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip_sandbox.$get(args, options),
  )
}

export async function putV1AppsApplicationIdChannelsApnsVoipSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip_sandbox.$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdChannelsApnsVoipSandbox(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.apns_voip_sandbox.$delete(args, options),
  )
}

export async function getV1AppsApplicationId(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].$get(args, options))
}

export async function deleteV1AppsApplicationId(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].$delete(args, options))
}

export async function getV1AppsApplicationIdChannelsBaidu(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.baidu.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsBaidu(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.baidu.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsBaidu(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.baidu.$delete(args, options),
  )
}

export async function getV1AppsApplicationIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].$get(args, options),
  )
}

export async function putV1AppsApplicationIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].$delete(args, options),
  )
}

export async function getV1AppsApplicationIdChannelsEmail(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.email.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsEmail(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.email.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsEmail(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['email']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.email.$delete(args, options),
  )
}

export async function getV1AppsApplicationIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].endpoints[':endpoint-id'].$get(args, options),
  )
}

export async function putV1AppsApplicationIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].endpoints[':endpoint-id'].$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].endpoints[':endpoint-id'].$delete(args, options),
  )
}

export async function getV1AppsApplicationIdEventstream(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].eventstream.$get(args, options))
}

export async function postV1AppsApplicationIdEventstream(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].eventstream.$post(args, options))
}

export async function deleteV1AppsApplicationIdEventstream(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].eventstream.$delete(args, options))
}

export async function getV1AppsApplicationIdChannelsGcm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.gcm.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsGcm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.gcm.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsGcm(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.gcm.$delete(args, options))
}

export async function getV1AppsApplicationIdJourneysJourneyId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].$get(args, options),
  )
}

export async function putV1AppsApplicationIdJourneysJourneyId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdJourneysJourneyId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].$delete(args, options),
  )
}

export async function getV1RecommendersRecommenderId(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.recommenders[':recommender-id'].$get(args, options))
}

export async function putV1RecommendersRecommenderId(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.recommenders[':recommender-id'].$put(args, options))
}

export async function deleteV1RecommendersRecommenderId(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.recommenders[':recommender-id'].$delete(args, options))
}

export async function getV1AppsApplicationIdSegmentsSegmentId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].$get(args, options),
  )
}

export async function putV1AppsApplicationIdSegmentsSegmentId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].$put(args, options),
  )
}

export async function deleteV1AppsApplicationIdSegmentsSegmentId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].$delete(args, options),
  )
}

export async function getV1AppsApplicationIdChannelsSms(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.sms.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsSms(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.sms.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsSms(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.sms.$delete(args, options))
}

export async function getV1AppsApplicationIdUsersUserId(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].users[':user-id'].$get(args, options),
  )
}

export async function deleteV1AppsApplicationIdUsersUserId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].users[':user-id'].$delete(args, options),
  )
}

export async function getV1AppsApplicationIdChannelsVoice(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.voice.$get(args, options))
}

export async function putV1AppsApplicationIdChannelsVoice(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.voice.$put(args, options))
}

export async function deleteV1AppsApplicationIdChannelsVoice(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].channels.voice.$delete(args, options),
  )
}

export async function getV1AppsApplicationIdKpisDaterangeKpiName(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].kpis.daterange[':kpi-name'].$get(args, options),
  )
}

export async function getV1AppsApplicationIdSettings(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].settings.$get(args, options))
}

export async function putV1AppsApplicationIdSettings(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].settings.$put(args, options))
}

export async function getV1AppsApplicationIdCampaignsCampaignIdActivities(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].activities.$get(args, options),
  )
}

export async function getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiName(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].kpis.daterange[':kpi-name'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AppsApplicationIdCampaignsCampaignIdVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].versions[':version'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AppsApplicationIdCampaignsCampaignIdVersions(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].campaigns[':campaign-id'].versions.$get(args, options),
  )
}

export async function getV1AppsApplicationIdChannels(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].channels.$get(args, options))
}

export async function getV1AppsApplicationIdJobsExportJobId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].jobs.export[':job-id'].$get(args, options),
  )
}

export async function getV1AppsApplicationIdJobsImportJobId(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].jobs.import[':job-id'].$get(args, options),
  )
}

export async function getV1AppsApplicationIdEndpointsEndpointIdInappmessages(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].endpoints[':endpoint-id'].inappmessages.$get(args, options),
  )
}

export async function getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiName(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].kpis.daterange[':kpi-name'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetrics(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].activities[':journey-activity-id'][
      'execution-metrics'
    ].$get(args, options),
  )
}

export async function getV1AppsApplicationIdJourneysJourneyIdExecutionMetrics(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id']['execution-metrics'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AppsApplicationIdSegmentsSegmentIdJobsExport(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].jobs.export.$get(args, options),
  )
}

export async function getV1AppsApplicationIdSegmentsSegmentIdJobsImport(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].jobs.import.$get(args, options),
  )
}

export async function getV1AppsApplicationIdSegmentsSegmentIdVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].versions[':version'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AppsApplicationIdSegmentsSegmentIdVersions(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].segments[':segment-id'].versions.$get(args, options),
  )
}

export async function getV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn'].$get(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn'].$post(args, options))
}

export async function getV1TemplatesTemplateNameTemplateTypeVersions(
  args: InferRequestType<
    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.templates[':template-name'][':template-type'].versions.$get(args, options),
  )
}

export async function getV1Templates(
  args: InferRequestType<typeof client.v1.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates.$get(args, options))
}

export async function postV1PhoneNumberValidate(
  args: InferRequestType<typeof client.v1.phone.number.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.phone.number.validate.$post(args, options))
}

export async function postV1AppsApplicationIdEvents(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].events.$post(args, options))
}

export async function putV1AppsApplicationIdAttributesAttributeType(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].attributes[':attribute-type'].$put(args, options),
  )
}

export async function postV1AppsApplicationIdMessages(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].messages.$post(args, options))
}

export async function postV1AppsApplicationIdOtp(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].otp.$post(args, options))
}

export async function postV1AppsApplicationIdUsersMessages(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id']['users-messages'].$post(args, options),
  )
}

export async function deleteV1TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn#tagKeys'].$delete(args, options))
}

export async function putV1AppsApplicationIdEndpoints(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id'].endpoints.$put(args, options))
}

export async function putV1AppsApplicationIdJourneysJourneyIdState(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apps[':application-id'].journeys[':journey-id'].state.$put(args, options),
  )
}

export async function putV1TemplatesTemplateNameTemplateTypeActiveVersion(
  args: InferRequestType<
    (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.templates[':template-name'][':template-type']['active-version'].$put(args, options),
  )
}

export async function postV1AppsApplicationIdVerifyOtp(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':application-id']['verify-otp'].$post(args, options))
}
