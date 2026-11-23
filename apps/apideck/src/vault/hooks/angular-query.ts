import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVaultKey() {
  return ['vault'] as const
}

export function getVaultAuthorizeServiceIdApplicationIdQueryKey(
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
) {
  return ['vault', '/vault/authorize/:service_id/:application_id', args] as const
}

export function getVaultAuthorizeServiceIdApplicationIdQueryOptions<
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
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultAuthorizeServiceIdApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.authorize[':service_id'][':application_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultAuthorizeServiceIdApplicationId<
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
  args: () => InferRequestType<
    (typeof client.vault.authorize)[':service_id'][':application_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVaultAuthorizeServiceIdApplicationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultAuthorizeServiceIdApplicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVaultCallbackQueryKey(
  args: InferRequestType<typeof client.vault.callback.$get>,
) {
  return ['vault', '/vault/callback', args] as const
}

export function getVaultCallbackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vault.callback.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultCallbackQueryKey>
  >({
    queryKey: getVaultCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.callback.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaultCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vault.callback.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVaultCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultCallbackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVaultConnectionsQueryKey(
  args: InferRequestType<typeof client.vault.connections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections', keyArgs] as const
}

export function getVaultConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vault.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConnectionsQueryKey>
  >({
    queryKey: getVaultConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaultConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vault.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVaultConnectionsUnifiedApiServiceIdQueryKey(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections/:unified_api/:service_id', keyArgs] as const
}

export function getVaultConnectionsUnifiedApiServiceIdQueryOptions<
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
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultConnectionsUnifiedApiServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultConnectionsUnifiedApiServiceId<
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
  args: () => InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultConnectionsUnifiedApiServiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVaultConnectionsUnifiedApiServiceId<
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
                  (typeof client.vault.connections)[':unified_api'][':service_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVaultConnectionsUnifiedApiServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVaultConnectionsUnifiedApiServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVaultConnectionsUnifiedApiServiceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVaultConnectionsUnifiedApiServiceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVaultConnectionsUnifiedApiServiceIdImport<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdImportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVaultConnectionsUnifiedApiServiceIdToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultConnectionsUnifiedApiServiceIdTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections/:unified_api/:service_id/:resource/config', keyArgs] as const
}

export function getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultConnectionsUnifiedApiServiceIdResourceConfig<
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
  args: () => InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultConnectionsUnifiedApiServiceIdResourceConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchVaultConnectionsUnifiedApiServiceIdResourceConfig<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultConsumersQueryKey(
  args: InferRequestType<typeof client.vault.consumers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers', keyArgs] as const
}

export function getVaultConsumersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vault.consumers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVaultConsumersQueryKey>
  >({
    queryKey: getVaultConsumersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.consumers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaultConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vault.consumers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVaultConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultConsumersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVaultConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vault.consumers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultConsumersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultConsumersConsumerIdQueryKey(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers/:consumer_id', keyArgs] as const
}

export function getVaultConsumersConsumerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultConsumersConsumerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.consumers[':consumer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultConsumersConsumerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultConsumersConsumerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVaultConsumersConsumerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVaultConsumersConsumerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVaultConsumersConsumerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVaultConsumersConsumerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultConsumersConsumerIdStatsQueryKey(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers/:consumer_id/stats', keyArgs] as const
}

export function getVaultConsumersConsumerIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultConsumersConsumerIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.consumers[':consumer_id'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultConsumersConsumerIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultConsumersConsumerIdStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getVaultLogsQueryKey(args: InferRequestType<typeof client.vault.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/logs', keyArgs] as const
}

export function getVaultLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vault.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultLogsQueryKey>
  >({
    queryKey: getVaultLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaultLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vault.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVaultLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVaultRevokeServiceIdApplicationIdQueryKey(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
) {
  return ['vault', '/vault/revoke/:service_id/:application_id', args] as const
}

export function getVaultRevokeServiceIdApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultRevokeServiceIdApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vault.revoke[':service_id'][':application_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultRevokeServiceIdApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vault.revoke)[':service_id'][':application_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVaultRevokeServiceIdApplicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVaultSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vault.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVaultSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
