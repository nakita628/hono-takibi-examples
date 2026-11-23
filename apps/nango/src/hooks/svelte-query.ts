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

export function getActionKey() {
  return ['action'] as const
}

export function getConnectKey() {
  return ['connect'] as const
}

export function getConnectionKey() {
  return ['connection'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getEnvironmentKey() {
  return ['environment'] as const
}

export function getEnvironmentVariablesKey() {
  return ['environment-variables'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getFunctionsKey() {
  return ['functions'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getProxyKey() {
  return ['proxy'] as const
}

export function getRecordsKey() {
  return ['records'] as const
}

export function getScriptsKey() {
  return ['scripts'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getProvidersQueryKey() {
  return ['providers', '/providers'] as const
}

export function getProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >({
    queryKey: getProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProvidersProviderQueryKey(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
) {
  return ['providers', '/providers/:provider', args] as const
}

export function getProvidersProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderQueryKey>
  >({
    queryKey: getProvidersProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':provider']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersProviderQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProvidersProviderTemplatesQueryKey(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
) {
  return ['providers', '/providers/:provider/templates', args] as const
}

export function getProvidersProviderTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersProviderTemplatesQueryKey>
  >({
    queryKey: getProvidersProviderTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':provider'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersProviderTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersProviderTemplatesQueryKey>
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
      ...getProvidersProviderTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIntegrationsQueryKey() {
  return ['integrations', '/integrations'] as const
}

export function getIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntegrationsQueryKey>
  >({
    queryKey: getIntegrationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntegrationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostIntegrationsMutationKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function getPostIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.$post>) {
      return parseResponse(client.integrations.$post(args, options))
    },
  })
}

export function createPostIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.integrations.$post>,
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
    const mutationDefaults = getPostIntegrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIntegrationsQuickstartMutationKey() {
  return ['integrations', '/integrations/quickstart', 'POST'] as const
}

export function getPostIntegrationsQuickstartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.quickstart.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.integrations.quickstart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIntegrationsQuickstartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.integrations.quickstart.$post>) {
      return parseResponse(client.integrations.quickstart.$post(args, options))
    },
  })
}

export function createPostIntegrationsQuickstart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.integrations.quickstart.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.integrations.quickstart.$post>,
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
    const mutationDefaults = getPostIntegrationsQuickstartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntegrationsUniqueKeyQueryKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey', args] as const
}

export function getIntegrationsUniqueKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsUniqueKeyQueryKey>
  >({
    queryKey: getIntegrationsUniqueKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':uniqueKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsUniqueKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsUniqueKeyQueryKey>
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
      ...getIntegrationsUniqueKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteIntegrationsUniqueKeyMutationKey() {
  return ['integrations', '/integrations/:uniqueKey', 'DELETE'] as const
}

export function getDeleteIntegrationsUniqueKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsUniqueKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']>,
    ) {
      return parseResponse(client.integrations[':uniqueKey'].$delete(args, options))
    },
  })
}

export function createDeleteIntegrationsUniqueKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']>,
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
    const mutationDefaults = getDeleteIntegrationsUniqueKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchIntegrationsUniqueKeyMutationKey() {
  return ['integrations', '/integrations/:uniqueKey', 'PATCH'] as const
}

export function getPatchIntegrationsUniqueKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIntegrationsUniqueKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']>) {
      return parseResponse(client.integrations[':uniqueKey'].$patch(args, options))
    },
  })
}

export function createPatchIntegrationsUniqueKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']>,
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
    const mutationDefaults = getPatchIntegrationsUniqueKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIntegrationsUniqueKeyFunctionsQueryKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey/functions', args] as const
}

export function getIntegrationsUniqueKeyFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsUniqueKeyFunctionsQueryKey>
  >({
    queryKey: getIntegrationsUniqueKeyFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':uniqueKey'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsUniqueKeyFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsUniqueKeyFunctionsQueryKey>
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
      ...getIntegrationsUniqueKeyFunctionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIntegrationsUniqueKeyFunctionsNameQueryKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey/functions/:name', args] as const
}

export function getIntegrationsUniqueKeyFunctionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsUniqueKeyFunctionsNameQueryKey>
  >({
    queryKey: getIntegrationsUniqueKeyFunctionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':uniqueKey'].functions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsUniqueKeyFunctionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsUniqueKeyFunctionsNameQueryKey>
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
      ...getIntegrationsUniqueKeyFunctionsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteIntegrationsUniqueKeyFunctionsNameMutationKey() {
  return ['integrations', '/integrations/:uniqueKey/functions/:name', 'DELETE'] as const
}

export function getDeleteIntegrationsUniqueKeyFunctionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntegrationsUniqueKeyFunctionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.integrations[':uniqueKey'].functions[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIntegrationsUniqueKeyFunctionsName<
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
                  (typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']
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
    const mutationDefaults = getDeleteIntegrationsUniqueKeyFunctionsNameMutationOptions<
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

export function getIntegrationsUniqueKeyFunctionsNameCodeQueryKey(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
) {
  return ['integrations', '/integrations/:uniqueKey/functions/:name/code', args] as const
}

export function getIntegrationsUniqueKeyFunctionsNameCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsUniqueKeyFunctionsNameCodeQueryKey>
  >({
    queryKey: getIntegrationsUniqueKeyFunctionsNameCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.integrations[':uniqueKey'].functions[':name'].code.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIntegrationsUniqueKeyFunctionsNameCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntegrationsUniqueKeyFunctionsNameCodeQueryKey>
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
      ...getIntegrationsUniqueKeyFunctionsNameCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getConnectionQueryKey(args: InferRequestType<typeof client.connection.$get>) {
  return ['connection', '/connection', args] as const
}

export function getConnectionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connection.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionQueryKey>
  >({
    queryKey: getConnectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connection.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConnection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostConnectionMutationKey() {
  return ['connection', '/connection', 'POST'] as const
}

export function getPostConnectionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$post>>>>>,
    TError,
    InferRequestType<typeof client.connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connection.$post>) {
      return parseResponse(client.connection.$post(args, options))
    },
  })
}

export function createPostConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connection.$post>,
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
    const mutationDefaults = getPostConnectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectionConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
) {
  return ['connection', '/connection/:connectionId', args] as const
}

export function getConnectionConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionConnectionIdQueryKey>
  >({
    queryKey: getConnectionConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connection[':connectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionConnectionIdQueryKey>
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
      ...getConnectionConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteConnectionConnectionIdMutationKey() {
  return ['connection', '/connection/:connectionId', 'DELETE'] as const
}

export function getDeleteConnectionConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connection)[':connectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connection)[':connectionId']['$delete']>,
    ) {
      return parseResponse(client.connection[':connectionId'].$delete(args, options))
    },
  })
}

export function createDeleteConnectionConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connection)[':connectionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connection)[':connectionId']['$delete']>,
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
    const mutationDefaults = getDeleteConnectionConnectionIdMutationOptions<
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

export function getPostConnectionMetadataMutationKey() {
  return ['connection', '/connection/metadata', 'POST'] as const
}

export function getPostConnectionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.connection.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connection.metadata.$post>) {
      return parseResponse(client.connection.metadata.$post(args, options))
    },
  })
}

export function createPostConnectionMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connection.metadata.$post>,
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
    const mutationDefaults = getPostConnectionMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchConnectionMetadataMutationKey() {
  return ['connection', '/connection/metadata', 'PATCH'] as const
}

export function getPatchConnectionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.connection.metadata.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connection.metadata.$patch>) {
      return parseResponse(client.connection.metadata.$patch(args, options))
    },
  })
}

export function createPatchConnectionMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connection.metadata.$patch>,
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
    const mutationDefaults = getPatchConnectionMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConnectionConnectionIdMetadataMutationKey() {
  return ['connection', '/connection/:connectionId/metadata', 'POST'] as const
}

export function getPostConnectionConnectionIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionConnectionIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>,
    ) {
      return parseResponse(client.connection[':connectionId'].metadata.$post(args, options))
    },
  })
}

export function createPostConnectionConnectionIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>,
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
    const mutationDefaults = getPostConnectionConnectionIdMetadataMutationOptions<
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

export function getPatchConnectionConnectionIdMetadataMutationKey() {
  return ['connection', '/connection/:connectionId/metadata', 'PATCH'] as const
}

export function getPatchConnectionConnectionIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionConnectionIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>,
    ) {
      return parseResponse(client.connection[':connectionId'].metadata.$patch(args, options))
    },
  })
}

export function createPatchConnectionConnectionIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>,
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
    const mutationDefaults = getPatchConnectionConnectionIdMetadataMutationOptions<
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

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function createPostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connections.$post>,
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
    const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
) {
  return ['connections', '/connections/:connectionId', args] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connectionId', 'DELETE'] as const
}

export function getDeleteConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connectionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connectionId']['$delete']>,
    ) {
      return parseResponse(client.connections[':connectionId'].$delete(args, options))
    },
  })
}

export function createDeleteConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':connectionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connections)[':connectionId']['$delete']>,
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
    const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<
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

export function getPatchConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connectionId', 'PATCH'] as const
}

export function getPatchConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connectionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connectionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connectionId']['$patch']>,
    ) {
      return parseResponse(client.connections[':connectionId'].$patch(args, options))
    },
  })
}

export function createPatchConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':connectionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connections)[':connectionId']['$patch']>,
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
    const mutationDefaults = getPatchConnectionsConnectionIdMutationOptions<
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

export function getPostConnectionsMetadataMutationKey() {
  return ['connections', '/connections/metadata', 'POST'] as const
}

export function getPostConnectionsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.connections.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.metadata.$post>) {
      return parseResponse(client.connections.metadata.$post(args, options))
    },
  })
}

export function createPostConnectionsMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connections.metadata.$post>,
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
    const mutationDefaults = getPostConnectionsMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchConnectionsMetadataMutationKey() {
  return ['connections', '/connections/metadata', 'PATCH'] as const
}

export function getPatchConnectionsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.connections.metadata.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionsMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.metadata.$patch>) {
      return parseResponse(client.connections.metadata.$patch(args, options))
    },
  })
}

export function createPatchConnectionsMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connections.metadata.$patch>,
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
    const mutationDefaults = getPatchConnectionsMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScriptsConfigQueryKey(
  args: InferRequestType<typeof client.scripts.config.$get>,
) {
  return ['scripts', '/scripts/config', args] as const
}

export function getScriptsConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scripts.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsConfigQueryKey>
  >({
    queryKey: getScriptsConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScriptsConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scripts.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScriptsConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFunctionsCompileMutationKey() {
  return ['functions', '/functions/compile', 'POST'] as const
}

export function getPostFunctionsCompileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.compile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.functions.compile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsCompileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.functions.compile.$post>) {
      return parseResponse(client.functions.compile.$post(args, options))
    },
  })
}

export function createPostFunctionsCompile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.compile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.functions.compile.$post>,
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
    const mutationDefaults = getPostFunctionsCompileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFunctionsDryrunsMutationKey() {
  return ['functions', '/functions/dryruns', 'POST'] as const
}

export function getPostFunctionsDryrunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.dryruns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.functions.dryruns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsDryrunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.functions.dryruns.$post>) {
      return parseResponse(client.functions.dryruns.$post(args, options))
    },
  })
}

export function createPostFunctionsDryruns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.dryruns.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.functions.dryruns.$post>,
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
    const mutationDefaults = getPostFunctionsDryrunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFunctionsDryrunsIdQueryKey(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
) {
  return ['functions', '/functions/dryruns/:id', args] as const
}

export function getFunctionsDryrunsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsDryrunsIdQueryKey>
  >({
    queryKey: getFunctionsDryrunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.dryruns[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFunctionsDryrunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsDryrunsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsDryrunsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFunctionsDeploymentsMutationKey() {
  return ['functions', '/functions/deployments', 'POST'] as const
}

export function getPostFunctionsDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.deployments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.functions.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.functions.deployments.$post>) {
      return parseResponse(client.functions.deployments.$post(args, options))
    },
  })
}

export function createPostFunctionsDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.deployments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.functions.deployments.$post>,
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
    const mutationDefaults = getPostFunctionsDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFunctionsDeploymentsIdQueryKey(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
) {
  return ['functions', '/functions/deployments/:id', args] as const
}

export function getFunctionsDeploymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsDeploymentsIdQueryKey>
  >({
    queryKey: getFunctionsDeploymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.deployments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFunctionsDeploymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsDeploymentsIdQueryKey>
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
      ...getFunctionsDeploymentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecordsQueryKey(args: InferRequestType<typeof client.records.$get>) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records', keyArgs] as const
}

export function getRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecordsQueryKey>
  >({
    queryKey: getRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchRecordsPruneMutationKey() {
  return ['records', '/records/prune', 'PATCH'] as const
}

export function getPatchRecordsPruneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.prune.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.records.prune.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRecordsPruneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.records.prune.$patch>) {
      return parseResponse(client.records.prune.$patch(args, options))
    },
  })
}

export function createPatchRecordsPrune<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.prune.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.records.prune.$patch>,
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
    const mutationDefaults = getPatchRecordsPruneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSyncTriggerMutationKey() {
  return ['sync', '/sync/trigger', 'POST'] as const
}

export function getPostSyncTriggerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.trigger.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.trigger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncTriggerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.trigger.$post>) {
      return parseResponse(client.sync.trigger.$post(args, options))
    },
  })
}

export function createPostSyncTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.trigger.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.trigger.$post>,
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
    const mutationDefaults = getPostSyncTriggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSyncStartMutationKey() {
  return ['sync', '/sync/start', 'POST'] as const
}

export function getPostSyncStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.start.$post>>>>>,
    TError,
    InferRequestType<typeof client.sync.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.start.$post>) {
      return parseResponse(client.sync.start.$post(args, options))
    },
  })
}

export function createPostSyncStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.start.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.start.$post>,
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
    const mutationDefaults = getPostSyncStartMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSyncPauseMutationKey() {
  return ['sync', '/sync/pause', 'POST'] as const
}

export function getPostSyncPauseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.pause.$post>>>>>,
    TError,
    InferRequestType<typeof client.sync.pause.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPauseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.pause.$post>) {
      return parseResponse(client.sync.pause.$post(args, options))
    },
  })
}

export function createPostSyncPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.pause.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.pause.$post>,
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
    const mutationDefaults = getPostSyncPauseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSyncStatusQueryKey(args: InferRequestType<typeof client.sync.status.$get>) {
  return ['sync', '/sync/status', args] as const
}

export function getSyncStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sync.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSyncStatusQueryKey>
  >({
    queryKey: getSyncStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSyncStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sync.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSyncStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSyncNameVariantVariantMutationKey() {
  return ['sync', '/sync/:name/variant/:variant', 'POST'] as const
}

export function getPostSyncNameVariantVariantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncNameVariantVariantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']>,
    ) {
      return parseResponse(client.sync[':name'].variant[':variant'].$post(args, options))
    },
  })
}

export function createPostSyncNameVariantVariant<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']>,
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
    const mutationDefaults = getPostSyncNameVariantVariantMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSyncNameVariantVariantMutationKey() {
  return ['sync', '/sync/:name/variant/:variant', 'DELETE'] as const
}

export function getDeleteSyncNameVariantVariantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSyncNameVariantVariantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>,
    ) {
      return parseResponse(client.sync[':name'].variant[':variant'].$delete(args, options))
    },
  })
}

export function createDeleteSyncNameVariantVariant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>,
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
    const mutationDefaults = getDeleteSyncNameVariantVariantMutationOptions<
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

export function getActionActionIdQueryKey(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
) {
  return ['action', '/action/:actionId', args] as const
}

export function getActionActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionActionIdQueryKey>
  >({
    queryKey: getActionActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.action[':actionId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.action)[':actionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionActionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutSyncUpdateConnectionFrequencyMutationKey() {
  return ['sync', '/sync/update-connection-frequency', 'PUT'] as const
}

export function getPutSyncUpdateConnectionFrequencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)['update-connection-frequency']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSyncUpdateConnectionFrequencyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']>,
    ) {
      return parseResponse(client.sync['update-connection-frequency'].$put(args, options))
    },
  })
}

export function createPutSyncUpdateConnectionFrequency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync)['update-connection-frequency']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']>,
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
    const mutationDefaults = getPutSyncUpdateConnectionFrequencyMutationOptions<
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

export function getPostConnectionsConnectionIdToolsNameCallsMutationKey() {
  return ['connections', '/connections/:connectionId/tools/:name/calls', 'POST'] as const
}

export function getPostConnectionsConnectionIdToolsNameCallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsConnectionIdToolsNameCallsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':connectionId'].tools[':name'].calls.$post(args, options),
      )
    },
  })
}

export function createPostConnectionsConnectionIdToolsNameCalls<
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
                  (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
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
    const mutationDefaults = getPostConnectionsConnectionIdToolsNameCallsMutationOptions<
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

export function getPostActionTriggerMutationKey() {
  return ['action', '/action/trigger', 'POST'] as const
}

export function getPostActionTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.trigger.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.action.trigger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTriggerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.action.trigger.$post>) {
      return parseResponse(client.action.trigger.$post(args, options))
    },
  })
}

export function createPostActionTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.trigger.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.action.trigger.$post>,
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
    const mutationDefaults = getPostActionTriggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsQueryKey(args: InferRequestType<typeof client.environments.$get>) {
  return ['environments', '/environments', args] as const
}

export function getEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.environments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsQueryKey>
  >({
    queryKey: getEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.environments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostEnvironmentsMutationKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function getPostEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.environments.$post>) {
      return parseResponse(client.environments.$post(args, options))
    },
  })
}

export function createPostEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.environments.$post>,
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
    const mutationDefaults = getPostEnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsEnvironmentUuidQueryKey(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
) {
  return ['environments', '/environments/:environmentUuid', args] as const
}

export function getEnvironmentsEnvironmentUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentUuidQueryKey>
  >({
    queryKey: getEnvironmentsEnvironmentUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments[':environmentUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentsEnvironmentUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsEnvironmentUuidQueryKey>
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
      ...getEnvironmentsEnvironmentUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteEnvironmentsEnvironmentUuidMutationKey() {
  return ['environments', '/environments/:environmentUuid', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']>,
    ) {
      return parseResponse(client.environments[':environmentUuid'].$delete(args, options))
    },
  })
}

export function createDeleteEnvironmentsEnvironmentUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']>,
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
    const mutationDefaults = getDeleteEnvironmentsEnvironmentUuidMutationOptions<
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

export function getPatchEnvironmentsEnvironmentUuidMutationKey() {
  return ['environments', '/environments/:environmentUuid', 'PATCH'] as const
}

export function getPatchEnvironmentsEnvironmentUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEnvironmentsEnvironmentUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']>,
    ) {
      return parseResponse(client.environments[':environmentUuid'].$patch(args, options))
    },
  })
}

export function createPatchEnvironmentsEnvironmentUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']>,
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
    const mutationDefaults = getPatchEnvironmentsEnvironmentUuidMutationOptions<
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

export function getEnvironmentsEnvironmentUuidApiKeysQueryKey(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
) {
  return ['environments', '/environments/:environmentUuid/api-keys', args] as const
}

export function getEnvironmentsEnvironmentUuidApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentUuidApiKeysQueryKey>
  >({
    queryKey: getEnvironmentsEnvironmentUuidApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments[':environmentUuid']['api-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentsEnvironmentUuidApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsEnvironmentUuidApiKeysQueryKey>
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
      ...getEnvironmentsEnvironmentUuidApiKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostEnvironmentsEnvironmentUuidApiKeysMutationKey() {
  return ['environments', '/environments/:environmentUuid/api-keys', 'POST'] as const
}

export function getPostEnvironmentsEnvironmentUuidApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsEnvironmentUuidApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>,
    ) {
      return parseResponse(client.environments[':environmentUuid']['api-keys'].$post(args, options))
    },
  })
}

export function createPostEnvironmentsEnvironmentUuidApiKeys<
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
                ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>,
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
    const mutationDefaults = getPostEnvironmentsEnvironmentUuidApiKeysMutationOptions<
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

export function getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryKey(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
) {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', args] as const
}

export function getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryKey>
  >({
    queryKey: getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments[':environmentUuid']['api-keys'][':keyUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentsEnvironmentUuidApiKeysKeyUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryKey>
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
      ...getEnvironmentsEnvironmentUuidApiKeysKeyUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationKey() {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.environments[':environmentUuid']['api-keys'][':keyUuid'].$delete(args, options),
      )
    },
  })
}

export function createDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuid<
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
                  (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
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
    const mutationDefaults = getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationOptions<
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

export function getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationKey() {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', 'PATCH'] as const
}

export function getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
      >,
    ) {
      return parseResponse(
        client.environments[':environmentUuid']['api-keys'][':keyUuid'].$patch(args, options),
      )
    },
  })
}

export function createPatchEnvironmentsEnvironmentUuidApiKeysKeyUuid<
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
                  (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
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
    const mutationDefaults = getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidMutationOptions<
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

export function getEnvironmentVariablesQueryKey() {
  return ['environment-variables', '/environment-variables'] as const
}

export function getEnvironmentVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentVariablesQueryKey>
  >({
    queryKey: getEnvironmentVariablesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['environment-variables'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentVariablesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEnvironmentWebhookSigningKeyRotateMutationKey() {
  return ['environment', '/environment/webhook-signing-key/rotate', 'POST'] as const
}

export function getPostEnvironmentWebhookSigningKeyRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentWebhookSigningKeyRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>,
    ) {
      return parseResponse(client.environment['webhook-signing-key'].rotate.$post(args, options))
    },
  })
}

export function createPostEnvironmentWebhookSigningKeyRotate<
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
                ReturnType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>,
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
    const mutationDefaults = getPostEnvironmentWebhookSigningKeyRotateMutationOptions<
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

export function getProxyAnyPathQueryKey(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy/:anyPath', keyArgs] as const
}

export function getProxyAnyPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProxyAnyPathQueryKey>
  >({
    queryKey: getProxyAnyPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.proxy[':anyPath'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProxyAnyPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProxyAnyPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProxyAnyPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutProxyAnyPathMutationKey() {
  return ['proxy', '/proxy/:anyPath', 'PUT'] as const
}

export function getPutProxyAnyPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.proxy)[':anyPath']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProxyAnyPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.proxy)[':anyPath']['$put']>) {
      return parseResponse(client.proxy[':anyPath'].$put(args, options))
    },
  })
}

export function createPutProxyAnyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.proxy)[':anyPath']['$put']>,
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
    const mutationDefaults = getPutProxyAnyPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProxyAnyPathMutationKey() {
  return ['proxy', '/proxy/:anyPath', 'POST'] as const
}

export function getPostProxyAnyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.proxy)[':anyPath']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProxyAnyPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.proxy)[':anyPath']['$post']>) {
      return parseResponse(client.proxy[':anyPath'].$post(args, options))
    },
  })
}

export function createPostProxyAnyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.proxy)[':anyPath']['$post']>,
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
    const mutationDefaults = getPostProxyAnyPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProxyAnyPathMutationKey() {
  return ['proxy', '/proxy/:anyPath', 'DELETE'] as const
}

export function getDeleteProxyAnyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.proxy)[':anyPath']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProxyAnyPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.proxy)[':anyPath']['$delete']>) {
      return parseResponse(client.proxy[':anyPath'].$delete(args, options))
    },
  })
}

export function createDeleteProxyAnyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.proxy)[':anyPath']['$delete']>,
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
    const mutationDefaults = getDeleteProxyAnyPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchProxyAnyPathMutationKey() {
  return ['proxy', '/proxy/:anyPath', 'PATCH'] as const
}

export function getPatchProxyAnyPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.proxy)[':anyPath']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProxyAnyPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.proxy)[':anyPath']['$patch']>) {
      return parseResponse(client.proxy[':anyPath'].$patch(args, options))
    },
  })
}

export function createPatchProxyAnyPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.proxy)[':anyPath']['$patch']>,
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
    const mutationDefaults = getPatchProxyAnyPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConnectSessionsMutationKey() {
  return ['connect', '/connect/sessions', 'POST'] as const
}

export function getPostConnectSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.connect.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connect.sessions.$post>) {
      return parseResponse(client.connect.sessions.$post(args, options))
    },
  })
}

export function createPostConnectSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connect.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connect.sessions.$post>,
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
    const mutationDefaults = getPostConnectSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostConnectSessionsReconnectMutationKey() {
  return ['connect', '/connect/sessions/reconnect', 'POST'] as const
}

export function getPostConnectSessionsReconnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connect.sessions.reconnect.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.connect.sessions.reconnect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectSessionsReconnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connect.sessions.reconnect.$post>) {
      return parseResponse(client.connect.sessions.reconnect.$post(args, options))
    },
  })
}

export function createPostConnectSessionsReconnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.connect.sessions.reconnect.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.connect.sessions.reconnect.$post>,
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
    const mutationDefaults = getPostConnectSessionsReconnectMutationOptions<
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

export function getConnectSessionQueryKey() {
  return ['connect', '/connect/session'] as const
}

export function getConnectSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConnectSessionQueryKey>
  >({
    queryKey: getConnectSessionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.session.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConnectSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectSessionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteConnectSessionMutationKey() {
  return ['connect', '/connect/session', 'DELETE'] as const
}

export function getDeleteConnectSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectSessionMutationKey(),
    async mutationFn() {
      return parseResponse(client.connect.session.$delete(undefined, options))
    },
  })
}

export function createDeleteConnectSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$delete>>>
            >
          >
        | undefined,
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
    const mutationDefaults = getDeleteConnectSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
