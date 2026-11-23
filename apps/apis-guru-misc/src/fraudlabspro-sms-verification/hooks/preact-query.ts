import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1VerificationResultQueryKey(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
) {
  return ['v1', '/v1/verification/result', args] as const
}

export function getV1VerificationResultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VerificationResultQueryKey>
  >({
    queryKey: getV1VerificationResultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.verification.result.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1VerificationResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VerificationResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VerificationResultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1VerificationResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.verification.result.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1VerificationResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VerificationResultQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1VerificationSendMutationKey() {
  return ['v1', '/v1/verification/send', 'POST'] as const
}

export function getPostV1VerificationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.verification.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VerificationSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.verification.send.$post>) {
      return parseResponse(client.v1.verification.send.$post(args, options))
    },
  })
}

export function usePostV1VerificationSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.send.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.verification.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1VerificationSendMutationOptions<TError, TOnMutateResult>(
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
