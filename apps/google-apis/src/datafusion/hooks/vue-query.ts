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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name', toValue(args)] as const
}

export function getV1beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/locations', toValue(args)] as const
}

export function getV1beta1NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/operations', toValue(args)] as const
}

export function getV1beta1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1NameCancelMutationKey() {
  return ['v1beta1', '/v1beta1/:name:cancel', 'POST'] as const
}

export function getPostV1beta1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NameRestartMutationKey() {
  return ['v1beta1', '/v1beta1/:name:restart', 'POST'] as const
}

export function getPostV1beta1NameRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:restart']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:restart']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameRestartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:restart']['$post']>) {
      return parseResponse(client.v1beta1[':name:restart'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:restart']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:restart']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameRestartMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NameUpgradeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:upgrade', 'POST'] as const
}

export function getPostV1beta1NameUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:upgrade']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:upgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameUpgradeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:upgrade']['$post']>) {
      return parseResponse(client.v1beta1[':name:upgrade'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:upgrade']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:upgrade']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameUpgradeMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentDnsPeeringsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/dnsPeerings', toValue(args)] as const
}

export function getV1beta1ParentDnsPeeringsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentDnsPeeringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].dnsPeerings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentDnsPeerings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentDnsPeeringsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentDnsPeeringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentDnsPeeringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].dnsPeerings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentDnsPeeringsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/dnsPeerings', 'POST'] as const
}

export function getPostV1beta1ParentDnsPeeringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentDnsPeeringsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].dnsPeerings.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentDnsPeerings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['dnsPeerings']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentDnsPeeringsMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/instances', toValue(args)] as const
}

export function getV1beta1ParentInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentInstancesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/instances', 'POST'] as const
}

export function getPostV1beta1ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].instances.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['instances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['instances']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentNamespacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/namespaces', toValue(args)] as const
}

export function getV1beta1ParentNamespacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentNamespacesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/versions', toValue(args)] as const
}

export function getV1beta1ParentVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ResourceGetIamPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:resource:getIamPolicy', toValue(args)] as const
}

export function getV1beta1ResourceGetIamPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ResourceGetIamPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':resource:getIamPolicy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ResourceGetIamPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ResourceGetIamPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ResourceGetIamPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':resource:getIamPolicy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ResourceRemoveIamPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:removeIamPolicy', 'POST'] as const
}

export function getPostV1beta1ResourceRemoveIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:removeIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:removeIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceRemoveIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:removeIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:removeIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceRemoveIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:removeIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:removeIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceRemoveIamPolicyMutationOptions<
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

export function getPostV1beta1ResourceSetIamPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1beta1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceSetIamPolicy<
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
                Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceSetIamPolicyMutationOptions<
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

export function getPostV1beta1ResourceTestIamPermissionsMutationKey() {
  return ['v1beta1', '/v1beta1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1beta1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV1beta1ResourceTestIamPermissions<
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
                  ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostV1beta1ResourceTestIamPermissionsMutationOptions<
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
