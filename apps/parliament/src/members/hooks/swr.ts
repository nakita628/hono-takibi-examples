import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiLocationBrowseLocationTypeLocationNameKey(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
) {
  return ['api', '/api/Location/Browse/:locationType/:locationName', args] as const
}

export function useGetApiLocationBrowseLocationTypeLocationName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
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
        ? getGetApiLocationBrowseLocationTypeLocationNameKey(args)
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
                (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
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
          client.api.Location.Browse[':locationType'][':locationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationBrowseLocationTypeLocationName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
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
        ? getGetApiLocationBrowseLocationTypeLocationNameKey(args)
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
                (typeof client.api.Location.Browse)[':locationType'][':locationName']['$get']
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
          client.api.Location.Browse[':locationType'][':locationName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencySearchKey(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
) {
  return ['api', '/api/Location/Constituency/Search', args] as const
}

export function useGetApiLocationConstituencySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLocationConstituencySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Location.Constituency.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencySearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Location.Constituency.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLocationConstituencySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Location.Constituency.Search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Location.Constituency.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id', args] as const
}

export function useGetApiLocationConstituencyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLocationConstituencyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Location.Constituency[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLocationConstituencyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Location.Constituency)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Location.Constituency[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdElectionResultLatestKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResult/Latest', args] as const
}

export function useGetApiLocationConstituencyIdElectionResultLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultLatestKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdElectionResultLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultLatestKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResult']['Latest']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResult.Latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdElectionResultElectionIdKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResult/:electionId', args] as const
}

export function useGetApiLocationConstituencyIdElectionResultElectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultElectionIdKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdElectionResultElectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultElectionIdKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResult'][':electionId']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResult[':electionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdElectionResultsKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/ElectionResults', args] as const
}

export function useGetApiLocationConstituencyIdElectionResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultsKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResults.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdElectionResults<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
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
        ? getGetApiLocationConstituencyIdElectionResultsKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['ElectionResults']['$get']
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
          client.api.Location.Constituency[':id'].ElectionResults.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdGeometryKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id/Geometry', args] as const
}

export function useGetApiLocationConstituencyIdGeometry<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
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
        ? getGetApiLocationConstituencyIdGeometryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Location.Constituency[':id'].Geometry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdGeometry<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
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
        ? getGetApiLocationConstituencyIdGeometryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Geometry']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Location.Constituency[':id'].Geometry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdRepresentationsKey(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
) {
  return ['api', '/api/Location/Constituency/:id/Representations', args] as const
}

export function useGetApiLocationConstituencyIdRepresentations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
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
        ? getGetApiLocationConstituencyIdRepresentationsKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
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
          client.api.Location.Constituency[':id'].Representations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdRepresentations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
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
        ? getGetApiLocationConstituencyIdRepresentationsKey(args)
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
                (typeof client.api.Location.Constituency)[':id']['Representations']['$get']
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
          client.api.Location.Constituency[':id'].Representations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiLocationConstituencyIdSynopsisKey(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
) {
  return ['api', '/api/Location/Constituency/:id/Synopsis', args] as const
}

export function useGetApiLocationConstituencyIdSynopsis<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
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
        ? getGetApiLocationConstituencyIdSynopsisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Location.Constituency[':id'].Synopsis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationConstituencyIdSynopsis<TError = unknown>(
  args: InferRequestType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
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
        ? getGetApiLocationConstituencyIdSynopsisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.Location.Constituency)[':id']['Synopsis']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Location.Constituency[':id'].Synopsis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLordsInterestsRegisterKey(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
) {
  return ['api', '/api/LordsInterests/Register', args] as const
}

export function useGetApiLordsInterestsRegister<TError = unknown>(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLordsInterestsRegisterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.LordsInterests.Register.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLordsInterestsRegister<TError = unknown>(
  args: InferRequestType<typeof client.api.LordsInterests.Register.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLordsInterestsRegisterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Register.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.LordsInterests.Register.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLordsInterestsStaffKey(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
) {
  return ['api', '/api/LordsInterests/Staff', args] as const
}

export function useGetApiLordsInterestsStaff<TError = unknown>(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLordsInterestsStaffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.LordsInterests.Staff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLordsInterestsStaff<TError = unknown>(
  args: InferRequestType<typeof client.api.LordsInterests.Staff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiLordsInterestsStaffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.LordsInterests.Staff.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.LordsInterests.Staff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersHistoryKey(
  args: InferRequestType<typeof client.api.Members.History.$get>,
) {
  return ['api', '/api/Members/History', args] as const
}

export function useGetApiMembersHistory<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.History.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersHistory<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.History.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.History.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.History.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersSearchKey(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
) {
  return ['api', '/api/Members/Search', args] as const
}

export function useGetApiMembersSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.Search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.Search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.Search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersSearchHistoricalKey(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
) {
  return ['api', '/api/Members/SearchHistorical', args] as const
}

export function useGetApiMembersSearchHistorical<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersSearchHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.SearchHistorical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersSearchHistorical<TError = unknown>(
  args: InferRequestType<typeof client.api.Members.SearchHistorical.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersSearchHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Members.SearchHistorical.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members.SearchHistorical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
) {
  return ['api', '/api/Members/:id', args] as const
}

export function useGetApiMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdBiographyKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
) {
  return ['api', '/api/Members/:id/Biography', args] as const
}

export function useGetApiMembersIdBiography<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdBiographyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Biography.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdBiography<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Biography']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdBiographyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Biography']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Biography.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdContactKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
) {
  return ['api', '/api/Members/:id/Contact', args] as const
}

export function useGetApiMembersIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdContact<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Contact']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Contact']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdContributionSummaryKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
) {
  return ['api', '/api/Members/:id/ContributionSummary', args] as const
}

export function useGetApiMembersIdContributionSummary<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdContributionSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].ContributionSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdContributionSummary<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdContributionSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ContributionSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].ContributionSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdEdmsKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
) {
  return ['api', '/api/Members/:id/Edms', args] as const
}

export function useGetApiMembersIdEdms<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdEdmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Edms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdEdms<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Edms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdEdmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Edms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Edms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdExperienceKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
) {
  return ['api', '/api/Members/:id/Experience', args] as const
}

export function useGetApiMembersIdExperience<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdExperienceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Experience.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdExperience<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Experience']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdExperienceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Experience']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Experience.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdFocusKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
) {
  return ['api', '/api/Members/:id/Focus', args] as const
}

export function useGetApiMembersIdFocus<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdFocusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Focus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdFocus<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Focus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdFocusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Focus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Focus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdLatestElectionResultKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
) {
  return ['api', '/api/Members/:id/LatestElectionResult', args] as const
}

export function useGetApiMembersIdLatestElectionResult<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdLatestElectionResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].LatestElectionResult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdLatestElectionResult<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdLatestElectionResultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['LatestElectionResult']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].LatestElectionResult.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdPortraitKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
) {
  return ['api', '/api/Members/:id/Portrait', args] as const
}

export function useGetApiMembersIdPortrait<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdPortraitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Portrait.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdPortrait<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Portrait']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdPortraitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Portrait']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Portrait.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdPortraitUrlKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
) {
  return ['api', '/api/Members/:id/PortraitUrl', args] as const
}

export function useGetApiMembersIdPortraitUrl<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdPortraitUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].PortraitUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdPortraitUrl<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdPortraitUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['PortraitUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].PortraitUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdRegisteredInterestsKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
) {
  return ['api', '/api/Members/:id/RegisteredInterests', args] as const
}

export function useGetApiMembersIdRegisteredInterests<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdRegisteredInterestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].RegisteredInterests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdRegisteredInterests<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdRegisteredInterestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['RegisteredInterests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].RegisteredInterests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdStaffKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
) {
  return ['api', '/api/Members/:id/Staff', args] as const
}

export function useGetApiMembersIdStaff<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdStaffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Staff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdStaff<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Staff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdStaffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Staff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Staff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdSynopsisKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
) {
  return ['api', '/api/Members/:id/Synopsis', args] as const
}

export function useGetApiMembersIdSynopsis<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdSynopsisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Synopsis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdSynopsis<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Synopsis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdSynopsisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Synopsis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Synopsis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdThumbnailKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
) {
  return ['api', '/api/Members/:id/Thumbnail', args] as const
}

export function useGetApiMembersIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdThumbnailUrlKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
) {
  return ['api', '/api/Members/:id/ThumbnailUrl', args] as const
}

export function useGetApiMembersIdThumbnailUrl<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdThumbnailUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].ThumbnailUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdThumbnailUrl<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdThumbnailUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['ThumbnailUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].ThumbnailUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdVotingKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
) {
  return ['api', '/api/Members/:id/Voting', args] as const
}

export function useGetApiMembersIdVoting<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdVotingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Voting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdVoting<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['Voting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdVotingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['Voting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Members[':id'].Voting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMembersIdWrittenQuestionsKey(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
) {
  return ['api', '/api/Members/:id/WrittenQuestions', args] as const
}

export function useGetApiMembersIdWrittenQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdWrittenQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].WrittenQuestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMembersIdWrittenQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiMembersIdWrittenQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Members)[':id']['WrittenQuestions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Members[':id'].WrittenQuestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPartiesGetActiveHouseKey(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
) {
  return ['api', '/api/Parties/GetActive/:house', args] as const
}

export function useGetApiPartiesGetActiveHouse<TError = unknown>(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPartiesGetActiveHouseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Parties.GetActive[':house'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPartiesGetActiveHouse<TError = unknown>(
  args: InferRequestType<(typeof client.api.Parties.GetActive)[':house']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPartiesGetActiveHouseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.GetActive)[':house']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Parties.GetActive[':house'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPartiesLordsByTypeForDateKey(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
) {
  return ['api', '/api/Parties/LordsByType/:forDate', args] as const
}

export function useGetApiPartiesLordsByTypeForDate<TError = unknown>(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPartiesLordsByTypeForDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Parties.LordsByType[':forDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPartiesLordsByTypeForDate<TError = unknown>(
  args: InferRequestType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPartiesLordsByTypeForDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Parties.LordsByType)[':forDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Parties.LordsByType[':forDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPartiesStateOfThePartiesHouseForDateKey(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
) {
  return ['api', '/api/Parties/StateOfTheParties/:house/:forDate', args] as const
}

export function useGetApiPartiesStateOfThePartiesHouseForDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
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
        ? getGetApiPartiesStateOfThePartiesHouseForDateKey(args)
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
                (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
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
          client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPartiesStateOfThePartiesHouseForDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
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
        ? getGetApiPartiesStateOfThePartiesHouseForDateKey(args)
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
                (typeof client.api.Parties.StateOfTheParties)[':house'][':forDate']['$get']
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
          client.api.Parties.StateOfTheParties[':house'][':forDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsDepartmentsTypeKey(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
) {
  return ['api', '/api/Posts/Departments/:type', args] as const
}

export function useGetApiPostsDepartmentsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsDepartmentsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Departments[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsDepartmentsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Departments)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsDepartmentsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Departments)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Departments[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsGovernmentPostsKey(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
) {
  return ['api', '/api/Posts/GovernmentPosts', args] as const
}

export function useGetApiPostsGovernmentPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsGovernmentPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.GovernmentPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsGovernmentPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.GovernmentPosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsGovernmentPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.GovernmentPosts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.GovernmentPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsOppositionPostsKey(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
) {
  return ['api', '/api/Posts/OppositionPosts', args] as const
}

export function useGetApiPostsOppositionPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsOppositionPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.OppositionPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsOppositionPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.OppositionPosts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsOppositionPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.OppositionPosts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.OppositionPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsSpeakerAndDeputiesForDateKey(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
) {
  return ['api', '/api/Posts/SpeakerAndDeputies/:forDate', args] as const
}

export function useGetApiPostsSpeakerAndDeputiesForDate<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsSpeakerAndDeputiesForDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.SpeakerAndDeputies[':forDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsSpeakerAndDeputiesForDate<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsSpeakerAndDeputiesForDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.SpeakerAndDeputies)[':forDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.SpeakerAndDeputies[':forDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsSpokespersonsKey(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
) {
  return ['api', '/api/Posts/Spokespersons', args] as const
}

export function useGetApiPostsSpokespersons<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsSpokespersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Spokespersons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsSpokespersons<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.Spokespersons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPostsSpokespersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.Spokespersons.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Spokespersons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReferenceAnsweringBodiesKey(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
) {
  return ['api', '/api/Reference/AnsweringBodies', args] as const
}

export function useGetApiReferenceAnsweringBodies<TError = unknown>(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceAnsweringBodiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Reference.AnsweringBodies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReferenceAnsweringBodies<TError = unknown>(
  args: InferRequestType<typeof client.api.Reference.AnsweringBodies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceAnsweringBodiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.AnsweringBodies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Reference.AnsweringBodies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReferenceDepartmentsKey(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
) {
  return ['api', '/api/Reference/Departments', args] as const
}

export function useGetApiReferenceDepartments<TError = unknown>(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Reference.Departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReferenceDepartments<TError = unknown>(
  args: InferRequestType<typeof client.api.Reference.Departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceDepartmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.Departments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Reference.Departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReferenceDepartmentsIdLogoKey(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
) {
  return ['api', '/api/Reference/Departments/:id/Logo', args] as const
}

export function useGetApiReferenceDepartmentsIdLogo<TError = unknown>(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceDepartmentsIdLogoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Reference.Departments[':id'].Logo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReferenceDepartmentsIdLogo<TError = unknown>(
  args: InferRequestType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiReferenceDepartmentsIdLogoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Reference.Departments)[':id']['Logo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Reference.Departments[':id'].Logo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReferencePolicyInterestsKey() {
  return ['api', '/api/Reference/PolicyInterests'] as const
}

export function useGetApiReferencePolicyInterests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
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
        ? getGetApiReferencePolicyInterestsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Reference.PolicyInterests.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReferencePolicyInterests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>>
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
        ? getGetApiReferencePolicyInterestsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.Reference.PolicyInterests.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Reference.PolicyInterests.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
