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

export function usePutAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
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

export function usePatchAdminRelationTuples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchAdminRelationTuplesMutationOptions<TError, TOnMutateResult>(
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

export function getHealthAliveQueryKey() {
  return ['health', '/health/alive'] as const
}

export function getHealthAliveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthAliveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.alive.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthAlive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>
          >,
          ReturnType<typeof getHealthAliveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.alive.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthAliveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthAliveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.alive.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          ReturnType<typeof getHealthReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamespacesQueryKey() {
  return ['namespaces', '/namespaces'] as const
}

export function getNamespacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNamespacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.namespaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>
          >,
          ReturnType<typeof getNamespacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.namespaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNamespacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.namespaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOplSyntaxCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.opl.syntax.check.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.opl.syntax.check.$post>,
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
  const mutationDefaults = getPostOplSyntaxCheckMutationOptions<TError, TOnMutateResult>(
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

export function getRelationTuplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['$get']>>,
) {
  return ['relation-tuples', '/relation-tuples', toValue(args)] as const
}

export function getRelationTuplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationTuplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['relation-tuples'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationTuples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
            >
          >,
          ReturnType<typeof getRelationTuplesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationTuplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['relation-tuples'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRelationTuplesBatchCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostRelationTuplesBatchCheckMutationOptions<TError, TOnMutateResult>(
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

export function getRelationTuplesCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['check']['$get']>>,
) {
  return ['relation-tuples', '/relation-tuples/check', toValue(args)] as const
}

export function getRelationTuplesCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['check']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationTuplesCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['relation-tuples'].check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationTuplesCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['check']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRelationTuplesCheckQueryKey>
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
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationTuplesCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['relation-tuples'].check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRelationTuplesCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostRelationTuplesCheckMutationOptions<TError, TOnMutateResult>(
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

export function getRelationTuplesCheckOpenapiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>
  >,
) {
  return ['relation-tuples', '/relation-tuples/check/openapi', toValue(args)] as const
}

export function getRelationTuplesCheckOpenapiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationTuplesCheckOpenapiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['relation-tuples'].check.openapi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationTuplesCheckOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['relation-tuples']['check']['openapi']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRelationTuplesCheckOpenapiQueryKey>
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
          Awaited<ReturnType<(typeof client)['relation-tuples']['check']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesCheckOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationTuplesCheckOpenapiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['relation-tuples'].check.openapi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRelationTuplesCheckOpenapi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostRelationTuplesCheckOpenapiMutationOptions<
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

export function getRelationTuplesExpandQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>>,
) {
  return ['relation-tuples', '/relation-tuples/expand', toValue(args)] as const
}

export function getRelationTuplesExpandQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationTuplesExpandQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['relation-tuples'].expand.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationTuplesExpand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relation-tuples']['expand']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRelationTuplesExpandQueryKey>
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
          Awaited<ReturnType<(typeof client)['relation-tuples']['expand']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationTuplesExpandQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationTuplesExpandQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['relation-tuples'].expand.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
