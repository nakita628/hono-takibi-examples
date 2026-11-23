import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSmsKey() {
  return ['sms'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getPostSmsMutationKey() {
  return ['sms', '/sms', 'POST'] as const
}

export function getPostSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.$post>) {
      return parseResponse(client.sms.$post(args, options))
    },
  })
}

export function usePostSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
        TError,
        InferRequestType<typeof client.sms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVoiceMutationKey() {
  return ['voice', '/voice', 'POST'] as const
}

export function getPostVoiceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
    TError,
    InferRequestType<typeof client.voice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voice.$post>) {
      return parseResponse(client.voice.$post(args, options))
    },
  })
}

export function usePostVoice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
        TError,
        InferRequestType<typeof client.voice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoiceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
