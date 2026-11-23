import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMediaBridgeKey() {
  return ['media-bridge'] as const
}

export function getPostMediaBridge202609EventsAttentionSpanKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/attention-span', 'POST'] as const
}

export function usePostMediaBridge202609EventsAttentionSpan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609EventsAttentionSpanKey()
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
            (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'].events['attention-span'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609EventsMediaPlayedKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/media-played', 'POST'] as const
}

export function usePostMediaBridge202609EventsMediaPlayed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609EventsMediaPlayedKey()
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
            (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'].events['media-played'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609EventsMediaPlayedPercentKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/media-played-percent', 'POST'] as const
}

export function usePostMediaBridge202609EventsMediaPlayedPercent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609EventsMediaPlayedPercentKey()
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
            (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'].events['media-played-percent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdPropertiesObjectTypeKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/properties/:objectType', args] as const
}

export function useGetMediaBridge202609AppIdPropertiesObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdPropertiesObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/properties/:objectType', 'POST'] as const
}

export function usePostMediaBridge202609AppIdPropertiesObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdPropertiesObjectTypeKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/archive',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.archive.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/create',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.create.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/read',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchRead<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups',
    args,
  ] as const
}

export function useGetMediaBridge202609AppIdPropertiesObjectTypeGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdPropertiesObjectTypeGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    args,
  ] as const
}

export function useGetMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
            ':groupName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
            ':groupName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    'DELETE',
  ] as const
}

export function useDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
            ':groupName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    'PATCH',
  ] as const
}

export function usePatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
            ':groupName'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    args,
  ] as const
}

export function useGetMediaBridge202609AppIdPropertiesObjectTypePropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
            ':propertyName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdPropertiesObjectTypePropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
        ? getGetMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
            ':propertyName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    'DELETE',
  ] as const
}

export function useDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
            ':propertyName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    'PATCH',
  ] as const
}

export function usePatchMediaBridge202609AppIdPropertiesObjectTypePropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
            ':propertyName'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSchemasKey(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas', args] as const
}

export function useGetMediaBridge202609AppIdSchemas<TError = unknown>(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
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
        ? getGetMediaBridge202609AppIdSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSchemas<TError = unknown>(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
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
        ? getGetMediaBridge202609AppIdSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSchemasObjectTypeKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas/:objectType', args] as const
}

export function useGetMediaBridge202609AppIdSchemasObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
        ? getGetMediaBridge202609AppIdSchemasObjectTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSchemasObjectType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
        ? getGetMediaBridge202609AppIdSchemasObjectTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMediaBridge202609AppIdSchemasObjectTypeKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas/:objectType', 'PATCH'] as const
}

export function usePatchMediaBridge202609AppIdSchemasObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaBridge202609AppIdSchemasObjectTypeKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/schemas/:objectType/associations',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdSchemasObjectTypeAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/schemas/:objectType/associations/:associationId',
    'DELETE',
  ] as const
}

export function useDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations[
            ':associationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMediaBridge202609AppIdSettingsKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings', 'PUT'] as const
}

export function usePutMediaBridge202609AppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMediaBridge202609AppIdSettingsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSettingsEventVisibilityKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/event-visibility', args] as const
}

export function useGetMediaBridge202609AppIdSettingsEventVisibility<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsEventVisibilityKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSettingsEventVisibility<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsEventVisibilityKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMediaBridge202609AppIdSettingsEventVisibilityKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/event-visibility',
    'PATCH',
  ] as const
}

export function usePatchMediaBridge202609AppIdSettingsEventVisibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaBridge202609AppIdSettingsEventVisibilityKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdSettingsObjectDefinitionsKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/object-definitions',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdSettingsObjectDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdSettingsObjectDefinitionsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['object-definitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/object-definitions/:mediaType',
    args,
  ] as const
}

export function useGetMediaBridge202609AppIdSettingsObjectDefinitionsMediaType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][
            ':mediaType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSettingsObjectDefinitionsMediaType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][
            ':mediaType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSettingsOembedDomainsKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', args] as const
}

export function useGetMediaBridge202609AppIdSettingsOembedDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsOembedDomainsKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSettingsOembedDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsOembedDomainsKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdSettingsOembedDomainsKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', 'POST'] as const
}

export function usePostMediaBridge202609AppIdSettingsOembedDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdSettingsOembedDomainsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMediaBridge202609AppIdSettingsOembedDomainsKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', 'DELETE'] as const
}

export function useDeleteMediaBridge202609AppIdSettingsOembedDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaBridge202609AppIdSettingsOembedDomainsKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains/:oEmbedDomainId',
    args,
  ] as const
}

export function useGetMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
            ':oEmbedDomainId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
        ? getGetMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdKey(args)
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
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
            ':oEmbedDomainId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains/:oEmbedDomainId',
    'PATCH',
  ] as const
}

export function usePatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
            ':oEmbedDomainId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdSettingsRegisterKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/register', 'POST'] as const
}

export function usePostMediaBridge202609AppIdSettingsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdSettingsRegisterKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings.register.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/video-association-definition',
    'POST',
  ] as const
}

export function usePostMediaBridge202609AppIdSettingsVideoAssociationDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionKey()
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
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings[
            'video-association-definition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
