import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV05CareContextsOnDiscover(
  args: InferRequestType<(typeof client)['v0.5']['care-contexts']['on-discover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['care-contexts']['on-discover'].$post(args, options))
}

export async function postV05ConsentRequestsInit(
  args: InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['consent-requests'].init.$post(args, options))
}

export async function postV05ConsentRequestsStatus(
  args: InferRequestType<(typeof client)['v0.5']['consent-requests']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['consent-requests'].status.$post(args, options))
}

export async function postV05ConsentsFetch(
  args: InferRequestType<(typeof client)['v0.5']['consents']['fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents.fetch.$post(args, options))
}

export async function postV05ConsentsHipOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['consents']['hip']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents.hip['on-notify'].$post(args, options))
}

export async function postV05ConsentsHiuOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents.hiu['on-notify'].$post(args, options))
}

export async function postV05HealthInformationNotify(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['health-information'].notify.$post(args, options))
}

export async function postV05HealthInformationOnRequest(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['on-request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v0.5']['health-information']['on-request'].$post(args, options),
  )
}

export async function postV05HealthInformationRequest(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['health-information'].request.$post(args, options))
}

export async function getV05Heartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client['v0.5'].heartbeat.$get(undefined, options))
}

export async function postV05LinksLinkAddContexts(
  args: InferRequestType<(typeof client)['v0.5']['links']['link']['add-contexts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].links.link['add-contexts'].$post(args, options))
}

export async function postV05LinksLinkOnConfirm(
  args: InferRequestType<(typeof client)['v0.5']['links']['link']['on-confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].links.link['on-confirm'].$post(args, options))
}

export async function postV05LinksLinkOnInit(
  args: InferRequestType<(typeof client)['v0.5']['links']['link']['on-init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].links.link['on-init'].$post(args, options))
}

export async function postV05PatientsFind(
  args: InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].patients.find.$post(args, options))
}

export async function postV05PatientsProfileOnShare(
  args: InferRequestType<(typeof client)['v0.5']['patients']['profile']['on-share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].patients.profile['on-share'].$post(args, options))
}

export async function postV05SubscriptionRequestsCmInit(
  args: InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['subscription-requests'].cm.init.$post(args, options))
}

export async function postV05SubscriptionRequestsHiuOnNotify(
  args: InferRequestType<
    (typeof client)['v0.5']['subscription-requests']['hiu']['on-notify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v0.5']['subscription-requests'].hiu['on-notify'].$post(args, options),
  )
}

export async function postV05SubscriptionsHiuOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].subscriptions.hiu['on-notify'].$post(args, options))
}

export async function postV05UsersAuthConfirm(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth.confirm.$post(args, options))
}

export async function postV05UsersAuthFetchModes(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['fetch-modes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['fetch-modes'].$post(args, options))
}

export async function postV05UsersAuthInit(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth.init.$post(args, options))
}

export async function postV05UsersAuthOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['on-notify'].$post(args, options))
}
