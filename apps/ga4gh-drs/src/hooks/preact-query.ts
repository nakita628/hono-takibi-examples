import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getObjectsKey() {
  return ['objects'] as const
}

export function getServiceInfoKey() {
  return ['service-info'] as const
}

export function getServiceInfoQueryKey() {
  return ['service-info', '/service-info'] as const
}

export function getServiceInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceInfoQueryKey>
  >({
    queryKey: getServiceInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['service-info'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getObjectsObjectIdQueryKey(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
) {
  return ['objects', '/objects/:object_id', args] as const
}

export function getObjectsObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsObjectIdQueryKey>
  >({
    queryKey: getObjectsObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects[':object_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useObjectsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getObjectsObjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseObjectsObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsObjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getObjectsObjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostObjectsObjectIdMutationKey() {
  return ['objects', '/objects/:object_id', 'POST'] as const
}

export function getPostObjectsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects)[':object_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.objects)[':object_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsObjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.objects)[':object_id']['$post']>) {
      return parseResponse(client.objects[':object_id'].$post(args, options))
    },
  })
}

export function usePostObjectsObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.objects)[':object_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects)[':object_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsObjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsObjectsObjectIdMutationKey() {
  return ['objects', '/objects/:object_id', 'OPTIONS'] as const
}

export function getOptionsObjectsObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects)[':object_id']['$options']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.objects)[':object_id']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsObjectsObjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.objects)[':object_id']['$options']>) {
      return parseResponse(client.objects[':object_id'].$options(args, options))
    },
  })
}

export function useOptionsObjectsObjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects)[':object_id']['$options']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.objects)[':object_id']['$options']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsObjectsObjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostObjectsMutationKey() {
  return ['objects', '/objects', 'POST'] as const
}

export function getPostObjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$post>>>>>,
    TError,
    InferRequestType<typeof client.objects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.$post>) {
      return parseResponse(client.objects.$post(args, options))
    },
  })
}

export function usePostObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$post>>>>>,
        TError,
        InferRequestType<typeof client.objects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsObjectsMutationKey() {
  return ['objects', '/objects', 'OPTIONS'] as const
}

export function getOptionsObjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$options>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.objects.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.$options>) {
      return parseResponse(client.objects.$options(args, options))
    },
  })
}

export function useOptionsObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.$options>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.objects.$options>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getOptionsObjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getObjectsObjectIdAccessAccessIdQueryKey(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
) {
  return ['objects', '/objects/:object_id/access/:access_id', args] as const
}

export function getObjectsObjectIdAccessAccessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsObjectIdAccessAccessIdQueryKey>
  >({
    queryKey: getObjectsObjectIdAccessAccessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects[':object_id'].access[':access_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectsObjectIdAccessAccessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsObjectIdAccessAccessIdQueryKey>
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
      ...getObjectsObjectIdAccessAccessIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectsObjectIdAccessAccessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectsObjectIdAccessAccessIdQueryKey>
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
      ...getObjectsObjectIdAccessAccessIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostObjectsObjectIdAccessAccessIdMutationKey() {
  return ['objects', '/objects/:object_id/access/:access_id', 'POST'] as const
}

export function getPostObjectsObjectIdAccessAccessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsObjectIdAccessAccessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.objects)[':object_id']['access'][':access_id']['$post']
      >,
    ) {
      return parseResponse(client.objects[':object_id'].access[':access_id'].$post(args, options))
    },
  })
}

export function usePostObjectsObjectIdAccessAccessId<
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
                ReturnType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.objects)[':object_id']['access'][':access_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsObjectIdAccessAccessIdMutationOptions<
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

export function getPostObjectsAccessMutationKey() {
  return ['objects', '/objects/access', 'POST'] as const
}

export function getPostObjectsAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.access.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.objects.access.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.access.$post>) {
      return parseResponse(client.objects.access.$post(args, options))
    },
  })
}

export function usePostObjectsAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.access.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.objects.access.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsAccessMutationOptions<TError, TOnMutateResult>(
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
