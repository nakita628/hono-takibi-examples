import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getAppsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>) {
  return ['apps', '/apps', toValue(args)] as const
}

export function getAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
          ReturnType<typeof getAppsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$post>>>>>,
          TError,
          InferRequestType<typeof client.apps.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['$get']>>,
) {
  return ['apps', '/apps/:app_name', toValue(args)] as const
}

export function getAppsAppNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsAppName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
            >
          >,
          ReturnType<typeof getAppsAppNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsAppNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':app_name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>>,
) {
  return ['apps', '/apps/:app_name/machines', toValue(args)] as const
}

export function getAppsAppNameMachinesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['machines']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_name']['machines']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppNameMachinesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppNameMachinesMachineIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/events', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/lease', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdLeaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdLeaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].lease.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['lease']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdLeaseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdLeaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].lease.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
    >
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/metadata', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['metadata']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdMetadataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/ps', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdPsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdPsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].ps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['ps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdPsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdPsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].ps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
    >
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/versions', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['machines'][':machine_id']['versions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppNameMachinesMachineIdWaitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/machines/:machine_id/wait', toValue(args)] as const
}

export function getAppsAppNameMachinesMachineIdWaitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameMachinesMachineIdWaitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].machines[':machine_id'].wait.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['machines'][':machine_id']['wait']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameMachinesMachineIdWaitQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameMachinesMachineIdWaitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].machines[':machine_id'].wait.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsAppNameVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>>,
) {
  return ['apps', '/apps/:app_name/volumes', toValue(args)] as const
}

export function getAppsAppNameVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apps)[':app_name']['volumes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps)[':app_name']['volumes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAppsAppNameVolumesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
  >,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id', toValue(args)] as const
}

export function getAppsAppNameVolumesVolumeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameVolumesVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps)[':app_name']['volumes'][':volume_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsAppNameVolumesVolumeIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameVolumesVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].volumes[':volume_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
    >
  >,
) {
  return ['apps', '/apps/:app_name/volumes/:volume_id/snapshots', toValue(args)] as const
}

export function getAppsAppNameVolumesVolumeIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsAppNameVolumesVolumeIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps)[':app_name']['volumes'][':volume_id']['snapshots']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAppsAppNameVolumesVolumeIdSnapshotsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsAppNameVolumesVolumeIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps[':app_name'].volumes[':volume_id'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
