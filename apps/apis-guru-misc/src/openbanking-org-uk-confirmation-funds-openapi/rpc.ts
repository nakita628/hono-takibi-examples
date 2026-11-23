import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFundsConfirmationConsents(
  args: InferRequestType<(typeof client)['funds-confirmation-consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['funds-confirmation-consents'].$post(args, options))
}

export async function getFundsConfirmationConsentsConsentId(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['funds-confirmation-consents'][':ConsentId'].$get(args, options),
  )
}

export async function deleteFundsConfirmationConsentsConsentId(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['funds-confirmation-consents'][':ConsentId'].$delete(args, options),
  )
}

export async function postFundsConfirmations(
  args: InferRequestType<(typeof client)['funds-confirmations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['funds-confirmations'].$post(args, options))
}
