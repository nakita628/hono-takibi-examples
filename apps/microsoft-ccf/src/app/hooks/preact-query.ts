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

export function getAppKey() {
  return ['app'] as const
}

export function getAppApiQueryKey() {
  return ['app', '/app/api'] as const
}

export function getAppApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppApiQueryKey>
  >({
    queryKey: getAppApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppCommitQueryKey(args: InferRequestType<typeof client.app.commit.$get>) {
  return ['app', '/app/commit', args] as const
}

export function getAppCommitQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.commit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppCommitQueryKey>
  >({
    queryKey: getAppCommitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.commit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.commit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.commit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppCommitQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppCommitQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppCoseSignaturesConfigQueryKey() {
  return ['app', '/app/cose_signatures_config'] as const
}

export function getAppCoseSignaturesConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppCoseSignaturesConfigQueryKey>
  >({
    queryKey: getAppCoseSignaturesConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.cose_signatures_config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppCoseSignaturesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppCoseSignaturesConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppCoseSignaturesConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppCoseSignaturesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppCoseSignaturesConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppCoseSignaturesConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppCustomAuthQueryKey() {
  return ['app', '/app/custom_auth'] as const
}

export function getAppCustomAuthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppCustomAuthQueryKey>
  >({
    queryKey: getAppCustomAuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.custom_auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppCustomAuth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppCustomAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppCustomAuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppCustomAuth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppCustomAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppCustomAuthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogBlockingPrivateQueryKey(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
) {
  return ['app', '/app/log/blocking/private', args] as const
}

export function getAppLogBlockingPrivateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogBlockingPrivateQueryKey>
  >({
    queryKey: getAppLogBlockingPrivateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.blocking.private.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogBlockingPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogBlockingPrivateQueryKey>
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
      ...getAppLogBlockingPrivateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogBlockingPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogBlockingPrivateQueryKey>
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
      ...getAppLogBlockingPrivateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppLogBlockingPrivateMutationKey() {
  return ['app', '/app/log/blocking/private', 'POST'] as const
}

export function getPostAppLogBlockingPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.blocking.private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogBlockingPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.blocking.private.$post>) {
      return parseResponse(client.app.log.blocking.private.$post(args, options))
    },
  })
}

export function usePostAppLogBlockingPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.blocking.private.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogBlockingPrivateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogBlockingPrivateReceiptMutationKey() {
  return ['app', '/app/log/blocking/private/receipt', 'POST'] as const
}

export function getPostAppLogBlockingPrivateReceiptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.blocking.private.receipt.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogBlockingPrivateReceiptMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.blocking.private.receipt.$post(undefined, options))
    },
  })
}

export function usePostAppLogBlockingPrivateReceipt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.blocking.private.receipt.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogBlockingPrivateReceiptMutationOptions<
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

export function getPostAppLogCoseSignedContentMutationKey() {
  return ['app', '/app/log/cose_signed_content', 'POST'] as const
}

export function getPostAppLogCoseSignedContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.cose_signed_content.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogCoseSignedContentMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.cose_signed_content.$post(undefined, options))
    },
  })
}

export function usePostAppLogCoseSignedContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.cose_signed_content.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogCoseSignedContentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppLogPrivateQueryKey(
  args: InferRequestType<typeof client.app.log.private.$get>,
) {
  return ['app', '/app/log/private', args] as const
}

export function getAppLogPrivateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.log.private.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateQueryKey>
  >({
    queryKey: getAppLogPrivateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppLogPrivate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPrivateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPrivate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPrivateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppLogPrivateMutationKey() {
  return ['app', '/app/log/private', 'POST'] as const
}

export function getPostAppLogPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.app.log.private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.$post>) {
      return parseResponse(client.app.log.private.$post(args, options))
    },
  })
}

export function usePostAppLogPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.app.log.private.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppLogPrivateMutationKey() {
  return ['app', '/app/log/private', 'DELETE'] as const
}

export function getDeleteAppLogPrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.app.log.private.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppLogPrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.$delete>) {
      return parseResponse(client.app.log.private.$delete(args, options))
    },
  })
}

export function useDeleteAppLogPrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppLogPrivateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateAdminOnlyMutationKey() {
  return ['app', '/app/log/private/admin_only', 'POST'] as const
}

export function getPostAppLogPrivateAdminOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.admin_only.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.private.admin_only.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateAdminOnlyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.admin_only.$post>) {
      return parseResponse(client.app.log.private.admin_only.$post(args, options))
    },
  })
}

export function usePostAppLogPrivateAdminOnly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.admin_only.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.admin_only.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateAdminOnlyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppLogPrivateAllMutationKey() {
  return ['app', '/app/log/private/all', 'DELETE'] as const
}

export function getDeleteAppLogPrivateAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.all.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppLogPrivateAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.private.all.$delete(undefined, options))
    },
  })
}

export function useDeleteAppLogPrivateAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.all.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppLogPrivateAllMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateAnonymousMutationKey() {
  return ['app', '/app/log/private/anonymous', 'POST'] as const
}

export function getPostAppLogPrivateAnonymousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.anonymous.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.private.anonymous.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateAnonymousMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.anonymous.$post>) {
      return parseResponse(client.app.log.private.anonymous.$post(args, options))
    },
  })
}

export function usePostAppLogPrivateAnonymous<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.anonymous.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.anonymous.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateAnonymousMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateAnonymousV2MutationKey() {
  return ['app', '/app/log/private/anonymous/v2', 'POST'] as const
}

export function getPostAppLogPrivateAnonymousV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.anonymous.v2.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.private.anonymous.v2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateAnonymousV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.anonymous.v2.$post>) {
      return parseResponse(client.app.log.private.anonymous.v2.$post(args, options))
    },
  })
}

export function usePostAppLogPrivateAnonymousV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.anonymous.v2.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.anonymous.v2.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateAnonymousV2MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppLogPrivateBackupQueryKey(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
) {
  return ['app', '/app/log/private/backup', args] as const
}

export function getAppLogPrivateBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateBackupQueryKey>
  >({
    queryKey: getAppLogPrivateBackupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.backup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPrivateBackupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPrivateBackupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPrivateCommittedQueryKey(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
) {
  return ['app', '/app/log/private/committed', args] as const
}

export function getAppLogPrivateCommittedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateCommittedQueryKey>
  >({
    queryKey: getAppLogPrivateCommittedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.committed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateCommitted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateCommittedQueryKey>
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
      ...getAppLogPrivateCommittedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateCommitted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateCommittedQueryKey>
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
      ...getAppLogPrivateCommittedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPrivateCountQueryKey() {
  return ['app', '/app/log/private/count'] as const
}

export function getAppLogPrivateCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateCountQueryKey>
  >({
    queryKey: getAppLogPrivateCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPrivateCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPrivateCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalQueryKey(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
) {
  return ['app', '/app/log/private/historical', args] as const
}

export function getAppLogPrivateHistoricalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalQueryKey>
  >({
    queryKey: getAppLogPrivateHistoricalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.historical.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalQueryKey>
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
      ...getAppLogPrivateHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalQueryKey>
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
      ...getAppLogPrivateHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalHandleQueryKey(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
) {
  return ['app', '/app/log/private/historical/handle', args] as const
}

export function getAppLogPrivateHistoricalHandleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalHandleQueryKey>
  >({
    queryKey: getAppLogPrivateHistoricalHandleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.historical.handle.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateHistoricalHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalHandleQueryKey>
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
      ...getAppLogPrivateHistoricalHandleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateHistoricalHandle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalHandleQueryKey>
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
      ...getAppLogPrivateHistoricalHandleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalSparseQueryKey(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
) {
  return ['app', '/app/log/private/historical/sparse', args] as const
}

export function getAppLogPrivateHistoricalSparseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalSparseQueryKey>
  >({
    queryKey: getAppLogPrivateHistoricalSparseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.historical.sparse.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateHistoricalSparse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalSparseQueryKey>
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
      ...getAppLogPrivateHistoricalSparseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateHistoricalSparse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalSparseQueryKey>
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
      ...getAppLogPrivateHistoricalSparseQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalReceiptQueryKey(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
) {
  return ['app', '/app/log/private/historical_receipt', args] as const
}

export function getAppLogPrivateHistoricalReceiptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalReceiptQueryKey>
  >({
    queryKey: getAppLogPrivateHistoricalReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.private.historical_receipt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPrivateHistoricalReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalReceiptQueryKey>
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
      ...getAppLogPrivateHistoricalReceiptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPrivateHistoricalReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPrivateHistoricalReceiptQueryKey>
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
      ...getAppLogPrivateHistoricalReceiptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateInstallCommittedIndexMutationKey() {
  return ['app', '/app/log/private/install_committed_index', 'POST'] as const
}

export function getPostAppLogPrivateInstallCommittedIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.install_committed_index.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateInstallCommittedIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.private.install_committed_index.$post(undefined, options))
    },
  })
}

export function usePostAppLogPrivateInstallCommittedIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.install_committed_index.$post>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateInstallCommittedIndexMutationOptions<
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

export function getPostAppLogPrivateOptionalCommitMutationKey() {
  return ['app', '/app/log/private/optional_commit', 'POST'] as const
}

export function getPostAppLogPrivateOptionalCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.private.optional_commit.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.private.optional_commit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateOptionalCommitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.optional_commit.$post>) {
      return parseResponse(client.app.log.private.optional_commit.$post(args, options))
    },
  })
}

export function usePostAppLogPrivateOptionalCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.optional_commit.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.optional_commit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateOptionalCommitMutationOptions<
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

export function getPostAppLogPrivatePrefixCertMutationKey() {
  return ['app', '/app/log/private/prefix_cert', 'POST'] as const
}

export function getPostAppLogPrivatePrefixCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.prefix_cert.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.app.log.private.prefix_cert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivatePrefixCertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.private.prefix_cert.$post>) {
      return parseResponse(client.app.log.private.prefix_cert.$post(args, options))
    },
  })
}

export function usePostAppLogPrivatePrefixCert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.private.prefix_cert.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.private.prefix_cert.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivatePrefixCertMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateRawTextIdMutationKey() {
  return ['app', '/app/log/private/raw_text/:id', 'POST'] as const
}

export function getPostAppLogPrivateRawTextIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app.log.private.raw_text)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateRawTextIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']>,
    ) {
      return parseResponse(client.app.log.private.raw_text[':id'].$post(args, options))
    },
  })
}

export function usePostAppLogPrivateRawTextId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.app.log.private.raw_text)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateRawTextIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppLogPrivateUninstallCommittedIndexMutationKey() {
  return ['app', '/app/log/private/uninstall_committed_index', 'POST'] as const
}

export function getPostAppLogPrivateUninstallCommittedIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.uninstall_committed_index.$post>>
          >
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPrivateUninstallCommittedIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.app.log.private.uninstall_committed_index.$post(undefined, options),
      )
    },
  })
}

export function usePostAppLogPrivateUninstallCommittedIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.uninstall_committed_index.$post>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPrivateUninstallCommittedIndexMutationOptions<
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

export function getAppLogPublicQueryKey(args: InferRequestType<typeof client.app.log.public.$get>) {
  return ['app', '/app/log/public', args] as const
}

export function getAppLogPublicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.log.public.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicQueryKey>
  >({
    queryKey: getAppLogPublicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppLogPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppLogPublicMutationKey() {
  return ['app', '/app/log/public', 'POST'] as const
}

export function getPostAppLogPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.app.log.public.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogPublicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.public.$post>) {
      return parseResponse(client.app.log.public.$post(args, options))
    },
  })
}

export function usePostAppLogPublic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.app.log.public.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogPublicMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppLogPublicMutationKey() {
  return ['app', '/app/log/public', 'DELETE'] as const
}

export function getDeleteAppLogPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.app.log.public.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppLogPublicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.log.public.$delete>) {
      return parseResponse(client.app.log.public.$delete(args, options))
    },
  })
}

export function useDeleteAppLogPublic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.app.log.public.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppLogPublicMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAppLogPublicAllMutationKey() {
  return ['app', '/app/log/public/all', 'DELETE'] as const
}

export function getDeleteAppLogPublicAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.all.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppLogPublicAllMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.public.all.$delete(undefined, options))
    },
  })
}

export function useDeleteAppLogPublicAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.all.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAppLogPublicAllMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppLogPublicBackupQueryKey(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
) {
  return ['app', '/app/log/public/backup', args] as const
}

export function getAppLogPublicBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicBackupQueryKey>
  >({
    queryKey: getAppLogPublicBackupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.backup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppLogPublicBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicBackupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublicBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicBackupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPublicCoseEndorsementsQueryKey() {
  return ['app', '/app/log/public/cose_endorsements'] as const
}

export function getAppLogPublicCoseEndorsementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseEndorsementsQueryKey>
  >({
    queryKey: getAppLogPublicCoseEndorsementsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.cose_endorsements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicCoseEndorsements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseEndorsementsQueryKey>
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
      ...getAppLogPublicCoseEndorsementsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPublicCoseEndorsements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseEndorsementsQueryKey>
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
      ...getAppLogPublicCoseEndorsementsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPublicCoseReceiptQueryKey() {
  return ['app', '/app/log/public/cose_receipt'] as const
}

export function getAppLogPublicCoseReceiptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseReceiptQueryKey>
  >({
    queryKey: getAppLogPublicCoseReceiptQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.cose_receipt.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicCoseReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicCoseReceiptQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublicCoseReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicCoseReceiptQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPublicCoseSignatureQueryKey() {
  return ['app', '/app/log/public/cose_signature'] as const
}

export function getAppLogPublicCoseSignatureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseSignatureQueryKey>
  >({
    queryKey: getAppLogPublicCoseSignatureQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.cose_signature.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicCoseSignature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseSignatureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicCoseSignatureQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublicCoseSignature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCoseSignatureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicCoseSignatureQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPublicCountQueryKey() {
  return ['app', '/app/log/public/count'] as const
}

export function getAppLogPublicCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCountQueryKey>
  >({
    queryKey: getAppLogPublicCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublicCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPublicHistoricalRangeQueryKey(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
) {
  return ['app', '/app/log/public/historical/range', args] as const
}

export function getAppLogPublicHistoricalRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicHistoricalRangeQueryKey>
  >({
    queryKey: getAppLogPublicHistoricalRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.historical.range.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicHistoricalRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicHistoricalRangeQueryKey>
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
      ...getAppLogPublicHistoricalRangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPublicHistoricalRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicHistoricalRangeQueryKey>
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
      ...getAppLogPublicHistoricalRangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPublicHistoricalReceiptQueryKey(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
) {
  return ['app', '/app/log/public/historical_receipt', args] as const
}

export function getAppLogPublicHistoricalReceiptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicHistoricalReceiptQueryKey>
  >({
    queryKey: getAppLogPublicHistoricalReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.historical_receipt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicHistoricalReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicHistoricalReceiptQueryKey>
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
      ...getAppLogPublicHistoricalReceiptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPublicHistoricalReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicHistoricalReceiptQueryKey>
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
      ...getAppLogPublicHistoricalReceiptQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogPublicTrustedKeysQueryKey() {
  return ['app', '/app/log/public/trusted_keys'] as const
}

export function getAppLogPublicTrustedKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicTrustedKeysQueryKey>
  >({
    queryKey: getAppLogPublicTrustedKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.trusted_keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicTrustedKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicTrustedKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogPublicTrustedKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogPublicTrustedKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicTrustedKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogPublicTrustedKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppLogPublicVerifyCoseReceiptQueryKey() {
  return ['app', '/app/log/public/verify_cose_receipt'] as const
}

export function getAppLogPublicVerifyCoseReceiptQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicVerifyCoseReceiptQueryKey>
  >({
    queryKey: getAppLogPublicVerifyCoseReceiptQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.public.verify_cose_receipt.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogPublicVerifyCoseReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
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
              Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicVerifyCoseReceiptQueryKey>
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
      ...getAppLogPublicVerifyCoseReceiptQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAppLogPublicVerifyCoseReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
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
              Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogPublicVerifyCoseReceiptQueryKey>
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
      ...getAppLogPublicVerifyCoseReceiptQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAppLogRequestQueryQueryKey() {
  return ['app', '/app/log/request_query'] as const
}

export function getAppLogRequestQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogRequestQueryQueryKey>
  >({
    queryKey: getAppLogRequestQueryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.request_query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogRequestQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogRequestQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogRequestQueryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogRequestQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogRequestQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogRequestQueryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppLogSignedStatementMutationKey() {
  return ['app', '/app/log/signed_statement', 'POST'] as const
}

export function getPostAppLogSignedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.signed_statement.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppLogSignedStatementMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.log.signed_statement.$post(undefined, options))
    },
  })
}

export function usePostAppLogSignedStatement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.signed_statement.$post>>
              >
            >
          >
        | undefined,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppLogSignedStatementMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppLogTransparentStatementQueryKey() {
  return ['app', '/app/log/transparent_statement'] as const
}

export function getAppLogTransparentStatementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogTransparentStatementQueryKey>
  >({
    queryKey: getAppLogTransparentStatementQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.log.transparent_statement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAppLogTransparentStatement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogTransparentStatementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppLogTransparentStatementQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppLogTransparentStatement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
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
              Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppLogTransparentStatementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppLogTransparentStatementQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAppMultiAuthMutationKey() {
  return ['app', '/app/multi_auth', 'POST'] as const
}

export function getPostAppMultiAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.multi_auth.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAppMultiAuthMutationKey(),
    async mutationFn() {
      return parseResponse(client.app.multi_auth.$post(undefined, options))
    },
  })
}

export function usePostAppMultiAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.multi_auth.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppMultiAuthMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppReceiptQueryKey(args: InferRequestType<typeof client.app.receipt.$get>) {
  return ['app', '/app/receipt', args] as const
}

export function getAppReceiptQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.receipt.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppReceiptQueryKey>
  >({
    queryKey: getAppReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.receipt.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.receipt.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.receipt.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppReceiptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppReceiptQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppReceiptCoseQueryKey(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
) {
  return ['app', '/app/receipt/cose', args] as const
}

export function getAppReceiptCoseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.receipt.cose.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppReceiptCoseQueryKey>
  >({
    queryKey: getAppReceiptCoseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.receipt.cose.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppReceiptCoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppReceiptCoseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppReceiptCoseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAppTxQueryKey(args: InferRequestType<typeof client.app.tx.$get>) {
  return ['app', '/app/tx', args] as const
}

export function getAppTxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.app.tx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppTxQueryKey>
  >({
    queryKey: getAppTxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.app.tx.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAppTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.tx.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAppTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAppTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.app.tx.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAppTxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAppTxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
