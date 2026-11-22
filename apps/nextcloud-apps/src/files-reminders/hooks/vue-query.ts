import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', keyArgs] as const
}

export function getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsFilesRemindersApiVVersionFileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsFilesRemindersApiVVersionFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', 'PUT'] as const
}

export function getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$put(args, options),
      )
    },
  })
}

export function usePutOcsV2PhpAppsFilesRemindersApiVVersionFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/files_reminders/api/v:version/:fileId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.files_reminders.api['v:version'][':fileId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['files_reminders']['api']['v:version'][':fileId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
