import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostV2ConnectionExecuteSqlQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ConnectionExecuteSqlQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2EntityTypeEntitiesDeleteEntitiesWithConditions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EntityTypeEntitiesDeleteEntitiesWithConditionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2EntityTypeEntitiesUpdateEntitiesWithConditions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EntityTypeEntitiesUpdateEntitiesWithConditionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2NameQueryKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function getV2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >({
    queryKey: getV2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2NameExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:execute']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)[':name:execute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2NameExecuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ParentActionsQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>,
) {
  return ['v2', '/v2/:parent/actions', args] as const
}

export function getV2ParentActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentActionsQueryKey>
  >({
    queryKey: getV2ParentActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ParentActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ParentEntitiesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>,
) {
  return ['v2', '/v2/:parent/entities', args] as const
}

export function getV2ParentEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentEntitiesQueryKey>
  >({
    queryKey: getV2ParentEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ParentEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['entities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)[':parent']['entities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ParentEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentEntitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2ParentEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ParentEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ParentEntityTypesQueryKey(
  args: InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>,
) {
  return ['v2', '/v2/:parent/entityTypes', args] as const
}

export function getV2ParentEntityTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ParentEntityTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':parent'].entityTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ParentEntityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['entityTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':parent']['entityTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ParentEntityTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
