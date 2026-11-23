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

export function getGetCrmExtensionsVideoconferencing202609SettingsAppIdKey(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', args] as const
}

export function useGetCrmExtensionsVideoconferencing202609SettingsAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
        ? getGetCrmExtensionsVideoconferencing202609SettingsAppIdKey(args)
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
                (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
          client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExtensionsVideoconferencing202609SettingsAppId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
        ? getGetCrmExtensionsVideoconferencing202609SettingsAppIdKey(args)
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
                (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
          client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmExtensionsVideoconferencing202609SettingsAppIdKey() {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', 'PUT'] as const
}

export function usePutCrmExtensionsVideoconferencing202609SettingsAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmExtensionsVideoconferencing202609SettingsAppIdKey()
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
            (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdKey() {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', 'DELETE'] as const
}

export function useDeleteCrmExtensionsVideoconferencing202609SettingsAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdKey()
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
            (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
