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

export function getGetCrmObjects202609CommunicationsKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/communications', args] as const
}

export function useGetCrmObjects202609Communications<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['communications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjects202609CommunicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['communications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'].communications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609Communications<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['communications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmObjects202609CommunicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['communications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'].communications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsKey() {
  return ['crm', '/crm/objects/2026-09/communications', 'POST'] as const
}

export function usePostCrmObjects202609Communications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['communications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09'].communications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsBatchArchiveKey() {
  return ['crm', '/crm/objects/2026-09/communications/batch/archive', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsBatchArchiveKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsBatchCreateKey() {
  return ['crm', '/crm/objects/2026-09/communications/batch/create', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['communications']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsBatchCreateKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsBatchReadKey() {
  return ['crm', '/crm/objects/2026-09/communications/batch/read', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['communications']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsBatchReadKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsBatchUpdateKey() {
  return ['crm', '/crm/objects/2026-09/communications/batch/update', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['communications']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsBatchUpdateKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsBatchUpsertKey() {
  return ['crm', '/crm/objects/2026-09/communications/batch/upsert', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['communications']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['batch']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsBatchUpsertKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.batch.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsGdprDeleteKey() {
  return ['crm', '/crm/objects/2026-09/communications/gdpr-delete', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsGdprDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications']['gdpr-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications']['gdpr-delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsGdprDeleteKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['gdpr-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications['gdpr-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsMergeKey() {
  return ['crm', '/crm/objects/2026-09/communications/merge', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['communications']['merge']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsMergeKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['merge']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'].communications.merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609CommunicationsSearchKey() {
  return ['crm', '/crm/objects/2026-09/communications/search', 'POST'] as const
}

export function usePostCrmObjects202609CommunicationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['communications']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09']['communications']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609CommunicationsSearchKey()
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
            (typeof client.crm.objects)['2026-09']['communications']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications.search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609CommunicationsCommunicationIdKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/communications/:communicationId', args] as const
}

export function useGetCrmObjects202609CommunicationsCommunicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
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
        ? getGetCrmObjects202609CommunicationsCommunicationIdKey(args)
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
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
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
          client.crm.objects['2026-09'].communications[':communicationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609CommunicationsCommunicationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
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
        ? getGetCrmObjects202609CommunicationsCommunicationIdKey(args)
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
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$get']
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
          client.crm.objects['2026-09'].communications[':communicationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjects202609CommunicationsCommunicationIdKey() {
  return ['crm', '/crm/objects/2026-09/communications/:communicationId', 'DELETE'] as const
}

export function useDeleteCrmObjects202609CommunicationsCommunicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjects202609CommunicationsCommunicationIdKey()
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
            (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications[':communicationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjects202609CommunicationsCommunicationIdKey() {
  return ['crm', '/crm/objects/2026-09/communications/:communicationId', 'PATCH'] as const
}

export function usePatchCrmObjects202609CommunicationsCommunicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjects202609CommunicationsCommunicationIdKey()
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
            (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'].communications[':communicationId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/objects/2026-09/communications/:communicationId/associations/:toObjectType',
    args,
  ] as const
}

export function useGetCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].communications[':communicationId'].associations[
            ':toObjectType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
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
        ? getGetCrmObjects202609CommunicationsCommunicationIdAssociationsToObjectTypeKey(args)
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
                (typeof client.crm.objects)['2026-09']['communications'][':communicationId']['associations'][':toObjectType']['$get']
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
          client.crm.objects['2026-09'].communications[':communicationId'].associations[
            ':toObjectType'
          ].$get(args, clientOptions),
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
