import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCivicinfoKey() {
  return ['civicinfo'] as const
}

export function getGetCivicinfoV2DivisionsKey(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/divisions', args] as const
}

export function useGetCivicinfoV2Divisions<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2DivisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.divisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCivicinfoV2Divisions<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.divisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2DivisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.divisions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.divisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCivicinfoV2ElectionsKey(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/elections', args] as const
}

export function useGetCivicinfoV2Elections<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2ElectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.elections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCivicinfoV2Elections<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.elections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2ElectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.elections.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.elections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCivicinfoV2RepresentativesKey(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/representatives', args] as const
}

export function useGetCivicinfoV2Representatives<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2RepresentativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.representatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCivicinfoV2Representatives<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.representatives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2RepresentativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.representatives.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.representatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCivicinfoV2RepresentativesOcdIdKey(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
) {
  return ['civicinfo', '/civicinfo/v2/representatives/:ocdId', args] as const
}

export function useGetCivicinfoV2RepresentativesOcdId<TError = unknown>(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2RepresentativesOcdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.civicinfo.v2.representatives[':ocdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCivicinfoV2RepresentativesOcdId<TError = unknown>(
  args: InferRequestType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2RepresentativesOcdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.civicinfo.v2.representatives)[':ocdId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.civicinfo.v2.representatives[':ocdId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCivicinfoV2VoterinfoKey(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
) {
  return ['civicinfo', '/civicinfo/v2/voterinfo', args] as const
}

export function useGetCivicinfoV2Voterinfo<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2VoterinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.voterinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCivicinfoV2Voterinfo<TError = unknown>(
  args: InferRequestType<typeof client.civicinfo.v2.voterinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCivicinfoV2VoterinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.civicinfo.v2.voterinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.civicinfo.v2.voterinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
