import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDiscordKey(args: InferRequestType<typeof client.discord.$get>) {
  const { header: _, ...keyArgs } = args
  return ['discord', '/discord', keyArgs] as const
}

export function useGetDiscord<TError = unknown>(
  args: InferRequestType<typeof client.discord.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.discord.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDiscord<TError = unknown>(
  args: InferRequestType<typeof client.discord.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.discord.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDiscordKey() {
  return ['discord', '/discord', 'POST'] as const
}

export function usePostDiscord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discord.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.discord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDiscordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.discord.$post> }) =>
        parseResponse(client.discord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSlackKey(args: InferRequestType<typeof client.slack.$get>) {
  const { header: _, ...keyArgs } = args
  return ['slack', '/slack', keyArgs] as const
}

export function useGetSlack<TError = unknown>(
  args: InferRequestType<typeof client.slack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSlackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.slack.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSlack<TError = unknown>(
  args: InferRequestType<typeof client.slack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSlackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.slack.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSlackKey() {
  return ['slack', '/slack', 'POST'] as const
}

export function usePostSlack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slack.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.slack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSlackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.slack.$post> }) =>
        parseResponse(client.slack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnsKey(args: InferRequestType<typeof client.sns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sns', '/sns', keyArgs] as const
}

export function useGetSns<TError = unknown>(
  args: InferRequestType<typeof client.sns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSns<TError = unknown>(
  args: InferRequestType<typeof client.sns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sns.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSnsKey() {
  return ['sns', '/sns', 'POST'] as const
}

export function usePostSns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sns.$post> }) =>
        parseResponse(client.sns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTopicTopicNameKey(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['topic', '/topic/:topic_name', keyArgs] as const
}

export function useGetTopicTopicName<TError = unknown>(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicTopicNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topic[':topic_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicTopicName<TError = unknown>(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicTopicNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topic)[':topic_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topic[':topic_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTwilioKey(args: InferRequestType<typeof client.twilio.$get>) {
  const { header: _, ...keyArgs } = args
  return ['twilio', '/twilio', keyArgs] as const
}

export function useGetTwilio<TError = unknown>(
  args: InferRequestType<typeof client.twilio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTwilioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.twilio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTwilio<TError = unknown>(
  args: InferRequestType<typeof client.twilio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTwilioKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.twilio.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTwilioKey() {
  return ['twilio', '/twilio', 'POST'] as const
}

export function usePostTwilio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twilio.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.twilio.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTwilioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.twilio.$post> }) =>
        parseResponse(client.twilio.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
