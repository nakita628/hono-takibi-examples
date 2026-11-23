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

export function getConfigKey() {
  return ['config'] as const
}

export function getDiscordKey() {
  return ['discord'] as const
}

export function getSlackKey() {
  return ['slack'] as const
}

export function getSnsKey() {
  return ['sns'] as const
}

export function getTopicKey() {
  return ['topic'] as const
}

export function getTwilioKey() {
  return ['twilio'] as const
}

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discord.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['discord', '/discord', keyArgs] as const
}

export function getDiscordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discord.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discord.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDiscord<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discord.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
          >,
          ReturnType<typeof getDiscordQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discord.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDiscordMutationKey() {
  return ['discord', '/discord', 'POST'] as const
}

export function getPostDiscordMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$post>>>>>,
    TError,
    InferRequestType<typeof client.discord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDiscordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.discord.$post>) {
      return parseResponse(client.discord.$post(args, options))
    },
  })
}

export function usePostDiscord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.discord.$post>,
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
  const mutationDefaults = getPostDiscordMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSlackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slack.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['slack', '/slack', keyArgs] as const
}

export function getSlackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slack.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.slack.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSlack<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.slack.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
          ReturnType<typeof getSlackQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSlackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.slack.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSlackMutationKey() {
  return ['slack', '/slack', 'POST'] as const
}

export function getPostSlackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$post>>>>>,
    TError,
    InferRequestType<typeof client.slack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSlackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.slack.$post>) {
      return parseResponse(client.slack.$post(args, options))
    },
  })
}

export function usePostSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$post>>>>>,
          TError,
          InferRequestType<typeof client.slack.$post>,
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
  const mutationDefaults = getPostSlackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sns.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sns', '/sns', keyArgs] as const
}

export function getSnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSns<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
          ReturnType<typeof getSnsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnsMutationKey() {
  return ['sns', '/sns', 'POST'] as const
}

export function getPostSnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$post>>>>>,
    TError,
    InferRequestType<typeof client.sns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sns.$post>) {
      return parseResponse(client.sns.$post(args, options))
    },
  })
}

export function usePostSns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$post>>>>>,
          TError,
          InferRequestType<typeof client.sns.$post>,
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
  const mutationDefaults = getPostSnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTopicTopicNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topic)[':topic_name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['topic', '/topic/:topic_name', keyArgs] as const
}

export function getTopicTopicNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topic)[':topic_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicTopicNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topic[':topic_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopicTopicName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topic)[':topic_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTopicTopicNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicTopicNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicTopicNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topic[':topic_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTwilioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.twilio.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['twilio', '/twilio', keyArgs] as const
}

export function getTwilioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.twilio.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTwilioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.twilio.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTwilio<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.twilio.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
          ReturnType<typeof getTwilioQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTwilioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTwilioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.twilio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTwilioMutationKey() {
  return ['twilio', '/twilio', 'POST'] as const
}

export function getPostTwilioMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$post>>>>>,
    TError,
    InferRequestType<typeof client.twilio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTwilioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.twilio.$post>) {
      return parseResponse(client.twilio.$post(args, options))
    },
  })
}

export function usePostTwilio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.twilio.$post>,
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
  const mutationDefaults = getPostTwilioMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
