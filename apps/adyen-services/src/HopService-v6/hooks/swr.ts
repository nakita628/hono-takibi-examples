import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetOnboardingUrlKey() {
  return ['getOnboardingUrl'] as const
}

export function getGetPciQuestionnaireUrlKey() {
  return ['getPciQuestionnaireUrl'] as const
}

export function getPostGetOnboardingUrlKey() {
  return ['getOnboardingUrl', '/getOnboardingUrl', 'POST'] as const
}

export function usePostGetOnboardingUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getOnboardingUrl.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getOnboardingUrl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetOnboardingUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getOnboardingUrl.$post> }) =>
        parseResponse(client.getOnboardingUrl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetPciQuestionnaireUrlKey() {
  return ['getPciQuestionnaireUrl', '/getPciQuestionnaireUrl', 'POST'] as const
}

export function usePostGetPciQuestionnaireUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getPciQuestionnaireUrl.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getPciQuestionnaireUrl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetPciQuestionnaireUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getPciQuestionnaireUrl.$post> },
      ) => parseResponse(client.getPciQuestionnaireUrl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
