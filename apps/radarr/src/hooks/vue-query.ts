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

export function getPathKey() {
  return ['{path}'] as const
}

export function getApiV3AlttitleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alttitle.$get>>,
) {
  return ['api', '/api/v3/alttitle', toValue(args)] as const
}

export function getApiV3AlttitleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alttitle.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AlttitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.alttitle.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Alttitle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alttitle.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AlttitleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlttitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AlttitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.alttitle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AlttitleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>>,
) {
  return ['api', '/api/v3/alttitle/:id', toValue(args)] as const
}

export function getApiV3AlttitleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AlttitleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.alttitle[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AlttitleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3AlttitleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlttitleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AlttitleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.alttitle[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function getApiV3BlocklistMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.movie.$get>>,
) {
  return ['api', '/api/v3/blocklist/movie', toValue(args)] as const
}

export function getApiV3BlocklistMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3BlocklistMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.blocklist.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3BlocklistMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.blocklist.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
            >
          >,
          ReturnType<typeof getApiV3BlocklistMovieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BlocklistMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3BlocklistMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.blocklist.movie.$get(toValue(args), {
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

export function getFeedV3CalendarRadarrIcsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>,
) {
  return ['feed', '/feed/v3/calendar/radarr.ics', toValue(args)] as const
}

export function getFeedV3CalendarRadarrIcsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedV3CalendarRadarrIcsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.v3.calendar['radarr.ics'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedV3CalendarRadarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedV3CalendarRadarrIcsQueryKey>
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
          Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV3CalendarRadarrIcsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedV3CalendarRadarrIcsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.v3.calendar['radarr.ics'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3CollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.collection.$get>>,
) {
  return ['api', '/api/v3/collection', toValue(args)] as const
}

export function getApiV3CollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.collection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Collection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.collection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>
            >
          >,
          ReturnType<typeof getApiV3CollectionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3CollectionMutationKey() {
  return ['api', '/api/v3/collection', 'PUT'] as const
}

export function getPutApiV3CollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.collection.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.collection.$put>) {
      return parseResponse(client.api.v3.collection.$put(args, options))
    },
  })
}

export function usePutApiV3Collection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.collection.$put>,
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
  const mutationDefaults = getPutApiV3CollectionMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CollectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>>,
) {
  return ['api', '/api/v3/collection/:id', toValue(args)] as const
}

export function getApiV3CollectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.collection[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CollectionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.collection[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3CollectionIdMutationKey() {
  return ['api', '/api/v3/collection/:id', 'PUT'] as const
}

export function getPutApiV3CollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CollectionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>) {
      return parseResponse(client.api.v3.collection[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3CollectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CreditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.credit.$get>>,
) {
  return ['api', '/api/v3/credit', toValue(args)] as const
}

export function getApiV3CreditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.credit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CreditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.credit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Credit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.credit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
          >,
          ReturnType<typeof getApiV3CreditQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CreditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CreditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.credit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3CreditIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>>,
) {
  return ['api', '/api/v3/credit/:id', toValue(args)] as const
}

export function getApiV3CreditIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3CreditIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.credit[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3CreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3CreditIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CreditIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3CreditIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.credit[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>
                >
              >
            >
          | undefined,
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

export function getApiV3ExtrafileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.extrafile.$get>>,
) {
  return ['api', '/api/v3/extrafile', toValue(args)] as const
}

export function getApiV3ExtrafileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.extrafile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ExtrafileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.extrafile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Extrafile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.extrafile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ExtrafileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExtrafileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ExtrafileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.extrafile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getApiV3HistoryMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.movie.$get>>,
) {
  return ['api', '/api/v3/history/movie', toValue(args)] as const
}

export function getApiV3HistoryMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3HistoryMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.history.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3HistoryMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.history.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>
            >
          >,
          ReturnType<typeof getApiV3HistoryMovieQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoryMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3HistoryMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.history.movie.$get(toValue(args), {
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>
                >
              >
            >
          | undefined,
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

export function getApiV3ExclusionsQueryKey() {
  return ['api', '/api/v3/exclusions'] as const
}

export function getApiV3ExclusionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ExclusionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.exclusions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Exclusions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ExclusionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ExclusionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.exclusions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ExclusionsMutationKey() {
  return ['api', '/api/v3/exclusions', 'POST'] as const
}

export function getPostApiV3ExclusionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ExclusionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.$post>) {
      return parseResponse(client.api.v3.exclusions.$post(args, options))
    },
  })
}

export function usePostApiV3Exclusions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.exclusions.$post>,
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
  const mutationDefaults = getPostApiV3ExclusionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ExclusionsPagedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exclusions.paged.$get>>,
) {
  return ['api', '/api/v3/exclusions/paged', toValue(args)] as const
}

export function getApiV3ExclusionsPagedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exclusions.paged.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ExclusionsPagedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.exclusions.paged.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ExclusionsPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.exclusions.paged.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ExclusionsPagedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsPagedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ExclusionsPagedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.exclusions.paged.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ExclusionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>>,
) {
  return ['api', '/api/v3/exclusions/:id', toValue(args)] as const
}

export function getApiV3ExclusionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ExclusionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.exclusions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ExclusionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ExclusionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ExclusionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.exclusions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ExclusionsIdMutationKey() {
  return ['api', '/api/v3/exclusions/:id', 'PUT'] as const
}

export function getPutApiV3ExclusionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ExclusionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>) {
      return parseResponse(client.api.v3.exclusions[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ExclusionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ExclusionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ExclusionsIdMutationKey() {
  return ['api', '/api/v3/exclusions/:id', 'DELETE'] as const
}

export function getDeleteApiV3ExclusionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ExclusionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>) {
      return parseResponse(client.api.v3.exclusions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ExclusionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3ExclusionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ExclusionsBulkMutationKey() {
  return ['api', '/api/v3/exclusions/bulk', 'POST'] as const
}

export function getPostApiV3ExclusionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ExclusionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.bulk.$post>) {
      return parseResponse(client.api.v3.exclusions.bulk.$post(args, options))
    },
  })
}

export function usePostApiV3ExclusionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.exclusions.bulk.$post>,
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
  const mutationDefaults = getPostApiV3ExclusionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ExclusionsBulkMutationKey() {
  return ['api', '/api/v3/exclusions/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ExclusionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ExclusionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>) {
      return parseResponse(client.api.v3.exclusions.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3ExclusionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3ExclusionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlist.movie.$get>>,
) {
  return ['api', '/api/v3/importlist/movie', toValue(args)] as const
}

export function getApiV3ImportlistMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlist.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ImportlistMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.importlist.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ImportlistMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.importlist.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ImportlistMovieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ImportlistMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.importlist.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3ImportlistMovieMutationKey() {
  return ['api', '/api/v3/importlist/movie', 'POST'] as const
}

export function getPostApiV3ImportlistMovieMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.movie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistMovieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.movie.$post>) {
      return parseResponse(client.api.v3.importlist.movie.$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistMovie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.importlist.movie.$post>,
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
  const mutationDefaults = getPostApiV3ImportlistMovieMutationOptions<TError, TOnMutateResult>(
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
              >
            >
          | undefined,
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

export function getApiV3MediacoverMovieIdFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
  >,
) {
  return ['api', '/api/v3/mediacover/:movieId/:filename', toValue(args)] as const
}

export function getApiV3MediacoverMovieIdFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MediacoverMovieIdFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.mediacover[':movieId'][':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MediacoverMovieIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
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
                  ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV3MediacoverMovieIdFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MediacoverMovieIdFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MediacoverMovieIdFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.mediacover[':movieId'][':filename'].$get(toValue(args), {
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
              >
            >
          | undefined,
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

export function getApiV3ConfigMetadataQueryKey() {
  return ['api', '/api/v3/config/metadata'] as const
}

export function getApiV3ConfigMetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3ConfigMetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.metadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ConfigMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3ConfigMetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigMetadataIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>>,
) {
  return ['api', '/api/v3/config/metadata/:id', toValue(args)] as const
}

export function getApiV3ConfigMetadataIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigMetadataIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.metadata[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3ConfigMetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3ConfigMetadataIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMetadataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigMetadataIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.metadata[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3ConfigMetadataIdMutationKey() {
  return ['api', '/api/v3/config/metadata/:id', 'PUT'] as const
}

export function getPutApiV3ConfigMetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigMetadataIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.metadata[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigMetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3ConfigMetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.$get>>,
) {
  return ['api', '/api/v3/movie', toValue(args)] as const
}

export function getApiV3MovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Movie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
          >,
          ReturnType<typeof getApiV3MovieQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3MovieMutationKey() {
  return ['api', '/api/v3/movie', 'POST'] as const
}

export function getPostApiV3MovieMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MovieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.$post>) {
      return parseResponse(client.api.v3.movie.$post(args, options))
    },
  })
}

export function usePostApiV3Movie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.movie.$post>,
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
  const mutationDefaults = getPostApiV3MovieMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3MovieIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>>,
) {
  return ['api', '/api/v3/movie/:id', toValue(args)] as const
}

export function getApiV3MovieIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MovieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV3MovieIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3MovieIdMutationKey() {
  return ['api', '/api/v3/movie/:id', 'PUT'] as const
}

export function getPutApiV3MovieIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MovieIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>) {
      return parseResponse(client.api.v3.movie[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MovieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3MovieIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV3MovieIdMutationKey() {
  return ['api', '/api/v3/movie/:id', 'DELETE'] as const
}

export function getDeleteApiV3MovieIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MovieIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>) {
      return parseResponse(client.api.v3.movie[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MovieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3MovieIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MovieEditorMutationKey() {
  return ['api', '/api/v3/movie/editor', 'PUT'] as const
}

export function getPutApiV3MovieEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MovieEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.editor.$put>) {
      return parseResponse(client.api.v3.movie.editor.$put(args, options))
    },
  })
}

export function usePutApiV3MovieEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.movie.editor.$put>,
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
  const mutationDefaults = getPutApiV3MovieEditorMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MovieEditorMutationKey() {
  return ['api', '/api/v3/movie/editor', 'DELETE'] as const
}

export function getDeleteApiV3MovieEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.editor.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MovieEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.editor.$delete>) {
      return parseResponse(client.api.v3.movie.editor.$delete(args, options))
    },
  })
}

export function useDeleteApiV3MovieEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.movie.editor.$delete>,
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
  const mutationDefaults = getDeleteApiV3MovieEditorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MoviefileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.moviefile.$get>>,
) {
  return ['api', '/api/v3/moviefile', toValue(args)] as const
}

export function getApiV3MoviefileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.moviefile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MoviefileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.moviefile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Moviefile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.moviefile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MoviefileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MoviefileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MoviefileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.moviefile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MoviefileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>>,
) {
  return ['api', '/api/v3/moviefile/:id', toValue(args)] as const
}

export function getApiV3MoviefileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MoviefileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.moviefile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MoviefileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3MoviefileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MoviefileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MoviefileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.moviefile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3MoviefileIdMutationKey() {
  return ['api', '/api/v3/moviefile/:id', 'PUT'] as const
}

export function getPutApiV3MoviefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>) {
      return parseResponse(client.api.v3.moviefile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV3MoviefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MoviefileIdMutationKey() {
  return ['api', '/api/v3/moviefile/:id', 'DELETE'] as const
}

export function getDeleteApiV3MoviefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MoviefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>) {
      return parseResponse(client.api.v3.moviefile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MoviefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV3MoviefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MoviefileEditorMutationKey() {
  return ['api', '/api/v3/moviefile/editor', 'PUT'] as const
}

export function getPutApiV3MoviefileEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.editor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.editor.$put>) {
      return parseResponse(client.api.v3.moviefile.editor.$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.editor.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.moviefile.editor.$put>,
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
  const mutationDefaults = getPutApiV3MoviefileEditorMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MoviefileBulkMutationKey() {
  return ['api', '/api/v3/moviefile/bulk', 'PUT'] as const
}

export function getPutApiV3MoviefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.bulk.$put>) {
      return parseResponse(client.api.v3.moviefile.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.moviefile.bulk.$put>,
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
  const mutationDefaults = getPutApiV3MoviefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MoviefileBulkMutationKey() {
  return ['api', '/api/v3/moviefile/bulk', 'DELETE'] as const
}

export function getDeleteApiV3MoviefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MoviefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>) {
      return parseResponse(client.api.v3.moviefile.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3MoviefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>,
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
  const mutationDefaults = getDeleteApiV3MoviefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MovieIdFolderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>,
) {
  return ['api', '/api/v3/movie/:id/folder', toValue(args)] as const
}

export function getApiV3MovieIdFolderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieIdFolderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie[':id'].folder.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MovieIdFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3MovieIdFolderQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieIdFolderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieIdFolderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie[':id'].folder.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3MovieImportMutationKey() {
  return ['api', '/api/v3/movie/import', 'POST'] as const
}

export function getPostApiV3MovieImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MovieImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.import.$post>) {
      return parseResponse(client.api.v3.movie.import.$post(args, options))
    },
  })
}

export function usePostApiV3MovieImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.movie.import.$post>,
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
  const mutationDefaults = getPostApiV3MovieImportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MovieLookupTmdbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>>,
) {
  return ['api', '/api/v3/movie/lookup/tmdb', toValue(args)] as const
}

export function getApiV3MovieLookupTmdbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieLookupTmdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie.lookup.tmdb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MovieLookupTmdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MovieLookupTmdbQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupTmdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieLookupTmdbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie.lookup.tmdb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MovieLookupImdbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>>,
) {
  return ['api', '/api/v3/movie/lookup/imdb', toValue(args)] as const
}

export function getApiV3MovieLookupImdbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieLookupImdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie.lookup.imdb.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MovieLookupImdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MovieLookupImdbQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupImdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieLookupImdbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie.lookup.imdb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MovieLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.$get>>,
) {
  return ['api', '/api/v3/movie/lookup', toValue(args)] as const
}

export function getApiV3MovieLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3MovieLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.movie.lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3MovieLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.movie.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>
            >
          >,
          ReturnType<typeof getApiV3MovieLookupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3MovieLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.movie.lookup.$get(toValue(args), {
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
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>>
        >
      >
    | undefined,
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
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>
                >
              >
            >
          | undefined,
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
