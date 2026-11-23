import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
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

export function getPostV1RecordsQueryHistoryRecordMutationKey() {
  return ['v1', '/v1/records:queryHistoryRecord', 'POST'] as const
}

export function getPostV1RecordsQueryHistoryRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['records:queryHistoryRecord']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RecordsQueryHistoryRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']>,
    ) {
      return parseResponse(client.v1['records:queryHistoryRecord'].$post(args, options))
    },
  })
}

export function injectPostV1RecordsQueryHistoryRecord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['records:queryHistoryRecord']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']>,
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
    const mutationDefaults = getPostV1RecordsQueryHistoryRecordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RecordsQueryRecordMutationKey() {
  return ['v1', '/v1/records:queryRecord', 'POST'] as const
}

export function getPostV1RecordsQueryRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['records:queryRecord']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['records:queryRecord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RecordsQueryRecordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['records:queryRecord']['$post']>) {
      return parseResponse(client.v1['records:queryRecord'].$post(args, options))
    },
  })
}

export function injectPostV1RecordsQueryRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['records:queryRecord']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['records:queryRecord']['$post']>,
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
    const mutationDefaults = getPostV1RecordsQueryRecordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
