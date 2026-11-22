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

export function usePostV1betaApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1beta.apps.$post>,
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
  const mutationDefaults = getPostV1betaAppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>>,
) {
  return ['v1beta', '/v1beta/apps/:appsId', toValue(args)] as const
}

export function getV1betaAppsAppsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV1betaAppsAppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchV1betaAppsAppsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaAppsAppsIdAuthorizedCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedCertificates', toValue(args)] as const
}

export function getV1betaAppsAppsIdAuthorizedCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdAuthorizedCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdAuthorizedCertificates<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
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
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesQueryKey>
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
            ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdAuthorizedCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAppsAppsIdAuthorizedCertificates<
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
  const mutationDefaults = getPostV1betaAppsAppsIdAuthorizedCertificatesMutationOptions<
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

export function getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId',
    toValue(args),
  ] as const
}

export function getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey
          >
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
              (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
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
  const mutationDefaults =
    getDeleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
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

export function usePatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId<
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
  const mutationDefaults =
    getPatchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesIdMutationOptions<
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

export function getV1betaAppsAppsIdAuthorizedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/authorizedDomains', toValue(args)] as const
}

export function getV1betaAppsAppsIdAuthorizedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdAuthorizedDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].authorizedDomains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdAuthorizedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdAuthorizedDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdAuthorizedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdAuthorizedDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].authorizedDomains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdDomainMappingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings', toValue(args)] as const
}

export function getV1betaAppsAppsIdDomainMappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdDomainMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdDomainMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdDomainMappingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdDomainMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdDomainMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].domainMappings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAppsAppsIdDomainMappings<
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
                  ReturnType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>,
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
  const mutationDefaults = getPostV1betaAppsAppsIdDomainMappingsMutationOptions<
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

export function getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
    >
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/domainMappings/:domainMappingsId', toValue(args)] as const
}

export function getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdDomainMappingsDomainMappingsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey>
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
              (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdDomainMappingsDomainMappingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsId<
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
  const mutationDefaults = getDeleteV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
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

export function usePatchV1betaAppsAppsIdDomainMappingsDomainMappingsId<
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
  const mutationDefaults = getPatchV1betaAppsAppsIdDomainMappingsDomainMappingsIdMutationOptions<
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

export function getV1betaAppsAppsIdFirewallIngressRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/firewall/ingressRules', toValue(args)] as const
}

export function getV1betaAppsAppsIdFirewallIngressRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdFirewallIngressRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdFirewallIngressRules<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
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
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesQueryKey>
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
            ReturnType<(typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdFirewallIngressRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAppsAppsIdFirewallIngressRules<
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
  const mutationDefaults = getPostV1betaAppsAppsIdFirewallIngressRulesMutationOptions<
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

export function getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId',
    toValue(args),
  ] as const
}

export function getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey>
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
              (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
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
  const mutationDefaults =
    getDeleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
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

export function usePatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesId<
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
  const mutationDefaults =
    getPatchV1betaAppsAppsIdFirewallIngressRulesIngressRulesIdMutationOptions<
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

export function usePostV1betaAppsAppsIdFirewallIngressRulesBatchUpdate<
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
  const mutationDefaults = getPostV1betaAppsAppsIdFirewallIngressRulesBatchUpdateMutationOptions<
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

export function getV1betaAppsAppsIdLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations', toValue(args)] as const
}

export function getV1betaAppsAppsIdLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdLocationsLocationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/locations/:locationsId', toValue(args)] as const
}

export function getV1betaAppsAppsIdLocationsLocationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdLocationsLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].locations[':locationsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdLocationsLocationsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
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
                    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdLocationsLocationsIdQueryKey>
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
            ReturnType<(typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdLocationsLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdLocationsLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].locations[':locationsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations', toValue(args)] as const
}

export function getV1betaAppsAppsIdOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdOperationsOperationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/operations/:operationsId', toValue(args)] as const
}

export function getV1betaAppsAppsIdOperationsOperationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdOperationsOperationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].operations[':operationsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdOperationsOperationsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']>
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
                    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdOperationsOperationsIdQueryKey>
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
              (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdOperationsOperationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdOperationsOperationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].operations[':operationsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services', toValue(args)] as const
}

export function getV1betaAppsAppsIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdServicesServicesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId', toValue(args)] as const
}

export function getV1betaAppsAppsIdServicesServicesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdServicesServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdServicesServicesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdQueryKey>
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
            ReturnType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdServicesServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdServicesServicesId<
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
  const mutationDefaults = getDeleteV1betaAppsAppsIdServicesServicesIdMutationOptions<
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

export function usePatchV1betaAppsAppsIdServicesServicesId<
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
  const mutationDefaults = getPatchV1betaAppsAppsIdServicesServicesIdMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
    >
  >,
) {
  return ['v1beta', '/v1beta/apps/:appsId/services/:servicesId/versions', toValue(args)] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAppsAppsIdServicesServicesIdVersions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey>
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
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAppsAppsIdServicesServicesIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaAppsAppsIdServicesServicesIdVersions<
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
  const mutationDefaults = getPostV1betaAppsAppsIdServicesServicesIdVersionsMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId',
    toValue(args),
  ] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey>
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
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
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
  const mutationDefaults =
    getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
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

export function usePatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsId<
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
  const mutationDefaults =
    getPatchV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdMutationOptions<
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

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances',
    toValue(args),
  ] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[
          ':versionsId'
        ].instances.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstances<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey
          >
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
              (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[
            ':versionsId'
          ].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId',
    toValue(args),
  ] as const
}

export function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
          ':instancesId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
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
                    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
            ':instancesId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId<
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
  const mutationDefaults =
    getDeleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdMutationOptions<
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

export function usePostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebug<
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
  const mutationDefaults =
    getPostV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebugMutationOptions<
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

export function usePostV1betaAppsAppsIdRepair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1betaAppsAppsIdRepairMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaProjectsProjectsIdLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations', toValue(args)] as const
}

export function getV1betaProjectsProjectsIdLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaProjectsProjectsIdLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaProjectsProjectsIdLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaProjectsProjectsIdLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.projects[':projectsId'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
    >
  >,
) {
  return ['v1beta', '/v1beta/projects/:projectsId/locations/:locationsId', toValue(args)] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaProjectsProjectsIdLocationsLocationsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey>
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
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaProjectsProjectsIdLocationsLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaProjectsProjectsIdLocationsLocationsIdApplications<
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
  const mutationDefaults =
    getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsMutationOptions<
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

export function getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId',
    toValue(args),
  ] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
          ':applicationsId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
            ':applicationsId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepair<
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
  const mutationDefaults =
    getPostV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairMutationOptions<
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

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/operations',
    toValue(args),
  ] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1betaProjectsProjectsIdLocationsLocationsIdOperations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey>
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
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaProjectsProjectsIdLocationsLocationsIdOperationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
    >
  >,
) {
  return [
    'v1beta',
    '/v1beta/projects/:projectsId/locations/:locationsId/operations/:operationsId',
    toValue(args),
  ] as const
}

export function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
          ':operationsId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
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
                    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey
          >
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
              (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
            ':operationsId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
