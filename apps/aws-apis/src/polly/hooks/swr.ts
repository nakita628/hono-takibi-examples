import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1LexiconsLexiconNameKey(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/lexicons/:LexiconName', keyArgs] as const
}

export function useGetV1LexiconsLexiconName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
          >
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
        ? getGetV1LexiconsLexiconNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.lexicons[':LexiconName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LexiconsLexiconName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
          >
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
        ? getGetV1LexiconsLexiconNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.lexicons[':LexiconName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LexiconsLexiconNameKey() {
  return ['v1', '/v1/lexicons/:LexiconName', 'PUT'] as const
}

export function usePutV1LexiconsLexiconName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LexiconsLexiconNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']> },
      ) => parseResponse(client.v1.lexicons[':LexiconName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1LexiconsLexiconNameKey() {
  return ['v1', '/v1/lexicons/:LexiconName', 'DELETE'] as const
}

export function useDeleteV1LexiconsLexiconName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LexiconsLexiconNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']> },
      ) => parseResponse(client.v1.lexicons[':LexiconName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VoicesKey(args: InferRequestType<typeof client.v1.voices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices', keyArgs] as const
}

export function useGetV1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Voices<TError = unknown>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.voices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SynthesisTasksTaskIdKey(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/synthesisTasks/:TaskId', keyArgs] as const
}

export function useGetV1SynthesisTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
          >
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
        ? getGetV1SynthesisTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.synthesisTasks[':TaskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SynthesisTasksTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
          >
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
        ? getGetV1SynthesisTasksTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.synthesisTasks[':TaskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LexiconsKey(args: InferRequestType<typeof client.v1.lexicons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/lexicons', keyArgs] as const
}

export function useGetV1Lexicons<TError = unknown>(
  args: InferRequestType<typeof client.v1.lexicons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LexiconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.lexicons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Lexicons<TError = unknown>(
  args: InferRequestType<typeof client.v1.lexicons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LexiconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.lexicons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SynthesisTasksKey(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/synthesisTasks', keyArgs] as const
}

export function useGetV1SynthesisTasks<TError = unknown>(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
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
        ? getGetV1SynthesisTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.synthesisTasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SynthesisTasks<TError = unknown>(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
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
        ? getGetV1SynthesisTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.synthesisTasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SynthesisTasksKey() {
  return ['v1', '/v1/synthesisTasks', 'POST'] as const
}

export function usePostV1SynthesisTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.synthesisTasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SynthesisTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.synthesisTasks.$post> }) =>
        parseResponse(client.v1.synthesisTasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SpeechKey() {
  return ['v1', '/v1/speech', 'POST'] as const
}

export function usePostV1Speech<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speech.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.speech.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SpeechKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.speech.$post> }) =>
        parseResponse(client.v1.speech.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
