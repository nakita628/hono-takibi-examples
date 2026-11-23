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

export function getAppkeyKey() {
  return ['appkey'] as const
}

export function getAuthenticationKey() {
  return ['authentication'] as const
}

export function getAuthkeyKey() {
  return ['authkey'] as const
}

export function getKkidKey() {
  return ['kkid'] as const
}

export function getPutAppkeyMutationKey() {
  return ['appkey', '/appkey', 'PUT'] as const
}

export function getPutAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$put>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$put>) {
      return parseResponse(client.appkey.$put(args, options))
    },
  })
}

export function usePutAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$put>>>>>,
          TError,
          InferRequestType<typeof client.appkey.$put>,
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
  const mutationDefaults = getPutAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppkeyMutationKey() {
  return ['appkey', '/appkey', 'POST'] as const
}

export function getPostAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$post>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$post>) {
      return parseResponse(client.appkey.$post(args, options))
    },
  })
}

export function usePostAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.appkey.$post>,
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
  const mutationDefaults = getPostAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAppkeyMutationKey() {
  return ['appkey', '/appkey', 'PATCH'] as const
}

export function getPatchAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$patch>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$patch>) {
      return parseResponse(client.appkey.$patch(args, options))
    },
  })
}

export function usePatchAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.appkey.$patch>,
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
  const mutationDefaults = getPatchAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'PUT'] as const
}

export function getPutAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$put>) {
      return parseResponse(client.authentication.appkey.$put(args, options))
    },
  })
}

export function usePutAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.appkey.$put>,
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
  const mutationDefaults = getPutAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'POST'] as const
}

export function getPostAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$post>) {
      return parseResponse(client.authentication.appkey.$post(args, options))
    },
  })
}

export function usePostAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.appkey.$post>,
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
  const mutationDefaults = getPostAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'PATCH'] as const
}

export function getPatchAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$patch>) {
      return parseResponse(client.authentication.appkey.$patch(args, options))
    },
  })
}

export function usePatchAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.appkey.$patch>,
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
  const mutationDefaults = getPatchAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationAuthkeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.authkey.$get>>,
) {
  return ['authentication', '/authentication/authkey', toValue(args)] as const
}

export function getAuthenticationAuthkeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.authkey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticationAuthkeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authentication.authkey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticationAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.authkey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
            >
          >,
          ReturnType<typeof getAuthenticationAuthkeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationAuthkeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticationAuthkeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authentication.authkey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'PUT'] as const
}

export function getPutAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$put>) {
      return parseResponse(client.authentication.authkey.$put(args, options))
    },
  })
}

export function usePutAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.authkey.$put>,
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
  const mutationDefaults = getPutAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'POST'] as const
}

export function getPostAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$post>) {
      return parseResponse(client.authentication.authkey.$post(args, options))
    },
  })
}

export function usePostAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.authkey.$post>,
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
  const mutationDefaults = getPostAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'PATCH'] as const
}

export function getPatchAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$patch>) {
      return parseResponse(client.authentication.authkey.$patch(args, options))
    },
  })
}

export function usePatchAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.authkey.$patch>,
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
  const mutationDefaults = getPatchAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationVerifyotpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.verifyotp.$get>>,
) {
  return ['authentication', '/authentication/verifyotp', toValue(args)] as const
}

export function getAuthenticationVerifyotpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.verifyotp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticationVerifyotpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authentication.verifyotp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticationVerifyotp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authentication.verifyotp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
            >
          >,
          ReturnType<typeof getAuthenticationVerifyotpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationVerifyotpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticationVerifyotpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authentication.verifyotp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthkeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authkey.$get>>,
) {
  return ['authkey', '/authkey', toValue(args)] as const
}

export function getAuthkeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authkey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthkeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authkey.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authkey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
          >,
          ReturnType<typeof getAuthkeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthkeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthkeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authkey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'PUT'] as const
}

export function getPutAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$put>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$put>) {
      return parseResponse(client.authkey.$put(args, options))
    },
  })
}

export function usePutAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.authkey.$put>,
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
  const mutationDefaults = getPutAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'POST'] as const
}

export function getPostAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$post>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$post>) {
      return parseResponse(client.authkey.$post(args, options))
    },
  })
}

export function usePostAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.authkey.$post>,
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
  const mutationDefaults = getPostAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'PATCH'] as const
}

export function getPatchAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$patch>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$patch>) {
      return parseResponse(client.authkey.$patch(args, options))
    },
  })
}

export function usePatchAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.authkey.$patch>,
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
  const mutationDefaults = getPatchAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKkidAllowanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.allowance.$get>>,
) {
  return ['kkid', '/kkid/allowance', toValue(args)] as const
}

export function getKkidAllowanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.allowance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidAllowanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.allowance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKkidAllowance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.allowance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
          >,
          ReturnType<typeof getKkidAllowanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidAllowanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidAllowanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.allowance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKkidAllowanceMutationKey() {
  return ['kkid', '/kkid/allowance', 'POST'] as const
}

export function getPostKkidAllowanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.allowance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidAllowanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.allowance.$post>) {
      return parseResponse(client.kkid.allowance.$post(args, options))
    },
  })
}

export function usePostKkidAllowance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.allowance.$post>,
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
  const mutationDefaults = getPostKkidAllowanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidApnsMutationKey() {
  return ['kkid', '/kkid/apns', 'POST'] as const
}

export function getPostKkidApnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.apns.$post>>>>>,
    TError,
    InferRequestType<typeof client.kkid.apns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidApnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.apns.$post>) {
      return parseResponse(client.kkid.apns.$post(args, options))
    },
  })
}

export function usePostKkidApns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.apns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.apns.$post>,
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
  const mutationDefaults = getPostKkidApnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKkidChorelistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.chorelist.$get>>,
) {
  return ['kkid', '/kkid/chorelist', toValue(args)] as const
}

export function getKkidChorelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.chorelist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidChorelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.chorelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKkidChorelist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.chorelist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
          >,
          ReturnType<typeof getKkidChorelistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidChorelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidChorelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.chorelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'PUT'] as const
}

export function getPutKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$put>) {
      return parseResponse(client.kkid.chorelist.$put(args, options))
    },
  })
}

export function usePutKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.chorelist.$put>,
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
  const mutationDefaults = getPutKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'POST'] as const
}

export function getPostKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$post>) {
      return parseResponse(client.kkid.chorelist.$post(args, options))
    },
  })
}

export function usePostKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.chorelist.$post>,
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
  const mutationDefaults = getPostKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'DELETE'] as const
}

export function getDeleteKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$delete>) {
      return parseResponse(client.kkid.chorelist.$delete(args, options))
    },
  })
}

export function useDeleteKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.chorelist.$delete>,
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
  const mutationDefaults = getDeleteKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidMasteruserMutationKey() {
  return ['kkid', '/kkid/masteruser', 'POST'] as const
}

export function getPostKkidMasteruserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.masteruser.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.masteruser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidMasteruserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.masteruser.$post>) {
      return parseResponse(client.kkid.masteruser.$post(args, options))
    },
  })
}

export function usePostKkidMasteruser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.masteruser.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.masteruser.$post>,
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
  const mutationDefaults = getPostKkidMasteruserMutationOptions<TError, TOnMutateResult>(
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

export function getKkidShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.share.$get>>,
) {
  return ['kkid', '/kkid/share', toValue(args)] as const
}

export function getKkidShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.share.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.share.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKkidShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.share.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
          >,
          ReturnType<typeof getKkidShareQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKkidShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.share.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKkidUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.user.$get>>,
) {
  return ['kkid', '/kkid/user', toValue(args)] as const
}

export function getKkidUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.user.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKkidUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
          >,
          ReturnType<typeof getKkidUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKkidUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKkidUserlistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.userlist.$get>>,
) {
  return ['kkid', '/kkid/userlist', toValue(args)] as const
}

export function getKkidUserlistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.userlist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidUserlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.userlist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKkidUserlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.userlist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
          >,
          ReturnType<typeof getKkidUserlistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidUserlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidUserlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.userlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'PUT'] as const
}

export function getPutKkidUserlistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$put>) {
      return parseResponse(client.kkid.userlist.$put(args, options))
    },
  })
}

export function usePutKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.userlist.$put>,
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
  const mutationDefaults = getPutKkidUserlistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'POST'] as const
}

export function getPostKkidUserlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$post>) {
      return parseResponse(client.kkid.userlist.$post(args, options))
    },
  })
}

export function usePostKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.userlist.$post>,
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
  const mutationDefaults = getPostKkidUserlistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'DELETE'] as const
}

export function getDeleteKkidUserlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$delete>) {
      return parseResponse(client.kkid.userlist.$delete(args, options))
    },
  })
}

export function useDeleteKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.userlist.$delete>,
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
  const mutationDefaults = getDeleteKkidUserlistMutationOptions<TError, TOnMutateResult>(
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

export function getKkidWishlistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.wishlist.$get>>,
) {
  return ['kkid', '/kkid/wishlist', toValue(args)] as const
}

export function getKkidWishlistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.wishlist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKkidWishlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kkid.wishlist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKkidWishlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kkid.wishlist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
          >,
          ReturnType<typeof getKkidWishlistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidWishlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKkidWishlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kkid.wishlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'PUT'] as const
}

export function getPutKkidWishlistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$put>) {
      return parseResponse(client.kkid.wishlist.$put(args, options))
    },
  })
}

export function usePutKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.wishlist.$put>,
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
  const mutationDefaults = getPutKkidWishlistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'POST'] as const
}

export function getPostKkidWishlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$post>) {
      return parseResponse(client.kkid.wishlist.$post(args, options))
    },
  })
}

export function usePostKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.kkid.wishlist.$post>,
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
  const mutationDefaults = getPostKkidWishlistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'DELETE'] as const
}

export function getDeleteKkidWishlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$delete>) {
      return parseResponse(client.kkid.wishlist.$delete(args, options))
    },
  })
}

export function useDeleteKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.kkid.wishlist.$delete>,
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
  const mutationDefaults = getDeleteKkidWishlistMutationOptions<TError, TOnMutateResult>(
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
