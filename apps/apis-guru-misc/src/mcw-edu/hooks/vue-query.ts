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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>
  >,
) {
  return ['agr', '/agr/affectedGenomicModels/:taxonId', toValue(args)] as const
}

export function getAgrAffectedGenomicModelsTaxonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrAffectedGenomicModelsTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr.affectedGenomicModels[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgrAffectedGenomicModelsTaxonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrAffectedGenomicModelsTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrAffectedGenomicModelsTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr.affectedGenomicModels[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgrAllelesTaxonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>>,
) {
  return ['agr', '/agr/alleles/:taxonId', toValue(args)] as const
}

export function getAgrAllelesTaxonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrAllelesTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr.alleles[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgrAllelesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgrAllelesTaxonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrAllelesTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrAllelesTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr.alleles[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgrExpressionTaxonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>>,
) {
  return ['agr', '/agr/expression/:taxonId', toValue(args)] as const
}

export function getAgrExpressionTaxonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrExpressionTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr.expression[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgrExpressionTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgrExpressionTaxonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrExpressionTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrExpressionTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr.expression[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgrPhenotypesTaxonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>,
) {
  return ['agr', '/agr/phenotypes/:taxonId', toValue(args)] as const
}

export function getAgrPhenotypesTaxonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrPhenotypesTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr.phenotypes[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgrPhenotypesTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgrPhenotypesTaxonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrPhenotypesTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrPhenotypesTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr.phenotypes[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgrVariantsTaxonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>>,
) {
  return ['agr', '/agr/variants/:taxonId', toValue(args)] as const
}

export function getAgrVariantsTaxonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrVariantsTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr.variants[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgrVariantsTaxonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgrVariantsTaxonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgrVariantsTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrVariantsTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr.variants[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgrTaxonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr)[':taxonId']['$get']>>,
) {
  return ['agr', '/agr/:taxonId', toValue(args)] as const
}

export function getAgrTaxonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr)[':taxonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgrTaxonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agr[':taxonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgrTaxonId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agr)[':taxonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
            >
          >,
          ReturnType<typeof getAgrTaxonIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgrTaxonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgrTaxonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agr[':taxonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>>,
) {
  return ['annotations', '/annotations/accId/:rgdId', toValue(args)] as const
}

export function getAnnotationsAccIdRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsAccIdRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.accId[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationsAccIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationsAccIdRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsAccIdRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.accId[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdIncludeChildrenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
  >,
) {
  return ['annotations', '/annotations/count/:accId/:includeChildren', toValue(args)] as const
}

export function getAnnotationsCountAccIdIncludeChildrenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsCountAccIdIncludeChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.count[':accId'][':includeChildren'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
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
                    (typeof client.annotations.count)[':accId'][':includeChildren']['$get']
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
                    (typeof client.annotations.count)[':accId'][':includeChildren']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationsCountAccIdIncludeChildrenQueryKey>
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
            ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdIncludeChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsCountAccIdIncludeChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.count[':accId'][':includeChildren'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
    >
  >,
) {
  return [
    'annotations',
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren',
    toValue(args),
  ] as const
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
                    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
                    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
              (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
    >
  >,
) {
  return [
    'annotations',
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren/:objectType',
    toValue(args),
  ] as const
}

export function getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][
          ':objectType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
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
                    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
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
                    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey>
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
              (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][
            ':objectType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsReferenceRefRgdIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>
  >,
) {
  return ['annotations', '/annotations/reference/:refRgdId', toValue(args)] as const
}

export function getAnnotationsReferenceRefRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsReferenceRefRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.reference[':refRgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationsReferenceRefRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsReferenceRefRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsReferenceRefRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.reference[':refRgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsRgdIdRgdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>,
) {
  return ['annotations', '/annotations/rgdId/:rgdId', toValue(args)] as const
}

export function getAnnotationsRgdIdRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsRgdIdRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.rgdId[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationsRgdIdRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationsRgdIdRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsRgdIdRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsRgdIdRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.rgdId[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
  >,
) {
  return ['annotations', '/annotations/rgdId/:rgdId/:ontologyPrefix', toValue(args)] as const
}

export function getAnnotationsRgdIdRgdIdOntologyPrefixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey>
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
            ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsRgdIdRgdIdOntologyPrefixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsAccIdRgdId2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>,
) {
  return ['annotations', '/annotations/:accId/:rgdId', toValue(args)] as const
}

export function getAnnotationsAccIdRgdId2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsAccIdRgdId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations[':accId'][':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationsAccIdRgdId2QueryKey>
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
          Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdRgdId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsAccIdRgdId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations[':accId'][':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
    >
  >,
) {
  return [
    'annotations',
    '/annotations/:accId/:speciesTypeKey/:includeChildren',
    toValue(args),
  ] as const
}

export function getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
                    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
                    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
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
              (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.enrichment.annotatedGenes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.enrichment.annotatedGenes.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.data.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.enrichment.data.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/affyId/:affyId/:speciesTypeKey', toValue(args)] as const
}

export function getGenesAffyIdAffyIdSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.affyId[':affyId'][':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesAffyIdAffyIdSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.affyId[':affyId'][':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/alias/:aliasSymbol/:speciesTypeKey', toValue(args)] as const
}

export function getGenesAliasAliasSymbolSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey>
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
            ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesAliasAliasSymbolSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesAlleleRgdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>>,
) {
  return ['genes', '/genes/allele/:rgdId', toValue(args)] as const
}

export function getGenesAlleleRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesAlleleRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.allele[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenesAlleleRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesAlleleRgdIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAlleleRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesAlleleRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.allele[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>>,
) {
  return ['genes', '/genes/annotation/:accId', toValue(args)] as const
}

export function getGenesAnnotationAccIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesAnnotationAccIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.annotation[':accId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenesAnnotationAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesAnnotationAccIdQueryKey>
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
          Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAnnotationAccIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesAnnotationAccIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.annotation[':accId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesAnnotationAccIdSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/annotation/:accId/:speciesTypeKey', toValue(args)] as const
}

export function getGenesAnnotationAccIdSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesAnnotationAccIdSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.annotation[':accId'][':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGenesAnnotationAccIdSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesAnnotationAccIdSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesAnnotationAccIdSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.annotation[':accId'][':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesKeywordKeywordSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/keyword/:keyword/:speciesTypeKey', toValue(args)] as const
}

export function getGenesKeywordKeywordSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesKeywordKeywordSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.keyword[':keyword'][':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGenesKeywordKeywordSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesKeywordKeywordSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesKeywordKeywordSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.keyword[':keyword'][':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesMapMapKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>>,
) {
  return ['genes', '/genes/map/:mapKey', toValue(args)] as const
}

export function getGenesMapMapKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesMapMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.map[':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenesMapMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesMapMapKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesMapMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesMapMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.map[':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesMappedChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['genes', '/genes/mapped/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getGenesMappedChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesMappedChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
                    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
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
                    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGenesMappedChrStartStopMapKeyQueryKey>
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
            ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesMappedChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesMappedChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.genes.orthologs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.genes.orthologs.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>>,
) {
  return ['genes', '/genes/orthologs/:rgdId', toValue(args)] as const
}

export function getGenesOrthologsRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesOrthologsRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.orthologs[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenesOrthologsRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesOrthologsRgdIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesOrthologsRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesOrthologsRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.orthologs[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesRegionChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['genes', '/genes/region/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getGenesRegionChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesRegionChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
                    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
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
                    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGenesRegionChrStartStopMapKeyQueryKey>
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
            ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesRegionChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesRegionChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesSpeciesSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/species/:speciesTypeKey', toValue(args)] as const
}

export function getGenesSpeciesSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesSpeciesSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes.species[':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesSpeciesSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesSpeciesSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesSpeciesSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes.species[':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['genes', '/genes/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getGenesChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGenesChrStartStopMapKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesRgdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes)[':rgdId']['$get']>>,
) {
  return ['genes', '/genes/:rgdId', toValue(args)] as const
}

export function getGenesRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenesRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genes)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
            >
          >,
          ReturnType<typeof getGenesRgdIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenesRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenesSymbolSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>
  >,
) {
  return ['genes', '/genes/:symbol/:speciesTypeKey', toValue(args)] as const
}

export function getGenesSymbolSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenesSymbolSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genes[':symbol'][':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenesSymbolSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenesSymbolSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenesSymbolSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genes[':symbol'][':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupGeneTypesQueryKey() {
  return ['lookup', '/lookup/geneTypes'] as const
}

export function getLookupGeneTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLookupGeneTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.geneTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLookupGeneTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>
            >
          >,
          ReturnType<typeof getLookupGeneTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLookupGeneTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLookupGeneTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.geneTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.lookup.id.map.EnsemblGene.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/EnsemblGene/:rgdId', toValue(args)] as const
}

export function getLookupIdMapEnsemblGeneRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapEnsemblGeneRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.EnsemblGene[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapEnsemblGeneRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblGeneRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapEnsemblGeneRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.EnsemblGene[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/EnsemblProtein/:rgdId', toValue(args)] as const
}

export function getLookupIdMapEnsemblProteinRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapEnsemblProteinRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.EnsemblProtein[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapEnsemblProteinRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblProteinRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapEnsemblProteinRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.EnsemblProtein[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/EnsemblTranscript/:rgdId', toValue(args)] as const
}

export function getLookupIdMapEnsemblTranscriptRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapEnsemblTranscriptRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>
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
                  ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLookupIdMapEnsemblTranscriptRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapEnsemblTranscriptRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapEnsemblTranscriptRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>,
) {
  return ['lookup', '/lookup/id/map/GTEx/:rgdId', toValue(args)] as const
}

export function getLookupIdMapGTExRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapGTExRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.GTEx[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapGTExRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGTExRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapGTExRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.GTEx[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/GenBankNucleotide/:rgdId', toValue(args)] as const
}

export function getLookupIdMapGenBankNucleotideRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapGenBankNucleotideRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>
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
                  ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLookupIdMapGenBankNucleotideRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGenBankNucleotideRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapGenBankNucleotideRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/GenBankProtein/:rgdId', toValue(args)] as const
}

export function getLookupIdMapGenBankProteinRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapGenBankProteinRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.GenBankProtein[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapGenBankProteinRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapGenBankProteinRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapGenBankProteinRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.GenBankProtein[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>,
) {
  return ['lookup', '/lookup/id/map/HGNC/:rgdId', toValue(args)] as const
}

export function getLookupIdMapHGNCRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapHGNCRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.HGNC[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapHGNCRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapHGNCRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapHGNCRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.HGNC[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>,
) {
  return ['lookup', '/lookup/id/map/MGI/:rgdId', toValue(args)] as const
}

export function getLookupIdMapMGIRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapMGIRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.MGI[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLookupIdMapMGIRgdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapMGIRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapMGIRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapMGIRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.MGI[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>
  >,
) {
  return ['lookup', '/lookup/id/map/NCBIGene/:rgdId', toValue(args)] as const
}

export function getLookupIdMapNCBIGeneRgdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapNCBIGeneRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.NCBIGene[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapNCBIGeneRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapNCBIGeneRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapNCBIGeneRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.NCBIGene[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>,
) {
  return ['lookup', '/lookup/id/map/UniProt/:rgdId', toValue(args)] as const
}

export function getLookupIdMapUniProtRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupIdMapUniProtRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.id.map.UniProt[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupIdMapUniProtRgdIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupIdMapUniProtRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupIdMapUniProtRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.id.map.UniProt[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupMapsSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>,
) {
  return ['lookup', '/lookup/maps/:speciesTypeKey', toValue(args)] as const
}

export function getLookupMapsSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupMapsSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.maps[':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupMapsSpeciesTypeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupMapsSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupMapsSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.maps[':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupSpeciesTypeKeysQueryKey() {
  return ['lookup', '/lookup/speciesTypeKeys'] as const
}

export function getLookupSpeciesTypeKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLookupSpeciesTypeKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.speciesTypeKeys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLookupSpeciesTypeKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
            >
          >,
          ReturnType<typeof getLookupSpeciesTypeKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSpeciesTypeKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLookupSpeciesTypeKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.speciesTypeKeys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupStandardUnitAccIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>>,
) {
  return ['lookup', '/lookup/standardUnit/:accId', toValue(args)] as const
}

export function getLookupStandardUnitAccIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupStandardUnitAccIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.standardUnit[':accId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupStandardUnitAccIdQueryKey>
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
          Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupStandardUnitAccIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupStandardUnitAccIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.standardUnit[':accId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapsChrChromosomeMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>
  >,
) {
  return ['maps', '/maps/chr/:chromosome/:mapKey', toValue(args)] as const
}

export function getMapsChrChromosomeMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapsChrChromosomeMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maps.chr[':chromosome'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapsChrChromosomeMapKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsChrChromosomeMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapsChrChromosomeMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maps.chr[':chromosome'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapsChrMapKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>>,
) {
  return ['maps', '/maps/chr/:mapKey', toValue(args)] as const
}

export function getMapsChrMapKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapsChrMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maps.chr[':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMapsChrMapKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
            >
          >,
          ReturnType<typeof getMapsChrMapKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsChrMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapsChrMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maps.chr[':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapsSpeciesTypeKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>>,
) {
  return ['maps', '/maps/:speciesTypeKey', toValue(args)] as const
}

export function getMapsSpeciesTypeKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapsSpeciesTypeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maps[':speciesTypeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMapsSpeciesTypeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapsSpeciesTypeKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapsSpeciesTypeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapsSpeciesTypeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maps[':speciesTypeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyOntAccIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>>,
) {
  return ['ontology', '/ontology/ont/:accId', toValue(args)] as const
}

export function getOntologyOntAccIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyOntAccIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.ont[':accId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyOntAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyOntAccIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyOntAccIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyOntAccIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.ont[':accId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermAccId1AccId2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>
  >,
) {
  return ['ontology', '/ontology/term/:accId1/:accId2', toValue(args)] as const
}

export function getOntologyTermAccId1AccId2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermAccId1AccId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':accId1'][':accId2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermAccId1AccId2QueryKey>
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
          Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermAccId1AccId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermAccId1AccId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':accId1'][':accId2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermAccIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':accId']['$get']>>,
) {
  return ['ontology', '/ontology/term/:accId', toValue(args)] as const
}

export function getOntologyTermAccIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':accId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermAccIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':accId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyTermAccId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':accId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermAccIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermAccIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermAccIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':accId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPathwaysDiagramsSearchSearchStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>
  >,
) {
  return ['pathways', '/pathways/diagrams/search/:searchString', toValue(args)] as const
}

export function getPathwaysDiagramsSearchSearchStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathwaysDiagramsSearchSearchStringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pathways.diagrams.search[':searchString'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>
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
                  ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPathwaysDiagramsSearchSearchStringQueryKey>
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
          Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathwaysDiagramsSearchSearchStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathwaysDiagramsSearchSearchStringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pathways.diagrams.search[':searchString'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPathwaysDiagramsForCategoryCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>
  >,
) {
  return ['pathways', '/pathways/diagramsForCategory/:category', toValue(args)] as const
}

export function getPathwaysDiagramsForCategoryCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathwaysDiagramsForCategoryCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pathways.diagramsForCategory[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>
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
                  ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPathwaysDiagramsForCategoryCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathwaysDiagramsForCategoryCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathwaysDiagramsForCategoryCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pathways.diagramsForCategory[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
    >
  >,
) {
  return [
    'phenotype',
    '/phenotype/phenominer/chart/:speciesTypeKey/:refRgdId/:termString',
    toValue(args),
  ] as const
}

export function getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
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
                    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
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
                    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey>
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
              (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
    >
  >,
) {
  return [
    'phenotype',
    '/phenotype/phenominer/chart/:speciesTypeKey/:termString',
    toValue(args),
  ] as const
}

export function getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
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
                    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
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
                    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey>
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
              (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhenotypePhenominerChartSpeciesTypeKeyTermStringQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQtlsMappedChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['qtls', '/qtls/mapped/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getQtlsMappedChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQtlsMappedChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
                    (typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
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
                    (typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getQtlsMappedChrStartStopMapKeyQueryKey>
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
            ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsMappedChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQtlsMappedChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQtlsChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['qtls', '/qtls/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getQtlsChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQtlsChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getQtlsChrStartStopMapKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQtlsChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQtlsRgdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.qtls)[':rgdId']['$get']>>,
) {
  return ['qtls', '/qtls/:rgdId', toValue(args)] as const
}

export function getQtlsRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.qtls)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQtlsRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.qtls[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQtlsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.qtls)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
            >
          >,
          ReturnType<typeof getQtlsRgdIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQtlsRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQtlsRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.qtls[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSslpsMappedChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['sslps', '/sslps/mapped/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getSslpsMappedChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSslpsMappedChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
                    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
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
                    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSslpsMappedChrStartStopMapKeyQueryKey>
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
            ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSslpsMappedChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSslpsMappedChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/activeObject/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return ['stats', '/stats/count/geneType/:speciesTypeKey/:dateYYYYMMDD', toValue(args)] as const
}

export function getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/objectStatus/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/objectWithRefSeq/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/objectWithReference/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/objectWithXdb/:speciesTypeKey/:objectKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/proteinInteraction/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/qtlInheritanceType/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/retiredObject/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return ['stats', '/stats/count/strainType/:speciesTypeKey/:dateYYYYMMDD', toValue(args)] as const
}

export function getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/count/withdrawnObject/:speciesTypeKey/:dateYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
              (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
  >,
) {
  return ['stats', '/stats/count/xdb/:speciesTypeKey/:dateYYYYMMDD', toValue(args)] as const
}

export function getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
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
                    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
                    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey>
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
            ReturnType<(typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/activeObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
              (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/geneType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
              (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/objectStatus/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
              (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithRefSeq/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithReference/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/objectWithXdb/:speciesTypeKey/:objectKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/proteinInteraction/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/qtlInheritanceType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/retiredObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
              (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/strainType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
              (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/withdrawnObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
          ':dateToYYYYMMDD'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
) {
  return [
    'stats',
    '/stats/diff/xdb/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD',
    toValue(args),
  ] as const
}

export function getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
                    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
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
              (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getStatsTermAccIdFilterAccIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>
  >,
) {
  return ['stats', '/stats/term/:accId/:filterAccId', toValue(args)] as const
}

export function getStatsTermAccIdFilterAccIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsTermAccIdFilterAccIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.term[':accId'][':filterAccId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatsTermAccIdFilterAccIdQueryKey>
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
          Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsTermAccIdFilterAccIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsTermAccIdFilterAccIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.term[':accId'][':filterAccId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStrainsAllQueryKey() {
  return ['strains', '/strains/all'] as const
}

export function getStrainsAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStrainsAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.strains.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStrainsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
          >,
          ReturnType<typeof getStrainsAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStrainsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStrainsAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.strains.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStrainsChrStartStopMapKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
) {
  return ['strains', '/strains/:chr/:start/:stop/:mapKey', toValue(args)] as const
}

export function getStrainsChrStartStopMapKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStrainsChrStartStopMapKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.strains[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStrainsChrStartStopMapKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStrainsChrStartStopMapKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStrainsChrStartStopMapKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.strains[':chr'][':start'][':stop'][':mapKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStrainsRgdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.strains)[':rgdId']['$get']>>,
) {
  return ['strains', '/strains/:rgdId', toValue(args)] as const
}

export function getStrainsRgdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.strains)[':rgdId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStrainsRgdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.strains[':rgdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStrainsRgdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.strains)[':rgdId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
            >
          >,
          ReturnType<typeof getStrainsRgdIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStrainsRgdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStrainsRgdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.strains[':rgdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
