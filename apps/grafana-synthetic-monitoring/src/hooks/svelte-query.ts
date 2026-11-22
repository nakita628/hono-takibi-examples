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

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getSecretsQueryKey() {
  return ['secrets', '/secrets'] as const
}

export function getSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >({
    queryKey: getSecretsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSecretsMutationKey() {
  return ['secrets', '/secrets', 'POST'] as const
}

export function getPostSecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
    TError,
    InferRequestType<typeof client.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secrets.$post>) {
      return parseResponse(client.secrets.$post(args, options))
    },
  })
}

export function createPostSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
        TError,
        InferRequestType<typeof client.secrets.$post>,
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
    const mutationDefaults = getPostSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecretsFindByLabelsQueryKey() {
  return ['secrets', '/secrets/find_by_labels'] as const
}

export function getSecretsFindByLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsFindByLabelsQueryKey>
  >({
    queryKey: getSecretsFindByLabelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.find_by_labels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecretsFindByLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsFindByLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsFindByLabelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSecretsIdQueryKey(
  args: InferRequestType<(typeof client.secrets)[':id']['$get']>,
) {
  return ['secrets', '/secrets/:id', args] as const
}

export function getSecretsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.secrets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsIdQueryKey>
  >({
    queryKey: getSecretsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSecretsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutSecretsIdMutationKey() {
  return ['secrets', '/secrets/:id', 'PUT'] as const
}

export function getPutSecretsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':id']['$put']>) {
      return parseResponse(client.secrets[':id'].$put(args, options))
    },
  })
}

export function createPutSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.secrets)[':id']['$put']>,
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
    const mutationDefaults = getPutSecretsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSecretsIdMutationKey() {
  return ['secrets', '/secrets/:id', 'DELETE'] as const
}

export function getDeleteSecretsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':id']['$delete']>) {
      return parseResponse(client.secrets[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.secrets)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSecretsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSecretsIdDecryptQueryKey(
  args: InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>,
) {
  return ['secrets', '/secrets/:id/decrypt', args] as const
}

export function getSecretsIdDecryptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsIdDecryptQueryKey>
  >({
    queryKey: getSecretsIdDecryptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets[':id'].decrypt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSecretsIdDecrypt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsIdDecryptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsIdDecryptQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
