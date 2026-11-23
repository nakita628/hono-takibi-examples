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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ConnectionExecuteSqlQueryMutationKey() {
  return ['v2', '/v2/:connection:executeSqlQuery', 'POST'] as const
}

export function getPostV2ConnectionExecuteSqlQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ConnectionExecuteSqlQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>,
    ) {
      return parseResponse(client.v2[':connection:executeSqlQuery'].$post(args, options))
    },
  })
}

export function usePostV2ConnectionExecuteSqlQuery<
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
                Awaited<ReturnType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':connection:executeSqlQuery']['$post']>,
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
  const mutationDefaults = getPostV2ConnectionExecuteSqlQueryMutationOptions<
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

export function getPostV2EntityTypeEntitiesDeleteEntitiesWithConditionsMutationKey() {
  return ['v2', '/v2/:entityType/entities:deleteEntitiesWithConditions', 'POST'] as const
}

export function getPostV2EntityTypeEntitiesDeleteEntitiesWithConditionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntityTypeEntitiesDeleteEntitiesWithConditionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2[':entityType']['entities:deleteEntitiesWithConditions'].$post(args, options),
      )
    },
  })
}

export function usePostV2EntityTypeEntitiesDeleteEntitiesWithConditions<
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
                    (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)[':entityType']['entities:deleteEntitiesWithConditions']['$post']
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
  const mutationDefaults = getPostV2EntityTypeEntitiesDeleteEntitiesWithConditionsMutationOptions<
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

export function getPostV2EntityTypeEntitiesUpdateEntitiesWithConditionsMutationKey() {
  return ['v2', '/v2/:entityType/entities:updateEntitiesWithConditions', 'POST'] as const
}

export function getPostV2EntityTypeEntitiesUpdateEntitiesWithConditionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntityTypeEntitiesUpdateEntitiesWithConditionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2[':entityType']['entities:updateEntitiesWithConditions'].$post(args, options),
      )
    },
  })
}

export function usePostV2EntityTypeEntitiesUpdateEntitiesWithConditions<
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
                    (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2)[':entityType']['entities:updateEntitiesWithConditions']['$post']
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
  const mutationDefaults = getPostV2EntityTypeEntitiesUpdateEntitiesWithConditionsMutationOptions<
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

export function getV2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
) {
  return ['v2', '/v2/:name', toValue(args)] as const
}

export function getV2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2NameExecuteMutationKey() {
  return ['v2', '/v2/:name:execute', 'POST'] as const
}

export function getPostV2NameExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:execute']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameExecuteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:execute']['$post']>) {
      return parseResponse(client.v2[':name:execute'].$post(args, options))
    },
  })
}

export function usePostV2NameExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:execute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:execute']['$post']>,
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
  const mutationDefaults = getPostV2NameExecuteMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>>,
) {
  return ['v2', '/v2/:parent/actions', toValue(args)] as const
}

export function getV2ParentActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ParentEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>>,
) {
  return ['v2', '/v2/:parent/entities', toValue(args)] as const
}

export function getV2ParentEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentEntitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentEntitiesMutationKey() {
  return ['v2', '/v2/:parent/entities', 'POST'] as const
}

export function getPostV2ParentEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['entities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['entities']['$post']>) {
      return parseResponse(client.v2[':parent'].entities.$post(args, options))
    },
  })
}

export function usePostV2ParentEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['entities']['$post']>,
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
  const mutationDefaults = getPostV2ParentEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentEntityTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>>,
) {
  return ['v2', '/v2/:parent/entityTypes', toValue(args)] as const
}

export function getV2ParentEntityTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentEntityTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].entityTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentEntityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentEntityTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentEntityTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentEntityTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].entityTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
