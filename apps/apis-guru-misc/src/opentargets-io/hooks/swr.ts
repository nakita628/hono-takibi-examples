import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPlatformKey() {
  return ['platform'] as const
}

export function getGetPlatformDocsKey() {
  return ['platform', '/platform/docs'] as const
}

export function useGetPlatformDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformDocsSwaggerUiKey() {
  return ['platform', '/platform/docs/swagger-ui'] as const
}

export function useGetPlatformDocsSwaggerUi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
        >
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
        ? getGetPlatformDocsSwaggerUiKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.docs['swagger-ui'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformDocsSwaggerUi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
        >
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
        ? getGetPlatformDocsSwaggerUiKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.docs['swagger-ui'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPrivateAutocompleteKey(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
) {
  return ['platform', '/platform/private/autocomplete', args] as const
}

export function useGetPlatformPrivateAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPrivateBesthitsearchKey() {
  return ['platform', '/platform/private/besthitsearch', 'POST'] as const
}

export function usePostPlatformPrivateBesthitsearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.besthitsearch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.besthitsearch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateBesthitsearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.besthitsearch.$post> },
      ) => parseResponse(client.platform.private.besthitsearch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlatformPrivateDiseaseKey() {
  return ['platform', '/platform/private/disease', 'POST'] as const
}

export function usePostPlatformPrivateDisease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.disease.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.disease.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateDiseaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.disease.$post> },
      ) => parseResponse(client.platform.private.disease.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPrivateDiseaseDiseaseKey(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
) {
  return ['platform', '/platform/private/disease/:disease', args] as const
}

export function useGetPlatformPrivateDiseaseDisease<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateDiseaseDiseaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.disease[':disease'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateDiseaseDisease<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateDiseaseDiseaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.disease[':disease'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPrivateDrugDRUGIDKey(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
) {
  return ['platform', '/platform/private/drug/:DRUG_ID', args] as const
}

export function useGetPlatformPrivateDrugDRUGID<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateDrugDRUGIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.drug[':DRUG_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateDrugDRUGID<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateDrugDRUGIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.drug[':DRUG_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPrivateEcoECOIDKey(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
) {
  return ['platform', '/platform/private/eco/:ECO_ID', args] as const
}

export function useGetPlatformPrivateEcoECOID<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateEcoECOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.eco[':ECO_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateEcoECOID<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateEcoECOIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.eco[':ECO_ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPrivateEnrichmentTargetsKey() {
  return ['platform', '/platform/private/enrichment/targets', 'POST'] as const
}

export function usePostPlatformPrivateEnrichmentTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.enrichment.targets.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.enrichment.targets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateEnrichmentTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.enrichment.targets.$post> },
      ) => parseResponse(client.platform.private.enrichment.targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPrivateQuicksearchKey(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
) {
  return ['platform', '/platform/private/quicksearch', args] as const
}

export function useGetPlatformPrivateQuicksearch<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateQuicksearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.quicksearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateQuicksearch<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.quicksearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateQuicksearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.private.quicksearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPrivateRelationKey() {
  return ['platform', '/platform/private/relation', 'POST'] as const
}

export function usePostPlatformPrivateRelation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.relation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.relation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateRelationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.relation.$post> },
      ) => parseResponse(client.platform.private.relation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPrivateRelationDiseaseDiseaseKey(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
) {
  return ['platform', '/platform/private/relation/disease/:disease', args] as const
}

export function useGetPlatformPrivateRelationDiseaseDisease<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
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
        ? getGetPlatformPrivateRelationDiseaseDiseaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.platform.private.relation.disease[':disease'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateRelationDiseaseDisease<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
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
        ? getGetPlatformPrivateRelationDiseaseDiseaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.platform.private.relation.disease[':disease'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPrivateRelationTargetTargetKey(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
) {
  return ['platform', '/platform/private/relation/target/:target', args] as const
}

export function useGetPlatformPrivateRelationTargetTarget<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateRelationTargetTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.relation.target[':target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateRelationTargetTarget<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateRelationTargetTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.relation.target[':target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPrivateTargetKey() {
  return ['platform', '/platform/private/target', 'POST'] as const
}

export function usePostPlatformPrivateTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.target.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.target.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.target.$post> },
      ) => parseResponse(client.platform.private.target.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPrivateTargetExpressionKey(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
) {
  return ['platform', '/platform/private/target/expression', args] as const
}

export function useGetPlatformPrivateTargetExpression<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateTargetExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.target.expression.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateTargetExpression<TError = unknown>(
  args: InferRequestType<typeof client.platform.private.target.expression.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateTargetExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.target.expression.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPrivateTargetExpressionKey() {
  return ['platform', '/platform/private/target/expression', 'POST'] as const
}

export function usePostPlatformPrivateTargetExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.target.expression.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.private.target.expression.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPrivateTargetExpressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.private.target.expression.$post> },
      ) => parseResponse(client.platform.private.target.expression.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPrivateTargetTargetKey(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
) {
  return ['platform', '/platform/private/target/:target', args] as const
}

export function useGetPlatformPrivateTargetTarget<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateTargetTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.target[':target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPrivateTargetTarget<TError = unknown>(
  args: InferRequestType<(typeof client.platform.private.target)[':target']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPrivateTargetTargetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.private.target[':target'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicAssociationKey(
  args: InferRequestType<typeof client.platform.public.association.$get>,
) {
  return ['platform', '/platform/public/association', args] as const
}

export function useGetPlatformPublicAssociation<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicAssociationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.association.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicAssociation<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.association.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicAssociationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.association.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicAssociationFilterKey(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
) {
  return ['platform', '/platform/public/association/filter', args] as const
}

export function useGetPlatformPublicAssociationFilter<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicAssociationFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.association.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicAssociationFilter<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.association.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicAssociationFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.association.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPublicAssociationFilterKey() {
  return ['platform', '/platform/public/association/filter', 'POST'] as const
}

export function usePostPlatformPublicAssociationFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.association.filter.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.public.association.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPublicAssociationFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.public.association.filter.$post> },
      ) => parseResponse(client.platform.public.association.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPublicEvidenceKey(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
) {
  return ['platform', '/platform/public/evidence', args] as const
}

export function useGetPlatformPublicEvidence<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicEvidence<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.evidence.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicEvidenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.evidence.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPublicEvidenceKey() {
  return ['platform', '/platform/public/evidence', 'POST'] as const
}

export function usePostPlatformPublicEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.public.evidence.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPublicEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.public.evidence.$post> },
      ) => parseResponse(client.platform.public.evidence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPublicEvidenceFilterKey(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
) {
  return ['platform', '/platform/public/evidence/filter', args] as const
}

export function useGetPlatformPublicEvidenceFilter<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicEvidenceFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.evidence.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicEvidenceFilter<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.evidence.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicEvidenceFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.evidence.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlatformPublicEvidenceFilterKey() {
  return ['platform', '/platform/public/evidence/filter', 'POST'] as const
}

export function usePostPlatformPublicEvidenceFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.evidence.filter.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.platform.public.evidence.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlatformPublicEvidenceFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.platform.public.evidence.filter.$post> },
      ) => parseResponse(client.platform.public.evidence.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlatformPublicSearchKey(
  args: InferRequestType<typeof client.platform.public.search.$get>,
) {
  return ['platform', '/platform/public/search', args] as const
}

export function useGetPlatformPublicSearch<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicSearch<TError = unknown>(
  args: InferRequestType<typeof client.platform.public.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlatformPublicSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicUtilsMetricsKey() {
  return ['platform', '/platform/public/utils/metrics'] as const
}

export function useGetPlatformPublicUtilsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
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
        ? getGetPlatformPublicUtilsMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicUtilsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
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
        ? getGetPlatformPublicUtilsMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicUtilsPingKey() {
  return ['platform', '/platform/public/utils/ping'] as const
}

export function useGetPlatformPublicUtilsPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
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
        ? getGetPlatformPublicUtilsPingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.utils.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicUtilsPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
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
        ? getGetPlatformPublicUtilsPingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.utils.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicUtilsStatsKey() {
  return ['platform', '/platform/public/utils/stats'] as const
}

export function useGetPlatformPublicUtilsStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
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
        ? getGetPlatformPublicUtilsStatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.utils.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicUtilsStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
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
        ? getGetPlatformPublicUtilsStatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.public.utils.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicUtilsTherapeuticareasKey() {
  return ['platform', '/platform/public/utils/therapeuticareas'] as const
}

export function useGetPlatformPublicUtilsTherapeuticareas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
        >
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
        ? getGetPlatformPublicUtilsTherapeuticareasKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.therapeuticareas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicUtilsTherapeuticareas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
        >
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
        ? getGetPlatformPublicUtilsTherapeuticareasKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.therapeuticareas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformPublicUtilsVersionKey() {
  return ['platform', '/platform/public/utils/version'] as const
}

export function useGetPlatformPublicUtilsVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
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
        ? getGetPlatformPublicUtilsVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformPublicUtilsVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
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
        ? getGetPlatformPublicUtilsVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.platform.public.utils.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlatformSwaggerKey() {
  return ['platform', '/platform/swagger'] as const
}

export function useGetPlatformSwagger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformSwaggerKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.swagger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlatformSwagger<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlatformSwaggerKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.platform.swagger.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
