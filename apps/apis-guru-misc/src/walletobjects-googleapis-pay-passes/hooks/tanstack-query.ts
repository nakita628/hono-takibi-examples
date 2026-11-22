import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWalletobjectsKey() {
  return ['walletobjects'] as const
}

export function getWalletobjectsV1EventTicketClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass', args] as const
}

export function getWalletobjectsV1EventTicketClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1EventTicketClassQueryKey>
  >({
    queryKey: getWalletobjectsV1EventTicketClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.eventTicketClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1EventTicketClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1EventTicketClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1EventTicketClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1EventTicketClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1EventTicketClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass', 'POST'] as const
}

export function getPostWalletobjectsV1EventTicketClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1EventTicketClassMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post>,
    ) {
      return parseResponse(client.walletobjects.v1.eventTicketClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1EventTicketClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1EventTicketClassMutationOptions<
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

export function getWalletobjectsV1EventTicketClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', args] as const
}

export function getWalletobjectsV1EventTicketClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1EventTicketClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1EventTicketClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.eventTicketClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1EventTicketClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1EventTicketClassResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1EventTicketClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1EventTicketClassResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1EventTicketClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1EventTicketClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1EventTicketClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketClass[':resourceId'].$put(args, options),
      )
    },
  })
}

export function usePutWalletobjectsV1EventTicketClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1EventTicketClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1EventTicketClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1EventTicketClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1EventTicketClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketClass[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1EventTicketClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1EventTicketClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1EventTicketClassResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketClass/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1EventTicketClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1EventTicketClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1EventTicketClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostWalletobjectsV1EventTicketClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1EventTicketObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject', args] as const
}

export function getWalletobjectsV1EventTicketObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1EventTicketObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1EventTicketObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1EventTicketObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1EventTicketObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1EventTicketObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1EventTicketObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1EventTicketObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject', 'POST'] as const
}

export function getPostWalletobjectsV1EventTicketObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1EventTicketObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post>,
    ) {
      return parseResponse(client.walletobjects.v1.eventTicketObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1EventTicketObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1EventTicketObjectMutationOptions<
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

export function getWalletobjectsV1EventTicketObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', args] as const
}

export function getWalletobjectsV1EventTicketObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1EventTicketObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1EventTicketObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1EventTicketObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1EventTicketObjectResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1EventTicketObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1EventTicketObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1EventTicketObjectResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1EventTicketObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1EventTicketObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1EventTicketObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject[':resourceId'].$put(args, options),
      )
    },
  })
}

export function usePutWalletobjectsV1EventTicketObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1EventTicketObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1EventTicketObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1EventTicketObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1EventTicketObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1EventTicketObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1EventTicketObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1EventTicketObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageMutationOptions<
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

export function getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketObject/:resourceId/modifyLinkedOfferObjects',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.eventTicketObject[':resourceId'].modifyLinkedOfferObjects.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsMutationOptions<
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

export function getWalletobjectsV1FlightClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/flightClass', args] as const
}

export function getWalletobjectsV1FlightClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1FlightClassQueryKey>
  >({
    queryKey: getWalletobjectsV1FlightClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.flightClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1FlightClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1FlightClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1FlightClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1FlightClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1FlightClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass', 'POST'] as const
}

export function getPostWalletobjectsV1FlightClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.flightClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1FlightClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.flightClass.$post>) {
      return parseResponse(client.walletobjects.v1.flightClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1FlightClass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.flightClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1FlightClassMutationOptions<
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

export function getWalletobjectsV1FlightClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', args] as const
}

export function getWalletobjectsV1FlightClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1FlightClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1FlightClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.flightClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1FlightClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1FlightClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1FlightClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1FlightClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1FlightClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1FlightClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1FlightClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1FlightClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1FlightClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1FlightClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1FlightClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1FlightClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>,
    ) {
      return parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$patch(args, options))
    },
  })
}

export function usePatchWalletobjectsV1FlightClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1FlightClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1FlightClassResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1FlightClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1FlightClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.flightClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1FlightClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1FlightClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1FlightObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/flightObject', args] as const
}

export function getWalletobjectsV1FlightObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1FlightObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1FlightObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.flightObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1FlightObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1FlightObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1FlightObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1FlightObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1FlightObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject', 'POST'] as const
}

export function getPostWalletobjectsV1FlightObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.flightObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1FlightObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.flightObject.$post>) {
      return parseResponse(client.walletobjects.v1.flightObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1FlightObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.flightObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1FlightObjectMutationOptions<
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

export function getWalletobjectsV1FlightObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', args] as const
}

export function getWalletobjectsV1FlightObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1FlightObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1FlightObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.flightObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1FlightObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1FlightObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1FlightObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1FlightObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1FlightObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1FlightObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1FlightObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1FlightObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.flightObject[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1FlightObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1FlightObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1FlightObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1FlightObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1FlightObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.flightObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1FlightObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1FlightObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1FlightObjectResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1FlightObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1FlightObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.flightObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1FlightObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1FlightObjectResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1GenericClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/genericClass', args] as const
}

export function getWalletobjectsV1GenericClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GenericClassQueryKey>
  >({
    queryKey: getWalletobjectsV1GenericClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.genericClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GenericClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GenericClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GenericClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GenericClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1GenericClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass', 'POST'] as const
}

export function getPostWalletobjectsV1GenericClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.genericClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GenericClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.genericClass.$post>) {
      return parseResponse(client.walletobjects.v1.genericClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1GenericClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.genericClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GenericClassMutationOptions<
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

export function getWalletobjectsV1GenericClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', args] as const
}

export function getWalletobjectsV1GenericClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GenericClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1GenericClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.genericClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GenericClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GenericClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GenericClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GenericClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1GenericClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1GenericClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1GenericClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.genericClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1GenericClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1GenericClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1GenericClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1GenericClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1GenericClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.genericClass[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1GenericClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1GenericClassResourceIdMutationOptions<
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

export function getWalletobjectsV1GenericObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/genericObject', args] as const
}

export function getWalletobjectsV1GenericObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GenericObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1GenericObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.genericObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GenericObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GenericObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GenericObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GenericObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1GenericObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject', 'POST'] as const
}

export function getPostWalletobjectsV1GenericObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.genericObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GenericObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.genericObject.$post>) {
      return parseResponse(client.walletobjects.v1.genericObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1GenericObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.genericObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GenericObjectMutationOptions<
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

export function getWalletobjectsV1GenericObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', args] as const
}

export function getWalletobjectsV1GenericObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GenericObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1GenericObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.genericObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GenericObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GenericObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GenericObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GenericObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GenericObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1GenericObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1GenericObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1GenericObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.genericObject[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1GenericObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1GenericObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1GenericObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1GenericObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1GenericObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.genericObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1GenericObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1GenericObjectResourceIdMutationOptions<
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

export function getWalletobjectsV1GiftCardClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardClass', args] as const
}

export function getWalletobjectsV1GiftCardClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GiftCardClassQueryKey>
  >({
    queryKey: getWalletobjectsV1GiftCardClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.giftCardClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GiftCardClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GiftCardClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GiftCardClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GiftCardClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1GiftCardClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass', 'POST'] as const
}

export function getPostWalletobjectsV1GiftCardClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GiftCardClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post>) {
      return parseResponse(client.walletobjects.v1.giftCardClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1GiftCardClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GiftCardClassMutationOptions<
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

export function getWalletobjectsV1GiftCardClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', args] as const
}

export function getWalletobjectsV1GiftCardClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GiftCardClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1GiftCardClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.giftCardClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GiftCardClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GiftCardClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GiftCardClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GiftCardClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1GiftCardClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1GiftCardClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1GiftCardClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.giftCardClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1GiftCardClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1GiftCardClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1GiftCardClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1GiftCardClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1GiftCardClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.giftCardClass[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1GiftCardClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1GiftCardClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1GiftCardClassResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/giftCardClass/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1GiftCardClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GiftCardClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.giftCardClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1GiftCardClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GiftCardClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1GiftCardObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardObject', args] as const
}

export function getWalletobjectsV1GiftCardObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GiftCardObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1GiftCardObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.giftCardObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GiftCardObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GiftCardObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GiftCardObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GiftCardObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1GiftCardObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject', 'POST'] as const
}

export function getPostWalletobjectsV1GiftCardObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GiftCardObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post>) {
      return parseResponse(client.walletobjects.v1.giftCardObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1GiftCardObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GiftCardObjectMutationOptions<
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

export function getWalletobjectsV1GiftCardObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', args] as const
}

export function getWalletobjectsV1GiftCardObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1GiftCardObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1GiftCardObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.giftCardObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1GiftCardObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1GiftCardObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1GiftCardObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1GiftCardObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1GiftCardObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1GiftCardObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1GiftCardObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1GiftCardObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.giftCardObject[':resourceId'].$put(args, options),
      )
    },
  })
}

export function usePutWalletobjectsV1GiftCardObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1GiftCardObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1GiftCardObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1GiftCardObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1GiftCardObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.giftCardObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1GiftCardObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1GiftCardObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/giftCardObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.giftCardObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1GiftCardObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1IssuerQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/issuer', args] as const
}

export function getWalletobjectsV1IssuerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1IssuerQueryKey>
  >({
    queryKey: getWalletobjectsV1IssuerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.issuer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1Issuer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1IssuerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1IssuerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1Issuer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1IssuerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1IssuerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1IssuerMutationKey() {
  return ['walletobjects', '/walletobjects/v1/issuer', 'POST'] as const
}

export function getPostWalletobjectsV1IssuerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.issuer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1IssuerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.issuer.$post>) {
      return parseResponse(client.walletobjects.v1.issuer.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1Issuer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.issuer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1IssuerMutationOptions<TError, TOnMutateResult>(
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

export function getWalletobjectsV1IssuerResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', args] as const
}

export function getWalletobjectsV1IssuerResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1IssuerResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1IssuerResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.issuer[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1IssuerResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1IssuerResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1IssuerResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1IssuerResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1IssuerResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1IssuerResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1IssuerResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1IssuerResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1IssuerResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.issuer[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1IssuerResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1IssuerResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1IssuerResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1IssuerResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1IssuerResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>,
    ) {
      return parseResponse(client.walletobjects.v1.issuer[':resourceId'].$patch(args, options))
    },
  })
}

export function usePatchWalletobjectsV1IssuerResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1IssuerResourceIdMutationOptions<
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

export function getPostWalletobjectsV1JwtMutationKey() {
  return ['walletobjects', '/walletobjects/v1/jwt', 'POST'] as const
}

export function getPostWalletobjectsV1JwtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.jwt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.jwt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1JwtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.jwt.$post>) {
      return parseResponse(client.walletobjects.v1.jwt.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1Jwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.jwt.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.jwt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1JwtMutationOptions<TError, TOnMutateResult>(
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

export function getWalletobjectsV1LoyaltyClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass', args] as const
}

export function getWalletobjectsV1LoyaltyClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1LoyaltyClassQueryKey>
  >({
    queryKey: getWalletobjectsV1LoyaltyClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.loyaltyClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1LoyaltyClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1LoyaltyClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1LoyaltyClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1LoyaltyClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1LoyaltyClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass', 'POST'] as const
}

export function getPostWalletobjectsV1LoyaltyClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1LoyaltyClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post>) {
      return parseResponse(client.walletobjects.v1.loyaltyClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1LoyaltyClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1LoyaltyClassMutationOptions<
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

export function getWalletobjectsV1LoyaltyClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', args] as const
}

export function getWalletobjectsV1LoyaltyClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1LoyaltyClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1LoyaltyClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.loyaltyClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1LoyaltyClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1LoyaltyClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1LoyaltyClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1LoyaltyClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1LoyaltyClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1LoyaltyClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1LoyaltyClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.loyaltyClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1LoyaltyClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1LoyaltyClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1LoyaltyClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1LoyaltyClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1LoyaltyClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.loyaltyClass[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1LoyaltyClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1LoyaltyClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.loyaltyClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1LoyaltyClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1LoyaltyObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject', args] as const
}

export function getWalletobjectsV1LoyaltyObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1LoyaltyObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1LoyaltyObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.loyaltyObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1LoyaltyObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1LoyaltyObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1LoyaltyObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1LoyaltyObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1LoyaltyObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject', 'POST'] as const
}

export function getPostWalletobjectsV1LoyaltyObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1LoyaltyObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post>) {
      return parseResponse(client.walletobjects.v1.loyaltyObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1LoyaltyObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1LoyaltyObjectMutationOptions<
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

export function getWalletobjectsV1LoyaltyObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', args] as const
}

export function getWalletobjectsV1LoyaltyObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1LoyaltyObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1LoyaltyObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.loyaltyObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1LoyaltyObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1LoyaltyObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1LoyaltyObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1LoyaltyObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1LoyaltyObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1LoyaltyObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1LoyaltyObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1LoyaltyObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.loyaltyObject[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1LoyaltyObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1LoyaltyObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1LoyaltyObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1LoyaltyObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1LoyaltyObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.loyaltyObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1LoyaltyObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1LoyaltyObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/loyaltyObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.loyaltyObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1LoyaltyObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageMutationOptions<
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

export function getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/loyaltyObject/:resourceId/modifyLinkedOfferObjects',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.loyaltyObject[':resourceId'].modifyLinkedOfferObjects.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjects<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsMutationOptions<
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

export function getWalletobjectsV1OfferClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/offerClass', args] as const
}

export function getWalletobjectsV1OfferClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1OfferClassQueryKey>
  >({
    queryKey: getWalletobjectsV1OfferClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.offerClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1OfferClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1OfferClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1OfferClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1OfferClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1OfferClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass', 'POST'] as const
}

export function getPostWalletobjectsV1OfferClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.offerClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1OfferClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.offerClass.$post>) {
      return parseResponse(client.walletobjects.v1.offerClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1OfferClass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.offerClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1OfferClassMutationOptions<TError, TOnMutateResult>(
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

export function getWalletobjectsV1OfferClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', args] as const
}

export function getWalletobjectsV1OfferClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1OfferClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1OfferClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.offerClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1OfferClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1OfferClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1OfferClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1OfferClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1OfferClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1OfferClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1OfferClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1OfferClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1OfferClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1OfferClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1OfferClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1OfferClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>,
    ) {
      return parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$patch(args, options))
    },
  })
}

export function usePatchWalletobjectsV1OfferClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1OfferClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1OfferClassResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1OfferClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1OfferClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.offerClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1OfferClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1OfferClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1OfferObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/offerObject', args] as const
}

export function getWalletobjectsV1OfferObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1OfferObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1OfferObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.offerObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1OfferObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1OfferObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1OfferObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1OfferObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1OfferObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject', 'POST'] as const
}

export function getPostWalletobjectsV1OfferObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.offerObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1OfferObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.offerObject.$post>) {
      return parseResponse(client.walletobjects.v1.offerObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1OfferObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.offerObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1OfferObjectMutationOptions<
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

export function getWalletobjectsV1OfferObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', args] as const
}

export function getWalletobjectsV1OfferObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1OfferObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1OfferObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.offerObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1OfferObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1OfferObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1OfferObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1OfferObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1OfferObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1OfferObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1OfferObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1OfferObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1OfferObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1OfferObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1OfferObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1OfferObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1OfferObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>,
    ) {
      return parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$patch(args, options))
    },
  })
}

export function usePatchWalletobjectsV1OfferObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1OfferObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1OfferObjectResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1OfferObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1OfferObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.offerObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1OfferObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1OfferObjectResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1PermissionsResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/permissions/:resourceId', args] as const
}

export function getWalletobjectsV1PermissionsResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1PermissionsResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1PermissionsResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.permissions[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1PermissionsResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1PermissionsResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1PermissionsResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1PermissionsResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1PermissionsResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1PermissionsResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1PermissionsResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/permissions/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1PermissionsResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1PermissionsResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.permissions[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1PermissionsResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1PermissionsResourceIdMutationOptions<
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

export function getPostWalletobjectsV1PrivateContentUploadPrivateDataMutationKey() {
  return ['walletobjects', '/walletobjects/v1/privateContent/uploadPrivateData', 'POST'] as const
}

export function getPostWalletobjectsV1PrivateContentUploadPrivateDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1PrivateContentUploadPrivateDataMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>,
    ) {
      return parseResponse(
        client.walletobjects.v1.privateContent.uploadPrivateData.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1PrivateContentUploadPrivateData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1PrivateContentUploadPrivateDataMutationOptions<
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

export function getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/privateContent/:issuerId/uploadPrivateImage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.privateContent[':issuerId'].uploadPrivateImage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageMutationOptions<
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

export function getPostWalletobjectsV1SmartTapMutationKey() {
  return ['walletobjects', '/walletobjects/v1/smartTap', 'POST'] as const
}

export function getPostWalletobjectsV1SmartTapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.smartTap.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.smartTap.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1SmartTapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.smartTap.$post>) {
      return parseResponse(client.walletobjects.v1.smartTap.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1SmartTap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.smartTap.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.smartTap.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1SmartTapMutationOptions<TError, TOnMutateResult>(
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

export function getWalletobjectsV1TransitClassQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/transitClass', args] as const
}

export function getWalletobjectsV1TransitClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1TransitClassQueryKey>
  >({
    queryKey: getWalletobjectsV1TransitClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.transitClass.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1TransitClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1TransitClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1TransitClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1TransitClassQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1TransitClassMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass', 'POST'] as const
}

export function getPostWalletobjectsV1TransitClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.transitClass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1TransitClassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.transitClass.$post>) {
      return parseResponse(client.walletobjects.v1.transitClass.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1TransitClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.transitClass.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1TransitClassMutationOptions<
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

export function getWalletobjectsV1TransitClassResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', args] as const
}

export function getWalletobjectsV1TransitClassResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1TransitClassResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1TransitClassResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.transitClass[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1TransitClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1TransitClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1TransitClassResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitClassResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1TransitClassResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1TransitClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1TransitClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1TransitClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.transitClass[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1TransitClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1TransitClassResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1TransitClassResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1TransitClassResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1TransitClassResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.transitClass[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1TransitClassResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1TransitClassResourceIdMutationOptions<
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

export function getPostWalletobjectsV1TransitClassResourceIdAddMessageMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId/addMessage', 'POST'] as const
}

export function getPostWalletobjectsV1TransitClassResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1TransitClassResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.transitClass[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1TransitClassResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1TransitClassResourceIdAddMessageMutationOptions<
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

export function getWalletobjectsV1TransitObjectQueryKey(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/transitObject', args] as const
}

export function getWalletobjectsV1TransitObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1TransitObjectQueryKey>
  >({
    queryKey: getWalletobjectsV1TransitObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.transitObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1TransitObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1TransitObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1TransitObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1TransitObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWalletobjectsV1TransitObjectMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject', 'POST'] as const
}

export function getPostWalletobjectsV1TransitObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.walletobjects.v1.transitObject.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1TransitObjectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.walletobjects.v1.transitObject.$post>) {
      return parseResponse(client.walletobjects.v1.transitObject.$post(args, options))
    },
  })
}

export function usePostWalletobjectsV1TransitObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.walletobjects.v1.transitObject.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1TransitObjectMutationOptions<
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

export function getWalletobjectsV1TransitObjectResourceIdQueryKey(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', args] as const
}

export function getWalletobjectsV1TransitObjectResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletobjectsV1TransitObjectResourceIdQueryKey>
  >({
    queryKey: getWalletobjectsV1TransitObjectResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.walletobjects.v1.transitObject[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWalletobjectsV1TransitObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWalletobjectsV1TransitObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWalletobjectsV1TransitObjectResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWalletobjectsV1TransitObjectResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWalletobjectsV1TransitObjectResourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWalletobjectsV1TransitObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', 'PUT'] as const
}

export function getPutWalletobjectsV1TransitObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWalletobjectsV1TransitObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>,
    ) {
      return parseResponse(client.walletobjects.v1.transitObject[':resourceId'].$put(args, options))
    },
  })
}

export function usePutWalletobjectsV1TransitObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWalletobjectsV1TransitObjectResourceIdMutationOptions<
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

export function getPatchWalletobjectsV1TransitObjectResourceIdMutationKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', 'PATCH'] as const
}

export function getPatchWalletobjectsV1TransitObjectResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWalletobjectsV1TransitObjectResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.transitObject[':resourceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWalletobjectsV1TransitObjectResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWalletobjectsV1TransitObjectResourceIdMutationOptions<
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

export function getPostWalletobjectsV1TransitObjectResourceIdAddMessageMutationKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/transitObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function getPostWalletobjectsV1TransitObjectResourceIdAddMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWalletobjectsV1TransitObjectResourceIdAddMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.walletobjects.v1.transitObject[':resourceId'].addMessage.$post(args, options),
      )
    },
  })
}

export function usePostWalletobjectsV1TransitObjectResourceIdAddMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletobjectsV1TransitObjectResourceIdAddMessageMutationOptions<
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
