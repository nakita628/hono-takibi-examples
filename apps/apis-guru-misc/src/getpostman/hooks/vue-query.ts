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

export function getApisKey() {
  return ['apis'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMocksKey() {
  return ['mocks'] as const
}

export function getMonitorsKey() {
  return ['monitors'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getApisQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>) {
  return ['apis', '/apis', toValue(args)] as const
}

export function getApisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
          ReturnType<typeof getApisQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisMutationKey() {
  return ['apis', '/apis', 'POST'] as const
}

export function getPostApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apis.$post>) {
      return parseResponse(client.apis.$post(args, options))
    },
  })
}

export function usePostApis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$post>>>>>,
          TError,
          InferRequestType<typeof client.apis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['$get']>>,
) {
  return ['apis', '/apis/:apiId', toValue(args)] as const
}

export function getApisApiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
            >
          >,
          ReturnType<typeof getApisApiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiIdMutationKey() {
  return ['apis', '/apis/:apiId', 'PUT'] as const
}

export function getPutApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['$put']>) {
      return parseResponse(client.apis[':apiId'].$put(args, options))
    },
  })
}

export function usePutApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisApiIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisApiIdMutationKey() {
  return ['apis', '/apis/:apiId', 'DELETE'] as const
}

export function getDeleteApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['$delete']>) {
      return parseResponse(client.apis[':apiId'].$delete(args, options))
    },
  })
}

export function useDeleteApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisApiIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>>,
) {
  return ['apis', '/apis/:apiId/versions', toValue(args)] as const
}

export function getApisApiIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisApiIdVersionsMutationKey() {
  return ['apis', '/apis/:apiId/versions', 'POST'] as const
}

export function getPostApisApiIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>) {
      return parseResponse(client.apis[':apiId'].versions.$post(args, options))
    },
  })
}

export function usePostApisApiIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisApiIdVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
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
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiIdVersionsApiVersionIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'PUT'] as const
}

export function getPutApisApiIdVersionsApiVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
    ) {
      return parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$put(args, options))
    },
  })
}

export function usePutApisApiIdVersionsApiVersionId<
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
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisApiIdVersionsApiVersionIdMutationOptions<
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

export function getDeleteApisApiIdVersionsApiVersionIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'DELETE'] as const
}

export function getDeleteApisApiIdVersionsApiVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiIdVersionsApiVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']
      >,
    ) {
      return parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$delete(args, options))
    },
  })
}

export function useDeleteApisApiIdVersionsApiVersionId<
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
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApisApiIdVersionsApiVersionIdMutationOptions<
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

export function getApisApiIdVersionsApiVersionIdContracttestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/contracttest', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdContracttestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdContracttestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdContracttest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdContracttestQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdContracttestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdContracttestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdDocumentationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/documentation', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdDocumentationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdDocumentationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdDocumentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdDocumentationQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdDocumentationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdDocumentationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdEnvironmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/environment', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdEnvironmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdEnvironmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].environment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdEnvironmentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdEnvironmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdEnvironmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].environment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/integrationtest', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdIntegrationtestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdIntegrationtest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdMonitorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/monitor', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdMonitorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdMonitorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdMonitor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdMonitorQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdMonitorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdMonitorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiIdVersionsApiVersionIdRelationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdRelationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdRelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].relations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdRelationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdRelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdRelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].relations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisApiIdVersionsApiVersionIdRelationsMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', 'POST'] as const
}

export function getPostApisApiIdVersionsApiVersionIdRelationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdRelationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].relations.$post(args, options),
      )
    },
  })
}

export function usePostApisApiIdVersionsApiVersionIdRelations<
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
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisApiIdVersionsApiVersionIdRelationsMutationOptions<
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

export function getPostApisApiIdVersionsApiVersionIdSchemasMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas', 'POST'] as const
}

export function getPostApisApiIdVersionsApiVersionIdSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas.$post(args, options),
      )
    },
  })
}

export function usePostApisApiIdVersionsApiVersionIdSchemas<
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
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApisApiIdVersionsApiVersionIdSchemasMutationOptions<
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

export function getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdSchemasSchemaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', 'PUT'] as const
}

export function getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$put(args, options),
      )
    },
  })
}

export function usePutApisApiIdVersionsApiVersionIdSchemasSchemaId<
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
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationOptions<
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

export function getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId/collections',
    'POST',
  ] as const
}

export function getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].collections.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollections<
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
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationOptions<
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

export function getApisApiIdVersionsApiVersionIdTestsuiteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
    >
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/testsuite', toValue(args)] as const
}

export function getApisApiIdVersionsApiVersionIdTestsuiteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiIdVersionsApiVersionIdTestsuiteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiIdVersionsApiVersionIdTestsuite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
                  >
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
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdTestsuiteQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdTestsuiteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiIdVersionsApiVersionIdTestsuiteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/:entityType/:entityId/syncWithSchema',
    'PUT',
  ] as const
}

export function getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'][':entityType'][
          ':entityId'
        ].syncWithSchema.$put(args, options),
      )
    },
  })
}

export function usePutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchema<
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
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationOptions<
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

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCollectionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function usePostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.collections.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionsForkCollectionUidMutationKey() {
  return ['collections', '/collections/fork/:collection_uid', 'POST'] as const
}

export function getPostCollectionsForkCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.fork)[':collection_uid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsForkCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
    ) {
      return parseResponse(client.collections.fork[':collection_uid'].$post(args, options))
    },
  })
}

export function usePostCollectionsForkCollectionUid<
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
                Awaited<ReturnType<(typeof client.collections.fork)[':collection_uid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsForkCollectionUidMutationOptions<
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

export function getPostCollectionsMergeMutationKey() {
  return ['collections', '/collections/merge', 'POST'] as const
}

export function getPostCollectionsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.merge.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.merge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.merge.$post>) {
      return parseResponse(client.collections.merge.$post(args, options))
    },
  })
}

export function usePostCollectionsMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.merge.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collections.merge.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsMergeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCollectionsCollectionUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_uid']['$get']>>,
) {
  return ['collections', '/collections/:collection_uid', toValue(args)] as const
}

export function getCollectionsCollectionUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionUidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCollectionsCollectionUidMutationKey() {
  return ['collections', '/collections/:collection_uid', 'PUT'] as const
}

export function getPutCollectionsCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_uid'].$put(args, options))
    },
  })
}

export function usePutCollectionsCollectionUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCollectionsCollectionUidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCollectionsCollectionUidMutationKey() {
  return ['collections', '/collections/:collection_uid', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection_uid'].$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionUidMutationOptions<
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

export function getEnvironmentsQueryKey() {
  return ['environments', '/environments'] as const
}

export function getEnvironmentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEnvironmentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.environments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
          >,
          ReturnType<typeof getEnvironmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEnvironmentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.environments.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnvironmentsMutationKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function getPostEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.environments.$post>) {
      return parseResponse(client.environments.$post(args, options))
    },
  })
}

export function usePostEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.environments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnvironmentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEnvironmentsEnvironmentUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.environments)[':environment_uid']['$get']>
  >,
) {
  return ['environments', '/environments/:environment_uid', toValue(args)] as const
}

export function getEnvironmentsEnvironmentUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.environments)[':environment_uid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentsEnvironmentUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.environments[':environment_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentsEnvironmentUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.environments)[':environment_uid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnvironmentsEnvironmentUidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentsEnvironmentUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.environments[':environment_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEnvironmentsEnvironmentUidMutationKey() {
  return ['environments', '/environments/:environment_uid', 'PUT'] as const
}

export function getPutEnvironmentsEnvironmentUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnvironmentsEnvironmentUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
    ) {
      return parseResponse(client.environments[':environment_uid'].$put(args, options))
    },
  })
}

export function usePutEnvironmentsEnvironmentUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnvironmentsEnvironmentUidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEnvironmentsEnvironmentUidMutationKey() {
  return ['environments', '/environments/:environment_uid', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
    ) {
      return parseResponse(client.environments[':environment_uid'].$delete(args, options))
    },
  })
}

export function useDeleteEnvironmentsEnvironmentUid<
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
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnvironmentsEnvironmentUidMutationOptions<
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

export function getPostImportExportedMutationKey() {
  return ['import', '/import/exported', 'POST'] as const
}

export function getPostImportExportedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.exported.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostImportExportedMutationKey(),
    async mutationFn() {
      return parseResponse(client.import.exported.$post(undefined, options))
    },
  })
}

export function usePostImportExported<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.import.exported.$post>>>
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
  const mutationDefaults = getPostImportExportedMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImportOpenapiMutationKey() {
  return ['import', '/import/openapi', 'POST'] as const
}

export function getPostImportOpenapiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.openapi.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.import.openapi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportOpenapiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import.openapi.$post>) {
      return parseResponse(client.import.openapi.$post(args, options))
    },
  })
}

export function usePostImportOpenapi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.import.openapi.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.import.openapi.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportOpenapiMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMocksQueryKey() {
  return ['mocks', '/mocks'] as const
}

export function getMocksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMocksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mocks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMocks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
          ReturnType<typeof getMocksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMocksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mocks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMocksMutationKey() {
  return ['mocks', '/mocks', 'POST'] as const
}

export function getPostMocksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$post>>>>>,
    TError,
    InferRequestType<typeof client.mocks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mocks.$post>) {
      return parseResponse(client.mocks.$post(args, options))
    },
  })
}

export function usePostMocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$post>>>>>,
          TError,
          InferRequestType<typeof client.mocks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMocksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMocksMockUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>>,
) {
  return ['mocks', '/mocks/:mock_uid', toValue(args)] as const
}

export function getMocksMockUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMocksMockUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mocks[':mock_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMocksMockUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
            >
          >,
          ReturnType<typeof getMocksMockUidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMocksMockUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMocksMockUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mocks[':mock_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMocksMockUidMutationKey() {
  return ['mocks', '/mocks/:mock_uid', 'PUT'] as const
}

export function getPutMocksMockUidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMocksMockUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>) {
      return parseResponse(client.mocks[':mock_uid'].$put(args, options))
    },
  })
}

export function usePutMocksMockUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMocksMockUidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMocksMockUidMutationKey() {
  return ['mocks', '/mocks/:mock_uid', 'DELETE'] as const
}

export function getDeleteMocksMockUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMocksMockUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>) {
      return parseResponse(client.mocks[':mock_uid'].$delete(args, options))
    },
  })
}

export function useDeleteMocksMockUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMocksMockUidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMocksMockUidPublishMutationKey() {
  return ['mocks', '/mocks/:mock_uid/publish', 'POST'] as const
}

export function getPostMocksMockUidPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMocksMockUidPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
    ) {
      return parseResponse(client.mocks[':mock_uid'].publish.$post(args, options))
    },
  })
}

export function usePostMocksMockUidPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMocksMockUidPublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMocksMockUidUnpublishMutationKey() {
  return ['mocks', '/mocks/:mock_uid/unpublish', 'DELETE'] as const
}

export function getDeleteMocksMockUidUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMocksMockUidUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
    ) {
      return parseResponse(client.mocks[':mock_uid'].unpublish.$delete(args, options))
    },
  })
}

export function useDeleteMocksMockUidUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMocksMockUidUnpublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMonitorsQueryKey() {
  return ['monitors', '/monitors'] as const
}

export function getMonitorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMonitorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMonitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
          >,
          ReturnType<typeof getMonitorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMonitorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMonitorsMutationKey() {
  return ['monitors', '/monitors', 'POST'] as const
}

export function getPostMonitorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>>,
    TError,
    InferRequestType<typeof client.monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitors.$post>) {
      return parseResponse(client.monitors.$post(args, options))
    },
  })
}

export function usePostMonitors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.monitors.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMonitorsMonitorUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>>,
) {
  return ['monitors', '/monitors/:monitor_uid', toValue(args)] as const
}

export function getMonitorsMonitorUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorsMonitorUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitors[':monitor_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMonitorsMonitorUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMonitorsMonitorUidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsMonitorUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorsMonitorUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitors[':monitor_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMonitorsMonitorUidMutationKey() {
  return ['monitors', '/monitors/:monitor_uid', 'PUT'] as const
}

export function getPutMonitorsMonitorUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMonitorsMonitorUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>) {
      return parseResponse(client.monitors[':monitor_uid'].$put(args, options))
    },
  })
}

export function usePutMonitorsMonitorUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMonitorsMonitorUidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMonitorsMonitorUidMutationKey() {
  return ['monitors', '/monitors/:monitor_uid', 'DELETE'] as const
}

export function getDeleteMonitorsMonitorUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMonitorsMonitorUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>) {
      return parseResponse(client.monitors[':monitor_uid'].$delete(args, options))
    },
  })
}

export function useDeleteMonitorsMonitorUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMonitorsMonitorUidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMonitorsMonitorUidRunMutationKey() {
  return ['monitors', '/monitors/:monitor_uid/run', 'POST'] as const
}

export function getPostMonitorsMonitorUidRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsMonitorUidRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
    ) {
      return parseResponse(client.monitors[':monitor_uid'].run.$post(args, options))
    },
  })
}

export function usePostMonitorsMonitorUidRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorsMonitorUidRunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesQueryKey() {
  return ['workspaces', '/workspaces'] as const
}

export function getWorkspacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWorkspacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          ReturnType<typeof getWorkspacesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWorkspacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesMutationKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function getPostWorkspacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.$post>) {
      return parseResponse(client.workspaces.$post(args, options))
    },
  })
}

export function usePostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workspaces.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>>,
) {
  return ['workspaces', '/workspaces/:workspace_id', toValue(args)] as const
}

export function getWorkspacesWorkspaceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>) {
      return parseResponse(client.workspaces[':workspace_id'].$put(args, options))
    },
  })
}

export function usePutWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspace_id'].$delete(args, options))
    },
  })
}

export function useDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
