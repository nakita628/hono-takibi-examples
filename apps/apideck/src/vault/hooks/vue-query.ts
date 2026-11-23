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

export function getVaultKey() {
  return ['vault'] as const
}

export function getVaultAuthorizeServiceIdApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
  >,
) {
  return ['vault', '/vault/authorize/:service_id/:application_id', toValue(args)] as const
}

export function getVaultAuthorizeServiceIdApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultAuthorizeServiceIdApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.authorize[':service_id'][':application_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultAuthorizeServiceIdApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
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
                    (typeof client.vault.authorize)[':service_id'][':application_id']['$get']
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
                    (typeof client.vault.authorize)[':service_id'][':application_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultAuthorizeServiceIdApplicationIdQueryKey>
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
            ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultAuthorizeServiceIdApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultAuthorizeServiceIdApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.authorize[':service_id'][':application_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultCallbackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.callback.$get>>,
) {
  return ['vault', '/vault/callback', toValue(args)] as const
}

export function getVaultCallbackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.callback.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultCallbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.callback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.callback.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
          >,
          ReturnType<typeof getVaultCallbackQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultCallbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultCallbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.callback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.connections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/connections', keyArgs] as const
}

export function getVaultConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>
            >
          >,
          ReturnType<typeof getVaultConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultConnectionsUnifiedApiServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/connections/:unified_api/:service_id', keyArgs] as const
}

export function getVaultConnectionsUnifiedApiServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConnectionsUnifiedApiServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultConnectionsUnifiedApiServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['$get']
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultConnectionsUnifiedApiServiceIdQueryKey>
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
            ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConnectionsUnifiedApiServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConnectionsUnifiedApiServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultConnectionsUnifiedApiServiceIdMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'POST'] as const
}

export function getPostVaultConnectionsUnifiedApiServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultConnectionsUnifiedApiServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id']['$post']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].$post(args, options),
      )
    },
  })
}

export function usePostVaultConnectionsUnifiedApiServiceId<
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id']['$post']
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
  const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdMutationOptions<
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

export function getDeleteVaultConnectionsUnifiedApiServiceIdMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'DELETE'] as const
}

export function getDeleteVaultConnectionsUnifiedApiServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultConnectionsUnifiedApiServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVaultConnectionsUnifiedApiServiceId<
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
                      (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
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
  const mutationDefaults = getDeleteVaultConnectionsUnifiedApiServiceIdMutationOptions<
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

export function getPatchVaultConnectionsUnifiedApiServiceIdMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'PATCH'] as const
}

export function getPatchVaultConnectionsUnifiedApiServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVaultConnectionsUnifiedApiServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchVaultConnectionsUnifiedApiServiceId<
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id']['$patch']
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
  const mutationDefaults = getPatchVaultConnectionsUnifiedApiServiceIdMutationOptions<
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

export function getPostVaultConnectionsUnifiedApiServiceIdImportMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/import', 'POST'] as const
}

export function getPostVaultConnectionsUnifiedApiServiceIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVaultConnectionsUnifiedApiServiceIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].import.$post(args, options),
      )
    },
  })
}

export function usePostVaultConnectionsUnifiedApiServiceIdImport<
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
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
  const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdImportMutationOptions<
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

export function getPostVaultConnectionsUnifiedApiServiceIdTokenMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/token', 'POST'] as const
}

export function getPostVaultConnectionsUnifiedApiServiceIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVaultConnectionsUnifiedApiServiceIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].token.$post(args, options),
      )
    },
  })
}

export function usePostVaultConnectionsUnifiedApiServiceIdToken<
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
                    (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
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
  const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdTokenMutationOptions<
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

export function getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/connections/:unified_api/:service_id/:resource/config', keyArgs] as const
}

export function getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVaultConnectionsUnifiedApiServiceIdResourceConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
                    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
                    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey>
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
              (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigMutationKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/:resource/config', 'PATCH'] as const
}

export function getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
      >,
    ) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'][':resource'].config.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchVaultConnectionsUnifiedApiServiceIdResourceConfig<
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
                    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
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
  const mutationDefaults = getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigMutationOptions<
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

export function getVaultConsumersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.consumers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/consumers', keyArgs] as const
}

export function getVaultConsumersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.consumers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConsumersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.consumers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.consumers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>
            >
          >,
          ReturnType<typeof getVaultConsumersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConsumersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConsumersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.consumers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultConsumersMutationKey() {
  return ['vault', '/vault/consumers', 'POST'] as const
}

export function getPostVaultConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vault.consumers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultConsumersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vault.consumers.$post>) {
      return parseResponse(client.vault.consumers.$post(args, options))
    },
  })
}

export function usePostVaultConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.vault.consumers.$post>,
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
  const mutationDefaults = getPostVaultConsumersMutationOptions<TError, TOnMutateResult>(
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

export function getVaultConsumersConsumerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/consumers/:consumer_id', keyArgs] as const
}

export function getVaultConsumersConsumerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConsumersConsumerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.consumers[':consumer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultConsumersConsumerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultConsumersConsumerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConsumersConsumerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConsumersConsumerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.consumers[':consumer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVaultConsumersConsumerIdMutationKey() {
  return ['vault', '/vault/consumers/:consumer_id', 'DELETE'] as const
}

export function getDeleteVaultConsumersConsumerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultConsumersConsumerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']>,
    ) {
      return parseResponse(client.vault.consumers[':consumer_id'].$delete(args, options))
    },
  })
}

export function useDeleteVaultConsumersConsumerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']>,
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
  const mutationDefaults = getDeleteVaultConsumersConsumerIdMutationOptions<
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

export function getPatchVaultConsumersConsumerIdMutationKey() {
  return ['vault', '/vault/consumers/:consumer_id', 'PATCH'] as const
}

export function getPatchVaultConsumersConsumerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVaultConsumersConsumerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']>,
    ) {
      return parseResponse(client.vault.consumers[':consumer_id'].$patch(args, options))
    },
  })
}

export function usePatchVaultConsumersConsumerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']>,
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
  const mutationDefaults = getPatchVaultConsumersConsumerIdMutationOptions<TError, TOnMutateResult>(
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

export function getVaultConsumersConsumerIdStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/consumers/:consumer_id/stats', keyArgs] as const
}

export function getVaultConsumersConsumerIdStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultConsumersConsumerIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.consumers[':consumer_id'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultConsumersConsumerIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>
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
                  ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVaultConsumersConsumerIdStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConsumersConsumerIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultConsumersConsumerIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.consumers[':consumer_id'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.logs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['vault', '/vault/logs', keyArgs] as const
}

export function getVaultLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVaultLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vault.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
          >,
          ReturnType<typeof getVaultLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultRevokeServiceIdApplicationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
  >,
) {
  return ['vault', '/vault/revoke/:service_id/:application_id', toValue(args)] as const
}

export function getVaultRevokeServiceIdApplicationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultRevokeServiceIdApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vault.revoke[':service_id'][':application_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultRevokeServiceIdApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
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
                  ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVaultRevokeServiceIdApplicationIdQueryKey>
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
            ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultRevokeServiceIdApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultRevokeServiceIdApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vault.revoke[':service_id'][':application_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultSessionsMutationKey() {
  return ['vault', '/vault/sessions', 'POST'] as const
}

export function getPostVaultSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vault.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vault.sessions.$post>) {
      return parseResponse(client.vault.sessions.$post(args, options))
    },
  })
}

export function usePostVaultSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.vault.sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.vault.sessions.$post>,
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
  const mutationDefaults = getPostVaultSessionsMutationOptions<TError, TOnMutateResult>(
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
