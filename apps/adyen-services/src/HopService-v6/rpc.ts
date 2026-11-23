import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGetOnboardingUrl(
  args: InferRequestType<typeof client.getOnboardingUrl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getOnboardingUrl.$post(args, options))
}

export async function postGetPciQuestionnaireUrl(
  args: InferRequestType<typeof client.getPciQuestionnaireUrl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPciQuestionnaireUrl.$post(args, options))
}
