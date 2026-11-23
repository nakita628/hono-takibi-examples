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

export function getMeKey() {
  return ['me'] as const
}

export function getProjectKey() {
  return ['project'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRecentBuildsKey() {
  return ['recent-builds'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectUsernameProjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['$get']>
  >,
) {
  return ['project', '/project/:username/:project', toValue(args)] as const
}

export function getProjectUsernameProjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectUsernameProjectMutationKey() {
  return ['project', '/project/:username/:project', 'POST'] as const
}

export function getPostProjectUsernameProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':username'][':project']['$post']>,
    ) {
      return parseResponse(client.project[':username'][':project'].$post(args, options))
    },
  })
}

export function usePostProjectUsernameProject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.project)[':username'][':project']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.project)[':username'][':project']['$post']>,
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
  const mutationDefaults = getPostProjectUsernameProjectMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProjectUsernameProjectBuildCacheMutationKey() {
  return ['project', '/project/:username/:project/build-cache', 'DELETE'] as const
}

export function getDeleteProjectUsernameProjectBuildCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['build-cache']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['build-cache']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectUsernameProjectBuildCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project']['build-cache']['$delete']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project']['build-cache'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectUsernameProjectBuildCache<
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
                    (typeof client.project)[':username'][':project']['build-cache']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project']['build-cache']['$delete']
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
  const mutationDefaults = getDeleteProjectUsernameProjectBuildCacheMutationOptions<
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

export function getProjectUsernameProjectCheckoutKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
  >,
) {
  return ['project', '/project/:username/:project/checkout-key', toValue(args)] as const
}

export function getProjectUsernameProjectCheckoutKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectCheckoutKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectCheckoutKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
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
                    (typeof client.project)[':username'][':project']['checkout-key']['$get']
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
                    (typeof client.project)[':username'][':project']['checkout-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectCheckoutKeyQueryKey>
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
            ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectCheckoutKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectCheckoutKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project']['checkout-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectUsernameProjectCheckoutKeyMutationKey() {
  return ['project', '/project/:username/:project/checkout-key', 'POST'] as const
}

export function getPostProjectUsernameProjectCheckoutKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectCheckoutKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project']['checkout-key']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'].$post(args, options),
      )
    },
  })
}

export function usePostProjectUsernameProjectCheckoutKey<
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
                    (typeof client.project)[':username'][':project']['checkout-key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project']['checkout-key']['$post']
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
  const mutationDefaults = getPostProjectUsernameProjectCheckoutKeyMutationOptions<
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

export function getProjectUsernameProjectCheckoutKeyFingerprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
    >
  >,
) {
  return [
    'project',
    '/project/:username/:project/checkout-key/:fingerprint',
    toValue(args),
  ] as const
}

export function getProjectUsernameProjectCheckoutKeyFingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectCheckoutKeyFingerprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectUsernameProjectCheckoutKeyFingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
                    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
                    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectCheckoutKeyFingerprintQueryKey>
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
              (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectCheckoutKeyFingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectCheckoutKeyFingerprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectUsernameProjectCheckoutKeyFingerprintMutationKey() {
  return ['project', '/project/:username/:project/checkout-key/:fingerprint', 'DELETE'] as const
}

export function getDeleteProjectUsernameProjectCheckoutKeyFingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectUsernameProjectCheckoutKeyFingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'][':fingerprint'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectUsernameProjectCheckoutKeyFingerprint<
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
                    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
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
  const mutationDefaults = getDeleteProjectUsernameProjectCheckoutKeyFingerprintMutationOptions<
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

export function getProjectUsernameProjectEnvvarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>
  >,
) {
  return ['project', '/project/:username/:project/envvar', toValue(args)] as const
}

export function getProjectUsernameProjectEnvvarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectEnvvarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'].envvar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectEnvvar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>
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
                  ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectEnvvarQueryKey>
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
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectEnvvarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectEnvvarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'].envvar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectUsernameProjectEnvvarMutationKey() {
  return ['project', '/project/:username/:project/envvar', 'POST'] as const
}

export function getPostProjectUsernameProjectEnvvarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectEnvvarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>,
    ) {
      return parseResponse(client.project[':username'][':project'].envvar.$post(args, options))
    },
  })
}

export function usePostProjectUsernameProjectEnvvar<
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
                  ReturnType<(typeof client.project)[':username'][':project']['envvar']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>,
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
  const mutationDefaults = getPostProjectUsernameProjectEnvvarMutationOptions<
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

export function getProjectUsernameProjectEnvvarNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar'][':name']['$get']>
  >,
) {
  return ['project', '/project/:username/:project/envvar/:name', toValue(args)] as const
}

export function getProjectUsernameProjectEnvvarNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectEnvvarNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'].envvar[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectEnvvarName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.project)[':username'][':project']['envvar'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project']['envvar'][':name']['$get']>
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
                    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
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
                    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectEnvvarNameQueryKey>
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
            ReturnType<(typeof client.project)[':username'][':project']['envvar'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectEnvvarNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectEnvvarNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'].envvar[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectUsernameProjectEnvvarNameMutationKey() {
  return ['project', '/project/:username/:project/envvar/:name', 'DELETE'] as const
}

export function getDeleteProjectUsernameProjectEnvvarNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectUsernameProjectEnvvarNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project'].envvar[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectUsernameProjectEnvvarName<
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
                    (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
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
  const mutationDefaults = getDeleteProjectUsernameProjectEnvvarNameMutationOptions<
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

export function getPostProjectUsernameProjectSshKeyMutationKey() {
  return ['project', '/project/:username/:project/ssh-key', 'POST'] as const
}

export function getPostProjectUsernameProjectSshKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectSshKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>,
    ) {
      return parseResponse(client.project[':username'][':project']['ssh-key'].$post(args, options))
    },
  })
}

export function usePostProjectUsernameProjectSshKey<
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
                  ReturnType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>,
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
  const mutationDefaults = getPostProjectUsernameProjectSshKeyMutationOptions<
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

export function getPostProjectUsernameProjectTreeBranchMutationKey() {
  return ['project', '/project/:username/:project/tree/:branch', 'POST'] as const
}

export function getPostProjectUsernameProjectTreeBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['tree'][':branch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.project)[':username'][':project']['tree'][':branch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectTreeBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project']['tree'][':branch']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project'].tree[':branch'].$post(args, options),
      )
    },
  })
}

export function usePostProjectUsernameProjectTreeBranch<
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
                    (typeof client.project)[':username'][':project']['tree'][':branch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project']['tree'][':branch']['$post']
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
  const mutationDefaults = getPostProjectUsernameProjectTreeBranchMutationOptions<
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

export function getProjectUsernameProjectBuildNumQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
  >,
) {
  return ['project', '/project/:username/:project/:build_num', toValue(args)] as const
}

export function getProjectUsernameProjectBuildNumQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectBuildNumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectBuildNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
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
                  ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectBuildNumQueryKey>
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
            ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectBuildNumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectBuildNumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'][':build_num'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectUsernameProjectBuildNumArtifactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
    >
  >,
) {
  return ['project', '/project/:username/:project/:build_num/artifacts', toValue(args)] as const
}

export function getProjectUsernameProjectBuildNumArtifactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectBuildNumArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectBuildNumArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
                    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
                    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectBuildNumArtifactsQueryKey>
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
              (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectBuildNumArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectBuildNumArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'][':build_num'].artifacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectUsernameProjectBuildNumCancelMutationKey() {
  return ['project', '/project/:username/:project/:build_num/cancel', 'POST'] as const
}

export function getPostProjectUsernameProjectBuildNumCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectBuildNumCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostProjectUsernameProjectBuildNumCancel<
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
                    (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
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
  const mutationDefaults = getPostProjectUsernameProjectBuildNumCancelMutationOptions<
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

export function getPostProjectUsernameProjectBuildNumRetryMutationKey() {
  return ['project', '/project/:username/:project/:build_num/retry', 'POST'] as const
}

export function getPostProjectUsernameProjectBuildNumRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectUsernameProjectBuildNumRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].retry.$post(args, options),
      )
    },
  })
}

export function usePostProjectUsernameProjectBuildNumRetry<
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
                    (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
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
  const mutationDefaults = getPostProjectUsernameProjectBuildNumRetryMutationOptions<
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

export function getProjectUsernameProjectBuildNumTestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
    >
  >,
) {
  return ['project', '/project/:username/:project/:build_num/tests', toValue(args)] as const
}

export function getProjectUsernameProjectBuildNumTestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectUsernameProjectBuildNumTestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].tests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectUsernameProjectBuildNumTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
                    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
                    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectUsernameProjectBuildNumTestsQueryKey>
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
              (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectUsernameProjectBuildNumTestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectUsernameProjectBuildNumTestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.project[':username'][':project'][':build_num'].tests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsQueryKey() {
  return ['projects', '/projects'] as const
}

export function getProjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecentBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recent-builds']['$get']>>,
) {
  return ['recent-builds', '/recent-builds', toValue(args)] as const
}

export function getRecentBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recent-builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecentBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['recent-builds'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecentBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recent-builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
            >
          >,
          ReturnType<typeof getRecentBuildsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecentBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecentBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['recent-builds'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserHerokuKeyMutationKey() {
  return ['user', '/user/heroku-key', 'POST'] as const
}

export function getPostUserHerokuKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['heroku-key']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUserHerokuKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.user['heroku-key'].$post(undefined, options))
    },
  })
}

export function usePostUserHerokuKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['heroku-key']['$post']>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostUserHerokuKeyMutationOptions<TError, TOnMutateResult>(
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
