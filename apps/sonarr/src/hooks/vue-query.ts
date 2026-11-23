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

export function getApiKey() {
  return ['api'] as const
}

export function getContentKey() {
  return ['content'] as const
}

export function getFeedKey() {
  return ['feed'] as const
}

export function getLoggedoutKey() {
  return ['loggedout'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getResetPasswordKey() {
  return ['reset-password'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
          ReturnType<typeof getApiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoginSsoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.sso.$get>>,
) {
  return ['login', '/login/sso', toValue(args)] as const
}

export function getLoginSsoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.sso.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoginSsoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.login.sso.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLoginSso<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.login.sso.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
          >,
          ReturnType<typeof getLoginSsoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginSsoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoginSsoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.login.sso.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoginQueryKey() {
  return ['login', '/login'] as const
}

export function getLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
          ReturnType<typeof getLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostResetPasswordRequestMutationKey() {
  return ['reset-password', '/reset-password/request', 'POST'] as const
}

export function getPostResetPasswordRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['reset-password']['request']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordRequestMutationKey(),
    async mutationFn() {
      return parseResponse(client['reset-password'].request.$post(undefined, options))
    },
  })
}

export function usePostResetPasswordRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['reset-password']['request']['$post']>>
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
  const mutationDefaults = getPostResetPasswordRequestMutationOptions<TError, TOnMutateResult>(
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

export function getPostResetPasswordMutationKey() {
  return ['reset-password', '/reset-password', 'POST'] as const
}

export function getPostResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reset-password']['$post']>) {
      return parseResponse(client['reset-password'].$post(args, options))
    },
  })
}

export function usePostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['reset-password']['$post']>,
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
  const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          ReturnType<typeof getLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AutotaggingQueryKey() {
  return ['api', '/api/v3/autotagging'] as const
}

export function getApiV3AutotaggingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3AutotaggingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.autotagging.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AutotaggingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3AutotaggingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.autotagging.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AutotaggingMutationKey() {
  return ['api', '/api/v3/autotagging', 'POST'] as const
}

export function getPostApiV3AutotaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.autotagging.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AutotaggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.autotagging.$post>) {
      return parseResponse(client.api.v3.autotagging.$post(args, options))
    },
  })
}

export function usePostApiV3Autotagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.autotagging.$post>,
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
  const mutationDefaults = getPostApiV3AutotaggingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AutotaggingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>>,
) {
  return ['api', '/api/v3/autotagging/:id', toValue(args)] as const
}

export function getApiV3AutotaggingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AutotaggingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.autotagging[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3AutotaggingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AutotaggingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.autotagging[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'PUT'] as const
}

export function getPutApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'DELETE'] as const
}

export function getDeleteApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AutotaggingSchemaQueryKey() {
  return ['api', '/api/v3/autotagging/schema'] as const
}

export function getApiV3AutotaggingSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3AutotaggingSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.autotagging.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3AutotaggingSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.autotagging.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemBackupQueryKey() {
  return ['api', '/api/v3/system/backup'] as const
}

export function getApiV3SystemBackupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3SystemBackupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SystemBackupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3SystemBackupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.backup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3SystemBackupIdMutationKey() {
  return ['api', '/api/v3/system/backup/:id', 'DELETE'] as const
}

export function getDeleteApiV3SystemBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SystemBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.system.backup[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3SystemBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SystemBackupRestoreIdMutationKey() {
  return ['api', '/api/v3/system/backup/restore/:id', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.system.backup.restore[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3SystemBackupRestoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
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
  const mutationDefaults = getPostApiV3SystemBackupRestoreIdMutationOptions<
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

export function getPostApiV3SystemBackupRestoreUploadMutationKey() {
  return ['api', '/api/v3/system/backup/restore/upload', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.backup.restore.upload.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemBackupRestoreUpload<
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
                Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
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
  const mutationDefaults = getPostApiV3SystemBackupRestoreUploadMutationOptions<
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

export function getApiV3BlocklistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.$get>>,
) {
  return ['api', '/api/v3/blocklist', toValue(args)] as const
}

export function getApiV3BlocklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3BlocklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.blocklist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>
            >
          >,
          ReturnType<typeof getApiV3BlocklistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BlocklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3BlocklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.blocklist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3BlocklistIdMutationKey() {
  return ['api', '/api/v3/blocklist/:id', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.blocklist[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3BlocklistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3BlocklistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3BlocklistBulkMutationKey() {
  return ['api', '/api/v3/blocklist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>) {
      return parseResponse(client.api.v3.blocklist.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3BlocklistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3BlocklistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.calendar.$get>>,
) {
  return ['api', '/api/v3/calendar', toValue(args)] as const
}

export function getApiV3CalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>
            >
          >,
          ReturnType<typeof getApiV3CalendarQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3CalendarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>>,
) {
  return ['api', '/api/v3/calendar/:id', toValue(args)] as const
}

export function getApiV3CalendarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CalendarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.calendar[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.calendar)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CalendarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.calendar)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CalendarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CalendarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.calendar[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedV3CalendarSonarrIcsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>,
) {
  return ['feed', '/feed/v3/calendar/sonarr.ics', toValue(args)] as const
}

export function getFeedV3CalendarSonarrIcsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedV3CalendarSonarrIcsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.v3.calendar['sonarr.ics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedV3CalendarSonarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedV3CalendarSonarrIcsQueryKey>
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
          Awaited<ReturnType<(typeof client.feed.v3.calendar)['sonarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV3CalendarSonarrIcsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedV3CalendarSonarrIcsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.v3.calendar['sonarr.ics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3CommandQueryKey() {
  return ['api', '/api/v3/command'] as const
}

export function getApiV3CommandQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3CommandQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
          >,
          ReturnType<typeof getApiV3CommandQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3CommandQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.command.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3CommandMutationKey() {
  return ['api', '/api/v3/command', 'POST'] as const
}

export function getPostApiV3CommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.command.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CommandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.command.$post>) {
      return parseResponse(client.api.v3.command.$post(args, options))
    },
  })
}

export function usePostApiV3Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.command.$post>,
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
  const mutationDefaults = getPostApiV3CommandMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CommandIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.command)[':id']['$get']>>,
) {
  return ['api', '/api/v3/command/:id', toValue(args)] as const
}

export function getApiV3CommandIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.command)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CommandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.command[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.command)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CommandIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CommandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.command[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3CommandIdMutationKey() {
  return ['api', '/api/v3/command/:id', 'DELETE'] as const
}

export function getDeleteApiV3CommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CommandIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>) {
      return parseResponse(client.api.v3.command[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3CommandIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomfilterQueryKey() {
  return ['api', '/api/v3/customfilter'] as const
}

export function getApiV3CustomfilterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3CustomfilterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>
            >
          >,
          ReturnType<typeof getApiV3CustomfilterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3CustomfilterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.customfilter.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3CustomfilterMutationKey() {
  return ['api', '/api/v3/customfilter', 'POST'] as const
}

export function getPostApiV3CustomfilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customfilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomfilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customfilter.$post>) {
      return parseResponse(client.api.v3.customfilter.$post(args, options))
    },
  })
}

export function usePostApiV3Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customfilter.$post>,
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
  const mutationDefaults = getPostApiV3CustomfilterMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomfilterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>>,
) {
  return ['api', '/api/v3/customfilter/:id', toValue(args)] as const
}

export function getApiV3CustomfilterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CustomfilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.customfilter[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CustomfilterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CustomfilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.customfilter[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'PUT'] as const
}

export function getPutApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomfilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>) {
      return parseResponse(client.api.v3.customfilter[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomfilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customfilter[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatQueryKey() {
  return ['api', '/api/v3/customformat'] as const
}

export function getApiV3CustomformatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3CustomformatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.customformat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>
            >
          >,
          ReturnType<typeof getApiV3CustomformatQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3CustomformatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.customformat.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3CustomformatMutationKey() {
  return ['api', '/api/v3/customformat', 'POST'] as const
}

export function getPostApiV3CustomformatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomformatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.$post>) {
      return parseResponse(client.api.v3.customformat.$post(args, options))
    },
  })
}

export function usePostApiV3Customformat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.$post>,
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
  const mutationDefaults = getPostApiV3CustomformatMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>>,
) {
  return ['api', '/api/v3/customformat/:id', toValue(args)] as const
}

export function getApiV3CustomformatIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CustomformatIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.customformat[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CustomformatIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CustomformatIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.customformat[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'PUT'] as const
}

export function getPutApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>) {
      return parseResponse(client.api.v3.customformat[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customformat[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'PUT'] as const
}

export function getPutApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$put>) {
      return parseResponse(client.api.v3.customformat.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
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
  const mutationDefaults = getPutApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$delete>) {
      return parseResponse(client.api.v3.customformat.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatSchemaQueryKey() {
  return ['api', '/api/v3/customformat/schema'] as const
}

export function getApiV3CustomformatSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3CustomformatSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.customformat.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3CustomformatSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.customformat.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3WantedCutoffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.cutoff.$get>>,
) {
  return ['api', '/api/v3/wanted/cutoff', toValue(args)] as const
}

export function getApiV3WantedCutoffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.cutoff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3WantedCutoffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.wanted.cutoff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.cutoff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>
            >
          >,
          ReturnType<typeof getApiV3WantedCutoffQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedCutoffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3WantedCutoffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.wanted.cutoff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3WantedCutoffIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>,
) {
  return ['api', '/api/v3/wanted/cutoff/:id', toValue(args)] as const
}

export function getApiV3WantedCutoffIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3WantedCutoffIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.wanted.cutoff[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3WantedCutoffId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3WantedCutoffIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.wanted.cutoff)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedCutoffIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3WantedCutoffIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.wanted.cutoff[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3DelayprofileQueryKey() {
  return ['api', '/api/v3/delayprofile'] as const
}

export function getApiV3DelayprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3DelayprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.delayprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3DelayprofileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3DelayprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.delayprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3DelayprofileMutationKey() {
  return ['api', '/api/v3/delayprofile', 'POST'] as const
}

export function getPostApiV3DelayprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.delayprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DelayprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.delayprofile.$post>) {
      return parseResponse(client.api.v3.delayprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Delayprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.delayprofile.$post>,
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
  const mutationDefaults = getPostApiV3DelayprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DelayprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/delayprofile/:id', toValue(args)] as const
}

export function getApiV3DelayprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3DelayprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.delayprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3DelayprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3DelayprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.delayprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.delayprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DelayprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.delayprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3DelayprofileReorderIdMutationKey() {
  return ['api', '/api/v3/delayprofile/reorder/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileReorderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileReorderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.delayprofile.reorder[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DelayprofileReorderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3DelayprofileReorderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DiskspaceQueryKey() {
  return ['api', '/api/v3/diskspace'] as const
}

export function getApiV3DiskspaceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3DiskspaceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.diskspace.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>
            >
          >,
          ReturnType<typeof getApiV3DiskspaceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DiskspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3DiskspaceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.diskspace.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3DownloadclientQueryKey() {
  return ['api', '/api/v3/downloadclient'] as const
}

export function getApiV3DownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3DownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
            >
          >,
          ReturnType<typeof getApiV3DownloadclientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3DownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3DownloadclientMutationKey() {
  return ['api', '/api/v3/downloadclient', 'POST'] as const
}

export function getPostApiV3DownloadclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.$post>) {
      return parseResponse(client.api.v3.downloadclient.$post(args, options))
    },
  })
}

export function usePostApiV3Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.$post>,
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
  const mutationDefaults = getPostApiV3DownloadclientMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DownloadclientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>>,
) {
  return ['api', '/api/v3/downloadclient/:id', toValue(args)] as const
}

export function getApiV3DownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3DownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3DownloadclientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3DownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>) {
      return parseResponse(client.api.v3.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.downloadclient[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'PUT'] as const
}

export function getPutApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
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
  const mutationDefaults = getPutApiV3DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DownloadclientSchemaQueryKey() {
  return ['api', '/api/v3/downloadclient/schema'] as const
}

export function getApiV3DownloadclientSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3DownloadclientSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3DownloadclientSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.downloadclient.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3DownloadclientTestMutationKey() {
  return ['api', '/api/v3/downloadclient/test', 'POST'] as const
}

export function getPostApiV3DownloadclientTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.test.$post>) {
      return parseResponse(client.api.v3.downloadclient.test.$post(args, options))
    },
  })
}

export function usePostApiV3DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
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
  const mutationDefaults = getPostApiV3DownloadclientTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3DownloadclientTestallMutationKey() {
  return ['api', '/api/v3/downloadclient/testall', 'POST'] as const
}

export function getPostApiV3DownloadclientTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.downloadclient.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3DownloadclientTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>
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
  const mutationDefaults = getPostApiV3DownloadclientTestallMutationOptions<
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

export function getPostApiV3DownloadclientActionNameMutationKey() {
  return ['api', '/api/v3/downloadclient/action/:name', 'POST'] as const
}

export function getPostApiV3DownloadclientActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.downloadclient.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3DownloadclientActionName<
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
                Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV3DownloadclientActionNameMutationOptions<
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

export function getApiV3ConfigDownloadclientQueryKey() {
  return ['api', '/api/v3/config/downloadclient'] as const
}

export function getApiV3ConfigDownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigDownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigDownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigDownloadclientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>
  >,
) {
  return ['api', '/api/v3/config/downloadclient/:id', toValue(args)] as const
}

export function getApiV3ConfigDownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigDownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigDownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigDownloadclientIdMutationKey() {
  return ['api', '/api/v3/config/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3ConfigDownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigDownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigDownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigDownloadclientIdMutationOptions<
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

export function getApiV3EpisodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episode.$get>>,
) {
  return ['api', '/api/v3/episode', toValue(args)] as const
}

export function getApiV3EpisodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3EpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.episode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Episode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
          >,
          ReturnType<typeof getApiV3EpisodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3EpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.episode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3EpisodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>>,
) {
  return ['api', '/api/v3/episode/:id', toValue(args)] as const
}

export function getApiV3EpisodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3EpisodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.episode[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3EpisodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episode)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3EpisodeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3EpisodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.episode[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3EpisodeIdMutationKey() {
  return ['api', '/api/v3/episode/:id', 'PUT'] as const
}

export function getPutApiV3EpisodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>) {
      return parseResponse(client.api.v3.episode[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3EpisodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episode)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episode)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3EpisodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3EpisodeMonitorMutationKey() {
  return ['api', '/api/v3/episode/monitor', 'PUT'] as const
}

export function getPutApiV3EpisodeMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.monitor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episode.monitor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodeMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episode.monitor.$put>) {
      return parseResponse(client.api.v3.episode.monitor.$put(args, options))
    },
  })
}

export function usePutApiV3EpisodeMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episode.monitor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episode.monitor.$put>,
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
  const mutationDefaults = getPutApiV3EpisodeMonitorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3EpisodefileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episodefile.$get>>,
) {
  return ['api', '/api/v3/episodefile', toValue(args)] as const
}

export function getApiV3EpisodefileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episodefile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3EpisodefileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.episodefile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Episodefile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.episodefile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3EpisodefileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodefileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3EpisodefileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.episodefile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3EpisodefileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/episodefile/:id', toValue(args)] as const
}

export function getApiV3EpisodefileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3EpisodefileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.episodefile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3EpisodefileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.episodefile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3EpisodefileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3EpisodefileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3EpisodefileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.episodefile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3EpisodefileIdMutationKey() {
  return ['api', '/api/v3/episodefile/:id', 'PUT'] as const
}

export function getPutApiV3EpisodefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>) {
      return parseResponse(client.api.v3.episodefile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3EpisodefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episodefile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3EpisodefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3EpisodefileIdMutationKey() {
  return ['api', '/api/v3/episodefile/:id', 'DELETE'] as const
}

export function getDeleteApiV3EpisodefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3EpisodefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>) {
      return parseResponse(client.api.v3.episodefile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3EpisodefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.episodefile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.episodefile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3EpisodefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3EpisodefileEditorMutationKey() {
  return ['api', '/api/v3/episodefile/editor', 'PUT'] as const
}

export function getPutApiV3EpisodefileEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.editor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.editor.$put>) {
      return parseResponse(client.api.v3.episodefile.editor.$put(args, options))
    },
  })
}

export function usePutApiV3EpisodefileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.episodefile.editor.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.editor.$put>,
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
  const mutationDefaults = getPutApiV3EpisodefileEditorMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3EpisodefileBulkMutationKey() {
  return ['api', '/api/v3/episodefile/bulk', 'PUT'] as const
}

export function getPutApiV3EpisodefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3EpisodefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.bulk.$put>) {
      return parseResponse(client.api.v3.episodefile.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3EpisodefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.bulk.$put>,
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
  const mutationDefaults = getPutApiV3EpisodefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3EpisodefileBulkMutationKey() {
  return ['api', '/api/v3/episodefile/bulk', 'DELETE'] as const
}

export function getDeleteApiV3EpisodefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3EpisodefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>) {
      return parseResponse(client.api.v3.episodefile.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3EpisodefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.episodefile.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.episodefile.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3EpisodefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3FilesystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.$get>>,
) {
  return ['api', '/api/v3/filesystem', toValue(args)] as const
}

export function getApiV3FilesystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3FilesystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.filesystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>
            >
          >,
          ReturnType<typeof getApiV3FilesystemQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3FilesystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.filesystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3FilesystemTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.type.$get>>,
) {
  return ['api', '/api/v3/filesystem/type', toValue(args)] as const
}

export function getApiV3FilesystemTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.type.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3FilesystemTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.filesystem.type.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.type.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
            >
          >,
          ReturnType<typeof getApiV3FilesystemTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3FilesystemTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.filesystem.type.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3FilesystemMediafilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>>,
) {
  return ['api', '/api/v3/filesystem/mediafiles', toValue(args)] as const
}

export function getApiV3FilesystemMediafilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3FilesystemMediafilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.filesystem.mediafiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3FilesystemMediafilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.filesystem.mediafiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3HealthQueryKey() {
  return ['api', '/api/v3/health'] as const
}

export function getApiV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
          >,
          ReturnType<typeof getApiV3HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3HistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.$get>>,
) {
  return ['api', '/api/v3/history', toValue(args)] as const
}

export function getApiV3HistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3HistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
          >,
          ReturnType<typeof getApiV3HistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3HistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3HistorySinceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.since.$get>>,
) {
  return ['api', '/api/v3/history/since', toValue(args)] as const
}

export function getApiV3HistorySinceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.since.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3HistorySinceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.history.since.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.since.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>
            >
          >,
          ReturnType<typeof getApiV3HistorySinceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistorySinceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3HistorySinceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.history.since.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3HistorySeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.series.$get>>,
) {
  return ['api', '/api/v3/history/series', toValue(args)] as const
}

export function getApiV3HistorySeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3HistorySeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.history.series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3HistorySeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>
            >
          >,
          ReturnType<typeof getApiV3HistorySeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistorySeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3HistorySeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.history.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3HistoryFailedIdMutationKey() {
  return ['api', '/api/v3/history/failed/:id', 'POST'] as const
}

export function getPostApiV3HistoryFailedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3HistoryFailedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.history.failed[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3HistoryFailedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
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
  const mutationDefaults = getPostApiV3HistoryFailedIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigHostQueryKey() {
  return ['api', '/api/v3/config/host'] as const
}

export function getApiV3ConfigHostQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigHostQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigHostQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigHostQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.host.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigHostIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/host/:id', toValue(args)] as const
}

export function getApiV3ConfigHostIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigHostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.host[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigHostIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigHostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.host[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigHostIdMutationKey() {
  return ['api', '/api/v3/config/host/:id', 'PUT'] as const
}

export function getPutApiV3ConfigHostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigHostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.host[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigHostIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistQueryKey() {
  return ['api', '/api/v3/importlist'] as const
}

export function getApiV3ImportlistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ImportlistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ImportlistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ImportlistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ImportlistMutationKey() {
  return ['api', '/api/v3/importlist', 'POST'] as const
}

export function getPostApiV3ImportlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.$post>) {
      return parseResponse(client.api.v3.importlist.$post(args, options))
    },
  })
}

export function usePostApiV3Importlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.$post>,
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
  const mutationDefaults = getPostApiV3ImportlistMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>>,
) {
  return ['api', '/api/v3/importlist/:id', toValue(args)] as const
}

export function getApiV3ImportlistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ImportlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlist[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ImportlistIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ImportlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlist[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>) {
      return parseResponse(client.api.v3.importlist[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.importlist[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'PUT'] as const
}

export function getPutApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$put>) {
      return parseResponse(client.api.v3.importlist.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
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
  const mutationDefaults = getPutApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$delete>) {
      return parseResponse(client.api.v3.importlist.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistSchemaQueryKey() {
  return ['api', '/api/v3/importlist/schema'] as const
}

export function getApiV3ImportlistSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ImportlistSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlist.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ImportlistSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlist.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ImportlistTestMutationKey() {
  return ['api', '/api/v3/importlist/test', 'POST'] as const
}

export function getPostApiV3ImportlistTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.test.$post>) {
      return parseResponse(client.api.v3.importlist.test.$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.test.$post>,
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
  const mutationDefaults = getPostApiV3ImportlistTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ImportlistTestallMutationKey() {
  return ['api', '/api/v3/importlist/testall', 'POST'] as const
}

export function getPostApiV3ImportlistTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.importlist.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3ImportlistTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>
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
  const mutationDefaults = getPostApiV3ImportlistTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ImportlistActionNameMutationKey() {
  return ['api', '/api/v3/importlist/action/:name', 'POST'] as const
}

export function getPostApiV3ImportlistActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.importlist.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV3ImportlistActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigImportlistQueryKey() {
  return ['api', '/api/v3/config/importlist'] as const
}

export function getApiV3ConfigImportlistQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigImportlistQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigImportlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigImportlistQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigImportlistQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.importlist.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigImportlistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/importlist/:id', toValue(args)] as const
}

export function getApiV3ConfigImportlistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigImportlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.importlist[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigImportlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.importlist[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigImportlistIdMutationKey() {
  return ['api', '/api/v3/config/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ConfigImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigImportlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.importlist[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistexclusionQueryKey() {
  return ['api', '/api/v3/importlistexclusion'] as const
}

export function getApiV3ImportlistexclusionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ImportlistexclusionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlistexclusion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Importlistexclusion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3ImportlistexclusionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ImportlistexclusionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlistexclusion.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ImportlistexclusionMutationKey() {
  return ['api', '/api/v3/importlistexclusion', 'POST'] as const
}

export function getPostApiV3ImportlistexclusionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlistexclusion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistexclusionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlistexclusion.$post>) {
      return parseResponse(client.api.v3.importlistexclusion.$post(args, options))
    },
  })
}

export function usePostApiV3Importlistexclusion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlistexclusion.$post>,
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
  const mutationDefaults = getPostApiV3ImportlistexclusionMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistexclusionPagedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>>,
) {
  return ['api', '/api/v3/importlistexclusion/paged', toValue(args)] as const
}

export function getApiV3ImportlistexclusionPagedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ImportlistexclusionPagedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlistexclusion.paged.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ImportlistexclusionPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlistexclusion.paged.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3ImportlistexclusionPagedQueryKey>
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
          Awaited<ReturnType<typeof client.api.v3.importlistexclusion.paged.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionPagedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ImportlistexclusionPagedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlistexclusion.paged.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ImportlistexclusionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>
  >,
) {
  return ['api', '/api/v3/importlistexclusion/:id', toValue(args)] as const
}

export function getApiV3ImportlistexclusionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ImportlistexclusionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlistexclusion[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ImportlistexclusionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ImportlistexclusionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistexclusionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ImportlistexclusionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlistexclusion[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v3/importlistexclusion/:id', 'PUT'] as const
}

export function getPutApiV3ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ImportlistexclusionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ImportlistexclusionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ImportlistexclusionIdMutationKey() {
  return ['api', '/api/v3/importlistexclusion/:id', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistexclusionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistexclusionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistexclusionId<
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
                Awaited<ReturnType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.importlistexclusion)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3ImportlistexclusionIdMutationOptions<
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

export function getDeleteApiV3ImportlistexclusionBulkMutationKey() {
  return ['api', '/api/v3/importlistexclusion/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistexclusionBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.importlistexclusion.bulk.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistexclusionBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
    ) {
      return parseResponse(client.api.v3.importlistexclusion.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistexclusionBulk<
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
                Awaited<ReturnType<typeof client.api.v3.importlistexclusion.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlistexclusion.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3ImportlistexclusionBulkMutationOptions<
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

export function getApiV3IndexerQueryKey() {
  return ['api', '/api/v3/indexer'] as const
}

export function getApiV3IndexerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3IndexerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
          >,
          ReturnType<typeof getApiV3IndexerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3IndexerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.indexer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3IndexerMutationKey() {
  return ['api', '/api/v3/indexer', 'POST'] as const
}

export function getPostApiV3IndexerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.$post>) {
      return parseResponse(client.api.v3.indexer.$post(args, options))
    },
  })
}

export function usePostApiV3Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.$post>,
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
  const mutationDefaults = getPostApiV3IndexerMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>>,
) {
  return ['api', '/api/v3/indexer/:id', toValue(args)] as const
}

export function getApiV3IndexerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3IndexerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.indexer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3IndexerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3IndexerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.indexer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'PUT'] as const
}

export function getPutApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.indexer[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'DELETE'] as const
}

export function getDeleteApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>) {
      return parseResponse(client.api.v3.indexer[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'PUT'] as const
}

export function getPutApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$put>) {
      return parseResponse(client.api.v3.indexer.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
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
  const mutationDefaults = getPutApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'DELETE'] as const
}

export function getDeleteApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$delete>) {
      return parseResponse(client.api.v3.indexer.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerSchemaQueryKey() {
  return ['api', '/api/v3/indexer/schema'] as const
}

export function getApiV3IndexerSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3IndexerSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV3IndexerSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3IndexerSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.indexer.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3IndexerTestMutationKey() {
  return ['api', '/api/v3/indexer/test', 'POST'] as const
}

export function getPostApiV3IndexerTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.test.$post>) {
      return parseResponse(client.api.v3.indexer.test.$post(args, options))
    },
  })
}

export function usePostApiV3IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.indexer.test.$post>,
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
  const mutationDefaults = getPostApiV3IndexerTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3IndexerTestallMutationKey() {
  return ['api', '/api/v3/indexer/testall', 'POST'] as const
}

export function getPostApiV3IndexerTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.indexer.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
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
  const mutationDefaults = getPostApiV3IndexerTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3IndexerActionNameMutationKey() {
  return ['api', '/api/v3/indexer/action/:name', 'POST'] as const
}

export function getPostApiV3IndexerActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.indexer.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV3IndexerActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigIndexerQueryKey() {
  return ['api', '/api/v3/config/indexer'] as const
}

export function getApiV3ConfigIndexerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigIndexerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.indexer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigIndexerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigIndexerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.indexer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigIndexerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/indexer/:id', toValue(args)] as const
}

export function getApiV3ConfigIndexerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigIndexerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.indexer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigIndexerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.indexer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigIndexerIdMutationKey() {
  return ['api', '/api/v3/config/indexer/:id', 'PUT'] as const
}

export function getPutApiV3ConfigIndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigIndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.indexer[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigIndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigIndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerflagQueryKey() {
  return ['api', '/api/v3/indexerflag'] as const
}

export function getApiV3IndexerflagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3IndexerflagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.indexerflag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>
            >
          >,
          ReturnType<typeof getApiV3IndexerflagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerflagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3IndexerflagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.indexerflag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LanguageQueryKey() {
  return ['api', '/api/v3/language'] as const
}

export function getApiV3LanguageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LanguageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.language.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>
            >
          >,
          ReturnType<typeof getApiV3LanguageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LanguageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.language.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LanguageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.language)[':id']['$get']>>,
) {
  return ['api', '/api/v3/language/:id', toValue(args)] as const
}

export function getApiV3LanguageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.language)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LanguageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.language[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.language)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3LanguageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LanguageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.language[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LanguageprofileQueryKey() {
  return ['api', '/api/v3/languageprofile'] as const
}

export function getApiV3LanguageprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LanguageprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.languageprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Languageprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3LanguageprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LanguageprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.languageprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3LanguageprofileMutationKey() {
  return ['api', '/api/v3/languageprofile', 'POST'] as const
}

export function getPostApiV3LanguageprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.languageprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3LanguageprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.languageprofile.$post>) {
      return parseResponse(client.api.v3.languageprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Languageprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.languageprofile.$post>,
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
  const mutationDefaults = getPostApiV3LanguageprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3LanguageprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/languageprofile/:id', toValue(args)] as const
}

export function getApiV3LanguageprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LanguageprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.languageprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LanguageprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3LanguageprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LanguageprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.languageprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3LanguageprofileIdMutationKey() {
  return ['api', '/api/v3/languageprofile/:id', 'PUT'] as const
}

export function getPutApiV3LanguageprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3LanguageprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.languageprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3LanguageprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3LanguageprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3LanguageprofileIdMutationKey() {
  return ['api', '/api/v3/languageprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3LanguageprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3LanguageprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.languageprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3LanguageprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.languageprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.languageprofile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3LanguageprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3LanguageprofileSchemaQueryKey() {
  return ['api', '/api/v3/languageprofile/schema'] as const
}

export function getApiV3LanguageprofileSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LanguageprofileSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.languageprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LanguageprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3LanguageprofileSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.languageprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageprofileSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LanguageprofileSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.languageprofile.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LocalizationQueryKey() {
  return ['api', '/api/v3/localization'] as const
}

export function getApiV3LocalizationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LocalizationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>
            >
          >,
          ReturnType<typeof getApiV3LocalizationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LocalizationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.localization.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LocalizationLanguageQueryKey() {
  return ['api', '/api/v3/localization/language'] as const
}

export function getApiV3LocalizationLanguageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LocalizationLanguageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.localization.language.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LocalizationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LocalizationLanguageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.localization.language.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LocalizationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>>,
) {
  return ['api', '/api/v3/localization/:id', toValue(args)] as const
}

export function getApiV3LocalizationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LocalizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.localization[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LocalizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.localization)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3LocalizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.localization)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LocalizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.localization[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.log.$get>>,
) {
  return ['api', '/api/v3/log', toValue(args)] as const
}

export function getApiV3LogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.log.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
          >,
          ReturnType<typeof getApiV3LogQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3LogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LogFileQueryKey() {
  return ['api', '/api/v3/log/file'] as const
}

export function getApiV3LogFileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LogFileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>
            >
          >,
          ReturnType<typeof getApiV3LogFileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LogFileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.log.file.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LogFileFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>>,
) {
  return ['api', '/api/v3/log/file/:filename', toValue(args)] as const
}

export function getApiV3LogFileFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LogFileFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.log.file[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3LogFileFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LogFileFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.log.file[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ManualimportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.manualimport.$get>>,
) {
  return ['api', '/api/v3/manualimport', toValue(args)] as const
}

export function getApiV3ManualimportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.manualimport.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ManualimportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.manualimport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.manualimport.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ManualimportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ManualimportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ManualimportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.manualimport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ManualimportMutationKey() {
  return ['api', '/api/v3/manualimport', 'POST'] as const
}

export function getPostApiV3ManualimportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.manualimport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ManualimportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.manualimport.$post>) {
      return parseResponse(client.api.v3.manualimport.$post(args, options))
    },
  })
}

export function usePostApiV3Manualimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.manualimport.$post>,
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
  const mutationDefaults = getPostApiV3ManualimportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MediacoverSeriesIdFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
  >,
) {
  return ['api', '/api/v3/mediacover/:seriesId/:filename', toValue(args)] as const
}

export function getApiV3MediacoverSeriesIdFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MediacoverSeriesIdFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.mediacover[':seriesId'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MediacoverSeriesIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
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
                  ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV3MediacoverSeriesIdFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.mediacover)[':seriesId'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MediacoverSeriesIdFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MediacoverSeriesIdFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.mediacover[':seriesId'][':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigMediamanagementQueryKey() {
  return ['api', '/api/v3/config/mediamanagement'] as const
}

export function getApiV3ConfigMediamanagementQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigMediamanagementQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.mediamanagement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigMediamanagementQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.mediamanagement.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigMediamanagementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>
  >,
) {
  return ['api', '/api/v3/config/mediamanagement/:id', toValue(args)] as const
}

export function getApiV3ConfigMediamanagementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigMediamanagementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.mediamanagement[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigMediamanagementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.mediamanagement[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigMediamanagementIdMutationKey() {
  return ['api', '/api/v3/config/mediamanagement/:id', 'PUT'] as const
}

export function getPutApiV3ConfigMediamanagementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigMediamanagementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.mediamanagement[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigMediamanagementId<
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
                Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigMediamanagementIdMutationOptions<
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

export function getApiV3MetadataQueryKey() {
  return ['api', '/api/v3/metadata'] as const
}

export function getApiV3MetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3MetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MetadataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3MetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3MetadataMutationKey() {
  return ['api', '/api/v3/metadata', 'POST'] as const
}

export function getPostApiV3MetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.$post>) {
      return parseResponse(client.api.v3.metadata.$post(args, options))
    },
  })
}

export function usePostApiV3Metadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.metadata.$post>,
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
  const mutationDefaults = getPostApiV3MetadataMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MetadataIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>>,
) {
  return ['api', '/api/v3/metadata/:id', toValue(args)] as const
}

export function getApiV3MetadataIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MetadataIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.metadata[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3MetadataIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MetadataIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.metadata[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'PUT'] as const
}

export function getPutApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>) {
      return parseResponse(client.api.v3.metadata[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'DELETE'] as const
}

export function getDeleteApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>) {
      return parseResponse(client.api.v3.metadata[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MetadataSchemaQueryKey() {
  return ['api', '/api/v3/metadata/schema'] as const
}

export function getApiV3MetadataSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3MetadataSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.metadata.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MetadataSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3MetadataSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.metadata.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3MetadataTestMutationKey() {
  return ['api', '/api/v3/metadata/test', 'POST'] as const
}

export function getPostApiV3MetadataTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.metadata.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.test.$post>) {
      return parseResponse(client.api.v3.metadata.test.$post(args, options))
    },
  })
}

export function usePostApiV3MetadataTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.metadata.test.$post>,
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
  const mutationDefaults = getPostApiV3MetadataTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3MetadataTestallMutationKey() {
  return ['api', '/api/v3/metadata/testall', 'POST'] as const
}

export function getPostApiV3MetadataTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.metadata.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3MetadataTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
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
  const mutationDefaults = getPostApiV3MetadataTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3MetadataActionNameMutationKey() {
  return ['api', '/api/v3/metadata/action/:name', 'POST'] as const
}

export function getPostApiV3MetadataActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.metadata.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3MetadataActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV3MetadataActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3WantedMissingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.missing.$get>>,
) {
  return ['api', '/api/v3/wanted/missing', toValue(args)] as const
}

export function getApiV3WantedMissingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.missing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3WantedMissingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.wanted.missing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.wanted.missing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
            >
          >,
          ReturnType<typeof getApiV3WantedMissingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedMissingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3WantedMissingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.wanted.missing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3WantedMissingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>,
) {
  return ['api', '/api/v3/wanted/missing/:id', toValue(args)] as const
}

export function getApiV3WantedMissingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3WantedMissingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.wanted.missing[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3WantedMissingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3WantedMissingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.wanted.missing)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedMissingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3WantedMissingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.wanted.missing[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigNamingQueryKey() {
  return ['api', '/api/v3/config/naming'] as const
}

export function getApiV3ConfigNamingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigNamingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.naming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigNamingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigNamingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.naming.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigNamingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/naming/:id', toValue(args)] as const
}

export function getApiV3ConfigNamingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigNamingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.naming[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigNamingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.naming[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigNamingIdMutationKey() {
  return ['api', '/api/v3/config/naming/:id', 'PUT'] as const
}

export function getPutApiV3ConfigNamingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigNamingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.naming[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigNamingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigNamingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigNamingExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.naming.examples.$get>>,
) {
  return ['api', '/api/v3/config/naming/examples', toValue(args)] as const
}

export function getApiV3ConfigNamingExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.naming.examples.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigNamingExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.naming.examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.naming.examples.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigNamingExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.naming.examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3NotificationQueryKey() {
  return ['api', '/api/v3/notification'] as const
}

export function getApiV3NotificationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3NotificationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>
            >
          >,
          ReturnType<typeof getApiV3NotificationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3NotificationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.notification.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3NotificationMutationKey() {
  return ['api', '/api/v3/notification', 'POST'] as const
}

export function getPostApiV3NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.$post>) {
      return parseResponse(client.api.v3.notification.$post(args, options))
    },
  })
}

export function usePostApiV3Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.notification.$post>,
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
  const mutationDefaults = getPostApiV3NotificationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3NotificationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>>,
) {
  return ['api', '/api/v3/notification/:id', toValue(args)] as const
}

export function getApiV3NotificationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NotificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.notification[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3NotificationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NotificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.notification[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'PUT'] as const
}

export function getPutApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3NotificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>) {
      return parseResponse(client.api.v3.notification[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'DELETE'] as const
}

export function getDeleteApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3NotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.notification[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3NotificationSchemaQueryKey() {
  return ['api', '/api/v3/notification/schema'] as const
}

export function getApiV3NotificationSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3NotificationSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3NotificationSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3NotificationSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.notification.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3NotificationTestMutationKey() {
  return ['api', '/api/v3/notification/test', 'POST'] as const
}

export function getPostApiV3NotificationTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.notification.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.test.$post>) {
      return parseResponse(client.api.v3.notification.test.$post(args, options))
    },
  })
}

export function usePostApiV3NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.notification.test.$post>,
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
  const mutationDefaults = getPostApiV3NotificationTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3NotificationTestallMutationKey() {
  return ['api', '/api/v3/notification/testall', 'POST'] as const
}

export function getPostApiV3NotificationTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.notification.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3NotificationTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>
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
  const mutationDefaults = getPostApiV3NotificationTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3NotificationActionNameMutationKey() {
  return ['api', '/api/v3/notification/action/:name', 'POST'] as const
}

export function getPostApiV3NotificationActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.notification.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3NotificationActionName<
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
                Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
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
  const mutationDefaults = getPostApiV3NotificationActionNameMutationOptions<
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

export function getApiV3ParseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.parse.$get>>,
) {
  return ['api', '/api/v3/parse', toValue(args)] as const
}

export function getApiV3ParseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.parse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ParseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.parse.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.parse.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
          >,
          ReturnType<typeof getApiV3ParseQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ParseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ParseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.parse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          ReturnType<typeof getPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadPingMutationKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function getHeadPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.ping.$head(undefined, options))
    },
  })
}

export function useHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
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
  const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3QualitydefinitionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>,
) {
  return ['api', '/api/v3/qualitydefinition/:id', toValue(args)] as const
}

export function getApiV3QualitydefinitionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3QualitydefinitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualitydefinition[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3QualitydefinitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualitydefinition[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3QualitydefinitionIdMutationKey() {
  return ['api', '/api/v3/qualitydefinition/:id', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.qualitydefinition[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3QualitydefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3QualitydefinitionIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualitydefinitionQueryKey() {
  return ['api', '/api/v3/qualitydefinition'] as const
}

export function getApiV3QualitydefinitionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3QualitydefinitionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualitydefinition.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
            >
          >,
          ReturnType<typeof getApiV3QualitydefinitionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3QualitydefinitionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualitydefinition.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3QualitydefinitionUpdateMutationKey() {
  return ['api', '/api/v3/qualitydefinition/update', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>) {
      return parseResponse(client.api.v3.qualitydefinition.update.$put(args, options))
    },
  })
}

export function usePutApiV3QualitydefinitionUpdate<
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
                Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
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
  const mutationDefaults = getPutApiV3QualitydefinitionUpdateMutationOptions<
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

export function getApiV3QualitydefinitionLimitsQueryKey() {
  return ['api', '/api/v3/qualitydefinition/limits'] as const
}

export function getApiV3QualitydefinitionLimitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3QualitydefinitionLimitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualitydefinition.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QualitydefinitionLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
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
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3QualitydefinitionLimitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualitydefinition.limits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3QualityprofileQueryKey() {
  return ['api', '/api/v3/qualityprofile'] as const
}

export function getApiV3QualityprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3QualityprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualityprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3QualityprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3QualityprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualityprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3QualityprofileMutationKey() {
  return ['api', '/api/v3/qualityprofile', 'POST'] as const
}

export function getPostApiV3QualityprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualityprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QualityprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualityprofile.$post>) {
      return parseResponse(client.api.v3.qualityprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Qualityprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.qualityprofile.$post>,
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
  const mutationDefaults = getPostApiV3QualityprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualityprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/qualityprofile/:id', toValue(args)] as const
}

export function getApiV3QualityprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3QualityprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualityprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3QualityprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3QualityprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualityprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'PUT'] as const
}

export function getPutApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualityprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QualityprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualityprofileSchemaQueryKey() {
  return ['api', '/api/v3/qualityprofile/schema'] as const
}

export function getApiV3QualityprofileSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3QualityprofileSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.qualityprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3QualityprofileSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.qualityprofile.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3QueueIdMutationKey() {
  return ['api', '/api/v3/queue/:id', 'DELETE'] as const
}

export function getDeleteApiV3QueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>) {
      return parseResponse(client.api.v3.queue[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3QueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3QueueIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3QueueBulkMutationKey() {
  return ['api', '/api/v3/queue/bulk', 'DELETE'] as const
}

export function getDeleteApiV3QueueBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.bulk.$delete>) {
      return parseResponse(client.api.v3.queue.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3QueueBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3QueueBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QueueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.$get>>,
) {
  return ['api', '/api/v3/queue', toValue(args)] as const
}

export function getApiV3QueueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3QueueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.queue.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
          >,
          ReturnType<typeof getApiV3QueueQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3QueueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.queue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3QueueGrabIdMutationKey() {
  return ['api', '/api/v3/queue/grab/:id', 'POST'] as const
}

export function getPostApiV3QueueGrabIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>) {
      return parseResponse(client.api.v3.queue.grab[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3QueueGrabId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
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
  const mutationDefaults = getPostApiV3QueueGrabIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3QueueGrabBulkMutationKey() {
  return ['api', '/api/v3/queue/grab/bulk', 'POST'] as const
}

export function getPostApiV3QueueGrabBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>) {
      return parseResponse(client.api.v3.queue.grab.bulk.$post(args, options))
    },
  })
}

export function usePostApiV3QueueGrabBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
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
  const mutationDefaults = getPostApiV3QueueGrabBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QueueDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.details.$get>>,
) {
  return ['api', '/api/v3/queue/details', toValue(args)] as const
}

export function getApiV3QueueDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3QueueDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.queue.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.queue.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>
            >
          >,
          ReturnType<typeof getApiV3QueueDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3QueueDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.queue.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3QueueStatusQueryKey() {
  return ['api', '/api/v3/queue/status'] as const
}

export function getApiV3QueueStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3QueueStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.queue.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV3QueueStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3QueueStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.queue.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ReleaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.release.$get>>,
) {
  return ['api', '/api/v3/release', toValue(args)] as const
}

export function getApiV3ReleaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.release.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ReleaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.release.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.release.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
          >,
          ReturnType<typeof getApiV3ReleaseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ReleaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.release.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ReleaseMutationKey() {
  return ['api', '/api/v3/release', 'POST'] as const
}

export function getPostApiV3ReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.$post>) {
      return parseResponse(client.api.v3.release.$post(args, options))
    },
  })
}

export function usePostApiV3Release<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.release.$post>,
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
  const mutationDefaults = getPostApiV3ReleaseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ReleaseprofileQueryKey() {
  return ['api', '/api/v3/releaseprofile'] as const
}

export function getApiV3ReleaseprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ReleaseprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.releaseprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ReleaseprofileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ReleaseprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.releaseprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ReleaseprofileMutationKey() {
  return ['api', '/api/v3/releaseprofile', 'POST'] as const
}

export function getPostApiV3ReleaseprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.releaseprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.releaseprofile.$post>) {
      return parseResponse(client.api.v3.releaseprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Releaseprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.releaseprofile.$post>,
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
  const mutationDefaults = getPostApiV3ReleaseprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ReleaseprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/releaseprofile/:id', toValue(args)] as const
}

export function getApiV3ReleaseprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ReleaseprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.releaseprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ReleaseprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.releaseprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'PUT'] as const
}

export function getPutApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ReleasePushMutationKey() {
  return ['api', '/api/v3/release/push', 'POST'] as const
}

export function getPostApiV3ReleasePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleasePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.push.$post>) {
      return parseResponse(client.api.v3.release.push.$post(args, options))
    },
  })
}

export function usePostApiV3ReleasePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.release.push.$post>,
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
  const mutationDefaults = getPostApiV3ReleasePushMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RemotepathmappingQueryKey() {
  return ['api', '/api/v3/remotepathmapping'] as const
}

export function getApiV3RemotepathmappingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3RemotepathmappingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.remotepathmapping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
            >
          >,
          ReturnType<typeof getApiV3RemotepathmappingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3RemotepathmappingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.remotepathmapping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3RemotepathmappingMutationKey() {
  return ['api', '/api/v3/remotepathmapping', 'POST'] as const
}

export function getPostApiV3RemotepathmappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RemotepathmappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.remotepathmapping.$post>) {
      return parseResponse(client.api.v3.remotepathmapping.$post(args, options))
    },
  })
}

export function usePostApiV3Remotepathmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
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
  const mutationDefaults = getPostApiV3RemotepathmappingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RemotepathmappingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>,
) {
  return ['api', '/api/v3/remotepathmapping/:id', toValue(args)] as const
}

export function getApiV3RemotepathmappingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3RemotepathmappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.remotepathmapping[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3RemotepathmappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.remotepathmapping[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'PUT'] as const
}

export function getPutApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3RemotepathmappingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'DELETE'] as const
}

export function getDeleteApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3RemotepathmappingIdMutationOptions<
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

export function getApiV3RenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.$get>>,
) {
  return ['api', '/api/v3/rename', toValue(args)] as const
}

export function getApiV3RenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3RenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.rename.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
          >,
          ReturnType<typeof getApiV3RenameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3RenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.rename.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3RenameBulkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.bulk.$get>>,
) {
  return ['api', '/api/v3/rename/bulk', toValue(args)] as const
}

export function getApiV3RenameBulkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.bulk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3RenameBulkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.rename.bulk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3RenameBulk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.rename.bulk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>
            >
          >,
          ReturnType<typeof getApiV3RenameBulkQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.bulk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RenameBulkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3RenameBulkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.rename.bulk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3RootfolderQueryKey() {
  return ['api', '/api/v3/rootfolder'] as const
}

export function getApiV3RootfolderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3RootfolderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.rootfolder.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>
            >
          >,
          ReturnType<typeof getApiV3RootfolderQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3RootfolderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.rootfolder.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3RootfolderMutationKey() {
  return ['api', '/api/v3/rootfolder', 'POST'] as const
}

export function getPostApiV3RootfolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.rootfolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RootfolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.rootfolder.$post>) {
      return parseResponse(client.api.v3.rootfolder.$post(args, options))
    },
  })
}

export function usePostApiV3Rootfolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.rootfolder.$post>,
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
  const mutationDefaults = getPostApiV3RootfolderMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RootfolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>>,
) {
  return ['api', '/api/v3/rootfolder/:id', toValue(args)] as const
}

export function getApiV3RootfolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3RootfolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.rootfolder[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3RootfolderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3RootfolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.rootfolder[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3RootfolderIdMutationKey() {
  return ['api', '/api/v3/rootfolder/:id', 'DELETE'] as const
}

export function getDeleteApiV3RootfolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RootfolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>) {
      return parseResponse(client.api.v3.rootfolder[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3RootfolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SeasonpassMutationKey() {
  return ['api', '/api/v3/seasonpass', 'POST'] as const
}

export function getPostApiV3SeasonpassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.seasonpass.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.seasonpass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeasonpassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.seasonpass.$post>) {
      return parseResponse(client.api.v3.seasonpass.$post(args, options))
    },
  })
}

export function usePostApiV3Seasonpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.seasonpass.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.seasonpass.$post>,
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
  const mutationDefaults = getPostApiV3SeasonpassMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3SeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.$get>>,
) {
  return ['api', '/api/v3/series', toValue(args)] as const
}

export function getApiV3SeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Series<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
          >,
          ReturnType<typeof getApiV3SeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3SeriesMutationKey() {
  return ['api', '/api/v3/series', 'POST'] as const
}

export function getPostApiV3SeriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.$post>) {
      return parseResponse(client.api.v3.series.$post(args, options))
    },
  })
}

export function usePostApiV3Series<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.$post>,
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
  const mutationDefaults = getPostApiV3SeriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3SeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['$get']>>,
) {
  return ['api', '/api/v3/series/:id', toValue(args)] as const
}

export function getApiV3SeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.series[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3SeriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.series[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3SeriesIdMutationKey() {
  return ['api', '/api/v3/series/:id', 'PUT'] as const
}

export function getPutApiV3SeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.series)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.series)[':id']['$put']>) {
      return parseResponse(client.api.v3.series[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3SeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.series)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3SeriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3SeriesIdMutationKey() {
  return ['api', '/api/v3/series/:id', 'DELETE'] as const
}

export function getDeleteApiV3SeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SeriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>) {
      return parseResponse(client.api.v3.series[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3SeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.series)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3SeriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3SeriesEditorMutationKey() {
  return ['api', '/api/v3/series/editor', 'PUT'] as const
}

export function getPutApiV3SeriesEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SeriesEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.editor.$put>) {
      return parseResponse(client.api.v3.series.editor.$put(args, options))
    },
  })
}

export function usePutApiV3SeriesEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.editor.$put>,
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
  const mutationDefaults = getPutApiV3SeriesEditorMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3SeriesEditorMutationKey() {
  return ['api', '/api/v3/series/editor', 'DELETE'] as const
}

export function getDeleteApiV3SeriesEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.editor.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SeriesEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.editor.$delete>) {
      return parseResponse(client.api.v3.series.editor.$delete(args, options))
    },
  })
}

export function useDeleteApiV3SeriesEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.editor.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.editor.$delete>,
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
  const mutationDefaults = getDeleteApiV3SeriesEditorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3SeriesIdFolderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>>,
) {
  return ['api', '/api/v3/series/:id/folder', toValue(args)] as const
}

export function getApiV3SeriesIdFolderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SeriesIdFolderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.series[':id'].folder.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SeriesIdFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.series)[':id']['folder']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3SeriesIdFolderQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.series)[':id']['folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesIdFolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SeriesIdFolderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.series[':id'].folder.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3SeriesImportMutationKey() {
  return ['api', '/api/v3/series/import', 'POST'] as const
}

export function getPostApiV3SeriesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.series.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SeriesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.series.import.$post>) {
      return parseResponse(client.api.v3.series.import.$post(args, options))
    },
  })
}

export function usePostApiV3SeriesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.series.import.$post>,
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
  const mutationDefaults = getPostApiV3SeriesImportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3SeriesLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.lookup.$get>>,
) {
  return ['api', '/api/v3/series/lookup', toValue(args)] as const
}

export function getApiV3SeriesLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SeriesLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.series.lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SeriesLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.series.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SeriesLookupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.series.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SeriesLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SeriesLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.series.lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoggedoutQueryKey() {
  return ['loggedout', '/loggedout'] as const
}

export function getLoggedoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLoggedoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loggedout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLoggedout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
          >,
          ReturnType<typeof getLoggedoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggedoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLoggedoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.loggedout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
) {
  return ['content', '/content/:path', toValue(args)] as const
}

export function getContentPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
            >
          >,
          ReturnType<typeof getContentPathQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
) {
  return [':path', '/:path', toValue(args)] as const
}

export function getPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':path'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          ReturnType<typeof getPathQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemStatusQueryKey() {
  return ['api', '/api/v3/system/status'] as const
}

export function getApiV3SystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3SystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SystemStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3SystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemRoutesQueryKey() {
  return ['api', '/api/v3/system/routes'] as const
}

export function getApiV3SystemRoutesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3SystemRoutesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SystemRoutesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3SystemRoutesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.routes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v3/system/routes/duplicate'] as const
}

export function getApiV3SystemRoutesDuplicateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
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
                Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3SystemRoutesDuplicateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.routes.duplicate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3SystemShutdownMutationKey() {
  return ['api', '/api/v3/system/shutdown', 'POST'] as const
}

export function getPostApiV3SystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.shutdown.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
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
  const mutationDefaults = getPostApiV3SystemShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SystemRestartMutationKey() {
  return ['api', '/api/v3/system/restart', 'POST'] as const
}

export function getPostApiV3SystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.restart.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
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
  const mutationDefaults = getPostApiV3SystemRestartMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3TagQueryKey() {
  return ['api', '/api/v3/tag'] as const
}

export function getApiV3TagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3TagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
          >,
          ReturnType<typeof getApiV3TagQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3TagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3TagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.tag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3TagMutationKey() {
  return ['api', '/api/v3/tag', 'POST'] as const
}

export function getPostApiV3TagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v3.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3TagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.tag.$post>) {
      return parseResponse(client.api.v3.tag.$post(args, options))
    },
  })
}

export function usePostApiV3Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.tag.$post>,
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
  const mutationDefaults = getPostApiV3TagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3TagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>>,
) {
  return ['api', '/api/v3/tag/:id', toValue(args)] as const
}

export function getApiV3TagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.tag[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV3TagIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.tag[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'PUT'] as const
}

export function getPutApiV3TagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>) {
      return parseResponse(client.api.v3.tag[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'DELETE'] as const
}

export function getDeleteApiV3TagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>) {
      return parseResponse(client.api.v3.tag[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3TagIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3TagDetailQueryKey() {
  return ['api', '/api/v3/tag/detail'] as const
}

export function getApiV3TagDetailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3TagDetailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>
            >
          >,
          ReturnType<typeof getApiV3TagDetailQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3TagDetailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.tag.detail.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3TagDetailIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>>,
) {
  return ['api', '/api/v3/tag/detail/:id', toValue(args)] as const
}

export function getApiV3TagDetailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3TagDetailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.tag.detail[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3TagDetailIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3TagDetailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.tag.detail[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemTaskQueryKey() {
  return ['api', '/api/v3/system/task'] as const
}

export function getApiV3SystemTaskQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3SystemTaskQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SystemTaskQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3SystemTaskQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.task.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3SystemTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>>,
) {
  return ['api', '/api/v3/system/task/:id', toValue(args)] as const
}

export function getApiV3SystemTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SystemTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.system.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3SystemTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SystemTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.system.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigUiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/ui/:id', toValue(args)] as const
}

export function getApiV3ConfigUiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigUiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.ui[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigUiIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigUiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.ui[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigUiIdMutationKey() {
  return ['api', '/api/v3/config/ui/:id', 'PUT'] as const
}

export function getPutApiV3ConfigUiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigUiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.ui[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigUiIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigUiQueryKey() {
  return ['api', '/api/v3/config/ui'] as const
}

export function getApiV3ConfigUiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigUiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigUiQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigUiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.ui.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3UpdateQueryKey() {
  return ['api', '/api/v3/update'] as const
}

export function getApiV3UpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3UpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
          >,
          ReturnType<typeof getApiV3UpdateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3UpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LogFileUpdateQueryKey() {
  return ['api', '/api/v3/log/file/update'] as const
}

export function getApiV3LogFileUpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3LogFileUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
            >
          >,
          ReturnType<typeof getApiV3LogFileUpdateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3LogFileUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.log.file.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3LogFileUpdateFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>
  >,
) {
  return ['api', '/api/v3/log/file/update/:filename', toValue(args)] as const
}

export function getApiV3LogFileUpdateFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3LogFileUpdateFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.log.file.update[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3LogFileUpdateFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.log.file.update[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
