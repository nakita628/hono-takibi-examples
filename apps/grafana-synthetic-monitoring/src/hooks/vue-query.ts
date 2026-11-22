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

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getSecretsQueryKey() {
  return ['secrets', '/secrets'] as const
}

export function getSecretsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecretsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          ReturnType<typeof getSecretsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecretsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.secrets.$post>,
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
  const mutationDefaults = getPostSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsFindByLabelsQueryKey() {
  return ['secrets', '/secrets/find_by_labels'] as const
}

export function getSecretsFindByLabelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecretsFindByLabelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.find_by_labels.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsFindByLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>
            >
          >,
          ReturnType<typeof getSecretsFindByLabelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.secrets.find_by_labels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsFindByLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecretsFindByLabelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.find_by_labels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecretsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
) {
  return ['secrets', '/secrets/:id', toValue(args)] as const
}

export function getSecretsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSecretsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':id']['$put']>,
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
  const mutationDefaults = getPutSecretsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSecretsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsIdDecryptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>>,
) {
  return ['secrets', '/secrets/:id/decrypt', toValue(args)] as const
}

export function getSecretsIdDecryptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsIdDecryptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets[':id'].decrypt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsIdDecrypt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['decrypt']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSecretsIdDecryptQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['decrypt']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsIdDecryptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsIdDecryptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets[':id'].decrypt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
