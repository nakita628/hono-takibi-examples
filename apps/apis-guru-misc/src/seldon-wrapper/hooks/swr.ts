import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAggregateKey() {
  return ['aggregate'] as const
}

export function getPredictKey() {
  return ['predict'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getSendFeedbackKey() {
  return ['send-feedback'] as const
}

export function getTransformInputKey() {
  return ['transform-input'] as const
}

export function getTransformOutputKey() {
  return ['transform-output'] as const
}

export function getGetAggregateKey(args: InferRequestType<typeof client.aggregate.$get>) {
  return ['aggregate', '/aggregate', args] as const
}

export function useGetAggregate<TError = unknown>(
  args: InferRequestType<typeof client.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAggregate<TError = unknown>(
  args: InferRequestType<typeof client.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAggregateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAggregateKey() {
  return ['aggregate', '/aggregate', 'POST'] as const
}

export function usePostAggregate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregate.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.aggregate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAggregateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aggregate.$post> }) =>
        parseResponse(client.aggregate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPredictKey(args: InferRequestType<typeof client.predict.$get>) {
  return ['predict', '/predict', args] as const
}

export function useGetPredict<TError = unknown>(
  args: InferRequestType<typeof client.predict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.predict.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPredict<TError = unknown>(
  args: InferRequestType<typeof client.predict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.predict.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPredictKey() {
  return ['predict', '/predict', 'POST'] as const
}

export function usePostPredict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predict.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.predict.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPredictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.predict.$post> }) =>
        parseResponse(client.predict.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRouteKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function useGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRouteKey() {
  return ['route', '/route', 'POST'] as const
}

export function usePostRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.route.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.route.$post> }) =>
        parseResponse(client.route.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendFeedbackKey(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
) {
  return ['send-feedback', '/send-feedback', args] as const
}

export function useGetSendFeedback<TError = unknown>(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSendFeedbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['send-feedback'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendFeedback<TError = unknown>(
  args: InferRequestType<(typeof client)['send-feedback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSendFeedbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['send-feedback'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSendFeedbackKey() {
  return ['send-feedback', '/send-feedback', 'POST'] as const
}

export function usePostSendFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-feedback']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['send-feedback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['send-feedback']['$post']> },
      ) => parseResponse(client['send-feedback'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransformInputKey(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
) {
  return ['transform-input', '/transform-input', args] as const
}

export function useGetTransformInput<TError = unknown>(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTransformInputKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transform-input'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformInput<TError = unknown>(
  args: InferRequestType<(typeof client)['transform-input']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTransformInputKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transform-input'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransformInputKey() {
  return ['transform-input', '/transform-input', 'POST'] as const
}

export function usePostTransformInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-input']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['transform-input']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransformInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['transform-input']['$post']> },
      ) => parseResponse(client['transform-input'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransformOutputKey(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
) {
  return ['transform-output', '/transform-output', args] as const
}

export function useGetTransformOutput<TError = unknown>(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetTransformOutputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transform-output'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformOutput<TError = unknown>(
  args: InferRequestType<(typeof client)['transform-output']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetTransformOutputKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transform-output'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransformOutputKey() {
  return ['transform-output', '/transform-output', 'POST'] as const
}

export function usePostTransformOutput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transform-output']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['transform-output']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransformOutputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['transform-output']['$post']> },
      ) => parseResponse(client['transform-output'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
