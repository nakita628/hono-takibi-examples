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

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicApiVersioningTest202609WidgetsQueryKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets'] as const
}

export function getPublicApiVersioningTest202609WidgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicApiVersioningTest202609WidgetsQueryKey>
  >({
    queryKey: getPublicApiVersioningTest202609WidgetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.versioning.test['2026-09'].widgets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicApiVersioningTest202609Widgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiVersioningTest202609WidgetsQueryKey>
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
      ...getPublicApiVersioningTest202609WidgetsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiVersioningTest202609Widgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiVersioningTest202609WidgetsQueryKey>
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
      ...getPublicApiVersioningTest202609WidgetsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPublicApiVersioningTest202609WidgetsMutationKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets', 'POST'] as const
}

export function getPostPublicApiVersioningTest202609WidgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicApiVersioningTest202609WidgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']
      >,
    ) {
      return parseResponse(
        client.public.api.versioning.test['2026-09'].widgets.$post(args, options),
      )
    },
  })
}

export function usePostPublicApiVersioningTest202609Widgets<
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
                  (typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPublicApiVersioningTest202609WidgetsMutationOptions<
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

export function getPublicApiVersioningTest202609WidgetsWidgetIdQueryKey(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
) {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', args] as const
}

export function getPublicApiVersioningTest202609WidgetsWidgetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicApiVersioningTest202609WidgetsWidgetIdQueryKey>
  >({
    queryKey: getPublicApiVersioningTest202609WidgetsWidgetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicApiVersioningTest202609WidgetsWidgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiVersioningTest202609WidgetsWidgetIdQueryKey>
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
      ...getPublicApiVersioningTest202609WidgetsWidgetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicApiVersioningTest202609WidgetsWidgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicApiVersioningTest202609WidgetsWidgetIdQueryKey>
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
      ...getPublicApiVersioningTest202609WidgetsWidgetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPublicApiVersioningTest202609WidgetsWidgetIdMutationKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', 'PUT'] as const
}

export function getPutPublicApiVersioningTest202609WidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutPublicApiVersioningTest202609WidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
      >,
    ) {
      return parseResponse(
        client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$put(args, options),
      )
    },
  })
}

export function usePutPublicApiVersioningTest202609WidgetsWidgetId<
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
                  (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
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
  const mutationDefaults = getPutPublicApiVersioningTest202609WidgetsWidgetIdMutationOptions<
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

export function getDeletePublicApiVersioningTest202609WidgetsWidgetIdMutationKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', 'DELETE'] as const
}

export function getDeletePublicApiVersioningTest202609WidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePublicApiVersioningTest202609WidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePublicApiVersioningTest202609WidgetsWidgetId<
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
                    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
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
  const mutationDefaults = getDeletePublicApiVersioningTest202609WidgetsWidgetIdMutationOptions<
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
