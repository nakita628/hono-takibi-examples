import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApi2Key() {
  return ['api2'] as const
}

export function getGetApi2JsonAnonymizeSourceAnonymizedTokenKey(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
) {
  return ['api2', '/api2/json/anonymize/:source/:anonymized/:token', args] as const
}

export function useGetApi2JsonAnonymizeSourceAnonymizedToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
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
        ? getGetApi2JsonAnonymizeSourceAnonymizedTokenKey(args)
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
                (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
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
          client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonAnonymizeSourceAnonymizedToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
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
        ? getGetApi2JsonAnonymizeSourceAnonymizedTokenKey(args)
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
                (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
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
          client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiKeyInfoKey() {
  return ['api2', '/api2/json/apiKeyInfo'] as const
}

export function useGetApi2JsonApiKeyInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiKeyInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiKeyInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiKeyInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiKeyInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiKeyInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiServicesKey() {
  return ['api2', '/api2/json/apiServices'] as const
}

export function useGetApi2JsonApiServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
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
        ? getGetApi2JsonApiServicesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiServices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiServices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
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
        ? getGetApi2JsonApiServicesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiServices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiStatusKey() {
  return ['api2', '/api2/json/apiStatus'] as const
}

export function useGetApi2JsonApiStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiStatus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiStatus.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiUsageKey() {
  return ['api2', '/api2/json/apiUsage'] as const
}

export function useGetApi2JsonApiUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiUsage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiUsage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonApiUsageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiUsage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiUsageHistoryKey() {
  return ['api2', '/api2/json/apiUsageHistory'] as const
}

export function useGetApi2JsonApiUsageHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
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
        ? getGetApi2JsonApiUsageHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiUsageHistory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiUsageHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
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
        ? getGetApi2JsonApiUsageHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.apiUsageHistory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonApiUsageHistoryAggregateKey() {
  return ['api2', '/api2/json/apiUsageHistoryAggregate'] as const
}

export function useGetApi2JsonApiUsageHistoryAggregate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
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
        ? getGetApi2JsonApiUsageHistoryAggregateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.apiUsageHistoryAggregate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonApiUsageHistoryAggregate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
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
        ? getGetApi2JsonApiUsageHistoryAggregateKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.apiUsageHistoryAggregate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullKey(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/castegroupIndianFull/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function useGetApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonCastegroupIndianFullBatchKey() {
  return ['api2', '/api2/json/castegroupIndianFullBatch', 'POST'] as const
}

export function usePostApi2JsonCastegroupIndianFullBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.castegroupIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonCastegroupIndianFullBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post> },
      ) => parseResponse(client.api2.json.castegroupIndianFullBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameCandidates/:chineseSurnameLatin/:chineseGivenNameLatin',
    args,
  ] as const
}

export function useGetApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
        ? getGetApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinKey(args)
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
                (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
          client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
        ? getGetApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinKey(args)
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
                (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
          client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonChineseNameCandidatesBatchKey() {
  return ['api2', '/api2/json/chineseNameCandidatesBatch', 'POST'] as const
}

export function usePostApi2JsonChineseNameCandidatesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonChineseNameCandidatesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post> },
      ) => parseResponse(client.api2.json.chineseNameCandidatesBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApi2JsonChineseNameCandidatesGenderBatchKey() {
  return ['api2', '/api2/json/chineseNameCandidatesGenderBatch', 'POST'] as const
}

export function usePostApi2JsonChineseNameCandidatesGenderBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonChineseNameCandidatesGenderBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>
        },
      ) =>
        parseResponse(client.api2.json.chineseNameCandidatesGenderBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameGenderCandidates/:chineseSurnameLatin/:chineseGivenNameLatin/:knownGender',
    args,
  ] as const
}

export function useGetApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
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
        ? getGetApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderKey(
            args,
          )
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
                (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
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
          client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ][':knownGender'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
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
        ? getGetApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderKey(
            args,
          )
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
                (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
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
          client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ][':knownGender'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameKey(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameMatch/:chineseSurnameLatin/:chineseGivenNameLatin/:chineseName',
    args,
  ] as const
}

export function useGetApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
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
        ? getGetApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameKey(args)
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
                (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
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
          client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
            ':chineseName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
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
        ? getGetApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameKey(args)
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
                (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
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
          client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
            ':chineseName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonChineseNameMatchBatchKey() {
  return ['api2', '/api2/json/chineseNameMatchBatch', 'POST'] as const
}

export function usePostApi2JsonChineseNameMatchBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonChineseNameMatchBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post> },
      ) => parseResponse(client.api2.json.chineseNameMatchBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToKey(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/corridor/:countryIso2From/:firstNameFrom/:lastNameFrom/:countryIso2To/:firstNameTo/:lastNameTo',
    args,
  ] as const
}

export function useGetApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
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
        ? getGetApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToKey(
            args,
          )
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
                (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
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
          client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
            ':countryIso2To'
          ][':firstNameTo'][':lastNameTo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
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
        ? getGetApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToKey(
            args,
          )
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
                (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
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
          client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
            ':countryIso2To'
          ][':firstNameTo'][':lastNameTo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonCorridorBatchKey() {
  return ['api2', '/api2/json/corridorBatch', 'POST'] as const
}

export function usePostApi2JsonCorridorBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.corridorBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.corridorBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonCorridorBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.corridorBatch.$post> },
      ) => parseResponse(client.api2.json.corridorBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonCountryPersonalNameFullKey(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
) {
  return ['api2', '/api2/json/country/:personalNameFull', args] as const
}

export function useGetApi2JsonCountryPersonalNameFull<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonCountryPersonalNameFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.country[':personalNameFull'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonCountryPersonalNameFull<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonCountryPersonalNameFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.country[':personalNameFull'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonCountryBatchKey() {
  return ['api2', '/api2/json/countryBatch', 'POST'] as const
}

export function usePostApi2JsonCountryBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.countryBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.countryBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonCountryBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.countryBatch.$post> },
      ) => parseResponse(client.api2.json.countryBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonDiasporaCountryIso2FirstNameLastNameKey(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/diaspora/:countryIso2/:firstName/:lastName', args] as const
}

export function useGetApi2JsonDiasporaCountryIso2FirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonDiasporaCountryIso2FirstNameLastNameKey(args)
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
                (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
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
          client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonDiasporaCountryIso2FirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonDiasporaCountryIso2FirstNameLastNameKey(args)
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
                (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
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
          client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonDiasporaBatchKey() {
  return ['api2', '/api2/json/diasporaBatch', 'POST'] as const
}

export function usePostApi2JsonDiasporaBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.diasporaBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.diasporaBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonDiasporaBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.diasporaBatch.$post> },
      ) => parseResponse(client.api2.json.diasporaBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderFirstNameKey(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
) {
  return ['api2', '/api2/json/gender/:firstName', args] as const
}

export function useGetApi2JsonGenderFirstName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFirstNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.gender[':firstName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderFirstName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFirstNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.gender[':firstName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonGenderFirstNameLastNameKey(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
) {
  return ['api2', '/api2/json/gender/:firstName/:lastName', args] as const
}

export function useGetApi2JsonGenderFirstNameLastName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFirstNameLastNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.gender[':firstName'][':lastName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderFirstNameLastName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFirstNameLastNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.gender[':firstName'][':lastName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderBatchKey() {
  return ['api2', '/api2/json/genderBatch', 'POST'] as const
}

export function usePostApi2JsonGenderBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderBatch.$post> },
      ) => parseResponse(client.api2.json.genderBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderChineseNameChineseNameKey(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/genderChineseName/:chineseName', args] as const
}

export function useGetApi2JsonGenderChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.genderChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.genderChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderChineseNameBatchKey() {
  return ['api2', '/api2/json/genderChineseNameBatch', 'POST'] as const
}

export function usePostApi2JsonGenderChineseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderChineseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post> },
      ) => parseResponse(client.api2.json.genderChineseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinKey(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/genderChineseNamePinyin/:chineseSurnameLatin/:chineseGivenNameLatin',
    args,
  ] as const
}

export function useGetApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
        ? getGetApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinKey(args)
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
                (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
          client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
        ? getGetApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinKey(args)
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
                (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
          client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderChineseNamePinyinBatchKey() {
  return ['api2', '/api2/json/genderChineseNamePinyinBatch', 'POST'] as const
}

export function usePostApi2JsonGenderChineseNamePinyinBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderChineseNamePinyinBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post> },
      ) => parseResponse(client.api2.json.genderChineseNamePinyinBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderFullFullNameKey(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
) {
  return ['api2', '/api2/json/genderFull/:fullName', args] as const
}

export function useGetApi2JsonGenderFullFullName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFullFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.genderFull[':fullName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderFullFullName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonGenderFullFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.genderFull[':fullName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderFullBatchKey() {
  return ['api2', '/api2/json/genderFullBatch', 'POST'] as const
}

export function usePostApi2JsonGenderFullBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderFullBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderFullBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderFullBatch.$post> },
      ) => parseResponse(client.api2.json.genderFullBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderFullGeoFullNameCountryIso2Key(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/genderFullGeo/:fullName/:countryIso2', args] as const
}

export function useGetApi2JsonGenderFullGeoFullNameCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
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
        ? getGetApi2JsonGenderFullGeoFullNameCountryIso2Key(args)
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
                (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
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
          client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderFullGeoFullNameCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
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
        ? getGetApi2JsonGenderFullGeoFullNameCountryIso2Key(args)
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
                (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
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
          client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderFullGeoBatchKey() {
  return ['api2', '/api2/json/genderFullGeoBatch', 'POST'] as const
}

export function usePostApi2JsonGenderFullGeoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullGeoBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderFullGeoBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post> },
      ) => parseResponse(client.api2.json.genderFullGeoBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderGeoFirstNameLastNameCountryIso2Key(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/genderGeo/:firstName/:lastName/:countryIso2', args] as const
}

export function useGetApi2JsonGenderGeoFirstNameLastNameCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
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
        ? getGetApi2JsonGenderGeoFirstNameLastNameCountryIso2Key(args)
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
                (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
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
          client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderGeoFirstNameLastNameCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
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
        ? getGetApi2JsonGenderGeoFirstNameLastNameCountryIso2Key(args)
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
                (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
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
          client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderGeoBatchKey() {
  return ['api2', '/api2/json/genderGeoBatch', 'POST'] as const
}

export function usePostApi2JsonGenderGeoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderGeoBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderGeoBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderGeoBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderGeoBatch.$post> },
      ) => parseResponse(client.api2.json.genderGeoBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameKey(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/genderJapaneseName/:japaneseSurname/:japaneseGivenName',
    args,
  ] as const
}

export function useGetApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
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
        ? getGetApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameKey(args)
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
                (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
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
          client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
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
        ? getGetApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameKey(args)
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
                (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
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
          client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderJapaneseNameBatchKey() {
  return ['api2', '/api2/json/genderJapaneseNameBatch', 'POST'] as const
}

export function usePostApi2JsonGenderJapaneseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderJapaneseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post> },
      ) => parseResponse(client.api2.json.genderJapaneseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonGenderJapaneseNameFullJapaneseNameKey(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
) {
  return ['api2', '/api2/json/genderJapaneseNameFull/:japaneseName', args] as const
}

export function useGetApi2JsonGenderJapaneseNameFullJapaneseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
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
        ? getGetApi2JsonGenderJapaneseNameFullJapaneseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonGenderJapaneseNameFullJapaneseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
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
        ? getGetApi2JsonGenderJapaneseNameFullJapaneseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonGenderJapaneseNameFullBatchKey() {
  return ['api2', '/api2/json/genderJapaneseNameFullBatch', 'POST'] as const
}

export function usePostApi2JsonGenderJapaneseNameFullBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonGenderJapaneseNameFullBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post> },
      ) => parseResponse(client.api2.json.genderJapaneseNameFullBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchKey() {
  return ['api2', '/api2/json/japaneseNameGenderKanjiCandidatesBatch', 'POST'] as const
}

export function usePostApi2JsonJapaneseNameGenderKanjiCandidatesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post
          >
        },
      ) =>
        parseResponse(
          client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin',
    args,
  ] as const
}

export function useGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
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
        ? getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
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
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
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
        ? getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
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
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin/:knownGender',
    args,
  ] as const
}

export function useGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
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
        ? getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
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
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':knownGender'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
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
        ? getGetApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
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
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':knownGender'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonJapaneseNameKanjiCandidatesBatchKey() {
  return ['api2', '/api2/json/japaneseNameKanjiCandidatesBatch', 'POST'] as const
}

export function usePostApi2JsonJapaneseNameKanjiCandidatesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonJapaneseNameKanjiCandidatesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>
        },
      ) =>
        parseResponse(client.api2.json.japaneseNameKanjiCandidatesBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameLatinCandidates/:japaneseSurnameKanji/:japaneseGivenNameKanji',
    args,
  ] as const
}

export function useGetApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
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
        ? getGetApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
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
          client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
            ':japaneseGivenNameKanji'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
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
        ? getGetApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
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
          client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
            ':japaneseGivenNameKanji'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonJapaneseNameLatinCandidatesBatchKey() {
  return ['api2', '/api2/json/japaneseNameLatinCandidatesBatch', 'POST'] as const
}

export function usePostApi2JsonJapaneseNameLatinCandidatesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonJapaneseNameLatinCandidatesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>
        },
      ) =>
        parseResponse(client.api2.json.japaneseNameLatinCandidatesBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatch/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    args,
  ] as const
}

export function useGetApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
        ? getGetApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
          client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
            ':japaneseName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
        ? getGetApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
          client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
            ':japaneseName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonJapaneseNameMatchBatchKey() {
  return ['api2', '/api2/json/japaneseNameMatchBatch', 'POST'] as const
}

export function usePostApi2JsonJapaneseNameMatchBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonJapaneseNameMatchBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post> },
      ) => parseResponse(client.api2.json.japaneseNameMatchBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatchFeedbackLoop/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    args,
  ] as const
}

export function useGetApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
        ? getGetApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
          client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
        ? getGetApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameKey(
            args,
          )
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
                (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
          client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonLearnableSourceLearnableTokenKey(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
) {
  return ['api2', '/api2/json/learnable/:source/:learnable/:token', args] as const
}

export function useGetApi2JsonLearnableSourceLearnableToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
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
        ? getGetApi2JsonLearnableSourceLearnableTokenKey(args)
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
                (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
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
          client.api2.json.learnable[':source'][':learnable'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonLearnableSourceLearnableToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
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
        ? getGetApi2JsonLearnableSourceLearnableTokenKey(args)
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
                (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
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
          client.api2.json.learnable[':source'][':learnable'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonNameTypeProperNounKey(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
) {
  return ['api2', '/api2/json/nameType/:properNoun', args] as const
}

export function useGetApi2JsonNameTypeProperNoun<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonNameTypeProperNounKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.nameType[':properNoun'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonNameTypeProperNoun<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonNameTypeProperNounKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.nameType[':properNoun'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonNameTypeBatchKey() {
  return ['api2', '/api2/json/nameTypeBatch', 'POST'] as const
}

export function usePostApi2JsonNameTypeBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.nameTypeBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonNameTypeBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.nameTypeBatch.$post> },
      ) => parseResponse(client.api2.json.nameTypeBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonNameTypeGeoProperNounCountryIso2Key(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
) {
  return ['api2', '/api2/json/nameTypeGeo/:properNoun/:countryIso2', args] as const
}

export function useGetApi2JsonNameTypeGeoProperNounCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
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
        ? getGetApi2JsonNameTypeGeoProperNounCountryIso2Key(args)
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
                (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
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
          client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonNameTypeGeoProperNounCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
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
        ? getGetApi2JsonNameTypeGeoProperNounCountryIso2Key(args)
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
                (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
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
          client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonNameTypeGeoBatchKey() {
  return ['api2', '/api2/json/nameTypeGeoBatch', 'POST'] as const
}

export function usePostApi2JsonNameTypeGeoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeGeoBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonNameTypeGeoBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post> },
      ) => parseResponse(client.api2.json.nameTypeGeoBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonOriginFirstNameLastNameKey(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
) {
  return ['api2', '/api2/json/origin/:firstName/:lastName', args] as const
}

export function useGetApi2JsonOriginFirstNameLastName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonOriginFirstNameLastNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.origin[':firstName'][':lastName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonOriginFirstNameLastName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonOriginFirstNameLastNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.origin[':firstName'][':lastName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonOriginBatchKey() {
  return ['api2', '/api2/json/originBatch', 'POST'] as const
}

export function usePostApi2JsonOriginBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.originBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.originBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonOriginBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.originBatch.$post> },
      ) => parseResponse(client.api2.json.originBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonParseChineseNameChineseNameKey(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/parseChineseName/:chineseName', args] as const
}

export function useGetApi2JsonParseChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonParseChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.parseChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonParseChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonParseChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.parseChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonParseChineseNameBatchKey() {
  return ['api2', '/api2/json/parseChineseNameBatch', 'POST'] as const
}

export function usePostApi2JsonParseChineseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonParseChineseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post> },
      ) => parseResponse(client.api2.json.parseChineseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonParseJapaneseNameJapaneseNameKey(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
) {
  return ['api2', '/api2/json/parseJapaneseName/:japaneseName', args] as const
}

export function useGetApi2JsonParseJapaneseNameJapaneseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
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
        ? getGetApi2JsonParseJapaneseNameJapaneseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.parseJapaneseName[':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonParseJapaneseNameJapaneseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
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
        ? getGetApi2JsonParseJapaneseNameJapaneseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.parseJapaneseName[':japaneseName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonParseJapaneseNameBatchKey() {
  return ['api2', '/api2/json/parseJapaneseNameBatch', 'POST'] as const
}

export function usePostApi2JsonParseJapaneseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonParseJapaneseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post> },
      ) => parseResponse(client.api2.json.parseJapaneseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonParseNameNameFullKey(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
) {
  return ['api2', '/api2/json/parseName/:nameFull', args] as const
}

export function useGetApi2JsonParseNameNameFull<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonParseNameNameFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.parseName[':nameFull'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonParseNameNameFull<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonParseNameNameFullKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.parseName[':nameFull'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonParseNameNameFullCountryIso2Key(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
) {
  return ['api2', '/api2/json/parseName/:nameFull/:countryIso2', args] as const
}

export function useGetApi2JsonParseNameNameFullCountryIso2<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
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
        ? getGetApi2JsonParseNameNameFullCountryIso2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.parseName[':nameFull'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonParseNameNameFullCountryIso2<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
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
        ? getGetApi2JsonParseNameNameFullCountryIso2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.parseName[':nameFull'][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonParseNameBatchKey() {
  return ['api2', '/api2/json/parseNameBatch', 'POST'] as const
}

export function usePostApi2JsonParseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.parseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonParseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.parseNameBatch.$post> },
      ) => parseResponse(client.api2.json.parseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApi2JsonParseNameGeoBatchKey() {
  return ['api2', '/api2/json/parseNameGeoBatch', 'POST'] as const
}

export function usePostApi2JsonParseNameGeoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameGeoBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonParseNameGeoBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post> },
      ) => parseResponse(client.api2.json.parseNameGeoBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonPhoneCodeFirstNameLastNamePhoneNumberKey(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
) {
  return ['api2', '/api2/json/phoneCode/:firstName/:lastName/:phoneNumber', args] as const
}

export function useGetApi2JsonPhoneCodeFirstNameLastNamePhoneNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
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
        ? getGetApi2JsonPhoneCodeFirstNameLastNamePhoneNumberKey(args)
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
                (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
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
          client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonPhoneCodeFirstNameLastNamePhoneNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
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
        ? getGetApi2JsonPhoneCodeFirstNameLastNamePhoneNumberKey(args)
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
                (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
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
          client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonPhoneCodeBatchKey() {
  return ['api2', '/api2/json/phoneCodeBatch', 'POST'] as const
}

export function usePostApi2JsonPhoneCodeBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonPhoneCodeBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.phoneCodeBatch.$post> },
      ) => parseResponse(client.api2.json.phoneCodeBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Key(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeo/:firstName/:lastName/:phoneNumber/:countryIso2',
    args,
  ] as const
}

export function useGetApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
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
        ? getGetApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Key(args)
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
                (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
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
          client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][
            ':countryIso2'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
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
        ? getGetApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Key(args)
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
                (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
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
          client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][
            ':countryIso2'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonPhoneCodeGeoBatchKey() {
  return ['api2', '/api2/json/phoneCodeGeoBatch', 'POST'] as const
}

export function usePostApi2JsonPhoneCodeGeoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeGeoBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonPhoneCodeGeoBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post> },
      ) => parseResponse(client.api2.json.phoneCodeGeoBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Key(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeoFeedbackLoop/:firstName/:lastName/:phoneNumber/:phoneNumberE164/:countryIso2',
    args,
  ] as const
}

export function useGetApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
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
        ? getGetApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Key(
            args,
          )
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
                (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
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
          client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
            ':phoneNumberE164'
          ][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
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
        ? getGetApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Key(
            args,
          )
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
                (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
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
          client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
            ':phoneNumberE164'
          ][':countryIso2'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonPinyinChineseNameChineseNameKey(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
) {
  return ['api2', '/api2/json/pinyinChineseName/:chineseName', args] as const
}

export function useGetApi2JsonPinyinChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonPinyinChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.pinyinChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonPinyinChineseNameChineseName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApi2JsonPinyinChineseNameChineseNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api2.json.pinyinChineseName[':chineseName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonPinyinChineseNameBatchKey() {
  return ['api2', '/api2/json/pinyinChineseNameBatch', 'POST'] as const
}

export function usePostApi2JsonPinyinChineseNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.pinyinChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonPinyinChineseNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post> },
      ) => parseResponse(client.api2.json.pinyinChineseNameBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonRegionsKey() {
  return ['api2', '/api2/json/regions'] as const
}

export function useGetApi2JsonRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApi2JsonRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullKey(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/religionFull/:countryIso2/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function useGetApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][
            ':personalNameFull'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][
            ':personalNameFull'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonReligionFullBatchKey() {
  return ['api2', '/api2/json/religionFullBatch', 'POST'] as const
}

export function usePostApi2JsonReligionFullBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.religionFullBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.religionFullBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonReligionFullBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.religionFullBatch.$post> },
      ) => parseResponse(client.api2.json.religionFullBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullKey(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
) {
  return [
    'api2',
    '/api2/json/religionIndianFull/:subDivisionIso31662/:personalNameFull',
    args,
  ] as const
}

export function useGetApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
        ? getGetApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullKey(args)
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
                (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
          client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonReligionIndianFullBatchKey() {
  return ['api2', '/api2/json/religionIndianFullBatch', 'POST'] as const
}

export function usePostApi2JsonReligionIndianFullBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.religionIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonReligionIndianFullBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post> },
      ) => parseResponse(client.api2.json.religionIndianFullBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonSoftwareVersionKey() {
  return ['api2', '/api2/json/softwareVersion'] as const
}

export function useGetApi2JsonSoftwareVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
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
        ? getGetApi2JsonSoftwareVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.softwareVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonSoftwareVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
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
        ? getGetApi2JsonSoftwareVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api2.json.softwareVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonSubclassificationCountryIso2FirstNameLastNameKey(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/subclassification/:countryIso2/:firstName/:lastName', args] as const
}

export function useGetApi2JsonSubclassificationCountryIso2FirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonSubclassificationCountryIso2FirstNameLastNameKey(args)
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
                (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
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
          client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonSubclassificationCountryIso2FirstNameLastName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonSubclassificationCountryIso2FirstNameLastNameKey(args)
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
                (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
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
          client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonSubclassificationBatchKey() {
  return ['api2', '/api2/json/subclassificationBatch', 'POST'] as const
}

export function usePostApi2JsonSubclassificationBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.subclassificationBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonSubclassificationBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.subclassificationBatch.$post> },
      ) => parseResponse(client.api2.json.subclassificationBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonSubclassificationIndianFirstNameLastNameKey(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/subclassificationIndian/:firstName/:lastName', args] as const
}

export function useGetApi2JsonSubclassificationIndianFirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonSubclassificationIndianFirstNameLastNameKey(args)
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
                (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
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
          client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonSubclassificationIndianFirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonSubclassificationIndianFirstNameLastNameKey(args)
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
                (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
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
          client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonSubclassificationIndianBatchKey() {
  return ['api2', '/api2/json/subclassificationIndianBatch', 'POST'] as const
}

export function usePostApi2JsonSubclassificationIndianBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationIndianBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonSubclassificationIndianBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post> },
      ) => parseResponse(client.api2.json.subclassificationIndianBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonTaxonomyClassesClassifierNameKey(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
) {
  return ['api2', '/api2/json/taxonomyClasses/:classifierName', args] as const
}

export function useGetApi2JsonTaxonomyClassesClassifierName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
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
        ? getGetApi2JsonTaxonomyClassesClassifierNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.taxonomyClasses[':classifierName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonTaxonomyClassesClassifierName<TError = unknown>(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
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
        ? getGetApi2JsonTaxonomyClassesClassifierNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api2.json.taxonomyClasses[':classifierName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApi2JsonUsRaceEthnicityFirstNameLastNameKey(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
) {
  return ['api2', '/api2/json/usRaceEthnicity/:firstName/:lastName', args] as const
}

export function useGetApi2JsonUsRaceEthnicityFirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonUsRaceEthnicityFirstNameLastNameKey(args)
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
                (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
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
          client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonUsRaceEthnicityFirstNameLastName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
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
        ? getGetApi2JsonUsRaceEthnicityFirstNameLastNameKey(args)
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
                (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
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
          client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonUsRaceEthnicityBatchKey() {
  return ['api2', '/api2/json/usRaceEthnicityBatch', 'POST'] as const
}

export function usePostApi2JsonUsRaceEthnicityBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonUsRaceEthnicityBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post> },
      ) => parseResponse(client.api2.json.usRaceEthnicityBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeKey(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
) {
  return ['api2', '/api2/json/usRaceEthnicityZIP5/:firstName/:lastName/:zip5Code', args] as const
}

export function useGetApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code<TError = unknown>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
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
        ? getGetApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeKey(args)
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
                (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
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
          client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
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
        ? getGetApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeKey(args)
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
                (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
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
          client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApi2JsonUsZipRaceEthnicityBatchKey() {
  return ['api2', '/api2/json/usZipRaceEthnicityBatch', 'POST'] as const
}

export function usePostApi2JsonUsZipRaceEthnicityBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApi2JsonUsZipRaceEthnicityBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post> },
      ) => parseResponse(client.api2.json.usZipRaceEthnicityBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
