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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/extensions/videoconferencing/2026-09/settings/:appId',
    toValue(args),
  ] as const
}

export function getCrmExtensionsVideoconferencing202609SettingsAppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmExtensionsVideoconferencing202609SettingsAppId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
                    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
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
                    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey>
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
              (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutCrmExtensionsVideoconferencing202609SettingsAppIdMutationKey() {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', 'PUT'] as const
}

export function getPutCrmExtensionsVideoconferencing202609SettingsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmExtensionsVideoconferencing202609SettingsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmExtensionsVideoconferencing202609SettingsAppId<
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
                    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
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
  const mutationDefaults = getPutCrmExtensionsVideoconferencing202609SettingsAppIdMutationOptions<
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

export function getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdMutationKey() {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', 'DELETE'] as const
}

export function getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCrmExtensionsVideoconferencing202609SettingsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
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
  const mutationDefaults =
    getDeleteCrmExtensionsVideoconferencing202609SettingsAppIdMutationOptions<
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
