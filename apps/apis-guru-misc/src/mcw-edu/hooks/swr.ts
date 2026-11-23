import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAgrAffectedGenomicModelsTaxonIdKey(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/affectedGenomicModels/:taxonId', args] as const
}

export function useGetAgrAffectedGenomicModelsTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
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
        ? getGetAgrAffectedGenomicModelsTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agr.affectedGenomicModels[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrAffectedGenomicModelsTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
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
        ? getGetAgrAffectedGenomicModelsTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.affectedGenomicModels)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agr.affectedGenomicModels[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgrAllelesTaxonIdKey(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/alleles/:taxonId', args] as const
}

export function useGetAgrAllelesTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgrAllelesTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.alleles[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrAllelesTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.alleles)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAgrAllelesTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr.alleles)[':taxonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.alleles[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgrExpressionTaxonIdKey(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/expression/:taxonId', args] as const
}

export function useGetAgrExpressionTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
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
        ? getGetAgrExpressionTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.expression[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrExpressionTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.expression)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
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
        ? getGetAgrExpressionTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.expression)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.expression[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgrPhenotypesTaxonIdKey(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/phenotypes/:taxonId', args] as const
}

export function useGetAgrPhenotypesTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
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
        ? getGetAgrPhenotypesTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.phenotypes[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrPhenotypesTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.phenotypes)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
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
        ? getGetAgrPhenotypesTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.phenotypes)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.phenotypes[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgrVariantsTaxonIdKey(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/variants/:taxonId', args] as const
}

export function useGetAgrVariantsTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
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
        ? getGetAgrVariantsTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.variants[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrVariantsTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr.variants)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
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
        ? getGetAgrVariantsTaxonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agr.variants)[':taxonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr.variants[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgrTaxonIdKey(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
) {
  return ['agr', '/agr/:taxonId', args] as const
}

export function useGetAgrTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgrTaxonIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgrTaxonId<TError = unknown>(
  args: InferRequestType<(typeof client.agr)[':taxonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgrTaxonIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.agr)[':taxonId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agr[':taxonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnnotationsIndexKey() {
  return ['annotations', '/annotations/', 'POST'] as const
}

export function usePostAnnotationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.annotations.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.annotations.index.$post> }) =>
        parseResponse(client.annotations.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationsAccIdRgdIdKey(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/accId/:rgdId', args] as const
}

export function useGetAnnotationsAccIdRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
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
        ? getGetAnnotationsAccIdRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.accId[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsAccIdRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.accId)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
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
        ? getGetAnnotationsAccIdRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.accId)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.accId[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsCountAccIdIncludeChildrenKey(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
) {
  return ['annotations', '/annotations/count/:accId/:includeChildren', args] as const
}

export function useGetAnnotationsCountAccIdIncludeChildren<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
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
        ? getGetAnnotationsCountAccIdIncludeChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.annotations.count[':accId'][':includeChildren'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsCountAccIdIncludeChildren<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
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
        ? getGetAnnotationsCountAccIdIncludeChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.count)[':accId'][':includeChildren']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.annotations.count[':accId'][':includeChildren'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenKey(
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

export function useGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenKey(args)
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
                (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildren<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenKey(args)
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
                (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeKey(
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

export function useGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeKey(args)
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
                (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
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
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][
            ':objectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeKey(args)
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
                (typeof client.annotations.count)[':accId'][':speciesTypeKey'][':includeChildren'][':objectType']['$get']
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
          client.annotations.count[':accId'][':speciesTypeKey'][':includeChildren'][
            ':objectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsReferenceRefRgdIdKey(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
) {
  return ['annotations', '/annotations/reference/:refRgdId', args] as const
}

export function useGetAnnotationsReferenceRefRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
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
        ? getGetAnnotationsReferenceRefRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotations.reference[':refRgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsReferenceRefRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.reference)[':refRgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
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
        ? getGetAnnotationsReferenceRefRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.reference)[':refRgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotations.reference[':refRgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsRgdIdRgdIdKey(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/rgdId/:rgdId', args] as const
}

export function useGetAnnotationsRgdIdRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
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
        ? getGetAnnotationsRgdIdRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.rgdId[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsRgdIdRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
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
        ? getGetAnnotationsRgdIdRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations.rgdId)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.rgdId[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsRgdIdRgdIdOntologyPrefixKey(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
) {
  return ['annotations', '/annotations/rgdId/:rgdId/:ontologyPrefix', args] as const
}

export function useGetAnnotationsRgdIdRgdIdOntologyPrefix<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
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
        ? getGetAnnotationsRgdIdRgdIdOntologyPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsRgdIdRgdIdOntologyPrefix<TError = unknown>(
  args: InferRequestType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
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
        ? getGetAnnotationsRgdIdRgdIdOntologyPrefixKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotations.rgdId)[':rgdId'][':ontologyPrefix']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.annotations.rgdId[':rgdId'][':ontologyPrefix'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsAccIdRgdId2Key(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
) {
  return ['annotations', '/annotations/:accId/:rgdId', args] as const
}

export function useGetAnnotationsAccIdRgdId2<TError = unknown>(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
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
        ? getGetAnnotationsAccIdRgdId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations[':accId'][':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsAccIdRgdId2<TError = unknown>(
  args: InferRequestType<(typeof client.annotations)[':accId'][':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
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
        ? getGetAnnotationsAccIdRgdId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':accId'][':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations[':accId'][':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsAccIdSpeciesTypeKeyIncludeChildrenKey(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
) {
  return ['annotations', '/annotations/:accId/:speciesTypeKey/:includeChildren', args] as const
}

export function useGetAnnotationsAccIdSpeciesTypeKeyIncludeChildren<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsAccIdSpeciesTypeKeyIncludeChildrenKey(args)
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
                (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
          client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsAccIdSpeciesTypeKeyIncludeChildren<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsAccIdSpeciesTypeKeyIncludeChildrenKey(args)
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
                (typeof client.annotations)[':accId'][':speciesTypeKey'][':includeChildren']['$get']
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
          client.annotations[':accId'][':speciesTypeKey'][':includeChildren'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEnrichmentAnnotatedGenesKey() {
  return ['enrichment', '/enrichment/annotatedGenes', 'POST'] as const
}

export function usePostEnrichmentAnnotatedGenes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.annotatedGenes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.annotatedGenes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentAnnotatedGenesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enrichment.annotatedGenes.$post> },
      ) => parseResponse(client.enrichment.annotatedGenes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnrichmentDataKey() {
  return ['enrichment', '/enrichment/data', 'POST'] as const
}

export function usePostEnrichmentData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enrichment.data.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.enrichment.data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnrichmentDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.enrichment.data.$post> }) =>
        parseResponse(client.enrichment.data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGenesAffyIdAffyIdSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/affyId/:affyId/:speciesTypeKey', args] as const
}

export function useGetGenesAffyIdAffyIdSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
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
        ? getGetGenesAffyIdAffyIdSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes.affyId[':affyId'][':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesAffyIdAffyIdSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
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
        ? getGetGenesAffyIdAffyIdSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.affyId)[':affyId'][':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes.affyId[':affyId'][':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesAliasAliasSymbolSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/alias/:aliasSymbol/:speciesTypeKey', args] as const
}

export function useGetGenesAliasAliasSymbolSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
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
        ? getGetGenesAliasAliasSymbolSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesAliasAliasSymbolSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
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
        ? getGetGenesAliasAliasSymbolSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.alias)[':aliasSymbol'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.alias[':aliasSymbol'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGenesAlleleRgdIdKey(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/allele/:rgdId', args] as const
}

export function useGetGenesAlleleRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGenesAlleleRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.allele[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesAlleleRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.allele)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGenesAlleleRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.allele)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.allele[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGenesAnnotationKey() {
  return ['genes', '/genes/annotation', 'POST'] as const
}

export function usePostGenesAnnotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genes.annotation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.genes.annotation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenesAnnotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.genes.annotation.$post> }) =>
        parseResponse(client.genes.annotation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGenesAnnotationAccIdKey(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
) {
  return ['genes', '/genes/annotation/:accId', args] as const
}

export function useGetGenesAnnotationAccId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
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
        ? getGetGenesAnnotationAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.annotation[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesAnnotationAccId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
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
        ? getGetGenesAnnotationAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.annotation)[':accId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.annotation[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesAnnotationAccIdSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/annotation/:accId/:speciesTypeKey', args] as const
}

export function useGetGenesAnnotationAccIdSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
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
        ? getGetGenesAnnotationAccIdSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.annotation[':accId'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesAnnotationAccIdSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
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
        ? getGetGenesAnnotationAccIdSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.annotation)[':accId'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.annotation[':accId'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGenesKeywordKeywordSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/keyword/:keyword/:speciesTypeKey', args] as const
}

export function useGetGenesKeywordKeywordSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
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
        ? getGetGenesKeywordKeywordSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.keyword[':keyword'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesKeywordKeywordSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
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
        ? getGetGenesKeywordKeywordSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.keyword)[':keyword'][':speciesTypeKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.keyword[':keyword'][':speciesTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGenesMapMapKeyKey(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
) {
  return ['genes', '/genes/map/:mapKey', args] as const
}

export function useGetGenesMapMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesMapMapKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.map[':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesMapMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.map)[':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesMapMapKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes.map)[':mapKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.map[':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesMappedChrStartStopMapKeyKey(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['genes', '/genes/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetGenesMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetGenesMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetGenesMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGenesOrthologsKey() {
  return ['genes', '/genes/orthologs', 'POST'] as const
}

export function usePostGenesOrthologs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genes.orthologs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.genes.orthologs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenesOrthologsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.genes.orthologs.$post> }) =>
        parseResponse(client.genes.orthologs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGenesOrthologsRgdIdKey(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/orthologs/:rgdId', args] as const
}

export function useGetGenesOrthologsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
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
        ? getGetGenesOrthologsRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.orthologs[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesOrthologsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes.orthologs)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
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
        ? getGetGenesOrthologsRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.orthologs)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.orthologs[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesRegionChrStartStopMapKeyKey(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['genes', '/genes/region/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetGenesRegionChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetGenesRegionChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesRegionChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetGenesRegionChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.genes.region)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.genes.region[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGenesSpeciesSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/species/:speciesTypeKey', args] as const
}

export function useGetGenesSpeciesSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
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
        ? getGetGenesSpeciesSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.species[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesSpeciesSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes.species)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
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
        ? getGetGenesSpeciesSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes.species)[':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes.species[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesChrStartStopMapKeyKey(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['genes', '/genes/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetGenesChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
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
        ? getGetGenesChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
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
        ? getGetGenesChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':chr'][':start'][':stop'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesRgdIdKey(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
) {
  return ['genes', '/genes/:rgdId', args] as const
}

export function useGetGenesRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenesRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genes)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genes[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenesSymbolSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
) {
  return ['genes', '/genes/:symbol/:speciesTypeKey', args] as const
}

export function useGetGenesSymbolSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
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
        ? getGetGenesSymbolSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes[':symbol'][':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenesSymbolSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
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
        ? getGetGenesSymbolSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.genes)[':symbol'][':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.genes[':symbol'][':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupGeneTypesKey() {
  return ['lookup', '/lookup/geneTypes'] as const
}

export function useGetLookupGeneTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLookupGeneTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.geneTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupGeneTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLookupGeneTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.geneTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.geneTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapEnsemblGeneKey() {
  return ['lookup', '/lookup/id/map/EnsemblGene', 'POST'] as const
}

export function usePostLookupIdMapEnsemblGene<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.EnsemblGene.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapEnsemblGeneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.EnsemblGene.$post> },
      ) => parseResponse(client.lookup.id.map.EnsemblGene.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapEnsemblGeneRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblGene/:rgdId', args] as const
}

export function useGetLookupIdMapEnsemblGeneRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblGeneRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblGene[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapEnsemblGeneRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblGeneRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblGene)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblGene[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapEnsemblProteinKey() {
  return ['lookup', '/lookup/id/map/EnsemblProtein', 'POST'] as const
}

export function usePostLookupIdMapEnsemblProtein<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.EnsemblProtein.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapEnsemblProteinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.EnsemblProtein.$post> },
      ) => parseResponse(client.lookup.id.map.EnsemblProtein.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapEnsemblProteinRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblProtein/:rgdId', args] as const
}

export function useGetLookupIdMapEnsemblProteinRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblProteinRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblProtein[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapEnsemblProteinRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblProteinRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblProtein)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblProtein[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapEnsemblTranscriptKey() {
  return ['lookup', '/lookup/id/map/EnsemblTranscript', 'POST'] as const
}

export function usePostLookupIdMapEnsemblTranscript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lookup.id.map.EnsemblTranscript.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapEnsemblTranscriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.EnsemblTranscript.$post> },
      ) => parseResponse(client.lookup.id.map.EnsemblTranscript.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapEnsemblTranscriptRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/EnsemblTranscript/:rgdId', args] as const
}

export function useGetLookupIdMapEnsemblTranscriptRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblTranscriptRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapEnsemblTranscriptRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapEnsemblTranscriptRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.EnsemblTranscript)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.EnsemblTranscript[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapGTExKey() {
  return ['lookup', '/lookup/id/map/GTEx', 'POST'] as const
}

export function usePostLookupIdMapGTEx<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.GTEx.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.GTEx.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapGTExKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.id.map.GTEx.$post> }) =>
        parseResponse(client.lookup.id.map.GTEx.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapGTExRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GTEx/:rgdId', args] as const
}

export function useGetLookupIdMapGTExRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGTExRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.GTEx[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapGTExRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGTExRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GTEx)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.GTEx[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapGenBankNucleotideKey() {
  return ['lookup', '/lookup/id/map/GenBankNucleotide', 'POST'] as const
}

export function usePostLookupIdMapGenBankNucleotide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.lookup.id.map.GenBankNucleotide.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapGenBankNucleotideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.GenBankNucleotide.$post> },
      ) => parseResponse(client.lookup.id.map.GenBankNucleotide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapGenBankNucleotideRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GenBankNucleotide/:rgdId', args] as const
}

export function useGetLookupIdMapGenBankNucleotideRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGenBankNucleotideRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapGenBankNucleotideRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGenBankNucleotideRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankNucleotide)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.GenBankNucleotide[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapGenBankProteinKey() {
  return ['lookup', '/lookup/id/map/GenBankProtein', 'POST'] as const
}

export function usePostLookupIdMapGenBankProtein<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.GenBankProtein.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapGenBankProteinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.GenBankProtein.$post> },
      ) => parseResponse(client.lookup.id.map.GenBankProtein.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapGenBankProteinRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/GenBankProtein/:rgdId', args] as const
}

export function useGetLookupIdMapGenBankProteinRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGenBankProteinRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.GenBankProtein[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapGenBankProteinRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapGenBankProteinRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.GenBankProtein)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.lookup.id.map.GenBankProtein[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapHGNCKey() {
  return ['lookup', '/lookup/id/map/HGNC', 'POST'] as const
}

export function usePostLookupIdMapHGNC<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.HGNC.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.HGNC.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapHGNCKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.id.map.HGNC.$post> }) =>
        parseResponse(client.lookup.id.map.HGNC.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapHGNCRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/HGNC/:rgdId', args] as const
}

export function useGetLookupIdMapHGNCRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapHGNCRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.HGNC[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapHGNCRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapHGNCRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.HGNC)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.HGNC[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapMGIKey() {
  return ['lookup', '/lookup/id/map/MGI', 'POST'] as const
}

export function usePostLookupIdMapMGI<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.MGI.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.MGI.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapMGIKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.id.map.MGI.$post> }) =>
        parseResponse(client.lookup.id.map.MGI.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapMGIRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/MGI/:rgdId', args] as const
}

export function useGetLookupIdMapMGIRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapMGIRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.MGI[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapMGIRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapMGIRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.MGI)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.MGI[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapNCBIGeneKey() {
  return ['lookup', '/lookup/id/map/NCBIGene', 'POST'] as const
}

export function usePostLookupIdMapNCBIGene<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.NCBIGene.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.NCBIGene.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapNCBIGeneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.NCBIGene.$post> },
      ) => parseResponse(client.lookup.id.map.NCBIGene.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapNCBIGeneRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/NCBIGene/:rgdId', args] as const
}

export function useGetLookupIdMapNCBIGeneRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapNCBIGeneRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.NCBIGene[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapNCBIGeneRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapNCBIGeneRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.NCBIGene)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.NCBIGene[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLookupIdMapUniProtKey() {
  return ['lookup', '/lookup/id/map/UniProt', 'POST'] as const
}

export function usePostLookupIdMapUniProt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.id.map.UniProt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.id.map.UniProt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupIdMapUniProtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.lookup.id.map.UniProt.$post> },
      ) => parseResponse(client.lookup.id.map.UniProt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLookupIdMapUniProtRgdIdKey(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
) {
  return ['lookup', '/lookup/id/map/UniProt/:rgdId', args] as const
}

export function useGetLookupIdMapUniProtRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapUniProtRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.UniProt[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupIdMapUniProtRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
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
        ? getGetLookupIdMapUniProtRgdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.id.map.UniProt)[':rgdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.id.map.UniProt[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupMapsSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
) {
  return ['lookup', '/lookup/maps/:speciesTypeKey', args] as const
}

export function useGetLookupMapsSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
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
        ? getGetLookupMapsSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.maps[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupMapsSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
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
        ? getGetLookupMapsSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.maps)[':speciesTypeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.maps[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupSpeciesTypeKeysKey() {
  return ['lookup', '/lookup/speciesTypeKeys'] as const
}

export function useGetLookupSpeciesTypeKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
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
        ? getGetLookupSpeciesTypeKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.speciesTypeKeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupSpeciesTypeKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
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
        ? getGetLookupSpeciesTypeKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.lookup.speciesTypeKeys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.speciesTypeKeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupStandardUnitAccIdKey(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
) {
  return ['lookup', '/lookup/standardUnit/:accId', args] as const
}

export function useGetLookupStandardUnitAccId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
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
        ? getGetLookupStandardUnitAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.standardUnit[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupStandardUnitAccId<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.standardUnit)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
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
        ? getGetLookupStandardUnitAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.standardUnit)[':accId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.standardUnit[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapsChrChromosomeMapKeyKey(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
) {
  return ['maps', '/maps/chr/:chromosome/:mapKey', args] as const
}

export function useGetMapsChrChromosomeMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
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
        ? getGetMapsChrChromosomeMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.maps.chr[':chromosome'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsChrChromosomeMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
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
        ? getGetMapsChrChromosomeMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.chr)[':chromosome'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.maps.chr[':chromosome'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapsChrMapKeyKey(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
) {
  return ['maps', '/maps/chr/:mapKey', args] as const
}

export function useGetMapsChrMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMapsChrMapKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps.chr[':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsChrMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps.chr)[':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMapsChrMapKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps.chr)[':mapKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps.chr[':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapsSpeciesTypeKeyKey(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
) {
  return ['maps', '/maps/:speciesTypeKey', args] as const
}

export function useGetMapsSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsSpeciesTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.maps)[':speciesTypeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsSpeciesTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.maps)[':speciesTypeKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps[':speciesTypeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyOntAccIdKey(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
) {
  return ['ontology', '/ontology/ont/:accId', args] as const
}

export function useGetOntologyOntAccId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyOntAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.ont[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyOntAccId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.ont)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyOntAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.ont)[':accId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.ont[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermAccId1AccId2Key(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
) {
  return ['ontology', '/ontology/term/:accId1/:accId2', args] as const
}

export function useGetOntologyTermAccId1AccId2<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
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
        ? getGetOntologyTermAccId1AccId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontology.term[':accId1'][':accId2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermAccId1AccId2<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
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
        ? getGetOntologyTermAccId1AccId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ontology.term)[':accId1'][':accId2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ontology.term[':accId1'][':accId2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOntologyTermAccIdKey(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
) {
  return ['ontology', '/ontology/term/:accId', args] as const
}

export function useGetOntologyTermAccId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOntologyTermAccId<TError = unknown>(
  args: InferRequestType<(typeof client.ontology.term)[':accId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOntologyTermAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ontology.term)[':accId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ontology.term[':accId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPathwaysDiagramsSearchSearchStringKey(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
) {
  return ['pathways', '/pathways/diagrams/search/:searchString', args] as const
}

export function useGetPathwaysDiagramsSearchSearchString<TError = unknown>(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
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
        ? getGetPathwaysDiagramsSearchSearchStringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pathways.diagrams.search[':searchString'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPathwaysDiagramsSearchSearchString<TError = unknown>(
  args: InferRequestType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
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
        ? getGetPathwaysDiagramsSearchSearchStringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagrams.search)[':searchString']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pathways.diagrams.search[':searchString'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPathwaysDiagramsForCategoryCategoryKey(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
) {
  return ['pathways', '/pathways/diagramsForCategory/:category', args] as const
}

export function useGetPathwaysDiagramsForCategoryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
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
        ? getGetPathwaysDiagramsForCategoryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pathways.diagramsForCategory[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPathwaysDiagramsForCategoryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
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
        ? getGetPathwaysDiagramsForCategoryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pathways.diagramsForCategory)[':category']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pathways.diagramsForCategory[':category'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringKey(
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

export function useGetPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString<TError = unknown>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringKey(args)
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
                (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
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
          client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringKey(args)
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
                (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':refRgdId'][':termString']['$get']
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
          client.phenotype.phenominer.chart[':speciesTypeKey'][':refRgdId'][':termString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPhenotypePhenominerChartSpeciesTypeKeyTermStringKey(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
) {
  return ['phenotype', '/phenotype/phenominer/chart/:speciesTypeKey/:termString', args] as const
}

export function useGetPhenotypePhenominerChartSpeciesTypeKeyTermString<TError = unknown>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhenotypePhenominerChartSpeciesTypeKeyTermStringKey(args)
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
                (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
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
          client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhenotypePhenominerChartSpeciesTypeKeyTermString<TError = unknown>(
  args: InferRequestType<
    (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPhenotypePhenominerChartSpeciesTypeKeyTermStringKey(args)
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
                (typeof client.phenotype.phenominer.chart)[':speciesTypeKey'][':termString']['$get']
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
          client.phenotype.phenominer.chart[':speciesTypeKey'][':termString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetQtlsMappedChrStartStopMapKeyKey(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['qtls', '/qtls/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetQtlsMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetQtlsMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQtlsMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetQtlsMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.qtls.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.qtls.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetQtlsChrStartStopMapKeyKey(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['qtls', '/qtls/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetQtlsChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
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
        ? getGetQtlsChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQtlsChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
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
        ? getGetQtlsChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.qtls)[':chr'][':start'][':stop'][':mapKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.qtls[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQtlsRgdIdKey(args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>) {
  return ['qtls', '/qtls/:rgdId', args] as const
}

export function useGetQtlsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQtlsRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qtls[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQtlsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.qtls)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQtlsRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.qtls)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.qtls[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSslpsMappedChrStartStopMapKeyKey(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
) {
  return ['sslps', '/sslps/mapped/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetSslpsMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetSslpsMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSslpsMappedChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetSslpsMappedChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sslps.mapped)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sslps.mapped[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/activeObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.activeObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.activeObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/geneType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.geneType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.geneType[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectStatus/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectStatus)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectStatus[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectWithRefSeq/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithRefSeq)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithRefSeq[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/objectWithReference/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithReference)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithReference[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDKey(
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

export function useGetStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/proteinInteraction/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.proteinInteraction)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.proteinInteraction[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/qtlInheritanceType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.qtlInheritanceType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.qtlInheritanceType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/retiredObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.retiredObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.retiredObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/strainType/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.strainType)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.strainType[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/withdrawnObject/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.withdrawnObject)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.withdrawnObject[':speciesTypeKey'][':dateYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsCountXdbSpeciesTypeKeyDateYYYYMMDDKey(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
) {
  return ['stats', '/stats/count/xdb/:speciesTypeKey/:dateYYYYMMDD', args] as const
}

export function useGetStatsCountXdbSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountXdbSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsCountXdbSpeciesTypeKeyDateYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsCountXdbSpeciesTypeKeyDateYYYYMMDDKey(args)
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
                (typeof client.stats.count.xdb)[':speciesTypeKey'][':dateYYYYMMDD']['$get']
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
          client.stats.count.xdb[':speciesTypeKey'][':dateYYYYMMDD'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.activeObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.activeObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.geneType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.geneType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectStatus)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectStatus[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithRefSeq)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithRefSeq[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithReference)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithReference[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.objectWithXdb)[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.objectWithXdb[':speciesTypeKey'][':objectKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.proteinInteraction)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.proteinInteraction[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.qtlInheritanceType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.qtlInheritanceType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.retiredObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.retiredObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.strainType)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.strainType[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.withdrawnObject)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.withdrawnObject[':speciesTypeKey'][':dateFromYYYYMMDD'][
            ':dateToYYYYMMDD'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(
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

export function useGetStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<TError = unknown>(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDD<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDKey(args)
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
                (typeof client.stats.diff.xdb)[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD']['$get']
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
          client.stats.diff.xdb[':speciesTypeKey'][':dateFromYYYYMMDD'][':dateToYYYYMMDD'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStatsTermAccIdFilterAccIdKey(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
) {
  return ['stats', '/stats/term/:accId/:filterAccId', args] as const
}

export function useGetStatsTermAccIdFilterAccId<TError = unknown>(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
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
        ? getGetStatsTermAccIdFilterAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.term[':accId'][':filterAccId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsTermAccIdFilterAccId<TError = unknown>(
  args: InferRequestType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
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
        ? getGetStatsTermAccIdFilterAccIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.stats.term)[':accId'][':filterAccId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.stats.term[':accId'][':filterAccId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStrainsAllKey() {
  return ['strains', '/strains/all'] as const
}

export function useGetStrainsAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStrainsAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.strains.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStrainsAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStrainsAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.strains.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.strains.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStrainsChrStartStopMapKeyKey(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
) {
  return ['strains', '/strains/:chr/:start/:stop/:mapKey', args] as const
}

export function useGetStrainsChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetStrainsChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.strains[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStrainsChrStartStopMapKey<TError = unknown>(
  args: InferRequestType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
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
        ? getGetStrainsChrStartStopMapKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.strains)[':chr'][':start'][':stop'][':mapKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.strains[':chr'][':start'][':stop'][':mapKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetStrainsRgdIdKey(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
) {
  return ['strains', '/strains/:rgdId', args] as const
}

export function useGetStrainsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStrainsRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.strains[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStrainsRgdId<TError = unknown>(
  args: InferRequestType<(typeof client.strains)[':rgdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStrainsRgdIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.strains)[':rgdId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.strains[':rgdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
