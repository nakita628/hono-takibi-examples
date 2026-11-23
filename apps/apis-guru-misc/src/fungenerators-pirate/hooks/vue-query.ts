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

export function getPirateKey() {
  return ['pirate'] as const
}

export function getPirateGenerateInsultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.insult.$get>>,
) {
  return ['pirate', '/pirate/generate/insult', toValue(args)] as const
}

export function getPirateGenerateInsultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.insult.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPirateGenerateInsultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pirate.generate.insult.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePirateGenerateInsult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.insult.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
            >
          >,
          ReturnType<typeof getPirateGenerateInsultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.insult.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateInsultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPirateGenerateInsultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pirate.generate.insult.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPirateGenerateLoremIpsumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>,
) {
  return ['pirate', '/pirate/generate/lorem-ipsum', toValue(args)] as const
}

export function getPirateGenerateLoremIpsumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPirateGenerateLoremIpsumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pirate.generate['lorem-ipsum'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePirateGenerateLoremIpsum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPirateGenerateLoremIpsumQueryKey>
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
          Awaited<ReturnType<(typeof client.pirate.generate)['lorem-ipsum']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateLoremIpsumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPirateGenerateLoremIpsumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pirate.generate['lorem-ipsum'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPirateGenerateNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.name.$get>>,
) {
  return ['pirate', '/pirate/generate/name', toValue(args)] as const
}

export function getPirateGenerateNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPirateGenerateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pirate.generate.name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePirateGenerateName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.generate.name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>
            >
          >,
          ReturnType<typeof getPirateGenerateNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.generate.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPirateGenerateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPirateGenerateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pirate.generate.name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPirateTranslateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.translate.$get>>,
) {
  return ['pirate', '/pirate/translate', toValue(args)] as const
}

export function getPirateTranslateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.translate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPirateTranslateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pirate.translate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePirateTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pirate.translate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>
            >
          >,
          ReturnType<typeof getPirateTranslateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pirate.translate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPirateTranslateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPirateTranslateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pirate.translate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
