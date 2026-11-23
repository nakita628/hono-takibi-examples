import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2013_01_01Key() {
  return ['2013-01-01'] as const
}

export function get20130101SearchFormatSdkPrettyTrueQQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-01-01', '/2013-01-01/search#format=sdk&pretty=true&q', keyArgs] as const
}

export function get20130101SearchFormatSdkPrettyTrueQQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130101SearchFormatSdkPrettyTrueQQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20130101SearchFormatSdkPrettyTrueQ<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20130101SearchFormatSdkPrettyTrueQQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130101SearchFormatSdkPrettyTrueQQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2013-01-01', '/2013-01-01/suggest#format=sdk&pretty=true&q&suggester', keyArgs] as const
}

export function get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20130101SuggestFormatSdkPrettyTrueQSuggester<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20130101SuggestFormatSdkPrettyTrueQSuggesterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20130101DocumentsBatchFormatSdkContentType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20130101DocumentsBatchFormatSdkContentTypeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
