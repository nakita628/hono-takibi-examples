import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getNamespacesKey() {
  return ['namespaces'] as const
}

export function getOplKey() {
  return ['opl'] as const
}

export function getRelationTuplesKey() {
  return ['relation-tuples'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getPutAdminRelationTuplesMutationKey() {
  return ['admin', '/admin/relation-tuples', 'PUT'] as const
}

export function getPutAdminRelationTuplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['relation-tuples']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminRelationTuplesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['relation-tuples']['$put']>) {
      return parseResponse(client.admin['relation-tuples'].$put(args, options))
    },
  })
}

export function createPutAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['relation-tuples']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAdminRelationTuplesMutationKey() {
  return ['admin', '/admin/relation-tuples', 'DELETE'] as const
}

export function getDeleteAdminRelationTuplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin)['relation-tuples']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRelationTuplesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['relation-tuples']['$delete']>) {
      return parseResponse(client.admin['relation-tuples'].$delete(args, options))
    },
  })
}

export function createDeleteAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin)['relation-tuples']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAdminRelationTuplesMutationKey() {
  return ['admin', '/admin/relation-tuples', 'PATCH'] as const
}

export function getPatchAdminRelationTuplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin)['relation-tuples']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminRelationTuplesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['relation-tuples']['$patch']>) {
      return parseResponse(client.admin['relation-tuples'].$patch(args, options))
    },
  })
}

export function createPatchAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin)['relation-tuples']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin)['relation-tuples']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthAliveQueryKey() {
  return ['health', '/health/alive'] as const
}

export function getHealthAliveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthAliveQueryKey>
  >({
    queryKey: getHealthAliveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.alive.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthAlive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthAliveQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthAliveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >({
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthReadyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNamespacesQueryKey() {
  return ['namespaces', '/namespaces'] as const
}

export function getNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamespacesQueryKey>
  >({
    queryKey: getNamespacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNamespacesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamespacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostOplSyntaxCheckMutationKey() {
  return ['opl', '/opl/syntax/check', 'POST'] as const
}

export function getPostOplSyntaxCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opl.syntax.check.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.opl.syntax.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOplSyntaxCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.opl.syntax.check.$post>) {
      return parseResponse(client.opl.syntax.check.$post(args, options))
    },
  })
}

export function createPostOplSyntaxCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.opl.syntax.check.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.opl.syntax.check.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOplSyntaxCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRelationTuplesQueryKey(
  args: InferRequestType<(typeof client)['relation-tuples']['$get']>,
) {
  return ['relation-tuples', '/relation-tuples', args] as const
}

export function getRelationTuplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['relation-tuples']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesQueryKey>
  >({
    queryKey: getRelationTuplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['relation-tuples'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRelationTuples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['relation-tuples']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRelationTuplesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationTuplesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRelationTuplesBatchCheckMutationKey() {
  return ['relation-tuples', '/relation-tuples/batch/check', 'POST'] as const
}

export function getPostRelationTuplesBatchCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['batch']['check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['relation-tuples']['batch']['check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRelationTuplesBatchCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['relation-tuples']['batch']['check']['$post']>,
    ) {
      return parseResponse(client['relation-tuples'].batch.check.$post(args, options))
    },
  })
}

export function createPostRelationTuplesBatchCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['batch']['check']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['relation-tuples']['batch']['check']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRelationTuplesBatchCheckMutationOptions<
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

export function getRelationTuplesCheckQueryKey(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['$get']>,
) {
  return ['relation-tuples', '/relation-tuples/check', args] as const
}

export function getRelationTuplesCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesCheckQueryKey>
  >({
    queryKey: getRelationTuplesCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['relation-tuples'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRelationTuplesCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['relation-tuples']['check']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRelationTuplesCheckQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationTuplesCheckQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRelationTuplesCheckMutationKey() {
  return ['relation-tuples', '/relation-tuples/check', 'POST'] as const
}

export function getPostRelationTuplesCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['relation-tuples']['check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRelationTuplesCheckMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['relation-tuples']['check']['$post']>) {
      return parseResponse(client['relation-tuples'].check.$post(args, options))
    },
  })
}

export function createPostRelationTuplesCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['relation-tuples']['check']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRelationTuplesCheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRelationTuplesCheckOpenapiQueryKey(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>,
) {
  return ['relation-tuples', '/relation-tuples/check/openapi', args] as const
}

export function getRelationTuplesCheckOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesCheckOpenapiQueryKey>
  >({
    queryKey: getRelationTuplesCheckOpenapiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['relation-tuples'].check.openapi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRelationTuplesCheckOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRelationTuplesCheckOpenapiQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRelationTuplesCheckOpenapiQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRelationTuplesCheckOpenapiMutationKey() {
  return ['relation-tuples', '/relation-tuples/check/openapi', 'POST'] as const
}

export function getPostRelationTuplesCheckOpenapiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRelationTuplesCheckOpenapiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$post']>,
    ) {
      return parseResponse(client['relation-tuples'].check.openapi.$post(args, options))
    },
  })
}

export function createPostRelationTuplesCheckOpenapi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRelationTuplesCheckOpenapiMutationOptions<
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

export function getRelationTuplesExpandQueryKey(
  args: InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>,
) {
  return ['relation-tuples', '/relation-tuples/expand', args] as const
}

export function getRelationTuplesExpandQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesExpandQueryKey>
  >({
    queryKey: getRelationTuplesExpandQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['relation-tuples'].expand.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRelationTuplesExpand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRelationTuplesExpandQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRelationTuplesExpandQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
