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

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getIdKey() {
  return ['{id}'] as const
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

export function getApiV1ApplicationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.applications)[':id']['$get']>>,
) {
  return ['api', '/api/v1/applications/:id', toValue(args)] as const
}

export function getApiV1ApplicationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.applications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApplicationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.applications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApplicationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.applications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApplicationsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApplicationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApplicationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.applications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ApplicationsIdMutationKey() {
  return ['api', '/api/v1/applications/:id', 'PUT'] as const
}

export function getPutApiV1ApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.applications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApplicationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.applications)[':id']['$put']>) {
      return parseResponse(client.api.v1.applications[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.applications)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ApplicationsIdMutationKey() {
  return ['api', '/api/v1/applications/:id', 'DELETE'] as const
}

export function getDeleteApiV1ApplicationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.applications)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApplicationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.applications)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.applications[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ApplicationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.applications)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.applications)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ApplicationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApplicationsQueryKey() {
  return ['api', '/api/v1/applications'] as const
}

export function getApiV1ApplicationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ApplicationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Applications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ApplicationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ApplicationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.applications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ApplicationsMutationKey() {
  return ['api', '/api/v1/applications', 'POST'] as const
}

export function getPostApiV1ApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.applications.$post>) {
      return parseResponse(client.api.v1.applications.$post(args, options))
    },
  })
}

export function usePostApiV1Applications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.applications.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1ApplicationsBulkMutationKey() {
  return ['api', '/api/v1/applications/bulk', 'PUT'] as const
}

export function getPutApiV1ApplicationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.applications.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApplicationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.applications.bulk.$put>) {
      return parseResponse(client.api.v1.applications.bulk.$put(args, options))
    },
  })
}

export function usePutApiV1ApplicationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.applications.bulk.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ApplicationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ApplicationsBulkMutationKey() {
  return ['api', '/api/v1/applications/bulk', 'DELETE'] as const
}

export function getDeleteApiV1ApplicationsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.applications.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApplicationsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.applications.bulk.$delete>) {
      return parseResponse(client.api.v1.applications.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ApplicationsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.applications.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.applications.bulk.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ApplicationsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApplicationsSchemaQueryKey() {
  return ['api', '/api/v1/applications/schema'] as const
}

export function getApiV1ApplicationsSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ApplicationsSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.applications.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApplicationsSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.applications.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.applications.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApplicationsSchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApplicationsSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ApplicationsSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.applications.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ApplicationsTestMutationKey() {
  return ['api', '/api/v1/applications/test', 'POST'] as const
}

export function getPostApiV1ApplicationsTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.applications.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApplicationsTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.applications.test.$post>) {
      return parseResponse(client.api.v1.applications.test.$post(args, options))
    },
  })
}

export function usePostApiV1ApplicationsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.applications.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.applications.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApplicationsTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ApplicationsTestallMutationKey() {
  return ['api', '/api/v1/applications/testall', 'POST'] as const
}

export function getPostApiV1ApplicationsTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.applications.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApplicationsTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.applications.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV1ApplicationsTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.applications.testall.$post>>
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
  const mutationDefaults = getPostApiV1ApplicationsTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ApplicationsActionNameMutationKey() {
  return ['api', '/api/v1/applications/action/:name', 'POST'] as const
}

export function getPostApiV1ApplicationsActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.applications.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.applications.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApplicationsActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.applications.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.applications.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV1ApplicationsActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.applications.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.applications.action)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ApplicationsActionNameMutationOptions<
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

export function getApiV1AppprofileQueryKey() {
  return ['api', '/api/v1/appprofile'] as const
}

export function getApiV1AppprofileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AppprofileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.appprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Appprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AppprofileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppprofileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AppprofileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.appprofile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1AppprofileMutationKey() {
  return ['api', '/api/v1/appprofile', 'POST'] as const
}

export function getPostApiV1AppprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.appprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.appprofile.$post>) {
      return parseResponse(client.api.v1.appprofile.$post(args, options))
    },
  })
}

export function usePostApiV1Appprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.appprofile.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppprofileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.appprofile)[':id']['$get']>>,
) {
  return ['api', '/api/v1/appprofile/:id', toValue(args)] as const
}

export function getApiV1AppprofileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.appprofile)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppprofileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.appprofile[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.appprofile)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppprofileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppprofileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppprofileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.appprofile[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AppprofileIdMutationKey() {
  return ['api', '/api/v1/appprofile/:id', 'PUT'] as const
}

export function getPutApiV1AppprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.appprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.appprofile)[':id']['$put']>) {
      return parseResponse(client.api.v1.appprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1AppprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.appprofile)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AppprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1AppprofileIdMutationKey() {
  return ['api', '/api/v1/appprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV1AppprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.appprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.appprofile)[':id']['$delete']>) {
      return parseResponse(client.api.v1.appprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1AppprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.appprofile)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.appprofile)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AppprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppprofileSchemaQueryKey() {
  return ['api', '/api/v1/appprofile/schema'] as const
}

export function getApiV1AppprofileSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AppprofileSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.appprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.schema.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AppprofileSchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.appprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppprofileSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AppprofileSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.appprofile.schema.$get(undefined, {
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

export function getApiV1SystemBackupQueryKey() {
  return ['api', '/api/v1/system/backup'] as const
}

export function getApiV1SystemBackupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemBackupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemBackupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemBackupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.backup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1SystemBackupIdMutationKey() {
  return ['api', '/api/v1/system/backup/:id', 'DELETE'] as const
}

export function getDeleteApiV1SystemBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.system.backup)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SystemBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.system.backup[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.backup)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.system.backup)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SystemBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SystemBackupRestoreIdMutationKey() {
  return ['api', '/api/v1/system/backup/restore/:id', 'POST'] as const
}

export function getPostApiV1SystemBackupRestoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemBackupRestoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v1.system.backup.restore[':id'].$post(args, options))
    },
  })
}

export function usePostApiV1SystemBackupRestoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.system.backup.restore)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SystemBackupRestoreIdMutationOptions<
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

export function getPostApiV1SystemBackupRestoreUploadMutationKey() {
  return ['api', '/api/v1/system/backup/restore/upload', 'POST'] as const
}

export function getPostApiV1SystemBackupRestoreUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.system.backup.restore.upload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemBackupRestoreUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.backup.restore.upload.$post(undefined, options))
    },
  })
}

export function usePostApiV1SystemBackupRestoreUpload<
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
                Awaited<ReturnType<typeof client.api.v1.system.backup.restore.upload.$post>>
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
  const mutationDefaults = getPostApiV1SystemBackupRestoreUploadMutationOptions<
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

export function getApiV1CommandIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
) {
  return ['api', '/api/v1/command/:id', toValue(args)] as const
}

export function getApiV1CommandIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CommandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.command[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.command)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CommandIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CommandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.command[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1CommandIdMutationKey() {
  return ['api', '/api/v1/command/:id', 'DELETE'] as const
}

export function getDeleteApiV1CommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CommandIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>) {
      return parseResponse(client.api.v1.command[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.command)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.command)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1CommandIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CommandQueryKey() {
  return ['api', '/api/v1/command'] as const
}

export function getApiV1CommandQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CommandQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
          >,
          ReturnType<typeof getApiV1CommandQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CommandQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CommandQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.command.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CommandMutationKey() {
  return ['api', '/api/v1/command', 'POST'] as const
}

export function getPostApiV1CommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.command.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CommandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.command.$post>) {
      return parseResponse(client.api.v1.command.$post(args, options))
    },
  })
}

export function usePostApiV1Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.command.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.command.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CommandMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomfilterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
) {
  return ['api', '/api/v1/customfilter/:id', toValue(args)] as const
}

export function getApiV1CustomfilterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomfilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customfilter[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.customfilter)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomfilterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomfilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customfilter[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1CustomfilterIdMutationKey() {
  return ['api', '/api/v1/customfilter/:id', 'PUT'] as const
}

export function getPutApiV1CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomfilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>) {
      return parseResponse(client.api.v1.customfilter[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customfilter)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CustomfilterIdMutationKey() {
  return ['api', '/api/v1/customfilter/:id', 'DELETE'] as const
}

export function getDeleteApiV1CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomfilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.customfilter[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customfilter)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customfilter)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomfilterQueryKey() {
  return ['api', '/api/v1/customfilter'] as const
}

export function getApiV1CustomfilterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomfilterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CustomfilterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomfilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomfilterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customfilter.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CustomfilterMutationKey() {
  return ['api', '/api/v1/customfilter', 'POST'] as const
}

export function getPostApiV1CustomfilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.customfilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomfilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customfilter.$post>) {
      return parseResponse(client.api.v1.customfilter.$post(args, options))
    },
  })
}

export function usePostApiV1Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customfilter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customfilter.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CustomfilterMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigDevelopmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.development)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/config/development/:id', toValue(args)] as const
}

export function getApiV1ConfigDevelopmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.development)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigDevelopmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.development[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDevelopmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.development)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDevelopmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDevelopmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigDevelopmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.development[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ConfigDevelopmentIdMutationKey() {
  return ['api', '/api/v1/config/development/:id', 'PUT'] as const
}

export function getPutApiV1ConfigDevelopmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.development)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigDevelopmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config.development)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.config.development[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ConfigDevelopmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.development)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.development)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ConfigDevelopmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigDevelopmentQueryKey() {
  return ['api', '/api/v1/config/development'] as const
}

export function getApiV1ConfigDevelopmentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigDevelopmentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.development.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDevelopment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.development.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.config.development.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.development.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDevelopmentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.development.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDevelopmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigDevelopmentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.development.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DownloadclientIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
) {
  return ['api', '/api/v1/downloadclient/:id', toValue(args)] as const
}

export function getApiV1DownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DownloadclientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1DownloadclientIdMutationKey() {
  return ['api', '/api/v1/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV1DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DownloadclientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>) {
      return parseResponse(client.api.v1.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DownloadclientIdMutationKey() {
  return ['api', '/api/v1/downloadclient/:id', 'DELETE'] as const
}

export function getDeleteApiV1DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.downloadclient[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.downloadclient)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DownloadclientQueryKey() {
  return ['api', '/api/v1/downloadclient'] as const
}

export function getApiV1DownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DownloadclientQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DownloadclientMutationKey() {
  return ['api', '/api/v1/downloadclient', 'POST'] as const
}

export function getPostApiV1DownloadclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.$post>) {
      return parseResponse(client.api.v1.downloadclient.$post(args, options))
    },
  })
}

export function usePostApiV1Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DownloadclientMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1DownloadclientBulkMutationKey() {
  return ['api', '/api/v1/downloadclient/bulk', 'PUT'] as const
}

export function getPutApiV1DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>) {
      return parseResponse(client.api.v1.downloadclient.bulk.$put(args, options))
    },
  })
}

export function usePutApiV1DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.bulk.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DownloadclientBulkMutationKey() {
  return ['api', '/api/v1/downloadclient/bulk', 'DELETE'] as const
}

export function getDeleteApiV1DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>) {
      return parseResponse(client.api.v1.downloadclient.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.bulk.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.bulk.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DownloadclientSchemaQueryKey() {
  return ['api', '/api/v1/downloadclient/schema'] as const
}

export function getApiV1DownloadclientSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DownloadclientSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DownloadclientSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DownloadclientSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.downloadclient.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1DownloadclientTestMutationKey() {
  return ['api', '/api/v1/downloadclient/test', 'POST'] as const
}

export function getPostApiV1DownloadclientTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.downloadclient.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.downloadclient.test.$post>) {
      return parseResponse(client.api.v1.downloadclient.test.$post(args, options))
    },
  })
}

export function usePostApiV1DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.downloadclient.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DownloadclientTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DownloadclientTestallMutationKey() {
  return ['api', '/api/v1/downloadclient/testall', 'POST'] as const
}

export function getPostApiV1DownloadclientTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.downloadclient.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.downloadclient.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV1DownloadclientTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.downloadclient.testall.$post>>
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
  const mutationDefaults = getPostApiV1DownloadclientTestallMutationOptions<
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

export function getPostApiV1DownloadclientActionNameMutationKey() {
  return ['api', '/api/v1/downloadclient/action/:name', 'POST'] as const
}

export function getPostApiV1DownloadclientActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DownloadclientActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.downloadclient.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV1DownloadclientActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.downloadclient.action)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DownloadclientActionNameMutationOptions<
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

export function getApiV1ConfigDownloadclientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/config/downloadclient/:id', toValue(args)] as const
}

export function getApiV1ConfigDownloadclientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigDownloadclientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.downloadclient[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigDownloadclientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.downloadclient[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ConfigDownloadclientIdMutationKey() {
  return ['api', '/api/v1/config/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV1ConfigDownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigDownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.config.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ConfigDownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.downloadclient)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ConfigDownloadclientIdMutationOptions<
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

export function getApiV1ConfigDownloadclientQueryKey() {
  return ['api', '/api/v1/config/downloadclient'] as const
}

export function getApiV1ConfigDownloadclientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigDownloadclientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigDownloadclientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigDownloadclientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.downloadclient.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilesystemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
) {
  return ['api', '/api/v1/filesystem', toValue(args)] as const
}

export function getApiV1FilesystemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilesystemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filesystem.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FilesystemQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilesystemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filesystem.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilesystemTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
) {
  return ['api', '/api/v1/filesystem/type', toValue(args)] as const
}

export function getApiV1FilesystemTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilesystemTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filesystem.type.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.filesystem.type.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FilesystemTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilesystemTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilesystemTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filesystem.type.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HealthQueryKey() {
  return ['api', '/api/v1/health'] as const
}

export function getApiV1HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
          >,
          ReturnType<typeof getApiV1HealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
) {
  return ['api', '/api/v1/history', toValue(args)] as const
}

export function getApiV1HistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          ReturnType<typeof getApiV1HistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistorySinceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
) {
  return ['api', '/api/v1/history/since', toValue(args)] as const
}

export function getApiV1HistorySinceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistorySinceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.since.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.since.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HistorySinceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistorySinceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistorySinceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.since.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryIndexerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.indexer.$get>>,
) {
  return ['api', '/api/v1/history/indexer', toValue(args)] as const
}

export function getApiV1HistoryIndexerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.indexer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryIndexerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.indexer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistoryIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.indexer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.indexer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.indexer.$get>>>
            >
          >,
          ReturnType<typeof getApiV1HistoryIndexerQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryIndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryIndexerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.indexer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigHostIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/host/:id', toValue(args)] as const
}

export function getApiV1ConfigHostIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigHostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.host[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.host)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigHostIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigHostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.host[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ConfigHostIdMutationKey() {
  return ['api', '/api/v1/config/host/:id', 'PUT'] as const
}

export function getPutApiV1ConfigHostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigHostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.host[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.host)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.host)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ConfigHostIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigHostQueryKey() {
  return ['api', '/api/v1/config/host'] as const
}

export function getApiV1ConfigHostQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigHostQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigHostQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigHostQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.host.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
) {
  return ['api', '/api/v1/indexer/:id', toValue(args)] as const
}

export function getApiV1IndexerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1IndexerIdMutationKey() {
  return ['api', '/api/v1/indexer/:id', 'PUT'] as const
}

export function getPutApiV1IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v1.indexer[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1IndexerIdMutationKey() {
  return ['api', '/api/v1/indexer/:id', 'DELETE'] as const
}

export function getDeleteApiV1IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>) {
      return parseResponse(client.api.v1.indexer[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerQueryKey() {
  return ['api', '/api/v1/indexer'] as const
}

export function getApiV1IndexerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
          >,
          ReturnType<typeof getApiV1IndexerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1IndexerMutationKey() {
  return ['api', '/api/v1/indexer', 'POST'] as const
}

export function getPostApiV1IndexerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.$post>) {
      return parseResponse(client.api.v1.indexer.$post(args, options))
    },
  })
}

export function usePostApiV1Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1IndexerBulkMutationKey() {
  return ['api', '/api/v1/indexer/bulk', 'PUT'] as const
}

export function getPutApiV1IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.bulk.$put>) {
      return parseResponse(client.api.v1.indexer.bulk.$put(args, options))
    },
  })
}

export function usePutApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1IndexerBulkMutationKey() {
  return ['api', '/api/v1/indexer/bulk', 'DELETE'] as const
}

export function getDeleteApiV1IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.bulk.$delete>) {
      return parseResponse(client.api.v1.indexer.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV1IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.bulk.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.bulk.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerSchemaQueryKey() {
  return ['api', '/api/v1/indexer/schema'] as const
}

export function getApiV1IndexerSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerSchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1IndexerTestMutationKey() {
  return ['api', '/api/v1/indexer/test', 'POST'] as const
}

export function getPostApiV1IndexerTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexer.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexer.test.$post>) {
      return parseResponse(client.api.v1.indexer.test.$post(args, options))
    },
  })
}

export function usePostApiV1IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexer.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1IndexerTestallMutationKey() {
  return ['api', '/api/v1/indexer/testall', 'POST'] as const
}

export function getPostApiV1IndexerTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.indexer.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV1IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.testall.$post>>>
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
  const mutationDefaults = getPostApiV1IndexerTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1IndexerActionNameMutationKey() {
  return ['api', '/api/v1/indexer/action/:name', 'POST'] as const
}

export function getPostApiV1IndexerActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.indexer.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.indexer.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV1IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexer.action)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerCategoriesQueryKey() {
  return ['api', '/api/v1/indexer/categories'] as const
}

export function getApiV1IndexerCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.categories.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.indexer.categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.indexer.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexer.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerproxyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>,
) {
  return ['api', '/api/v1/indexerproxy/:id', toValue(args)] as const
}

export function getApiV1IndexerproxyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerproxyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerproxy[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerproxyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerproxyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerproxyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerproxyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerproxy[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1IndexerproxyIdMutationKey() {
  return ['api', '/api/v1/indexerproxy/:id', 'PUT'] as const
}

export function getPutApiV1IndexerproxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IndexerproxyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$put']>) {
      return parseResponse(client.api.v1.indexerproxy[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1IndexerproxyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1IndexerproxyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1IndexerproxyIdMutationKey() {
  return ['api', '/api/v1/indexerproxy/:id', 'DELETE'] as const
}

export function getDeleteApiV1IndexerproxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1IndexerproxyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.indexerproxy[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1IndexerproxyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexerproxy)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1IndexerproxyIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerproxyQueryKey() {
  return ['api', '/api/v1/indexerproxy'] as const
}

export function getApiV1IndexerproxyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerproxyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerproxy.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Indexerproxy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerproxyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerproxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerproxyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerproxy.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1IndexerproxyMutationKey() {
  return ['api', '/api/v1/indexerproxy', 'POST'] as const
}

export function getPostApiV1IndexerproxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexerproxy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerproxyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexerproxy.$post>) {
      return parseResponse(client.api.v1.indexerproxy.$post(args, options))
    },
  })
}

export function usePostApiV1Indexerproxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexerproxy.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerproxyMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1IndexerproxySchemaQueryKey() {
  return ['api', '/api/v1/indexerproxy/schema'] as const
}

export function getApiV1IndexerproxySchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerproxySchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerproxy.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerproxySchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.indexerproxy.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.indexerproxy.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerproxySchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerproxySchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerproxySchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerproxy.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1IndexerproxyTestMutationKey() {
  return ['api', '/api/v1/indexerproxy/test', 'POST'] as const
}

export function getPostApiV1IndexerproxyTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.indexerproxy.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerproxyTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.indexerproxy.test.$post>) {
      return parseResponse(client.api.v1.indexerproxy.test.$post(args, options))
    },
  })
}

export function usePostApiV1IndexerproxyTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.indexerproxy.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.indexerproxy.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerproxyTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1IndexerproxyTestallMutationKey() {
  return ['api', '/api/v1/indexerproxy/testall', 'POST'] as const
}

export function getPostApiV1IndexerproxyTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerproxy.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerproxyTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.indexerproxy.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV1IndexerproxyTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.indexerproxy.testall.$post>>
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
  const mutationDefaults = getPostApiV1IndexerproxyTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1IndexerproxyActionNameMutationKey() {
  return ['api', '/api/v1/indexerproxy/action/:name', 'POST'] as const
}

export function getPostApiV1IndexerproxyActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IndexerproxyActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.indexerproxy.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV1IndexerproxyActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.indexerproxy.action)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1IndexerproxyActionNameMutationOptions<
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

export function getApiV1IndexerstatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.indexerstats.$get>>,
) {
  return ['api', '/api/v1/indexerstats', toValue(args)] as const
}

export function getApiV1IndexerstatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.indexerstats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerstatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerstats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Indexerstats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.indexerstats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstats.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerstatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerstatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerstatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerstats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerstatusQueryKey() {
  return ['api', '/api/v1/indexerstatus'] as const
}

export function getApiV1IndexerstatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1IndexerstatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexerstatus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Indexerstatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstatus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstatus.$get>>>
            >
          >,
          ReturnType<typeof getApiV1IndexerstatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.indexerstatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerstatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1IndexerstatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexerstatus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LocalizationQueryKey() {
  return ['api', '/api/v1/localization'] as const
}

export function getApiV1LocalizationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LocalizationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LocalizationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocalizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LocalizationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.localization.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LocalizationOptionsQueryKey() {
  return ['api', '/api/v1/localization/options'] as const
}

export function getApiV1LocalizationOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LocalizationOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.localization.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LocalizationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.options.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.localization.options.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.localization.options.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LocalizationOptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.localization.options.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LocalizationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LocalizationOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.localization.options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
) {
  return ['api', '/api/v1/log', toValue(args)] as const
}

export function getApiV1LogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>
          >,
          ReturnType<typeof getApiV1LogQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1LogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileQueryKey() {
  return ['api', '/api/v1/log/file'] as const
}

export function getApiV1LogFileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LogFileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LogFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LogFileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
) {
  return ['api', '/api/v1/log/file/:filename', toValue(args)] as const
}

export function getApiV1LogFileFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogFileFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log.file)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LogFileFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogFileFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerIdNewznabQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>
  >,
) {
  return ['api', '/api/v1/indexer/:id/newznab', toValue(args)] as const
}

export function getApiV1IndexerIdNewznabQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerIdNewznabQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer[':id'].newznab.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerIdNewznab<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerIdNewznabQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['newznab']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerIdNewznabQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerIdNewznabQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer[':id'].newznab.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdApiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['api']['$get']>>,
) {
  return [':id', '/:id/api', toValue(args)] as const
}

export function getIdApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['api']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].api.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIdApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['api']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['api']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['api']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['api']['$get']>>>
            >
          >,
          ReturnType<typeof getIdApiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['api']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIdApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].api.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1IndexerIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['download']['$get']>
  >,
) {
  return ['api', '/api/v1/indexer/:id/download', toValue(args)] as const
}

export function getApiV1IndexerIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1IndexerIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.indexer[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1IndexerIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.indexer)[':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1IndexerIdDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.indexer)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IndexerIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1IndexerIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.indexer[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['download']['$get']>>,
) {
  return [':id', '/:id/download', toValue(args)] as const
}

export function getIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['download']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['download']['$get']>>>
            >
          >,
          ReturnType<typeof getIdDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NotificationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
) {
  return ['api', '/api/v1/notification/:id', toValue(args)] as const
}

export function getApiV1NotificationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notification)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1NotificationIdMutationKey() {
  return ['api', '/api/v1/notification/:id', 'PUT'] as const
}

export function getPutApiV1NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NotificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>) {
      return parseResponse(client.api.v1.notification[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1NotificationIdMutationKey() {
  return ['api', '/api/v1/notification/:id', 'DELETE'] as const
}

export function getDeleteApiV1NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.notification[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationQueryKey() {
  return ['api', '/api/v1/notification'] as const
}

export function getApiV1NotificationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1NotificationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NotificationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1NotificationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NotificationMutationKey() {
  return ['api', '/api/v1/notification', 'POST'] as const
}

export function getPostApiV1NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.$post>) {
      return parseResponse(client.api.v1.notification.$post(args, options))
    },
  })
}

export function usePostApiV1Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NotificationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationSchemaQueryKey() {
  return ['api', '/api/v1/notification/schema'] as const
}

export function getApiV1NotificationSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1NotificationSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationSchemaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1NotificationSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1NotificationTestMutationKey() {
  return ['api', '/api/v1/notification/test', 'POST'] as const
}

export function getPostApiV1NotificationTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.test.$post>) {
      return parseResponse(client.api.v1.notification.test.$post(args, options))
    },
  })
}

export function usePostApiV1NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.test.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.test.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NotificationTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1NotificationTestallMutationKey() {
  return ['api', '/api/v1/notification/testall', 'POST'] as const
}

export function getPostApiV1NotificationTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.notification.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV1NotificationTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.testall.$post>>
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
  const mutationDefaults = getPostApiV1NotificationTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1NotificationActionNameMutationKey() {
  return ['api', '/api/v1/notification/action/:name', 'POST'] as const
}

export function getPostApiV1NotificationActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v1.notification.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV1NotificationActionName<
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
                Awaited<ReturnType<(typeof client.api.v1.notification.action)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.action)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NotificationActionNameMutationOptions<
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

export function getApiV1SearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
) {
  return ['api', '/api/v1/search', toValue(args)] as const
}

export function getApiV1SearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
          >,
          ReturnType<typeof getApiV1SearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SearchMutationKey() {
  return ['api', '/api/v1/search', 'POST'] as const
}

export function getPostApiV1SearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.search.$post>) {
      return parseResponse(client.api.v1.search.$post(args, options))
    },
  })
}

export function usePostApiV1Search<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1SearchBulkMutationKey() {
  return ['api', '/api/v1/search/bulk', 'POST'] as const
}

export function getPostApiV1SearchBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.search.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SearchBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.search.bulk.$post>) {
      return parseResponse(client.api.v1.search.bulk.$post(args, options))
    },
  })
}

export function usePostApiV1SearchBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.bulk.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.search.bulk.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SearchBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SystemStatusQueryKey() {
  return ['api', '/api/v1/system/status'] as const
}

export function getApiV1SystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemRoutesQueryKey() {
  return ['api', '/api/v1/system/routes'] as const
}

export function getApiV1SystemRoutesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemRoutesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemRoutesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemRoutesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.routes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v1/system/routes/duplicate'] as const
}

export function getApiV1SystemRoutesDuplicateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
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
                Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemRoutesDuplicateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemRoutesDuplicateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.routes.duplicate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SystemShutdownMutationKey() {
  return ['api', '/api/v1/system/shutdown', 'POST'] as const
}

export function getPostApiV1SystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.shutdown.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.shutdown.$post(undefined, options))
    },
  })
}

export function usePostApiV1SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.shutdown.$post>>>
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
  const mutationDefaults = getPostApiV1SystemShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SystemRestartMutationKey() {
  return ['api', '/api/v1/system/restart', 'POST'] as const
}

export function getPostApiV1SystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.system.restart.$post(undefined, options))
    },
  })
}

export function usePostApiV1SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.restart.$post>>>
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
  const mutationDefaults = getPostApiV1SystemRestartMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
) {
  return ['api', '/api/v1/tag/:id', toValue(args)] as const
}

export function getApiV1TagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TagIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TagIdMutationKey() {
  return ['api', '/api/v1/tag/:id', 'PUT'] as const
}

export function getPutApiV1TagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>) {
      return parseResponse(client.api.v1.tag[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1TagIdMutationKey() {
  return ['api', '/api/v1/tag/:id', 'DELETE'] as const
}

export function getDeleteApiV1TagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>) {
      return parseResponse(client.api.v1.tag[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1TagIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagQueryKey() {
  return ['api', '/api/v1/tag'] as const
}

export function getApiV1TagQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1TagQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>
          >,
          ReturnType<typeof getApiV1TagQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1TagQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1TagMutationKey() {
  return ['api', '/api/v1/tag', 'POST'] as const
}

export function getPostApiV1TagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tag.$post>) {
      return parseResponse(client.api.v1.tag.$post(args, options))
    },
  })
}

export function usePostApiV1Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.tag.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1TagDetailIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
) {
  return ['api', '/api/v1/tag/detail/:id', toValue(args)] as const
}

export function getApiV1TagDetailIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagDetailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.detail[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag.detail)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagDetailIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagDetailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.detail[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagDetailQueryKey() {
  return ['api', '/api/v1/tag/detail'] as const
}

export function getApiV1TagDetailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1TagDetailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagDetailQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagDetailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1TagDetailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.detail.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemTaskQueryKey() {
  return ['api', '/api/v1/system/task'] as const
}

export function getApiV1SystemTaskQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SystemTaskQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SystemTaskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SystemTaskQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.task.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SystemTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
) {
  return ['api', '/api/v1/system/task/:id', toValue(args)] as const
}

export function getApiV1SystemTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SystemTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.system.task[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.system.task)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SystemTaskIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SystemTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.system.task[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigUiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
) {
  return ['api', '/api/v1/config/ui/:id', toValue(args)] as const
}

export function getApiV1ConfigUiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigUiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.ui[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.config.ui)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigUiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigUiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.ui[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ConfigUiIdMutationKey() {
  return ['api', '/api/v1/config/ui/:id', 'PUT'] as const
}

export function getPutApiV1ConfigUiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ConfigUiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>) {
      return parseResponse(client.api.v1.config.ui[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.config.ui)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.config.ui)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ConfigUiIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ConfigUiQueryKey() {
  return ['api', '/api/v1/config/ui'] as const
}

export function getApiV1ConfigUiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigUiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConfigUiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigUiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigUiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.ui.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UpdateQueryKey() {
  return ['api', '/api/v1/update'] as const
}

export function getApiV1UpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
          >,
          ReturnType<typeof getApiV1UpdateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileUpdateQueryKey() {
  return ['api', '/api/v1/log/file/update'] as const
}

export function getApiV1LogFileUpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LogFileUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LogFileUpdateQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LogFileUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogFileUpdateFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
) {
  return ['api', '/api/v1/log/file/update/:filename', toValue(args)] as const
}

export function getApiV1LogFileUpdateFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogFileUpdateFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.file.update[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.log.file.update)[':filename']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogFileUpdateFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogFileUpdateFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.file.update[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
