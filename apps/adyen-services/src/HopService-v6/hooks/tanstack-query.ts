import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetOnboardingUrlKey() {
  return ['getOnboardingUrl'] as const
}

export function getGetPciQuestionnaireUrlKey() {
  return ['getPciQuestionnaireUrl'] as const
}

export function getPostGetOnboardingUrlMutationKey() {
  return ['getOnboardingUrl', '/getOnboardingUrl', 'POST'] as const
}

export function getPostGetOnboardingUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getOnboardingUrl.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getOnboardingUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetOnboardingUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getOnboardingUrl.$post>) {
      return parseResponse(client.getOnboardingUrl.$post(args, options))
    },
  })
}

export function usePostGetOnboardingUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getOnboardingUrl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getOnboardingUrl.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetOnboardingUrlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetPciQuestionnaireUrlMutationKey() {
  return ['getPciQuestionnaireUrl', '/getPciQuestionnaireUrl', 'POST'] as const
}

export function getPostGetPciQuestionnaireUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getPciQuestionnaireUrl.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getPciQuestionnaireUrl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetPciQuestionnaireUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getPciQuestionnaireUrl.$post>) {
      return parseResponse(client.getPciQuestionnaireUrl.$post(args, options))
    },
  })
}

export function usePostGetPciQuestionnaireUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getPciQuestionnaireUrl.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getPciQuestionnaireUrl.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetPciQuestionnaireUrlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
