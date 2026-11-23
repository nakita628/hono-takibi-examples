import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmObjects2026090420Key(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/0-420', args] as const
}

export function useGetCrmObjects2026090420<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjects2026090420Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.objects['2026-09']['0-420'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects2026090420<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjects2026090420Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.crm.objects['2026-09']['0-420'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjects2026090420Key() {
  return ['crm', '/crm/objects/2026-09/0-420', 'POST'] as const
}

export function usePostCrmObjects2026090420<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['$post']> },
      ) => parseResponse(client.crm.objects['2026-09']['0-420'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420BatchArchiveKey() {
  return ['crm', '/crm/objects/2026-09/0-420/batch/archive', 'POST'] as const
}

export function usePostCrmObjects2026090420BatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['0-420']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420BatchArchiveKey()
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
            (typeof client.crm.objects)['2026-09']['0-420']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420BatchCreateKey() {
  return ['crm', '/crm/objects/2026-09/0-420/batch/create', 'POST'] as const
}

export function usePostCrmObjects2026090420BatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420BatchCreateKey()
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
            (typeof client.crm.objects)['2026-09']['0-420']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420BatchReadKey() {
  return ['crm', '/crm/objects/2026-09/0-420/batch/read', 'POST'] as const
}

export function usePostCrmObjects2026090420BatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420BatchReadKey()
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
            (typeof client.crm.objects)['2026-09']['0-420']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09']['0-420'].batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420BatchUpdateKey() {
  return ['crm', '/crm/objects/2026-09/0-420/batch/update', 'POST'] as const
}

export function usePostCrmObjects2026090420BatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420BatchUpdateKey()
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
            (typeof client.crm.objects)['2026-09']['0-420']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420BatchUpsertKey() {
  return ['crm', '/crm/objects/2026-09/0-420/batch/upsert', 'POST'] as const
}

export function usePostCrmObjects2026090420BatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['upsert']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['batch']['upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420BatchUpsertKey()
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
            (typeof client.crm.objects)['2026-09']['0-420']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'].batch.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects2026090420SearchKey() {
  return ['crm', '/crm/objects/2026-09/0-420/search', 'POST'] as const
}

export function usePostCrmObjects2026090420Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['0-420']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects2026090420SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420']['search']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09']['0-420'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects2026090420ListingIdKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/0-420/:listingId', args] as const
}

export function useGetCrmObjects2026090420ListingId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>
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
        ? getGetCrmObjects2026090420ListingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'][':listingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects2026090420ListingId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>
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
        ? getGetCrmObjects2026090420ListingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'][':listingId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjects2026090420ListingIdKey() {
  return ['crm', '/crm/objects/2026-09/0-420/:listingId', 'DELETE'] as const
}

export function useDeleteCrmObjects2026090420ListingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjects2026090420ListingIdKey()
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
            (typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'][':listingId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjects2026090420ListingIdKey() {
  return ['crm', '/crm/objects/2026-09/0-420/:listingId', 'PATCH'] as const
}

export function usePatchCrmObjects2026090420ListingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjects2026090420ListingIdKey()
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
            (typeof client.crm.objects)['2026-09']['0-420'][':listingId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09']['0-420'][':listingId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ListingsGdprDeleteKey() {
  return ['crm', '/crm/objects/2026-09/listings/gdpr-delete', 'POST'] as const
}

export function usePostCrmObjects202609ListingsGdprDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09']['listings']['gdpr-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['listings']['gdpr-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ListingsGdprDeleteKey()
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
            (typeof client.crm.objects)['2026-09']['listings']['gdpr-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].listings['gdpr-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ListingsMergeKey() {
  return ['crm', '/crm/objects/2026-09/listings/merge', 'POST'] as const
}

export function usePostCrmObjects202609ListingsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['listings']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['listings']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ListingsMergeKey()
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
            (typeof client.crm.objects)['2026-09']['listings']['merge']['$post']
          >
        },
      ) => parseResponse(client.crm.objects['2026-09'].listings.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609ListingsListingIdAssociationsToObjectTypeKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/objects/2026-09/listings/:listingId/associations/:toObjectType',
    args,
  ] as const
}

export function useGetCrmObjects202609ListingsListingIdAssociationsToObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609ListingsListingIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].listings[':listingId'].associations[':toObjectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ListingsListingIdAssociationsToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609ListingsListingIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['listings'][':listingId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].listings[':listingId'].associations[':toObjectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function usePutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
            ':toObjectType'
          ][':toObjectId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function usePutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
            ':toObjectId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'DELETE',
  ] as const
}

export function useDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
            ':toObjectId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
