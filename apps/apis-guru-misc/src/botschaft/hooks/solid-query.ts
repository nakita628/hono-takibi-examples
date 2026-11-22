import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDiscordQueryKey(args: InferRequestType<typeof client.discord.$get>) {
  const { header: _, ...keyArgs } = args
  return ['discord', '/discord', keyArgs] as const
}

export function getDiscordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discord.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscordQueryKey>
  >({
    queryKey: getDiscordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discord.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDiscord<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discord.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDiscordQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDiscord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.discord.$post>,
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
    const mutationDefaults = getPostDiscordMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSlackQueryKey(args: InferRequestType<typeof client.slack.$get>) {
  const { header: _, ...keyArgs } = args
  return ['slack', '/slack', keyArgs] as const
}

export function getSlackQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.slack.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSlackQueryKey>
  >({
    queryKey: getSlackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.slack.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSlack<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.slack.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSlackQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$post>>>>>,
          TError,
          InferRequestType<typeof client.slack.$post>,
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
    const mutationDefaults = getPostSlackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSnsQueryKey(args: InferRequestType<typeof client.sns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sns', '/sns', keyArgs] as const
}

export function getSnsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnsQueryKey>
  >({
    queryKey: getSnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSns<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSnsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$post>>>>>,
          TError,
          InferRequestType<typeof client.sns.$post>,
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
    const mutationDefaults = getPostSnsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTopicTopicNameQueryKey(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['topic', '/topic/:topic_name', keyArgs] as const
}

export function getTopicTopicNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicTopicNameQueryKey>
  >({
    queryKey: getTopicTopicNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topic[':topic_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTopicTopicName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTopicTopicNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopicTopicNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTwilioQueryKey(args: InferRequestType<typeof client.twilio.$get>) {
  const { header: _, ...keyArgs } = args
  return ['twilio', '/twilio', keyArgs] as const
}

export function getTwilioQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.twilio.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTwilioQueryKey>
  >({
    queryKey: getTwilioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.twilio.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTwilio<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.twilio.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTwilioQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTwilioQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTwilio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.twilio.$post>,
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
    const mutationDefaults = getPostTwilioMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
