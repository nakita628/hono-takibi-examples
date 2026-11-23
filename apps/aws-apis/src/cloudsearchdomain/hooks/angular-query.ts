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

export function get_2013_01_01Key() {
  return ['2013-01-01'] as const
}

export function get20130101SearchFormatSdkPrettyTrueQQueryKey(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-01-01', '/2013-01-01/search#format=sdk&pretty=true&q', keyArgs] as const
}

export function get20130101SearchFormatSdkPrettyTrueQQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130101SearchFormatSdkPrettyTrueQQueryKey>
  >({
    queryKey: get20130101SearchFormatSdkPrettyTrueQQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20130101SearchFormatSdkPrettyTrueQ<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130101SearchFormatSdkPrettyTrueQQueryKey>
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
      ...get20130101SearchFormatSdkPrettyTrueQQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-01-01', '/2013-01-01/suggest#format=sdk&pretty=true&q&suggester', keyArgs] as const
}

export function get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey>
  >({
    queryKey: get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject20130101SuggestFormatSdkPrettyTrueQSuggester<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey>
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
      ...get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPost20130101DocumentsBatchFormatSdkContentTypeMutationKey() {
  return ['2013-01-01', '/2013-01-01/documents/batch#format=sdk&Content-Type', 'POST'] as const
}

export function getPost20130101DocumentsBatchFormatSdkContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20130101DocumentsBatchFormatSdkContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client['2013-01-01'].documents['batch#format=sdk&Content-Type'].$post(args, options),
      )
    },
  })
}

export function injectPost20130101DocumentsBatchFormatSdkContentType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
        >,
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
    const mutationDefaults = getPost20130101DocumentsBatchFormatSdkContentTypeMutationOptions<
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
