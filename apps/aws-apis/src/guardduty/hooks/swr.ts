import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getDetectorKey() {
  return ['detector'] as const
}

export function getInvitationKey() {
  return ['invitation'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetDetectorDetectorIdAdministratorKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/administrator', keyArgs] as const
}

export function useGetDetectorDetectorIdAdministrator<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdAdministratorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].administrator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdAdministrator<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdAdministratorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].administrator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdAdministratorKey() {
  return ['detector', '/detector/:detectorId/administrator', 'POST'] as const
}

export function usePostDetectorDetectorIdAdministrator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['administrator']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdAdministratorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['administrator']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].administrator.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdMasterKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/master', keyArgs] as const
}

export function useGetDetectorDetectorIdMaster<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdMasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].master.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdMaster<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['master']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdMasterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].master.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMasterKey() {
  return ['detector', '/detector/:detectorId/master', 'POST'] as const
}

export function usePostDetectorDetectorIdMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['master']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['master']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].master.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsArchiveKey() {
  return ['detector', '/detector/:detectorId/findings/archive', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsArchiveKey()
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
            (typeof client.detector)[':detectorId']['findings']['archive']['$post']
          >
        },
      ) => parseResponse(client.detector[':detectorId'].findings.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorKey(args: InferRequestType<typeof client.detector.$get>) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector', keyArgs] as const
}

export function useGetDetector<TError = unknown>(
  args: InferRequestType<typeof client.detector.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetectorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.detector.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDetector<TError = unknown>(
  args: InferRequestType<typeof client.detector.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDetectorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.detector.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDetectorKey() {
  return ['detector', '/detector', 'POST'] as const
}

export function usePostDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detector.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.detector.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.detector.$post> }) =>
        parseResponse(client.detector.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdFilterKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/filter', keyArgs] as const
}

export function useGetDetectorDetectorIdFilter<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdFilter<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFilterKey() {
  return ['detector', '/detector/:detectorId/filter', 'POST'] as const
}

export function usePostDetectorDetectorIdFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['filter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['filter']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdIpsetKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/ipset', keyArgs] as const
}

export function useGetDetectorDetectorIdIpset<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdIpsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].ipset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdIpset<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdIpsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].ipset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdIpsetKey() {
  return ['detector', '/detector/:detectorId/ipset', 'POST'] as const
}

export function usePostDetectorDetectorIdIpset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdIpsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['ipset']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].ipset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdMemberKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/member', keyArgs] as const
}

export function useGetDetectorDetectorIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberKey() {
  return ['detector', '/detector/:detectorId/member', 'POST'] as const
}

export function usePostDetectorDetectorIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['member']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].member.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdPublishingDestinationKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/publishingDestination', keyArgs] as const
}

export function useGetDetectorDetectorIdPublishingDestination<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
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
        ? getGetDetectorDetectorIdPublishingDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId'].publishingDestination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdPublishingDestination<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
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
        ? getGetDetectorDetectorIdPublishingDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId'].publishingDestination.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdPublishingDestinationKey() {
  return ['detector', '/detector/:detectorId/publishingDestination', 'POST'] as const
}

export function usePostDetectorDetectorIdPublishingDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['publishingDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdPublishingDestinationKey()
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
            (typeof client.detector)[':detectorId']['publishingDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].publishingDestination.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsCreateKey() {
  return ['detector', '/detector/:detectorId/findings/create', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsCreateKey()
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
            (typeof client.detector)[':detectorId']['findings']['create']['$post']
          >
        },
      ) => parseResponse(client.detector[':detectorId'].findings.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdThreatintelsetKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/threatintelset', keyArgs] as const
}

export function useGetDetectorDetectorIdThreatintelset<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdThreatintelsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].threatintelset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdThreatintelset<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdThreatintelsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].threatintelset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdThreatintelsetKey() {
  return ['detector', '/detector/:detectorId/threatintelset', 'POST'] as const
}

export function usePostDetectorDetectorIdThreatintelset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdThreatintelsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['threatintelset']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].threatintelset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationDeclineKey() {
  return ['invitation', '/invitation/decline', 'POST'] as const
}

export function usePostInvitationDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.decline.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitation.decline.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitation.decline.$post> }) =>
        parseResponse(client.invitation.decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId', keyArgs] as const
}

export function useGetDetectorDetectorId<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorId<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdKey() {
  return ['detector', '/detector/:detectorId', 'POST'] as const
}

export function usePostDetectorDetectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.detector)[':detectorId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorDetectorIdKey() {
  return ['detector', '/detector/:detectorId', 'DELETE'] as const
}

export function useDeleteDetectorDetectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorDetectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['$delete']> },
      ) => parseResponse(client.detector[':detectorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdFilterFilterNameKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/filter/:filterName', keyArgs] as const
}

export function useGetDetectorDetectorIdFilterFilterName<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
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
        ? getGetDetectorDetectorIdFilterFilterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId'].filter[':filterName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdFilterFilterName<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
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
        ? getGetDetectorDetectorIdFilterFilterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId'].filter[':filterName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFilterFilterNameKey() {
  return ['detector', '/detector/:detectorId/filter/:filterName', 'POST'] as const
}

export function usePostDetectorDetectorIdFilterFilterName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFilterFilterNameKey()
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
            (typeof client.detector)[':detectorId']['filter'][':filterName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].filter[':filterName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorDetectorIdFilterFilterNameKey() {
  return ['detector', '/detector/:detectorId/filter/:filterName', 'DELETE'] as const
}

export function useDeleteDetectorDetectorIdFilterFilterName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorDetectorIdFilterFilterNameKey()
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
            (typeof client.detector)[':detectorId']['filter'][':filterName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].filter[':filterName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdIpsetIpSetIdKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', keyArgs] as const
}

export function useGetDetectorDetectorIdIpsetIpSetId<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>
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
        ? getGetDetectorDetectorIdIpsetIpSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdIpsetIpSetId<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>
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
        ? getGetDetectorDetectorIdIpsetIpSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdIpsetIpSetIdKey() {
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', 'POST'] as const
}

export function usePostDetectorDetectorIdIpsetIpSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdIpsetIpSetIdKey()
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
            (typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorDetectorIdIpsetIpSetIdKey() {
  return ['detector', '/detector/:detectorId/ipset/:ipSetId', 'DELETE'] as const
}

export function useDeleteDetectorDetectorIdIpsetIpSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorDetectorIdIpsetIpSetIdKey()
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
            (typeof client.detector)[':detectorId']['ipset'][':ipSetId']['$delete']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].ipset[':ipSetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitationDeleteKey() {
  return ['invitation', '/invitation/delete', 'POST'] as const
}

export function usePostInvitationDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.invitation.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invitation.delete.$post> }) =>
        parseResponse(client.invitation.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberDeleteKey() {
  return ['detector', '/detector/:detectorId/member/delete', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberDeleteKey()
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
            (typeof client.detector)[':detectorId']['member']['delete']['$post']
          >
        },
      ) => parseResponse(client.detector[':detectorId'].member.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdPublishingDestinationDestinationIdKey(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'detector',
    '/detector/:detectorId/publishingDestination/:destinationId',
    keyArgs,
  ] as const
}

export function useGetDetectorDetectorIdPublishingDestinationDestinationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
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
        ? getGetDetectorDetectorIdPublishingDestinationDestinationIdKey(args)
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
                (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
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
          client.detector[':detectorId'].publishingDestination[':destinationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdPublishingDestinationDestinationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
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
        ? getGetDetectorDetectorIdPublishingDestinationDestinationIdKey(args)
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
                (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$get']
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
          client.detector[':detectorId'].publishingDestination[':destinationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdPublishingDestinationDestinationIdKey() {
  return ['detector', '/detector/:detectorId/publishingDestination/:destinationId', 'POST'] as const
}

export function usePostDetectorDetectorIdPublishingDestinationDestinationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdPublishingDestinationDestinationIdKey()
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
            (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].publishingDestination[':destinationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorDetectorIdPublishingDestinationDestinationIdKey() {
  return [
    'detector',
    '/detector/:detectorId/publishingDestination/:destinationId',
    'DELETE',
  ] as const
}

export function useDeleteDetectorDetectorIdPublishingDestinationDestinationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorDetectorIdPublishingDestinationDestinationIdKey()
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
            (typeof client.detector)[':detectorId']['publishingDestination'][':destinationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].publishingDestination[':destinationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdThreatintelsetThreatIntelSetIdKey(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', keyArgs] as const
}

export function useGetDetectorDetectorIdThreatintelsetThreatIntelSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
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
        ? getGetDetectorDetectorIdThreatintelsetThreatIntelSetIdKey(args)
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
                (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
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
          client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdThreatintelsetThreatIntelSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
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
        ? getGetDetectorDetectorIdThreatintelsetThreatIntelSetIdKey(args)
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
                (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$get']
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
          client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdKey() {
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', 'POST'] as const
}

export function usePostDetectorDetectorIdThreatintelsetThreatIntelSetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdThreatintelsetThreatIntelSetIdKey()
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
            (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdKey() {
  return ['detector', '/detector/:detectorId/threatintelset/:threatIntelSetId', 'DELETE'] as const
}

export function useDeleteDetectorDetectorIdThreatintelsetThreatIntelSetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDetectorDetectorIdThreatintelsetThreatIntelSetIdKey()
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
            (typeof client.detector)[':detectorId']['threatintelset'][':threatIntelSetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].threatintelset[':threatIntelSetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMalwareScansKey() {
  return ['detector', '/detector/:detectorId/malware-scans', 'POST'] as const
}

export function usePostDetectorDetectorIdMalwareScans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMalwareScansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['malware-scans']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId']['malware-scans'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDetectorDetectorIdAdminKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/admin', keyArgs] as const
}

export function useGetDetectorDetectorIdAdmin<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdAdmin<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDetectorDetectorIdAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.detector[':detectorId'].admin.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdAdminKey() {
  return ['detector', '/detector/:detectorId/admin', 'POST'] as const
}

export function usePostDetectorDetectorIdAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['admin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['admin']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].admin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDisableKey() {
  return ['admin', '/admin/disable', 'POST'] as const
}

export function usePostAdminDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.disable.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.disable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.disable.$post> }) =>
        parseResponse(client.admin.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdAdministratorDisassociateKey() {
  return ['detector', '/detector/:detectorId/administrator/disassociate', 'POST'] as const
}

export function usePostDetectorDetectorIdAdministratorDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdAdministratorDisassociateKey()
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
            (typeof client.detector)[':detectorId']['administrator']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].administrator.disassociate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMasterDisassociateKey() {
  return ['detector', '/detector/:detectorId/master/disassociate', 'POST'] as const
}

export function usePostDetectorDetectorIdMasterDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['master']['disassociate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['master']['disassociate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMasterDisassociateKey()
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
            (typeof client.detector)[':detectorId']['master']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].master.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberDisassociateKey() {
  return ['detector', '/detector/:detectorId/member/disassociate', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['member']['disassociate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['disassociate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberDisassociateKey()
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
            (typeof client.detector)[':detectorId']['member']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].member.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminEnableKey() {
  return ['admin', '/admin/enable', 'POST'] as const
}

export function usePostAdminEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.enable.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.enable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.enable.$post> }) =>
        parseResponse(client.admin.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdCoverageStatisticsKey() {
  return ['detector', '/detector/:detectorId/coverage/statistics', 'POST'] as const
}

export function usePostDetectorDetectorIdCoverageStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['coverage']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['coverage']['statistics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdCoverageStatisticsKey()
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
            (typeof client.detector)[':detectorId']['coverage']['statistics']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].coverage.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsGetKey() {
  return ['detector', '/detector/:detectorId/findings/get', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['findings']['get']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].findings.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsStatisticsKey() {
  return ['detector', '/detector/:detectorId/findings/statistics', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['statistics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsStatisticsKey()
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
            (typeof client.detector)[':detectorId']['findings']['statistics']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].findings.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitationCountKey(
  args: InferRequestType<typeof client.invitation.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['invitation', '/invitation/count', keyArgs] as const
}

export function useGetInvitationCount<TError = unknown>(
  args: InferRequestType<typeof client.invitation.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitation.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitationCount<TError = unknown>(
  args: InferRequestType<typeof client.invitation.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvitationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitation.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDetectorDetectorIdMalwareScanSettingsKey(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['detector', '/detector/:detectorId/malware-scan-settings', keyArgs] as const
}

export function useGetDetectorDetectorIdMalwareScanSettings<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
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
        ? getGetDetectorDetectorIdMalwareScanSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId']['malware-scan-settings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDetectorDetectorIdMalwareScanSettings<TError = unknown>(
  args: InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
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
        ? getGetDetectorDetectorIdMalwareScanSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.detector[':detectorId']['malware-scan-settings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMalwareScanSettingsKey() {
  return ['detector', '/detector/:detectorId/malware-scan-settings', 'POST'] as const
}

export function usePostDetectorDetectorIdMalwareScanSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['malware-scan-settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMalwareScanSettingsKey()
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
            (typeof client.detector)[':detectorId']['malware-scan-settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId']['malware-scan-settings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberDetectorGetKey() {
  return ['detector', '/detector/:detectorId/member/detector/get', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberDetectorGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['detector']['get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberDetectorGetKey()
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
            (typeof client.detector)[':detectorId']['member']['detector']['get']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].member.detector.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberGetKey() {
  return ['detector', '/detector/:detectorId/member/get', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['get']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['member']['get']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].member.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFreeTrialDaysRemainingKey() {
  return ['detector', '/detector/:detectorId/freeTrial/daysRemaining', 'POST'] as const
}

export function usePostDetectorDetectorIdFreeTrialDaysRemaining<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFreeTrialDaysRemainingKey()
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
            (typeof client.detector)[':detectorId']['freeTrial']['daysRemaining']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].freeTrial.daysRemaining.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdUsageStatisticsKey() {
  return ['detector', '/detector/:detectorId/usage/statistics', 'POST'] as const
}

export function usePostDetectorDetectorIdUsageStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['usage']['statistics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdUsageStatisticsKey()
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
            (typeof client.detector)[':detectorId']['usage']['statistics']['$post']
          >
        },
      ) => parseResponse(client.detector[':detectorId'].usage.statistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberInviteKey() {
  return ['detector', '/detector/:detectorId/member/invite', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberInviteKey()
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
            (typeof client.detector)[':detectorId']['member']['invite']['$post']
          >
        },
      ) => parseResponse(client.detector[':detectorId'].member.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdCoverageKey() {
  return ['detector', '/detector/:detectorId/coverage', 'POST'] as const
}

export function usePostDetectorDetectorIdCoverage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['coverage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdCoverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['coverage']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].coverage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsKey() {
  return ['detector', '/detector/:detectorId/findings', 'POST'] as const
}

export function usePostDetectorDetectorIdFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['findings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.detector)[':detectorId']['findings']['$post']> },
      ) => parseResponse(client.detector[':detectorId'].findings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitationKey(args: InferRequestType<typeof client.invitation.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invitation', '/invitation', keyArgs] as const
}

export function useGetInvitation<TError = unknown>(
  args: InferRequestType<typeof client.invitation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitation<TError = unknown>(
  args: InferRequestType<typeof client.invitation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invitation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invitation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminKey(args: InferRequestType<typeof client.admin.$get>) {
  const { header: _, ...keyArgs } = args
  return ['admin', '/admin', keyArgs] as const
}

export function useGetAdmin<TError = unknown>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admin.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdmin<TError = unknown>(
  args: InferRequestType<typeof client.admin.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.admin.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberStartKey() {
  return ['detector', '/detector/:detectorId/member/start', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['start']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['member']['start']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].member.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberStopKey() {
  return ['detector', '/detector/:detectorId/member/stop', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.detector)[':detectorId']['member']['stop']['$post']>
        },
      ) => parseResponse(client.detector[':detectorId'].member.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsUnarchiveKey() {
  return ['detector', '/detector/:detectorId/findings/unarchive', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['unarchive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsUnarchiveKey()
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
            (typeof client.detector)[':detectorId']['findings']['unarchive']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].findings.unarchive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdFindingsFeedbackKey() {
  return ['detector', '/detector/:detectorId/findings/feedback', 'POST'] as const
}

export function usePostDetectorDetectorIdFindingsFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.detector)[':detectorId']['findings']['feedback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdFindingsFeedbackKey()
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
            (typeof client.detector)[':detectorId']['findings']['feedback']['$post']
          >
        },
      ) =>
        parseResponse(client.detector[':detectorId'].findings.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDetectorDetectorIdMemberDetectorUpdateKey() {
  return ['detector', '/detector/:detectorId/member/detector/update', 'POST'] as const
}

export function usePostDetectorDetectorIdMemberDetectorUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDetectorDetectorIdMemberDetectorUpdateKey()
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
            (typeof client.detector)[':detectorId']['member']['detector']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.detector[':detectorId'].member.detector.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
