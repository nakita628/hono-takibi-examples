import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ChallengeGenerateMutationKey() {
  return ['v2', '/v2/challenge:generate', 'POST'] as const
}

export function getPostV2ChallengeGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['challenge:generate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['challenge:generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ChallengeGenerateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['challenge:generate']['$post']>) {
      return parseResponse(client.v2['challenge:generate'].$post(args, options))
    },
  })
}

export function createPostV2ChallengeGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['challenge:generate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['challenge:generate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ChallengeGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2ChallengeVerifyMutationKey() {
  return ['v2', '/v2/challenge:verify', 'POST'] as const
}

export function getPostV2ChallengeVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['challenge:verify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['challenge:verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ChallengeVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['challenge:verify']['$post']>) {
      return parseResponse(client.v2['challenge:verify'].$post(args, options))
    },
  })
}

export function createPostV2ChallengeVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['challenge:verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['challenge:verify']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ChallengeVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
