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

export function getAppKey() {
  return ['app'] as const
}

export function getAppApiQueryKey() {
  return ['app', '/app/api'] as const
}

export function getAppApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>
          >,
          ReturnType<typeof getAppApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppCommitQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.commit.$get>>,
) {
  return ['app', '/app/commit', toValue(args)] as const
}

export function getAppCommitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.commit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.commit.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppCommit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.commit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>
          >,
          ReturnType<typeof getAppCommitQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.commit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppCoseSignaturesConfigQueryKey() {
  return ['app', '/app/cose_signatures_config'] as const
}

export function getAppCoseSignaturesConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppCoseSignaturesConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.cose_signatures_config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>
              >
            >
          >,
          ReturnType<typeof getAppCoseSignaturesConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppCoseSignaturesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppCoseSignaturesConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.cose_signatures_config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppCustomAuthQueryKey() {
  return ['app', '/app/custom_auth'] as const
}

export function getAppCustomAuthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppCustomAuthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.custom_auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppCustomAuth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>
            >
          >,
          ReturnType<typeof getAppCustomAuthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppCustomAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppCustomAuthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.custom_auth.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogBlockingPrivateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.blocking.private.$get>>,
) {
  return ['app', '/app/log/blocking/private', toValue(args)] as const
}

export function getAppLogBlockingPrivateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.blocking.private.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogBlockingPrivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.blocking.private.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogBlockingPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.blocking.private.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
            >
          >,
          ReturnType<typeof getAppLogBlockingPrivateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogBlockingPrivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogBlockingPrivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.blocking.private.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.blocking.private.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.app.log.blocking.private.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.$get>>,
) {
  return ['app', '/app/log/private', toValue(args)] as const
}

export function getAppLogPrivateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPrivate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>
            >
          >,
          ReturnType<typeof getAppLogPrivateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.app.log.private.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.anonymous.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.app.log.private.anonymous.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.backup.$get>>,
) {
  return ['app', '/app/log/private/backup', toValue(args)] as const
}

export function getAppLogPrivateBackupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.backup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateBackupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.backup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPrivateBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.backup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
            >
          >,
          ReturnType<typeof getAppLogPrivateBackupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateBackupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.backup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateCommittedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.committed.$get>>,
) {
  return ['app', '/app/log/private/committed', toValue(args)] as const
}

export function getAppLogPrivateCommittedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.committed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateCommittedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.committed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPrivateCommitted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.committed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.committed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.committed.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPrivateCommittedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateCommittedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateCommittedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.committed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateCountQueryKey() {
  return ['app', '/app/log/private/count'] as const
}

export function getAppLogPrivateCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPrivateCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPrivateCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
            >
          >,
          ReturnType<typeof getAppLogPrivateCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPrivateCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.$get>>,
) {
  return ['app', '/app/log/private/historical', toValue(args)] as const
}

export function getAppLogPrivateHistoricalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateHistoricalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.historical.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPrivateHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.historical.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.historical.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPrivateHistoricalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateHistoricalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.historical.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalHandleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.handle.$get>>,
) {
  return ['app', '/app/log/private/historical/handle', toValue(args)] as const
}

export function getAppLogPrivateHistoricalHandleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.handle.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateHistoricalHandleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.historical.handle.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.handle.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPrivateHistoricalHandleQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalHandleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateHistoricalHandleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.historical.handle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalSparseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.sparse.$get>>,
) {
  return ['app', '/app/log/private/historical/sparse', toValue(args)] as const
}

export function getAppLogPrivateHistoricalSparseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.sparse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateHistoricalSparseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.historical.sparse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical.sparse.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPrivateHistoricalSparseQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalSparseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateHistoricalSparseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.historical.sparse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPrivateHistoricalReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical_receipt.$get>>,
) {
  return ['app', '/app/log/private/historical_receipt', toValue(args)] as const
}

export function getAppLogPrivateHistoricalReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical_receipt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPrivateHistoricalReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.private.historical_receipt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.private.historical_receipt.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPrivateHistoricalReceiptQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPrivateHistoricalReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPrivateHistoricalReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.private.historical_receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAppLogPublicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.$get>>,
) {
  return ['app', '/app/log/public', toValue(args)] as const
}

export function getAppLogPublicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
          >,
          ReturnType<typeof getAppLogPublicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.app.log.public.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.backup.$get>>,
) {
  return ['app', '/app/log/public/backup', toValue(args)] as const
}

export function getAppLogPublicBackupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.backup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPublicBackupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.backup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPublicBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.backup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
            >
          >,
          ReturnType<typeof getAppLogPublicBackupQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPublicBackupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.backup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicCoseEndorsementsQueryKey() {
  return ['app', '/app/log/public/cose_endorsements'] as const
}

export function getAppLogPublicCoseEndorsementsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicCoseEndorsementsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.cose_endorsements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicCoseEndorsementsQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseEndorsementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicCoseEndorsementsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.cose_endorsements.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicCoseReceiptQueryKey() {
  return ['app', '/app/log/public/cose_receipt'] as const
}

export function getAppLogPublicCoseReceiptQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicCoseReceiptQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.cose_receipt.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicCoseReceiptQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicCoseReceiptQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.cose_receipt.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicCoseSignatureQueryKey() {
  return ['app', '/app/log/public/cose_signature'] as const
}

export function getAppLogPublicCoseSignatureQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicCoseSignatureQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.cose_signature.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicCoseSignatureQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCoseSignatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicCoseSignatureQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.cose_signature.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicCountQueryKey() {
  return ['app', '/app/log/public/count'] as const
}

export function getAppLogPublicCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPublicCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
            >
          >,
          ReturnType<typeof getAppLogPublicCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicHistoricalRangeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical.range.$get>>,
) {
  return ['app', '/app/log/public/historical/range', toValue(args)] as const
}

export function getAppLogPublicHistoricalRangeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical.range.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPublicHistoricalRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.historical.range.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogPublicHistoricalRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical.range.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicHistoricalRangeQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicHistoricalRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPublicHistoricalRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.historical.range.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicHistoricalReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical_receipt.$get>>,
) {
  return ['app', '/app/log/public/historical_receipt', toValue(args)] as const
}

export function getAppLogPublicHistoricalReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical_receipt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppLogPublicHistoricalReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.historical_receipt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.log.public.historical_receipt.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicHistoricalReceiptQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicHistoricalReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppLogPublicHistoricalReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.historical_receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicTrustedKeysQueryKey() {
  return ['app', '/app/log/public/trusted_keys'] as const
}

export function getAppLogPublicTrustedKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicTrustedKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.trusted_keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicTrustedKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicTrustedKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicTrustedKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.trusted_keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogPublicVerifyCoseReceiptQueryKey() {
  return ['app', '/app/log/public/verify_cose_receipt'] as const
}

export function getAppLogPublicVerifyCoseReceiptQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogPublicVerifyCoseReceiptQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.public.verify_cose_receipt.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogPublicVerifyCoseReceiptQueryKey>
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
          Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogPublicVerifyCoseReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogPublicVerifyCoseReceiptQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.public.verify_cose_receipt.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppLogRequestQueryQueryKey() {
  return ['app', '/app/log/request_query'] as const
}

export function getAppLogRequestQueryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogRequestQueryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.request_query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppLogRequestQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
            >
          >,
          ReturnType<typeof getAppLogRequestQueryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogRequestQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogRequestQueryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.request_query.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAppLogTransparentStatementQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAppLogTransparentStatementQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.log.transparent_statement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>
              >
            >
          >,
          ReturnType<typeof getAppLogTransparentStatementQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppLogTransparentStatementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAppLogTransparentStatementQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.app.log.transparent_statement.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.multi_auth.$post>>>
            >
          >,
          TError,
          void,
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

export function getAppReceiptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.$get>>,
) {
  return ['app', '/app/receipt', toValue(args)] as const
}

export function getAppReceiptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppReceiptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.receipt.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppReceipt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
          >,
          ReturnType<typeof getAppReceiptQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppReceiptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppReceiptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppReceiptCoseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.cose.$get>>,
) {
  return ['app', '/app/receipt/cose', toValue(args)] as const
}

export function getAppReceiptCoseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.cose.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppReceiptCoseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.receipt.cose.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppReceiptCose<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.receipt.cose.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>
            >
          >,
          ReturnType<typeof getAppReceiptCoseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppReceiptCoseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppReceiptCoseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.receipt.cose.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppTxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.tx.$get>>,
) {
  return ['app', '/app/tx', toValue(args)] as const
}

export function getAppTxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.tx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppTxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.app.tx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppTx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.app.tx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
          ReturnType<typeof getAppTxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppTxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppTxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.app.tx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
