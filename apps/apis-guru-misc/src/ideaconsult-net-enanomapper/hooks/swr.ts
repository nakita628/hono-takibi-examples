import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEnmKey() {
  return ['enm'] as const
}

export function getSelectKey() {
  return ['select'] as const
}

export function getGetEnmDbInvestigationKey(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
) {
  return ['enm', '/enm/:db/investigation', args] as const
}

export function useGetEnmDbInvestigation<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbInvestigationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].investigation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbInvestigation<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbInvestigationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].investigation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbQueryCompoundTermRepresentationKey(
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
) {
  return ['enm', '/enm/:db/query/compound/:term/:representation', args] as const
}

export function useGetEnmDbQueryCompoundTermRepresentation<TError = unknown>(
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
        ? getGetEnmDbQueryCompoundTermRepresentationKey(args)
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
                (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
          client.enm[':db'].query.compound[':term'][':representation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbQueryCompoundTermRepresentation<TError = unknown>(
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
        ? getGetEnmDbQueryCompoundTermRepresentationKey(args)
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
                (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
          client.enm[':db'].query.compound[':term'][':representation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbQuerySimilarityKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
) {
  return ['enm', '/enm/:db/query/similarity', args] as const
}

export function useGetEnmDbQuerySimilarity<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQuerySimilarityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.similarity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbQuerySimilarity<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQuerySimilarityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.similarity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbQuerySmartsKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
) {
  return ['enm', '/enm/:db/query/smarts', args] as const
}

export function useGetEnmDbQuerySmarts<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQuerySmartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.smarts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbQuerySmarts<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQuerySmartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.smarts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbQueryStudyKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
) {
  return ['enm', '/enm/:db/query/study', args] as const
}

export function useGetEnmDbQueryStudy<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQueryStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbQueryStudy<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbQueryStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].query.study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
) {
  return ['enm', '/enm/:db/substance', args] as const
}

export function useGetEnmDbSubstance<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnmDbSubstanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].substance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstance<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnmDbSubstanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].substance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceUuidKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid', args] as const
}

export function useGetEnmDbSubstanceUuid<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbSubstanceUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].substance[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstanceUuid<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbSubstanceUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enm[':db'].substance[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceUuidCompositionKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/composition', args] as const
}

export function useGetEnmDbSubstanceUuidComposition<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
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
        ? getGetEnmDbSubstanceUuidCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstanceUuidComposition<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
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
        ? getGetEnmDbSubstanceUuidCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceUuidStructuresKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/structures', args] as const
}

export function useGetEnmDbSubstanceUuidStructures<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
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
        ? getGetEnmDbSubstanceUuidStructuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].structures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstanceUuidStructures<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
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
        ? getGetEnmDbSubstanceUuidStructuresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].structures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceUuidStudyKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/study', args] as const
}

export function useGetEnmDbSubstanceUuidStudy<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbSubstanceUuidStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstanceUuidStudy<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnmDbSubstanceUuidStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnmDbSubstanceUuidStudySummaryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/studySummary', args] as const
}

export function useGetEnmDbSubstanceUuidStudySummary<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
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
        ? getGetEnmDbSubstanceUuidStudySummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].studySummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnmDbSubstanceUuidStudySummary<TError = unknown>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
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
        ? getGetEnmDbSubstanceUuidStudySummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enm[':db'].substance[':uuid'].studySummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSelectKey(args: InferRequestType<typeof client.select.$get>) {
  return ['select', '/select', args] as const
}

export function useGetSelect<TError = unknown>(
  args: InferRequestType<typeof client.select.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.select.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSelect<TError = unknown>(
  args: InferRequestType<typeof client.select.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSelectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.select.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSelectKey() {
  return ['select', '/select', 'POST'] as const
}

export function usePostSelect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.select.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSelectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.select.$post> }) =>
        parseResponse(client.select.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
