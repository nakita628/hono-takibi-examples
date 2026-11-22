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

export function createAgrAffectedGenomicModelsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgrAffectedGenomicModelsTaxonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAgrAllelesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgrAllelesTaxonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAgrExpressionTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgrExpressionTaxonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAgrPhenotypesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAgrPhenotypesTaxonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAgrVariantsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgrVariantsTaxonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAgrTaxonId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgrTaxonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAnnotationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnnotationsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAnnotationsAccIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsAccIdRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsCountAccIdIncludeChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.annotations.count)[':accId'][':includeChildren']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsCountAccIdIncludeChildrenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren<
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
  args: () => InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType<
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
  args: () => InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsReferenceRefRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsReferenceRefRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsRgdIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsRgdIdRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsRgdIdRgdIdOntologyPrefix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsRgdIdRgdIdOntologyPrefixQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsAccIdRgdId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsAccIdRgdId2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnnotationsAccIdSpeciesTypeKeyIncludeChildren<
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
  args: () => InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostEnrichmentAnnotatedGenes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnrichmentAnnotatedGenesMutationOptions<
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

export function createPostEnrichmentData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnrichmentDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createGenesAffyIdAffyIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesAffyIdAffyIdSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesAliasAliasSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesAliasAliasSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesAlleleRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenesAlleleRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostGenesAnnotation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenesAnnotationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createGenesAnnotationAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesAnnotationAccIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesAnnotationAccIdSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesAnnotationAccIdSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesKeywordKeywordSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesKeywordKeywordSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesMapMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenesMapMapKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGenesMappedChrStartStopMapKey<
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
  args: () => InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesMappedChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostGenesOrthologs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenesOrthologsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createGenesOrthologsRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenesOrthologsRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGenesRegionChrStartStopMapKey<
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
  args: () => InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesRegionChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesSpeciesSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesSpeciesSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createGenesRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenesRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGenesSymbolSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenesSymbolSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createLookupGeneTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupGeneTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLookupIdMapEnsemblGene<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapEnsemblGeneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapEnsemblGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapEnsemblGeneRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapEnsemblProtein<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapEnsemblProteinMutationOptions<
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

export function createLookupIdMapEnsemblProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapEnsemblProteinRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapEnsemblTranscript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapEnsemblTranscriptMutationOptions<
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

export function createLookupIdMapEnsemblTranscriptRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapEnsemblTranscriptRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapGTEx<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapGTExMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapGTExRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapGTExRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapGenBankNucleotide<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapGenBankNucleotideMutationOptions<
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

export function createLookupIdMapGenBankNucleotideRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapGenBankNucleotideRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapGenBankProtein<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapGenBankProteinMutationOptions<
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

export function createLookupIdMapGenBankProteinRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapGenBankProteinRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapHGNC<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapHGNCMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapHGNCRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapHGNCRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapMGI<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapMGIMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapMGIRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupIdMapMGIRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLookupIdMapNCBIGene<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapNCBIGeneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapNCBIGeneRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapNCBIGeneRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostLookupIdMapUniProt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLookupIdMapUniProtMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLookupIdMapUniProtRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupIdMapUniProtRgdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createLookupMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupMapsSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createLookupSpeciesTypeKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupSpeciesTypeKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createLookupStandardUnitAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLookupStandardUnitAccIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMapsChrChromosomeMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMapsChrChromosomeMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMapsChrMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMapsChrMapKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMapsSpeciesTypeKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createOntologyOntAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntologyOntAccIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createOntologyTermAccId1AccId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntologyTermAccId1AccId2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createOntologyTermAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntologyTermAccIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPathwaysDiagramsSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPathwaysDiagramsSearchSearchStringQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPathwaysDiagramsForCategoryCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPathwaysDiagramsForCategoryCategoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString<
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
  args: () => InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPhenotypePhenominerChartSpeciesTypeKeyTermString<
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
  args: () => InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createQtlsMappedChrStartStopMapKey<
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
  args: () => InferRequestType<
    (typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getQtlsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createQtlsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getQtlsChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createQtlsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQtlsRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSslpsMappedChrStartStopMapKey<
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
  args: () => InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSslpsMappedChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsCountXdbSpeciesTypeKeyDateYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
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
  args: () => InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createStatsTermAccIdFilterAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStatsTermAccIdFilterAccIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStrainsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStrainsAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createStrainsChrStartStopMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStrainsChrStartStopMapKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createStrainsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStrainsRgdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
