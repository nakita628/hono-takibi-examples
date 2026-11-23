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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1LogMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/log', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1LogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1LogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.log.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1Log<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['log']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1LogMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UsersQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/users', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UsersQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UsersQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UsersQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOcsV2PhpAppsAppApiAppsStatusAppIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/apps/status/:appId', 'PUT'] as const
}

export function getPutOcsV2PhpAppsAppApiAppsStatusAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsAppApiAppsStatusAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.apps.status[':appId'].$put(args, options),
      )
    },
  })
}

export function usePutOcsV2PhpAppsAppApiAppsStatusAppId<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['apps']['status'][':appId']['$put']
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
  const mutationDefaults = getPutOcsV2PhpAppsAppApiAppsStatusAppIdMutationOptions<
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

export function getPutOcsV2PhpAppsAppApiExAppStatusMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/ex-app/status', 'PUT'] as const
}

export function getPutOcsV2PhpAppsAppApiExAppStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsAppApiExAppStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api['ex-app'].status.$put(args, options))
    },
  })
}

export function usePutOcsV2PhpAppsAppApiExAppStatus<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['status']['$put']
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
  const mutationDefaults = getPutOcsV2PhpAppsAppApiExAppStatusMutationOptions<
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

export function getOcsV2PhpAppsAppApiExAppStateQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/ex-app/state', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiExAppStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiExAppStateQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiExAppStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api['ex-app'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiExAppState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiExAppStateQueryKey>
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
      ...getOcsV2PhpAppsAppApiExAppStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiExAppState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['ex-app']['state']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiExAppStateQueryKey>
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
      ...getOcsV2PhpAppsAppApiExAppStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.info.nextcloud_url.absolute.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsolute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsolute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['info']['nextcloud_url']['absolute']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1ExAppConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppConfig<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1ExAppConfigMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1ExAppConfig<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1ExAppConfigMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].config['get-values'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValues<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['config']['get-values']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppPreference<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1ExAppPreference<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1['ex-app'].preference['get-values'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValues<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ex-app']['preference']['get-values']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1NotificationMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/notification', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1NotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.notification.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1Notification<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['notification']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1NotificationMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1OccCommandQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1OccCommandQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1OccCommandQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1OccCommandQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1OccCommand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1OccCommandQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1OccCommandQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1OccCommand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1OccCommandQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1OccCommandQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1OccCommandMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1OccCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1OccCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1OccCommand<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1OccCommandMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1OccCommandMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/occ_command', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1OccCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1OccCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.occ_command.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1OccCommand<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['occ_command']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1OccCommandMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1TalkBotMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_bot', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1TalkBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1TalkBotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1TalkBot<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1TalkBotMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1TalkBotMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_bot', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1TalkBotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1TalkBotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.talk_bot.$delete(args, options))
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1TalkBot<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_bot']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1TalkBotMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/talk_proxy/:appId/:route', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.talk_proxy[':appId'][':route'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRoute<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['talk_proxy'][':appId'][':route']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['files-actions-menu'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenu<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['files-actions-menu']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v2.ui['files-actions-menu'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenu<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v2']['ui']['files-actions-menu']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiTopMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiTopMenu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiTopMenuQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiTopMenuMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiTopMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiTopMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiTopMenu<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiTopMenuMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['top-menu'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiTopMenu<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['top-menu']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiTopMenuMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiInitialState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiInitialState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiInitialStateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiInitialStateMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiInitialStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiInitialStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiInitialState<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiInitialStateMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui['initial-state'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiInitialState<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['initial-state']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiInitialStateMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiScriptQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiScriptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiScriptQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiScriptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiScript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiScriptQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiScriptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiScript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiScriptQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiScriptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiScriptMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiScript<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiScriptMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiScriptMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/script', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.script.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiScript<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['script']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiScriptMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiStyleQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiStyleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiStyleQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiStyleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiStyle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiStyleQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiStyleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiStyle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiStyleQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiStyleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiStyleMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiStyleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiStyleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiStyle<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiStyleMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiStyleMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/style', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiStyleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiStyleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.app_api.api.v1.ui.style.$delete(args, options))
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiStyle<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['style']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiStyleMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1UiSettingsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1UiSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiSettingsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1UiSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1UiSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiSettingsQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1UiSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1UiSettingsQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1UiSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1UiSettingsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1UiSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1UiSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1UiSettings<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1UiSettingsMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ui/settings', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ui.settings.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1UiSettings<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ui']['settings']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1UiSettingsMutationOptions<
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

export function getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', keyArgs] as const
}

export function getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryKey>
  >({
    queryKey: getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryKey>
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
      ...getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.ai_provider.task_processing.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessing<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['ai_provider']['task_processing']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingMutationOptions<
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

export function getPostOcsV2PhpAppsAppApiApiV1SetupCheckMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/setup_check', 'POST'] as const
}

export function getPostOcsV2PhpAppsAppApiApiV1SetupCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsAppApiApiV1SetupCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpAppsAppApiApiV1SetupCheck<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsAppApiApiV1SetupCheckMutationOptions<
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

export function getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/app_api/api/v1/setup_check', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.app_api.api.v1.setup_check.$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsAppApiApiV1SetupCheck<
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
                  (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['app_api']['api']['v1']['setup_check']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsAppApiApiV1SetupCheckMutationOptions<
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
