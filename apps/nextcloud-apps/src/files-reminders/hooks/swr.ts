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

export function getGetOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesRemindersApiVVersionFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
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
        ? getGetOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
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
          client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesRemindersApiVVersionFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
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
        ? getGetOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
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
          client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', 'PUT'] as const
}

export function usePutOcsV2PhpAppsFilesRemindersApiVVersionFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
