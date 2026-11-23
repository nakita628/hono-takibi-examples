import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPutV2BotAudienceGroupUploadKey() {
  return ['v2', '/v2/bot/audienceGroup/upload', 'PUT'] as const
}

export function usePutV2BotAudienceGroupUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BotAudienceGroupUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$put> },
      ) => parseResponse(client.v2.bot.audienceGroup.upload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotAudienceGroupUploadKey() {
  return ['v2', '/v2/bot/audienceGroup/upload', 'POST'] as const
}

export function usePostV2BotAudienceGroupUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotAudienceGroupUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.upload.$post> },
      ) => parseResponse(client.v2.bot.audienceGroup.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2BotAudienceGroupUploadByFileKey() {
  return ['v2', '/v2/bot/audienceGroup/upload/byFile', 'PUT'] as const
}

export function usePutV2BotAudienceGroupUploadByFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BotAudienceGroupUploadByFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$put> },
      ) => parseResponse(client.v2.bot.audienceGroup.upload.byFile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotAudienceGroupUploadByFileKey() {
  return ['v2', '/v2/bot/audienceGroup/upload/byFile', 'POST'] as const
}

export function usePostV2BotAudienceGroupUploadByFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotAudienceGroupUploadByFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.upload.byFile.$post> },
      ) => parseResponse(client.v2.bot.audienceGroup.upload.byFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotAudienceGroupClickKey() {
  return ['v2', '/v2/bot/audienceGroup/click', 'POST'] as const
}

export function usePostV2BotAudienceGroupClick<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.click.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.click.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotAudienceGroupClickKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.click.$post> },
      ) => parseResponse(client.v2.bot.audienceGroup.click.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BotAudienceGroupImpKey() {
  return ['v2', '/v2/bot/audienceGroup/imp', 'POST'] as const
}

export function usePostV2BotAudienceGroupImp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.imp.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BotAudienceGroupImpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.bot.audienceGroup.imp.$post> },
      ) => parseResponse(client.v2.bot.audienceGroup.imp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionKey() {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId/updateDescription', 'PUT'] as const
}

export function usePutV2BotAudienceGroupAudienceGroupIdUpdateDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2BotAudienceGroupAudienceGroupIdUpdateDescriptionKey()
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
            (typeof client.v2.bot.audienceGroup)[':audienceGroupId']['updateDescription']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.bot.audienceGroup[':audienceGroupId'].updateDescription.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotAudienceGroupAudienceGroupIdKey(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
) {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId', args] as const
}

export function useGetV2BotAudienceGroupAudienceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupAudienceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotAudienceGroupAudienceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupAudienceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BotAudienceGroupAudienceGroupIdKey() {
  return ['v2', '/v2/bot/audienceGroup/:audienceGroupId', 'DELETE'] as const
}

export function useDeleteV2BotAudienceGroupAudienceGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BotAudienceGroupAudienceGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.bot.audienceGroup)[':audienceGroupId']['$delete']>
        },
      ) =>
        parseResponse(client.v2.bot.audienceGroup[':audienceGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BotAudienceGroupListKey(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
) {
  return ['v2', '/v2/bot/audienceGroup/list', args] as const
}

export function useGetV2BotAudienceGroupList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.audienceGroup.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotAudienceGroupList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.bot.audienceGroup.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.audienceGroup.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotAudienceGroupSharedAudienceGroupIdKey(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
) {
  return ['v2', '/v2/bot/audienceGroup/shared/:audienceGroupId', args] as const
}

export function useGetV2BotAudienceGroupSharedAudienceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
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
        ? getGetV2BotAudienceGroupSharedAudienceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.audienceGroup.shared[':audienceGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotAudienceGroupSharedAudienceGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
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
        ? getGetV2BotAudienceGroupSharedAudienceGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.bot.audienceGroup.shared)[':audienceGroupId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.bot.audienceGroup.shared[':audienceGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BotAudienceGroupSharedListKey(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
) {
  return ['v2', '/v2/bot/audienceGroup/shared/list', args] as const
}

export function useGetV2BotAudienceGroupSharedList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupSharedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.audienceGroup.shared.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BotAudienceGroupSharedList<TError = unknown>(
  args: InferRequestType<typeof client.v2.bot.audienceGroup.shared.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BotAudienceGroupSharedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.bot.audienceGroup.shared.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.bot.audienceGroup.shared.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
