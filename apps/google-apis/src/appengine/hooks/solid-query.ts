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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getPostV1betaAppsMutationKey() {
  return ['v1beta', '/v1beta/apps', 'POST'] as const
}

export function getPostV1betaAppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1beta.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta.apps.$post>) {
      return parseResponse(client.v1beta.apps.$post(args, options))
    },
  })
}

export function createPostV1betaApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1beta.apps.$post>,
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
    const mutationDefaults = getPostV1betaAppsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId', args] as const
}

export function getV1betaAppsAppsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdQueryKey>
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
    return { ...getV1betaAppsAppsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchV1betaAppsAppsIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId', 'PATCH'] as const
}

export function getPatchV1betaAppsAppsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaAppsAppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']>) {
      return parseResponse(client.v1beta.apps[':appsId'].$patch(args, options))
    },
  })
}

export function createPatchV1betaAppsAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']>,
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
    const mutationDefaults = getPatchV1betaAppsAppsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdAuthorizedCertificatesQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedCertificates', args] as const
}

export function getV1betaAppsAppsIdAuthorizedCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdAuthorizedCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdAuthorizedCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesQueryKey>
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
      ...getV1betaAppsAppsIdAuthorizedCertificatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaAppsAppsIdAuthorizedCertificatesMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedCertificates', 'POST'] as const
}

export function getPostV1betaAppsAppsIdAuthorizedCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdAuthorizedCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates.$post(args, options),
      )
    },
  })
}

export function createPostV1betaAppsAppsIdAuthorizedCertificates<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']
          >,
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
    const mutationDefaults = getPostV1betaAppsAppsIdAuthorizedCertificatesMutationOptions<
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

export function getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    args,
  ] as const
}

export function getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey
          >
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
      ...getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    'DELETE',
  ] as const
}

export function getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
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

export function getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    'PATCH',
  ] as const
}

export function getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
          >,
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
    const mutationDefaults =
      getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
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

export function getV1betaAppsAppsIdAuthorizedDomainsQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedDomains', args] as const
}

export function getV1betaAppsAppsIdAuthorizedDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedDomainsQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdAuthorizedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedDomains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdAuthorizedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdAuthorizedDomainsQueryKey>
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
      ...getV1betaAppsAppsIdAuthorizedDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdDomainMappingsQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings', args] as const
}

export function getV1betaAppsAppsIdDomainMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdDomainMappingsQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdDomainMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdDomainMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdDomainMappingsQueryKey>
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
      ...getV1betaAppsAppsIdDomainMappingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaAppsAppsIdDomainMappingsMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings', 'POST'] as const
}

export function getPostV1betaAppsAppsIdDomainMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdDomainMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>,
    ) {
      return parseResponse(client.v1beta.apps[':appsId'].domainMappings.$post(args, options))
    },
  })
}

export function createPostV1betaAppsAppsIdDomainMappings<
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
                Awaited<
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>,
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
    const mutationDefaults = getPostV1betaAppsAppsIdDomainMappingsMutationOptions<
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

export function getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', args] as const
}

export function getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdDomainMappingsDomainMappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey>
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
      ...getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', 'DELETE'] as const
}

export function getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
          >,
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
    const mutationDefaults = getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
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

export function getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', 'PATCH'] as const
}

export function getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV1betaAppsAppsIdDomainMappingsDomainMappingsId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
          >,
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
    const mutationDefaults = getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
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

export function getV1betaAppsAppsIdFirewallIngressRulesQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules', args] as const
}

export function getV1betaAppsAppsIdFirewallIngressRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdFirewallIngressRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdFirewallIngressRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesQueryKey>
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
      ...getV1betaAppsAppsIdFirewallIngressRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaAppsAppsIdFirewallIngressRulesMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules', 'POST'] as const
}

export function getPostV1betaAppsAppsIdFirewallIngressRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdFirewallIngressRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']
      >,
    ) {
      return parseResponse(client.v1beta.apps[':appsId'].firewall.ingressRules.$post(args, options))
    },
  })
}

export function createPostV1betaAppsAppsIdFirewallIngressRules<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']
          >,
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
    const mutationDefaults = getPostV1betaAppsAppsIdFirewallIngressRulesMutationOptions<
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

export function getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', args] as const
}

export function getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey>
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
      ...getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', 'DELETE'] as const
}

export function getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
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

export function getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId', 'PATCH'] as const
}

export function getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
          >,
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
    const mutationDefaults =
      getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
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

export function getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules:batchUpdate', 'POST'] as const
}

export function getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall['ingressRules:batchUpdate'].$post(args, options),
      )
    },
  })
}

export function createPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdate<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
          >,
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
    const mutationDefaults = getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateMutationOptions<
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

export function getV1betaAppsAppsIdLocationsQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations', args] as const
}

export function getV1betaAppsAppsIdLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdLocationsQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdLocationsQueryKey>
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
      ...getV1betaAppsAppsIdLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdLocationsLocationsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations/:locationsId', args] as const
}

export function getV1betaAppsAppsIdLocationsLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdLocationsLocationsIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdLocationsLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].locations[':locationsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdLocationsLocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdLocationsLocationsIdQueryKey>
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
      ...getV1betaAppsAppsIdLocationsLocationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdOperationsQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations', args] as const
}

export function getV1betaAppsAppsIdOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdOperationsQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdOperationsQueryKey>
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
      ...getV1betaAppsAppsIdOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdOperationsOperationsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations/:operationsId', args] as const
}

export function getV1betaAppsAppsIdOperationsOperationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdOperationsOperationsIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdOperationsOperationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].operations[':operationsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdOperationsOperationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdOperationsOperationsIdQueryKey>
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
      ...getV1betaAppsAppsIdOperationsOperationsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdServicesQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services', args] as const
}

export function getV1betaAppsAppsIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdServicesQueryKey>
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
      ...getV1betaAppsAppsIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdServicesServicesIdQueryKey(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', args] as const
}

export function getV1betaAppsAppsIdServicesServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdServicesServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServicesServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdQueryKey>
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
      ...getV1betaAppsAppsIdServicesServicesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', 'DELETE'] as const
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaAppsAppsIdServicesServicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdServicesServicesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']
          >,
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
    const mutationDefaults = getDeleteV1betaAppsAppsIdServicesServicesIdMutationOptions<
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

export function getPatchV1betaAppsAppsIdServicesServicesIdMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', 'PATCH'] as const
}

export function getPatchV1betaAppsAppsIdServicesServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaAppsAppsIdServicesServicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV1betaAppsAppsIdServicesServicesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']
          >,
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
    const mutationDefaults = getPatchV1betaAppsAppsIdServicesServicesIdMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions', args] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServicesServicesIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey>
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
      ...getV1betaAppsAppsIdServicesServicesIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions', 'POST'] as const
}

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdServicesServicesIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions.$post(args, options),
      )
    },
  })
}

export function createPostV1betaAppsAppsIdServicesServicesIdVersions<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
          >,
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
    const mutationDefaults = getPostV1betaAppsAppsIdServicesServicesIdVersionsMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId', args] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey>
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
      ...getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId',
    'DELETE',
  ] as const
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
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

export function getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId',
    'PATCH',
  ] as const
}

export function getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
          >,
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
    const mutationDefaults =
      getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances',
    args,
  ] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey>
  >({
    queryKey: getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[
          ':versionsId'
        ].instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey
          >
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
      ...getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId',
    args,
  ] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey
    >
  >({
    queryKey:
      getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
          ':instancesId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey
          >
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
      ...getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId',
    'DELETE',
  ] as const
}

export function getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
          ':instancesId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdMutationOptions<
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

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugMutationKey() {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId:debug',
    'POST',
  ] as const
}

export function getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
          ':instancesId:debug'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebug<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
          >,
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
    const mutationDefaults =
      getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugMutationOptions<
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

export function getPostV1betaAppsAppsIdRepairMutationKey() {
  return ['v1beta', '/v1beta/apps/:appsId:repair', 'POST'] as const
}

export function getPostV1betaAppsAppsIdRepairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaAppsAppsIdRepairMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>,
    ) {
      return parseResponse(client.v1beta.apps[':appsId:repair'].$post(args, options))
    },
  })
}

export function createPostV1betaAppsAppsIdRepair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>,
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
    const mutationDefaults = getPostV1betaAppsAppsIdRepairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1betaProjectsProjectsIdLocationsQueryKey(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations', args] as const
}

export function getV1betaProjectsProjectsIdLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsQueryKey>
  >({
    queryKey: getV1betaProjectsProjectsIdLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaProjectsProjectsIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsQueryKey>
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
      ...getV1betaProjectsProjectsIdLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations/:locationsId', args] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey>
  >({
    queryKey: getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaProjectsProjectsIdLocationsLocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey>
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
      ...getV1betaProjectsProjectsIdLocationsLocationsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsMutationKey() {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications',
    'POST',
  ] as const
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].applications.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1betaProjectsProjectsIdLocationsLocationsIdApplications<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
          >,
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
    const mutationDefaults =
      getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsMutationOptions<
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

export function getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId',
    args,
  ] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey
    >
  >({
    queryKey:
      getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
          ':applicationsId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey
          >
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
      ...getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairMutationKey() {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId:repair',
    'POST',
  ] as const
}

export function getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
          ':applicationsId:repair'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepair<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
          >,
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
    const mutationDefaults =
      getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairMutationOptions<
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

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations/:locationsId/operations', args] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey>
  >({
    queryKey: getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1betaProjectsProjectsIdLocationsLocationsIdOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey>
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
      ...getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/operations/:operationsId',
    args,
  ] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey>
  >({
    queryKey: getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
          ':operationsId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey
          >
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
      ...getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
