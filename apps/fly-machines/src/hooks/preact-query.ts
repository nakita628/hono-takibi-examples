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

export function getAppsKey() {
  return ['apps'] as const
}

export function getAppsQueryKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function getAppsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >({
    queryKey: getAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsMutationKey() {
  return ['apps', '/apps', 'POST'] as const
}

export function getPostAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apps.$post>) {
      return parseResponse(client.apps.$post(args, options))
    },
  })
}

export function usePostApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
        TError,
        InferRequestType<typeof client.apps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppsAppNameQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
) {
  return ['apps', '/apps/:app_name', args] as const
}

export function getAppsAppNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameQueryKey>
  >({
    queryKey: getAppsAppNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppsAppName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAppsAppNameMutationKey() {
  return ['apps', '/apps/:app_name', 'DELETE'] as const
}

export function getDeleteAppsAppNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apps)[':app_name']['$delete']>) {
      return parseResponse(client.apps[':app_name'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppNameMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppNameMachinesQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
) {
  return ['apps', '/apps/:app_name/machines', args] as const
}

export function getAppsAppNameMachinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesQueryKey>
  >({
    queryKey: getAppsAppNameMachinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppNameMachinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppNameMachinesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMutationKey() {
  return ['apps', '/apps/:app_name/machines', 'POST'] as const
}

export function getPostAppsAppNameMachinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']>,
    ) {
      return parseResponse(client.apps[':app_name'].machines.$post(args, options))
    },
  })
}

export function usePostAppsAppNameMachines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['machines']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppNameMachinesMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppNameMachinesMachineIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id', args] as const
}

export function getAppsAppNameMachinesMachineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdQueryKey>
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
      ...getAppsAppNameMachinesMachineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdQueryKey>
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
      ...getAppsAppNameMachinesMachineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMachineIdMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>,
    ) {
      return parseResponse(client.apps[':app_name'].machines[':machine_id'].$post(args, options))
    },
  })
}

export function usePostAppsAppNameMachinesMachineId<
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
                ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdMutationOptions<
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

export function getDeleteAppsAppNameMachinesMachineIdMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id', 'DELETE'] as const
}

export function getDeleteAppsAppNameMachinesMachineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppNameMachinesMachineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']
      >,
    ) {
      return parseResponse(client.apps[':app_name'].machines[':machine_id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppNameMachinesMachineId<
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
                ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppNameMachinesMachineIdMutationOptions<
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

export function getPostAppsAppNameMachinesMachineIdCordonMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/cordon', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdCordonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdCordonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].cordon.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdCordon<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['cordon']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdCordonMutationOptions<
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

export function getAppsAppNameMachinesMachineIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/events', args] as const
}

export function getAppsAppNameMachinesMachineIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdEventsQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdEventsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdEventsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMachineIdExecMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/exec', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdExecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdExecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].exec.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdExec<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['exec']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdExecMutationOptions<
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

export function getAppsAppNameMachinesMachineIdLeaseQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', args] as const
}

export function getAppsAppNameMachinesMachineIdLeaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdLeaseQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdLeaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].lease.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdLease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdLeaseQueryKey>
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
      ...getAppsAppNameMachinesMachineIdLeaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdLease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdLeaseQueryKey>
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
      ...getAppsAppNameMachinesMachineIdLeaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMachineIdLeaseMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdLeaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdLeaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].lease.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdLease<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdLeaseMutationOptions<
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

export function getDeleteAppsAppNameMachinesMachineIdLeaseMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', 'DELETE'] as const
}

export function getDeleteAppsAppNameMachinesMachineIdLeaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppNameMachinesMachineIdLeaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].lease.$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppNameMachinesMachineIdLease<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$delete']
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
  const mutationDefaults = getDeleteAppsAppNameMachinesMachineIdLeaseMutationOptions<
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

export function getAppsAppNameMachinesMachineIdMetadataQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata', args] as const
}

export function getAppsAppNameMachinesMachineIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdMetadataQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdMetadataQueryKey>
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
      ...getAppsAppNameMachinesMachineIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdMetadataQueryKey>
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
      ...getAppsAppNameMachinesMachineIdMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMachineIdMetadataKeyMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata/:key', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdMetadataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdMetadataKeyMutationOptions<
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

export function getDeleteAppsAppNameMachinesMachineIdMetadataKeyMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata/:key', 'DELETE'] as const
}

export function getDeleteAppsAppNameMachinesMachineIdMetadataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppNameMachinesMachineIdMetadataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].metadata[':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAppsAppNameMachinesMachineIdMetadataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata'][':key']['$delete']
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
  const mutationDefaults = getDeleteAppsAppNameMachinesMachineIdMetadataKeyMutationOptions<
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

export function getAppsAppNameMachinesMachineIdPsQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/ps', args] as const
}

export function getAppsAppNameMachinesMachineIdPsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdPsQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdPsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].ps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdPs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdPsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdPsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdPs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdPsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdPsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameMachinesMachineIdRestartMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/restart', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].restart.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdRestart<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['restart']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdRestartMutationOptions<
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

export function getPostAppsAppNameMachinesMachineIdSignalMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/signal', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdSignalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdSignalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].signal.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdSignal<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['signal']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdSignalMutationOptions<
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

export function getPostAppsAppNameMachinesMachineIdStartMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/start', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].start.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdStart<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['start']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdStartMutationOptions<
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

export function getPostAppsAppNameMachinesMachineIdStopMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/stop', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].stop.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdStop<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['stop']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdStopMutationOptions<
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

export function getPostAppsAppNameMachinesMachineIdUncordonMutationKey() {
  return ['apps', '/apps/:app_name/machines/:machine_id/uncordon', 'POST'] as const
}

export function getPostAppsAppNameMachinesMachineIdUncordonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameMachinesMachineIdUncordonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].uncordon.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameMachinesMachineIdUncordon<
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
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['machines'][':machine_id']['uncordon']['$post']
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
  const mutationDefaults = getPostAppsAppNameMachinesMachineIdUncordonMutationOptions<
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

export function getAppsAppNameMachinesMachineIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/versions', args] as const
}

export function getAppsAppNameMachinesMachineIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdVersionsQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdVersionsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdVersionsQueryKey>
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
      ...getAppsAppNameMachinesMachineIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppNameMachinesMachineIdWaitQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/wait', args] as const
}

export function getAppsAppNameMachinesMachineIdWaitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameMachinesMachineIdWaitQueryKey>
  >({
    queryKey: getAppsAppNameMachinesMachineIdWaitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].wait.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameMachinesMachineIdWait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdWaitQueryKey>
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
      ...getAppsAppNameMachinesMachineIdWaitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameMachinesMachineIdWait<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameMachinesMachineIdWaitQueryKey>
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
      ...getAppsAppNameMachinesMachineIdWaitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppsAppNameVolumesQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
) {
  return ['apps', '/apps/:app_name/volumes', args] as const
}

export function getAppsAppNameVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameVolumesQueryKey>
  >({
    queryKey: getAppsAppNameVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppsAppNameVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppsAppNameVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppsAppNameVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppsAppNameVolumesMutationKey() {
  return ['apps', '/apps/:app_name/volumes', 'POST'] as const
}

export function getPostAppsAppNameVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']>,
    ) {
      return parseResponse(client.apps[':app_name'].volumes.$post(args, options))
    },
  })
}

export function usePostAppsAppNameVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['volumes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppNameVolumesMutationOptions<TError, TOnMutateResult>(
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

export function getAppsAppNameVolumesVolumeIdQueryKey(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id', args] as const
}

export function getAppsAppNameVolumesVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameVolumesVolumeIdQueryKey>
  >({
    queryKey: getAppsAppNameVolumesVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesVolumeIdQueryKey>
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
      ...getAppsAppNameVolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesVolumeIdQueryKey>
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
      ...getAppsAppNameVolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameVolumesVolumeIdMutationKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id', 'POST'] as const
}

export function getPostAppsAppNameVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameVolumesVolumeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>,
    ) {
      return parseResponse(client.apps[':app_name'].volumes[':volume_id'].$post(args, options))
    },
  })
}

export function usePostAppsAppNameVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsAppNameVolumesVolumeIdMutationOptions<
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

export function getDeleteAppsAppNameVolumesVolumeIdMutationKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id', 'DELETE'] as const
}

export function getDeleteAppsAppNameVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsAppNameVolumesVolumeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>,
    ) {
      return parseResponse(client.apps[':app_name'].volumes[':volume_id'].$delete(args, options))
    },
  })
}

export function useDeleteAppsAppNameVolumesVolumeId<
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
                ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppsAppNameVolumesVolumeIdMutationOptions<
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

export function getPutAppsAppNameVolumesVolumeIdExtendMutationKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id/extend', 'PUT'] as const
}

export function getPutAppsAppNameVolumesVolumeIdExtendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppsAppNameVolumesVolumeIdExtendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].extend.$put(args, options),
      )
    },
  })
}

export function usePutAppsAppNameVolumesVolumeIdExtend<
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
                  (typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['volumes'][':volume_id']['extend']['$put']
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
  const mutationDefaults = getPutAppsAppNameVolumesVolumeIdExtendMutationOptions<
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

export function getAppsAppNameVolumesVolumeIdSnapshotsQueryKey(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id/snapshots', args] as const
}

export function getAppsAppNameVolumesVolumeIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameVolumesVolumeIdSnapshotsQueryKey>
  >({
    queryKey: getAppsAppNameVolumesVolumeIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppsAppNameVolumesVolumeIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesVolumeIdSnapshotsQueryKey>
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
      ...getAppsAppNameVolumesVolumeIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppsAppNameVolumesVolumeIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppsAppNameVolumesVolumeIdSnapshotsQueryKey>
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
      ...getAppsAppNameVolumesVolumeIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppsAppNameVolumesVolumeIdSnapshotsMutationKey() {
  return ['apps', '/apps/:app_name/volumes/:volume_id/snapshots', 'POST'] as const
}

export function getPostAppsAppNameVolumesVolumeIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsAppNameVolumesVolumeIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
      >,
    ) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].snapshots.$post(args, options),
      )
    },
  })
}

export function usePostAppsAppNameVolumesVolumeIdSnapshots<
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
                  (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$post']
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
  const mutationDefaults = getPostAppsAppNameVolumesVolumeIdSnapshotsMutationOptions<
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
