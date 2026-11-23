import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV05WellKnownOpenidConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(
    client['v0.5']['.well-known']['openid-configuration'].$get(undefined, options),
  )
}

export async function getV05Certs(options?: ClientRequestOptions) {
  return await parseResponse(client['v0.5'].certs.$get(undefined, options))
}

export async function postV05ConsentRequestsInit(
  args: InferRequestType<(typeof client)['v0.5']['consent-requests']['init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['consent-requests'].init.$post(args, options))
}

export async function postV05ConsentRequestsOnInit(
  args: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['consent-requests']['on-init'].$post(args, options))
}

export async function postV05ConsentRequestsOnStatus(
  args: InferRequestType<(typeof client)['v0.5']['consent-requests']['on-status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['consent-requests']['on-status'].$post(args, options))
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

export async function postV05ConsentsHiuNotify(
  args: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents.hiu.notify.$post(args, options))
}

export async function postV05ConsentsHiuOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['consents']['hiu']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents.hiu['on-notify'].$post(args, options))
}

export async function postV05ConsentsOnFetch(
  args: InferRequestType<(typeof client)['v0.5']['consents']['on-fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].consents['on-fetch'].$post(args, options))
}

export async function postV05HealthInformationCmRequest(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['cm']['request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['health-information'].cm.request.$post(args, options))
}

export async function postV05HealthInformationHiuOnRequest(
  args: InferRequestType<
    (typeof client)['v0.5']['health-information']['hiu']['on-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v0.5']['health-information'].hiu['on-request'].$post(args, options),
  )
}

export async function postV05HealthInformationNotify(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['health-information'].notify.$post(args, options))
}

export async function postV05HealthInformationTransfer(
  args: InferRequestType<(typeof client)['v0.5']['health-information']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['health-information'].transfer.$post(args, options))
}

export async function getV05Heartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client['v0.5'].heartbeat.$get(undefined, options))
}

export async function postV05PatientsFind(
  args: InferRequestType<(typeof client)['v0.5']['patients']['find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].patients.find.$post(args, options))
}

export async function postV05PatientsOnFind(
  args: InferRequestType<(typeof client)['v0.5']['patients']['on-find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].patients['on-find'].$post(args, options))
}

export async function postV05Sessions(
  args: InferRequestType<(typeof client)['v0.5']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].sessions.$post(args, options))
}

export async function postV05SubscriptionRequestsCmInit(
  args: InferRequestType<(typeof client)['v0.5']['subscription-requests']['cm']['init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5']['subscription-requests'].cm.init.$post(args, options))
}

export async function postV05SubscriptionRequestsHiuNotify(
  args: InferRequestType<
    (typeof client)['v0.5']['subscription-requests']['hiu']['notify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v0.5']['subscription-requests'].hiu.notify.$post(args, options),
  )
}

export async function postV05SubscriptionRequestsHiuOnInit(
  args: InferRequestType<
    (typeof client)['v0.5']['subscription-requests']['hiu']['on-init']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v0.5']['subscription-requests'].hiu['on-init'].$post(args, options),
  )
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

export async function postV05SubscriptionsHiuNotify(
  args: InferRequestType<(typeof client)['v0.5']['subscriptions']['hiu']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].subscriptions.hiu.notify.$post(args, options))
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

export async function postV05UsersAuthNotify(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth.notify.$post(args, options))
}

export async function postV05UsersAuthOnConfirm(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['on-confirm'].$post(args, options))
}

export async function postV05UsersAuthOnFetchModes(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-fetch-modes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['on-fetch-modes'].$post(args, options))
}

export async function postV05UsersAuthOnInit(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-init']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['on-init'].$post(args, options))
}

export async function postV05UsersAuthOnNotify(
  args: InferRequestType<(typeof client)['v0.5']['users']['auth']['on-notify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v0.5'].users.auth['on-notify'].$post(args, options))
}
