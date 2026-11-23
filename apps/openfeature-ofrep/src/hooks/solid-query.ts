import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOfrepKey() {
  return ['ofrep'] as const
}

export function getPostOfrepV1EvaluateFlagsKeyMutationKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags/:key', 'POST'] as const
}

export function getPostOfrepV1EvaluateFlagsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOfrepV1EvaluateFlagsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
    ) {
      return parseResponse(client.ofrep.v1.evaluate.flags[':key'].$post(args, options))
    },
  })
}

export function createPostOfrepV1EvaluateFlagsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
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
    const mutationDefaults = getPostOfrepV1EvaluateFlagsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOfrepV1EvaluateFlagsMutationKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags', 'POST'] as const
}

export function getPostOfrepV1EvaluateFlagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ofrep.v1.evaluate.flags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOfrepV1EvaluateFlagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>) {
      return parseResponse(client.ofrep.v1.evaluate.flags.$post(args, options))
    },
  })
}

export function createPostOfrepV1EvaluateFlags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ofrep.v1.evaluate.flags.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>,
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
    const mutationDefaults = getPostOfrepV1EvaluateFlagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
