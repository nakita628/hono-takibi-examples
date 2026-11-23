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

export function getPostCrmExtensionsCalling202609InboundCallKey() {
  return ['crm', '/crm/extensions/calling/2026-09/inbound-call', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609InboundCall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609InboundCallKey()
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
            (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09']['inbound-call'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmExtensionsCalling202609RecordingsReadyKey() {
  return ['crm', '/crm/extensions/calling/2026-09/recordings/ready', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609RecordingsReady<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609RecordingsReadyKey()
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
            (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'].recordings.ready.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExtensionsCalling202609AppIdSettingsKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', args] as const
}

export function useGetCrmExtensionsCalling202609AppIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCalling202609AppIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmExtensionsCalling202609AppIdSettingsKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609AppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609AppIdSettingsKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmExtensionsCalling202609AppIdSettingsKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'DELETE'] as const
}

export function useDeleteCrmExtensionsCalling202609AppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmExtensionsCalling202609AppIdSettingsKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'PATCH'] as const
}

export function usePatchCrmExtensionsCalling202609AppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmExtensionsCalling202609AppIdSettingsKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
) {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    args,
  ] as const
}

export function useGetCrmExtensionsCalling202609AppIdSettingsChannelConnection<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCalling202609AppIdSettingsChannelConnection<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'POST',
  ] as const
}

export function usePostCrmExtensionsCalling202609AppIdSettingsChannelConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'DELETE',
  ] as const
}

export function useDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'PATCH',
  ] as const
}

export function usePatchCrmExtensionsCalling202609AppIdSettingsChannelConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExtensionsCalling202609AppIdSettingsRecordingKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', args] as const
}

export function useGetCrmExtensionsCalling202609AppIdSettingsRecording<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsRecordingKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsCalling202609AppIdSettingsRecording<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
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
        ? getGetCrmExtensionsCalling202609AppIdSettingsRecordingKey(args)
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
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
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
          client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmExtensionsCalling202609AppIdSettingsRecordingKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', 'POST'] as const
}

export function usePostCrmExtensionsCalling202609AppIdSettingsRecording<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExtensionsCalling202609AppIdSettingsRecordingKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsRecordingKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', 'PATCH'] as const
}

export function usePatchCrmExtensionsCalling202609AppIdSettingsRecording<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmExtensionsCalling202609AppIdSettingsRecordingKey()
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
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
