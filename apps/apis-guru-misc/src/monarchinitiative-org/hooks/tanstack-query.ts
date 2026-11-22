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
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
) {
  return ['association', '/association/between/:subject/:object', args] as const
}

export function getAssociationBetweenSubjectObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationBetweenSubjectObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.between[':subject'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationBetweenSubjectObjectQueryKey>
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
      ...getAssociationBetweenSubjectObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssociationBetweenSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAssociationBetweenSubjectObjectQueryKey>
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
      ...getAssociationBetweenSubjectObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAssociationFindSubjectCategoryQueryKey(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
) {
  return ['association', '/association/find/:subject_category', args] as const
}

export function getAssociationFindSubjectCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationFindSubjectCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.find[':subject_category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationFindSubjectCategoryQueryKey>
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
      ...getAssociationFindSubjectCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssociationFindSubjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAssociationFindSubjectCategoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAssociationFindSubjectCategoryObjectCategoryQueryKey(
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
) {
  return ['association', '/association/find/:subject_category/:object_category', args] as const
}

export function getAssociationFindSubjectCategoryObjectCategoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationFindSubjectCategoryObjectCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.find[':subject_category'][':object_category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationFindSubjectCategoryObjectCategoryQueryKey>
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
      ...getAssociationFindSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssociationFindSubjectCategoryObjectCategory<
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
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAssociationFindSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAssociationFromSubjectQueryKey(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
) {
  return ['association', '/association/from/:subject', args] as const
}

export function getAssociationFromSubjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationFromSubjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.from[':subject'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationFromSubjectQueryKey>
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
      ...getAssociationFromSubjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssociationFromSubject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAssociationFromSubjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAssociationToObjectQueryKey(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
) {
  return ['association', '/association/to/:object', args] as const
}

export function getAssociationToObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationToObjectQueryKey>
  >({
    queryKey: getAssociationToObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.to[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAssociationToObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationToObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAssociationToObjectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAssociationToObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationToObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAssociationToObjectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAssociationTypeAssociationTypeQueryKey(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
) {
  return ['association', '/association/type/:association_type', args] as const
}

export function getAssociationTypeAssociationTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationTypeAssociationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association.type[':association_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAssociationTypeAssociationTypeQueryKey>
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
      ...getAssociationTypeAssociationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAssociationTypeAssociationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAssociationTypeAssociationTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAssociationIdQueryKey(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
) {
  return ['association', '/association/:id', args] as const
}

export function getAssociationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationIdQueryKey>
  >({
    queryKey: getAssociationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.association[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAssociationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAssociationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentityAnatomyIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes', args] as const
}

export function getBioentityAnatomyIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityAnatomyIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.anatomy[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityAnatomyIdGenesQueryKey>
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
      ...getBioentityAnatomyIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityAnatomyIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityAnatomyIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityAnatomyIdGenesTaxidQueryKey(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes/:taxid', args] as const
}

export function getBioentityAnatomyIdGenesTaxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityAnatomyIdGenesTaxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.anatomy[':id'].genes[':taxid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityAnatomyIdGenesTaxidQueryKey>
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
      ...getBioentityAnatomyIdGenesTaxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityAnatomyIdGenesTaxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityAnatomyIdGenesTaxidQueryKey>
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
      ...getBioentityAnatomyIdGenesTaxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityCaseIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/diseases', args] as const
}

export function getBioentityCaseIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityCaseIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.case[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityCaseIdDiseasesQueryKey>
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
      ...getBioentityCaseIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityCaseIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityCaseIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityCaseIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/genotypes', args] as const
}

export function getBioentityCaseIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityCaseIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.case[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityCaseIdGenotypesQueryKey>
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
      ...getBioentityCaseIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityCaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityCaseIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityCaseIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/models', args] as const
}

export function getBioentityCaseIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityCaseIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.case[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityCaseIdModelsQueryKey>
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
      ...getBioentityCaseIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityCaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityCaseIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityCaseIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/phenotypes', args] as const
}

export function getBioentityCaseIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityCaseIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.case[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityCaseIdPhenotypesQueryKey>
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
      ...getBioentityCaseIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityCaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityCaseIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityCaseIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/variants', args] as const
}

export function getBioentityCaseIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityCaseIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.case[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityCaseIdVariantsQueryKey>
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
      ...getBioentityCaseIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityCaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityCaseIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/cases', args] as const
}

export function getBioentityDiseaseIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdCasesQueryKey>
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
      ...getBioentityDiseaseIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/genes', args] as const
}

export function getBioentityDiseaseIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdGenesQueryKey>
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
      ...getBioentityDiseaseIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/genotypes', args] as const
}

export function getBioentityDiseaseIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdGenotypesQueryKey>
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
      ...getBioentityDiseaseIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/models', args] as const
}

export function getBioentityDiseaseIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdModelsQueryKey>
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
      ...getBioentityDiseaseIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdModelsTaxonQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/models/:taxon', args] as const
}

export function getBioentityDiseaseIdModelsTaxonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdModelsTaxonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].models[':taxon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdModelsTaxonQueryKey>
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
      ...getBioentityDiseaseIdModelsTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdModelsTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityDiseaseIdModelsTaxonQueryKey>
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
      ...getBioentityDiseaseIdModelsTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPathwaysQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/pathways', args] as const
}

export function getBioentityDiseaseIdPathwaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdPathwaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].pathways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdPathwaysQueryKey>
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
      ...getBioentityDiseaseIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/phenotypes', args] as const
}

export function getBioentityDiseaseIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdPhenotypesQueryKey>
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
      ...getBioentityDiseaseIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/publications', args] as const
}

export function getBioentityDiseaseIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityDiseaseIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdTreatmentQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/treatment', args] as const
}

export function getBioentityDiseaseIdTreatmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdTreatmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].treatment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdTreatmentQueryKey>
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
      ...getBioentityDiseaseIdTreatmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdTreatment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdTreatmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityDiseaseIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/variants', args] as const
}

export function getBioentityDiseaseIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityDiseaseIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.disease[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityDiseaseIdVariantsQueryKey>
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
      ...getBioentityDiseaseIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityDiseaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityDiseaseIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityFunctionIdQueryKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id', args] as const
}

export function getBioentityFunctionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityFunctionIdQueryKey>
  >({
    queryKey: getBioentityFunctionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.function[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentityFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityFunctionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBioentityFunctionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBioentityFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentityFunctionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBioentityFunctionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentityFunctionIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/genes', args] as const
}

export function getBioentityFunctionIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityFunctionIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.function[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityFunctionIdGenesQueryKey>
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
      ...getBioentityFunctionIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityFunctionIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityFunctionIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityFunctionIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/publications', args] as const
}

export function getBioentityFunctionIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityFunctionIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.function[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityFunctionIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityFunctionIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityFunctionIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityFunctionIdTaxonsQueryKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/taxons', args] as const
}

export function getBioentityFunctionIdTaxonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityFunctionIdTaxonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.function[':id'].taxons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityFunctionIdTaxonsQueryKey>
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
      ...getBioentityFunctionIdTaxonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityFunctionIdTaxons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityFunctionIdTaxonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdAnatomyQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/anatomy', args] as const
}

export function getBioentityGeneIdAnatomyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdAnatomyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].anatomy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdAnatomyQueryKey>
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
      ...getBioentityGeneIdAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/cases', args] as const
}

export function getBioentityGeneIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdCasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBioentityGeneIdCasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBioentityGeneIdCasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentityGeneIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/diseases', args] as const
}

export function getBioentityGeneIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdDiseasesQueryKey>
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
      ...getBioentityGeneIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdExpressionAnatomyQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/expression/anatomy', args] as const
}

export function getBioentityGeneIdExpressionAnatomyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdExpressionAnatomyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].expression.anatomy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdExpressionAnatomyQueryKey>
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
      ...getBioentityGeneIdExpressionAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdExpressionAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdExpressionAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdFunctionQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/function', args] as const
}

export function getBioentityGeneIdFunctionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdFunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].function.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdFunctionQueryKey>
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
      ...getBioentityGeneIdFunctionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdFunctionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/genotypes', args] as const
}

export function getBioentityGeneIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdGenotypesQueryKey>
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
      ...getBioentityGeneIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdHomologsQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/homologs', args] as const
}

export function getBioentityGeneIdHomologsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdHomologsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].homologs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdHomologsQueryKey>
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
      ...getBioentityGeneIdHomologsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdHomologs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdHomologsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdInteractionsQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/interactions', args] as const
}

export function getBioentityGeneIdInteractionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdInteractionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].interactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdInteractionsQueryKey>
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
      ...getBioentityGeneIdInteractionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdInteractions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdInteractionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/models', args] as const
}

export function getBioentityGeneIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdModelsQueryKey>
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
      ...getBioentityGeneIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdOrthologDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/diseases', args] as const
}

export function getBioentityGeneIdOrthologDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdOrthologDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].ortholog.diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdOrthologDiseasesQueryKey>
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
      ...getBioentityGeneIdOrthologDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdOrthologDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityGeneIdOrthologDiseasesQueryKey>
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
      ...getBioentityGeneIdOrthologDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdOrthologPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/phenotypes', args] as const
}

export function getBioentityGeneIdOrthologPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdOrthologPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].ortholog.phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityGeneIdOrthologPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdOrthologPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdOrthologPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdPathwaysQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/pathways', args] as const
}

export function getBioentityGeneIdPathwaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdPathwaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].pathways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdPathwaysQueryKey>
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
      ...getBioentityGeneIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/phenotypes', args] as const
}

export function getBioentityGeneIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdPhenotypesQueryKey>
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
      ...getBioentityGeneIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/publications', args] as const
}

export function getBioentityGeneIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdPublicationsQueryKey>
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
      ...getBioentityGeneIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGeneIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/variants', args] as const
}

export function getBioentityGeneIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGeneIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.gene[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGeneIdVariantsQueryKey>
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
      ...getBioentityGeneIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGeneIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGeneIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/cases', args] as const
}

export function getBioentityGenotypeIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdCasesQueryKey>
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
      ...getBioentityGenotypeIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/diseases', args] as const
}

export function getBioentityGenotypeIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdDiseasesQueryKey>
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
      ...getBioentityGenotypeIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/genes', args] as const
}

export function getBioentityGenotypeIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdGenesQueryKey>
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
      ...getBioentityGenotypeIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/genotypes', args] as const
}

export function getBioentityGenotypeIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdGenotypesQueryKey>
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
      ...getBioentityGenotypeIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/models', args] as const
}

export function getBioentityGenotypeIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdModelsQueryKey>
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
      ...getBioentityGenotypeIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/phenotypes', args] as const
}

export function getBioentityGenotypeIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdPhenotypesQueryKey>
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
      ...getBioentityGenotypeIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/publications', args] as const
}

export function getBioentityGenotypeIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityGenotypeIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGenotypeIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/variants', args] as const
}

export function getBioentityGenotypeIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGenotypeIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.genotype[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGenotypeIdVariantsQueryKey>
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
      ...getBioentityGenotypeIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGenotypeIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityGotermIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/goterm/:id/genes', args] as const
}

export function getBioentityGotermIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityGotermIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.goterm[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityGotermIdGenesQueryKey>
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
      ...getBioentityGotermIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityGotermIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityGotermIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/cases', args] as const
}

export function getBioentityModelIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdCasesQueryKey>
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
      ...getBioentityModelIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/diseases', args] as const
}

export function getBioentityModelIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdDiseasesQueryKey>
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
      ...getBioentityModelIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/genes', args] as const
}

export function getBioentityModelIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdGenesQueryKey>
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
      ...getBioentityModelIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/genotypes', args] as const
}

export function getBioentityModelIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdGenotypesQueryKey>
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
      ...getBioentityModelIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/phenotypes', args] as const
}

export function getBioentityModelIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdPhenotypesQueryKey>
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
      ...getBioentityModelIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/publications', args] as const
}

export function getBioentityModelIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdPublicationsQueryKey>
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
      ...getBioentityModelIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityModelIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/variants', args] as const
}

export function getBioentityModelIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityModelIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.model[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityModelIdVariantsQueryKey>
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
      ...getBioentityModelIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityModelIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityModelIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPathwayIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/diseases', args] as const
}

export function getBioentityPathwayIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPathwayIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.pathway[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPathwayIdDiseasesQueryKey>
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
      ...getBioentityPathwayIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPathwayIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPathwayIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPathwayIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/genes', args] as const
}

export function getBioentityPathwayIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPathwayIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.pathway[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPathwayIdGenesQueryKey>
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
      ...getBioentityPathwayIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPathwayIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPathwayIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPathwayIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/phenotypes', args] as const
}

export function getBioentityPathwayIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPathwayIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.pathway[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPathwayIdPhenotypesQueryKey>
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
      ...getBioentityPathwayIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPathwayIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPathwayIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdAnatomyQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/anatomy', args] as const
}

export function getBioentityPhenotypeIdAnatomyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdAnatomyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].anatomy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdAnatomyQueryKey>
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
      ...getBioentityPhenotypeIdAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/cases', args] as const
}

export function getBioentityPhenotypeIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdCasesQueryKey>
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
      ...getBioentityPhenotypeIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/diseases', args] as const
}

export function getBioentityPhenotypeIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdDiseasesQueryKey>
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
      ...getBioentityPhenotypeIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGeneTaxidIdsQueryKey(
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/gene/:taxid/ids', args] as const
}

export function getBioentityPhenotypeIdGeneTaxidIdsQueryOptions<
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
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdGeneTaxidIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdGeneTaxidIdsQueryKey>
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
      ...getBioentityPhenotypeIdGeneTaxidIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdGeneTaxidIds<
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
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityPhenotypeIdGeneTaxidIdsQueryKey>
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
      ...getBioentityPhenotypeIdGeneTaxidIdsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genes', args] as const
}

export function getBioentityPhenotypeIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdGenesQueryKey>
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
      ...getBioentityPhenotypeIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genotypes', args] as const
}

export function getBioentityPhenotypeIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdGenotypesQueryKey>
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
      ...getBioentityPhenotypeIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdPathwaysQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/pathways', args] as const
}

export function getBioentityPhenotypeIdPathwaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdPathwaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].pathways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdPathwaysQueryKey>
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
      ...getBioentityPhenotypeIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdPathwaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/publications', args] as const
}

export function getBioentityPhenotypeIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdPublicationsQueryKey>
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
      ...getBioentityPhenotypeIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityPhenotypeIdPublicationsQueryKey>
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
      ...getBioentityPhenotypeIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPhenotypeIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/variants', args] as const
}

export function getBioentityPhenotypeIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPhenotypeIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.phenotype[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPhenotypeIdVariantsQueryKey>
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
      ...getBioentityPhenotypeIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPhenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPhenotypeIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/diseases', args] as const
}

export function getBioentityPublicationIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityPublicationIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPublicationIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/genes', args] as const
}

export function getBioentityPublicationIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPublicationIdGenesQueryKey>
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
      ...getBioentityPublicationIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPublicationIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/genotypes', args] as const
}

export function getBioentityPublicationIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityPublicationIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPublicationIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/models', args] as const
}

export function getBioentityPublicationIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPublicationIdModelsQueryKey>
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
      ...getBioentityPublicationIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPublicationIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/phenotypes', args] as const
}

export function getBioentityPublicationIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityPublicationIdPhenotypesQueryKey>
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
      ...getBioentityPublicationIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentityPublicationIdPhenotypesQueryKey>
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
      ...getBioentityPublicationIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityPublicationIdVariantsQueryKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/variants', args] as const
}

export function getBioentityPublicationIdVariantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityPublicationIdVariantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.publication[':id'].variants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityPublicationIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityPublicationIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityPublicationIdVariantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdParticipantInQueryKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/participant_in', args] as const
}

export function getBioentitySubstanceIdParticipantInQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentitySubstanceIdParticipantInQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.substance[':id'].participant_in.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitySubstanceIdParticipantInQueryKey>
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
      ...getBioentitySubstanceIdParticipantInQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitySubstanceIdParticipantIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getBioentitySubstanceIdParticipantInQueryKey>
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
      ...getBioentitySubstanceIdParticipantInQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdRolesQueryKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/roles', args] as const
}

export function getBioentitySubstanceIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentitySubstanceIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.substance[':id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitySubstanceIdRolesQueryKey>
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
      ...getBioentitySubstanceIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitySubstanceIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentitySubstanceIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitySubstanceIdTreatsQueryKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/treats', args] as const
}

export function getBioentitySubstanceIdTreatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentitySubstanceIdTreatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.substance[':id'].treats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitySubstanceIdTreatsQueryKey>
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
      ...getBioentitySubstanceIdTreatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitySubstanceIdTreats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentitySubstanceIdTreatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdCasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/cases', args] as const
}

export function getBioentityVariantIdCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdCasesQueryKey>
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
      ...getBioentityVariantIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdCasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdDiseasesQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/diseases', args] as const
}

export function getBioentityVariantIdDiseasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdDiseasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].diseases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdDiseasesQueryKey>
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
      ...getBioentityVariantIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdDiseasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdGenesQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/genes', args] as const
}

export function getBioentityVariantIdGenesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdGenesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].genes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdGenesQueryKey>
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
      ...getBioentityVariantIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdGenesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdGenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/genotypes', args] as const
}

export function getBioentityVariantIdGenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdGenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].genotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdGenotypesQueryKey>
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
      ...getBioentityVariantIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdGenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdModelsQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/models', args] as const
}

export function getBioentityVariantIdModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdModelsQueryKey>
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
      ...getBioentityVariantIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdPhenotypesQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/phenotypes', args] as const
}

export function getBioentityVariantIdPhenotypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdPhenotypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].phenotypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityVariantIdPhenotypesQueryKey>
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
      ...getBioentityVariantIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdPhenotypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityVariantIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/publications', args] as const
}

export function getBioentityVariantIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityVariantIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity.variant[':id'].publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getBioentityVariantIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityVariantIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityVariantIdPublicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityIdQueryKey(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
) {
  return ['bioentity', '/bioentity/:id', args] as const
}

export function getBioentityIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityIdQueryKey>
  >({
    queryKey: getBioentityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBioentityId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBioentityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBioentityId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBioentityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentityIdAssociationsQueryKey(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
) {
  return ['bioentity', '/bioentity/:id/associations', args] as const
}

export function getBioentityIdAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentityIdAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity[':id'].associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityIdAssociationsQueryKey>
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
      ...getBioentityIdAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentityIdAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentityIdAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentityTypeIdQueryKey(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
) {
  return ['bioentity', '/bioentity/:type/:id', args] as const
}

export function getBioentityTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentityTypeIdQueryKey>
  >({
    queryKey: getBioentityTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentity[':type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentityTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBioentityTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBioentityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentityTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBioentityTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentitysetAssociationsQueryKey(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
) {
  return ['bioentityset', '/bioentityset/associations', args] as const
}

export function getBioentitysetAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetAssociationsQueryKey>
  >({
    queryKey: getBioentitysetAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.associations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetAssociationsQueryKey>
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
      ...getBioentitysetAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetAssociationsQueryKey>
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
      ...getBioentitysetAssociationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetDescriptorCountsQueryKey(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
) {
  return ['bioentityset', '/bioentityset/descriptor/counts', args] as const
}

export function getBioentitysetDescriptorCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetDescriptorCountsQueryKey>
  >({
    queryKey: getBioentitysetDescriptorCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.descriptor.counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetDescriptorCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetDescriptorCountsQueryKey>
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
      ...getBioentitysetDescriptorCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetDescriptorCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetDescriptorCountsQueryKey>
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
      ...getBioentitysetDescriptorCountsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetGraphQueryKey(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
) {
  return ['bioentityset', '/bioentityset/graph', args] as const
}

export function getBioentitysetGraphQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bioentityset.graph.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetGraphQueryKey>
  >({
    queryKey: getBioentitysetGraphQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.graph.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBioentitysetGraph<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetGraphQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBioentitysetGraphQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBioentitysetGraph<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetGraphQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBioentitysetGraphQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBioentitysetHomologsIndexQueryKey(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
) {
  return ['bioentityset', '/bioentityset/homologs/', args] as const
}

export function getBioentitysetHomologsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetHomologsIndexQueryKey>
  >({
    queryKey: getBioentitysetHomologsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.homologs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetHomologsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetHomologsIndexQueryKey>
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
      ...getBioentitysetHomologsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetHomologsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetHomologsIndexQueryKey>
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
      ...getBioentitysetHomologsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetOverrepresentationQueryKey(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
) {
  return ['bioentityset', '/bioentityset/overrepresentation', args] as const
}

export function getBioentitysetOverrepresentationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBioentitysetOverrepresentationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.overrepresentation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetOverrepresentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetOverrepresentationQueryKey>
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
      ...getBioentitysetOverrepresentationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetOverrepresentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getBioentitysetOverrepresentationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerAnatomyQueryKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/anatomy', args] as const
}

export function getBioentitysetSlimmerAnatomyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerAnatomyQueryKey>
  >({
    queryKey: getBioentitysetSlimmerAnatomyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.slimmer.anatomy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetSlimmerAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetSlimmerAnatomyQueryKey>
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
      ...getBioentitysetSlimmerAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetSlimmerAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetSlimmerAnatomyQueryKey>
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
      ...getBioentitysetSlimmerAnatomyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerFunctionQueryKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/function', args] as const
}

export function getBioentitysetSlimmerFunctionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerFunctionQueryKey>
  >({
    queryKey: getBioentitysetSlimmerFunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.slimmer.function.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetSlimmerFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetSlimmerFunctionQueryKey>
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
      ...getBioentitysetSlimmerFunctionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetSlimmerFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetSlimmerFunctionQueryKey>
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
      ...getBioentitysetSlimmerFunctionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBioentitysetSlimmerPhenotypeQueryKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/phenotype', args] as const
}

export function getBioentitysetSlimmerPhenotypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBioentitysetSlimmerPhenotypeQueryKey>
  >({
    queryKey: getBioentitysetSlimmerPhenotypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bioentityset.slimmer.phenotype.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBioentitysetSlimmerPhenotype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getBioentitysetSlimmerPhenotypeQueryKey>
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
      ...getBioentitysetSlimmerPhenotypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBioentitysetSlimmerPhenotype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBioentitysetSlimmerPhenotypeQueryKey>
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
      ...getBioentitysetSlimmerPhenotypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCamActivityQueryKey(args: InferRequestType<typeof client.cam.activity.$get>) {
  return ['cam', '/cam/activity', args] as const
}

export function getCamActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cam.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCamActivityQueryKey>
  >({
    queryKey: getCamActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.activity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.activity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamInstanceIdQueryKey(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
) {
  return ['cam', '/cam/instance/:id', args] as const
}

export function getCamInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamInstanceIdQueryKey>
  >({
    queryKey: getCamInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.instance[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamInstanceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamInstanceIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamInstancesQueryKey() {
  return ['cam', '/cam/instances'] as const
}

export function getCamInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamInstancesQueryKey>
  >({
    queryKey: getCamInstancesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.instances.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamInstancesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamInstancesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamModelQueryKey() {
  return ['cam', '/cam/model'] as const
}

export function getCamModelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCamModelQueryKey>
  >({
    queryKey: getCamModelQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamModelQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamModelQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamModelContributorsQueryKey() {
  return ['cam', '/cam/model/contributors'] as const
}

export function getCamModelContributorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelContributorsQueryKey>
  >({
    queryKey: getCamModelContributorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model.contributors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCamModelContributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelContributorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamModelContributorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamModelContributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelContributorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamModelContributorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamModelPropertiesQueryKey(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
) {
  return ['cam', '/cam/model/properties', args] as const
}

export function getCamModelPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cam.model.properties.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelPropertiesQueryKey>
  >({
    queryKey: getCamModelPropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model.properties.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamModelProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamModelPropertiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamModelProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamModelPropertiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamModelPropertyValuesQueryKey(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
) {
  return ['cam', '/cam/model/property_values', args] as const
}

export function getCamModelPropertyValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelPropertyValuesQueryKey>
  >({
    queryKey: getCamModelPropertyValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model.property_values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCamModelPropertyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelPropertyValuesQueryKey>
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
      ...getCamModelPropertyValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCamModelPropertyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelPropertyValuesQueryKey>
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
      ...getCamModelPropertyValuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCamModelQueryQueryKey(
  args: InferRequestType<typeof client.cam.model.query.$get>,
) {
  return ['cam', '/cam/model/query', args] as const
}

export function getCamModelQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cam.model.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelQueryQueryKey>
  >({
    queryKey: getCamModelQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamModelQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.query.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamModelQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamModelQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.model.query.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamModelQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamModelIdQueryKey(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
) {
  return ['cam', '/cam/model/:id', args] as const
}

export function getCamModelIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamModelIdQueryKey>
  >({
    queryKey: getCamModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.model[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCamModelId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCamModelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCamModelId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamModelIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCamModelIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCamPhysicalInteractionQueryKey(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
) {
  return ['cam', '/cam/physical_interaction', args] as const
}

export function getCamPhysicalInteractionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCamPhysicalInteractionQueryKey>
  >({
    queryKey: getCamPhysicalInteractionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cam.physical_interaction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCamPhysicalInteraction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamPhysicalInteractionQueryKey>
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
      ...getCamPhysicalInteractionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCamPhysicalInteraction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCamPhysicalInteractionQueryKey>
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
      ...getCamPhysicalInteractionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEvidenceGraphIdQueryKey(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
) {
  return ['evidence', '/evidence/graph/:id', args] as const
}

export function getEvidenceGraphIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvidenceGraphIdQueryKey>
  >({
    queryKey: getEvidenceGraphIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evidence.graph[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvidenceGraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvidenceGraphIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEvidenceGraphIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvidenceGraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEvidenceGraphIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEvidenceGraphIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEvidenceGraphIdTableQueryKey(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
) {
  return ['evidence', '/evidence/graph/:id/table', args] as const
}

export function getEvidenceGraphIdTableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEvidenceGraphIdTableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.evidence.graph[':id'].table.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEvidenceGraphIdTableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEvidenceGraphIdTableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvidenceGraphIdTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEvidenceGraphIdTableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey(
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
) {
  return ['genome', '/genome/features/within/:build/:reference/:begin/:end', args] as const
}

export function getGenomeFeaturesWithinBuildReferenceBeginEndQueryOptions<
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
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGenomeFeaturesWithinBuildReferenceBeginEndQueryKey>
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
      ...getGenomeFeaturesWithinBuildReferenceBeginEndQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenomeFeaturesWithinBuildReferenceBeginEnd<
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
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getGenomeFeaturesWithinBuildReferenceBeginEndQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGraphEdgesFromIdQueryKey(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
) {
  return ['graph', '/graph/edges/from/:id', args] as const
}

export function getGraphEdgesFromIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGraphEdgesFromIdQueryKey>
  >({
    queryKey: getGraphEdgesFromIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.graph.edges.from[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGraphEdgesFromId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGraphEdgesFromIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGraphEdgesFromIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGraphEdgesFromId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGraphEdgesFromIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGraphEdgesFromIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGraphNodeIdQueryKey(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
) {
  return ['graph', '/graph/node/:id', args] as const
}

export function getGraphNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGraphNodeIdQueryKey>
  >({
    queryKey: getGraphNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.graph.node[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGraphNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGraphNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGraphNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGraphNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGraphNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGraphNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIdentifierMapperSourceTargetIndexQueryKey(
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
) {
  return ['identifier', '/identifier/mapper/:source/:target/', args] as const
}

export function getIdentifierMapperSourceTargetIndexQueryOptions<
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
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdentifierMapperSourceTargetIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identifier.mapper[':source'][':target'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getIdentifierMapperSourceTargetIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIdentifierMapperSourceTargetIndex<
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
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIdentifierMapperSourceTargetIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIdentifierPrefixesIndexQueryKey() {
  return ['identifier', '/identifier/prefixes/'] as const
}

export function getIdentifierPrefixesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdentifierPrefixesIndexQueryKey>
  >({
    queryKey: getIdentifierPrefixesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.identifier.prefixes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdentifierPrefixesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIdentifierPrefixesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIdentifierPrefixesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdentifierPrefixesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIdentifierPrefixesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIdentifierPrefixesContractUriQueryKey(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
) {
  return ['identifier', '/identifier/prefixes/contract/:uri', args] as const
}

export function getIdentifierPrefixesContractUriQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdentifierPrefixesContractUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identifier.prefixes.contract[':uri'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getIdentifierPrefixesContractUriQueryKey>
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
      ...getIdentifierPrefixesContractUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIdentifierPrefixesContractUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIdentifierPrefixesContractUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIdentifierPrefixesExpandIdQueryKey(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
) {
  return ['identifier', '/identifier/prefixes/expand/:id', args] as const
}

export function getIdentifierPrefixesExpandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdentifierPrefixesExpandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.identifier.prefixes.expand[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getIdentifierPrefixesExpandIdQueryKey>
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
      ...getIdentifierPrefixesExpandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIdentifierPrefixesExpandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getIdentifierPrefixesExpandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIndividualPedigreeIdQueryKey(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
) {
  return ['individual', '/individual/pedigree/:id', args] as const
}

export function getIndividualPedigreeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIndividualPedigreeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individual.pedigree[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIndividualPedigreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getIndividualPedigreeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndividualPedigreeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndividualPedigreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndividualPedigreeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIndividualIdQueryKey(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
) {
  return ['individual', '/individual/:id', args] as const
}

export function getIndividualIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndividualIdQueryKey>
  >({
    queryKey: getIndividualIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.individual[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIndividualId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndividualIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndividualIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndividualId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndividualIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndividualIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMartCaseObjectCategoryTaxonQueryKey(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/case/:object_category/:taxon', args] as const
}

export function getMartCaseObjectCategoryTaxonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMartCaseObjectCategoryTaxonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mart.case[':object_category'][':taxon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMartCaseObjectCategoryTaxonQueryKey>
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
      ...getMartCaseObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMartCaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMartCaseObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMartDiseaseObjectCategoryTaxonQueryKey(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/disease/:object_category/:taxon', args] as const
}

export function getMartDiseaseObjectCategoryTaxonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMartDiseaseObjectCategoryTaxonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mart.disease[':object_category'][':taxon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMartDiseaseObjectCategoryTaxonQueryKey>
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
      ...getMartDiseaseObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMartDiseaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMartDiseaseObjectCategoryTaxonQueryKey>
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
      ...getMartDiseaseObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMartGeneObjectCategoryTaxonQueryKey(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/gene/:object_category/:taxon', args] as const
}

export function getMartGeneObjectCategoryTaxonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMartGeneObjectCategoryTaxonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mart.gene[':object_category'][':taxon'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMartGeneObjectCategoryTaxonQueryKey>
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
      ...getMartGeneObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMartGeneObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMartGeneObjectCategoryTaxonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMartOrthologTaxon1Taxon2QueryKey(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
) {
  return ['mart', '/mart/ortholog/:taxon1/:taxon2', args] as const
}

export function getMartOrthologTaxon1Taxon2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMartOrthologTaxon1Taxon2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mart.ortholog[':taxon1'][':taxon2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMartOrthologTaxon1Taxon2QueryKey>
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
      ...getMartOrthologTaxon1Taxon2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMartOrthologTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMartOrthologTaxon1Taxon2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMartParalogTaxon1Taxon2QueryKey(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
) {
  return ['mart', '/mart/paralog/:taxon1/:taxon2', args] as const
}

export function getMartParalogTaxon1Taxon2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMartParalogTaxon1Taxon2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mart.paralog[':taxon1'][':taxon2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMartParalogTaxon1Taxon2QueryKey>
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
      ...getMartParalogTaxon1Taxon2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMartParalogTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMartParalogTaxon1Taxon2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMetadataDatasetsQueryKey() {
  return ['metadata', '/metadata/datasets'] as const
}

export function getMetadataDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataDatasetsQueryKey>
  >({
    queryKey: getMetadataDatasetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.datasets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMetadataDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetadataDatasetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetadataDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetadataDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetadataDatasetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.disease.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mme.disease.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.fly.$post>>>>>,
        TError,
        InferRequestType<typeof client.mme.fly.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.mouse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mme.mouse.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.nematode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mme.nematode.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.zebrafish.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mme.zebrafish.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
) {
  return ['nlp', '/nlp/annotate/', args] as const
}

export function getNlpAnnotateIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nlp.annotate.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNlpAnnotateIndexQueryKey>
  >({
    queryKey: getNlpAnnotateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nlp.annotate.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNlpAnnotateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNlpAnnotateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNlpAnnotateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNlpAnnotateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNlpAnnotateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNlpAnnotateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
) {
  return ['nlp', '/nlp/annotate/entities', args] as const
}

export function getNlpAnnotateEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNlpAnnotateEntitiesQueryKey>
  >({
    queryKey: getNlpAnnotateEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nlp.annotate.entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNlpAnnotateEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNlpAnnotateEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNlpAnnotateEntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNlpAnnotateEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNlpAnnotateEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNlpAnnotateEntitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
) {
  return ['ontol', '/ontol/identifier/', args] as const
}

export function getOntolIdentifierIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntolIdentifierIndexQueryKey>
  >({
    queryKey: getOntolIdentifierIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontol.identifier.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOntolIdentifierIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntolIdentifierIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntolIdentifierIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntolIdentifierIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntolIdentifierIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntolIdentifierIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
) {
  return [
    'ontol',
    '/ontol/information_content/:subject_category/:object_category/:subject_taxon',
    args,
  ] as const
}

export function getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryOptions<
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
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontol.information_content[':subject_category'][':object_category'][
          ':subject_taxon'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey
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
      ...getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon<
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
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryKey
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
      ...getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOntolLabelerIndexQueryKey(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
) {
  return ['ontol', '/ontol/labeler/', args] as const
}

export function getOntolLabelerIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ontol.labeler.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOntolLabelerIndexQueryKey>
  >({
    queryKey: getOntolLabelerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontol.labeler.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOntolLabelerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntolLabelerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntolLabelerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntolLabelerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntolLabelerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntolLabelerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntolSubgraphOntologyNodeQueryKey(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
) {
  return ['ontol', '/ontol/subgraph/:ontology/:node', args] as const
}

export function getOntolSubgraphOntologyNodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntolSubgraphOntologyNodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontol.subgraph[':ontology'][':node'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntolSubgraphOntologyNodeQueryKey>
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
      ...getOntolSubgraphOntologyNodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntolSubgraphOntologyNode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOntolSubgraphOntologyNodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
) {
  return ['ontology', '/ontology/shared/:subject/:object', args] as const
}

export function getOntologySharedSubjectObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntologySharedSubjectObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.shared[':subject'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntologySharedSubjectObjectQueryKey>
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
      ...getOntologySharedSubjectObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntologySharedSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOntologySharedSubjectObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOntologySubsetIdQueryKey(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
) {
  return ['ontology', '/ontology/subset/:id', args] as const
}

export function getOntologySubsetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologySubsetIdQueryKey>
  >({
    queryKey: getOntologySubsetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.subset[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOntologySubsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntologySubsetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntologySubsetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntologySubsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologySubsetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntologySubsetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntologyTermIdQueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
) {
  return ['ontology', '/ontology/term/:id', args] as const
}

export function getOntologyTermIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOntologyTermIdQueryKey>
  >({
    queryKey: getOntologyTermIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOntologyTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntologyTermIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntologyTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOntologyTermIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntologyTermIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntologyTermIdGraphQueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/graph', args] as const
}

export function getOntologyTermIdGraphQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntologyTermIdGraphQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':id'].graph.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntologyTermIdGraphQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOntologyTermIdGraphQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOntologyTermIdGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOntologyTermIdGraphQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOntologyTermIdSubgraphQueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/subgraph', args] as const
}

export function getOntologyTermIdSubgraphQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntologyTermIdSubgraphQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':id'].subgraph.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntologyTermIdSubgraphQueryKey>
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
      ...getOntologyTermIdSubgraphQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntologyTermIdSubgraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOntologyTermIdSubgraphQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOntologyTermIdSubsetsQueryKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/subsets', args] as const
}

export function getOntologyTermIdSubsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOntologyTermIdSubsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ontology.term[':id'].subsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOntologyTermIdSubsetsQueryKey>
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
      ...getOntologyTermIdSubsetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOntologyTermIdSubsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOntologyTermIdSubsetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOwlOntologyDlqueryQueryQueryKey(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
) {
  return ['owl', '/owl/ontology/dlquery/:query', args] as const
}

export function getOwlOntologyDlqueryQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOwlOntologyDlqueryQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owl.ontology.dlquery[':query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOwlOntologyDlqueryQueryQueryKey>
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
      ...getOwlOntologyDlqueryQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwlOntologyDlqueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOwlOntologyDlqueryQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOwlOntologySparqlQueryQueryKey(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
) {
  return ['owl', '/owl/ontology/sparql/:query', args] as const
}

export function getOwlOntologySparqlQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOwlOntologySparqlQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.owl.ontology.sparql[':query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOwlOntologySparqlQueryQueryKey>
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
      ...getOwlOntologySparqlQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOwlOntologySparqlQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOwlOntologySparqlQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPairSimJaccardId1Id2QueryKey(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
) {
  return ['pair', '/pair/sim/jaccard/:id1/:id2', args] as const
}

export function getPairSimJaccardId1Id2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPairSimJaccardId1Id2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pair.sim.jaccard[':id1'][':id2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPairSimJaccardId1Id2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPairSimJaccardId1Id2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePairSimJaccardId1Id2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPairSimJaccardId1Id2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRelationUsageIndexQueryKey(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
) {
  return ['relation', '/relation/usage/', args] as const
}

export function getRelationUsageIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.relation.usage.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsageIndexQueryKey>
  >({
    queryKey: getRelationUsageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relation.usage.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRelationUsageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsageIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRelationUsageIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRelationUsageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsageIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRelationUsageIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey(
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
) {
  return ['relation', '/relation/usage/between/:subject_category/:object_category', args] as const
}

export function getRelationUsageBetweenSubjectCategoryObjectCategoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relation.usage.between[':subject_category'][':object_category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRelationUsageBetweenSubjectCategoryObjectCategoryQueryKey>
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
      ...getRelationUsageBetweenSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRelationUsageBetweenSubjectCategoryObjectCategory<
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
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getRelationUsageBetweenSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRelationUsagePivotQueryKey(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
) {
  return ['relation', '/relation/usage/pivot', args] as const
}

export function getRelationUsagePivotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.relation.usage.pivot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsagePivotQueryKey>
  >({
    queryKey: getRelationUsagePivotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relation.usage.pivot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRelationUsagePivot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsagePivotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRelationUsagePivotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRelationUsagePivot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsagePivotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRelationUsagePivotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRelationUsagePivotLabelQueryKey(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
) {
  return ['relation', '/relation/usage/pivot/label', args] as const
}

export function getRelationUsagePivotLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationUsagePivotLabelQueryKey>
  >({
    queryKey: getRelationUsagePivotLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relation.usage.pivot.label.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRelationUsagePivotLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsagePivotLabelQueryKey>
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
      ...getRelationUsagePivotLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRelationUsagePivotLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationUsagePivotLabelQueryKey>
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
      ...getRelationUsagePivotLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchEntityAutocompleteTermQueryKey(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
) {
  return ['search', '/search/entity/autocomplete/:term', args] as const
}

export function getSearchEntityAutocompleteTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchEntityAutocompleteTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.entity.autocomplete[':term'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSearchEntityAutocompleteTermQueryKey>
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
      ...getSearchEntityAutocompleteTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchEntityAutocompleteTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSearchEntityAutocompleteTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchEntityHpoPlTermQueryKey(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
) {
  return ['search', '/search/entity/hpo-pl/:term', args] as const
}

export function getSearchEntityHpoPlTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSearchEntityHpoPlTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.entity['hpo-pl'][':term'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSearchEntityHpoPlTermQueryKey>
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
      ...getSearchEntityHpoPlTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchEntityHpoPlTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSearchEntityHpoPlTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchEntityTermQueryKey(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
) {
  return ['search', '/search/entity/:term', args] as const
}

export function getSearchEntityTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchEntityTermQueryKey>
  >({
    queryKey: getSearchEntityTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.entity[':term'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchEntityTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSearchEntityTermQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchEntityTermQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchEntityTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchEntityTermQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchEntityTermQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSimCompareQueryKey(args: InferRequestType<typeof client.sim.compare.$get>) {
  return ['sim', '/sim/compare', args] as const
}

export function getSimCompareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim.compare.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimCompareQueryKey>
  >({
    queryKey: getSimCompareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim.compare.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimCompare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.compare.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimCompareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimCompare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.compare.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimCompareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sim.compare.$post>,
        TOnMutateResult
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

export function getSimScoreQueryKey(args: InferRequestType<typeof client.sim.score.$get>) {
  return ['sim', '/sim/score', args] as const
}

export function getSimScoreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim.score.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimScoreQueryKey>
  >({
    queryKey: getSimScoreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim.score.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.score.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimScoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimScoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.score.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimScoreQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimScoreQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sim.score.$post>,
        TOnMutateResult
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

export function getSimSearchQueryKey(args: InferRequestType<typeof client.sim.search.$get>) {
  return ['sim', '/sim/search', args] as const
}

export function getSimSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sim.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSimSearchQueryKey>
  >({
    queryKey: getSimSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sim.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sim.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVariationSetIndexQueryKey(
  args: InferRequestType<typeof client.variation.set.index.$get>,
) {
  return ['variation', '/variation/set/', args] as const
}

export function getVariationSetIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.variation.set.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetIndexQueryKey>
  >({
    queryKey: getVariationSetIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variation.set.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVariationSetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.variation.set.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariationSetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVariationSetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVariationSetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.variation.set.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariationSetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVariationSetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
) {
  return ['variation', '/variation/set/analyze/:id', args] as const
}

export function getVariationSetAnalyzeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVariationSetAnalyzeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variation.set.analyze[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVariationSetAnalyzeIdQueryKey>
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
      ...getVariationSetAnalyzeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVariationSetAnalyzeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVariationSetAnalyzeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVariationSetArchiveYearMonthDayQueryKey(
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
) {
  return ['variation', '/variation/set/archive/:year/:month/:day', args] as const
}

export function getVariationSetArchiveYearMonthDayQueryOptions<
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
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVariationSetArchiveYearMonthDayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variation.set.archive[':year'][':month'][':day'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getVariationSetArchiveYearMonthDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVariationSetArchiveYearMonthDay<
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
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getVariationSetArchiveYearMonthDayQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVariationSetIdQueryKey(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
) {
  return ['variation', '/variation/set/:id', args] as const
}

export function getVariationSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariationSetIdQueryKey>
  >({
    queryKey: getVariationSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variation.set[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVariationSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariationSetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVariationSetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVariationSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariationSetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVariationSetIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
