import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgrKey() {
  return ['agr'] as const
}

export function getAnnotationsKey() {
  return ['annotations'] as const
}

export function getEnrichmentKey() {
  return ['enrichment'] as const
}

export function getGenesKey() {
  return ['genes'] as const
}

export function getLookupKey() {
  return ['lookup'] as const
}

export function getMapsKey() {
  return ['maps'] as const
}

export function getOntologyKey() {
  return ['ontology'] as const
}

export function getPathwaysKey() {
  return ['pathways'] as const
}

export function getPhenotypeKey() {
  return ['phenotype'] as const
}

export function getQtlsKey() {
  return ['qtls'] as const
}

export function getSslpsKey() {
  return ['sslps'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getStrainsKey() {
  return ['strains'] as const
}

export function getAgrAffectedGenomicModelsTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/affectedGenomicModels/:taxonId', args] as const
}

export function getAgrAffectedGenomicModelsTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrAffectedGenomicModelsTaxonIdQueryKey>
  >({
    queryKey: getAgrAffectedGenomicModelsTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr.affectedGenomicModels[':taxonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgrAffectedGenomicModelsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrAffectedGenomicModelsTaxonIdQueryKey>
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
      ...getAgrAffectedGenomicModelsTaxonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgrAffectedGenomicModelsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrAffectedGenomicModelsTaxonIdQueryKey>
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
      ...getAgrAffectedGenomicModelsTaxonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAgrAllelesTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/alleles/:taxonId', args] as const
}

export function getAgrAllelesTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrAllelesTaxonIdQueryKey>
  >({
    queryKey: getAgrAllelesTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr.alleles[':taxonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgrAllelesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrAllelesTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgrAllelesTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgrAllelesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrAllelesTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgrAllelesTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgrExpressionTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/expression/:taxonId', args] as const
}

export function getAgrExpressionTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrExpressionTaxonIdQueryKey>
  >({
    queryKey: getAgrExpressionTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr.expression[':taxonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgrExpressionTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrExpressionTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgrExpressionTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgrExpressionTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrExpressionTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgrExpressionTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgrPhenotypesTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/phenotypes/:taxonId', args] as const
}

export function getAgrPhenotypesTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrPhenotypesTaxonIdQueryKey>
  >({
    queryKey: getAgrPhenotypesTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr.phenotypes[':taxonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgrPhenotypesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrPhenotypesTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgrPhenotypesTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgrPhenotypesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrPhenotypesTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgrPhenotypesTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgrVariantsTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/variants/:taxonId', args] as const
}

export function getAgrVariantsTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrVariantsTaxonIdQueryKey>
  >({
    queryKey: getAgrVariantsTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr.variants[':taxonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgrVariantsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrVariantsTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgrVariantsTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgrVariantsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrVariantsTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgrVariantsTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgrTaxonIdQueryKey(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/:taxonId', args] as const
}

export function getAgrTaxonIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgrTaxonIdQueryKey>
  >({
    queryKey: getAgrTaxonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agr[':taxonId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgrTaxonId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgrTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgrTaxonId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgrTaxonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgrTaxonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAnnotationsIndexMutationKey() {
  return ['annotations', '/annotations/', 'POST'] as const
}

export function getPostAnnotationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.annotations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.annotations.index.$post>) {
      return parseResponse(client.annotations.index.$post(args, options))
    },
  })
}

export function usePostAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.annotations.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnnotationsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getAnnotationsAccIdRgdIdQueryKey(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/accId/:rgdId', args] as const
}

export function getAnnotationsAccIdRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdRgdIdQueryKey>
  >({
    queryKey: getAnnotationsAccIdRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.accId[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsAccIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdRgdIdQueryKey>
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
      ...getAnnotationsAccIdRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsAccIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdRgdIdQueryKey>
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
      ...getAnnotationsAccIdRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdIncludeChildrenQueryKey(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
) {
  return ['annotations', '/annotations/count/:accId/:includeChildren', args] as const
}

export function getAnnotationsCountAccIdIncludeChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdIncludeChildrenQueryKey>
  >({
    queryKey: getAnnotationsCountAccIdIncludeChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.count[':accId'][':includeChildren'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsCountAccIdIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdIncludeChildrenQueryKey>
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
      ...getAnnotationsCountAccIdIncludeChildrenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsCountAccIdIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdIncludeChildrenQueryKey>
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
      ...getAnnotationsCountAccIdIncludeChildrenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
) {
  return [
    'annotations',
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren',
    args,
  ] as const
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
  >({
    queryKey: getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
) {
  return [
    'annotations',
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren/:objectType',
    args,
  ] as const
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey>
  >({
    queryKey: getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][
          ':objectType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey>
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
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey>
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
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsReferenceRefRgdIdQueryKey(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
) {
  return ['annotations', '/annotations/reference/:refRgdId', args] as const
}

export function getAnnotationsReferenceRefRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsReferenceRefRgdIdQueryKey>
  >({
    queryKey: getAnnotationsReferenceRefRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.reference[':refRgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsReferenceRefRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsReferenceRefRgdIdQueryKey>
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
      ...getAnnotationsReferenceRefRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsReferenceRefRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsReferenceRefRgdIdQueryKey>
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
      ...getAnnotationsReferenceRefRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsRgdIdRgdIdQueryKey(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/rgdId/:rgdId', args] as const
}

export function getAnnotationsRgdIdRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsRgdIdRgdIdQueryKey>
  >({
    queryKey: getAnnotationsRgdIdRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.rgdId[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsRgdIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsRgdIdRgdIdQueryKey>
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
      ...getAnnotationsRgdIdRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsRgdIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsRgdIdRgdIdQueryKey>
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
      ...getAnnotationsRgdIdRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
) {
  return ['annotations', '/annotations/rgdId/:rgdId/:ontologyPrefix', args] as const
}

export function getAnnotationsRgdIdRgdIdOntologyPrefixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey>
  >({
    queryKey: getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsRgdIdRgdIdOntologyPrefix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey>
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
      ...getAnnotationsRgdIdRgdIdOntologyPrefixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsRgdIdRgdIdOntologyPrefix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey>
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
      ...getAnnotationsRgdIdRgdIdOntologyPrefixQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsAccIdRgdId2QueryKey(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/:accId/:rgdId', args] as const
}

export function getAnnotationsAccIdRgdId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdRgdId2QueryKey>
  >({
    queryKey: getAnnotationsAccIdRgdId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations[':accId'][':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsAccIdRgdId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdRgdId2QueryKey>
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
      ...getAnnotationsAccIdRgdId2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsAccIdRgdId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdRgdId2QueryKey>
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
      ...getAnnotationsAccIdRgdId2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
) {
  return ['annotations', '/annotations/:accId/:speciesTypeKey/:includeChildren', args] as const
}

export function getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
  >({
    queryKey: getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationsAccIdSpeciesTypeKeyIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
      ...getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationsAccIdSpeciesTypeKeyIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
      ...getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEnrichmentAnnotatedGenesMutationKey() {
  return ['enrichment', '/enrichment/annotatedGenes', 'POST'] as const
}

export function getPostEnrichmentAnnotatedGenesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.annotatedGenes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.enrichment.annotatedGenes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnrichmentAnnotatedGenesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enrichment.annotatedGenes.$post>) {
      return parseResponse(client.enrichment.annotatedGenes.$post(args, options))
    },
  })
}

export function usePostEnrichmentAnnotatedGenes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.annotatedGenes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.enrichment.annotatedGenes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnrichmentAnnotatedGenesMutationOptions<TError, TOnMutateResult>(
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

export function getPostEnrichmentDataMutationKey() {
  return ['enrichment', '/enrichment/data', 'POST'] as const
}

export function getPostEnrichmentDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.data.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.enrichment.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnrichmentDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enrichment.data.$post>) {
      return parseResponse(client.enrichment.data.$post(args, options))
    },
  })
}

export function usePostEnrichmentData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.data.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.enrichment.data.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnrichmentDataMutationOptions<TError, TOnMutateResult>(
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

export function getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/affyId/:affyId/:speciesTypeKey', args] as const
}

export function getGenesAffyIdAffyIdSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.affyId[':affyId'][':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesAffyIdAffyIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey>
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
      ...getGenesAffyIdAffyIdSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesAffyIdAffyIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey>
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
      ...getGenesAffyIdAffyIdSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/alias/:aliasSymbol/:speciesTypeKey', args] as const
}

export function getGenesAliasAliasSymbolSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesAliasAliasSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey>
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
      ...getGenesAliasAliasSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesAliasAliasSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey>
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
      ...getGenesAliasAliasSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesAlleleRgdIdQueryKey(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/allele/:rgdId', args] as const
}

export function getGenesAlleleRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAlleleRgdIdQueryKey>
  >({
    queryKey: getGenesAlleleRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.allele[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesAlleleRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAlleleRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenesAlleleRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenesAlleleRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAlleleRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenesAlleleRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGenesAnnotationMutationKey() {
  return ['genes', '/genes/annotation', 'POST'] as const
}

export function getPostGenesAnnotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genes.annotation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.genes.annotation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenesAnnotationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.genes.annotation.$post>) {
      return parseResponse(client.genes.annotation.$post(args, options))
    },
  })
}

export function usePostGenesAnnotation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.genes.annotation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.genes.annotation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenesAnnotationMutationOptions<TError, TOnMutateResult>(
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

export function getGenesAnnotationAccIdQueryKey(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
) {
  return ['genes', '/genes/annotation/:accId', args] as const
}

export function getGenesAnnotationAccIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAnnotationAccIdQueryKey>
  >({
    queryKey: getGenesAnnotationAccIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.annotation[':accId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesAnnotationAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAnnotationAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenesAnnotationAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenesAnnotationAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAnnotationAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenesAnnotationAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenesAnnotationAccIdSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/annotation/:accId/:speciesTypeKey', args] as const
}

export function getGenesAnnotationAccIdSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAnnotationAccIdSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesAnnotationAccIdSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.annotation[':accId'][':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesAnnotationAccIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAnnotationAccIdSpeciesTypeKeyQueryKey>
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
      ...getGenesAnnotationAccIdSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesAnnotationAccIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesAnnotationAccIdSpeciesTypeKeyQueryKey>
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
      ...getGenesAnnotationAccIdSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesKeywordKeywordSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/keyword/:keyword/:speciesTypeKey', args] as const
}

export function getGenesKeywordKeywordSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesKeywordKeywordSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesKeywordKeywordSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.keyword[':keyword'][':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesKeywordKeywordSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesKeywordKeywordSpeciesTypeKeyQueryKey>
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
      ...getGenesKeywordKeywordSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesKeywordKeywordSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesKeywordKeywordSpeciesTypeKeyQueryKey>
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
      ...getGenesKeywordKeywordSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesMapMapKeyQueryKey(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
) {
  return ['genes', '/genes/map/:mapKey', args] as const
}

export function getGenesMapMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesMapMapKeyQueryKey>
  >({
    queryKey: getGenesMapMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.map[':mapKey'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenesMapMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesMapMapKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenesMapMapKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenesMapMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesMapMapKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenesMapMapKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenesMappedChrStartStopMapKeyQueryKey(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['genes', '/genes/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function getGenesMappedChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesMappedChrStartStopMapKeyQueryKey>
  >({
    queryKey: getGenesMappedChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesMappedChrStartStopMapKeyQueryKey>
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
      ...getGenesMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesMappedChrStartStopMapKeyQueryKey>
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
      ...getGenesMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGenesOrthologsMutationKey() {
  return ['genes', '/genes/orthologs', 'POST'] as const
}

export function getPostGenesOrthologsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genes.orthologs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.genes.orthologs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenesOrthologsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.genes.orthologs.$post>) {
      return parseResponse(client.genes.orthologs.$post(args, options))
    },
  })
}

export function usePostGenesOrthologs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genes.orthologs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.genes.orthologs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenesOrthologsMutationOptions<TError, TOnMutateResult>(
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

export function getGenesOrthologsRgdIdQueryKey(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/orthologs/:rgdId', args] as const
}

export function getGenesOrthologsRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesOrthologsRgdIdQueryKey>
  >({
    queryKey: getGenesOrthologsRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.orthologs[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesOrthologsRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesOrthologsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenesOrthologsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenesOrthologsRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesOrthologsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenesOrthologsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenesRegionChrStartStopMapKeyQueryKey(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['genes', '/genes/region/:chr/:start/:stop/:mapKey', args] as const
}

export function getGenesRegionChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesRegionChrStartStopMapKeyQueryKey>
  >({
    queryKey: getGenesRegionChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesRegionChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesRegionChrStartStopMapKeyQueryKey>
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
      ...getGenesRegionChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesRegionChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesRegionChrStartStopMapKeyQueryKey>
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
      ...getGenesRegionChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesSpeciesSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/species/:speciesTypeKey', args] as const
}

export function getGenesSpeciesSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesSpeciesSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesSpeciesSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes.species[':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesSpeciesSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesSpeciesSpeciesTypeKeyQueryKey>
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
      ...getGenesSpeciesSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesSpeciesSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesSpeciesSpeciesTypeKeyQueryKey>
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
      ...getGenesSpeciesSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesChrStartStopMapKeyQueryKey(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['genes', '/genes/:chr/:start/:stop/:mapKey', args] as const
}

export function getGenesChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesChrStartStopMapKeyQueryKey>
  >({
    queryKey: getGenesChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesChrStartStopMapKeyQueryKey>
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
      ...getGenesChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesChrStartStopMapKeyQueryKey>
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
      ...getGenesChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGenesRgdIdQueryKey(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/:rgdId', args] as const
}

export function getGenesRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenesRgdIdQueryKey>
  >({
    queryKey: getGenesRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes[':rgdId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenesRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenesRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenesRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenesRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenesSymbolSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/:symbol/:speciesTypeKey', args] as const
}

export function getGenesSymbolSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesSymbolSpeciesTypeKeyQueryKey>
  >({
    queryKey: getGenesSymbolSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genes[':symbol'][':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGenesSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesSymbolSpeciesTypeKeyQueryKey>
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
      ...getGenesSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenesSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenesSymbolSpeciesTypeKeyQueryKey>
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
      ...getGenesSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLookupGeneTypesQueryKey() {
  return ['lookup', '/lookup/geneTypes'] as const
}

export function getLookupGeneTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLookupGeneTypesQueryKey>
  >({
    queryKey: getLookupGeneTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.geneTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLookupGeneTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLookupGeneTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLookupGeneTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLookupGeneTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLookupGeneTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLookupGeneTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLookupIdMapEnsemblGeneMutationKey() {
  return ['lookup', '/lookup/id/map/EnsemblGene', 'POST'] as const
}

export function getPostLookupIdMapEnsemblGeneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.EnsemblGene.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapEnsemblGeneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>) {
      return parseResponse(client.lookup.id.map.EnsemblGene.$post(args, options))
    },
  })
}

export function usePostLookupIdMapEnsemblGene<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.EnsemblGene.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapEnsemblGeneMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapEnsemblGeneRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblGene/:rgdId', args] as const
}

export function getLookupIdMapEnsemblGeneRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblGeneRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapEnsemblGeneRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.EnsemblGene[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapEnsemblGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblGeneRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblGeneRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapEnsemblGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblGeneRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblGeneRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapEnsemblProteinMutationKey() {
  return ['lookup', '/lookup/id/map/EnsemblProtein', 'POST'] as const
}

export function getPostLookupIdMapEnsemblProteinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.EnsemblProtein.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapEnsemblProteinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post>) {
      return parseResponse(client.lookup.id.map.EnsemblProtein.$post(args, options))
    },
  })
}

export function usePostLookupIdMapEnsemblProtein<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.lookup.id.map.EnsemblProtein.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapEnsemblProteinMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapEnsemblProteinRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblProtein/:rgdId', args] as const
}

export function getLookupIdMapEnsemblProteinRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblProteinRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapEnsemblProteinRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.EnsemblProtein[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapEnsemblProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblProteinRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblProteinRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapEnsemblProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblProteinRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblProteinRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapEnsemblTranscriptMutationKey() {
  return ['lookup', '/lookup/id/map/EnsemblTranscript', 'POST'] as const
}

export function getPostLookupIdMapEnsemblTranscriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lookup.id.map.EnsemblTranscript.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapEnsemblTranscriptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post>) {
      return parseResponse(client.lookup.id.map.EnsemblTranscript.$post(args, options))
    },
  })
}

export function usePostLookupIdMapEnsemblTranscript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.lookup.id.map.EnsemblTranscript.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapEnsemblTranscriptMutationOptions<
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

export function getLookupIdMapEnsemblTranscriptRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblTranscript/:rgdId', args] as const
}

export function getLookupIdMapEnsemblTranscriptRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblTranscriptRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapEnsemblTranscriptRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapEnsemblTranscriptRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblTranscriptRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblTranscriptRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapEnsemblTranscriptRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapEnsemblTranscriptRgdIdQueryKey>
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
      ...getLookupIdMapEnsemblTranscriptRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapGTExMutationKey() {
  return ['lookup', '/lookup/id/map/GTEx', 'POST'] as const
}

export function getPostLookupIdMapGTExMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.GTEx.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.GTEx.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapGTExMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.GTEx.$post>) {
      return parseResponse(client.lookup.id.map.GTEx.$post(args, options))
    },
  })
}

export function usePostLookupIdMapGTEx<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.GTEx.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.GTEx.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapGTExMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapGTExRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GTEx/:rgdId', args] as const
}

export function getLookupIdMapGTExRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGTExRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapGTExRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.GTEx[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapGTExRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGTExRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLookupIdMapGTExRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLookupIdMapGTExRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGTExRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLookupIdMapGTExRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLookupIdMapGenBankNucleotideMutationKey() {
  return ['lookup', '/lookup/id/map/GenBankNucleotide', 'POST'] as const
}

export function getPostLookupIdMapGenBankNucleotideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lookup.id.map.GenBankNucleotide.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapGenBankNucleotideMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post>) {
      return parseResponse(client.lookup.id.map.GenBankNucleotide.$post(args, options))
    },
  })
}

export function usePostLookupIdMapGenBankNucleotide<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.lookup.id.map.GenBankNucleotide.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapGenBankNucleotideMutationOptions<
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

export function getLookupIdMapGenBankNucleotideRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GenBankNucleotide/:rgdId', args] as const
}

export function getLookupIdMapGenBankNucleotideRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGenBankNucleotideRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapGenBankNucleotideRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapGenBankNucleotideRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGenBankNucleotideRgdIdQueryKey>
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
      ...getLookupIdMapGenBankNucleotideRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapGenBankNucleotideRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGenBankNucleotideRgdIdQueryKey>
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
      ...getLookupIdMapGenBankNucleotideRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapGenBankProteinMutationKey() {
  return ['lookup', '/lookup/id/map/GenBankProtein', 'POST'] as const
}

export function getPostLookupIdMapGenBankProteinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.GenBankProtein.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapGenBankProteinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post>) {
      return parseResponse(client.lookup.id.map.GenBankProtein.$post(args, options))
    },
  })
}

export function usePostLookupIdMapGenBankProtein<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.lookup.id.map.GenBankProtein.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapGenBankProteinMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapGenBankProteinRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GenBankProtein/:rgdId', args] as const
}

export function getLookupIdMapGenBankProteinRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGenBankProteinRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapGenBankProteinRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.GenBankProtein[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapGenBankProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGenBankProteinRgdIdQueryKey>
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
      ...getLookupIdMapGenBankProteinRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapGenBankProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapGenBankProteinRgdIdQueryKey>
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
      ...getLookupIdMapGenBankProteinRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapHGNCMutationKey() {
  return ['lookup', '/lookup/id/map/HGNC', 'POST'] as const
}

export function getPostLookupIdMapHGNCMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.HGNC.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.HGNC.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapHGNCMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.HGNC.$post>) {
      return parseResponse(client.lookup.id.map.HGNC.$post(args, options))
    },
  })
}

export function usePostLookupIdMapHGNC<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.HGNC.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.HGNC.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapHGNCMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapHGNCRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/HGNC/:rgdId', args] as const
}

export function getLookupIdMapHGNCRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapHGNCRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapHGNCRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.HGNC[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapHGNCRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapHGNCRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLookupIdMapHGNCRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLookupIdMapHGNCRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapHGNCRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLookupIdMapHGNCRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLookupIdMapMGIMutationKey() {
  return ['lookup', '/lookup/id/map/MGI', 'POST'] as const
}

export function getPostLookupIdMapMGIMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.MGI.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.MGI.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapMGIMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.MGI.$post>) {
      return parseResponse(client.lookup.id.map.MGI.$post(args, options))
    },
  })
}

export function usePostLookupIdMapMGI<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.MGI.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.MGI.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapMGIMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapMGIRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/MGI/:rgdId', args] as const
}

export function getLookupIdMapMGIRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapMGIRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapMGIRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.MGI[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapMGIRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapMGIRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLookupIdMapMGIRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLookupIdMapMGIRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapMGIRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLookupIdMapMGIRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLookupIdMapNCBIGeneMutationKey() {
  return ['lookup', '/lookup/id/map/NCBIGene', 'POST'] as const
}

export function getPostLookupIdMapNCBIGeneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.NCBIGene.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.NCBIGene.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapNCBIGeneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.NCBIGene.$post>) {
      return parseResponse(client.lookup.id.map.NCBIGene.$post(args, options))
    },
  })
}

export function usePostLookupIdMapNCBIGene<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.NCBIGene.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.NCBIGene.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapNCBIGeneMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapNCBIGeneRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/NCBIGene/:rgdId', args] as const
}

export function getLookupIdMapNCBIGeneRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapNCBIGeneRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapNCBIGeneRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.NCBIGene[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapNCBIGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapNCBIGeneRgdIdQueryKey>
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
      ...getLookupIdMapNCBIGeneRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapNCBIGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapNCBIGeneRgdIdQueryKey>
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
      ...getLookupIdMapNCBIGeneRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLookupIdMapUniProtMutationKey() {
  return ['lookup', '/lookup/id/map/UniProt', 'POST'] as const
}

export function getPostLookupIdMapUniProtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.UniProt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.lookup.id.map.UniProt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLookupIdMapUniProtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lookup.id.map.UniProt.$post>) {
      return parseResponse(client.lookup.id.map.UniProt.$post(args, options))
    },
  })
}

export function usePostLookupIdMapUniProt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.UniProt.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lookup.id.map.UniProt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLookupIdMapUniProtMutationOptions<TError, TOnMutateResult>(
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

export function getLookupIdMapUniProtRgdIdQueryKey(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/UniProt/:rgdId', args] as const
}

export function getLookupIdMapUniProtRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapUniProtRgdIdQueryKey>
  >({
    queryKey: getLookupIdMapUniProtRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.id.map.UniProt[':rgdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupIdMapUniProtRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapUniProtRgdIdQueryKey>
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
      ...getLookupIdMapUniProtRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupIdMapUniProtRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupIdMapUniProtRgdIdQueryKey>
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
      ...getLookupIdMapUniProtRgdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLookupMapsSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
) {
  return ['lookup', '/lookup/maps/:speciesTypeKey', args] as const
}

export function getLookupMapsSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupMapsSpeciesTypeKeyQueryKey>
  >({
    queryKey: getLookupMapsSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.maps[':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupMapsSpeciesTypeKeyQueryKey>
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
      ...getLookupMapsSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupMapsSpeciesTypeKeyQueryKey>
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
      ...getLookupMapsSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLookupSpeciesTypeKeysQueryKey() {
  return ['lookup', '/lookup/speciesTypeKeys'] as const
}

export function getLookupSpeciesTypeKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSpeciesTypeKeysQueryKey>
  >({
    queryKey: getLookupSpeciesTypeKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.speciesTypeKeys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupSpeciesTypeKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupSpeciesTypeKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLookupSpeciesTypeKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLookupSpeciesTypeKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupSpeciesTypeKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLookupSpeciesTypeKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLookupStandardUnitAccIdQueryKey(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
) {
  return ['lookup', '/lookup/standardUnit/:accId', args] as const
}

export function getLookupStandardUnitAccIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupStandardUnitAccIdQueryKey>
  >({
    queryKey: getLookupStandardUnitAccIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.standardUnit[':accId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLookupStandardUnitAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupStandardUnitAccIdQueryKey>
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
      ...getLookupStandardUnitAccIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLookupStandardUnitAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupStandardUnitAccIdQueryKey>
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
      ...getLookupStandardUnitAccIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapsChrChromosomeMapKeyQueryKey(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
) {
  return ['maps', '/maps/chr/:chromosome/:mapKey', args] as const
}

export function getMapsChrChromosomeMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsChrChromosomeMapKeyQueryKey>
  >({
    queryKey: getMapsChrChromosomeMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.chr[':chromosome'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMapsChrChromosomeMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsChrChromosomeMapKeyQueryKey>
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
      ...getMapsChrChromosomeMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapsChrChromosomeMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsChrChromosomeMapKeyQueryKey>
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
      ...getMapsChrChromosomeMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapsChrMapKeyQueryKey(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
) {
  return ['maps', '/maps/chr/:mapKey', args] as const
}

export function getMapsChrMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsChrMapKeyQueryKey>
  >({
    queryKey: getMapsChrMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps.chr[':mapKey'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMapsChrMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsChrMapKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMapsChrMapKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMapsChrMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsChrMapKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMapsChrMapKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMapsSpeciesTypeKeyQueryKey(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
) {
  return ['maps', '/maps/:speciesTypeKey', args] as const
}

export function getMapsSpeciesTypeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsSpeciesTypeKeyQueryKey>
  >({
    queryKey: getMapsSpeciesTypeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maps[':speciesTypeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsSpeciesTypeKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMapsSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapsSpeciesTypeKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMapsSpeciesTypeKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntologyOntAccIdQueryKey(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
) {
  return ['ontology', '/ontology/ont/:accId', args] as const
}

export function getOntologyOntAccIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyOntAccIdQueryKey>
  >({
    queryKey: getOntologyOntAccIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.ont[':accId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOntologyOntAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyOntAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntologyOntAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntologyOntAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyOntAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntologyOntAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntologyTermAccId1AccId2QueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
) {
  return ['ontology', '/ontology/term/:accId1/:accId2', args] as const
}

export function getOntologyTermAccId1AccId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermAccId1AccId2QueryKey>
  >({
    queryKey: getOntologyTermAccId1AccId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':accId1'][':accId2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOntologyTermAccId1AccId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermAccId1AccId2QueryKey>
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
      ...getOntologyTermAccId1AccId2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntologyTermAccId1AccId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermAccId1AccId2QueryKey>
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
      ...getOntologyTermAccId1AccId2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOntologyTermAccIdQueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
) {
  return ['ontology', '/ontology/term/:accId', args] as const
}

export function getOntologyTermAccIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermAccIdQueryKey>
  >({
    queryKey: getOntologyTermAccIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':accId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOntologyTermAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntologyTermAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntologyTermAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermAccIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntologyTermAccIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPathwaysDiagramsSearchSearchStringQueryKey(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
) {
  return ['pathways', '/pathways/diagrams/search/:searchString', args] as const
}

export function getPathwaysDiagramsSearchSearchStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathwaysDiagramsSearchSearchStringQueryKey>
  >({
    queryKey: getPathwaysDiagramsSearchSearchStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pathways.diagrams.search[':searchString'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePathwaysDiagramsSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPathwaysDiagramsSearchSearchStringQueryKey>
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
      ...getPathwaysDiagramsSearchSearchStringQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePathwaysDiagramsSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPathwaysDiagramsSearchSearchStringQueryKey>
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
      ...getPathwaysDiagramsSearchSearchStringQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPathwaysDiagramsForCategoryCategoryQueryKey(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
) {
  return ['pathways', '/pathways/diagramsForCategory/:category', args] as const
}

export function getPathwaysDiagramsForCategoryCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathwaysDiagramsForCategoryCategoryQueryKey>
  >({
    queryKey: getPathwaysDiagramsForCategoryCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pathways.diagramsForCategory[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePathwaysDiagramsForCategoryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPathwaysDiagramsForCategoryCategoryQueryKey>
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
      ...getPathwaysDiagramsForCategoryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePathwaysDiagramsForCategoryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPathwaysDiagramsForCategoryCategoryQueryKey>
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
      ...getPathwaysDiagramsForCategoryCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
) {
  return [
    'phenotype',
    '/phenotype/phenominer/chart/:speciesTypeKey/:refRgdId/:termString',
    args,
  ] as const
}

export function getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey>
  >({
    queryKey: getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function usePhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey>
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
      ...getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey>
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
      ...getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
) {
  return ['phenotype', '/phenotype/phenominer/chart/:speciesTypeKey/:termString', args] as const
}

export function getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey>
  >({
    queryKey: getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePhenotypePhenominerChartSpeciesTypeKeyTermString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey>
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
      ...getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePhenotypePhenominerChartSpeciesTypeKeyTermString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey>
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
      ...getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQtlsMappedChrStartStopMapKeyQueryKey(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['qtls', '/qtls/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function getQtlsMappedChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsMappedChrStartStopMapKeyQueryKey>
  >({
    queryKey: getQtlsMappedChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQtlsMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsMappedChrStartStopMapKeyQueryKey>
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
      ...getQtlsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQtlsMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsMappedChrStartStopMapKeyQueryKey>
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
      ...getQtlsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQtlsChrStartStopMapKeyQueryKey(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['qtls', '/qtls/:chr/:start/:stop/:mapKey', args] as const
}

export function getQtlsChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsChrStartStopMapKeyQueryKey>
  >({
    queryKey: getQtlsChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQtlsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsChrStartStopMapKeyQueryKey>
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
      ...getQtlsChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQtlsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsChrStartStopMapKeyQueryKey>
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
      ...getQtlsChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQtlsRgdIdQueryKey(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
) {
  return ['qtls', '/qtls/:rgdId', args] as const
}

export function getQtlsRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsRgdIdQueryKey>
  >({
    queryKey: getQtlsRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qtls[':rgdId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQtlsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQtlsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQtlsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQtlsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQtlsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSslpsMappedChrStartStopMapKeyQueryKey(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['sslps', '/sslps/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function getSslpsMappedChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslpsMappedChrStartStopMapKeyQueryKey>
  >({
    queryKey: getSslpsMappedChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSslpsMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslpsMappedChrStartStopMapKeyQueryKey>
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
      ...getSslpsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSslpsMappedChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSslpsMappedChrStartStopMapKeyQueryKey>
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
      ...getSslpsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/activeObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/geneType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectStatus/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectWithRefSeq/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectWithReference/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/count/objectWithXdb/:speciesTypeKey/:objectKey/:dateYYYYMMDD',
    args,
  ] as const
}

export function getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/proteinInteraction/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/qtlInheritanceType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/retiredObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/strainType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/withdrawnObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/xdb/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >({
    queryKey: getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsCountXdbSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsCountXdbSpeciesTypeKeyDateYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
      ...getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/activeObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/geneType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
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
      ...getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
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
      ...getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/objectStatus/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithRefSeq/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey:
      getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithReference/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey:
      getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithXdb/:speciesTypeKey/:objectKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey:
      getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/proteinInteraction/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey:
      getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/qtlInheritanceType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey:
      getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/retiredObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/strainType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/withdrawnObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
    >
  >({
    queryKey: getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
        >
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
      ...getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
) {
  return [
    'stats',
    '/stats/diff/xdb/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    args,
  ] as const
}

export function getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >({
    queryKey: getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
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
      ...getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
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
      ...getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStatsTermAccIdFilterAccIdQueryKey(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
) {
  return ['stats', '/stats/term/:accId/:filterAccId', args] as const
}

export function getStatsTermAccIdFilterAccIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsTermAccIdFilterAccIdQueryKey>
  >({
    queryKey: getStatsTermAccIdFilterAccIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.term[':accId'][':filterAccId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatsTermAccIdFilterAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsTermAccIdFilterAccIdQueryKey>
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
      ...getStatsTermAccIdFilterAccIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatsTermAccIdFilterAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatsTermAccIdFilterAccIdQueryKey>
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
      ...getStatsTermAccIdFilterAccIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStrainsAllQueryKey() {
  return ['strains', '/strains/all'] as const
}

export function getStrainsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStrainsAllQueryKey>
  >({
    queryKey: getStrainsAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.strains.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStrainsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStrainsAllQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStrainsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStrainsAllQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStrainsChrStartStopMapKeyQueryKey(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['strains', '/strains/:chr/:start/:stop/:mapKey', args] as const
}

export function getStrainsChrStartStopMapKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStrainsChrStartStopMapKeyQueryKey>
  >({
    queryKey: getStrainsChrStartStopMapKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.strains[':chr'][':start'][':stop'][':mapKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStrainsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsChrStartStopMapKeyQueryKey>
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
      ...getStrainsChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStrainsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsChrStartStopMapKeyQueryKey>
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
      ...getStrainsChrStartStopMapKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStrainsRgdIdQueryKey(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
) {
  return ['strains', '/strains/:rgdId', args] as const
}

export function getStrainsRgdIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStrainsRgdIdQueryKey>
  >({
    queryKey: getStrainsRgdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.strains[':rgdId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStrainsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStrainsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStrainsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStrainsRgdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStrainsRgdIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
