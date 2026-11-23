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

export function getAssociationKey() {
  return ['association'] as const
}

export function getBioentityKey() {
  return ['bioentity'] as const
}

export function getBioentitysetKey() {
  return ['bioentityset'] as const
}

export function getCamKey() {
  return ['cam'] as const
}

export function getEvidenceKey() {
  return ['evidence'] as const
}

export function getGenomeKey() {
  return ['genome'] as const
}

export function getGraphKey() {
  return ['graph'] as const
}

export function getIdentifierKey() {
  return ['identifier'] as const
}

export function getIndividualKey() {
  return ['individual'] as const
}

export function getMartKey() {
  return ['mart'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getMmeKey() {
  return ['mme'] as const
}

export function getNlpKey() {
  return ['nlp'] as const
}

export function getOntolKey() {
  return ['ontol'] as const
}

export function getOntologyKey() {
  return ['ontology'] as const
}

export function getOwlKey() {
  return ['owl'] as const
}

export function getPairKey() {
  return ['pair'] as const
}

export function getRelationKey() {
  return ['relation'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSimKey() {
  return ['sim'] as const
}

export function getVariationKey() {
  return ['variation'] as const
}

export function getAssociationBetweenSubjectObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>
  >,
) {
  return ['association', '/association/between/:subject/:object', toValue(args)] as const
}

export function getAssociationBetweenSubjectObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationBetweenSubjectObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.between[':subject'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationBetweenSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>
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
                  ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssociationBetweenSubjectObjectQueryKey>
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
          Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationBetweenSubjectObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationBetweenSubjectObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.between[':subject'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationFindSubjectCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.find)[':subject_category']['$get']>
  >,
) {
  return ['association', '/association/find/:subject_category', toValue(args)] as const
}

export function getAssociationFindSubjectCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.find)[':subject_category']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationFindSubjectCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.find[':subject_category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationFindSubjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.find)[':subject_category']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationFindSubjectCategoryQueryKey>
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
          Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationFindSubjectCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationFindSubjectCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.find[':subject_category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationFindSubjectCategoryObjectCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.association.find)[':subject_category'][':object_category']['$get']
    >
  >,
) {
  return [
    'association',
    '/association/find/:subject_category/:object_category',
    toValue(args),
  ] as const
}

export function getAssociationFindSubjectCategoryObjectCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.association.find)[':subject_category'][':object_category']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationFindSubjectCategoryObjectCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.find[':subject_category'][':object_category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationFindSubjectCategoryObjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.association.find)[':subject_category'][':object_category']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.association.find)[':subject_category'][':object_category']['$get']
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
                    (typeof client.association.find)[':subject_category'][':object_category']['$get']
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
                    (typeof client.association.find)[':subject_category'][':object_category']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssociationFindSubjectCategoryObjectCategoryQueryKey>
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
              (typeof client.association.find)[':subject_category'][':object_category']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationFindSubjectCategoryObjectCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationFindSubjectCategoryObjectCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.find[':subject_category'][':object_category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationFromSubjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.from)[':subject']['$get']>>,
) {
  return ['association', '/association/from/:subject', toValue(args)] as const
}

export function getAssociationFromSubjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.from)[':subject']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationFromSubjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.from[':subject'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationFromSubject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.from)[':subject']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationFromSubjectQueryKey>
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
          Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationFromSubjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationFromSubjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.from[':subject'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationToObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.to)[':object']['$get']>>,
) {
  return ['association', '/association/to/:object', toValue(args)] as const
}

export function getAssociationToObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.to)[':object']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationToObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.to[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationToObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association.to)[':object']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationToObjectQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationToObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationToObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.to[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationTypeAssociationTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.type)[':association_type']['$get']>
  >,
) {
  return ['association', '/association/type/:association_type', toValue(args)] as const
}

export function getAssociationTypeAssociationTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.type)[':association_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationTypeAssociationTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association.type[':association_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationTypeAssociationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.association.type)[':association_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationTypeAssociationTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationTypeAssociationTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationTypeAssociationTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association.type[':association_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association)[':id']['$get']>>,
) {
  return ['association', '/association/:id', toValue(args)] as const
}

export function getAssociationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.association[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.association)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAssociationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.association[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityAnatomyIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes', toValue(args)] as const
}

export function getBioentityAnatomyIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityAnatomyIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.anatomy[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityAnatomyIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityAnatomyIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityAnatomyIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityAnatomyIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.anatomy[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityAnatomyIdGenesTaxidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes/:taxid', toValue(args)] as const
}

export function getBioentityAnatomyIdGenesTaxidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityAnatomyIdGenesTaxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.anatomy[':id'].genes[':taxid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityAnatomyIdGenesTaxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>
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
                  ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityAnatomyIdGenesTaxidQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityAnatomyIdGenesTaxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityAnatomyIdGenesTaxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.anatomy[':id'].genes[':taxid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityCaseIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/case/:id/diseases', toValue(args)] as const
}

export function getBioentityCaseIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityCaseIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.case[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityCaseIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityCaseIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityCaseIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityCaseIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.case[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityCaseIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/case/:id/genotypes', toValue(args)] as const
}

export function getBioentityCaseIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityCaseIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.case[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityCaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityCaseIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityCaseIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityCaseIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.case[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityCaseIdModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>>,
) {
  return ['bioentity', '/bioentity/case/:id/models', toValue(args)] as const
}

export function getBioentityCaseIdModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityCaseIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.case[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityCaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityCaseIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityCaseIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityCaseIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.case[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityCaseIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/case/:id/phenotypes', toValue(args)] as const
}

export function getBioentityCaseIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityCaseIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.case[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityCaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityCaseIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityCaseIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityCaseIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.case[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityCaseIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/case/:id/variants', toValue(args)] as const
}

export function getBioentityCaseIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityCaseIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.case[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityCaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityCaseIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityCaseIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityCaseIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.case[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/cases', toValue(args)] as const
}

export function getBioentityDiseaseIdCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/genes', toValue(args)] as const
}

export function getBioentityDiseaseIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/genotypes', toValue(args)] as const
}

export function getBioentityDiseaseIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/models', toValue(args)] as const
}

export function getBioentityDiseaseIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdModelsTaxonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/models/:taxon', toValue(args)] as const
}

export function getBioentityDiseaseIdModelsTaxonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdModelsTaxonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].models[':taxon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdModelsTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
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
                  ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdModelsTaxonQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdModelsTaxonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdModelsTaxonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].models[':taxon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPathwaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/pathways', toValue(args)] as const
}

export function getBioentityDiseaseIdPathwaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdPathwaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].pathways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdPathwaysQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdPathwaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdPathwaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].pathways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/phenotypes', toValue(args)] as const
}

export function getBioentityDiseaseIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/publications', toValue(args)] as const
}

export function getBioentityDiseaseIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>
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
                  ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdTreatmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/treatment', toValue(args)] as const
}

export function getBioentityDiseaseIdTreatmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdTreatmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].treatment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdTreatment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdTreatmentQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdTreatmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdTreatmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].treatment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/disease/:id/variants', toValue(args)] as const
}

export function getBioentityDiseaseIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityDiseaseIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.disease[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityDiseaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityDiseaseIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityDiseaseIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityDiseaseIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.disease[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityFunctionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.function)[':id']['$get']>>,
) {
  return ['bioentity', '/bioentity/function/:id', toValue(args)] as const
}

export function getBioentityFunctionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.function)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityFunctionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.function[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.function)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityFunctionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityFunctionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityFunctionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.function[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityFunctionIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/function/:id/genes', toValue(args)] as const
}

export function getBioentityFunctionIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityFunctionIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.function[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityFunctionIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityFunctionIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityFunctionIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityFunctionIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.function[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityFunctionIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/function/:id/publications', toValue(args)] as const
}

export function getBioentityFunctionIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityFunctionIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.function[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityFunctionIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>
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
                  ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityFunctionIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityFunctionIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityFunctionIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.function[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityFunctionIdTaxonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/function/:id/taxons', toValue(args)] as const
}

export function getBioentityFunctionIdTaxonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityFunctionIdTaxonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.function[':id'].taxons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityFunctionIdTaxons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityFunctionIdTaxonsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityFunctionIdTaxonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityFunctionIdTaxonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.function[':id'].taxons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdAnatomyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/anatomy', toValue(args)] as const
}

export function getBioentityGeneIdAnatomyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdAnatomyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].anatomy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdAnatomyQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdAnatomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdAnatomyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].anatomy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>,
) {
  return ['bioentity', '/bioentity/gene/:id/cases', toValue(args)] as const
}

export function getBioentityGeneIdCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/diseases', toValue(args)] as const
}

export function getBioentityGeneIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdExpressionAnatomyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/expression/anatomy', toValue(args)] as const
}

export function getBioentityGeneIdExpressionAnatomyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdExpressionAnatomyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].expression.anatomy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdExpressionAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
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
                  ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdExpressionAnatomyQueryKey>
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
            ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdExpressionAnatomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdExpressionAnatomyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].expression.anatomy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdFunctionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/function', toValue(args)] as const
}

export function getBioentityGeneIdFunctionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdFunctionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].function.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdFunctionQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdFunctionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdFunctionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].function.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/genotypes', toValue(args)] as const
}

export function getBioentityGeneIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdHomologsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/homologs', toValue(args)] as const
}

export function getBioentityGeneIdHomologsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdHomologsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].homologs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdHomologs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdHomologsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdHomologsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdHomologsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].homologs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdInteractionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/interactions', toValue(args)] as const
}

export function getBioentityGeneIdInteractionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdInteractionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].interactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdInteractions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdInteractionsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdInteractionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdInteractionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].interactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>>,
) {
  return ['bioentity', '/bioentity/gene/:id/models', toValue(args)] as const
}

export function getBioentityGeneIdModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdOrthologDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/diseases', toValue(args)] as const
}

export function getBioentityGeneIdOrthologDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdOrthologDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].ortholog.diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdOrthologDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
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
                  ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdOrthologDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdOrthologDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdOrthologDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].ortholog.diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdOrthologPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/phenotypes', toValue(args)] as const
}

export function getBioentityGeneIdOrthologPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdOrthologPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].ortholog.phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdOrthologPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
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
                    (typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']
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
                    (typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdOrthologPhenotypesQueryKey>
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
            ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdOrthologPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdOrthologPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].ortholog.phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdPathwaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/pathways', toValue(args)] as const
}

export function getBioentityGeneIdPathwaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdPathwaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].pathways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdPathwaysQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdPathwaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdPathwaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].pathways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/phenotypes', toValue(args)] as const
}

export function getBioentityGeneIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/publications', toValue(args)] as const
}

export function getBioentityGeneIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGeneIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/gene/:id/variants', toValue(args)] as const
}

export function getBioentityGeneIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGeneIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.gene[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGeneIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGeneIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGeneIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGeneIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.gene[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/cases', toValue(args)] as const
}

export function getBioentityGenotypeIdCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/diseases', toValue(args)] as const
}

export function getBioentityGenotypeIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/genes', toValue(args)] as const
}

export function getBioentityGenotypeIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/genotypes', toValue(args)] as const
}

export function getBioentityGenotypeIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/models', toValue(args)] as const
}

export function getBioentityGenotypeIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/phenotypes', toValue(args)] as const
}

export function getBioentityGenotypeIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/publications', toValue(args)] as const
}

export function getBioentityGenotypeIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>
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
                  ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/genotype/:id/variants', toValue(args)] as const
}

export function getBioentityGenotypeIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGenotypeIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.genotype[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGenotypeIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGenotypeIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGenotypeIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.genotype[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityGotermIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/goterm/:id/genes', toValue(args)] as const
}

export function getBioentityGotermIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityGotermIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.goterm[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityGotermIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityGotermIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityGotermIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityGotermIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.goterm[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>>,
) {
  return ['bioentity', '/bioentity/model/:id/cases', toValue(args)] as const
}

export function getBioentityModelIdCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/model/:id/diseases', toValue(args)] as const
}

export function getBioentityModelIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdGenesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>>,
) {
  return ['bioentity', '/bioentity/model/:id/genes', toValue(args)] as const
}

export function getBioentityModelIdGenesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/model/:id/genotypes', toValue(args)] as const
}

export function getBioentityModelIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/model/:id/phenotypes', toValue(args)] as const
}

export function getBioentityModelIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/model/:id/publications', toValue(args)] as const
}

export function getBioentityModelIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityModelIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/model/:id/variants', toValue(args)] as const
}

export function getBioentityModelIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityModelIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.model[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityModelIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityModelIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityModelIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityModelIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.model[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPathwayIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/pathway/:id/diseases', toValue(args)] as const
}

export function getBioentityPathwayIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPathwayIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.pathway[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPathwayIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPathwayIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPathwayIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPathwayIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.pathway[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPathwayIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/pathway/:id/genes', toValue(args)] as const
}

export function getBioentityPathwayIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPathwayIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.pathway[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPathwayIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPathwayIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPathwayIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPathwayIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.pathway[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPathwayIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/pathway/:id/phenotypes', toValue(args)] as const
}

export function getBioentityPathwayIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPathwayIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.pathway[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPathwayIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPathwayIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPathwayIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPathwayIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.pathway[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdAnatomyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/anatomy', toValue(args)] as const
}

export function getBioentityPhenotypeIdAnatomyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdAnatomyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].anatomy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdAnatomyQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdAnatomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdAnatomyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].anatomy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/cases', toValue(args)] as const
}

export function getBioentityPhenotypeIdCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/diseases', toValue(args)] as const
}

export function getBioentityPhenotypeIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGeneTaxidIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/gene/:taxid/ids', toValue(args)] as const
}

export function getBioentityPhenotypeIdGeneTaxidIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdGeneTaxidIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdGeneTaxidIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']>
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
                    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
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
                    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdGeneTaxidIdsQueryKey>
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
            ReturnType<(typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdGeneTaxidIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdGeneTaxidIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genes', toValue(args)] as const
}

export function getBioentityPhenotypeIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genotypes', toValue(args)] as const
}

export function getBioentityPhenotypeIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdPathwaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/pathways', toValue(args)] as const
}

export function getBioentityPhenotypeIdPathwaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdPathwaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].pathways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdPathwaysQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdPathwaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdPathwaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].pathways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/publications', toValue(args)] as const
}

export function getBioentityPhenotypeIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>
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
                  ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/variants', toValue(args)] as const
}

export function getBioentityPhenotypeIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPhenotypeIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.phenotype[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPhenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPhenotypeIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPhenotypeIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPhenotypeIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.phenotype[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/diseases', toValue(args)] as const
}

export function getBioentityPublicationIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>
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
                  ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/genes', toValue(args)] as const
}

export function getBioentityPublicationIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/genotypes', toValue(args)] as const
}

export function getBioentityPublicationIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>
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
                  ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/models', toValue(args)] as const
}

export function getBioentityPublicationIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/phenotypes', toValue(args)] as const
}

export function getBioentityPublicationIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>
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
                  ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityPublicationIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/publication/:id/variants', toValue(args)] as const
}

export function getBioentityPublicationIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityPublicationIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.publication[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityPublicationIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>
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
                  ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityPublicationIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityPublicationIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityPublicationIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.publication[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdParticipantInQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/substance/:id/participant_in', toValue(args)] as const
}

export function getBioentitySubstanceIdParticipantInQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitySubstanceIdParticipantInQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.substance[':id'].participant_in.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitySubstanceIdParticipantIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
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
                  ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentitySubstanceIdParticipantInQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitySubstanceIdParticipantInQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitySubstanceIdParticipantInQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.substance[':id'].participant_in.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/substance/:id/roles', toValue(args)] as const
}

export function getBioentitySubstanceIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitySubstanceIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.substance[':id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitySubstanceIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentitySubstanceIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitySubstanceIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitySubstanceIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.substance[':id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdTreatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/substance/:id/treats', toValue(args)] as const
}

export function getBioentitySubstanceIdTreatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitySubstanceIdTreatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.substance[':id'].treats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitySubstanceIdTreats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentitySubstanceIdTreatsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitySubstanceIdTreatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitySubstanceIdTreatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.substance[':id'].treats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/cases', toValue(args)] as const
}

export function getBioentityVariantIdCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdDiseasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/diseases', toValue(args)] as const
}

export function getBioentityVariantIdDiseasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdDiseasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].diseases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdDiseasesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdDiseasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdDiseasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].diseases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdGenesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/genes', toValue(args)] as const
}

export function getBioentityVariantIdGenesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdGenesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].genes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdGenesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdGenesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdGenesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].genes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdGenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/genotypes', toValue(args)] as const
}

export function getBioentityVariantIdGenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdGenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].genotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdGenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdGenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdGenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].genotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/models', toValue(args)] as const
}

export function getBioentityVariantIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdPhenotypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/phenotypes', toValue(args)] as const
}

export function getBioentityVariantIdPhenotypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdPhenotypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].phenotypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdPhenotypesQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdPhenotypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdPhenotypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].phenotypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityVariantIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/variant/:id/publications', toValue(args)] as const
}

export function getBioentityVariantIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityVariantIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity.variant[':id'].publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityVariantIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>
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
                  ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBioentityVariantIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityVariantIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityVariantIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity.variant[':id'].publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':id']['$get']>>,
) {
  return ['bioentity', '/bioentity/:id', toValue(args)] as const
}

export function getBioentityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBioentityIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityIdAssociationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>
  >,
) {
  return ['bioentity', '/bioentity/:id/associations', toValue(args)] as const
}

export function getBioentityIdAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityIdAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity[':id'].associations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityIdAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityIdAssociationsQueryKey>
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
          Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityIdAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityIdAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity[':id'].associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentityTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>>,
) {
  return ['bioentity', '/bioentity/:type/:id', toValue(args)] as const
}

export function getBioentityTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentityTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentity[':type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBioentityTypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentityTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentity[':type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetAssociationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.associations.$get>>,
) {
  return ['bioentityset', '/bioentityset/associations', toValue(args)] as const
}

export function getBioentitysetAssociationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.associations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.associations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.associations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.associations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.associations.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetAssociationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetDescriptorCountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.descriptor.counts.$get>>,
) {
  return ['bioentityset', '/bioentityset/descriptor/counts', toValue(args)] as const
}

export function getBioentitysetDescriptorCountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.descriptor.counts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetDescriptorCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.descriptor.counts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetDescriptorCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.descriptor.counts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetDescriptorCountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetDescriptorCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetDescriptorCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.descriptor.counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetGraphQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.graph.$get>>,
) {
  return ['bioentityset', '/bioentityset/graph', toValue(args)] as const
}

export function getBioentitysetGraphQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.graph.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetGraphQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.graph.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetGraph<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.graph.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>
            >
          >,
          ReturnType<typeof getBioentitysetGraphQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetGraphQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetGraphQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.graph.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetHomologsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.homologs.index.$get>>,
) {
  return ['bioentityset', '/bioentityset/homologs/', toValue(args)] as const
}

export function getBioentitysetHomologsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.homologs.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetHomologsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.homologs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetHomologsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.homologs.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetHomologsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetHomologsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetHomologsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.homologs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetOverrepresentationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.overrepresentation.$get>>,
) {
  return ['bioentityset', '/bioentityset/overrepresentation', toValue(args)] as const
}

export function getBioentitysetOverrepresentationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.overrepresentation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetOverrepresentationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.overrepresentation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetOverrepresentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.overrepresentation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetOverrepresentationQueryKey>
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
          Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetOverrepresentationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetOverrepresentationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.overrepresentation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerAnatomyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>>,
) {
  return ['bioentityset', '/bioentityset/slimmer/anatomy', toValue(args)] as const
}

export function getBioentitysetSlimmerAnatomyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetSlimmerAnatomyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.slimmer.anatomy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetSlimmerAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetSlimmerAnatomyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerAnatomyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetSlimmerAnatomyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.slimmer.anatomy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerFunctionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.function.$get>>,
) {
  return ['bioentityset', '/bioentityset/slimmer/function', toValue(args)] as const
}

export function getBioentitysetSlimmerFunctionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.function.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetSlimmerFunctionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.slimmer.function.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetSlimmerFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.function.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetSlimmerFunctionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerFunctionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetSlimmerFunctionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.slimmer.function.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerPhenotypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>>,
) {
  return ['bioentityset', '/bioentityset/slimmer/phenotype', toValue(args)] as const
}

export function getBioentitysetSlimmerPhenotypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBioentitysetSlimmerPhenotypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bioentityset.slimmer.phenotype.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBioentitysetSlimmerPhenotype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
              >
            >
          >,
          ReturnType<typeof getBioentitysetSlimmerPhenotypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerPhenotypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBioentitysetSlimmerPhenotypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bioentityset.slimmer.phenotype.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.activity.$get>>,
) {
  return ['cam', '/cam/activity', toValue(args)] as const
}

export function getCamActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.activity.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
          >,
          ReturnType<typeof getCamActivityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCamActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamInstanceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.instance)[':id']['$get']>>,
) {
  return ['cam', '/cam/instance/:id', toValue(args)] as const
}

export function getCamInstanceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.instance)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.instance[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.instance)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCamInstanceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.instance[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamInstancesQueryKey() {
  return ['cam', '/cam/instances'] as const
}

export function getCamInstancesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCamInstancesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.instances.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCamInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
          >,
          ReturnType<typeof getCamInstancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCamInstancesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.instances.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelQueryKey() {
  return ['cam', '/cam/model'] as const
}

export function getCamModelQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCamModelQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCamModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
          >,
          ReturnType<typeof getCamModelQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCamModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCamModelQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelContributorsQueryKey() {
  return ['cam', '/cam/model/contributors'] as const
}

export function getCamModelContributorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCamModelContributorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model.contributors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamModelContributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
            >
          >,
          ReturnType<typeof getCamModelContributorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelContributorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCamModelContributorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model.contributors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelPropertiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.properties.$get>>,
) {
  return ['cam', '/cam/model/properties', toValue(args)] as const
}

export function getCamModelPropertiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.properties.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamModelPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model.properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamModelProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.properties.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
            >
          >,
          ReturnType<typeof getCamModelPropertiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamModelPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model.properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelPropertyValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.property_values.$get>>,
) {
  return ['cam', '/cam/model/property_values', toValue(args)] as const
}

export function getCamModelPropertyValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.property_values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamModelPropertyValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model.property_values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamModelPropertyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.property_values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cam.model.property_values.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cam.model.property_values.$get>>
              >
            >
          >,
          ReturnType<typeof getCamModelPropertyValuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelPropertyValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamModelPropertyValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model.property_values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.query.$get>>,
) {
  return ['cam', '/cam/model/query', toValue(args)] as const
}

export function getCamModelQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamModelQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamModelQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.model.query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>
            >
          >,
          ReturnType<typeof getCamModelQueryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamModelQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.model)[':id']['$get']>>,
) {
  return ['cam', '/cam/model/:id', toValue(args)] as const
}

export function getCamModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.model)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.model[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamModelId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cam.model)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCamModelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.model[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCamPhysicalInteractionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.physical_interaction.$get>>,
) {
  return ['cam', '/cam/physical_interaction', toValue(args)] as const
}

export function getCamPhysicalInteractionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.physical_interaction.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCamPhysicalInteractionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cam.physical_interaction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCamPhysicalInteraction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cam.physical_interaction.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
            >
          >,
          ReturnType<typeof getCamPhysicalInteractionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamPhysicalInteractionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCamPhysicalInteractionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cam.physical_interaction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEvidenceGraphIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['$get']>>,
) {
  return ['evidence', '/evidence/graph/:id', toValue(args)] as const
}

export function getEvidenceGraphIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvidenceGraphIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evidence.graph[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvidenceGraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvidenceGraphIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvidenceGraphIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvidenceGraphIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evidence.graph[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEvidenceGraphIdTableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>>,
) {
  return ['evidence', '/evidence/graph/:id/table', toValue(args)] as const
}

export function getEvidenceGraphIdTableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvidenceGraphIdTableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.evidence.graph[':id'].table.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvidenceGraphIdTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvidenceGraphIdTableQueryKey>
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
          Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvidenceGraphIdTableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvidenceGraphIdTableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.evidence.graph[':id'].table.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
    >
  >,
) {
  return ['genome', '/genome/features/within/:build/:reference/:begin/:end', toValue(args)] as const
}

export function getGenomeFeaturesWithinBuildReferenceBeginEndQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGenomeFeaturesWithinBuildReferenceBeginEnd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
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
                    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
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
                    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey>
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
              (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGraphEdgesFromIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>>,
) {
  return ['graph', '/graph/edges/from/:id', toValue(args)] as const
}

export function getGraphEdgesFromIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGraphEdgesFromIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.graph.edges.from[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGraphEdgesFromId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGraphEdgesFromIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGraphEdgesFromIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGraphEdgesFromIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.graph.edges.from[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGraphNodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.node)[':id']['$get']>>,
) {
  return ['graph', '/graph/node/:id', toValue(args)] as const
}

export function getGraphNodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.node)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGraphNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.graph.node[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGraphNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.graph.node)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGraphNodeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGraphNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGraphNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.graph.node[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdentifierMapperSourceTargetIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
  >,
) {
  return ['identifier', '/identifier/mapper/:source/:target/', toValue(args)] as const
}

export function getIdentifierMapperSourceTargetIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdentifierMapperSourceTargetIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.identifier.mapper[':source'][':target'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdentifierMapperSourceTargetIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
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
                    (typeof client.identifier.mapper)[':source'][':target']['index']['$get']
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
                    (typeof client.identifier.mapper)[':source'][':target']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIdentifierMapperSourceTargetIndexQueryKey>
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
            ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentifierMapperSourceTargetIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdentifierMapperSourceTargetIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.identifier.mapper[':source'][':target'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdentifierPrefixesIndexQueryKey() {
  return ['identifier', '/identifier/prefixes/'] as const
}

export function getIdentifierPrefixesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIdentifierPrefixesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.identifier.prefixes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdentifierPrefixesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
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
                Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>
              >
            >
          >,
          ReturnType<typeof getIdentifierPrefixesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentifierPrefixesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIdentifierPrefixesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.identifier.prefixes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdentifierPrefixesContractUriQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>
  >,
) {
  return ['identifier', '/identifier/prefixes/contract/:uri', toValue(args)] as const
}

export function getIdentifierPrefixesContractUriQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdentifierPrefixesContractUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.identifier.prefixes.contract[':uri'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdentifierPrefixesContractUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdentifierPrefixesContractUriQueryKey>
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
          Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentifierPrefixesContractUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdentifierPrefixesContractUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.identifier.prefixes.contract[':uri'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdentifierPrefixesExpandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>
  >,
) {
  return ['identifier', '/identifier/prefixes/expand/:id', toValue(args)] as const
}

export function getIdentifierPrefixesExpandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdentifierPrefixesExpandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.identifier.prefixes.expand[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdentifierPrefixesExpandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdentifierPrefixesExpandIdQueryKey>
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
          Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentifierPrefixesExpandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdentifierPrefixesExpandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.identifier.prefixes.expand[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndividualPedigreeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>>,
) {
  return ['individual', '/individual/pedigree/:id', toValue(args)] as const
}

export function getIndividualPedigreeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualPedigreeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individual.pedigree[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualPedigreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndividualPedigreeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualPedigreeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualPedigreeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individual.pedigree[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndividualIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual)[':id']['$get']>>,
) {
  return ['individual', '/individual/:id', toValue(args)] as const
}

export function getIndividualIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndividualIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.individual[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndividualId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.individual)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIndividualIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndividualIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.individual[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMartCaseObjectCategoryTaxonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>
  >,
) {
  return ['mart', '/mart/case/:object_category/:taxon', toValue(args)] as const
}

export function getMartCaseObjectCategoryTaxonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMartCaseObjectCategoryTaxonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mart.case[':object_category'][':taxon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMartCaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMartCaseObjectCategoryTaxonQueryKey>
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
          Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMartCaseObjectCategoryTaxonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMartCaseObjectCategoryTaxonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mart.case[':object_category'][':taxon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMartDiseaseObjectCategoryTaxonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>
  >,
) {
  return ['mart', '/mart/disease/:object_category/:taxon', toValue(args)] as const
}

export function getMartDiseaseObjectCategoryTaxonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMartDiseaseObjectCategoryTaxonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mart.disease[':object_category'][':taxon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMartDiseaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>
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
                  ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMartDiseaseObjectCategoryTaxonQueryKey>
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
          Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMartDiseaseObjectCategoryTaxonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMartDiseaseObjectCategoryTaxonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mart.disease[':object_category'][':taxon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMartGeneObjectCategoryTaxonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>
  >,
) {
  return ['mart', '/mart/gene/:object_category/:taxon', toValue(args)] as const
}

export function getMartGeneObjectCategoryTaxonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMartGeneObjectCategoryTaxonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mart.gene[':object_category'][':taxon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMartGeneObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMartGeneObjectCategoryTaxonQueryKey>
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
          Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMartGeneObjectCategoryTaxonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMartGeneObjectCategoryTaxonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mart.gene[':object_category'][':taxon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMartOrthologTaxon1Taxon2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>
  >,
) {
  return ['mart', '/mart/ortholog/:taxon1/:taxon2', toValue(args)] as const
}

export function getMartOrthologTaxon1Taxon2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMartOrthologTaxon1Taxon2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mart.ortholog[':taxon1'][':taxon2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMartOrthologTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMartOrthologTaxon1Taxon2QueryKey>
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
          Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMartOrthologTaxon1Taxon2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMartOrthologTaxon1Taxon2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mart.ortholog[':taxon1'][':taxon2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMartParalogTaxon1Taxon2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>
  >,
) {
  return ['mart', '/mart/paralog/:taxon1/:taxon2', toValue(args)] as const
}

export function getMartParalogTaxon1Taxon2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMartParalogTaxon1Taxon2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mart.paralog[':taxon1'][':taxon2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMartParalogTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMartParalogTaxon1Taxon2QueryKey>
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
          Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMartParalogTaxon1Taxon2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMartParalogTaxon1Taxon2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mart.paralog[':taxon1'][':taxon2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataDatasetsQueryKey() {
  return ['metadata', '/metadata/datasets'] as const
}

export function getMetadataDatasetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetadataDatasetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.datasets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>
            >
          >,
          ReturnType<typeof getMetadataDatasetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetadataDatasetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.datasets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMmeDiseaseMutationKey() {
  return ['mme', '/mme/disease', 'POST'] as const
}

export function getPostMmeDiseaseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.disease.$post>>>>>,
    TError,
    InferRequestType<typeof client.mme.disease.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmeDiseaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mme.disease.$post>) {
      return parseResponse(client.mme.disease.$post(args, options))
    },
  })
}

export function usePostMmeDisease<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.disease.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mme.disease.$post>,
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
  const mutationDefaults = getPostMmeDiseaseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMmeFlyMutationKey() {
  return ['mme', '/mme/fly', 'POST'] as const
}

export function getPostMmeFlyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.fly.$post>>>>>,
    TError,
    InferRequestType<typeof client.mme.fly.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmeFlyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mme.fly.$post>) {
      return parseResponse(client.mme.fly.$post(args, options))
    },
  })
}

export function usePostMmeFly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.fly.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mme.fly.$post>,
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
  const mutationDefaults = getPostMmeFlyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMmeMouseMutationKey() {
  return ['mme', '/mme/mouse', 'POST'] as const
}

export function getPostMmeMouseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.mouse.$post>>>>>,
    TError,
    InferRequestType<typeof client.mme.mouse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmeMouseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mme.mouse.$post>) {
      return parseResponse(client.mme.mouse.$post(args, options))
    },
  })
}

export function usePostMmeMouse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.mouse.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mme.mouse.$post>,
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
  const mutationDefaults = getPostMmeMouseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMmeNematodeMutationKey() {
  return ['mme', '/mme/nematode', 'POST'] as const
}

export function getPostMmeNematodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.nematode.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mme.nematode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmeNematodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mme.nematode.$post>) {
      return parseResponse(client.mme.nematode.$post(args, options))
    },
  })
}

export function usePostMmeNematode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.nematode.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mme.nematode.$post>,
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
  const mutationDefaults = getPostMmeNematodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMmeZebrafishMutationKey() {
  return ['mme', '/mme/zebrafish', 'POST'] as const
}

export function getPostMmeZebrafishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.zebrafish.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mme.zebrafish.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMmeZebrafishMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mme.zebrafish.$post>) {
      return parseResponse(client.mme.zebrafish.$post(args, options))
    },
  })
}

export function usePostMmeZebrafish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.zebrafish.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mme.zebrafish.$post>,
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
  const mutationDefaults = getPostMmeZebrafishMutationOptions<TError, TOnMutateResult>(
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

export function getNlpAnnotateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.index.$get>>,
) {
  return ['nlp', '/nlp/annotate/', toValue(args)] as const
}

export function getNlpAnnotateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNlpAnnotateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nlp.annotate.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNlpAnnotateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>
            >
          >,
          ReturnType<typeof getNlpAnnotateIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNlpAnnotateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNlpAnnotateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nlp.annotate.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNlpAnnotateIndexMutationKey() {
  return ['nlp', '/nlp/annotate/', 'POST'] as const
}

export function getPostNlpAnnotateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nlp.annotate.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNlpAnnotateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nlp.annotate.index.$post>) {
      return parseResponse(client.nlp.annotate.index.$post(args, options))
    },
  })
}

export function usePostNlpAnnotateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.nlp.annotate.index.$post>,
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
  const mutationDefaults = getPostNlpAnnotateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getNlpAnnotateEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.entities.$get>>,
) {
  return ['nlp', '/nlp/annotate/entities', toValue(args)] as const
}

export function getNlpAnnotateEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNlpAnnotateEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nlp.annotate.entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNlpAnnotateEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nlp.annotate.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
            >
          >,
          ReturnType<typeof getNlpAnnotateEntitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNlpAnnotateEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNlpAnnotateEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nlp.annotate.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNlpAnnotateEntitiesMutationKey() {
  return ['nlp', '/nlp/annotate/entities', 'POST'] as const
}

export function getPostNlpAnnotateEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.nlp.annotate.entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNlpAnnotateEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nlp.annotate.entities.$post>) {
      return parseResponse(client.nlp.annotate.entities.$post(args, options))
    },
  })
}

export function usePostNlpAnnotateEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.nlp.annotate.entities.$post>,
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
  const mutationDefaults = getPostNlpAnnotateEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getOntolIdentifierIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.identifier.index.$get>>,
) {
  return ['ontol', '/ontol/identifier/', toValue(args)] as const
}

export function getOntolIdentifierIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.identifier.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntolIdentifierIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontol.identifier.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntolIdentifierIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.identifier.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
            >
          >,
          ReturnType<typeof getOntolIdentifierIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntolIdentifierIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntolIdentifierIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontol.identifier.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOntolIdentifierIndexMutationKey() {
  return ['ontol', '/ontol/identifier/', 'POST'] as const
}

export function getPostOntolIdentifierIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ontol.identifier.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOntolIdentifierIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ontol.identifier.index.$post>) {
      return parseResponse(client.ontol.identifier.index.$post(args, options))
    },
  })
}

export function usePostOntolIdentifierIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ontol.identifier.index.$post>,
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
  const mutationDefaults = getPostOntolIdentifierIndexMutationOptions<TError, TOnMutateResult>(
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

export function getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
    >
  >,
) {
  return [
    'ontol',
    '/ontol/information_content/:subject_category/:object_category/:subject_taxon',
    toValue(args),
  ] as const
}

export function getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontol.information_content[':subject_category'][':object_category'][
          ':subject_taxon'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
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
                    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
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
                    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey
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
              (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ontol.information_content[':subject_category'][':object_category'][
            ':subject_taxon'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOntolLabelerIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.labeler.index.$get>>,
) {
  return ['ontol', '/ontol/labeler/', toValue(args)] as const
}

export function getOntolLabelerIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.labeler.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntolLabelerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontol.labeler.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntolLabelerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ontol.labeler.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
            >
          >,
          ReturnType<typeof getOntolLabelerIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOntolLabelerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntolLabelerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontol.labeler.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntolSubgraphOntologyNodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>
  >,
) {
  return ['ontol', '/ontol/subgraph/:ontology/:node', toValue(args)] as const
}

export function getOntolSubgraphOntologyNodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntolSubgraphOntologyNodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontol.subgraph[':ontology'][':node'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntolSubgraphOntologyNode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntolSubgraphOntologyNodeQueryKey>
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
          Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntolSubgraphOntologyNodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntolSubgraphOntologyNodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontol.subgraph[':ontology'][':node'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOntolSubgraphOntologyNodeMutationKey() {
  return ['ontol', '/ontol/subgraph/:ontology/:node', 'POST'] as const
}

export function getPostOntolSubgraphOntologyNodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOntolSubgraphOntologyNodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>,
    ) {
      return parseResponse(client.ontol.subgraph[':ontology'][':node'].$post(args, options))
    },
  })
}

export function usePostOntolSubgraphOntologyNode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>,
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
  const mutationDefaults = getPostOntolSubgraphOntologyNodeMutationOptions<TError, TOnMutateResult>(
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

export function getOntologySharedSubjectObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>
  >,
) {
  return ['ontology', '/ontology/shared/:subject/:object', toValue(args)] as const
}

export function getOntologySharedSubjectObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologySharedSubjectObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.shared[':subject'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologySharedSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologySharedSubjectObjectQueryKey>
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
          Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologySharedSubjectObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologySharedSubjectObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.shared[':subject'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologySubsetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.subset)[':id']['$get']>>,
) {
  return ['ontology', '/ontology/subset/:id', toValue(args)] as const
}

export function getOntologySubsetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.subset)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologySubsetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.subset[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologySubsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.subset)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologySubsetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologySubsetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologySubsetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.subset[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['$get']>>,
) {
  return ['ontology', '/ontology/term/:id', toValue(args)] as const
}

export function getOntologyTermIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermIdGraphQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>>,
) {
  return ['ontology', '/ontology/term/:id/graph', toValue(args)] as const
}

export function getOntologyTermIdGraphQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermIdGraphQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':id'].graph.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyTermIdGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermIdGraphQueryKey>
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
          Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermIdGraphQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermIdGraphQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':id'].graph.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermIdSubgraphQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>
  >,
) {
  return ['ontology', '/ontology/term/:id/subgraph', toValue(args)] as const
}

export function getOntologyTermIdSubgraphQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermIdSubgraphQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':id'].subgraph.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyTermIdSubgraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermIdSubgraphQueryKey>
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
          Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermIdSubgraphQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermIdSubgraphQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':id'].subgraph.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOntologyTermIdSubsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>>,
) {
  return ['ontology', '/ontology/term/:id/subsets', toValue(args)] as const
}

export function getOntologyTermIdSubsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOntologyTermIdSubsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ontology.term[':id'].subsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOntologyTermIdSubsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOntologyTermIdSubsetsQueryKey>
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
          Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermIdSubsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOntologyTermIdSubsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ontology.term[':id'].subsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwlOntologyDlqueryQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>,
) {
  return ['owl', '/owl/ontology/dlquery/:query', toValue(args)] as const
}

export function getOwlOntologyDlqueryQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwlOntologyDlqueryQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owl.ontology.dlquery[':query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwlOntologyDlqueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOwlOntologyDlqueryQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwlOntologyDlqueryQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwlOntologyDlqueryQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owl.ontology.dlquery[':query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOwlOntologySparqlQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>>,
) {
  return ['owl', '/owl/ontology/sparql/:query', toValue(args)] as const
}

export function getOwlOntologySparqlQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOwlOntologySparqlQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.owl.ontology.sparql[':query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOwlOntologySparqlQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOwlOntologySparqlQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOwlOntologySparqlQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOwlOntologySparqlQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.owl.ontology.sparql[':query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPairSimJaccardId1Id2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>
  >,
) {
  return ['pair', '/pair/sim/jaccard/:id1/:id2', toValue(args)] as const
}

export function getPairSimJaccardId1Id2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPairSimJaccardId1Id2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pair.sim.jaccard[':id1'][':id2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePairSimJaccardId1Id2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPairSimJaccardId1Id2QueryKey>
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
          Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPairSimJaccardId1Id2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPairSimJaccardId1Id2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pair.sim.jaccard[':id1'][':id2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelationUsageIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.index.$get>>,
) {
  return ['relation', '/relation/usage/', toValue(args)] as const
}

export function getRelationUsageIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationUsageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.relation.usage.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationUsageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
            >
          >,
          ReturnType<typeof getRelationUsageIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationUsageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.relation.usage.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
    >
  >,
) {
  return [
    'relation',
    '/relation/usage/between/:subject_category/:object_category',
    toValue(args),
  ] as const
}

export function getRelationUsageBetweenSubjectCategoryObjectCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.relation.usage.between[':subject_category'][':object_category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationUsageBetweenSubjectCategoryObjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
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
                    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
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
                    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey>
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
              (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.relation.usage.between[':subject_category'][':object_category'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRelationUsagePivotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.$get>>,
) {
  return ['relation', '/relation/usage/pivot', toValue(args)] as const
}

export function getRelationUsagePivotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationUsagePivotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.relation.usage.pivot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationUsagePivot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
            >
          >,
          ReturnType<typeof getRelationUsagePivotQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsagePivotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationUsagePivotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.relation.usage.pivot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelationUsagePivotLabelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.label.$get>>,
) {
  return ['relation', '/relation/usage/pivot/label', toValue(args)] as const
}

export function getRelationUsagePivotLabelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.label.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelationUsagePivotLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.relation.usage.pivot.label.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelationUsagePivotLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.relation.usage.pivot.label.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>
              >
            >
          >,
          ReturnType<typeof getRelationUsagePivotLabelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsagePivotLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelationUsagePivotLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.relation.usage.pivot.label.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchEntityAutocompleteTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>
  >,
) {
  return ['search', '/search/entity/autocomplete/:term', toValue(args)] as const
}

export function getSearchEntityAutocompleteTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchEntityAutocompleteTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.entity.autocomplete[':term'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchEntityAutocompleteTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchEntityAutocompleteTermQueryKey>
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
          Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchEntityAutocompleteTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchEntityAutocompleteTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.entity.autocomplete[':term'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchEntityHpoPlTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>
  >,
) {
  return ['search', '/search/entity/hpo-pl/:term', toValue(args)] as const
}

export function getSearchEntityHpoPlTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchEntityHpoPlTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.entity['hpo-pl'][':term'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchEntityHpoPlTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchEntityHpoPlTermQueryKey>
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
          Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchEntityHpoPlTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchEntityHpoPlTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.entity['hpo-pl'][':term'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchEntityTermQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.entity)[':term']['$get']>>,
) {
  return ['search', '/search/entity/:term', toValue(args)] as const
}

export function getSearchEntityTermQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.entity)[':term']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchEntityTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.entity[':term'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchEntityTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.entity)[':term']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchEntityTermQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchEntityTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchEntityTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.entity[':term'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimCompareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.compare.$get>>,
) {
  return ['sim', '/sim/compare', toValue(args)] as const
}

export function getSimCompareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.compare.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimCompareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sim.compare.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimCompare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.compare.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
          >,
          ReturnType<typeof getSimCompareQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimCompareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimCompareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sim.compare.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSimCompareMutationKey() {
  return ['sim', '/sim/compare', 'POST'] as const
}

export function getPostSimCompareMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$post>>>>>,
    TError,
    InferRequestType<typeof client.sim.compare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimCompareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sim.compare.$post>) {
      return parseResponse(client.sim.compare.$post(args, options))
    },
  })
}

export function usePostSimCompare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sim.compare.$post>,
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
  const mutationDefaults = getPostSimCompareMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSimScoreQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.score.$get>>,
) {
  return ['sim', '/sim/score', toValue(args)] as const
}

export function getSimScoreQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.score.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimScoreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sim.score.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.score.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
          >,
          ReturnType<typeof getSimScoreQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimScoreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimScoreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sim.score.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSimScoreMutationKey() {
  return ['sim', '/sim/score', 'POST'] as const
}

export function getPostSimScoreMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$post>>>>>,
    TError,
    InferRequestType<typeof client.sim.score.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSimScoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sim.score.$post>) {
      return parseResponse(client.sim.score.$post(args, options))
    },
  })
}

export function usePostSimScore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sim.score.$post>,
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
  const mutationDefaults = getPostSimScoreMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSimSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.search.$get>>,
) {
  return ['sim', '/sim/search', toValue(args)] as const
}

export function getSimSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sim.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSimSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sim.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
          >,
          ReturnType<typeof getSimSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sim.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVariationSetIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variation.set.index.$get>>,
) {
  return ['variation', '/variation/set/', toValue(args)] as const
}

export function getVariationSetIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variation.set.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariationSetIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variation.set.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariationSetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variation.set.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
            >
          >,
          ReturnType<typeof getVariationSetIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariationSetIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variation.set.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVariationSetIndexMutationKey() {
  return ['variation', '/variation/set/', 'POST'] as const
}

export function getPostVariationSetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.variation.set.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVariationSetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.variation.set.index.$post>) {
      return parseResponse(client.variation.set.index.$post(args, options))
    },
  })
}

export function usePostVariationSetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.variation.set.index.$post>,
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
  const mutationDefaults = getPostVariationSetIndexMutationOptions<TError, TOnMutateResult>(
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

export function getVariationSetAnalyzeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>>,
) {
  return ['variation', '/variation/set/analyze/:id', toValue(args)] as const
}

export function getVariationSetAnalyzeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariationSetAnalyzeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variation.set.analyze[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariationSetAnalyzeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariationSetAnalyzeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetAnalyzeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariationSetAnalyzeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variation.set.analyze[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVariationSetArchiveYearMonthDayQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
  >,
) {
  return ['variation', '/variation/set/archive/:year/:month/:day', toValue(args)] as const
}

export function getVariationSetArchiveYearMonthDayQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariationSetArchiveYearMonthDayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variation.set.archive[':year'][':month'][':day'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariationSetArchiveYearMonthDay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
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
                    (typeof client.variation.set.archive)[':year'][':month'][':day']['$get']
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
                    (typeof client.variation.set.archive)[':year'][':month'][':day']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVariationSetArchiveYearMonthDayQueryKey>
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
            ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetArchiveYearMonthDayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariationSetArchiveYearMonthDayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variation.set.archive[':year'][':month'][':day'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVariationSetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set)[':id']['$get']>>,
) {
  return ['variation', '/variation/set/:id', toValue(args)] as const
}

export function getVariationSetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariationSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variation.set[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariationSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variation.set)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariationSetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariationSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variation.set[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVariationSetIdMutationKey() {
  return ['variation', '/variation/set/:id', 'PUT'] as const
}

export function getPutVariationSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.variation.set)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVariationSetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variation.set)[':id']['$put']>) {
      return parseResponse(client.variation.set[':id'].$put(args, options))
    },
  })
}

export function usePutVariationSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.variation.set)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.variation.set)[':id']['$put']>,
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
  const mutationDefaults = getPutVariationSetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVariationSetIdMutationKey() {
  return ['variation', '/variation/set/:id', 'DELETE'] as const
}

export function getDeleteVariationSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.variation.set)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVariationSetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variation.set)[':id']['$delete']>) {
      return parseResponse(client.variation.set[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVariationSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.variation.set)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.variation.set)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteVariationSetIdMutationOptions<TError, TOnMutateResult>(
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
