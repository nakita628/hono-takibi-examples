import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPutAnythingTopLevelArrayMutationKey() {
  return ['anything', '/anything/top-level-array', 'PUT'] as const
}

export function getPutAnythingTopLevelArrayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-array']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['top-level-array']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingTopLevelArrayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['top-level-array']['$put']>) {
      return parseResponse(client.anything['top-level-array'].$put(args, options))
    },
  })
}

export function usePutAnythingTopLevelArray<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['top-level-array']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['top-level-array']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAnythingTopLevelArrayMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingTopLevelArrayMutationKey() {
  return ['anything', '/anything/top-level-array', 'POST'] as const
}

export function getPostAnythingTopLevelArrayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-array']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['top-level-array']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingTopLevelArrayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['top-level-array']['$post']>) {
      return parseResponse(client.anything['top-level-array'].$post(args, options))
    },
  })
}

export function usePostAnythingTopLevelArray<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['top-level-array']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['top-level-array']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingTopLevelArrayMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingTopLevelObjectSimpleMutationKey() {
  return ['anything', '/anything/top-level-object/simple', 'POST'] as const
}

export function getPostAnythingTopLevelObjectSimpleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['top-level-object']['simple']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingTopLevelObjectSimpleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>,
    ) {
      return parseResponse(client.anything['top-level-object'].simple.$post(args, options))
    },
  })
}

export function usePostAnythingTopLevelObjectSimple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['top-level-object']['simple']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingTopLevelObjectSimpleMutationOptions<
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

export function getPostTopLevelObjectOfEverythingMutationKey() {
  return ['top-level-object', '/top-level-object/of-everything', 'POST'] as const
}

export function getPostTopLevelObjectOfEverythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['top-level-object']['of-everything']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTopLevelObjectOfEverythingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']>,
    ) {
      return parseResponse(client['top-level-object']['of-everything'].$post(args, options))
    },
  })
}

export function usePostTopLevelObjectOfEverything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['top-level-object']['of-everything']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTopLevelObjectOfEverythingMutationOptions<
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

export function getPostMultischemaOfEverythingMutationKey() {
  return ['multischema', '/multischema/of-everything', 'POST'] as const
}

export function getPostMultischemaOfEverythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.multischema)['of-everything']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.multischema)['of-everything']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMultischemaOfEverythingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.multischema)['of-everything']['$post']>,
    ) {
      return parseResponse(client.multischema['of-everything'].$post(args, options))
    },
  })
}

export function usePostMultischemaOfEverything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.multischema)['of-everything']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.multischema)['of-everything']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMultischemaOfEverythingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
