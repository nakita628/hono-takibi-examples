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

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProjectUsernameProjectQueryKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
) {
  return ['project', '/project/:username/:project', args] as const
}

export function getProjectUsernameProjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectUsernameProject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectUsernameProjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectUsernameProjectBuildCache<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectUsernameProjectBuildCacheMutationOptions<
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

export function getProjectUsernameProjectCheckoutKeyQueryKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
) {
  return ['project', '/project/:username/:project/checkout-key', args] as const
}

export function getProjectUsernameProjectCheckoutKeyQueryOptions<
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
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectCheckoutKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectCheckoutKey<
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
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectCheckoutKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectUsernameProjectCheckoutKey<
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
                  (typeof client.project)[':username'][':project']['checkout-key']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>,
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
    const mutationDefaults = getPostProjectUsernameProjectCheckoutKeyMutationOptions<
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

export function getProjectUsernameProjectCheckoutKeyFingerprintQueryKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
) {
  return ['project', '/project/:username/:project/checkout-key/:fingerprint', args] as const
}

export function getProjectUsernameProjectCheckoutKeyFingerprintQueryOptions<
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
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectCheckoutKeyFingerprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectCheckoutKeyFingerprint<
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
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectCheckoutKeyFingerprintQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProjectUsernameProjectCheckoutKeyFingerprint<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectUsernameProjectCheckoutKeyFingerprintMutationOptions<
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

export function getProjectUsernameProjectEnvvarQueryKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
) {
  return ['project', '/project/:username/:project/envvar', args] as const
}

export function getProjectUsernameProjectEnvvarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectEnvvarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'].envvar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectEnvvar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProjectUsernameProjectEnvvarQueryKey>
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
      ...getProjectUsernameProjectEnvvarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectUsernameProjectEnvvar<
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
                ReturnType<(typeof client.project)[':username'][':project']['envvar']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>,
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
    const mutationDefaults = getPostProjectUsernameProjectEnvvarMutationOptions<
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

export function getProjectUsernameProjectEnvvarNameQueryKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
) {
  return ['project', '/project/:username/:project/envvar/:name', args] as const
}

export function getProjectUsernameProjectEnvvarNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectEnvvarNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'].envvar[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectEnvvarName<
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
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getProjectUsernameProjectEnvvarNameQueryKey>
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
      ...getProjectUsernameProjectEnvvarNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProjectUsernameProjectEnvvarName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectUsernameProjectEnvvarNameMutationOptions<
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

export function createPostProjectUsernameProjectSshKey<
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
                ReturnType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>,
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
    const mutationDefaults = getPostProjectUsernameProjectSshKeyMutationOptions<
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

export function createPostProjectUsernameProjectTreeBranch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectUsernameProjectTreeBranchMutationOptions<
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

export function getProjectUsernameProjectBuildNumQueryKey(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
) {
  return ['project', '/project/:username/:project/:build_num', args] as const
}

export function getProjectUsernameProjectBuildNumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectBuildNumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectBuildNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectBuildNumQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectUsernameProjectBuildNumArtifactsQueryKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
) {
  return ['project', '/project/:username/:project/:build_num/artifacts', args] as const
}

export function getProjectUsernameProjectBuildNumArtifactsQueryOptions<
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
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectBuildNumArtifactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].artifacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectBuildNumArtifacts<
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
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectBuildNumArtifactsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectUsernameProjectBuildNumCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectUsernameProjectBuildNumCancelMutationOptions<
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

export function createPostProjectUsernameProjectBuildNumRetry<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectUsernameProjectBuildNumRetryMutationOptions<
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

export function getProjectUsernameProjectBuildNumTestsQueryKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
) {
  return ['project', '/project/:username/:project/:build_num/tests', args] as const
}

export function getProjectUsernameProjectBuildNumTestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectUsernameProjectBuildNumTestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.project[':username'][':project'][':build_num'].tests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectUsernameProjectBuildNumTests<
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
  args: () => InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectUsernameProjectBuildNumTestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsQueryKey() {
  return ['projects', '/projects'] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRecentBuildsQueryKey(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
) {
  return ['recent-builds', '/recent-builds', args] as const
}

export function getRecentBuildsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecentBuildsQueryKey>
  >({
    queryKey: getRecentBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['recent-builds'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecentBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['recent-builds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecentBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecentBuildsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserHerokuKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)['heroku-key']['$post']>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostUserHerokuKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
