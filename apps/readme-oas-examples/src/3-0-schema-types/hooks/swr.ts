import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getPutAnythingStringsKey() {
  return ['anything', '/anything/strings', 'PUT'] as const
}

export function usePutAnythingStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.strings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.strings.$put> }) =>
        parseResponse(client.anything.strings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingStringsKey() {
  return ['anything', '/anything/strings', 'POST'] as const
}

export function usePostAnythingStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.strings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.strings.$post> }) =>
        parseResponse(client.anything.strings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingStringsTopLevelPayloadsKey() {
  return ['anything', '/anything/strings/top-level-payloads', 'POST'] as const
}

export function usePostAnythingStringsTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingStringsTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$post']>
        },
      ) => parseResponse(client.anything.strings['top-level-payloads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingStringsTopLevelPayloadsKey() {
  return ['anything', '/anything/strings/top-level-payloads', 'PATCH'] as const
}

export function usePatchAnythingStringsTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.strings)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingStringsTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.strings)['top-level-payloads']['$patch']>
        },
      ) => parseResponse(client.anything.strings['top-level-payloads'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAnythingNumbersKey() {
  return ['anything', '/anything/numbers', 'PUT'] as const
}

export function usePutAnythingNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.numbers.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.numbers.$put> }) =>
        parseResponse(client.anything.numbers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingNumbersKey() {
  return ['anything', '/anything/numbers', 'POST'] as const
}

export function usePostAnythingNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.numbers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.numbers.$post> }) =>
        parseResponse(client.anything.numbers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingNumbersKey() {
  return ['anything', '/anything/numbers', 'PATCH'] as const
}

export function usePatchAnythingNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.numbers.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.numbers.$patch> }) =>
        parseResponse(client.anything.numbers.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingBooleansKey() {
  return ['anything', '/anything/booleans', 'POST'] as const
}

export function usePostAnythingBooleans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.booleans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingBooleansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.booleans.$post> }) =>
        parseResponse(client.anything.booleans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingBooleansKey() {
  return ['anything', '/anything/booleans', 'PATCH'] as const
}

export function usePatchAnythingBooleans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.booleans.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingBooleansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.booleans.$patch> }) =>
        parseResponse(client.anything.booleans.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingArraysKey() {
  return ['anything', '/anything/arrays', 'POST'] as const
}

export function usePostAnythingArrays<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.arrays.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.arrays.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingArraysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.arrays.$post> }) =>
        parseResponse(client.anything.arrays.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingArraysTopLevelPayloadsKey() {
  return ['anything', '/anything/arrays/top-level-payloads', 'POST'] as const
}

export function usePostAnythingArraysTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingArraysTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$post']>
        },
      ) => parseResponse(client.anything.arrays['top-level-payloads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingArraysTopLevelPayloadsKey() {
  return ['anything', '/anything/arrays/top-level-payloads', 'PATCH'] as const
}

export function usePatchAnythingArraysTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingArraysTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.arrays)['top-level-payloads']['$patch']>
        },
      ) => parseResponse(client.anything.arrays['top-level-payloads'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingObjectsKey() {
  return ['anything', '/anything/objects', 'POST'] as const
}

export function usePostAnythingObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.objects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.objects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.objects.$post> }) =>
        parseResponse(client.anything.objects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingCircularKey() {
  return ['anything', '/anything/circular', 'POST'] as const
}

export function usePostAnythingCircular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.circular.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingCircularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.circular.$post> }) =>
        parseResponse(client.anything.circular.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingCircularKey() {
  return ['anything', '/anything/circular', 'PATCH'] as const
}

export function usePatchAnythingCircular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.circular.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.circular.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingCircularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.circular.$patch> }) =>
        parseResponse(client.anything.circular.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingRawBodyTopLevelPayloadsKey() {
  return ['anything', '/anything/raw_body/top-level-payloads', 'POST'] as const
}

export function usePostAnythingRawBodyTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingRawBodyTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$post']>
        },
      ) => parseResponse(client.anything.raw_body['top-level-payloads'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingRawBodyTopLevelPayloadsKey() {
  return ['anything', '/anything/raw_body/top-level-payloads', 'PATCH'] as const
}

export function usePatchAnythingRawBodyTopLevelPayloads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingRawBodyTopLevelPayloadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything.raw_body)['top-level-payloads']['$patch']>
        },
      ) => parseResponse(client.anything.raw_body['top-level-payloads'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingQuirksKey() {
  return ['anything', '/anything/quirks', 'POST'] as const
}

export function usePostAnythingQuirks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.quirks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingQuirksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.quirks.$post> }) =>
        parseResponse(client.anything.quirks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAnythingQuirksPolymorphismKey() {
  return ['anything', '/anything/quirks/polymorphism', 'PUT'] as const
}

export function usePutAnythingQuirksPolymorphism<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.quirks.polymorphism.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingQuirksPolymorphismKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.anything.quirks.polymorphism.$put> },
      ) => parseResponse(client.anything.quirks.polymorphism.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingQuirksPolymorphismKey() {
  return ['anything', '/anything/quirks/polymorphism', 'POST'] as const
}

export function usePostAnythingQuirksPolymorphism<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.quirks.polymorphism.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingQuirksPolymorphismKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.anything.quirks.polymorphism.$post> },
      ) => parseResponse(client.anything.quirks.polymorphism.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingQuirksPolymorphismKey() {
  return ['anything', '/anything/quirks/polymorphism', 'PATCH'] as const
}

export function usePatchAnythingQuirksPolymorphism<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.quirks.polymorphism.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.quirks.polymorphism.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingQuirksPolymorphismKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.anything.quirks.polymorphism.$patch> },
      ) => parseResponse(client.anything.quirks.polymorphism.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
