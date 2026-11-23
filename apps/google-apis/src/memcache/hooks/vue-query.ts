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

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getPostV1beta2InstanceApplySoftwareUpdateMutationKey() {
  return ['v1beta2', '/v1beta2/:instance:applySoftwareUpdate', 'POST'] as const
}

export function getPostV1beta2InstanceApplySoftwareUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2InstanceApplySoftwareUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':instance:applySoftwareUpdate'].$post(args, options))
    },
  })
}

export function usePostV1beta2InstanceApplySoftwareUpdate<
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
                  ReturnType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>,
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
  const mutationDefaults = getPostV1beta2InstanceApplySoftwareUpdateMutationOptions<
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

export function getPostV1beta2InstanceRescheduleMaintenanceMutationKey() {
  return ['v1beta2', '/v1beta2/:instance:rescheduleMaintenance', 'POST'] as const
}

export function getPostV1beta2InstanceRescheduleMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2InstanceRescheduleMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':instance:rescheduleMaintenance'].$post(args, options))
    },
  })
}

export function usePostV1beta2InstanceRescheduleMaintenance<
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
                  ReturnType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>,
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
  const mutationDefaults = getPostV1beta2InstanceRescheduleMaintenanceMutationOptions<
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

export function getV1beta2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name', toValue(args)] as const
}

export function getV1beta2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta2NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'DELETE'] as const
}

export function getDeleteV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>) {
      return parseResponse(client.v1beta2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta2NameMutationKey() {
  return ['v1beta2', '/v1beta2/:name', 'PATCH'] as const
}

export function getPatchV1beta2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>) {
      return parseResponse(client.v1beta2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta2NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta2NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name/locations', toValue(args)] as const
}

export function getV1beta2NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta2NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:name/operations', toValue(args)] as const
}

export function getV1beta2NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta2NameApplyParametersMutationKey() {
  return ['v1beta2', '/v1beta2/:name:applyParameters', 'POST'] as const
}

export function getPostV1beta2NameApplyParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:applyParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2NameApplyParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':name:applyParameters'].$post(args, options))
    },
  })
}

export function usePostV1beta2NameApplyParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:applyParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']>,
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
  const mutationDefaults = getPostV1beta2NameApplyParametersMutationOptions<
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

export function getPostV1beta2NameCancelMutationKey() {
  return ['v1beta2', '/v1beta2/:name:cancel', 'POST'] as const
}

export function getPostV1beta2NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta2[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1beta2NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1beta2NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta2NameUpdateParametersMutationKey() {
  return ['v1beta2', '/v1beta2/:name:updateParameters', 'PATCH'] as const
}

export function getPatchV1beta2NameUpdateParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta2NameUpdateParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>,
    ) {
      return parseResponse(client.v1beta2[':name:updateParameters'].$patch(args, options))
    },
  })
}

export function usePatchV1beta2NameUpdateParameters<
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
                Awaited<ReturnType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>,
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
  const mutationDefaults = getPatchV1beta2NameUpdateParametersMutationOptions<
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

export function getV1beta2ParentInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>>,
) {
  return ['v1beta2', '/v1beta2/:parent/instances', toValue(args)] as const
}

export function getV1beta2ParentInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta2ParentInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta2[':parent'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta2ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta2ParentInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta2ParentInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta2ParentInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta2[':parent'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta2ParentInstancesMutationKey() {
  return ['v1beta2', '/v1beta2/:parent/instances', 'POST'] as const
}

export function getPostV1beta2ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta2ParentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']>,
    ) {
      return parseResponse(client.v1beta2[':parent'].instances.$post(args, options))
    },
  })
}

export function usePostV1beta2ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']>,
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
  const mutationDefaults = getPostV1beta2ParentInstancesMutationOptions<TError, TOnMutateResult>(
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
