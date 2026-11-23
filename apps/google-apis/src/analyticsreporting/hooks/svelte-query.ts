import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4ReportsBatchGetMutationKey() {
  return ['v4', '/v4/reports:batchGet', 'POST'] as const
}

export function getPostV4ReportsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['reports:batchGet']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ReportsBatchGetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>) {
      return parseResponse(client.v4['reports:batchGet'].$post(args, options))
    },
  })
}

export function createPostV4ReportsBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['reports:batchGet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4ReportsBatchGetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserActivitySearchMutationKey() {
  return ['v4', '/v4/userActivity:search', 'POST'] as const
}

export function getPostV4UserActivitySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['userActivity:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['userActivity:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserActivitySearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['userActivity:search']['$post']>) {
      return parseResponse(client.v4['userActivity:search'].$post(args, options))
    },
  })
}

export function createPostV4UserActivitySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['userActivity:search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)['userActivity:search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4UserActivitySearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
