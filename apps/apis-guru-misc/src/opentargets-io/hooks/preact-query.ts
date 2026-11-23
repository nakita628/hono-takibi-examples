import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPlatformKey() {
  return ['platform'] as const
}

export function getPlatformDocsQueryKey() {
  return ['platform', '/platform/docs'] as const
}

export function getPlatformDocsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformDocsQueryKey>
  >({
    queryKey: getPlatformDocsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlatformDocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformDocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformDocsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformDocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformDocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformDocsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformDocsSwaggerUiQueryKey() {
  return ['platform', '/platform/docs/swagger-ui'] as const
}

export function getPlatformDocsSwaggerUiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformDocsSwaggerUiQueryKey>
  >({
    queryKey: getPlatformDocsSwaggerUiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.docs['swagger-ui'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformDocsSwaggerUi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformDocsSwaggerUiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformDocsSwaggerUiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformDocsSwaggerUi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformDocsSwaggerUiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformDocsSwaggerUiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformPrivateAutocompleteQueryKey(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
) {
  return ['platform', '/platform/private/autocomplete', args] as const
}

export function getPlatformPrivateAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateAutocompleteQueryKey>
  >({
    queryKey: getPlatformPrivateAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.autocomplete.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPrivateBesthitsearchMutationKey() {
  return ['platform', '/platform/private/besthitsearch', 'POST'] as const
}

export function getPostPlatformPrivateBesthitsearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.besthitsearch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.besthitsearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateBesthitsearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.besthitsearch.$post>) {
      return parseResponse(client.platform.private.besthitsearch.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateBesthitsearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.besthitsearch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.besthitsearch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateBesthitsearchMutationOptions<
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

export function getPostPlatformPrivateDiseaseMutationKey() {
  return ['platform', '/platform/private/disease', 'POST'] as const
}

export function getPostPlatformPrivateDiseaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.disease.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.disease.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateDiseaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.disease.$post>) {
      return parseResponse(client.platform.private.disease.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateDisease<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.disease.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.disease.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateDiseaseMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateDiseaseDiseaseQueryKey(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
) {
  return ['platform', '/platform/private/disease/:disease', args] as const
}

export function getPlatformPrivateDiseaseDiseaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateDiseaseDiseaseQueryKey>
  >({
    queryKey: getPlatformPrivateDiseaseDiseaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.disease[':disease'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateDiseaseDiseaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateDiseaseDiseaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateDiseaseDiseaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateDiseaseDiseaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPrivateDrugDRUGIDQueryKey(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
) {
  return ['platform', '/platform/private/drug/:DRUG_ID', args] as const
}

export function getPlatformPrivateDrugDRUGIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateDrugDRUGIDQueryKey>
  >({
    queryKey: getPlatformPrivateDrugDRUGIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.drug[':DRUG_ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateDrugDRUGID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateDrugDRUGIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateDrugDRUGIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateDrugDRUGID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateDrugDRUGIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateDrugDRUGIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPrivateEcoECOIDQueryKey(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
) {
  return ['platform', '/platform/private/eco/:ECO_ID', args] as const
}

export function getPlatformPrivateEcoECOIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateEcoECOIDQueryKey>
  >({
    queryKey: getPlatformPrivateEcoECOIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.eco[':ECO_ID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateEcoECOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateEcoECOIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateEcoECOIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateEcoECOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateEcoECOIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateEcoECOIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPrivateEnrichmentTargetsMutationKey() {
  return ['platform', '/platform/private/enrichment/targets', 'POST'] as const
}

export function getPostPlatformPrivateEnrichmentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.enrichment.targets.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateEnrichmentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
    ) {
      return parseResponse(client.platform.private.enrichment.targets.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateEnrichmentTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.enrichment.targets.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateEnrichmentTargetsMutationOptions<
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

export function getPlatformPrivateQuicksearchQueryKey(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
) {
  return ['platform', '/platform/private/quicksearch', args] as const
}

export function getPlatformPrivateQuicksearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateQuicksearchQueryKey>
  >({
    queryKey: getPlatformPrivateQuicksearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.quicksearch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateQuicksearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateQuicksearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateQuicksearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateQuicksearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateQuicksearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateQuicksearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPrivateRelationMutationKey() {
  return ['platform', '/platform/private/relation', 'POST'] as const
}

export function getPostPlatformPrivateRelationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.relation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.relation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateRelationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.relation.$post>) {
      return parseResponse(client.platform.private.relation.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateRelation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.relation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.relation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateRelationMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateRelationDiseaseDiseaseQueryKey(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
) {
  return ['platform', '/platform/private/relation/disease/:disease', args] as const
}

export function getPlatformPrivateRelationDiseaseDiseaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateRelationDiseaseDiseaseQueryKey>
  >({
    queryKey: getPlatformPrivateRelationDiseaseDiseaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.relation.disease[':disease'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateRelationDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateRelationDiseaseDiseaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateRelationDiseaseDiseaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateRelationDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateRelationDiseaseDiseaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateRelationDiseaseDiseaseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPrivateRelationTargetTargetQueryKey(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
) {
  return ['platform', '/platform/private/relation/target/:target', args] as const
}

export function getPlatformPrivateRelationTargetTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateRelationTargetTargetQueryKey>
  >({
    queryKey: getPlatformPrivateRelationTargetTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.relation.target[':target'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateRelationTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateRelationTargetTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateRelationTargetTargetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateRelationTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateRelationTargetTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateRelationTargetTargetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPrivateTargetMutationKey() {
  return ['platform', '/platform/private/target', 'POST'] as const
}

export function getPostPlatformPrivateTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.target.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.target.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateTargetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.target.$post>) {
      return parseResponse(client.platform.private.target.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.target.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.target.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateTargetMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateTargetExpressionQueryKey(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
) {
  return ['platform', '/platform/private/target/expression', args] as const
}

export function getPlatformPrivateTargetExpressionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateTargetExpressionQueryKey>
  >({
    queryKey: getPlatformPrivateTargetExpressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.target.expression.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateTargetExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateTargetExpressionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateTargetExpressionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateTargetExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateTargetExpressionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateTargetExpressionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPrivateTargetExpressionMutationKey() {
  return ['platform', '/platform/private/target/expression', 'POST'] as const
}

export function getPostPlatformPrivateTargetExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.target.expression.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.target.expression.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateTargetExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.private.target.expression.$post>,
    ) {
      return parseResponse(client.platform.private.target.expression.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateTargetExpression<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.private.target.expression.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.private.target.expression.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPrivateTargetExpressionMutationOptions<
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

export function getPlatformPrivateTargetTargetQueryKey(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
) {
  return ['platform', '/platform/private/target/:target', args] as const
}

export function getPlatformPrivateTargetTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateTargetTargetQueryKey>
  >({
    queryKey: getPlatformPrivateTargetTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.private.target[':target'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPrivateTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateTargetTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPrivateTargetTargetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPrivateTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPrivateTargetTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPrivateTargetTargetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPublicAssociationQueryKey(
  args: InferRequestType<typeof client.platform.public.association.$get>,
) {
  return ['platform', '/platform/public/association', args] as const
}

export function getPlatformPublicAssociationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicAssociationQueryKey>
  >({
    queryKey: getPlatformPublicAssociationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.association.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicAssociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.association.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicAssociationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPublicAssociationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPublicAssociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.association.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicAssociationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPublicAssociationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPublicAssociationFilterQueryKey(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
) {
  return ['platform', '/platform/public/association/filter', args] as const
}

export function getPlatformPublicAssociationFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicAssociationFilterQueryKey>
  >({
    queryKey: getPlatformPublicAssociationFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.association.filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicAssociationFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicAssociationFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPublicAssociationFilterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPublicAssociationFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicAssociationFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPublicAssociationFilterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPublicAssociationFilterMutationKey() {
  return ['platform', '/platform/public/association/filter', 'POST'] as const
}

export function getPostPlatformPublicAssociationFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.association.filter.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.association.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicAssociationFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.public.association.filter.$post>,
    ) {
      return parseResponse(client.platform.public.association.filter.$post(args, options))
    },
  })
}

export function usePostPlatformPublicAssociationFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.association.filter.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.public.association.filter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPublicAssociationFilterMutationOptions<
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

export function getPlatformPublicEvidenceQueryKey(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
) {
  return ['platform', '/platform/public/evidence', args] as const
}

export function getPlatformPublicEvidenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicEvidenceQueryKey>
  >({
    queryKey: getPlatformPublicEvidenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.evidence.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicEvidenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPublicEvidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPublicEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicEvidenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPublicEvidenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPublicEvidenceMutationKey() {
  return ['platform', '/platform/public/evidence', 'POST'] as const
}

export function getPostPlatformPublicEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.evidence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicEvidenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.public.evidence.$post>) {
      return parseResponse(client.platform.public.evidence.$post(args, options))
    },
  })
}

export function usePostPlatformPublicEvidence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.platform.public.evidence.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPublicEvidenceMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPublicEvidenceFilterQueryKey(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
) {
  return ['platform', '/platform/public/evidence/filter', args] as const
}

export function getPlatformPublicEvidenceFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicEvidenceFilterQueryKey>
  >({
    queryKey: getPlatformPublicEvidenceFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.evidence.filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicEvidenceFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicEvidenceFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPublicEvidenceFilterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPublicEvidenceFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicEvidenceFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPublicEvidenceFilterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPlatformPublicEvidenceFilterMutationKey() {
  return ['platform', '/platform/public/evidence/filter', 'POST'] as const
}

export function getPostPlatformPublicEvidenceFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.evidence.filter.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.evidence.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicEvidenceFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.public.evidence.filter.$post>) {
      return parseResponse(client.platform.public.evidence.filter.$post(args, options))
    },
  })
}

export function usePostPlatformPublicEvidenceFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.evidence.filter.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.platform.public.evidence.filter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlatformPublicEvidenceFilterMutationOptions<
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

export function getPlatformPublicSearchQueryKey(
  args: InferRequestType<typeof client.platform.public.search.$get>,
) {
  return ['platform', '/platform/public/search', args] as const
}

export function getPlatformPublicSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicSearchQueryKey>
  >({
    queryKey: getPlatformPublicSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformPublicSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformPublicSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformPublicSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformPublicUtilsMetricsQueryKey() {
  return ['platform', '/platform/public/utils/metrics'] as const
}

export function getPlatformPublicUtilsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsMetricsQueryKey>
  >({
    queryKey: getPlatformPublicUtilsMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.utils.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicUtilsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformPublicUtilsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformPublicUtilsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformPublicUtilsMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformPublicUtilsPingQueryKey() {
  return ['platform', '/platform/public/utils/ping'] as const
}

export function getPlatformPublicUtilsPingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsPingQueryKey>
  >({
    queryKey: getPlatformPublicUtilsPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.utils.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicUtilsPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformPublicUtilsPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformPublicUtilsPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformPublicUtilsPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformPublicUtilsStatsQueryKey() {
  return ['platform', '/platform/public/utils/stats'] as const
}

export function getPlatformPublicUtilsStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsStatsQueryKey>
  >({
    queryKey: getPlatformPublicUtilsStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.utils.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicUtilsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformPublicUtilsStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformPublicUtilsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformPublicUtilsStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformPublicUtilsTherapeuticareasQueryKey() {
  return ['platform', '/platform/public/utils/therapeuticareas'] as const
}

export function getPlatformPublicUtilsTherapeuticareasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsTherapeuticareasQueryKey>
  >({
    queryKey: getPlatformPublicUtilsTherapeuticareasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.utils.therapeuticareas.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicUtilsTherapeuticareas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsTherapeuticareasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPlatformPublicUtilsTherapeuticareasQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePlatformPublicUtilsTherapeuticareas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsTherapeuticareasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPlatformPublicUtilsTherapeuticareasQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsVersionQueryKey() {
  return ['platform', '/platform/public/utils/version'] as const
}

export function getPlatformPublicUtilsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsVersionQueryKey>
  >({
    queryKey: getPlatformPublicUtilsVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.public.utils.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlatformPublicUtilsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformPublicUtilsVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformPublicUtilsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformPublicUtilsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformPublicUtilsVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPlatformSwaggerQueryKey() {
  return ['platform', '/platform/swagger'] as const
}

export function getPlatformSwaggerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformSwaggerQueryKey>
  >({
    queryKey: getPlatformSwaggerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.swagger.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlatformSwagger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformSwaggerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlatformSwaggerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlatformSwagger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlatformSwaggerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlatformSwaggerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
