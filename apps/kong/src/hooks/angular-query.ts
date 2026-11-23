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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCaCertificatesQueryKey(
  args: InferRequestType<typeof client.ca_certificates.$get>,
) {
  return ['ca_certificates', '/ca_certificates', args] as const
}

export function getCaCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ca_certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCaCertificatesQueryKey>
  >({
    queryKey: getCaCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ca_certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCaCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ca_certificates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCaCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCaCertificatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCaCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ca_certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ca_certificates.$post>,
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
    const mutationDefaults = getPostCaCertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCaCertificatesCaCertificateIdQueryKey(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
) {
  return ['ca_certificates', '/ca_certificates/:ca_certificate_id', args] as const
}

export function getCaCertificatesCaCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCaCertificatesCaCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ca_certificates[':ca_certificate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCaCertificatesCaCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCaCertificatesCaCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCaCertificatesCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCaCertificatesCaCertificateIdMutationOptions<
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

export function injectDeleteCaCertificatesCaCertificateId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCaCertificatesCaCertificateIdMutationOptions<
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

export function injectPatchCaCertificatesCaCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCaCertificatesCaCertificateIdMutationOptions<
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

export function getCertificatesQueryKey(args: InferRequestType<typeof client.certificates.$get>) {
  return ['certificates', '/certificates', args] as const
}

export function getCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >({
    queryKey: getCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.certificates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCertificatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.certificates.$post>,
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
    const mutationDefaults = getPostCertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCertificatesCertificateIdQueryKey(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
) {
  return ['certificates', '/certificates/:certificate_id', args] as const
}

export function getCertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':certificate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCertificatesCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCertificatesCertificateIdMutationOptions<
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

export function injectDeleteCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCertificatesCertificateIdMutationOptions<
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

export function injectPatchCertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCertificatesCertificateIdMutationOptions<
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

export function getCertificatesCertificateNameOrIdSnisQueryKey(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
) {
  return ['certificates', '/certificates/:certificate_name_or_id/snis', args] as const
}

export function getCertificatesCertificateNameOrIdSnisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCertificatesCertificateNameOrIdSnisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':certificate_name_or_id'].snis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCertificatesCertificateNameOrIdSnis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.certificates)[':certificate_name_or_id']['snis']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCertificatesCertificateNameOrIdSnisQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCertificatesCertificateNameOrIdSnis<
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
                ReturnType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>,
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
    const mutationDefaults = getPostCertificatesCertificateNameOrIdSnisMutationOptions<
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

export function getCertificatesCertificateIdSnisSniNameOrIdQueryKey(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
) {
  return ['certificates', '/certificates/:certificate_id/snis/:sni_name_or_id', args] as const
}

export function getCertificatesCertificateIdSnisSniNameOrIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCertificatesCertificateIdSnisSniNameOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCertificatesCertificateIdSnisSniNameOrId<
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
  args: () => InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCertificatesCertificateIdSnisSniNameOrIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCertificatesCertificateIdSnisSniNameOrId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function injectDeleteCertificatesCertificateIdSnisSniNameOrId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function injectPatchCertificatesCertificateIdSnisSniNameOrId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCertificatesCertificateIdSnisSniNameOrIdMutationOptions<
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

export function getConsumersQueryKey(args: InferRequestType<typeof client.consumers.$get>) {
  return ['consumers', '/consumers', args] as const
}

export function getConsumersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.consumers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConsumersQueryKey>
  >({
    queryKey: getConsumersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.consumers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConsumersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.consumers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.consumers.$post>,
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
    const mutationDefaults = getPostConsumersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConsumersConsumerUsernameOrIdQueryKey(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
) {
  return ['consumers', '/consumers/:consumer_username_or_id', args] as const
}

export function getConsumersConsumerUsernameOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumersConsumerUsernameOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConsumersConsumerUsernameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.consumers)[':consumer_username_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConsumersConsumerUsernameOrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutConsumersConsumerUsernameOrId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConsumersConsumerUsernameOrIdMutationOptions<
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

export function injectDeleteConsumersConsumerUsernameOrId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConsumersConsumerUsernameOrIdMutationOptions<
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

export function injectPatchConsumersConsumerUsernameOrId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchConsumersConsumerUsernameOrIdMutationOptions<
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

export function getConsumersConsumerUsernameOrIdPluginsQueryKey(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
) {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins', args] as const
}

export function getConsumersConsumerUsernameOrIdPluginsQueryOptions<
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
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumersConsumerUsernameOrIdPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConsumersConsumerUsernameOrIdPlugins<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConsumersConsumerUsernameOrIdPluginsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostConsumersConsumerUsernameOrIdPlugins<
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
                  (typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>,
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
    const mutationDefaults = getPostConsumersConsumerUsernameOrIdPluginsMutationOptions<
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

export function getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['consumers', '/consumers/:consumer_username_or_id/plugins/:plugin_id', args] as const
}

export function getConsumersConsumerUsernameOrIdPluginsPluginIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConsumersConsumerUsernameOrIdPluginsPluginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConsumersConsumerUsernameOrIdPluginsPluginId<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getConsumersConsumerUsernameOrIdPluginsPluginIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutConsumersConsumerUsernameOrIdPluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function injectDeleteConsumersConsumerUsernameOrIdPluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function injectPatchConsumersConsumerUsernameOrIdPluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchConsumersConsumerUsernameOrIdPluginsPluginIdMutationOptions<
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

export function getKeySetsQueryKey(args: InferRequestType<(typeof client)['key-sets']['$get']>) {
  return ['key-sets', '/key-sets', args] as const
}

export function getKeySetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['key-sets']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeySetsQueryKey>
  >({
    queryKey: getKeySetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['key-sets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeySets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['key-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKeySetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeySetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeySets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['key-sets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['key-sets']['$post']>,
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
    const mutationDefaults = getPostKeySetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeySetsKeySetIdOrNameQueryKey(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
) {
  return ['key-sets', '/key-sets/:key-set_id_or_name', args] as const
}

export function getKeySetsKeySetIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKeySetsKeySetIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['key-sets'][':key-set_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKeySetsKeySetIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKeySetsKeySetIdOrNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchKeySetsKeySetIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchKeySetsKeySetIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysQueryKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function getKeysQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >({
    queryKey: getKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
        TError,
        InferRequestType<typeof client.keys.$post>,
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
    const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysKeyIdOrNameQueryKey(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
) {
  return ['keys', '/keys/:key_id_or_name', args] as const
}

export function getKeysKeyIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeysKeyIdOrNameQueryKey>
  >({
    queryKey: getKeysKeyIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys[':key_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKeysKeyIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.keys)[':key_id_or_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeysKeyIdOrNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysKeyIdOrNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchKeysKeyIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchKeysKeyIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPluginsQueryKey(args: InferRequestType<typeof client.plugins.$get>) {
  return ['plugins', '/plugins', args] as const
}

export function getPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >({
    queryKey: getPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plugins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPluginsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$post>>>>>,
        TError,
        InferRequestType<typeof client.plugins.$post>,
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
    const mutationDefaults = getPostPluginsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPluginsPluginIdQueryKey(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
) {
  return ['plugins', '/plugins/:plugin_id', args] as const
}

export function getPluginsPluginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsPluginIdQueryKey>
  >({
    queryKey: getPluginsPluginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins[':plugin_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPluginsPluginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsPluginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPluginsPluginIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutPluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':plugin_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>,
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
    const mutationDefaults = getPutPluginsPluginIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePluginsPluginIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPluginsPluginIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRoutesQueryKey(args: InferRequestType<typeof client.routes.$get>) {
  return ['routes', '/routes', args] as const
}

export function getRoutesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoutesQueryKey>
  >({
    queryKey: getRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoutes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.routes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoutesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routes.$post>>>>>,
        TError,
        InferRequestType<typeof client.routes.$post>,
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
    const mutationDefaults = getPostRoutesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRoutesRouteIdOrNameQueryKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name', args] as const
}

export function getRoutesRouteIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutesRouteIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':route_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoutesRouteIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoutesRouteIdOrNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchRoutesRouteIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoutesRouteIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRoutesRouteIdOrNamePluginsQueryKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name/plugins', args] as const
}

export function getRoutesRouteIdOrNamePluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutesRouteIdOrNamePluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoutesRouteIdOrNamePlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRoutesRouteIdOrNamePluginsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRoutesRouteIdOrNamePlugins<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRoutesRouteIdOrNamePluginsMutationOptions<
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

export function getRoutesRouteIdOrNamePluginsPluginIdQueryKey(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['routes', '/routes/:route_id_or_name/plugins/:plugin_id', args] as const
}

export function getRoutesRouteIdOrNamePluginsPluginIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutesRouteIdOrNamePluginsPluginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoutesRouteIdOrNamePluginsPluginId<
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
  args: () => InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRoutesRouteIdOrNamePluginsPluginIdQueryKey>
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
      ...getRoutesRouteIdOrNamePluginsPluginIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRoutesRouteIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function injectDeleteRoutesRouteIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function injectPatchRoutesRouteIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoutesRouteIdOrNamePluginsPluginIdMutationOptions<
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

export function getServicesQueryKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function getServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >({
    queryKey: getServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.services.$post>,
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
    const mutationDefaults = getPostServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServicesServiceIdOrNameQueryKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
) {
  return ['services', '/services/:service_id_or_name', args] as const
}

export function getServicesServiceIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutServicesServiceIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdOrNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteServicesServiceIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdOrNameMutationOptions<
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

export function injectPatchServicesServiceIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServicesServiceIdOrNameMutationOptions<
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

export function getServicesServiceIdOrNamePluginsQueryKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
) {
  return ['services', '/services/:service_id_or_nameplugins', args] as const
}

export function getServicesServiceIdOrNamePluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNamePluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_nameplugins'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrNamePlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_nameplugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNamePluginsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostServicesServiceIdOrNamePlugins<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServicesServiceIdOrNamePluginsMutationOptions<
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

export function getServicesServiceIdOrNamePluginsPluginIdQueryKey(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
) {
  return ['services', '/services/:service_id_or_name/plugins/:plugin_id', args] as const
}

export function getServicesServiceIdOrNamePluginsPluginIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNamePluginsPluginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_name'].plugins[':plugin_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrNamePluginsPluginId<
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
  args: () => InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNamePluginsPluginIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutServicesServiceIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function injectDeleteServicesServiceIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function injectPatchServicesServiceIdOrNamePluginsPluginId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServicesServiceIdOrNamePluginsPluginIdMutationOptions<
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

export function getServicesServiceIdOrNameRoutesQueryKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
) {
  return ['services', '/services/:service_id_or_name/routes', args] as const
}

export function getServicesServiceIdOrNameRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNameRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_name'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrNameRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNameRoutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostServicesServiceIdOrNameRoutes<
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
                ReturnType<(typeof client.services)[':service_id_or_name']['routes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>,
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
    const mutationDefaults = getPostServicesServiceIdOrNameRoutesMutationOptions<
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

export function getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
) {
  return ['services', '/services/:service_id_or_name/routes/:route_id_or_name', args] as const
}

export function getServicesServiceIdOrNameRoutesRouteIdOrNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNameRoutesRouteIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrNameRoutesRouteIdOrName<
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
  args: () => InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNameRoutesRouteIdOrNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutServicesServiceIdOrNameRoutesRouteIdOrName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function injectDeleteServicesServiceIdOrNameRoutesRouteIdOrName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function injectPatchServicesServiceIdOrNameRoutesRouteIdOrName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServicesServiceIdOrNameRoutesRouteIdOrNameMutationOptions<
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

export function getSnisQueryKey(args: InferRequestType<typeof client.snis.$get>) {
  return ['snis', '/snis', args] as const
}

export function getSnisQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.snis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnisQueryKey>
  >({
    queryKey: getSnisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSnis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.snis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSnisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSnis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snis.$post>>>>>,
        TError,
        InferRequestType<typeof client.snis.$post>,
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
    const mutationDefaults = getPostSnisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnisSniNameOrIdQueryKey(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
) {
  return ['snis', '/snis/:sni_name_or_id', args] as const
}

export function getSnisSniNameOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnisSniNameOrIdQueryKey>
  >({
    queryKey: getSnisSniNameOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snis[':sni_name_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnisSniNameOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.snis)[':sni_name_or_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnisSniNameOrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnisSniNameOrIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchSnisSniNameOrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSnisSniNameOrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUpstreamsQueryKey(args: InferRequestType<typeof client.upstreams.$get>) {
  return ['upstreams', '/upstreams', args] as const
}

export function getUpstreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.upstreams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUpstreamsQueryKey>
  >({
    queryKey: getUpstreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.upstreams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUpstreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.upstreams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUpstreamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUpstreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUpstreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upstreams.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.upstreams.$post>,
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
    const mutationDefaults = getPostUpstreamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUpstreamsUpstreamIdOrNameQueryKey(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name', args] as const
}

export function getUpstreamsUpstreamIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUpstreamsUpstreamIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUpstreamsUpstreamIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUpstreamsUpstreamIdOrNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUpstreamsUpstreamIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUpstreamsUpstreamIdOrNameMutationOptions<
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

export function injectDeleteUpstreamsUpstreamIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUpstreamsUpstreamIdOrNameMutationOptions<
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

export function injectPatchUpstreamsUpstreamIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUpstreamsUpstreamIdOrNameMutationOptions<
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

export function getUpstreamsUpstreamIdOrNameTargetsQueryKey(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
) {
  return ['upstreams', '/upstreams/:upstream_id_or_name/targets', args] as const
}

export function getUpstreamsUpstreamIdOrNameTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUpstreamsUpstreamIdOrNameTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUpstreamsUpstreamIdOrNameTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getUpstreamsUpstreamIdOrNameTargetsQueryKey>
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
      ...getUpstreamsUpstreamIdOrNameTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostUpstreamsUpstreamIdOrNameTargets<
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
                ReturnType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>,
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
    const mutationDefaults = getPostUpstreamsUpstreamIdOrNameTargetsMutationOptions<
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

export function getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
) {
  return [
    'upstreams',
    '/upstreams/:upstream_id_or_name/targets/:target_id_or_target',
    args,
  ] as const
}

export function getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryOptions<
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
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
  args: () => InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function injectDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function injectPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetMutationOptions<
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

export function getVaultsQueryKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function getVaultsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vaults.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >({
    queryKey: getVaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vaults.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVaultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVaults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$post>>>>>,
        TError,
        InferRequestType<typeof client.vaults.$post>,
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
    const mutationDefaults = getPostVaultsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVaultsVaultIdOrPrefixQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
) {
  return ['vaults', '/vaults/:vault_id_or_prefix', args] as const
}

export function getVaultsVaultIdOrPrefixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVaultsVaultIdOrPrefixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vault_id_or_prefix'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVaultsVaultIdOrPrefix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getVaultsVaultIdOrPrefixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVaultsVaultIdOrPrefix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVaultsVaultIdOrPrefixMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEndpointsQueryKey() {
  return ['endpoints', '/endpoints'] as const
}

export function getEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointsQueryKey>
  >({
    queryKey: getEndpointsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectOptionsEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getOptionsEndpointMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectHeadEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadEndpointMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemasEntityQueryKey(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
) {
  return ['schemas', '/schemas/:entity', args] as const
}

export function getSchemasEntityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasEntityQueryKey>
  >({
    queryKey: getSchemasEntityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas[':entity'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchemasEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schemas)[':entity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':entity']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasEntityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasEntityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSchemasEntityValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSchemasEntityValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemasFiltersFilterNameQueryKey(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
) {
  return ['schemas', '/schemas/filters/:filter_name', args] as const
}

export function getSchemasFiltersFilterNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchemasFiltersFilterNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.filters[':filter_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSchemasFiltersFilterName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.filters)[':filter_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSchemasFiltersFilterNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSchemasPluginsPluginNameQueryKey(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
) {
  return ['schemas', '/schemas/plugins/:plugin_name', args] as const
}

export function getSchemasPluginsPluginNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchemasPluginsPluginNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.plugins[':plugin_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSchemasPluginsPluginName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.plugins)[':plugin_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSchemasPluginsPluginNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSchemasPluginsValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schemas.plugins.validate.$post>>>
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSchemasPluginsValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimersQueryKey() {
  return ['timers', '/timers'] as const
}

export function getTimersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimersQueryKey>
  >({
    queryKey: getTimersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.timers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getStatusDnsQueryKey() {
  return ['status', '/status/dns'] as const
}

export function getStatusDnsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusDnsQueryKey>
  >({
    queryKey: getStatusDnsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.dns.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatusDns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.dns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusDnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusDnsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTagsTagsQueryKey(args: InferRequestType<(typeof client.tags)[':tags']['$get']>) {
  return ['tags', '/tags/:tags', args] as const
}

export function getTagsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':tags']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagsQueryKey>
  >({
    queryKey: getTagsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tags'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tags']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDebugClusterControlPlanesNodesLogLevelLogLevel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDebugClusterControlPlanesNodesLogLevelLogLevelMutationOptions<
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

export function injectPutDebugClusterLogLevelLogLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDebugClusterLogLevelLogLevelMutationOptions<
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

export function getDebugNodeLogLevelQueryKey() {
  return ['debug', '/debug/node/log-level'] as const
}

export function getDebugNodeLogLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDebugNodeLogLevelQueryKey>
  >({
    queryKey: getDebugNodeLogLevelQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.node['log-level'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDebugNodeLogLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>>
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
              Awaited<ReturnType<(typeof client.debug.node)['log-level']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugNodeLogLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugNodeLogLevelQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDebugNodeLogLevelLogLevel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDebugNodeLogLevelLogLevelMutationOptions<
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

export function getSchemasVaultsVaultNameQueryKey(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
) {
  return ['schemas', '/schemas/vaults/:vault_name', args] as const
}

export function getSchemasVaultsVaultNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSchemasVaultsVaultNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.vaults[':vault_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSchemasVaultsVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schemas.vaults)[':vault_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSchemasVaultsVaultNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSchemasVaultsVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSchemasVaultsVaultNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilterChainsQueryKey() {
  return ['filter-chains', '/filter-chains'] as const
}

export function getFilterChainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilterChainsQueryKey>
  >({
    queryKey: getFilterChainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['filter-chains'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFilterChains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilterChainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilterChainsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFilterChains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['filter-chains']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['filter-chains']['$post']>,
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
    const mutationDefaults = getPostFilterChainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRoutesRouteIdOrNameFilterChainsQueryKey(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
) {
  return ['routes', '/routes/:route_id_or_name/filter-chains', args] as const
}

export function getRoutesRouteIdOrNameFilterChainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutesRouteIdOrNameFilterChainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoutesRouteIdOrNameFilterChains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getRoutesRouteIdOrNameFilterChainsQueryKey>
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
      ...getRoutesRouteIdOrNameFilterChainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRoutesRouteIdOrNameFilterChains<
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
                ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>,
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
    const mutationDefaults = getPostRoutesRouteIdOrNameFilterChainsMutationOptions<
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

export function injectPatchRoutesRouteIdOrNameFilterChains<
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
                ReturnType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>,
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
    const mutationDefaults = getPatchRoutesRouteIdOrNameFilterChainsMutationOptions<
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

export function getServicesServiceIdOrNameFilterChainsQueryKey(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
) {
  return ['services', '/services/:service_id_or_name/filter-chains', args] as const
}

export function getServicesServiceIdOrNameFilterChainsQueryOptions<
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
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesServiceIdOrNameFilterChainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':service_id_or_name']['filter-chains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServicesServiceIdOrNameFilterChains<
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
  args: () => InferRequestType<
    (typeof client.services)[':service_id_or_name']['filter-chains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getServicesServiceIdOrNameFilterChainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostServicesServiceIdOrNameFilterChains<
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
                  (typeof client.services)[':service_id_or_name']['filter-chains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>,
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
    const mutationDefaults = getPostServicesServiceIdOrNameFilterChainsMutationOptions<
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

export function getFilterChainsFilterChainIdQueryKey(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
) {
  return ['filter-chains', '/filter-chains/:filter_chain_id', args] as const
}

export function getFilterChainsFilterChainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFilterChainsFilterChainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['filter-chains'][':filter_chain_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFilterChainsFilterChainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getFilterChainsFilterChainIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutFilterChainsFilterChainId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFilterChainsFilterChainIdMutationOptions<
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

export function injectDeleteFilterChainsFilterChainId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilterChainsFilterChainIdMutationOptions<
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

export function injectPatchFilterChainsFilterChainId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFilterChainsFilterChainIdMutationOptions<
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

export function getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
) {
  return ['routes', '/routes/:route_id_or_name/filter-chains/:filter_chain_id', args] as const
}

export function getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoutesRouteIdOrNameFilterChainsFilterChainId<
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
  args: () => InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getRoutesRouteIdOrNameFilterChainsFilterChainIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutRoutesRouteIdOrNameFilterChainsFilterChainId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRoutesRouteIdOrNameFilterChainsFilterChainIdMutationOptions<
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

export function injectDeleteRoutesRouteIdOrNameFilterChainId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRoutesRouteIdOrNameFilterChainIdMutationOptions<
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

export function injectDeleteServicesServiceIdOrNameFilterChainsFilterChainId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteServicesServiceIdOrNameFilterChainsFilterChainIdMutationOptions<
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

export function getClusteringDataPlanesQueryKey() {
  return ['clustering', '/clustering/data-planes'] as const
}

export function getClusteringDataPlanesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusteringDataPlanesQueryKey>
  >({
    queryKey: getClusteringDataPlanesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.clustering['data-planes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectClusteringDataPlanes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>>
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
              Awaited<ReturnType<(typeof client.clustering)['data-planes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusteringDataPlanesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusteringDataPlanesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getClusteringStatusQueryKey() {
  return ['clustering', '/clustering/status'] as const
}

export function getClusteringStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClusteringStatusQueryKey>
  >({
    queryKey: getClusteringStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.clustering.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectClusteringStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.clustering.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusteringStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusteringStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCacheKeyQueryKey(args: InferRequestType<(typeof client.cache)[':key']['$get']>) {
  return ['cache', '/cache/:key', args] as const
}

export function getCacheKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.cache)[':key']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheKeyQueryKey>
  >({
    queryKey: getCacheKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cache[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCacheKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cache)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCacheKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCacheKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCacheKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCacheKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$delete>>>>
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCacheMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
        TError,
        InferRequestType<typeof client.config.$post>,
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
    const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
