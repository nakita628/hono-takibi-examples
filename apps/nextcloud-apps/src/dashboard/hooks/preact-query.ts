import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v1/widget-items', keyArgs] as const
}

export function getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dashboard.api.v1['widget-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDashboardApiV1WidgetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDashboardApiV1WidgetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widget-items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV1WidgetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v2/widget-items', keyArgs] as const
}

export function getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dashboard.api.v2['widget-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDashboardApiV2WidgetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDashboardApiV2WidgetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v2']['widget-items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV2WidgetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsDashboardApiV1WidgetsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v1/widgets', keyArgs] as const
}

export function getOcsV2PhpAppsDashboardApiV1WidgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDashboardApiV1WidgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dashboard.api.v1.widgets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDashboardApiV1Widgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV1WidgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDashboardApiV1Widgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v1']['widgets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV1WidgetsQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV1WidgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOcsV2PhpAppsDashboardApiV3LayoutQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v3/layout', keyArgs] as const
}

export function getOcsV2PhpAppsDashboardApiV3LayoutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDashboardApiV3LayoutQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDashboardApiV3LayoutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dashboard.api.v3.layout.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDashboardApiV3Layout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV3LayoutQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV3LayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDashboardApiV3Layout<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV3LayoutQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV3LayoutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsDashboardApiV3LayoutMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v3/layout', 'POST'] as const
}

export function getPostOcsV2PhpAppsDashboardApiV3LayoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsDashboardApiV3LayoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.dashboard.api.v3.layout.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsDashboardApiV3Layout<
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
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['layout']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsDashboardApiV3LayoutMutationOptions<
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

export function getOcsV2PhpAppsDashboardApiV3StatusesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v3/statuses', keyArgs] as const
}

export function getOcsV2PhpAppsDashboardApiV3StatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsDashboardApiV3StatusesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsDashboardApiV3StatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.dashboard.api.v3.statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOcsV2PhpAppsDashboardApiV3Statuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV3StatusesQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV3StatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOcsV2PhpAppsDashboardApiV3Statuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOcsV2PhpAppsDashboardApiV3StatusesQueryKey>
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
      ...getOcsV2PhpAppsDashboardApiV3StatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOcsV2PhpAppsDashboardApiV3StatusesMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/dashboard/api/v3/statuses', 'POST'] as const
}

export function getPostOcsV2PhpAppsDashboardApiV3StatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsDashboardApiV3StatusesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].apps.dashboard.api.v3.statuses.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpAppsDashboardApiV3Statuses<
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
                  (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['apps']['dashboard']['api']['v3']['statuses']['$post']
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
  const mutationDefaults = getPostOcsV2PhpAppsDashboardApiV3StatusesMutationOptions<
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
