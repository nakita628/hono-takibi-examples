import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
) {
  return ['crm', '/crm/extensions/videoconferencing/2026-09/settings/:appId', args] as const
}

export function getCrmExtensionsVideoconferencing202609SettingsAppIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCrmExtensionsVideoconferencing202609SettingsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmExtensionsVideoconferencing202609SettingsAppIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExtensionsVideoconferencing202609SettingsAppId<
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
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmExtensionsVideoconferencing202609SettingsAppIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
