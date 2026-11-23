import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectV1VerificationResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.verification.result.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1VerificationResultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1VerificationSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1VerificationSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
