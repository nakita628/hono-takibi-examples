import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShakespeareKey() {
  return ['shakespeare'] as const
}

export function getShakespeareGenerateInsultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.insult.$get>>,
) {
  return ['shakespeare', '/shakespeare/generate/insult', toValue(args)] as const
}

export function getShakespeareGenerateInsultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.insult.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShakespeareGenerateInsultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shakespeare.generate.insult.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShakespeareGenerateInsult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.insult.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>
              >
            >
          >,
          ReturnType<typeof getShakespeareGenerateInsultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateInsultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShakespeareGenerateInsultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shakespeare.generate.insult.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShakespeareGenerateLoremIpsumQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>
  >,
) {
  return ['shakespeare', '/shakespeare/generate/lorem-ipsum', toValue(args)] as const
}

export function getShakespeareGenerateLoremIpsumQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShakespeareGenerateLoremIpsumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shakespeare.generate['lorem-ipsum'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShakespeareGenerateLoremIpsum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShakespeareGenerateLoremIpsumQueryKey>
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
          Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateLoremIpsumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShakespeareGenerateLoremIpsumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shakespeare.generate['lorem-ipsum'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShakespeareGenerateNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.name.$get>>,
) {
  return ['shakespeare', '/shakespeare/generate/name', toValue(args)] as const
}

export function getShakespeareGenerateNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShakespeareGenerateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shakespeare.generate.name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShakespeareGenerateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.generate.name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>
              >
            >
          >,
          ReturnType<typeof getShakespeareGenerateNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShakespeareGenerateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shakespeare.generate.name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShakespeareQuoteQueryKey() {
  return ['shakespeare', '/shakespeare/quote'] as const
}

export function getShakespeareQuoteQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShakespeareQuoteQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shakespeare.quote.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShakespeareQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>
            >
          >,
          ReturnType<typeof getShakespeareQuoteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShakespeareQuoteQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shakespeare.quote.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShakespeareTranslateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.translate.$get>>,
) {
  return ['shakespeare', '/shakespeare/translate', toValue(args)] as const
}

export function getShakespeareTranslateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.translate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShakespeareTranslateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shakespeare.translate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShakespeareTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shakespeare.translate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
            >
          >,
          ReturnType<typeof getShakespeareTranslateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareTranslateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShakespeareTranslateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shakespeare.translate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
