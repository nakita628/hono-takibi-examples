import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPutOcsV2PhpAppsUserStatusApiV1HeartbeatKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/heartbeat', 'PUT'] as const
}

export function usePutOcsV2PhpAppsUserStatusApiV1Heartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsUserStatusApiV1HeartbeatKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.heartbeat.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUserStatusApiV1PredefinedStatusesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/predefined_statuses', keyArgs] as const
}

export function useGetOcsV2PhpAppsUserStatusApiV1PredefinedStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1PredefinedStatusesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.predefined_statuses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUserStatusApiV1PredefinedStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1PredefinedStatusesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.predefined_statuses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUserStatusApiV1StatusesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/statuses', keyArgs] as const
}

export function useGetOcsV2PhpAppsUserStatusApiV1Statuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1StatusesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUserStatusApiV1Statuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1StatusesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUserStatusApiV1StatusesUserIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/statuses/:userId', keyArgs] as const
}

export function useGetOcsV2PhpAppsUserStatusApiV1StatusesUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1StatusesUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.statuses[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUserStatusApiV1StatusesUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1StatusesUserIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.statuses[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsUserStatusApiV1UserStatusKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status', keyArgs] as const
}

export function useGetOcsV2PhpAppsUserStatusApiV1UserStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1UserStatusKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsUserStatusApiV1UserStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
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
        ? getGetOcsV2PhpAppsUserStatusApiV1UserStatusKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
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
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/status', 'PUT'] as const
}

export function usePutOcsV2PhpAppsUserStatusApiV1UserStatusStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsUserStatusApiV1UserStatusStatusKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefined<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.predefined.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/message/custom', 'PUT'] as const
}

export function usePutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustom<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.custom.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageKey() {
  return ['ocs', '/ocs/v2.php/apps/user_status/api/v1/user_status/message', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/user_status/api/v1/user_status/revert/:messageId',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.user_status.api.v1.user_status.revert[':messageId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
