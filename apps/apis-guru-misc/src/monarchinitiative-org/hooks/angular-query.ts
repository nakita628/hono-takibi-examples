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

export function injectAssociationBetweenSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationBetweenSubjectObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAssociationFindSubjectCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationFindSubjectCategoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAssociationFindSubjectCategoryObjectCategory<
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
  args: () => InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationFindSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectAssociationFromSubject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationFromSubjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAssociationToObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssociationToObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAssociationTypeAssociationType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAssociationTypeAssociationTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssociationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectBioentityAnatomyIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityAnatomyIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityAnatomyIdGenesTaxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityAnatomyIdGenesTaxidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityCaseIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityCaseIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityCaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityCaseIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityCaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityCaseIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityCaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityCaseIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityCaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityCaseIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdModelsTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdModelsTaxonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdPathwaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdTreatment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdTreatmentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityDiseaseIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityDiseaseIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBioentityFunctionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectBioentityFunctionIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityFunctionIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityFunctionIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityFunctionIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityFunctionIdTaxons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityFunctionIdTaxonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdAnatomyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdExpressionAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdExpressionAnatomyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdFunctionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdHomologs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdHomologsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdInteractions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdInteractionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdOrthologDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdOrthologDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdOrthologPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdOrthologPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdPathwaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGeneIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGeneIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGenotypeIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityGotermIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityGotermIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityModelIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityModelIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPathwayIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPathwayIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPathwayIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPathwayIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPathwayIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPathwayIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdAnatomyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdGeneTaxidIds<
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
  args: () => InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdGeneTaxidIdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdPathways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdPathwaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPhenotypeIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPhenotypeIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityPublicationIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityPublicationIdVariantsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitySubstanceIdParticipantIn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bioentity.substance)[':id']['participant_in']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitySubstanceIdParticipantInQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitySubstanceIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitySubstanceIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitySubstanceIdTreats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitySubstanceIdTreatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdDiseases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdDiseasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdGenes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdGenesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdGenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdGenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdPhenotypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdPhenotypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityVariantIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityVariantIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBioentityIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectBioentityIdAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentityIdAssociationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentityTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBioentityTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectBioentitysetAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetAssociationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetDescriptorCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetDescriptorCountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetGraph<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBioentitysetGraphQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectBioentitysetHomologsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetHomologsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetOverrepresentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetOverrepresentationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetSlimmerAnatomy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetSlimmerAnatomyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetSlimmerFunction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetSlimmerFunctionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectBioentitysetSlimmerPhenotype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBioentitysetSlimmerPhenotypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectCamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cam.activity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamActivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCamInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamInstanceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCamInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamInstancesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCamModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamModelQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCamModelContributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamModelContributorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCamModelProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cam.model.properties.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamModelPropertiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCamModelPropertyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCamModelPropertyValuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectCamModelQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cam.model.query.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamModelQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCamModelId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCamModelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCamPhysicalInteraction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCamPhysicalInteractionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectEvidenceGraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEvidenceGraphIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectEvidenceGraphIdTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEvidenceGraphIdTableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGenomeFeaturesWithinBuildReferenceBeginEnd<
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
  args: () => InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGenomeFeaturesWithinBuildReferenceBeginEndQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectGraphEdgesFromId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGraphEdgesFromIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGraphNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGraphNodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectIdentifierMapperSourceTargetIndex<
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
  args: () => InferRequestType<
    (typeof client.identifier.mapper)[':source'][':target']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentifierMapperSourceTargetIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIdentifierPrefixesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdentifierPrefixesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectIdentifierPrefixesContractUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentifierPrefixesContractUriQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIdentifierPrefixesExpandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdentifierPrefixesExpandIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIndividualPedigreeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndividualPedigreeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectIndividualId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndividualIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectMartCaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMartCaseObjectCategoryTaxonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMartDiseaseObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMartDiseaseObjectCategoryTaxonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMartGeneObjectCategoryTaxon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMartGeneObjectCategoryTaxonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMartOrthologTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMartOrthologTaxon1Taxon2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMartParalogTaxon1Taxon2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMartParalogTaxon1Taxon2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMetadataDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetadataDatasetsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMmeDisease<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMmeDiseaseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMmeFly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.fly.$post>>>>>,
        TError,
        InferRequestType<typeof client.mme.fly.$post>,
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
    const mutationDefaults = getPostMmeFlyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMmeMouse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMmeMouseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMmeNematode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMmeNematodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMmeZebrafish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMmeZebrafishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectNlpAnnotateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNlpAnnotateIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostNlpAnnotateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNlpAnnotateIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectNlpAnnotateEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNlpAnnotateEntitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostNlpAnnotateEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNlpAnnotateEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOntolIdentifierIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntolIdentifierIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOntolIdentifierIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOntolIdentifierIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon<
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
  args: () => InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectOntolLabelerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntolLabelerIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectOntolSubgraphOntologyNode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntolSubgraphOntologyNodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostOntolSubgraphOntologyNode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOntolSubgraphOntologyNodeMutationOptions<
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

export function injectOntologySharedSubjectObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntologySharedSubjectObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectOntologySubsetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntologySubsetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectOntologyTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntologyTermIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectOntologyTermIdGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOntologyTermIdGraphQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectOntologyTermIdSubgraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntologyTermIdSubgraphQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectOntologyTermIdSubsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOntologyTermIdSubsetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectOwlOntologyDlqueryQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwlOntologyDlqueryQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectOwlOntologySparqlQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOwlOntologySparqlQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPairSimJaccardId1Id2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPairSimJaccardId1Id2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRelationUsageIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.relation.usage.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationUsageIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRelationUsageBetweenSubjectCategoryObjectCategory<
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
  args: () => InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRelationUsageBetweenSubjectCategoryObjectCategoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectRelationUsagePivot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationUsagePivotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRelationUsagePivotLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRelationUsagePivotLabelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSearchEntityAutocompleteTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchEntityAutocompleteTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSearchEntityHpoPlTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchEntityHpoPlTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSearchEntityTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchEntityTermQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSimCompare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sim.compare.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimCompareQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSimCompare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSimCompareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSimScore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sim.score.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimScoreQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSimScore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSimScoreMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSimSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sim.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVariationSetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.variation.set.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariationSetIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVariationSetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVariationSetIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectVariationSetAnalyzeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVariationSetAnalyzeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVariationSetArchiveYearMonthDay<
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
  args: () => InferRequestType<
    (typeof client.variation.set.archive)[':year'][':month'][':day']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVariationSetArchiveYearMonthDayQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVariationSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariationSetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutVariationSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVariationSetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteVariationSetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVariationSetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
