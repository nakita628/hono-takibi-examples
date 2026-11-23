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

export function getCaCertificatesKey() {
  return ['ca_certificates'] as const
}

export function getCacheKey() {
  return ['cache'] as const
}

export function getCertificatesKey() {
  return ['certificates'] as const
}

export function getClusteringKey() {
  return ['clustering'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getConsumersKey() {
  return ['consumers'] as const
}

export function getDebugKey() {
  return ['debug'] as const
}

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getFilterChainsKey() {
  return ['filter-chains'] as const
}

export function getKeySetsKey() {
  return ['key-sets'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSnisKey() {
  return ['snis'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTimersKey() {
  return ['timers'] as const
}

export function getUpstreamsKey() {
  return ['upstreams'] as const
}

export function getVaultsKey() {
  return ['vaults'] as const
}

export function getEndpointKey() {
  return ['{endpoint}'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCaCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ca_certificates.$get>>,
) {
  return ['ca_certificates', '/ca_certificates', toValue(args)] as const
}

export function getCaCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ca_certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ca_certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ca_certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>
            >
          >,
          ReturnType<typeof getCaCertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ca_certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCaCertificatesMutationKey() {
  return ['ca_certificates', '/ca_certificates', 'POST'] as const
}

export function getPostCaCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ca_certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCaCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ca_certificates.$post>) {
      return parseResponse(client.ca_certificates.$post(args, options))
    },
  })
}

export function usePostCaCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ca_certificates.$post>,
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
  const mutationDefaults = getPostCaCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getCaCertificatesCaCertificateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>
  >,
) {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', toValue(args)] as const
}

export function getCaCertificatesCaCertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCaCertificatesCaCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ca_certificates[':ca_certificate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCaCertificatesCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCaCertificatesCaCertificateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCaCertificatesCaCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCaCertificatesCaCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ca_certificates[':ca_certificate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCaCertificatesCaCertificateIdMutationKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'PUT'] as const
}

export function getPutCaCertificatesCaCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCaCertificatesCaCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>,
    ) {
      return parseResponse(client.ca_certificates[':ca_certificate_id'].$put(args, options))
    },
  })
}

export function usePutCaCertificatesCaCertificateId<
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
                Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>,
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
  const mutationDefaults = getPutCaCertificatesCaCertificateIdMutationOptions<
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

export function getDeleteCaCertificatesCaCertificateIdMutationKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'DELETE'] as const
}

export function getDeleteCaCertificatesCaCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCaCertificatesCaCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>,
    ) {
      return parseResponse(client.ca_certificates[':ca_certificate_id'].$delete(args, options))
    },
  })
}

export function useDeleteCaCertificatesCaCertificateId<
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
                    ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>,
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
  const mutationDefaults = getDeleteCaCertificatesCaCertificateIdMutationOptions<
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

export function getPatchCaCertificatesCaCertificateIdMutationKey() {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', 'PATCH'] as const
}

export function getPatchCaCertificatesCaCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCaCertificatesCaCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>,
    ) {
      return parseResponse(client.ca_certificates[':ca_certificate_id'].$patch(args, options))
    },
  })
}

export function usePatchCaCertificatesCaCertificateId<
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
                Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>,
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
  const mutationDefaults = getPatchCaCertificatesCaCertificateIdMutationOptions<
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

export function getCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
) {
  return ['certificates', '/certificates', toValue(args)] as const
}

export function getCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          ReturnType<typeof getCertificatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCertificatesMutationKey() {
  return ['certificates', '/certificates', 'POST'] as const
}

export function getPostCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificates.$post>) {
      return parseResponse(client.certificates.$post(args, options))
    },
  })
}

export function usePostCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.certificates.$post>,
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
  const mutationDefaults = getPostCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getCertificatesCertificateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>>,
) {
  return ['certificates', '/certificates/:certificate_id', toValue(args)] as const
}

export function getCertificatesCertificateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':certificate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificatesCertificateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':certificate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCertificatesCertificateIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id', 'PUT'] as const
}

export function getPutCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':certificate_id']['$put']>,
    ) {
      return parseResponse(client.certificates[':certificate_id'].$put(args, options))
    },
  })
}

export function usePutCertificatesCertificateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificates)[':certificate_id']['$put']>,
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
  const mutationDefaults = getPutCertificatesCertificateIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCertificatesCertificateIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id', 'DELETE'] as const
}

export function getDeleteCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']>,
    ) {
      return parseResponse(client.certificates[':certificate_id'].$delete(args, options))
    },
  })
}

export function useDeleteCertificatesCertificateId<
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
                  Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']>,
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
  const mutationDefaults = getDeleteCertificatesCertificateIdMutationOptions<
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

export function getPatchCertificatesCertificateIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id', 'PATCH'] as const
}

export function getPatchCertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']>,
    ) {
      return parseResponse(client.certificates[':certificate_id'].$patch(args, options))
    },
  })
}

export function usePatchCertificatesCertificateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']>,
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
  const mutationDefaults = getPatchCertificatesCertificateIdMutationOptions<
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

export function getCertificatesCertificateNameOrIdSnisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
  >,
) {
  return ['certificates', '/certificates/:certificate_name_or_id/snis', toValue(args)] as const
}

export function getCertificatesCertificateNameOrIdSnisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesCertificateNameOrIdSnisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':certificate_name_or_id'].snis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesCertificateNameOrIdSnis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
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
                    (typeof client.certificates)[':certificate_name_or_id']['snis']['$get']
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
                    (typeof client.certificates)[':certificate_name_or_id']['snis']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCertificatesCertificateNameOrIdSnisQueryKey>
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
            ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesCertificateNameOrIdSnisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesCertificateNameOrIdSnisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':certificate_name_or_id'].snis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCertificatesCertificateNameOrIdSnisMutationKey() {
  return ['certificates', '/certificates/:certificate_name_or_id/snis', 'POST'] as const
}

export function getPostCertificatesCertificateNameOrIdSnisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesCertificateNameOrIdSnisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.certificates)[':certificate_name_or_id']['snis']['$post']
      >,
    ) {
      return parseResponse(client.certificates[':certificate_name_or_id'].snis.$post(args, options))
    },
  })
}

export function usePostCertificatesCertificateNameOrIdSnis<
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
                    (typeof client.certificates)[':certificate_name_or_id']['snis']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.certificates)[':certificate_name_or_id']['snis']['$post']
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
  const mutationDefaults = getPostCertificatesCertificateNameOrIdSnisMutationOptions<
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

export function getCertificatesCertificateIdSnisSniNameOrIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
    >
  >,
) {
  return [
    'certificates',
    '/certificates/:certificate_id/snis/:sni_name_or_id',
    toValue(args),
  ] as const
}

export function getCertificatesCertificateIdSnisSniNameOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesCertificateIdSnisSniNameOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesCertificateIdSnisSniNameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
                    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
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
                    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCertificatesCertificateIdSnisSniNameOrIdQueryKey>
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
              (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesCertificateIdSnisSniNameOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesCertificateIdSnisSniNameOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCertificatesCertificateIdSnisSniNameOrIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'PUT'] as const
}

export function getPutCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCertificatesCertificateIdSnisSniNameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
      >,
    ) {
      return parseResponse(
        client.certificates[':certificate_id'].snis[':sni_name_or_id'].$put(args, options),
      )
    },
  })
}

export function usePutCertificatesCertificateIdSnisSniNameOrId<
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
                    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
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
  const mutationDefaults = getPutCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function getDeleteCertificatesCertificateIdSnisSniNameOrIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'DELETE'] as const
}

export function getDeleteCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCertificatesCertificateIdSnisSniNameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.certificates[':certificate_id'].snis[':sni_name_or_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCertificatesCertificateIdSnisSniNameOrId<
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
                      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
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
  const mutationDefaults = getDeleteCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function getPatchCertificatesCertificateIdSnisSniNameOrIdMutationKey() {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', 'PATCH'] as const
}

export function getPatchCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCertificatesCertificateIdSnisSniNameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.certificates[':certificate_id'].snis[':sni_name_or_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchCertificatesCertificateIdSnisSniNameOrId<
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
                    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
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
  const mutationDefaults = getPatchCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function getConsumersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumers.$get>>,
) {
  return ['consumers', '/consumers', toValue(args)] as const
}

export function getConsumersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.consumers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
          >,
          ReturnType<typeof getConsumersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConsumersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConsumersMutationKey() {
  return ['consumers', '/consumers', 'POST'] as const
}

export function getPostConsumersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$post>>>>>,
    TError,
    InferRequestType<typeof client.consumers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.consumers.$post>) {
      return parseResponse(client.consumers.$post(args, options))
    },
  })
}

export function usePostConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.consumers.$post>,
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
  const mutationDefaults = getPostConsumersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConsumersConsumerUsernameOrIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>
  >,
) {
  return ['consumers', '/consumers/:consumer_username_or_id', toValue(args)] as const
}

export function getConsumersConsumerUsernameOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersConsumerUsernameOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersConsumerUsernameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsumersConsumerUsernameOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersConsumerUsernameOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersConsumerUsernameOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':consumer_username_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConsumersConsumerUsernameOrIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'PUT'] as const
}

export function getPutConsumersConsumerUsernameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConsumersConsumerUsernameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']>,
    ) {
      return parseResponse(client.consumers[':consumer_username_or_id'].$put(args, options))
    },
  })
}

export function usePutConsumersConsumerUsernameOrId<
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
                Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']>,
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
  const mutationDefaults = getPutConsumersConsumerUsernameOrIdMutationOptions<
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

export function getDeleteConsumersConsumerUsernameOrIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'DELETE'] as const
}

export function getDeleteConsumersConsumerUsernameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumersConsumerUsernameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>,
    ) {
      return parseResponse(client.consumers[':consumer_username_or_id'].$delete(args, options))
    },
  })
}

export function useDeleteConsumersConsumerUsernameOrId<
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
                    ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>,
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
  const mutationDefaults = getDeleteConsumersConsumerUsernameOrIdMutationOptions<
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

export function getPatchConsumersConsumerUsernameOrIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id', 'PATCH'] as const
}

export function getPatchConsumersConsumerUsernameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConsumersConsumerUsernameOrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>,
    ) {
      return parseResponse(client.consumers[':consumer_username_or_id'].$patch(args, options))
    },
  })
}

export function usePatchConsumersConsumerUsernameOrId<
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
                Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>,
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
  const mutationDefaults = getPatchConsumersConsumerUsernameOrIdMutationOptions<
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

export function getConsumersConsumerUsernameOrIdPluginsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
  >,
) {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins', toValue(args)] as const
}

export function getConsumersConsumerUsernameOrIdPluginsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersConsumerUsernameOrIdPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersConsumerUsernameOrIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersConsumerUsernameOrIdPluginsQueryKey>
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
            ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersConsumerUsernameOrIdPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersConsumerUsernameOrIdPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':consumer_username_or_id'].plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConsumersConsumerUsernameOrIdPluginsMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins', 'POST'] as const
}

export function getPostConsumersConsumerUsernameOrIdPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersConsumerUsernameOrIdPluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins.$post(args, options),
      )
    },
  })
}

export function usePostConsumersConsumerUsernameOrIdPlugins<
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']
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
  const mutationDefaults = getPostConsumersConsumerUsernameOrIdPluginsMutationOptions<
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

export function getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
    >
  >,
) {
  return [
    'consumers',
    '/consumers/:consumer_username_or_id/plugins/:plugin_id',
    toValue(args),
  ] as const
}

export function getConsumersConsumerUsernameOrIdPluginsPluginIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsumersConsumerUsernameOrIdPluginsPluginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey>
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
              (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'PUT'] as const
}

export function getPutConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
      >,
    ) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$put(args, options),
      )
    },
  })
}

export function usePutConsumersConsumerUsernameOrIdPluginsPluginId<
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
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
  const mutationDefaults = getPutConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'DELETE'] as const
}

export function getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteConsumersConsumerUsernameOrIdPluginsPluginId<
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
                      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
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
  const mutationDefaults = getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function getPatchConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey() {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', 'PATCH'] as const
}

export function getPatchConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchConsumersConsumerUsernameOrIdPluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchConsumersConsumerUsernameOrIdPluginsPluginId<
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
                    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
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
  const mutationDefaults = getPatchConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function getKeySetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-sets']['$get']>>,
) {
  return ['key-sets', '/key-sets', toValue(args)] as const
}

export function getKeySetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-sets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeySetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['key-sets'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeySets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['key-sets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>
            >
          >,
          ReturnType<typeof getKeySetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeySetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeySetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['key-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeySetsMutationKey() {
  return ['key-sets', '/key-sets', 'POST'] as const
}

export function getPostKeySetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['key-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeySetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['key-sets']['$post']>) {
      return parseResponse(client['key-sets'].$post(args, options))
    },
  })
}

export function usePostKeySets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['key-sets']['$post']>,
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
  const mutationDefaults = getPostKeySetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeySetsKeySetIdOrNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>
  >,
) {
  return ['key-sets', '/key-sets/:key-set_id_or_name', toValue(args)] as const
}

export function getKeySetsKeySetIdOrNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeySetsKeySetIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['key-sets'][':key-set_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeySetsKeySetIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeySetsKeySetIdOrNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeySetsKeySetIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeySetsKeySetIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['key-sets'][':key-set_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKeySetsKeySetIdOrNameMutationKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'PUT'] as const
}

export function getPutKeySetsKeySetIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKeySetsKeySetIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>,
    ) {
      return parseResponse(client['key-sets'][':key-set_id_or_name'].$put(args, options))
    },
  })
}

export function usePutKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>,
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
  const mutationDefaults = getPutKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKeySetsKeySetIdOrNameMutationKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'DELETE'] as const
}

export function getDeleteKeySetsKeySetIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeySetsKeySetIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>,
    ) {
      return parseResponse(client['key-sets'][':key-set_id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchKeySetsKeySetIdOrNameMutationKey() {
  return ['key-sets', '/key-sets/:key-set_id_or_name', 'PATCH'] as const
}

export function getPatchKeySetsKeySetIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchKeySetsKeySetIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>,
    ) {
      return parseResponse(client['key-sets'][':key-set_id_or_name'].$patch(args, options))
    },
  })
}

export function usePatchKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>,
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
  const mutationDefaults = getPatchKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getKeysQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>) {
  return ['keys', '/keys', toValue(args)] as const
}

export function getKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          ReturnType<typeof getKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKeysMutationKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function getPostKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.keys.$post>) {
      return parseResponse(client.keys.$post(args, options))
    },
  })
}

export function usePostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
          TError,
          InferRequestType<typeof client.keys.$post>,
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
  const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysKeyIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>>,
) {
  return ['keys', '/keys/:key_id_or_name', toValue(args)] as const
}

export function getKeysKeyIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysKeyIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys[':key_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeysKeyIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeysKeyIdOrNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysKeyIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys[':key_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKeysKeyIdOrNameMutationKey() {
  return ['keys', '/keys/:key_id_or_name', 'PUT'] as const
}

export function getPutKeysKeyIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKeysKeyIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']>) {
      return parseResponse(client.keys[':key_id_or_name'].$put(args, options))
    },
  })
}

export function usePutKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']>,
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
  const mutationDefaults = getPutKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKeysKeyIdOrNameMutationKey() {
  return ['keys', '/keys/:key_id_or_name', 'DELETE'] as const
}

export function getDeleteKeysKeyIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeysKeyIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']>) {
      return parseResponse(client.keys[':key_id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchKeysKeyIdOrNameMutationKey() {
  return ['keys', '/keys/:key_id_or_name', 'PATCH'] as const
}

export function getPatchKeysKeyIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchKeysKeyIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']>) {
      return parseResponse(client.keys[':key_id_or_name'].$patch(args, options))
    },
  })
}

export function usePatchKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']>,
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
  const mutationDefaults = getPatchKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
) {
  return ['plugins', '/plugins', toValue(args)] as const
}

export function getPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPluginsMutationKey() {
  return ['plugins', '/plugins', 'POST'] as const
}

export function getPostPluginsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$post>>>>>,
    TError,
    InferRequestType<typeof client.plugins.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.plugins.$post>) {
      return parseResponse(client.plugins.$post(args, options))
    },
  })
}

export function usePostPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.plugins.$post>,
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
  const mutationDefaults = getPostPluginsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPluginsPluginIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>>,
) {
  return ['plugins', '/plugins/:plugin_id', toValue(args)] as const
}

export function getPluginsPluginIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsPluginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins[':plugin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsPluginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPluginsPluginIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsPluginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsPluginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins[':plugin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPluginsPluginIdMutationKey() {
  return ['plugins', '/plugins/:plugin_id', 'PUT'] as const
}

export function getPutPluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPluginsPluginIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>) {
      return parseResponse(client.plugins[':plugin_id'].$put(args, options))
    },
  })
}

export function usePutPluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>,
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
  const mutationDefaults = getPutPluginsPluginIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePluginsPluginIdMutationKey() {
  return ['plugins', '/plugins/:plugin_id', 'DELETE'] as const
}

export function getDeletePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePluginsPluginIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']>) {
      return parseResponse(client.plugins[':plugin_id'].$delete(args, options))
    },
  })
}

export function useDeletePluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']>,
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
  const mutationDefaults = getDeletePluginsPluginIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPluginsPluginIdMutationKey() {
  return ['plugins', '/plugins/:plugin_id', 'PATCH'] as const
}

export function getPatchPluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPluginsPluginIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']>) {
      return parseResponse(client.plugins[':plugin_id'].$patch(args, options))
    },
  })
}

export function usePatchPluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']>,
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
  const mutationDefaults = getPatchPluginsPluginIdMutationOptions<TError, TOnMutateResult>(
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

export function getRoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.$get>>,
) {
  return ['routes', '/routes', toValue(args)] as const
}

export function getRoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoutes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.routes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
          ReturnType<typeof getRoutesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoutesMutationKey() {
  return ['routes', '/routes', 'POST'] as const
}

export function getPostRoutesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$post>>>>>,
    TError,
    InferRequestType<typeof client.routes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routes.$post>) {
      return parseResponse(client.routes.$post(args, options))
    },
  })
}

export function usePostRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.routes.$post>,
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
  const mutationDefaults = getPostRoutesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRoutesRouteIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>>,
) {
  return ['routes', '/routes/:route_id_or_name', toValue(args)] as const
}

export function getRoutesRouteIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesRouteIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':route_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesRouteIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoutesRouteIdOrNameQueryKey>
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
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesRouteIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesRouteIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':route_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRoutesRouteIdOrNameMutationKey() {
  return ['routes', '/routes/:route_id_or_name', 'PUT'] as const
}

export function getPutRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoutesRouteIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']>) {
      return parseResponse(client.routes[':route_id_or_name'].$put(args, options))
    },
  })
}

export function usePutRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']>,
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
  const mutationDefaults = getPutRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRoutesRouteIdOrNameMutationKey() {
  return ['routes', '/routes/:route_id_or_name', 'DELETE'] as const
}

export function getDeleteRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesRouteIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']>,
    ) {
      return parseResponse(client.routes[':route_id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRoutesRouteIdOrNameMutationKey() {
  return ['routes', '/routes/:route_id_or_name', 'PATCH'] as const
}

export function getPatchRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoutesRouteIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']>,
    ) {
      return parseResponse(client.routes[':route_id_or_name'].$patch(args, options))
    },
  })
}

export function usePatchRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']>,
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
  const mutationDefaults = getPatchRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getRoutesRouteIdOrNamePluginsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>
  >,
) {
  return ['routes', '/routes/:route_id_or_name/plugins', toValue(args)] as const
}

export function getRoutesRouteIdOrNamePluginsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesRouteIdOrNamePluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesRouteIdOrNamePlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoutesRouteIdOrNamePluginsQueryKey>
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
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesRouteIdOrNamePluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesRouteIdOrNamePluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':route_id_or_name'].plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoutesRouteIdOrNamePluginsMutationKey() {
  return ['routes', '/routes/:route_id_or_name/plugins', 'POST'] as const
}

export function getPostRoutesRouteIdOrNamePluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesRouteIdOrNamePluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>,
    ) {
      return parseResponse(client.routes[':route_id_or_name'].plugins.$post(args, options))
    },
  })
}

export function usePostRoutesRouteIdOrNamePlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>,
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
  const mutationDefaults = getPostRoutesRouteIdOrNamePluginsMutationOptions<
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

export function getRoutesRouteIdOrNamePluginsPluginIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']>
  >,
) {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', toValue(args)] as const
}

export function getRoutesRouteIdOrNamePluginsPluginIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesRouteIdOrNamePluginsPluginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesRouteIdOrNamePluginsPluginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']>
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
                    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
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
                    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRoutesRouteIdOrNamePluginsPluginIdQueryKey>
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
            ReturnType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesRouteIdOrNamePluginsPluginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesRouteIdOrNamePluginsPluginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRoutesRouteIdOrNamePluginsPluginIdMutationKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'PUT'] as const
}

export function getPutRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRoutesRouteIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins[':plugin_id'].$put(args, options),
      )
    },
  })
}

export function usePutRoutesRouteIdOrNamePluginsPluginId<
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
                    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']
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
  const mutationDefaults = getPutRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function getDeleteRoutesRouteIdOrNamePluginsPluginIdMutationKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'DELETE'] as const
}

export function getDeleteRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesRouteIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins[':plugin_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRoutesRouteIdOrNamePluginsPluginId<
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
                      (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
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
  const mutationDefaults = getDeleteRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function getPatchRoutesRouteIdOrNamePluginsPluginIdMutationKey() {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', 'PATCH'] as const
}

export function getPatchRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchRoutesRouteIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins[':plugin_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchRoutesRouteIdOrNamePluginsPluginId<
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
                    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
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
  const mutationDefaults = getPatchRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  return ['services', '/services', toValue(args)] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServicesMutationKey() {
  return ['services', '/services', 'POST'] as const
}

export function getPostServicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>>,
    TError,
    InferRequestType<typeof client.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.services.$post>) {
      return parseResponse(client.services.$post(args, options))
    },
  })
}

export function usePostServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.services.$post>,
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
  const mutationDefaults = getPostServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServicesServiceIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>>,
) {
  return ['services', '/services/:service_id_or_name', toValue(args)] as const
}

export function getServicesServiceIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNameQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServicesServiceIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name', 'PUT'] as const
}

export function getPutServicesServiceIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':service_id_or_name']['$put']>,
    ) {
      return parseResponse(client.services[':service_id_or_name'].$put(args, options))
    },
  })
}

export function usePutServicesServiceIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':service_id_or_name']['$put']>,
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
  const mutationDefaults = getPutServicesServiceIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteServicesServiceIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name', 'DELETE'] as const
}

export function getDeleteServicesServiceIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']>,
    ) {
      return parseResponse(client.services[':service_id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteServicesServiceIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteServicesServiceIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchServicesServiceIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name', 'PATCH'] as const
}

export function getPatchServicesServiceIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServicesServiceIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']>,
    ) {
      return parseResponse(client.services[':service_id_or_name'].$patch(args, options))
    },
  })
}

export function usePatchServicesServiceIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']>,
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
  const mutationDefaults = getPatchServicesServiceIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getServicesServiceIdOrNamePluginsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>
  >,
) {
  return ['services', '/services/:service_id_or_nameplugins', toValue(args)] as const
}

export function getServicesServiceIdOrNamePluginsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNamePluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_nameplugins'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrNamePlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNamePluginsQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNamePluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNamePluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_nameplugins'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServicesServiceIdOrNamePluginsMutationKey() {
  return ['services', '/services/:service_id_or_nameplugins', 'POST'] as const
}

export function getPostServicesServiceIdOrNamePluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdOrNamePluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>,
    ) {
      return parseResponse(client.services[':service_id_or_nameplugins'].$post(args, options))
    },
  })
}

export function usePostServicesServiceIdOrNamePlugins<
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
                Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>,
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
  const mutationDefaults = getPostServicesServiceIdOrNamePluginsMutationOptions<
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

export function getServicesServiceIdOrNamePluginsPluginIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
    >
  >,
) {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', toValue(args)] as const
}

export function getServicesServiceIdOrNamePluginsPluginIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNamePluginsPluginIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_name'].plugins[':plugin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrNamePluginsPluginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
                    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
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
                    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNamePluginsPluginIdQueryKey>
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
              (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNamePluginsPluginIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNamePluginsPluginIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_name'].plugins[':plugin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServicesServiceIdOrNamePluginsPluginIdMutationKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'PUT'] as const
}

export function getPutServicesServiceIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].plugins[':plugin_id'].$put(args, options),
      )
    },
  })
}

export function usePutServicesServiceIdOrNamePluginsPluginId<
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
                    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
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
  const mutationDefaults = getPutServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function getDeleteServicesServiceIdOrNamePluginsPluginIdMutationKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'DELETE'] as const
}

export function getDeleteServicesServiceIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].plugins[':plugin_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteServicesServiceIdOrNamePluginsPluginId<
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
                      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
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
  const mutationDefaults = getDeleteServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function getPatchServicesServiceIdOrNamePluginsPluginIdMutationKey() {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', 'PATCH'] as const
}

export function getPatchServicesServiceIdOrNamePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchServicesServiceIdOrNamePluginsPluginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].plugins[':plugin_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchServicesServiceIdOrNamePluginsPluginId<
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
                    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
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
  const mutationDefaults = getPatchServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function getServicesServiceIdOrNameRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>
  >,
) {
  return ['services', '/services/:service_id_or_name/routes', toValue(args)] as const
}

export function getServicesServiceIdOrNameRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNameRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_name'].routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrNameRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>
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
                  ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNameRoutesQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNameRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNameRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_name'].routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServicesServiceIdOrNameRoutesMutationKey() {
  return ['services', '/services/:service_id_or_name/routes', 'POST'] as const
}

export function getPostServicesServiceIdOrNameRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdOrNameRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>,
    ) {
      return parseResponse(client.services[':service_id_or_name'].routes.$post(args, options))
    },
  })
}

export function usePostServicesServiceIdOrNameRoutes<
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
                  ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>,
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
  const mutationDefaults = getPostServicesServiceIdOrNameRoutesMutationOptions<
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

export function getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
    >
  >,
) {
  return [
    'services',
    '/services/:service_id_or_name/routes/:route_id_or_name',
    toValue(args),
  ] as const
}

export function getServicesServiceIdOrNameRoutesRouteIdOrNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrNameRoutesRouteIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
                    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
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
                    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey>
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
              (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'PUT'] as const
}

export function getPutServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].routes[':route_id_or_name'].$put(args, options),
      )
    },
  })
}

export function usePutServicesServiceIdOrNameRoutesRouteIdOrName<
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
                    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
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
  const mutationDefaults = getPutServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'DELETE'] as const
}

export function getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].routes[':route_id_or_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteServicesServiceIdOrNameRoutesRouteIdOrName<
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
                      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
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
  const mutationDefaults = getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function getPatchServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey() {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', 'PATCH'] as const
}

export function getPatchServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchServicesServiceIdOrNameRoutesRouteIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name'].routes[':route_id_or_name'].$patch(args, options),
      )
    },
  })
}

export function usePatchServicesServiceIdOrNameRoutesRouteIdOrName<
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
                    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
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
  const mutationDefaults = getPatchServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function getSnisQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.snis.$get>>) {
  return ['snis', '/snis', toValue(args)] as const
}

export function getSnisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSnis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
          ReturnType<typeof getSnisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnisMutationKey() {
  return ['snis', '/snis', 'POST'] as const
}

export function getPostSnisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$post>>>>>,
    TError,
    InferRequestType<typeof client.snis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snis.$post>) {
      return parseResponse(client.snis.$post(args, options))
    },
  })
}

export function usePostSnis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$post>>>>>,
          TError,
          InferRequestType<typeof client.snis.$post>,
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
  const mutationDefaults = getPostSnisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnisSniNameOrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>>,
) {
  return ['snis', '/snis/:sni_name_or_id', toValue(args)] as const
}

export function getSnisSniNameOrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnisSniNameOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snis[':sni_name_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnisSniNameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnisSniNameOrIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnisSniNameOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnisSniNameOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snis[':sni_name_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnisSniNameOrIdMutationKey() {
  return ['snis', '/snis/:sni_name_or_id', 'PUT'] as const
}

export function getPutSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSnisSniNameOrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']>) {
      return parseResponse(client.snis[':sni_name_or_id'].$put(args, options))
    },
  })
}

export function usePutSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']>,
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
  const mutationDefaults = getPutSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSnisSniNameOrIdMutationKey() {
  return ['snis', '/snis/:sni_name_or_id', 'DELETE'] as const
}

export function getDeleteSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnisSniNameOrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']>) {
      return parseResponse(client.snis[':sni_name_or_id'].$delete(args, options))
    },
  })
}

export function useDeleteSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']>,
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
  const mutationDefaults = getDeleteSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSnisSniNameOrIdMutationKey() {
  return ['snis', '/snis/:sni_name_or_id', 'PATCH'] as const
}

export function getPatchSnisSniNameOrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSnisSniNameOrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']>) {
      return parseResponse(client.snis[':sni_name_or_id'].$patch(args, options))
    },
  })
}

export function usePatchSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']>,
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
  const mutationDefaults = getPatchSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
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

export function getUpstreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.upstreams.$get>>,
) {
  return ['upstreams', '/upstreams', toValue(args)] as const
}

export function getUpstreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.upstreams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUpstreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.upstreams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUpstreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.upstreams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
          >,
          ReturnType<typeof getUpstreamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUpstreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUpstreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.upstreams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUpstreamsMutationKey() {
  return ['upstreams', '/upstreams', 'POST'] as const
}

export function getPostUpstreamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$post>>>>>,
    TError,
    InferRequestType<typeof client.upstreams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpstreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.upstreams.$post>) {
      return parseResponse(client.upstreams.$post(args, options))
    },
  })
}

export function usePostUpstreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.upstreams.$post>,
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
  const mutationDefaults = getPostUpstreamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUpstreamsUpstreamIdOrNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>
  >,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name', toValue(args)] as const
}

export function getUpstreamsUpstreamIdOrNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUpstreamsUpstreamIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUpstreamsUpstreamIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUpstreamsUpstreamIdOrNameQueryKey>
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
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUpstreamsUpstreamIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUpstreamsUpstreamIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.upstreams[':upstream_id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUpstreamsUpstreamIdOrNameMutationKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'PUT'] as const
}

export function getPutUpstreamsUpstreamIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUpstreamsUpstreamIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>,
    ) {
      return parseResponse(client.upstreams[':upstream_id_or_name'].$put(args, options))
    },
  })
}

export function usePutUpstreamsUpstreamIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>,
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
  const mutationDefaults = getPutUpstreamsUpstreamIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUpstreamsUpstreamIdOrNameMutationKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'DELETE'] as const
}

export function getDeleteUpstreamsUpstreamIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUpstreamsUpstreamIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>,
    ) {
      return parseResponse(client.upstreams[':upstream_id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteUpstreamsUpstreamIdOrName<
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
                  Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteUpstreamsUpstreamIdOrNameMutationOptions<
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

export function getPatchUpstreamsUpstreamIdOrNameMutationKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name', 'PATCH'] as const
}

export function getPatchUpstreamsUpstreamIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUpstreamsUpstreamIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>,
    ) {
      return parseResponse(client.upstreams[':upstream_id_or_name'].$patch(args, options))
    },
  })
}

export function usePatchUpstreamsUpstreamIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>,
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
  const mutationDefaults = getPatchUpstreamsUpstreamIdOrNameMutationOptions<
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

export function getUpstreamsUpstreamIdOrNameTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
  >,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name/targets', toValue(args)] as const
}

export function getUpstreamsUpstreamIdOrNameTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUpstreamsUpstreamIdOrNameTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUpstreamsUpstreamIdOrNameTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
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
                  ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUpstreamsUpstreamIdOrNameTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUpstreamsUpstreamIdOrNameTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUpstreamsUpstreamIdOrNameTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.upstreams[':upstream_id_or_name'].targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUpstreamsUpstreamIdOrNameTargetsMutationKey() {
  return ['upstreams', '/upstreams/:upstream_id_or_name/targets', 'POST'] as const
}

export function getPostUpstreamsUpstreamIdOrNameTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpstreamsUpstreamIdOrNameTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>,
    ) {
      return parseResponse(client.upstreams[':upstream_id_or_name'].targets.$post(args, options))
    },
  })
}

export function usePostUpstreamsUpstreamIdOrNameTargets<
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
                  ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>,
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
  const mutationDefaults = getPostUpstreamsUpstreamIdOrNameTargetsMutationOptions<
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

export function getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
    >
  >,
) {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    toValue(args),
  ] as const
}

export function getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
                    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
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
                    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey>
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
              (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'PUT',
  ] as const
}

export function getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
      >,
    ) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
                    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
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
  const mutationDefaults = getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'DELETE',
  ] as const
}

export function getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
      >,
    ) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
                      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
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
  const mutationDefaults = getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey() {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    'PATCH',
  ] as const
}

export function getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
      >,
    ) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
                    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
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
  const mutationDefaults = getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function getVaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
) {
  return ['vaults', '/vaults', toValue(args)] as const
}

export function getVaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          ReturnType<typeof getVaultsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVaultsMutationKey() {
  return ['vaults', '/vaults', 'POST'] as const
}

export function getPostVaultsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
    TError,
    InferRequestType<typeof client.vaults.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vaults.$post>) {
      return parseResponse(client.vaults.$post(args, options))
    },
  })
}

export function usePostVaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vaults.$post>,
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
  const mutationDefaults = getPostVaultsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVaultsVaultIdOrPrefixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>,
) {
  return ['vaults', '/vaults/:vault_id_or_prefix', toValue(args)] as const
}

export function getVaultsVaultIdOrPrefixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultIdOrPrefixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vault_id_or_prefix'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultsVaultIdOrPrefix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultsVaultIdOrPrefixQueryKey>
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
          Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultIdOrPrefixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultIdOrPrefixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vault_id_or_prefix'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVaultsVaultIdOrPrefixMutationKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'PUT'] as const
}

export function getPutVaultsVaultIdOrPrefixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVaultsVaultIdOrPrefixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>,
    ) {
      return parseResponse(client.vaults[':vault_id_or_prefix'].$put(args, options))
    },
  })
}

export function usePutVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>,
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
  const mutationDefaults = getPutVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVaultsVaultIdOrPrefixMutationKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'DELETE'] as const
}

export function getDeleteVaultsVaultIdOrPrefixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultsVaultIdOrPrefixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>,
    ) {
      return parseResponse(client.vaults[':vault_id_or_prefix'].$delete(args, options))
    },
  })
}

export function useDeleteVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>,
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
  const mutationDefaults = getDeleteVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
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

export function getPatchVaultsVaultIdOrPrefixMutationKey() {
  return ['vaults', '/vaults/:vault_id_or_prefix', 'PATCH'] as const
}

export function getPatchVaultsVaultIdOrPrefixMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVaultsVaultIdOrPrefixMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>,
    ) {
      return parseResponse(client.vaults[':vault_id_or_prefix'].$patch(args, options))
    },
  })
}

export function usePatchVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>,
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
  const mutationDefaults = getPatchVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
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

export function getEndpointsQueryKey() {
  return ['endpoints', '/endpoints'] as const
}

export function getEndpointsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEndpointsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          ReturnType<typeof getEndpointsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEndpointsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsEndpointMutationKey() {
  return [':endpoint', '/:endpoint', 'OPTIONS'] as const
}

export function getOptionsEndpointMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$options']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':endpoint']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsEndpointMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':endpoint']['$options']>) {
      return parseResponse(client[':endpoint'].$options(args, options))
    },
  })
}

export function useOptionsEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$options']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':endpoint']['$options']>,
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
  const mutationDefaults = getOptionsEndpointMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHeadEndpointMutationKey() {
  return [':endpoint', '/:endpoint', 'HEAD'] as const
}

export function getHeadEndpointMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$head']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':endpoint']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadEndpointMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':endpoint']['$head']>) {
      return parseResponse(client[':endpoint'].$head(args, options))
    },
  })
}

export function useHeadEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)[':endpoint']['$head']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':endpoint']['$head']>,
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
  const mutationDefaults = getHeadEndpointMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSchemasEntityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':entity']['$get']>>,
) {
  return ['schemas', '/schemas/:entity', toValue(args)] as const
}

export function getSchemasEntityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':entity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas[':entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':entity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
            >
          >,
          ReturnType<typeof getSchemasEntityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas[':entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSchemasEntityValidateMutationKey() {
  return ['schemas', '/schemas/:entity/validate', 'POST'] as const
}

export function getPostSchemasEntityValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schemas)[':entity']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemasEntityValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']>,
    ) {
      return parseResponse(client.schemas[':entity'].validate.$post(args, options))
    },
  })
}

export function usePostSchemasEntityValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas)[':entity']['validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']>,
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
  const mutationDefaults = getPostSchemasEntityValidateMutationOptions<TError, TOnMutateResult>(
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

export function getSchemasFiltersFilterNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>>,
) {
  return ['schemas', '/schemas/filters/:filter_name', toValue(args)] as const
}

export function getSchemasFiltersFilterNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasFiltersFilterNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.filters[':filter_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasFiltersFilterName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchemasFiltersFilterNameQueryKey>
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
          Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasFiltersFilterNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasFiltersFilterNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.filters[':filter_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemasPluginsPluginNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>,
) {
  return ['schemas', '/schemas/plugins/:plugin_name', toValue(args)] as const
}

export function getSchemasPluginsPluginNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasPluginsPluginNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.plugins[':plugin_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasPluginsPluginName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchemasPluginsPluginNameQueryKey>
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
          Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasPluginsPluginNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasPluginsPluginNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.plugins[':plugin_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSchemasPluginsValidateMutationKey() {
  return ['schemas', '/schemas/plugins/validate', 'POST'] as const
}

export function getPostSchemasPluginsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.plugins.validate.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSchemasPluginsValidateMutationKey(),
    async mutationFn() {
      return parseResponse(client.schemas.plugins.validate.$post(undefined, options))
    },
  })
}

export function usePostSchemasPluginsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schemas.plugins.validate.$post>>
              >
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
  const mutationDefaults = getPostSchemasPluginsValidateMutationOptions<TError, TOnMutateResult>(
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

export function getTimersQueryKey() {
  return ['timers', '/timers'] as const
}

export function getTimersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTimersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
          ReturnType<typeof getTimersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTimersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.timers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusDnsQueryKey() {
  return ['status', '/status/dns'] as const
}

export function getStatusDnsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusDnsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.dns.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusDns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
          >,
          ReturnType<typeof getStatusDnsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusDnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusDnsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.dns.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['$get']>>,
) {
  return ['tags', '/tags/:tags', toValue(args)] as const
}

export function getTagsTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDebugClusterControlPlanesNodesLogLevelLogLevelMutationKey() {
  return ['debug', '/debug/cluster/control-planes-nodes/log-level/:log_level', 'PUT'] as const
}

export function getPutDebugClusterControlPlanesNodesLogLevelLogLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDebugClusterControlPlanesNodesLogLevelLogLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
      >,
    ) {
      return parseResponse(
        client.debug.cluster['control-planes-nodes']['log-level'][':log_level'].$put(args, options),
      )
    },
  })
}

export function usePutDebugClusterControlPlanesNodesLogLevelLogLevel<
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
                    (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
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
  const mutationDefaults = getPutDebugClusterControlPlanesNodesLogLevelLogLevelMutationOptions<
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

export function getPutDebugClusterLogLevelLogLevelMutationKey() {
  return ['debug', '/debug/cluster/log-level/:log_level', 'PUT'] as const
}

export function getPutDebugClusterLogLevelLogLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDebugClusterLogLevelLogLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>,
    ) {
      return parseResponse(client.debug.cluster['log-level'][':log_level'].$put(args, options))
    },
  })
}

export function usePutDebugClusterLogLevelLogLevel<
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
                  ReturnType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>,
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
  const mutationDefaults = getPutDebugClusterLogLevelLogLevelMutationOptions<
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

export function getDebugNodeLogLevelQueryKey() {
  return ['debug', '/debug/node/log-level'] as const
}

export function getDebugNodeLogLevelQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDebugNodeLogLevelQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.debug.node['log-level'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDebugNodeLogLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDebugNodeLogLevelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDebugNodeLogLevelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDebugNodeLogLevelQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.debug.node['log-level'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDebugNodeLogLevelLogLevelMutationKey() {
  return ['debug', '/debug/node/log-level/:log_level', 'PUT'] as const
}

export function getPutDebugNodeLogLevelLogLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.debug.node)['log-level'][':log_level']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDebugNodeLogLevelLogLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']>,
    ) {
      return parseResponse(client.debug.node['log-level'][':log_level'].$put(args, options))
    },
  })
}

export function usePutDebugNodeLogLevelLogLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.debug.node)['log-level'][':log_level']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']>,
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
  const mutationDefaults = getPutDebugNodeLogLevelLogLevelMutationOptions<TError, TOnMutateResult>(
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

export function getSchemasVaultsVaultNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>>,
) {
  return ['schemas', '/schemas/vaults/:vault_name', toValue(args)] as const
}

export function getSchemasVaultsVaultNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasVaultsVaultNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.vaults[':vault_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasVaultsVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchemasVaultsVaultNameQueryKey>
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
          Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasVaultsVaultNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasVaultsVaultNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.vaults[':vault_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSchemasVaultsVaultNameMutationKey() {
  return ['schemas', '/schemas/vaults/:vault_name', 'POST'] as const
}

export function getPostSchemasVaultsVaultNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemasVaultsVaultNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']>,
    ) {
      return parseResponse(client.schemas.vaults[':vault_name'].$post(args, options))
    },
  })
}

export function usePostSchemasVaultsVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']>,
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
  const mutationDefaults = getPostSchemasVaultsVaultNameMutationOptions<TError, TOnMutateResult>(
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

export function getFilterChainsQueryKey() {
  return ['filter-chains', '/filter-chains'] as const
}

export function getFilterChainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFilterChainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['filter-chains'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFilterChains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
            >
          >,
          ReturnType<typeof getFilterChainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilterChainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFilterChainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['filter-chains'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFilterChainsMutationKey() {
  return ['filter-chains', '/filter-chains', 'POST'] as const
}

export function getPostFilterChainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['filter-chains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilterChainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['filter-chains']['$post']>) {
      return parseResponse(client['filter-chains'].$post(args, options))
    },
  })
}

export function usePostFilterChains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['filter-chains']['$post']>,
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
  const mutationDefaults = getPostFilterChainsMutationOptions<TError, TOnMutateResult>(
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

export function getRoutesRouteIdOrNameFilterChainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
  >,
) {
  return ['routes', '/routes/:route_id_or_name/filter-chains', toValue(args)] as const
}

export function getRoutesRouteIdOrNameFilterChainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesRouteIdOrNameFilterChainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoutesRouteIdOrNameFilterChains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
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
                  ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRoutesRouteIdOrNameFilterChainsQueryKey>
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
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesRouteIdOrNameFilterChainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesRouteIdOrNameFilterChainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':route_id_or_name']['filter-chains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoutesRouteIdOrNameFilterChainsMutationKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains', 'POST'] as const
}

export function getPostRoutesRouteIdOrNameFilterChainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutesRouteIdOrNameFilterChainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>,
    ) {
      return parseResponse(client.routes[':route_id_or_name']['filter-chains'].$post(args, options))
    },
  })
}

export function usePostRoutesRouteIdOrNameFilterChains<
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
                  ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>,
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
  const mutationDefaults = getPostRoutesRouteIdOrNameFilterChainsMutationOptions<
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

export function getPatchRoutesRouteIdOrNameFilterChainsMutationKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains', 'PATCH'] as const
}

export function getPatchRoutesRouteIdOrNameFilterChainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoutesRouteIdOrNameFilterChainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'].$patch(args, options),
      )
    },
  })
}

export function usePatchRoutesRouteIdOrNameFilterChains<
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
                  ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>,
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
  const mutationDefaults = getPatchRoutesRouteIdOrNameFilterChainsMutationOptions<
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

export function getServicesServiceIdOrNameFilterChainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
  >,
) {
  return ['services', '/services/:service_id_or_name/filter-chains', toValue(args)] as const
}

export function getServicesServiceIdOrNameFilterChainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesServiceIdOrNameFilterChainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':service_id_or_name']['filter-chains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesServiceIdOrNameFilterChains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
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
                    (typeof client.services)[':service_id_or_name']['filter-chains']['$get']
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
                    (typeof client.services)[':service_id_or_name']['filter-chains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServicesServiceIdOrNameFilterChainsQueryKey>
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
            ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesServiceIdOrNameFilterChainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesServiceIdOrNameFilterChainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':service_id_or_name']['filter-chains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServicesServiceIdOrNameFilterChainsMutationKey() {
  return ['services', '/services/:service_id_or_name/filter-chains', 'POST'] as const
}

export function getPostServicesServiceIdOrNameFilterChainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServicesServiceIdOrNameFilterChainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['filter-chains']['$post']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name']['filter-chains'].$post(args, options),
      )
    },
  })
}

export function usePostServicesServiceIdOrNameFilterChains<
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
                    (typeof client.services)[':service_id_or_name']['filter-chains']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['filter-chains']['$post']
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
  const mutationDefaults = getPostServicesServiceIdOrNameFilterChainsMutationOptions<
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

export function getFilterChainsFilterChainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>
  >,
) {
  return ['filter-chains', '/filter-chains/:filter_chain_id', toValue(args)] as const
}

export function getFilterChainsFilterChainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilterChainsFilterChainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['filter-chains'][':filter_chain_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilterChainsFilterChainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilterChainsFilterChainIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilterChainsFilterChainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilterChainsFilterChainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['filter-chains'][':filter_chain_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFilterChainsFilterChainIdMutationKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'PUT'] as const
}

export function getPutFilterChainsFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilterChainsFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>,
    ) {
      return parseResponse(client['filter-chains'][':filter_chain_id'].$put(args, options))
    },
  })
}

export function usePutFilterChainsFilterChainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>,
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
  const mutationDefaults = getPutFilterChainsFilterChainIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFilterChainsFilterChainIdMutationKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'DELETE'] as const
}

export function getDeleteFilterChainsFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilterChainsFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>,
    ) {
      return parseResponse(client['filter-chains'][':filter_chain_id'].$delete(args, options))
    },
  })
}

export function useDeleteFilterChainsFilterChainId<
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
                    ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>,
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
  const mutationDefaults = getDeleteFilterChainsFilterChainIdMutationOptions<
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

export function getPatchFilterChainsFilterChainIdMutationKey() {
  return ['filter-chains', '/filter-chains/:filter_chain_id', 'PATCH'] as const
}

export function getPatchFilterChainsFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilterChainsFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>,
    ) {
      return parseResponse(client['filter-chains'][':filter_chain_id'].$patch(args, options))
    },
  })
}

export function usePatchFilterChainsFilterChainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>,
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
  const mutationDefaults = getPatchFilterChainsFilterChainIdMutationOptions<
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

export function getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
    >
  >,
) {
  return [
    'routes',
    '/routes/:route_id_or_name/filter-chains/:filter_chain_id',
    toValue(args),
  ] as const
}

export function getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRoutesRouteIdOrNameFilterChainsFilterChainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
                    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
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
                    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey>
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
              (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRoutesRouteIdOrNameFilterChainsFilterChainIdMutationKey() {
  return ['routes', '/routes/:route_id_or_name/filter-chains/:filter_chain_id', 'PUT'] as const
}

export function getPutRoutesRouteIdOrNameFilterChainsFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRoutesRouteIdOrNameFilterChainsFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$put(args, options),
      )
    },
  })
}

export function usePutRoutesRouteIdOrNameFilterChainsFilterChainId<
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
                    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
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
  const mutationDefaults = getPutRoutesRouteIdOrNameFilterChainsFilterChainIdMutationOptions<
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

export function getDeleteRoutesRouteIdOrNameFilterChainIdMutationKey() {
  return ['routes', '/routes/:route_id_or_name/:filter_chain_id', 'DELETE'] as const
}

export function getDeleteRoutesRouteIdOrNameFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoutesRouteIdOrNameFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.routes[':route_id_or_name'][':filter_chain_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRoutesRouteIdOrNameFilterChainId<
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
                      (typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']
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
  const mutationDefaults = getDeleteRoutesRouteIdOrNameFilterChainIdMutationOptions<
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

export function getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdMutationKey() {
  return [
    'services',
    '/services/:service_id_or_name/filter-chains/:filter_chain_id',
    'DELETE',
  ] as const
}

export function getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.services[':service_id_or_name']['filter-chains'][':filter_chain_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteServicesServiceIdOrNameFilterChainsFilterChainId<
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
                      (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
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
  const mutationDefaults = getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdMutationOptions<
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

export function getClusteringDataPlanesQueryKey() {
  return ['clustering', '/clustering/data-planes'] as const
}

export function getClusteringDataPlanesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClusteringDataPlanesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clustering['data-planes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusteringDataPlanes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClusteringDataPlanesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusteringDataPlanesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClusteringDataPlanesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.clustering['data-planes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClusteringStatusQueryKey() {
  return ['clustering', '/clustering/status'] as const
}

export function getClusteringStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClusteringStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clustering.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusteringStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>
            >
          >,
          ReturnType<typeof getClusteringStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClusteringStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClusteringStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.clustering.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCacheKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':key']['$get']>>,
) {
  return ['cache', '/cache/:key', toValue(args)] as const
}

export function getCacheKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacheKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cache[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCacheKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getCacheKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacheKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cache[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCacheKeyMutationKey() {
  return ['cache', '/cache/:key', 'DELETE'] as const
}

export function getDeleteCacheKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cache)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCacheKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cache)[':key']['$delete']>) {
      return parseResponse(client.cache[':key'].$delete(args, options))
    },
  })
}

export function useDeleteCacheKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cache)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteCacheKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCacheMutationKey() {
  return ['cache', '/cache', 'DELETE'] as const
}

export function getDeleteCacheMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteCacheMutationKey(),
    async mutationFn() {
      return parseResponse(client.cache.$delete(undefined, options))
    },
  })
}

export function useDeleteCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$delete>>>>
            >
          | undefined,
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
  const mutationDefaults = getDeleteCacheMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    InferRequestType<typeof client.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$post>) {
      return parseResponse(client.config.$post(args, options))
    },
  })
}

export function usePostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.config.$post>,
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
  const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
