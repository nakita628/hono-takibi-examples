import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getGatewayKey() {
  return ['gateway'] as const
}

export function getGuildsKey() {
  return ['guilds'] as const
}

export function getInteractionsKey() {
  return ['interactions'] as const
}

export function getInvitesKey() {
  return ['invites'] as const
}

export function getLobbiesKey() {
  return ['lobbies'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getPartnerSdkKey() {
  return ['partner-sdk'] as const
}

export function getSkusKey() {
  return ['skus'] as const
}

export function getSoundboardDefaultSoundsKey() {
  return ['soundboard-default-sounds'] as const
}

export function getStageInstancesKey() {
  return ['stage-instances'] as const
}

export function getStickerPacksKey() {
  return ['sticker-packs'] as const
}

export function getStickersKey() {
  return ['stickers'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetApplicationsMeKey() {
  return ['applications', '/applications/@me'] as const
}

export function useGetApplicationsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApplicationsMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApplicationsMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApplicationsMeKey() {
  return ['applications', '/applications/@me', 'PATCH'] as const
}

export function usePatchApplicationsMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)['@me']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)['@me']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.applications)['@me']['$patch']> },
      ) => parseResponse(client.applications['@me'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdKey(
  args: InferRequestType<(typeof client.applications)[':application_id']['$get']>,
) {
  return ['applications', '/applications/:application_id', args] as const
}

export function useGetApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
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
        ? getGetApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':application_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
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
        ? getGetApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':application_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdKey() {
  return ['applications', '/applications/:application_id', 'PATCH'] as const
}

export function usePatchApplicationsApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.applications)[':application_id']['$patch']> },
      ) => parseResponse(client.applications[':application_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdActivityInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
  >,
) {
  return [
    'applications',
    '/applications/:application_id/activity-instances/:instance_id',
    args,
  ] as const
}

export function useGetApplicationsApplicationIdActivityInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
        ? getGetApplicationsApplicationIdActivityInstancesInstanceIdKey(args)
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
                (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
          client.applications[':application_id']['activity-instances'][':instance_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdActivityInstancesInstanceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
        ? getGetApplicationsApplicationIdActivityInstancesInstanceIdKey(args)
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
                (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
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
          client.applications[':application_id']['activity-instances'][':instance_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdAttachmentKey() {
  return ['applications', '/applications/:application_id/attachment', 'POST'] as const
}

export function usePostApplicationsApplicationIdAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':application_id']['attachment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['attachment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdAttachmentKey()
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
            (typeof client.applications)[':application_id']['attachment']['$post']
          >
        },
      ) =>
        parseResponse(client.applications[':application_id'].attachment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdCommandsKey(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>,
) {
  return ['applications', '/applications/:application_id/commands', args] as const
}

export function useGetApplicationsApplicationIdCommands<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
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
        ? getGetApplicationsApplicationIdCommandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':application_id'].commands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdCommands<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
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
        ? getGetApplicationsApplicationIdCommandsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':application_id'].commands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApplicationsApplicationIdCommandsKey() {
  return ['applications', '/applications/:application_id/commands', 'PUT'] as const
}

export function usePutApplicationsApplicationIdCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApplicationsApplicationIdCommandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>
        },
      ) => parseResponse(client.applications[':application_id'].commands.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdCommandsKey() {
  return ['applications', '/applications/:application_id/commands', 'POST'] as const
}

export function usePostApplicationsApplicationIdCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['commands']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['commands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdCommandsKey()
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
            (typeof client.applications)[':application_id']['commands']['$post']
          >
        },
      ) => parseResponse(client.applications[':application_id'].commands.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdCommandsCommandIdKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
  >,
) {
  return ['applications', '/applications/:application_id/commands/:command_id', args] as const
}

export function useGetApplicationsApplicationIdCommandsCommandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
        ? getGetApplicationsApplicationIdCommandsCommandIdKey(args)
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
                (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
          client.applications[':application_id'].commands[':command_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdCommandsCommandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
        ? getGetApplicationsApplicationIdCommandsCommandIdKey(args)
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
                (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
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
          client.applications[':application_id'].commands[':command_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdCommandsCommandIdKey() {
  return ['applications', '/applications/:application_id/commands/:command_id', 'DELETE'] as const
}

export function useDeleteApplicationsApplicationIdCommandsCommandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdCommandsCommandIdKey()
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
            (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].commands[':command_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdCommandsCommandIdKey() {
  return ['applications', '/applications/:application_id/commands/:command_id', 'PATCH'] as const
}

export function usePatchApplicationsApplicationIdCommandsCommandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdCommandsCommandIdKey()
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
            (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].commands[':command_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEmojisKey(
  args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>,
) {
  return ['applications', '/applications/:application_id/emojis', args] as const
}

export function useGetApplicationsApplicationIdEmojis<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
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
        ? getGetApplicationsApplicationIdEmojisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':application_id'].emojis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEmojis<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
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
        ? getGetApplicationsApplicationIdEmojisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':application_id'].emojis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdEmojisKey() {
  return ['applications', '/applications/:application_id/emojis', 'POST'] as const
}

export function usePostApplicationsApplicationIdEmojis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':application_id']['emojis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdEmojisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>
        },
      ) => parseResponse(client.applications[':application_id'].emojis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEmojisEmojiIdKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
  >,
) {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', args] as const
}

export function useGetApplicationsApplicationIdEmojisEmojiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
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
        ? getGetApplicationsApplicationIdEmojisEmojiIdKey(args)
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
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
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
          client.applications[':application_id'].emojis[':emoji_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEmojisEmojiId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
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
        ? getGetApplicationsApplicationIdEmojisEmojiIdKey(args)
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
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
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
          client.applications[':application_id'].emojis[':emoji_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdEmojisEmojiIdKey() {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', 'DELETE'] as const
}

export function useDeleteApplicationsApplicationIdEmojisEmojiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdEmojisEmojiIdKey()
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
            (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].emojis[':emoji_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdEmojisEmojiIdKey() {
  return ['applications', '/applications/:application_id/emojis/:emoji_id', 'PATCH'] as const
}

export function usePatchApplicationsApplicationIdEmojisEmojiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdEmojisEmojiIdKey()
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
            (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].emojis[':emoji_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEntitlementsKey(
  args: InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>,
) {
  return ['applications', '/applications/:application_id/entitlements', args] as const
}

export function useGetApplicationsApplicationIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>
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
        ? getGetApplicationsApplicationIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.applications[':application_id'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>
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
        ? getGetApplicationsApplicationIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':application_id']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.applications[':application_id'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdEntitlementsKey() {
  return ['applications', '/applications/:application_id/entitlements', 'POST'] as const
}

export function usePostApplicationsApplicationIdEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':application_id']['entitlements']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdEntitlementsKey()
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
            (typeof client.applications)[':application_id']['entitlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].entitlements.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEntitlementsEntitlementIdKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
  >,
) {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id',
    args,
  ] as const
}

export function useGetApplicationsApplicationIdEntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
        ? getGetApplicationsApplicationIdEntitlementsEntitlementIdKey(args)
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
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
          client.applications[':application_id'].entitlements[':entitlement_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
        ? getGetApplicationsApplicationIdEntitlementsEntitlementIdKey(args)
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
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
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
          client.applications[':application_id'].entitlements[':entitlement_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdEntitlementsEntitlementIdKey() {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdEntitlementsEntitlementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdEntitlementsEntitlementIdKey()
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
            (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].entitlements[':entitlement_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeKey() {
  return [
    'applications',
    '/applications/:application_id/entitlements/:entitlement_id/consume',
    'POST',
  ] as const
}

export function usePostApplicationsApplicationIdEntitlementsEntitlementIdConsume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdEntitlementsEntitlementIdConsumeKey()
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
            (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].entitlements[':entitlement_id'].consume.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdGuildsGuildIdCommandsKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
  >,
) {
  return ['applications', '/applications/:application_id/guilds/:guild_id/commands', args] as const
}

export function useGetApplicationsApplicationIdGuildsGuildIdCommands<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdGuildsGuildIdCommands<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsKey() {
  return ['applications', '/applications/:application_id/guilds/:guild_id/commands', 'PUT'] as const
}

export function usePutApplicationsApplicationIdGuildsGuildIdCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApplicationsApplicationIdGuildsGuildIdCommandsKey()
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
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdGuildsGuildIdCommandsKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands',
    'POST',
  ] as const
}

export function usePostApplicationsApplicationIdGuildsGuildIdCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdGuildsGuildIdCommandsKey()
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
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdGuildsGuildIdCommandsPermissionsKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/permissions',
    args,
  ] as const
}

export function useGetApplicationsApplicationIdGuildsGuildIdCommandsPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsPermissionsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdGuildsGuildIdCommandsPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsPermissionsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands.permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    args,
  ] as const
}

export function useGetApplicationsApplicationIdGuildsGuildIdCommandsCommandId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey()
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
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands[
            ':command_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id',
    'PATCH',
  ] as const
}

export function usePatchApplicationsApplicationIdGuildsGuildIdCommandsCommandId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdKey()
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
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
  >,
) {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id/permissions',
    args,
  ] as const
}

export function useGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands[
            ':command_id'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
        ? getGetApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsKey(args)
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
                (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
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
          client.applications[':application_id'].guilds[':guild_id'].commands[
            ':command_id'
          ].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsKey() {
  return [
    'applications',
    '/applications/:application_id/guilds/:guild_id/commands/:command_id/permissions',
    'PUT',
  ] as const
}

export function usePutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsKey()
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
            (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id'].guilds[':guild_id'].commands[
            ':command_id'
          ].permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdRoleConnectionsMetadataKey(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
  >,
) {
  return ['applications', '/applications/:application_id/role-connections/metadata', args] as const
}

export function useGetApplicationsApplicationIdRoleConnectionsMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
        ? getGetApplicationsApplicationIdRoleConnectionsMetadataKey(args)
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
                (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
          client.applications[':application_id']['role-connections'].metadata.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdRoleConnectionsMetadata<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
        ? getGetApplicationsApplicationIdRoleConnectionsMetadataKey(args)
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
                (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
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
          client.applications[':application_id']['role-connections'].metadata.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApplicationsApplicationIdRoleConnectionsMetadataKey() {
  return ['applications', '/applications/:application_id/role-connections/metadata', 'PUT'] as const
}

export function usePutApplicationsApplicationIdRoleConnectionsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApplicationsApplicationIdRoleConnectionsMetadataKey()
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
            (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.applications[':application_id']['role-connections'].metadata.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
) {
  return ['channels', '/channels/:channel_id', args] as const
}

export function useGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdKey() {
  return ['channels', '/channels/:channel_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['$delete']> },
      ) => parseResponse(client.channels[':channel_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelsChannelIdKey() {
  return ['channels', '/channels/:channel_id', 'PATCH'] as const
}

export function usePatchChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':channel_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['$patch']> },
      ) => parseResponse(client.channels[':channel_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdFollowersKey() {
  return ['channels', '/channels/:channel_id/followers', 'POST'] as const
}

export function usePostChannelsChannelIdFollowers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['followers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdFollowersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].followers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdInvitesKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>,
) {
  return ['channels', '/channels/:channel_id/invites', args] as const
}

export function useGetChannelsChannelIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
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
        ? getGetChannelsChannelIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
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
        ? getGetChannelsChannelIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdInvitesKey() {
  return ['channels', '/channels/:channel_id/invites', 'POST'] as const
}

export function usePostChannelsChannelIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['invites']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdMessagesKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
) {
  return ['channels', '/channels/:channel_id/messages', args] as const
}

export function useGetChannelsChannelIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
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
        ? getGetChannelsChannelIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
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
        ? getGetChannelsChannelIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdMessagesKey() {
  return ['channels', '/channels/:channel_id/messages', 'POST'] as const
}

export function usePostChannelsChannelIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdMessagesBulkDeleteKey() {
  return ['channels', '/channels/:channel_id/messages/bulk-delete', 'POST'] as const
}

export function usePostChannelsChannelIdMessagesBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdMessagesBulkDeleteKey()
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
            (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages['bulk-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdMessagesPinsKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>,
) {
  return ['channels', '/channels/:channel_id/messages/pins', args] as const
}

export function useGetChannelsChannelIdMessagesPins<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
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
        ? getGetChannelsChannelIdMessagesPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].messages.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdMessagesPins<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
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
        ? getGetChannelsChannelIdMessagesPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].messages.pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdMessagesPinsMessageIdKey() {
  return ['channels', '/channels/:channel_id/messages/pins/:message_id', 'PUT'] as const
}

export function usePutChannelsChannelIdMessagesPinsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdMessagesPinsMessageIdKey()
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
            (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages.pins[':message_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesPinsMessageIdKey() {
  return ['channels', '/channels/:channel_id/messages/pins/:message_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdMessagesPinsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdMessagesPinsMessageIdKey()
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
            (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages.pins[':message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdMessagesMessageIdKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/messages/:message_id', args] as const
}

export function useGetChannelsChannelIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
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
        ? getGetChannelsChannelIdMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
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
        ? getGetChannelsChannelIdMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesMessageIdKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdMessagesMessageIdKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchChannelsChannelIdMessagesMessageIdKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id', 'PATCH'] as const
}

export function usePatchChannelsChannelIdMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchChannelsChannelIdMessagesMessageIdKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdMessagesMessageIdCrosspostKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/crosspost', 'POST'] as const
}

export function usePostChannelsChannelIdMessagesMessageIdCrosspost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdMessagesMessageIdCrosspostKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].crosspost.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/reactions', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdMessagesMessageIdReactionsKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdMessagesMessageIdReactionsEmojiNameKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
  >,
) {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name',
    args,
  ] as const
}

export function useGetChannelsChannelIdMessagesMessageIdReactionsEmojiName<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
        ? getGetChannelsChannelIdMessagesMessageIdReactionsEmojiNameKey(args)
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
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdMessagesMessageIdReactionsEmojiName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
        ? getGetChannelsChannelIdMessagesMessageIdReactionsEmojiNameKey(args)
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
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
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
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name',
    'DELETE',
  ] as const
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me',
    'PUT',
  ] as const
}

export function usePutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
            '@me'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me',
    'DELETE',
  ] as const
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
            '@me'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdKey() {
  return [
    'channels',
    '/channels/:channel_id/messages/:message_id/reactions/:emoji_name/:user_id',
    'DELETE',
  ] as const
}

export function useDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
            ':user_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdMessagesMessageIdThreadsKey() {
  return ['channels', '/channels/:channel_id/messages/:message_id/threads', 'POST'] as const
}

export function usePostChannelsChannelIdMessagesMessageIdThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdMessagesMessageIdThreadsKey()
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
            (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].messages[':message_id'].threads.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdPermissionsMemberUserIdKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/permissions/member/:user_id', args] as const
}

export function useGetChannelsChannelIdPermissionsMemberUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
        ? getGetChannelsChannelIdPermissionsMemberUserIdKey(args)
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
                (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
          client.channels[':channel_id'].permissions.member[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPermissionsMemberUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
        ? getGetChannelsChannelIdPermissionsMemberUserIdKey(args)
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
                (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
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
          client.channels[':channel_id'].permissions.member[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdPermissionsRoleRoleIdKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/permissions/role/:role_id', args] as const
}

export function useGetChannelsChannelIdPermissionsRoleRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
        ? getGetChannelsChannelIdPermissionsRoleRoleIdKey(args)
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
                (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
          client.channels[':channel_id'].permissions.role[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPermissionsRoleRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
        ? getGetChannelsChannelIdPermissionsRoleRoleIdKey(args)
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
                (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
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
          client.channels[':channel_id'].permissions.role[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdPermissionsOverwriteIdKey() {
  return ['channels', '/channels/:channel_id/permissions/:overwrite_id', 'PUT'] as const
}

export function usePutChannelsChannelIdPermissionsOverwriteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdPermissionsOverwriteIdKey()
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
            (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].permissions[':overwrite_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdPermissionsOverwriteIdKey() {
  return ['channels', '/channels/:channel_id/permissions/:overwrite_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdPermissionsOverwriteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdPermissionsOverwriteIdKey()
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
            (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].permissions[':overwrite_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdPinsKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>,
) {
  return ['channels', '/channels/:channel_id/pins', args] as const
}

export function useGetChannelsChannelIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
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
        ? getGetChannelsChannelIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPins<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
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
        ? getGetChannelsChannelIdPinsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['pins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].pins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdPinsMessageIdKey() {
  return ['channels', '/channels/:channel_id/pins/:message_id', 'PUT'] as const
}

export function usePutChannelsChannelIdPinsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdPinsMessageIdKey()
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
            (typeof client.channels)[':channel_id']['pins'][':message_id']['$put']
          >
        },
      ) =>
        parseResponse(client.channels[':channel_id'].pins[':message_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdPinsMessageIdKey() {
  return ['channels', '/channels/:channel_id/pins/:message_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdPinsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdPinsMessageIdKey()
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
            (typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].pins[':message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdPollsMessageIdAnswersAnswerIdKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/polls/:message_id/answers/:answer_id', args] as const
}

export function useGetChannelsChannelIdPollsMessageIdAnswersAnswerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
        ? getGetChannelsChannelIdPollsMessageIdAnswersAnswerIdKey(args)
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
                (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
          client.channels[':channel_id'].polls[':message_id'].answers[':answer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdPollsMessageIdAnswersAnswerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
        ? getGetChannelsChannelIdPollsMessageIdAnswersAnswerIdKey(args)
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
                (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
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
          client.channels[':channel_id'].polls[':message_id'].answers[':answer_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdPollsMessageIdExpireKey() {
  return ['channels', '/channels/:channel_id/polls/:message_id/expire', 'POST'] as const
}

export function usePostChannelsChannelIdPollsMessageIdExpire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdPollsMessageIdExpireKey()
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
            (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].polls[':message_id'].expire.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutChannelsChannelIdRecipientsUserIdKey() {
  return ['channels', '/channels/:channel_id/recipients/:user_id', 'PUT'] as const
}

export function usePutChannelsChannelIdRecipientsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdRecipientsUserIdKey()
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
            (typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].recipients[':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdRecipientsUserIdKey() {
  return ['channels', '/channels/:channel_id/recipients/:user_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdRecipientsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdRecipientsUserIdKey()
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
            (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id'].recipients[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdSendSoundboardSoundKey() {
  return ['channels', '/channels/:channel_id/send-soundboard-sound', 'POST'] as const
}

export function usePostChannelsChannelIdSendSoundboardSound<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdSendSoundboardSoundKey()
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
            (typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id']['send-soundboard-sound'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdThreadMembersKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>,
) {
  return ['channels', '/channels/:channel_id/thread-members', args] as const
}

export function useGetChannelsChannelIdThreadMembers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
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
        ? getGetChannelsChannelIdThreadMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id']['thread-members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdThreadMembers<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
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
        ? getGetChannelsChannelIdThreadMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['thread-members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id']['thread-members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdThreadMembersMeKey() {
  return ['channels', '/channels/:channel_id/thread-members/@me', 'PUT'] as const
}

export function usePutChannelsChannelIdThreadMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdThreadMembersMeKey()
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
            (typeof client.channels)[':channel_id']['thread-members']['@me']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id']['thread-members']['@me'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdThreadMembersMeKey() {
  return ['channels', '/channels/:channel_id/thread-members/@me', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdThreadMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdThreadMembersMeKey()
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
            (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id']['thread-members']['@me'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdThreadMembersUserIdKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', args] as const
}

export function useGetChannelsChannelIdThreadMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
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
        ? getGetChannelsChannelIdThreadMembersUserIdKey(args)
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
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
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
          client.channels[':channel_id']['thread-members'][':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdThreadMembersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
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
        ? getGetChannelsChannelIdThreadMembersUserIdKey(args)
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
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
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
          client.channels[':channel_id']['thread-members'][':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdThreadMembersUserIdKey() {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', 'PUT'] as const
}

export function usePutChannelsChannelIdThreadMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdThreadMembersUserIdKey()
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
            (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id']['thread-members'][':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsChannelIdThreadMembersUserIdKey() {
  return ['channels', '/channels/:channel_id/thread-members/:user_id', 'DELETE'] as const
}

export function useDeleteChannelsChannelIdThreadMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsChannelIdThreadMembersUserIdKey()
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
            (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channels[':channel_id']['thread-members'][':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsChannelIdThreadsKey() {
  return ['channels', '/channels/:channel_id/threads', 'POST'] as const
}

export function usePostChannelsChannelIdThreads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['threads']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdThreadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].threads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdThreadsArchivedPrivateKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/threads/archived/private', args] as const
}

export function useGetChannelsChannelIdThreadsArchivedPrivate<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
        ? getGetChannelsChannelIdThreadsArchivedPrivateKey(args)
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
                (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
          client.channels[':channel_id'].threads.archived.private.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdThreadsArchivedPrivate<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
        ? getGetChannelsChannelIdThreadsArchivedPrivateKey(args)
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
                (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
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
          client.channels[':channel_id'].threads.archived.private.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdThreadsArchivedPublicKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/threads/archived/public', args] as const
}

export function useGetChannelsChannelIdThreadsArchivedPublic<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
        ? getGetChannelsChannelIdThreadsArchivedPublicKey(args)
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
                (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
          client.channels[':channel_id'].threads.archived.public.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdThreadsArchivedPublic<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
        ? getGetChannelsChannelIdThreadsArchivedPublicKey(args)
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
                (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
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
          client.channels[':channel_id'].threads.archived.public.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsChannelIdThreadsSearchKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>,
) {
  return ['channels', '/channels/:channel_id/threads/search', args] as const
}

export function useGetChannelsChannelIdThreadsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
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
        ? getGetChannelsChannelIdThreadsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].threads.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdThreadsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
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
        ? getGetChannelsChannelIdThreadsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.channels[':channel_id'].threads.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdTypingKey() {
  return ['channels', '/channels/:channel_id/typing', 'POST'] as const
}

export function usePostChannelsChannelIdTyping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['typing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdTypingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].typing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdUsersMeThreadsArchivedPrivateKey(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
  >,
) {
  return ['channels', '/channels/:channel_id/users/@me/threads/archived/private', args] as const
}

export function useGetChannelsChannelIdUsersMeThreadsArchivedPrivate<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
        ? getGetChannelsChannelIdUsersMeThreadsArchivedPrivateKey(args)
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
                (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
          client.channels[':channel_id'].users['@me'].threads.archived.private.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdUsersMeThreadsArchivedPrivate<TError = unknown>(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
        ? getGetChannelsChannelIdUsersMeThreadsArchivedPrivateKey(args)
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
                (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
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
          client.channels[':channel_id'].users['@me'].threads.archived.private.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelsChannelIdVoiceStatusKey() {
  return ['channels', '/channels/:channel_id/voice-status', 'PUT'] as const
}

export function usePutChannelsChannelIdVoiceStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['voice-status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsChannelIdVoiceStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>
        },
      ) => parseResponse(client.channels[':channel_id']['voice-status'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelsChannelIdWebhooksKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
) {
  return ['channels', '/channels/:channel_id/webhooks', args] as const
}

export function useGetChannelsChannelIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
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
        ? getGetChannelsChannelIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelsChannelIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
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
        ? getGetChannelsChannelIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channels[':channel_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChannelsChannelIdWebhooksKey() {
  return ['channels', '/channels/:channel_id/webhooks', 'POST'] as const
}

export function usePostChannelsChannelIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsChannelIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']> },
      ) => parseResponse(client.channels[':channel_id'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGatewayKey() {
  return ['gateway', '/gateway'] as const
}

export function useGetGateway<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGatewayKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGateway<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGatewayKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGatewayBotKey() {
  return ['gateway', '/gateway/bot'] as const
}

export function useGetGatewayBot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGatewayBotKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway.bot.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGatewayBot<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGatewayBotKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gateway.bot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gateway.bot.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsTemplatesCodeKey(
  args: InferRequestType<(typeof client.guilds.templates)[':code']['$get']>,
) {
  return ['guilds', '/guilds/templates/:code', args] as const
}

export function useGetGuildsTemplatesCode<TError = unknown>(
  args: InferRequestType<(typeof client.guilds.templates)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
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
        ? getGetGuildsTemplatesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds.templates[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsTemplatesCode<TError = unknown>(
  args: InferRequestType<(typeof client.guilds.templates)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
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
        ? getGetGuildsTemplatesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds.templates)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds.templates[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id', args] as const
}

export function useGetGuildsGuildId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGuildsGuildIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGuildsGuildIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdKey() {
  return ['guilds', '/guilds/:guild_id', 'PATCH'] as const
}

export function usePatchGuildsGuildId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.guilds)[':guild_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['$patch']> },
      ) => parseResponse(client.guilds[':guild_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdAuditLogsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/audit-logs', args] as const
}

export function useGetGuildsGuildIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
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
        ? getGetGuildsGuildIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdAuditLogs<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
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
        ? getGetGuildsGuildIdAuditLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['audit-logs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdAutoModerationRulesKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules', args] as const
}

export function useGetGuildsGuildIdAutoModerationRules<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
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
        ? getGetGuildsGuildIdAutoModerationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdAutoModerationRules<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
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
        ? getGetGuildsGuildIdAutoModerationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdAutoModerationRulesKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules', 'POST'] as const
}

export function usePostGuildsGuildIdAutoModerationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdAutoModerationRulesKey()
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
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdAutoModerationRulesRuleIdKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
  >,
) {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', args] as const
}

export function useGetGuildsGuildIdAutoModerationRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
        ? getGetGuildsGuildIdAutoModerationRulesRuleIdKey(args)
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
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
          client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdAutoModerationRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
        ? getGetGuildsGuildIdAutoModerationRulesRuleIdKey(args)
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
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
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
          client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdAutoModerationRulesRuleIdKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdAutoModerationRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdAutoModerationRulesRuleIdKey()
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
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdAutoModerationRulesRuleIdKey() {
  return ['guilds', '/guilds/:guild_id/auto-moderation/rules/:rule_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdAutoModerationRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdAutoModerationRulesRuleIdKey()
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
            (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdBansKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/bans', args] as const
}

export function useGetGuildsGuildIdBans<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
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
        ? getGetGuildsGuildIdBansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].bans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdBans<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
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
        ? getGetGuildsGuildIdBansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].bans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdBansUserIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', args] as const
}

export function useGetGuildsGuildIdBansUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
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
        ? getGetGuildsGuildIdBansUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].bans[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdBansUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
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
        ? getGetGuildsGuildIdBansUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].bans[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGuildsGuildIdBansUserIdKey() {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', 'PUT'] as const
}

export function usePutGuildsGuildIdBansUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdBansUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>
        },
      ) => parseResponse(client.guilds[':guild_id'].bans[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdBansUserIdKey() {
  return ['guilds', '/guilds/:guild_id/bans/:user_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdBansUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdBansUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>
        },
      ) => parseResponse(client.guilds[':guild_id'].bans[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGuildsGuildIdBulkBanKey() {
  return ['guilds', '/guilds/:guild_id/bulk-ban', 'POST'] as const
}

export function usePostGuildsGuildIdBulkBan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdBulkBanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']> },
      ) => parseResponse(client.guilds[':guild_id']['bulk-ban'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdChannelsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/channels', args] as const
}

export function useGetGuildsGuildIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
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
        ? getGetGuildsGuildIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
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
        ? getGetGuildsGuildIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdChannelsKey() {
  return ['guilds', '/guilds/:guild_id/channels', 'POST'] as const
}

export function usePostGuildsGuildIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdChannelsKey() {
  return ['guilds', '/guilds/:guild_id/channels', 'PATCH'] as const
}

export function usePatchGuildsGuildIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['channels']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']> },
      ) => parseResponse(client.guilds[':guild_id'].channels.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdEmojisKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/emojis', args] as const
}

export function useGetGuildsGuildIdEmojis<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
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
        ? getGetGuildsGuildIdEmojisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].emojis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdEmojis<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
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
        ? getGetGuildsGuildIdEmojisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].emojis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdEmojisKey() {
  return ['guilds', '/guilds/:guild_id/emojis', 'POST'] as const
}

export function usePostGuildsGuildIdEmojis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdEmojisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].emojis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdEmojisEmojiIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', args] as const
}

export function useGetGuildsGuildIdEmojisEmojiId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
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
        ? getGetGuildsGuildIdEmojisEmojiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdEmojisEmojiId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
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
        ? getGetGuildsGuildIdEmojisEmojiIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdEmojisEmojiIdKey() {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdEmojisEmojiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdEmojisEmojiIdKey()
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
            (typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdEmojisEmojiIdKey() {
  return ['guilds', '/guilds/:guild_id/emojis/:emoji_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdEmojisEmojiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdEmojisEmojiIdKey()
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
            (typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']
          >
        },
      ) => parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGuildsGuildIdIncidentActionsKey() {
  return ['guilds', '/guilds/:guild_id/incident-actions', 'PUT'] as const
}

export function usePutGuildsGuildIdIncidentActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdIncidentActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>
        },
      ) => parseResponse(client.guilds[':guild_id']['incident-actions'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdIntegrationsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/integrations', args] as const
}

export function useGetGuildsGuildIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
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
        ? getGetGuildsGuildIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
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
        ? getGetGuildsGuildIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdIntegrationsIntegrationIdKey() {
  return ['guilds', '/guilds/:guild_id/integrations/:integration_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdIntegrationsIntegrationIdKey()
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
            (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].integrations[':integration_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdInvitesKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/invites', args] as const
}

export function useGetGuildsGuildIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
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
        ? getGetGuildsGuildIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdInvites<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
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
        ? getGetGuildsGuildIdInvitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['invites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdMembersKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/members', args] as const
}

export function useGetGuildsGuildIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
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
        ? getGetGuildsGuildIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
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
        ? getGetGuildsGuildIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdMembersMeKey() {
  return ['guilds', '/guilds/:guild_id/members/@me', 'PATCH'] as const
}

export function usePatchGuildsGuildIdMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdMembersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>
        },
      ) => parseResponse(client.guilds[':guild_id'].members['@me'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdMembersSearchKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/members/search', args] as const
}

export function useGetGuildsGuildIdMembersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
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
        ? getGetGuildsGuildIdMembersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].members.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdMembersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
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
        ? getGetGuildsGuildIdMembersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].members.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdMembersUserIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/members/:user_id', args] as const
}

export function useGetGuildsGuildIdMembersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
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
        ? getGetGuildsGuildIdMembersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].members[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdMembersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
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
        ? getGetGuildsGuildIdMembersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].members[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGuildsGuildIdMembersUserIdKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'PUT'] as const
}

export function usePutGuildsGuildIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>
        },
      ) => parseResponse(client.guilds[':guild_id'].members[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdMembersUserIdKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdMembersUserIdKey()
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
            (typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.guilds[':guild_id'].members[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdMembersUserIdKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdMembersUserIdKey()
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
            (typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']
          >
        },
      ) => parseResponse(client.guilds[':guild_id'].members[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGuildsGuildIdMembersUserIdRolesRoleIdKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id/roles/:role_id', 'PUT'] as const
}

export function usePutGuildsGuildIdMembersUserIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdMembersUserIdRolesRoleIdKey()
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
            (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdMembersUserIdRolesRoleIdKey() {
  return ['guilds', '/guilds/:guild_id/members/:user_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdMembersUserIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdMembersUserIdRolesRoleIdKey()
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
            (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdMessagesSearchKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/messages/search', args] as const
}

export function useGetGuildsGuildIdMessagesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
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
        ? getGetGuildsGuildIdMessagesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].messages.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdMessagesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
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
        ? getGetGuildsGuildIdMessagesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].messages.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdNewMemberWelcomeKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/new-member-welcome', args] as const
}

export function useGetGuildsGuildIdNewMemberWelcome<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
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
        ? getGetGuildsGuildIdNewMemberWelcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['new-member-welcome'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdNewMemberWelcome<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
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
        ? getGetGuildsGuildIdNewMemberWelcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['new-member-welcome'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdOnboardingKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/onboarding', args] as const
}

export function useGetGuildsGuildIdOnboarding<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
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
        ? getGetGuildsGuildIdOnboardingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].onboarding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdOnboarding<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
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
        ? getGetGuildsGuildIdOnboardingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].onboarding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGuildsGuildIdOnboardingKey() {
  return ['guilds', '/guilds/:guild_id/onboarding', 'PUT'] as const
}

export function usePutGuildsGuildIdOnboarding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdOnboardingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']> },
      ) => parseResponse(client.guilds[':guild_id'].onboarding.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdPermissionsMemberUserIdKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
  >,
) {
  return ['guilds', '/guilds/:guild_id/permissions/member/:user_id', args] as const
}

export function useGetGuildsGuildIdPermissionsMemberUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
        ? getGetGuildsGuildIdPermissionsMemberUserIdKey(args)
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
                (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
          client.guilds[':guild_id'].permissions.member[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdPermissionsMemberUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
        ? getGetGuildsGuildIdPermissionsMemberUserIdKey(args)
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
                (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
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
          client.guilds[':guild_id'].permissions.member[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdPermissionsRoleRoleIdKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
  >,
) {
  return ['guilds', '/guilds/:guild_id/permissions/role/:role_id', args] as const
}

export function useGetGuildsGuildIdPermissionsRoleRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
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
        ? getGetGuildsGuildIdPermissionsRoleRoleIdKey(args)
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
                (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
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
          client.guilds[':guild_id'].permissions.role[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdPermissionsRoleRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
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
        ? getGetGuildsGuildIdPermissionsRoleRoleIdKey(args)
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
                (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
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
          client.guilds[':guild_id'].permissions.role[':role_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdPreviewKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/preview', args] as const
}

export function useGetGuildsGuildIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
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
        ? getGetGuildsGuildIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
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
        ? getGetGuildsGuildIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdPruneKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/prune', args] as const
}

export function useGetGuildsGuildIdPrune<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
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
        ? getGetGuildsGuildIdPruneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].prune.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdPrune<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
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
        ? getGetGuildsGuildIdPruneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].prune.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdPruneKey() {
  return ['guilds', '/guilds/:guild_id/prune', 'POST'] as const
}

export function usePostGuildsGuildIdPrune<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['prune']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdPruneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].prune.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdRegionsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/regions', args] as const
}

export function useGetGuildsGuildIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
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
        ? getGetGuildsGuildIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdRegions<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
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
        ? getGetGuildsGuildIdRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdRequestsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/requests', args] as const
}

export function useGetGuildsGuildIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
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
        ? getGetGuildsGuildIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
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
        ? getGetGuildsGuildIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdRequestsRequestIdKey() {
  return ['guilds', '/guilds/:guild_id/requests/:request_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdRequestsRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdRequestsRequestIdKey()
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
            (typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].requests[':request_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdRolesKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/roles', args] as const
}

export function useGetGuildsGuildIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
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
        ? getGetGuildsGuildIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
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
        ? getGetGuildsGuildIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdRolesKey() {
  return ['guilds', '/guilds/:guild_id/roles', 'POST'] as const
}

export function usePostGuildsGuildIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdRolesKey() {
  return ['guilds', '/guilds/:guild_id/roles', 'PATCH'] as const
}

export function usePatchGuildsGuildIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']> },
      ) => parseResponse(client.guilds[':guild_id'].roles.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdRolesMemberCountsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/roles/member-counts', args] as const
}

export function useGetGuildsGuildIdRolesMemberCounts<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
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
        ? getGetGuildsGuildIdRolesMemberCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].roles['member-counts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdRolesMemberCounts<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
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
        ? getGetGuildsGuildIdRolesMemberCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].roles['member-counts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdRolesRoleIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', args] as const
}

export function useGetGuildsGuildIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
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
        ? getGetGuildsGuildIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdRolesRoleId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
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
        ? getGetGuildsGuildIdRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].roles[':role_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdRolesRoleIdKey() {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>
        },
      ) => parseResponse(client.guilds[':guild_id'].roles[':role_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdRolesRoleIdKey() {
  return ['guilds', '/guilds/:guild_id/roles/:role_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>
        },
      ) => parseResponse(client.guilds[':guild_id'].roles[':role_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdScheduledEventsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/scheduled-events', args] as const
}

export function useGetGuildsGuildIdScheduledEvents<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
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
        ? getGetGuildsGuildIdScheduledEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['scheduled-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdScheduledEvents<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
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
        ? getGetGuildsGuildIdScheduledEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['scheduled-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdScheduledEventsKey() {
  return ['guilds', '/guilds/:guild_id/scheduled-events', 'POST'] as const
}

export function usePostGuildsGuildIdScheduledEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdScheduledEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>
        },
      ) => parseResponse(client.guilds[':guild_id']['scheduled-events'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
  >,
) {
  return ['guilds', '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id', args] as const
}

export function useGetGuildsGuildIdScheduledEventsGuildScheduledEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdScheduledEventsGuildScheduledEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id',
    'DELETE',
  ] as const
}

export function useDeleteGuildsGuildIdScheduledEventsGuildScheduledEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdKey()
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
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id',
    'PATCH',
  ] as const
}

export function usePatchGuildsGuildIdScheduledEventsGuildScheduledEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdKey()
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
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions',
    'POST',
  ] as const
}

export function usePostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsKey()
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
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['scheduled-events'][
            ':guild_scheduled_event_id'
          ].exceptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions/:exception_id',
    'DELETE',
  ] as const
}

export function useDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdKey()
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
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
            ':exception_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdKey() {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/exceptions/:exception_id',
    'PATCH',
  ] as const
}

export function usePatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdKey()
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
            (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
            ':exception_id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users',
    args,
  ] as const
}

export function useGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/users/counts',
    args,
  ] as const
}

export function useGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][
            ':guild_scheduled_event_id'
          ].users.counts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCounts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsKey(args)
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][
            ':guild_scheduled_event_id'
          ].users.counts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
  >,
) {
  return [
    'guilds',
    '/guilds/:guild_id/scheduled-events/:guild_scheduled_event_id/:guild_scheduled_event_exception_id/users',
    args,
  ] as const
}

export function useGetGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersKey(
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][
            ':guild_scheduled_event_exception_id'
          ].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
        ? getGetGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersKey(
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
                (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
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
          client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][
            ':guild_scheduled_event_exception_id'
          ].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdSoundboardSoundsKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds', args] as const
}

export function useGetGuildsGuildIdSoundboardSounds<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
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
        ? getGetGuildsGuildIdSoundboardSoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdSoundboardSounds<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
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
        ? getGetGuildsGuildIdSoundboardSoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdSoundboardSoundsKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds', 'POST'] as const
}

export function usePostGuildsGuildIdSoundboardSounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdSoundboardSoundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>
        },
      ) => parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdSoundboardSoundsSoundIdKey(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
  >,
) {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', args] as const
}

export function useGetGuildsGuildIdSoundboardSoundsSoundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
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
        ? getGetGuildsGuildIdSoundboardSoundsSoundIdKey(args)
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
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
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
          client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdSoundboardSoundsSoundId<TError = unknown>(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
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
        ? getGetGuildsGuildIdSoundboardSoundsSoundIdKey(args)
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
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
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
          client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdSoundboardSoundsSoundIdKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdSoundboardSoundsSoundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdSoundboardSoundsSoundIdKey()
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
            (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdSoundboardSoundsSoundIdKey() {
  return ['guilds', '/guilds/:guild_id/soundboard-sounds/:sound_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdSoundboardSoundsSoundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdSoundboardSoundsSoundIdKey()
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
            (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdStickersKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/stickers', args] as const
}

export function useGetGuildsGuildIdStickers<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
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
        ? getGetGuildsGuildIdStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdStickers<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
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
        ? getGetGuildsGuildIdStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdStickersKey() {
  return ['guilds', '/guilds/:guild_id/stickers', 'POST'] as const
}

export function usePostGuildsGuildIdStickers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['stickers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdStickersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].stickers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdStickersStickerIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', args] as const
}

export function useGetGuildsGuildIdStickersStickerId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
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
        ? getGetGuildsGuildIdStickersStickerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].stickers[':sticker_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdStickersStickerId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
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
        ? getGetGuildsGuildIdStickersStickerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].stickers[':sticker_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdStickersStickerIdKey() {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdStickersStickerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdStickersStickerIdKey()
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
            (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].stickers[':sticker_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdStickersStickerIdKey() {
  return ['guilds', '/guilds/:guild_id/stickers/:sticker_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdStickersStickerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdStickersStickerIdKey()
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
            (typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id'].stickers[':sticker_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdTemplatesKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/templates', args] as const
}

export function useGetGuildsGuildIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
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
        ? getGetGuildsGuildIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
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
        ? getGetGuildsGuildIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGuildsGuildIdTemplatesKey() {
  return ['guilds', '/guilds/:guild_id/templates', 'POST'] as const
}

export function usePostGuildsGuildIdTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGuildsGuildIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']> },
      ) => parseResponse(client.guilds[':guild_id'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGuildsGuildIdTemplatesCodeKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'PUT'] as const
}

export function usePutGuildsGuildIdTemplatesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGuildsGuildIdTemplatesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>
        },
      ) => parseResponse(client.guilds[':guild_id'].templates[':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGuildsGuildIdTemplatesCodeKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'DELETE'] as const
}

export function useDeleteGuildsGuildIdTemplatesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGuildsGuildIdTemplatesCodeKey()
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
            (typeof client.guilds)[':guild_id']['templates'][':code']['$delete']
          >
        },
      ) => parseResponse(client.guilds[':guild_id'].templates[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGuildsGuildIdTemplatesCodeKey() {
  return ['guilds', '/guilds/:guild_id/templates/:code', 'PATCH'] as const
}

export function usePatchGuildsGuildIdTemplatesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdTemplatesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>
        },
      ) => parseResponse(client.guilds[':guild_id'].templates[':code'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdThreadsActiveKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/threads/active', args] as const
}

export function useGetGuildsGuildIdThreadsActive<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
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
        ? getGetGuildsGuildIdThreadsActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].threads.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdThreadsActive<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
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
        ? getGetGuildsGuildIdThreadsActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id'].threads.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdVanityUrlKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/vanity-url', args] as const
}

export function useGetGuildsGuildIdVanityUrl<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
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
        ? getGetGuildsGuildIdVanityUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['vanity-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdVanityUrl<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
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
        ? getGetGuildsGuildIdVanityUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['vanity-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdVoiceStatesMeKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/voice-states/@me', args] as const
}

export function useGetGuildsGuildIdVoiceStatesMe<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
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
        ? getGetGuildsGuildIdVoiceStatesMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['voice-states']['@me'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdVoiceStatesMe<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
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
        ? getGetGuildsGuildIdVoiceStatesMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['voice-states']['@me'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdVoiceStatesMeKey() {
  return ['guilds', '/guilds/:guild_id/voice-states/@me', 'PATCH'] as const
}

export function usePatchGuildsGuildIdVoiceStatesMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdVoiceStatesMeKey()
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
            (typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']
          >
        },
      ) =>
        parseResponse(client.guilds[':guild_id']['voice-states']['@me'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdVoiceStatesUserIdKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/voice-states/:user_id', args] as const
}

export function useGetGuildsGuildIdVoiceStatesUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
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
        ? getGetGuildsGuildIdVoiceStatesUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.guilds[':guild_id']['voice-states'][':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdVoiceStatesUserId<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
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
        ? getGetGuildsGuildIdVoiceStatesUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.guilds[':guild_id']['voice-states'][':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdVoiceStatesUserIdKey() {
  return ['guilds', '/guilds/:guild_id/voice-states/:user_id', 'PATCH'] as const
}

export function usePatchGuildsGuildIdVoiceStatesUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdVoiceStatesUserIdKey()
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
            (typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.guilds[':guild_id']['voice-states'][':user_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdWebhooksKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/webhooks', args] as const
}

export function useGetGuildsGuildIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
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
        ? getGetGuildsGuildIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
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
        ? getGetGuildsGuildIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdWelcomeScreenKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/welcome-screen', args] as const
}

export function useGetGuildsGuildIdWelcomeScreen<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
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
        ? getGetGuildsGuildIdWelcomeScreenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['welcome-screen'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdWelcomeScreen<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
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
        ? getGetGuildsGuildIdWelcomeScreenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['welcome-screen'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdWelcomeScreenKey() {
  return ['guilds', '/guilds/:guild_id/welcome-screen', 'PATCH'] as const
}

export function usePatchGuildsGuildIdWelcomeScreen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdWelcomeScreenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>
        },
      ) => parseResponse(client.guilds[':guild_id']['welcome-screen'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdWidgetKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/widget', args] as const
}

export function useGetGuildsGuildIdWidget<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
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
        ? getGetGuildsGuildIdWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].widget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdWidget<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
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
        ? getGetGuildsGuildIdWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id'].widget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGuildsGuildIdWidgetKey() {
  return ['guilds', '/guilds/:guild_id/widget', 'PATCH'] as const
}

export function usePatchGuildsGuildIdWidget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGuildsGuildIdWidgetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']> },
      ) => parseResponse(client.guilds[':guild_id'].widget.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGuildsGuildIdWidgetJsonKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/widget.json', args] as const
}

export function useGetGuildsGuildIdWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
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
        ? getGetGuildsGuildIdWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['widget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
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
        ? getGetGuildsGuildIdWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.guilds[':guild_id']['widget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGuildsGuildIdWidgetPngKey(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>,
) {
  return ['guilds', '/guilds/:guild_id/widget.png', args] as const
}

export function useGetGuildsGuildIdWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
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
        ? getGetGuildsGuildIdWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['widget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGuildsGuildIdWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
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
        ? getGetGuildsGuildIdWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.guilds[':guild_id']['widget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInteractionsInteractionIdInteractionTokenCallbackKey() {
  return [
    'interactions',
    '/interactions/:interaction_id/:interaction_token/callback',
    'POST',
  ] as const
}

export function usePostInteractionsInteractionIdInteractionTokenCallback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInteractionsInteractionIdInteractionTokenCallbackKey()
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
            (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.interactions[':interaction_id'][':interaction_token'].callback.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInvitesCodeKey(
  args: InferRequestType<(typeof client.invites)[':code']['$get']>,
) {
  return ['invites', '/invites/:code', args] as const
}

export function useGetInvitesCode<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitesCode<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvitesCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInvitesCodeKey() {
  return ['invites', '/invites/:code', 'DELETE'] as const
}

export function useDeleteInvitesCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':code']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitesCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invites)[':code']['$delete']> },
      ) => parseResponse(client.invites[':code'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvitesCodeTargetUsersKey(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>,
) {
  return ['invites', '/invites/:code/target-users', args] as const
}

export function useGetInvitesCodeTargetUsers<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
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
        ? getGetInvitesCodeTargetUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':code']['target-users'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitesCodeTargetUsers<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
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
        ? getGetInvitesCodeTargetUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invites[':code']['target-users'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInvitesCodeTargetUsersKey() {
  return ['invites', '/invites/:code/target-users', 'PUT'] as const
}

export function usePutInvitesCodeTargetUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invites)[':code']['target-users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['target-users']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvitesCodeTargetUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.invites)[':code']['target-users']['$put']> },
      ) => parseResponse(client.invites[':code']['target-users'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitesCodeTargetUsersBulkAddKey() {
  return ['invites', '/invites/:code/target-users/bulk-add', 'POST'] as const
}

export function usePostInvitesCodeTargetUsersBulkAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesCodeTargetUsersBulkAddKey()
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
            (typeof client.invites)[':code']['target-users']['bulk-add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.invites[':code']['target-users']['bulk-add'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostInvitesCodeTargetUsersBulkDeleteKey() {
  return ['invites', '/invites/:code/target-users/bulk-delete', 'POST'] as const
}

export function usePostInvitesCodeTargetUsersBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['bulk-delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesCodeTargetUsersBulkDeleteKey()
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
            (typeof client.invites)[':code']['target-users']['bulk-delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.invites[':code']['target-users']['bulk-delete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInvitesCodeTargetUsersJobStatusKey(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>,
) {
  return ['invites', '/invites/:code/target-users/job-status', args] as const
}

export function useGetInvitesCodeTargetUsersJobStatus<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
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
        ? getGetInvitesCodeTargetUsersJobStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.invites[':code']['target-users']['job-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvitesCodeTargetUsersJobStatus<TError = unknown>(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
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
        ? getGetInvitesCodeTargetUsersJobStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.invites[':code']['target-users']['job-status'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutInvitesCodeTargetUsersUserIdKey() {
  return ['invites', '/invites/:code/target-users/:user_id', 'PUT'] as const
}

export function usePutInvitesCodeTargetUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvitesCodeTargetUsersUserIdKey()
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
            (typeof client.invites)[':code']['target-users'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(client.invites[':code']['target-users'][':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInvitesCodeTargetUsersUserIdKey() {
  return ['invites', '/invites/:code/target-users/:user_id', 'DELETE'] as const
}

export function useDeleteInvitesCodeTargetUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvitesCodeTargetUsersUserIdKey()
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
            (typeof client.invites)[':code']['target-users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.invites[':code']['target-users'][':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLobbiesKey() {
  return ['lobbies', '/lobbies', 'PUT'] as const
}

export function usePutLobbies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lobbies.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLobbiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lobbies.$put> }) =>
        parseResponse(client.lobbies.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLobbiesKey() {
  return ['lobbies', '/lobbies', 'POST'] as const
}

export function usePostLobbies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lobbies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lobbies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLobbiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lobbies.$post> }) =>
        parseResponse(client.lobbies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLobbiesLobbyIdKey(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>,
) {
  return ['lobbies', '/lobbies/:lobby_id', args] as const
}

export function useGetLobbiesLobbyId<TError = unknown>(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLobbiesLobbyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lobbies[':lobby_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLobbiesLobbyId<TError = unknown>(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLobbiesLobbyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lobbies[':lobby_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLobbiesLobbyIdKey() {
  return ['lobbies', '/lobbies/:lobby_id', 'DELETE'] as const
}

export function useDeleteLobbiesLobbyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLobbiesLobbyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']> },
      ) => parseResponse(client.lobbies[':lobby_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLobbiesLobbyIdKey() {
  return ['lobbies', '/lobbies/:lobby_id', 'PATCH'] as const
}

export function usePatchLobbiesLobbyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLobbiesLobbyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']> },
      ) => parseResponse(client.lobbies[':lobby_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLobbiesLobbyIdChannelLinkingKey() {
  return ['lobbies', '/lobbies/:lobby_id/channel-linking', 'PATCH'] as const
}

export function usePatchLobbiesLobbyIdChannelLinking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLobbiesLobbyIdChannelLinkingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>
        },
      ) => parseResponse(client.lobbies[':lobby_id']['channel-linking'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLobbiesLobbyIdMembersMeKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/@me', 'DELETE'] as const
}

export function useDeleteLobbiesLobbyIdMembersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLobbiesLobbyIdMembersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>
        },
      ) => parseResponse(client.lobbies[':lobby_id'].members['@me'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLobbiesLobbyIdMembersMeInvitesKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/@me/invites', 'POST'] as const
}

export function usePostLobbiesLobbyIdMembersMeInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLobbiesLobbyIdMembersMeInvitesKey()
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
            (typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']
          >
        },
      ) =>
        parseResponse(client.lobbies[':lobby_id'].members['@me'].invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLobbiesLobbyIdMembersBulkKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/bulk', 'POST'] as const
}

export function usePostLobbiesLobbyIdMembersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLobbiesLobbyIdMembersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>
        },
      ) => parseResponse(client.lobbies[':lobby_id'].members.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLobbiesLobbyIdMembersUserIdKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id', 'PUT'] as const
}

export function usePutLobbiesLobbyIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLobbiesLobbyIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>
        },
      ) => parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLobbiesLobbyIdMembersUserIdKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id', 'DELETE'] as const
}

export function useDeleteLobbiesLobbyIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLobbiesLobbyIdMembersUserIdKey()
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
            (typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLobbiesLobbyIdMembersUserIdInvitesKey() {
  return ['lobbies', '/lobbies/:lobby_id/members/:user_id/invites', 'POST'] as const
}

export function usePostLobbiesLobbyIdMembersUserIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLobbiesLobbyIdMembersUserIdInvitesKey()
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
            (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
          >
        },
      ) =>
        parseResponse(
          client.lobbies[':lobby_id'].members[':user_id'].invites.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLobbiesLobbyIdMessagesKey(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>,
) {
  return ['lobbies', '/lobbies/:lobby_id/messages', args] as const
}

export function useGetLobbiesLobbyIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
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
        ? getGetLobbiesLobbyIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lobbies[':lobby_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLobbiesLobbyIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
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
        ? getGetLobbiesLobbyIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lobbies[':lobby_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLobbiesLobbyIdMessagesKey() {
  return ['lobbies', '/lobbies/:lobby_id/messages', 'POST'] as const
}

export function usePostLobbiesLobbyIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLobbiesLobbyIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']> },
      ) => parseResponse(client.lobbies[':lobby_id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataKey() {
  return ['lobbies', '/lobbies/:lobby_id/messages/:message_id/moderation-metadata', 'PUT'] as const
}

export function usePutLobbiesLobbyIdMessagesMessageIdModerationMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLobbiesLobbyIdMessagesMessageIdModerationMetadataKey()
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
            (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.lobbies[':lobby_id'].messages[':message_id']['moderation-metadata'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2MeKey() {
  return ['oauth2', '/oauth2/@me'] as const
}

export function useGetOauth2Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.oauth2)['@me']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth2ApplicationsMeKey() {
  return ['oauth2', '/oauth2/applications/@me'] as const
}

export function useGetOauth2ApplicationsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
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
        ? getGetOauth2ApplicationsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.applications['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2ApplicationsMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
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
        ? getGetOauth2ApplicationsMeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2.applications)['@me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.applications['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth2KeysKey() {
  return ['oauth2', '/oauth2/keys'] as const
}

export function useGetOauth2Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOauth2UserinfoKey() {
  return ['oauth2', '/oauth2/userinfo'] as const
}

export function useGetOauth2Userinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2UserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2Userinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauth2UserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataKey() {
  return [
    'partner-sdk',
    '/partner-sdk/dms/:user_id_1/:user_id_2/messages/:message_id/moderation-metadata',
    'PUT',
  ] as const
}

export function usePutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataKey()
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
            (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
          >
        },
      ) =>
        parseResponse(
          client['partner-sdk'].dms[':user_id_1'][':user_id_2'].messages[':message_id'][
            'moderation-metadata'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerSdkProvisionalAccountsUnmergeKey() {
  return ['partner-sdk', '/partner-sdk/provisional-accounts/unmerge', 'POST'] as const
}

export function usePostPartnerSdkProvisionalAccountsUnmerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerSdkProvisionalAccountsUnmergeKey()
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
            (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']
          >
        },
      ) =>
        parseResponse(
          client['partner-sdk']['provisional-accounts'].unmerge.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerSdkProvisionalAccountsUnmergeBotKey() {
  return ['partner-sdk', '/partner-sdk/provisional-accounts/unmerge/bot', 'POST'] as const
}

export function usePostPartnerSdkProvisionalAccountsUnmergeBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerSdkProvisionalAccountsUnmergeBotKey()
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
            (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['partner-sdk']['provisional-accounts'].unmerge.bot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerSdkTokenKey() {
  return ['partner-sdk', '/partner-sdk/token', 'POST'] as const
}

export function usePostPartnerSdkToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['partner-sdk']['token']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['partner-sdk']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerSdkTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['partner-sdk']['token']['$post']> },
      ) => parseResponse(client['partner-sdk'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartnerSdkTokenBotKey() {
  return ['partner-sdk', '/partner-sdk/token/bot', 'POST'] as const
}

export function usePostPartnerSdkTokenBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['partner-sdk']['token']['bot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartnerSdkTokenBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']> },
      ) => parseResponse(client['partner-sdk'].token.bot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSkusSkuIdSubscriptionsKey(
  args: InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>,
) {
  return ['skus', '/skus/:sku_id/subscriptions', args] as const
}

export function useGetSkusSkuIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
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
        ? getGetSkusSkuIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skus[':sku_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkusSkuIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
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
        ? getGetSkusSkuIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.skus[':sku_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSkusSkuIdSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
  >,
) {
  return ['skus', '/skus/:sku_id/subscriptions/:subscription_id', args] as const
}

export function useGetSkusSkuIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
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
        ? getGetSkusSkuIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
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
          client.skus[':sku_id'].subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSkusSkuIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
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
        ? getGetSkusSkuIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
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
          client.skus[':sku_id'].subscriptions[':subscription_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSoundboardDefaultSoundsKey() {
  return ['soundboard-default-sounds', '/soundboard-default-sounds'] as const
}

export function useGetSoundboardDefaultSounds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
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
        ? getGetSoundboardDefaultSoundsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['soundboard-default-sounds'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSoundboardDefaultSounds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
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
        ? getGetSoundboardDefaultSoundsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['soundboard-default-sounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['soundboard-default-sounds'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStageInstancesKey() {
  return ['stage-instances', '/stage-instances', 'POST'] as const
}

export function usePostStageInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stage-instances']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stage-instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStageInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['stage-instances']['$post']> },
      ) => parseResponse(client['stage-instances'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStageInstancesChannelIdKey(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>,
) {
  return ['stage-instances', '/stage-instances/:channel_id', args] as const
}

export function useGetStageInstancesChannelId<TError = unknown>(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
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
        ? getGetStageInstancesChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stage-instances'][':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStageInstancesChannelId<TError = unknown>(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
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
        ? getGetStageInstancesChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stage-instances'][':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteStageInstancesChannelIdKey() {
  return ['stage-instances', '/stage-instances/:channel_id', 'DELETE'] as const
}

export function useDeleteStageInstancesChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStageInstancesChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']> },
      ) => parseResponse(client['stage-instances'][':channel_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStageInstancesChannelIdKey() {
  return ['stage-instances', '/stage-instances/:channel_id', 'PATCH'] as const
}

export function usePatchStageInstancesChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['stage-instances'][':channel_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStageInstancesChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']> },
      ) => parseResponse(client['stage-instances'][':channel_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStickerPacksKey() {
  return ['sticker-packs', '/sticker-packs'] as const
}

export function useGetStickerPacks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickerPacksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sticker-packs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickerPacks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStickerPacksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['sticker-packs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sticker-packs'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickerPacksPackIdKey(
  args: InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>,
) {
  return ['sticker-packs', '/sticker-packs/:pack_id', args] as const
}

export function useGetStickerPacksPackId<TError = unknown>(
  args: InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
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
        ? getGetStickerPacksPackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sticker-packs'][':pack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickerPacksPackId<TError = unknown>(
  args: InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
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
        ? getGetStickerPacksPackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['sticker-packs'][':pack_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['sticker-packs'][':pack_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStickersStickerIdKey(
  args: InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>,
) {
  return ['stickers', '/stickers/:sticker_id', args] as const
}

export function useGetStickersStickerId<TError = unknown>(
  args: InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersStickerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers[':sticker_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStickersStickerId<TError = unknown>(
  args: InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStickersStickerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stickers)[':sticker_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stickers[':sticker_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/@me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersMeKey() {
  return ['users', '/users/@me', 'PATCH'] as const
}

export function usePatchUsersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['@me']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)['@me']['$patch']> }) =>
        parseResponse(client.users['@me'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeApplicationsApplicationIdEntitlementsKey(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
  >,
) {
  return ['users', '/users/@me/applications/:application_id/entitlements', args] as const
}

export function useGetUsersMeApplicationsApplicationIdEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
        ? getGetUsersMeApplicationsApplicationIdEntitlementsKey(args)
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
                (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
          client.users['@me'].applications[':application_id'].entitlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeApplicationsApplicationIdEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
        ? getGetUsersMeApplicationsApplicationIdEntitlementsKey(args)
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
                (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
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
          client.users['@me'].applications[':application_id'].entitlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeApplicationsApplicationIdRoleConnectionKey(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
  >,
) {
  return ['users', '/users/@me/applications/:application_id/role-connection', args] as const
}

export function useGetUsersMeApplicationsApplicationIdRoleConnection<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
        ? getGetUsersMeApplicationsApplicationIdRoleConnectionKey(args)
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
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
          client.users['@me'].applications[':application_id']['role-connection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeApplicationsApplicationIdRoleConnection<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
        ? getGetUsersMeApplicationsApplicationIdRoleConnectionKey(args)
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
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
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
          client.users['@me'].applications[':application_id']['role-connection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUsersMeApplicationsApplicationIdRoleConnectionKey() {
  return ['users', '/users/@me/applications/:application_id/role-connection', 'PUT'] as const
}

export function usePutUsersMeApplicationsApplicationIdRoleConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMeApplicationsApplicationIdRoleConnectionKey()
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
            (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
          >
        },
      ) =>
        parseResponse(
          client.users['@me'].applications[':application_id']['role-connection'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeApplicationsApplicationIdRoleConnectionKey() {
  return ['users', '/users/@me/applications/:application_id/role-connection', 'DELETE'] as const
}

export function useDeleteUsersMeApplicationsApplicationIdRoleConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeApplicationsApplicationIdRoleConnectionKey()
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
            (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users['@me'].applications[':application_id']['role-connection'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeChannelsKey() {
  return ['users', '/users/@me/channels', 'POST'] as const
}

export function usePostUsersMeChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['channels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['@me']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)['@me']['channels']['$post']> },
      ) => parseResponse(client.users['@me'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeConnectionsKey() {
  return ['users', '/users/@me/connections'] as const
}

export function useGetUsersMeConnections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersMeConnectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].connections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeConnections<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersMeConnectionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['@me']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].connections.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeGuildsKey(
  args: InferRequestType<(typeof client.users)['@me']['guilds']['$get']>,
) {
  return ['users', '/users/@me/guilds', args] as const
}

export function useGetUsersMeGuilds<TError = unknown>(
  args: InferRequestType<(typeof client.users)['@me']['guilds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeGuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].guilds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeGuilds<TError = unknown>(
  args: InferRequestType<(typeof client.users)['@me']['guilds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeGuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['guilds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['@me'].guilds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersMeGuildsGuildIdKey() {
  return ['users', '/users/@me/guilds/:guild_id', 'DELETE'] as const
}

export function useDeleteUsersMeGuildsGuildId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeGuildsGuildIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>
        },
      ) => parseResponse(client.users['@me'].guilds[':guild_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeGuildsGuildIdMemberKey(
  args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>,
) {
  return ['users', '/users/@me/guilds/:guild_id/member', args] as const
}

export function useGetUsersMeGuildsGuildIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
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
        ? getGetUsersMeGuildsGuildIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users['@me'].guilds[':guild_id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeGuildsGuildIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
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
        ? getGetUsersMeGuildsGuildIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users['@me'].guilds[':guild_id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVoiceRegionsKey() {
  return ['voice', '/voice/regions'] as const
}

export function useGetVoiceRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVoiceRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVoiceRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.voice.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function usePatchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdWebhookTokenKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', args] as const
}

export function useGetWebhooksWebhookIdWebhookToken<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
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
        ? getGetWebhooksWebhookIdWebhookTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdWebhookToken<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
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
        ? getGetWebhooksWebhookIdWebhookTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdWebhookTokenKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'POST'] as const
}

export function usePostWebhooksWebhookIdWebhookToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdWebhookTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>
        },
      ) =>
        parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdWebhookTokenKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookIdWebhookToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdWebhookTokenKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']
          >
        },
      ) =>
        parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdWebhookTokenKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token', 'PATCH'] as const
}

export function usePatchWebhooksWebhookIdWebhookToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdWebhookTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>
        },
      ) =>
        parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdWebhookTokenGithubKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/github', 'POST'] as const
}

export function usePostWebhooksWebhookIdWebhookTokenGithub<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdWebhookTokenGithubKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].github.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdWebhookTokenMessagesOriginalKey(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/@original', args] as const
}

export function useGetWebhooksWebhookIdWebhookTokenMessagesOriginal<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
        ? getGetWebhooksWebhookIdWebhookTokenMessagesOriginalKey(args)
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
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
          client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdWebhookTokenMessagesOriginal<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
        ? getGetWebhooksWebhookIdWebhookTokenMessagesOriginalKey(args)
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
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
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
          client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/@original', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookIdWebhookTokenMessagesOriginal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdWebhookTokenMessagesOriginalKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/@original', 'PATCH'] as const
}

export function usePatchWebhooksWebhookIdWebhookTokenMessagesOriginal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdWebhookTokenMessagesOriginalKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdWebhookTokenMessagesMessageIdKey(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/:message_id', args] as const
}

export function useGetWebhooksWebhookIdWebhookTokenMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
        ? getGetWebhooksWebhookIdWebhookTokenMessagesMessageIdKey(args)
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
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
          client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdWebhookTokenMessagesMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
        ? getGetWebhooksWebhookIdWebhookTokenMessagesMessageIdKey(args)
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
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
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
          client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdKey() {
  return [
    'webhooks',
    '/webhooks/:webhook_id/:webhook_token/messages/:message_id',
    'DELETE',
  ] as const
}

export function useDeleteWebhooksWebhookIdWebhookTokenMessagesMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdWebhookTokenMessagesMessageIdKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/messages/:message_id', 'PATCH'] as const
}

export function usePatchWebhooksWebhookIdWebhookTokenMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdWebhookTokenMessagesMessageIdKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdWebhookTokenSlackKey() {
  return ['webhooks', '/webhooks/:webhook_id/:webhook_token/slack', 'POST'] as const
}

export function usePostWebhooksWebhookIdWebhookTokenSlack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdWebhookTokenSlackKey()
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
            (typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id'][':webhook_token'].slack.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
