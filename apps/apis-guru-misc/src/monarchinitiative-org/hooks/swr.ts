import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAssociationBetweenSubjectObjectKey(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
) {
  return ['association', '/association/between/:subject/:object', args] as const
}

export function useGetAssociationBetweenSubjectObject<TError = unknown>(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationBetweenSubjectObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.between[':subject'][':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationBetweenSubjectObject<TError = unknown>(
  args: InferRequestType<(typeof client.association.between)[':subject'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationBetweenSubjectObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.between)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.between[':subject'][':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationFindSubjectCategoryKey(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
) {
  return ['association', '/association/find/:subject_category', args] as const
}

export function useGetAssociationFindSubjectCategory<TError = unknown>(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFindSubjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.find[':subject_category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationFindSubjectCategory<TError = unknown>(
  args: InferRequestType<(typeof client.association.find)[':subject_category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFindSubjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.find)[':subject_category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.find[':subject_category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationFindSubjectCategoryObjectCategoryKey(
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
) {
  return ['association', '/association/find/:subject_category/:object_category', args] as const
}

export function useGetAssociationFindSubjectCategoryObjectCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFindSubjectCategoryObjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.association.find[':subject_category'][':object_category'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationFindSubjectCategoryObjectCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.association.find)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFindSubjectCategoryObjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.association.find[':subject_category'][':object_category'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationFromSubjectKey(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
) {
  return ['association', '/association/from/:subject', args] as const
}

export function useGetAssociationFromSubject<TError = unknown>(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFromSubjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association.from[':subject'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationFromSubject<TError = unknown>(
  args: InferRequestType<(typeof client.association.from)[':subject']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationFromSubjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.from)[':subject']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association.from[':subject'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationToObjectKey(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
) {
  return ['association', '/association/to/:object', args] as const
}

export function useGetAssociationToObject<TError = unknown>(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationToObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association.to[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationToObject<TError = unknown>(
  args: InferRequestType<(typeof client.association.to)[':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationToObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.to)[':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association.to[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationTypeAssociationTypeKey(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
) {
  return ['association', '/association/type/:association_type', args] as const
}

export function useGetAssociationTypeAssociationType<TError = unknown>(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationTypeAssociationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.type[':association_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationTypeAssociationType<TError = unknown>(
  args: InferRequestType<(typeof client.association.type)[':association_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationTypeAssociationTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.association.type)[':association_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.association.type[':association_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationIdKey(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
) {
  return ['association', '/association/:id', args] as const
}

export function useGetAssociationId<TError = unknown>(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssociationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationId<TError = unknown>(
  args: InferRequestType<(typeof client.association)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssociationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.association)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.association[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityAnatomyIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes', args] as const
}

export function useGetBioentityAnatomyIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityAnatomyIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.anatomy[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityAnatomyIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityAnatomyIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.anatomy[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityAnatomyIdGenesTaxidKey(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
) {
  return ['bioentity', '/bioentity/anatomy/:id/genes/:taxid', args] as const
}

export function useGetBioentityAnatomyIdGenesTaxid<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityAnatomyIdGenesTaxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.anatomy[':id'].genes[':taxid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityAnatomyIdGenesTaxid<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityAnatomyIdGenesTaxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.anatomy)[':id']['genes'][':taxid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.anatomy[':id'].genes[':taxid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityCaseIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/diseases', args] as const
}

export function useGetBioentityCaseIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityCaseIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityCaseIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/genotypes', args] as const
}

export function useGetBioentityCaseIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityCaseIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityCaseIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/models', args] as const
}

export function useGetBioentityCaseIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityCaseIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityCaseIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/phenotypes', args] as const
}

export function useGetBioentityCaseIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityCaseIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityCaseIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/case/:id/variants', args] as const
}

export function useGetBioentityCaseIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityCaseIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.case)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityCaseIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.case)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.case[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/cases', args] as const
}

export function useGetBioentityDiseaseIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/genes', args] as const
}

export function useGetBioentityDiseaseIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/genotypes', args] as const
}

export function useGetBioentityDiseaseIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/models', args] as const
}

export function useGetBioentityDiseaseIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdModelsTaxonKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/models/:taxon', args] as const
}

export function useGetBioentityDiseaseIdModelsTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdModelsTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].models[':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdModelsTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdModelsTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.disease)[':id']['models'][':taxon']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].models[':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdPathwaysKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/pathways', args] as const
}

export function useGetBioentityDiseaseIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/phenotypes', args] as const
}

export function useGetBioentityDiseaseIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/publications', args] as const
}

export function useGetBioentityDiseaseIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdTreatmentKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/treatment', args] as const
}

export function useGetBioentityDiseaseIdTreatment<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdTreatmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].treatment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdTreatment<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdTreatmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['treatment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.disease[':id'].treatment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityDiseaseIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/disease/:id/variants', args] as const
}

export function useGetBioentityDiseaseIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityDiseaseIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.disease)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityDiseaseIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.disease)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.disease[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityFunctionIdKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id', args] as const
}

export function useGetBioentityFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityFunctionId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityFunctionIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/genes', args] as const
}

export function useGetBioentityFunctionIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityFunctionIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityFunctionIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/publications', args] as const
}

export function useGetBioentityFunctionIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.function[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityFunctionIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.function[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityFunctionIdTaxonsKey(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
) {
  return ['bioentity', '/bioentity/function/:id/taxons', args] as const
}

export function useGetBioentityFunctionIdTaxons<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdTaxonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].taxons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityFunctionIdTaxons<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.function)[':id']['taxons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityFunctionIdTaxonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.function)[':id']['taxons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.function[':id'].taxons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdAnatomyKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/anatomy', args] as const
}

export function useGetBioentityGeneIdAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/cases', args] as const
}

export function useGetBioentityGeneIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/diseases', args] as const
}

export function useGetBioentityGeneIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdExpressionAnatomyKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/expression/anatomy', args] as const
}

export function useGetBioentityGeneIdExpressionAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdExpressionAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].expression.anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdExpressionAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdExpressionAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['expression']['anatomy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].expression.anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdFunctionKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/function', args] as const
}

export function useGetBioentityGeneIdFunction<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdFunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdFunction<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['function']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdFunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['function']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/genotypes', args] as const
}

export function useGetBioentityGeneIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdHomologsKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/homologs', args] as const
}

export function useGetBioentityGeneIdHomologs<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdHomologsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].homologs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdHomologs<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdHomologsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['homologs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].homologs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdInteractionsKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/interactions', args] as const
}

export function useGetBioentityGeneIdInteractions<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdInteractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].interactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdInteractions<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdInteractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['interactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].interactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/models', args] as const
}

export function useGetBioentityGeneIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdOrthologDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/diseases', args] as const
}

export function useGetBioentityGeneIdOrthologDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdOrthologDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].ortholog.diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdOrthologDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdOrthologDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['diseases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].ortholog.diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdOrthologPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/ortholog/phenotypes', args] as const
}

export function useGetBioentityGeneIdOrthologPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdOrthologPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].ortholog.phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdOrthologPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdOrthologPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.gene)[':id']['ortholog']['phenotypes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].ortholog.phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdPathwaysKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/pathways', args] as const
}

export function useGetBioentityGeneIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/phenotypes', args] as const
}

export function useGetBioentityGeneIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/publications', args] as const
}

export function useGetBioentityGeneIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.gene[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGeneIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/gene/:id/variants', args] as const
}

export function useGetBioentityGeneIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGeneIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.gene)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGeneIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.gene)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.gene[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/cases', args] as const
}

export function useGetBioentityGenotypeIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/diseases', args] as const
}

export function useGetBioentityGenotypeIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/genes', args] as const
}

export function useGetBioentityGenotypeIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/genotypes', args] as const
}

export function useGetBioentityGenotypeIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/models', args] as const
}

export function useGetBioentityGenotypeIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.genotype[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/phenotypes', args] as const
}

export function useGetBioentityGenotypeIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/publications', args] as const
}

export function useGetBioentityGenotypeIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGenotypeIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/genotype/:id/variants', args] as const
}

export function useGetBioentityGenotypeIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGenotypeIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGenotypeIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.genotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.genotype[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityGotermIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/goterm/:id/genes', args] as const
}

export function useGetBioentityGotermIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGotermIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.goterm[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityGotermIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityGotermIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.goterm)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.goterm[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/cases', args] as const
}

export function useGetBioentityModelIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/diseases', args] as const
}

export function useGetBioentityModelIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/genes', args] as const
}

export function useGetBioentityModelIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/genotypes', args] as const
}

export function useGetBioentityModelIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/phenotypes', args] as const
}

export function useGetBioentityModelIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/publications', args] as const
}

export function useGetBioentityModelIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.model[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.model[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityModelIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/model/:id/variants', args] as const
}

export function useGetBioentityModelIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityModelIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.model)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityModelIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.model)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.model[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPathwayIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/diseases', args] as const
}

export function useGetBioentityPathwayIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.pathway[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPathwayIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.pathway[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPathwayIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/genes', args] as const
}

export function useGetBioentityPathwayIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.pathway[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPathwayIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.pathway[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPathwayIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/pathway/:id/phenotypes', args] as const
}

export function useGetBioentityPathwayIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.pathway[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPathwayIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPathwayIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.pathway)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.pathway[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdAnatomyKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/anatomy', args] as const
}

export function useGetBioentityPhenotypeIdAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdAnatomy<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['anatomy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/cases', args] as const
}

export function useGetBioentityPhenotypeIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.phenotype[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.phenotype[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/diseases', args] as const
}

export function useGetBioentityPhenotypeIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdGeneTaxidIdsKey(
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
) {
  return ['bioentity', '/bioentity/phenotype/:id/gene/:taxid/ids', args] as const
}

export function useGetBioentityPhenotypeIdGeneTaxidIds<TError = unknown>(
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGeneTaxidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdGeneTaxidIds<TError = unknown>(
  args: InferRequestType<
    (typeof client.bioentity.phenotype)[':id']['gene'][':taxid']['ids']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGeneTaxidIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bioentity.phenotype[':id'].gene[':taxid'].ids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genes', args] as const
}

export function useGetBioentityPhenotypeIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.phenotype[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.phenotype[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/genotypes', args] as const
}

export function useGetBioentityPhenotypeIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdPathwaysKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/pathways', args] as const
}

export function useGetBioentityPhenotypeIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdPathways<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdPathwaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['pathways']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].pathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/publications', args] as const
}

export function useGetBioentityPhenotypeIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPhenotypeIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/phenotype/:id/variants', args] as const
}

export function useGetBioentityPhenotypeIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPhenotypeIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPhenotypeIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.phenotype)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.phenotype[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/diseases', args] as const
}

export function useGetBioentityPublicationIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/genes', args] as const
}

export function useGetBioentityPublicationIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/genotypes', args] as const
}

export function useGetBioentityPublicationIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/models', args] as const
}

export function useGetBioentityPublicationIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/phenotypes', args] as const
}

export function useGetBioentityPublicationIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityPublicationIdVariantsKey(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
) {
  return ['bioentity', '/bioentity/publication/:id/variants', args] as const
}

export function useGetBioentityPublicationIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityPublicationIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.publication)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityPublicationIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.publication)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.publication[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitySubstanceIdParticipantInKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/participant_in', args] as const
}

export function useGetBioentitySubstanceIdParticipantIn<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdParticipantInKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.substance[':id'].participant_in.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitySubstanceIdParticipantIn<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdParticipantInKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bioentity.substance)[':id']['participant_in']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.substance[':id'].participant_in.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitySubstanceIdRolesKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/roles', args] as const
}

export function useGetBioentitySubstanceIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.substance[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitySubstanceIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.substance[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitySubstanceIdTreatsKey(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
) {
  return ['bioentity', '/bioentity/substance/:id/treats', args] as const
}

export function useGetBioentitySubstanceIdTreats<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdTreatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.substance[':id'].treats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitySubstanceIdTreats<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.substance)[':id']['treats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitySubstanceIdTreatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.substance)[':id']['treats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.substance[':id'].treats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdCasesKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/cases', args] as const
}

export function useGetBioentityVariantIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdCases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['cases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['cases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdDiseasesKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/diseases', args] as const
}

export function useGetBioentityVariantIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdDiseases<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdDiseasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['diseases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].diseases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdGenesKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/genes', args] as const
}

export function useGetBioentityVariantIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdGenes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdGenesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].genes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdGenotypesKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/genotypes', args] as const
}

export function useGetBioentityVariantIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdGenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdGenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['genotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].genotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdModelsKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/models', args] as const
}

export function useGetBioentityVariantIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity.variant[':id'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdPhenotypesKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/phenotypes', args] as const
}

export function useGetBioentityVariantIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdPhenotypes<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdPhenotypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['phenotypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].phenotypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityVariantIdPublicationsKey(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
) {
  return ['bioentity', '/bioentity/variant/:id/publications', args] as const
}

export function useGetBioentityVariantIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityVariantIdPublications<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity.variant)[':id']['publications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityVariantIdPublicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity.variant)[':id']['publications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bioentity.variant[':id'].publications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityIdKey(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
) {
  return ['bioentity', '/bioentity/:id', args] as const
}

export function useGetBioentityId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBioentityIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBioentityIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bioentity)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityIdAssociationsKey(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
) {
  return ['bioentity', '/bioentity/:id/associations', args] as const
}

export function useGetBioentityIdAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityIdAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':id'].associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityIdAssociations<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':id']['associations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityIdAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':id']['associations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':id'].associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentityTypeIdKey(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
) {
  return ['bioentity', '/bioentity/:type/:id', args] as const
}

export function useGetBioentityTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentityTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.bioentity)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentityTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bioentity)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentity[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetAssociationsKey(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
) {
  return ['bioentityset', '/bioentityset/associations', args] as const
}

export function useGetBioentitysetAssociations<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetAssociations<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.associations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetAssociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.associations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.associations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetDescriptorCountsKey(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
) {
  return ['bioentityset', '/bioentityset/descriptor/counts', args] as const
}

export function useGetBioentitysetDescriptorCounts<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetDescriptorCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.descriptor.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetDescriptorCounts<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.descriptor.counts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetDescriptorCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.descriptor.counts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.descriptor.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetGraphKey(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
) {
  return ['bioentityset', '/bioentityset/graph', args] as const
}

export function useGetBioentitysetGraph<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetGraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.graph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetGraph<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.graph.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetGraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.graph.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.graph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetHomologsIndexKey(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
) {
  return ['bioentityset', '/bioentityset/homologs/', args] as const
}

export function useGetBioentitysetHomologsIndex<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetHomologsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.homologs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetHomologsIndex<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.homologs.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetHomologsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.homologs.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.homologs.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetOverrepresentationKey(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
) {
  return ['bioentityset', '/bioentityset/overrepresentation', args] as const
}

export function useGetBioentitysetOverrepresentation<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetOverrepresentationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.overrepresentation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetOverrepresentation<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.overrepresentation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetOverrepresentationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.overrepresentation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.overrepresentation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetSlimmerAnatomyKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/anatomy', args] as const
}

export function useGetBioentitysetSlimmerAnatomy<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetSlimmerAnatomy<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.anatomy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerAnatomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bioentityset.slimmer.anatomy.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.anatomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetSlimmerFunctionKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/function', args] as const
}

export function useGetBioentitysetSlimmerFunction<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerFunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetSlimmerFunction<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.function.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerFunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.function.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBioentitysetSlimmerPhenotypeKey(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
) {
  return ['bioentityset', '/bioentityset/slimmer/phenotype', args] as const
}

export function useGetBioentitysetSlimmerPhenotype<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerPhenotypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.phenotype.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBioentitysetSlimmerPhenotype<TError = unknown>(
  args: InferRequestType<typeof client.bioentityset.slimmer.phenotype.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBioentitysetSlimmerPhenotypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.bioentityset.slimmer.phenotype.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bioentityset.slimmer.phenotype.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamActivityKey(args: InferRequestType<typeof client.cam.activity.$get>) {
  return ['cam', '/cam/activity', args] as const
}

export function useGetCamActivity<TError = unknown>(
  args: InferRequestType<typeof client.cam.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamActivity<TError = unknown>(
  args: InferRequestType<typeof client.cam.activity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamActivityKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.activity.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.activity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamInstanceIdKey(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
) {
  return ['cam', '/cam/instance/:id', args] as const
}

export function useGetCamInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamInstanceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.cam.instance)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamInstanceIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.instance)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.instance[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamInstancesKey() {
  return ['cam', '/cam/instances'] as const
}

export function useGetCamInstances<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamInstancesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.instances.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamInstances<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamInstancesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.instances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.instances.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelKey() {
  return ['cam', '/cam/model'] as const
}

export function useGetCamModel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModel<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelContributorsKey() {
  return ['cam', '/cam/model/contributors'] as const
}

export function useGetCamModelContributors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelContributorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.contributors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModelContributors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelContributorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.contributors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.contributors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelPropertiesKey(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
) {
  return ['cam', '/cam/model/properties', args] as const
}

export function useGetCamModelProperties<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModelProperties<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.properties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.properties.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelPropertyValuesKey(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
) {
  return ['cam', '/cam/model/property_values', args] as const
}

export function useGetCamModelPropertyValues<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelPropertyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.property_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModelPropertyValues<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.property_values.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamModelPropertyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.property_values.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.property_values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelQueryKey(args: InferRequestType<typeof client.cam.model.query.$get>) {
  return ['cam', '/cam/model/query', args] as const
}

export function useGetCamModelQuery<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModelQuery<TError = unknown>(
  args: InferRequestType<typeof client.cam.model.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cam.model.query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamModelIdKey(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
) {
  return ['cam', '/cam/model/:id', args] as const
}

export function useGetCamModelId<TError = unknown>(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamModelId<TError = unknown>(
  args: InferRequestType<(typeof client.cam.model)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCamModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cam.model)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.model[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCamPhysicalInteractionKey(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
) {
  return ['cam', '/cam/physical_interaction', args] as const
}

export function useGetCamPhysicalInteraction<TError = unknown>(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamPhysicalInteractionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.physical_interaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCamPhysicalInteraction<TError = unknown>(
  args: InferRequestType<typeof client.cam.physical_interaction.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCamPhysicalInteractionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cam.physical_interaction.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cam.physical_interaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvidenceGraphIdKey(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
) {
  return ['evidence', '/evidence/graph/:id', args] as const
}

export function useGetEvidenceGraphId<TError = unknown>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvidenceGraphIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evidence.graph[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvidenceGraphId<TError = unknown>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvidenceGraphIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.evidence.graph)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evidence.graph[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEvidenceGraphIdTableKey(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
) {
  return ['evidence', '/evidence/graph/:id/table', args] as const
}

export function useGetEvidenceGraphIdTable<TError = unknown>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvidenceGraphIdTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evidence.graph[':id'].table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvidenceGraphIdTable<TError = unknown>(
  args: InferRequestType<(typeof client.evidence.graph)[':id']['table']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEvidenceGraphIdTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.evidence.graph)[':id']['table']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.evidence.graph[':id'].table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenomeFeaturesWithinBuildReferenceBeginEndKey(
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
) {
  return ['genome', '/genome/features/within/:build/:reference/:begin/:end', args] as const
}

export function useGetGenomeFeaturesWithinBuildReferenceBeginEnd<TError = unknown>(
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGenomeFeaturesWithinBuildReferenceBeginEndKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenomeFeaturesWithinBuildReferenceBeginEnd<TError = unknown>(
  args: InferRequestType<
    (typeof client.genome.features.within)[':build'][':reference'][':begin'][':end']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGenomeFeaturesWithinBuildReferenceBeginEndKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genome.features.within[':build'][':reference'][':begin'][':end'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGraphEdgesFromIdKey(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
) {
  return ['graph', '/graph/edges/from/:id', args] as const
}

export function useGetGraphEdgesFromId<TError = unknown>(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGraphEdgesFromIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.graph.edges.from[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGraphEdgesFromId<TError = unknown>(
  args: InferRequestType<(typeof client.graph.edges.from)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGraphEdgesFromIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.edges.from)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.graph.edges.from[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGraphNodeIdKey(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
) {
  return ['graph', '/graph/node/:id', args] as const
}

export function useGetGraphNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGraphNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.graph.node[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGraphNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.graph.node)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGraphNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.graph.node)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.graph.node[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdentifierMapperSourceTargetIndexKey(
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
) {
  return ['identifier', '/identifier/mapper/:source/:target/', args] as const
}

export function useGetIdentifierMapperSourceTargetIndex<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierMapperSourceTargetIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.identifier.mapper[':source'][':target'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentifierMapperSourceTargetIndex<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierMapperSourceTargetIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.identifier.mapper)[':source'][':target']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.identifier.mapper[':source'][':target'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIdentifierPrefixesIndexKey() {
  return ['identifier', '/identifier/prefixes/'] as const
}

export function useGetIdentifierPrefixesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identifier.prefixes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentifierPrefixesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.identifier.prefixes.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identifier.prefixes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdentifierPrefixesContractUriKey(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
) {
  return ['identifier', '/identifier/prefixes/contract/:uri', args] as const
}

export function useGetIdentifierPrefixesContractUri<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesContractUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.identifier.prefixes.contract[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentifierPrefixesContractUri<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesContractUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.contract)[':uri']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.identifier.prefixes.contract[':uri'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdentifierPrefixesExpandIdKey(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
) {
  return ['identifier', '/identifier/prefixes/expand/:id', args] as const
}

export function useGetIdentifierPrefixesExpandId<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesExpandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identifier.prefixes.expand[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdentifierPrefixesExpandId<TError = unknown>(
  args: InferRequestType<(typeof client.identifier.prefixes.expand)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdentifierPrefixesExpandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.identifier.prefixes.expand)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.identifier.prefixes.expand[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndividualPedigreeIdKey(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
) {
  return ['individual', '/individual/pedigree/:id', args] as const
}

export function useGetIndividualPedigreeId<TError = unknown>(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndividualPedigreeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individual.pedigree[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualPedigreeId<TError = unknown>(
  args: InferRequestType<(typeof client.individual.pedigree)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIndividualPedigreeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.individual.pedigree)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individual.pedigree[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndividualIdKey(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
) {
  return ['individual', '/individual/:id', args] as const
}

export function useGetIndividualId<TError = unknown>(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndividualIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individual[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndividualId<TError = unknown>(
  args: InferRequestType<(typeof client.individual)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndividualIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.individual)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.individual[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMartCaseObjectCategoryTaxonKey(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/case/:object_category/:taxon', args] as const
}

export function useGetMartCaseObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartCaseObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.case[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMartCaseObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartCaseObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.case)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.case[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMartDiseaseObjectCategoryTaxonKey(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/disease/:object_category/:taxon', args] as const
}

export function useGetMartDiseaseObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartDiseaseObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.disease[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMartDiseaseObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartDiseaseObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.disease)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.disease[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMartGeneObjectCategoryTaxonKey(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
) {
  return ['mart', '/mart/gene/:object_category/:taxon', args] as const
}

export function useGetMartGeneObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartGeneObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.gene[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMartGeneObjectCategoryTaxon<TError = unknown>(
  args: InferRequestType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartGeneObjectCategoryTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.gene)[':object_category'][':taxon']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.gene[':object_category'][':taxon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMartOrthologTaxon1Taxon2Key(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
) {
  return ['mart', '/mart/ortholog/:taxon1/:taxon2', args] as const
}

export function useGetMartOrthologTaxon1Taxon2<TError = unknown>(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartOrthologTaxon1Taxon2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.ortholog[':taxon1'][':taxon2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMartOrthologTaxon1Taxon2<TError = unknown>(
  args: InferRequestType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartOrthologTaxon1Taxon2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.ortholog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.ortholog[':taxon1'][':taxon2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMartParalogTaxon1Taxon2Key(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
) {
  return ['mart', '/mart/paralog/:taxon1/:taxon2', args] as const
}

export function useGetMartParalogTaxon1Taxon2<TError = unknown>(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartParalogTaxon1Taxon2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.paralog[':taxon1'][':taxon2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMartParalogTaxon1Taxon2<TError = unknown>(
  args: InferRequestType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMartParalogTaxon1Taxon2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mart.paralog)[':taxon1'][':taxon2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mart.paralog[':taxon1'][':taxon2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetadataDatasetsKey() {
  return ['metadata', '/metadata/datasets'] as const
}

export function useGetMetadataDatasets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataDatasetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.datasets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataDatasets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataDatasetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.datasets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMmeDiseaseKey() {
  return ['mme', '/mme/disease', 'POST'] as const
}

export function usePostMmeDisease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.disease.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mme.disease.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmeDiseaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mme.disease.$post> }) =>
        parseResponse(client.mme.disease.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMmeFlyKey() {
  return ['mme', '/mme/fly', 'POST'] as const
}

export function usePostMmeFly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.fly.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mme.fly.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmeFlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mme.fly.$post> }) =>
        parseResponse(client.mme.fly.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMmeMouseKey() {
  return ['mme', '/mme/mouse', 'POST'] as const
}

export function usePostMmeMouse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.mouse.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mme.mouse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmeMouseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mme.mouse.$post> }) =>
        parseResponse(client.mme.mouse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMmeNematodeKey() {
  return ['mme', '/mme/nematode', 'POST'] as const
}

export function usePostMmeNematode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.nematode.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mme.nematode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmeNematodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mme.nematode.$post> }) =>
        parseResponse(client.mme.nematode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMmeZebrafishKey() {
  return ['mme', '/mme/zebrafish', 'POST'] as const
}

export function usePostMmeZebrafish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mme.zebrafish.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mme.zebrafish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMmeZebrafishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mme.zebrafish.$post> }) =>
        parseResponse(client.mme.zebrafish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNlpAnnotateIndexKey(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
) {
  return ['nlp', '/nlp/annotate/', args] as const
}

export function useGetNlpAnnotateIndex<TError = unknown>(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNlpAnnotateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nlp.annotate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNlpAnnotateIndex<TError = unknown>(
  args: InferRequestType<typeof client.nlp.annotate.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNlpAnnotateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nlp.annotate.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNlpAnnotateIndexKey() {
  return ['nlp', '/nlp/annotate/', 'POST'] as const
}

export function usePostNlpAnnotateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nlp.annotate.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNlpAnnotateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nlp.annotate.index.$post> }) =>
        parseResponse(client.nlp.annotate.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNlpAnnotateEntitiesKey(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
) {
  return ['nlp', '/nlp/annotate/entities', args] as const
}

export function useGetNlpAnnotateEntities<TError = unknown>(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNlpAnnotateEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nlp.annotate.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNlpAnnotateEntities<TError = unknown>(
  args: InferRequestType<typeof client.nlp.annotate.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNlpAnnotateEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nlp.annotate.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNlpAnnotateEntitiesKey() {
  return ['nlp', '/nlp/annotate/entities', 'POST'] as const
}

export function usePostNlpAnnotateEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.nlp.annotate.entities.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.nlp.annotate.entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNlpAnnotateEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.nlp.annotate.entities.$post> },
      ) => parseResponse(client.nlp.annotate.entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOntolIdentifierIndexKey(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
) {
  return ['ontol', '/ontol/identifier/', args] as const
}

export function useGetOntolIdentifierIndex<TError = unknown>(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontol.identifier.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntolIdentifierIndex<TError = unknown>(
  args: InferRequestType<typeof client.ontol.identifier.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontol.identifier.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOntolIdentifierIndexKey() {
  return ['ontol', '/ontol/identifier/', 'POST'] as const
}

export function usePostOntolIdentifierIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ontol.identifier.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ontol.identifier.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOntolIdentifierIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ontol.identifier.index.$post> },
      ) => parseResponse(client.ontol.identifier.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonKey(
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

export function useGetOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ontol.information_content[':subject_category'][':object_category'][
            ':subject_taxon'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntolInformationContentSubjectCategoryObjectCategorySubjectTaxon<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ontol.information_content)[':subject_category'][':object_category'][':subject_taxon']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ontol.information_content[':subject_category'][':object_category'][
            ':subject_taxon'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOntolLabelerIndexKey(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
) {
  return ['ontol', '/ontol/labeler/', args] as const
}

export function useGetOntolLabelerIndex<TError = unknown>(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolLabelerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontol.labeler.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntolLabelerIndex<TError = unknown>(
  args: InferRequestType<typeof client.ontol.labeler.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolLabelerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.ontol.labeler.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontol.labeler.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntolSubgraphOntologyNodeKey(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
) {
  return ['ontol', '/ontol/subgraph/:ontology/:node', args] as const
}

export function useGetOntolSubgraphOntologyNode<TError = unknown>(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolSubgraphOntologyNodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontol.subgraph[':ontology'][':node'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntolSubgraphOntologyNode<TError = unknown>(
  args: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntolSubgraphOntologyNodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontol.subgraph[':ontology'][':node'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOntolSubgraphOntologyNodeKey() {
  return ['ontol', '/ontol/subgraph/:ontology/:node', 'POST'] as const
}

export function usePostOntolSubgraphOntologyNode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOntolSubgraphOntologyNodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ontol.subgraph)[':ontology'][':node']['$post']> },
      ) => parseResponse(client.ontol.subgraph[':ontology'][':node'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOntologySharedSubjectObjectKey(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
) {
  return ['ontology', '/ontology/shared/:subject/:object', args] as const
}

export function useGetOntologySharedSubjectObject<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologySharedSubjectObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontology.shared[':subject'][':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologySharedSubjectObject<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.shared)[':subject'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologySharedSubjectObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.shared)[':subject'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontology.shared[':subject'][':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologySubsetIdKey(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
) {
  return ['ontology', '/ontology/subset/:id', args] as const
}

export function useGetOntologySubsetId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologySubsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.subset[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologySubsetId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.subset)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologySubsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.subset)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.subset[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermIdKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
) {
  return ['ontology', '/ontology/term/:id', args] as const
}

export function useGetOntologyTermId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOntologyTermIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOntologyTermIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermIdGraphKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/graph', args] as const
}

export function useGetOntologyTermIdGraph<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdGraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].graph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermIdGraph<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['graph']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdGraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['graph']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].graph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermIdSubgraphKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/subgraph', args] as const
}

export function useGetOntologyTermIdSubgraph<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdSubgraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].subgraph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermIdSubgraph<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subgraph']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdSubgraphKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subgraph']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].subgraph.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermIdSubsetsKey(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
) {
  return ['ontology', '/ontology/term/:id/subsets', args] as const
}

export function useGetOntologyTermIdSubsets<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdSubsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].subsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermIdSubsets<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':id']['subsets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermIdSubsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':id']['subsets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':id'].subsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwlOntologyDlqueryQueryKey(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
) {
  return ['owl', '/owl/ontology/dlquery/:query', args] as const
}

export function useGetOwlOntologyDlqueryQuery<TError = unknown>(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwlOntologyDlqueryQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owl.ontology.dlquery[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwlOntologyDlqueryQuery<TError = unknown>(
  args: InferRequestType<(typeof client.owl.ontology.dlquery)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwlOntologyDlqueryQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.dlquery)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owl.ontology.dlquery[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOwlOntologySparqlQueryKey(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
) {
  return ['owl', '/owl/ontology/sparql/:query', args] as const
}

export function useGetOwlOntologySparqlQuery<TError = unknown>(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwlOntologySparqlQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owl.ontology.sparql[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOwlOntologySparqlQuery<TError = unknown>(
  args: InferRequestType<(typeof client.owl.ontology.sparql)[':query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOwlOntologySparqlQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.owl.ontology.sparql)[':query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.owl.ontology.sparql[':query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPairSimJaccardId1Id2Key(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
) {
  return ['pair', '/pair/sim/jaccard/:id1/:id2', args] as const
}

export function useGetPairSimJaccardId1Id2<TError = unknown>(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPairSimJaccardId1Id2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pair.sim.jaccard[':id1'][':id2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPairSimJaccardId1Id2<TError = unknown>(
  args: InferRequestType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPairSimJaccardId1Id2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pair.sim.jaccard)[':id1'][':id2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pair.sim.jaccard[':id1'][':id2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRelationUsageIndexKey(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
) {
  return ['relation', '/relation/usage/', args] as const
}

export function useGetRelationUsageIndex<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelationUsageIndex<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRelationUsageBetweenSubjectCategoryObjectCategoryKey(
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
) {
  return ['relation', '/relation/usage/between/:subject_category/:object_category', args] as const
}

export function useGetRelationUsageBetweenSubjectCategoryObjectCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsageBetweenSubjectCategoryObjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.relation.usage.between[':subject_category'][':object_category'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelationUsageBetweenSubjectCategoryObjectCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.relation.usage.between)[':subject_category'][':object_category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsageBetweenSubjectCategoryObjectCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.relation.usage.between[':subject_category'][':object_category'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRelationUsagePivotKey(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
) {
  return ['relation', '/relation/usage/pivot', args] as const
}

export function useGetRelationUsagePivot<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsagePivotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.pivot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelationUsagePivot<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.pivot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsagePivotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.pivot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRelationUsagePivotLabelKey(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
) {
  return ['relation', '/relation/usage/pivot/label', args] as const
}

export function useGetRelationUsagePivotLabel<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsagePivotLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.pivot.label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelationUsagePivotLabel<TError = unknown>(
  args: InferRequestType<typeof client.relation.usage.pivot.label.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRelationUsagePivotLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.relation.usage.pivot.label.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relation.usage.pivot.label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchEntityAutocompleteTermKey(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
) {
  return ['search', '/search/entity/autocomplete/:term', args] as const
}

export function useGetSearchEntityAutocompleteTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityAutocompleteTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.entity.autocomplete[':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchEntityAutocompleteTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity.autocomplete)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityAutocompleteTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity.autocomplete)[':term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search.entity.autocomplete[':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchEntityHpoPlTermKey(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
) {
  return ['search', '/search/entity/hpo-pl/:term', args] as const
}

export function useGetSearchEntityHpoPlTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityHpoPlTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.entity['hpo-pl'][':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchEntityHpoPlTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityHpoPlTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.entity)['hpo-pl'][':term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.entity['hpo-pl'][':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchEntityTermKey(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
) {
  return ['search', '/search/entity/:term', args] as const
}

export function useGetSearchEntityTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.entity[':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchEntityTerm<TError = unknown>(
  args: InferRequestType<(typeof client.search.entity)[':term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchEntityTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search.entity)[':term']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.entity[':term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimCompareKey(args: InferRequestType<typeof client.sim.compare.$get>) {
  return ['sim', '/sim/compare', args] as const
}

export function useGetSimCompare<TError = unknown>(
  args: InferRequestType<typeof client.sim.compare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCompareKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.compare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimCompare<TError = unknown>(
  args: InferRequestType<typeof client.sim.compare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimCompareKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.compare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimCompareKey() {
  return ['sim', '/sim/compare', 'POST'] as const
}

export function usePostSimCompare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.compare.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sim.compare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimCompareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sim.compare.$post> }) =>
        parseResponse(client.sim.compare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimScoreKey(args: InferRequestType<typeof client.sim.score.$get>) {
  return ['sim', '/sim/score', args] as const
}

export function useGetSimScore<TError = unknown>(
  args: InferRequestType<typeof client.sim.score.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimScoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.score.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimScore<TError = unknown>(
  args: InferRequestType<typeof client.sim.score.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimScoreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.score.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSimScoreKey() {
  return ['sim', '/sim/score', 'POST'] as const
}

export function usePostSimScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.score.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sim.score.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSimScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sim.score.$post> }) =>
        parseResponse(client.sim.score.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSimSearchKey(args: InferRequestType<typeof client.sim.search.$get>) {
  return ['sim', '/sim/search', args] as const
}

export function useGetSimSearch<TError = unknown>(
  args: InferRequestType<typeof client.sim.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimSearch<TError = unknown>(
  args: InferRequestType<typeof client.sim.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSimSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sim.search.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sim.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVariationSetIndexKey(
  args: InferRequestType<typeof client.variation.set.index.$get>,
) {
  return ['variation', '/variation/set/', args] as const
}

export function useGetVariationSetIndex<TError = unknown>(
  args: InferRequestType<typeof client.variation.set.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariationSetIndex<TError = unknown>(
  args: InferRequestType<typeof client.variation.set.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVariationSetIndexKey() {
  return ['variation', '/variation/set/', 'POST'] as const
}

export function usePostVariationSetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variation.set.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.variation.set.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVariationSetIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.variation.set.index.$post> }) =>
        parseResponse(client.variation.set.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVariationSetAnalyzeIdKey(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
) {
  return ['variation', '/variation/set/analyze/:id', args] as const
}

export function useGetVariationSetAnalyzeId<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetAnalyzeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set.analyze[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariationSetAnalyzeId<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set.analyze)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetAnalyzeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variation.set.analyze)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set.analyze[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVariationSetArchiveYearMonthDayKey(
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
) {
  return ['variation', '/variation/set/archive/:year/:month/:day', args] as const
}

export function useGetVariationSetArchiveYearMonthDay<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetArchiveYearMonthDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.variation.set.archive[':year'][':month'][':day'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariationSetArchiveYearMonthDay<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVariationSetArchiveYearMonthDayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variation.set.archive)[':year'][':month'][':day']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.variation.set.archive[':year'][':month'][':day'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVariationSetIdKey(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
) {
  return ['variation', '/variation/set/:id', args] as const
}

export function useGetVariationSetId<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVariationSetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVariationSetId<TError = unknown>(
  args: InferRequestType<(typeof client.variation.set)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVariationSetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.variation.set[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVariationSetIdKey() {
  return ['variation', '/variation/set/:id', 'PUT'] as const
}

export function usePutVariationSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.variation.set)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVariationSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.variation.set)[':id']['$put']> },
      ) => parseResponse(client.variation.set[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVariationSetIdKey() {
  return ['variation', '/variation/set/:id', 'DELETE'] as const
}

export function useDeleteVariationSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.variation.set)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.variation.set)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVariationSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.variation.set)[':id']['$delete']> },
      ) => parseResponse(client.variation.set[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
