import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getMultischemaKey() {
  return ['multischema'] as const
}

export function getTopLevelObjectKey() {
  return ['top-level-object'] as const
}

export function getPutAnythingTopLevelArrayKey() {
  return ['anything', '/anything/top-level-array', 'PUT'] as const
}

export function usePutAnythingTopLevelArray<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-array']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['top-level-array']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingTopLevelArrayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['top-level-array']['$put']> },
      ) => parseResponse(client.anything['top-level-array'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingTopLevelArrayKey() {
  return ['anything', '/anything/top-level-array', 'POST'] as const
}

export function usePostAnythingTopLevelArray<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-array']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['top-level-array']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingTopLevelArrayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['top-level-array']['$post']> },
      ) => parseResponse(client.anything['top-level-array'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingTopLevelObjectSimpleKey() {
  return ['anything', '/anything/top-level-object/simple', 'POST'] as const
}

export function usePostAnythingTopLevelObjectSimple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-object']['simple']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingTopLevelObjectSimpleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>
        },
      ) => parseResponse(client.anything['top-level-object'].simple.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTopLevelObjectOfEverythingKey() {
  return ['top-level-object', '/top-level-object/of-everything', 'POST'] as const
}

export function usePostTopLevelObjectOfEverything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['top-level-object']['of-everything']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopLevelObjectOfEverythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']> },
      ) => parseResponse(client['top-level-object']['of-everything'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMultischemaOfEverythingKey() {
  return ['multischema', '/multischema/of-everything', 'POST'] as const
}

export function usePostMultischemaOfEverything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.multischema)['of-everything']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.multischema)['of-everything']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultischemaOfEverythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.multischema)['of-everything']['$post']> },
      ) => parseResponse(client.multischema['of-everything'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
