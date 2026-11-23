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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name', toValue(args)] as const
}

export function getV1beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta1NameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PUT'] as const
}

export function getPutV1beta1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>) {
      return parseResponse(client.v1beta1[':name'].$put(args, options))
    },
  })
}

export function usePutV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1beta1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ParentChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/channels', toValue(args)] as const
}

export function getV1beta1ParentChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentChannelsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentChannelsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/channels', 'POST'] as const
}

export function getPostV1beta1ParentChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].channels.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['channels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentChannelsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ParentDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/domains', toValue(args)] as const
}

export function getV1beta1ParentDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentDomainsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/domains', 'POST'] as const
}

export function getPostV1beta1ParentDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].domains.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['domains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['domains']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentDomainsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ParentFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['files']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/files', toValue(args)] as const
}

export function getV1beta1ParentFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/releases', toValue(args)] as const
}

export function getV1beta1ParentReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].releases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentReleases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentReleasesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].releases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentReleasesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/releases', 'POST'] as const
}

export function getPostV1beta1ParentReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentReleasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].releases.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentReleases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['releases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['releases']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentReleasesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ParentSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/sites', toValue(args)] as const
}

export function getV1beta1ParentSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentSitesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentSitesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/sites', 'POST'] as const
}

export function getPostV1beta1ParentSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentSitesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$post']>) {
      return parseResponse(client.v1beta1[':parent'].sites.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sites']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['sites']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentSitesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1beta1ParentVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/versions', toValue(args)] as const
}

export function getV1beta1ParentVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentVersionsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/versions', 'POST'] as const
}

export function getPostV1beta1ParentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].versions.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['versions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1beta1ParentVersionsCloneMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/versions:clone', 'POST'] as const
}

export function getPostV1beta1ParentVersionsCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentVersionsCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent']['versions:clone'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentVersionsClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['versions:clone']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentVersionsCloneMutationOptions<
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

export function getPostV1beta1ParentPopulateFilesMutationKey() {
  return ['v1beta1', '/v1beta1/:parent:populateFiles', 'POST'] as const
}

export function getPostV1beta1ParentPopulateFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentPopulateFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent:populateFiles'].$post(args, options))
    },
  })
}

export function usePostV1beta1ParentPopulateFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent:populateFiles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1ParentPopulateFilesMutationOptions<
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
