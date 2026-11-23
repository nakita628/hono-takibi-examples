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

export function getAboutKey() {
  return ['about'] as const
}

export function getArchitecturesKey() {
  return ['architectures'] as const
}

export function getAttributeKey() {
  return ['attribute'] as const
}

export function getBuildKey() {
  return ['build'] as const
}

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getGroupKey() {
  return ['group'] as const
}

export function getIssueTrackersKey() {
  return ['issue_trackers'] as const
}

export function getPersonKey() {
  return ['person'] as const
}

export function getPublishedKey() {
  return ['published'] as const
}

export function getRequestKey() {
  return ['request'] as const
}

export function getRequestViewCollectionKey() {
  return ['request?view=collection'] as const
}

export function getWorkerKey() {
  return ['worker'] as const
}

export function getWorkerCmdCheckconstraintsKey() {
  return ['worker?cmd=checkconstraints'] as const
}

export function getAboutQueryKey() {
  return ['about', '/about'] as const
}

export function getAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          ReturnType<typeof getAboutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchitecturesQueryKey() {
  return ['architectures', '/architectures'] as const
}

export function getArchitecturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArchitecturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.architectures.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArchitectures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
          >,
          ReturnType<typeof getArchitecturesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.architectures.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchitecturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArchitecturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.architectures.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchitecturesArchitectureNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>
  >,
) {
  return ['architectures', '/architectures/:architecture_name', toValue(args)] as const
}

export function getArchitecturesArchitectureNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchitecturesArchitectureNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.architectures[':architecture_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchitecturesArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArchitecturesArchitectureNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.architectures)[':architecture_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchitecturesArchitectureNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchitecturesArchitectureNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.architectures[':architecture_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeQueryKey() {
  return ['attribute', '/attribute'] as const
}

export function getAttributeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAttributeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attribute.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAttribute<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>
          >,
          ReturnType<typeof getAttributeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attribute.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttributeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAttributeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.attribute.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttributeNamespaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attribute)[':namespace']['$get']>>,
) {
  return ['attribute', '/attribute/:namespace', toValue(args)] as const
}

export function getAttributeNamespaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attribute)[':namespace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attribute[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attribute)[':namespace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeNamespaceQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.attribute)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attribute[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAttributeNamespaceMutationKey() {
  return ['attribute', '/attribute/:namespace', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.attribute)[':namespace']['$delete']>) {
      return parseResponse(client.attribute[':namespace'].$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attribute)[':namespace']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAttributeNamespaceMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>
  >,
) {
  return ['attribute', '/attribute/:namespace/_meta', toValue(args)] as const
}

export function getAttributeNamespaceMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeNamespaceMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attribute[':namespace']._meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeNamespaceMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttributeNamespaceMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeNamespaceMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attribute[':namespace']._meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'PUT'] as const
}

export function getPutAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$put(args, options))
    },
  })
}

export function usePutAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'POST'] as const
}

export function getPostAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$post(args, options))
    },
  })
}

export function usePostAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAttributeNamespaceMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/_meta', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
    ) {
      return parseResponse(client.attribute[':namespace']._meta.$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespaceMeta<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attribute)[':namespace']['_meta']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceMetaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAttributeNamespaceAttributeNameMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceAttributeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceAttributeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
    ) {
      return parseResponse(client.attribute[':namespace'][':attribute_name'].$delete(args, options))
    },
  })
}

export function useDeleteAttributeNamespaceAttributeName<
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
                  ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAttributeNamespaceAttributeNameMutationOptions<
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

export function getAttributeNamespaceAttributeNameMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
  >,
) {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', toValue(args)] as const
}

export function getAttributeNamespaceAttributeNameMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttributeNamespaceAttributeNameMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttributeNamespaceAttributeNameMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
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
                    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
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
                    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAttributeNamespaceAttributeNameMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributeNamespaceAttributeNameMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttributeNamespaceAttributeNameMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attribute[':namespace'][':attribute_name']._meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'PUT'] as const
}

export function getPutAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$put(args, options),
      )
    },
  })
}

export function usePutAttributeNamespaceAttributeNameMeta<
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
                    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
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
  const mutationDefaults = getPutAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getPostAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'POST'] as const
}

export function getPostAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$post(args, options),
      )
    },
  })
}

export function usePostAttributeNamespaceAttributeNameMeta<
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
                    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
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
  const mutationDefaults = getPostAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getDeleteAttributeNamespaceAttributeNameMetaMutationKey() {
  return ['attribute', '/attribute/:namespace/:attribute_name/_meta', 'DELETE'] as const
}

export function getDeleteAttributeNamespaceAttributeNameMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributeNamespaceAttributeNameMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
      >,
    ) {
      return parseResponse(
        client.attribute[':namespace'][':attribute_name']._meta.$delete(args, options),
      )
    },
  })
}

export function useDeleteAttributeNamespaceAttributeNameMeta<
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
                    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
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
  const mutationDefaults = getDeleteAttributeNamespaceAttributeNameMetaMutationOptions<
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

export function getBuildQueryKey() {
  return ['build', '/build'] as const
}

export function getBuildQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBuildQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuild<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
          ReturnType<typeof getBuildQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.build.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBuildQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBuildQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.build.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.build)[':project_name']['$get']>>,
) {
  return ['build', '/build/:project_name', toValue(args)] as const
}

export function getBuildProjectNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.build)[':project_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildProjectNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.build)[':project_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildProjectNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBuildProjectNameMutationKey() {
  return ['build', '/build/:project_name', 'POST'] as const
}

export function getPostBuildProjectNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.build)[':project_name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.build)[':project_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildProjectNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.build)[':project_name']['$post']>) {
      return parseResponse(client.build[':project_name'].$post(args, options))
    },
  })
}

export function usePostBuildProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.build)[':project_name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.build)[':project_name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBuildProjectNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBuildProjectNameResultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>
  >,
) {
  return ['build', '/build/:project_name/_result', toValue(args)] as const
}

export function getBuildProjectNameResultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildProjectNameResultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name']._result.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildProjectNameResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameResultQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.build)[':project_name']['_result']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildProjectNameResultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name']._result.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>
  >,
) {
  return ['build', '/build/:project_name/:repository_name', toValue(args)] as const
}

export function getBuildProjectNameRepositoryNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildProjectNameRepositoryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>
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
                  ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.build)[':project_name'][':repository_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildProjectNameRepositoryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameBuildconfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
    >
  >,
) {
  return ['build', '/build/:project_name/:repository_name/_buildconfig', toValue(args)] as const
}

export function getBuildProjectNameRepositoryNameBuildconfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildProjectNameRepositoryNameBuildconfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name']._buildconfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameBuildconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameBuildconfigQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameBuildconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildProjectNameRepositoryNameBuildconfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name']._buildconfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_builddepinfo',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name']._builddepinfo.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][
            ':architecture_name'
          ]._builddepinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/_repository',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNameRepository<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNameRepositoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_buildinfo',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._buildinfo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._buildinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_history',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._history.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_jobstatus',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._jobstatus.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._jobstatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_log',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._log.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameLogQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_reason',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._reason.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameReason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._reason.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/_status',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][
          ':package_name'
        ]._status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][
            ':package_name'
          ]._status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationKey() {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name',
    'PUT',
  ] as const
}

export function getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
      >,
    ) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName<
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
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
    getPutBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameMutationOptions<
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

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
    >
  >,
) {
  return [
    'build',
    '/build/:project_name/:repository_name/:architecture_name/:package_name/:file_name?view=fileinfo',
    toValue(args),
  ] as const
}

export function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
          ':file_name?view=fileinfo'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
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
                    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfoQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
            ':file_name?view=fileinfo'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigurationQueryKey() {
  return ['configuration', '/configuration'] as const
}

export function getConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configuration.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
          >,
          ReturnType<typeof getConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConfigurationMutationKey() {
  return ['configuration', '/configuration', 'PUT'] as const
}

export function getPutConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.configuration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configuration.$put>) {
      return parseResponse(client.configuration.$put(args, options))
    },
  })
}

export function usePutConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.configuration.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.configuration.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConfigurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDistributionsQueryKey() {
  return ['distributions', '/distributions'] as const
}

export function getDistributionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDistributionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          ReturnType<typeof getDistributionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDistributionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDistributionsMutationKey() {
  return ['distributions', '/distributions', 'POST'] as const
}

export function getPostDistributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.distributions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDistributionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.distributions.$post>) {
      return parseResponse(client.distributions.$post(args, options))
    },
  })
}

export function usePostDistributions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.distributions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDistributionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDistributionsBulkReplaceMutationKey() {
  return ['distributions', '/distributions/bulk_replace', 'PUT'] as const
}

export function getPutDistributionsBulkReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.bulk_replace.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.distributions.bulk_replace.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDistributionsBulkReplaceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.distributions.bulk_replace.$put>) {
      return parseResponse(client.distributions.bulk_replace.$put(args, options))
    },
  })
}

export function usePutDistributionsBulkReplace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.distributions.bulk_replace.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.distributions.bulk_replace.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDistributionsBulkReplaceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDistributionsIncludeRemotesQueryKey() {
  return ['distributions', '/distributions/include_remotes'] as const
}

export function getDistributionsIncludeRemotesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDistributionsIncludeRemotesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions.include_remotes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistributionsIncludeRemotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
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
                Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>
              >
            >
          >,
          ReturnType<typeof getDistributionsIncludeRemotesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.distributions.include_remotes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsIncludeRemotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDistributionsIncludeRemotesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions.include_remotes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDistributionsDistributionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>
  >,
) {
  return ['distributions', '/distributions/:distribution_id', toValue(args)] as const
}

export function getDistributionsDistributionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistributionsDistributionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions[':distribution_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistributionsDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDistributionsDistributionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsDistributionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistributionsDistributionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions[':distribution_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDistributionsDistributionIdMutationKey() {
  return ['distributions', '/distributions/:distribution_id', 'PUT'] as const
}

export function getPutDistributionsDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDistributionsDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
    ) {
      return parseResponse(client.distributions[':distribution_id'].$put(args, options))
    },
  })
}

export function usePutDistributionsDistributionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDistributionsDistributionIdMutationOptions<
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

export function getDeleteDistributionsDistributionIdMutationKey() {
  return ['distributions', '/distributions/:distribution_id', 'DELETE'] as const
}

export function getDeleteDistributionsDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDistributionsDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
    ) {
      return parseResponse(client.distributions[':distribution_id'].$delete(args, options))
    },
  })
}

export function useDeleteDistributionsDistributionId<
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
                Awaited<ReturnType<(typeof client.distributions)[':distribution_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDistributionsDistributionIdMutationOptions<
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

export function getGroupQueryKey() {
  return ['group', '/group'] as const
}

export function getGroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
          ReturnType<typeof getGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.group.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.group.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupGroupTitleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.group)[':group_title']['$get']>>,
) {
  return ['group', '/group/:group_title', toValue(args)] as const
}

export function getGroupGroupTitleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.group)[':group_title']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupGroupTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.group[':group_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupGroupTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.group)[':group_title']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupGroupTitleQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupGroupTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.group[':group_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'PUT'] as const
}

export function getPutGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$put']>) {
      return parseResponse(client.group[':group_title'].$put(args, options))
    },
  })
}

export function usePutGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group)[':group_title']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.group)[':group_title']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'POST'] as const
}

export function getPostGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$post']>) {
      return parseResponse(client.group[':group_title'].$post(args, options))
    },
  })
}

export function usePostGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group)[':group_title']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.group)[':group_title']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupGroupTitleMutationKey() {
  return ['group', '/group/:group_title', 'DELETE'] as const
}

export function getDeleteGroupGroupTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':group_title']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':group_title']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupGroupTitleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':group_title']['$delete']>) {
      return parseResponse(client.group[':group_title'].$delete(args, options))
    },
  })
}

export function useDeleteGroupGroupTitle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.group)[':group_title']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.group)[':group_title']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupGroupTitleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIssueTrackersQueryKey() {
  return ['issue_trackers', '/issue_trackers'] as const
}

export function getIssueTrackersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIssueTrackersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue_trackers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssueTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
          >,
          ReturnType<typeof getIssueTrackersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIssueTrackersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.issue_trackers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIssueTrackersMutationKey() {
  return ['issue_trackers', '/issue_trackers', 'POST'] as const
}

export function getPostIssueTrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.issue_trackers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueTrackersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issue_trackers.$post>) {
      return parseResponse(client.issue_trackers.$post(args, options))
    },
  })
}

export function usePostIssueTrackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.issue_trackers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.issue_trackers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIssueTrackersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIssueTrackersIssueTrackerNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>
  >,
) {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', toValue(args)] as const
}

export function getIssueTrackersIssueTrackerNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackersIssueTrackerNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue_trackers[':issue_tracker_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackersIssueTrackerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIssueTrackersIssueTrackerNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersIssueTrackerNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackersIssueTrackerNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issue_trackers[':issue_tracker_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIssueTrackersIssueTrackerNameMutationKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'PUT'] as const
}

export function getPutIssueTrackersIssueTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueTrackersIssueTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
    ) {
      return parseResponse(client.issue_trackers[':issue_tracker_name'].$put(args, options))
    },
  })
}

export function usePutIssueTrackersIssueTrackerName<
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
                Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIssueTrackersIssueTrackerNameMutationOptions<
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

export function getDeleteIssueTrackersIssueTrackerNameMutationKey() {
  return ['issue_trackers', '/issue_trackers/:issue_tracker_name', 'DELETE'] as const
}

export function getDeleteIssueTrackersIssueTrackerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueTrackersIssueTrackerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
    ) {
      return parseResponse(client.issue_trackers[':issue_tracker_name'].$delete(args, options))
    },
  })
}

export function useDeleteIssueTrackersIssueTrackerName<
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
                  ReturnType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIssueTrackersIssueTrackerNameMutationOptions<
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

export function getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
    >
  >,
) {
  return [
    'issue_trackers',
    '/issue_trackers/:issue_tracker_name/issues/:issue_name',
    toValue(args),
  ] as const
}

export function getIssueTrackersIssueTrackerNameIssuesIssueNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackersIssueTrackerNameIssuesIssueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
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
                    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
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
                    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackersIssueTrackerNameIssuesIssueNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.person.$get>>,
) {
  return ['person', '/person', toValue(args)] as const
}

export function getPersonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.person.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePerson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.person.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
          ReturnType<typeof getPersonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPersonMutationKey() {
  return ['person', '/person', 'POST'] as const
}

export function getPostPersonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$post>>>>>,
    TError,
    InferRequestType<typeof client.person.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.person.$post>) {
      return parseResponse(client.person.$post(args, options))
    },
  })
}

export function usePostPerson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.person.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPersonRegisterMutationKey() {
  return ['person', '/person/register', 'POST'] as const
}

export function getPostPersonRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.person.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.person.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.person.register.$post>) {
      return parseResponse(client.person.register.$post(args, options))
    },
  })
}

export function usePostPersonRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.person.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.person.register.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonRegisterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPersonLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['$get']>>,
) {
  return ['person', '/person/:login', toValue(args)] as const
}

export function getPersonLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person[':login'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
            >
          >,
          ReturnType<typeof getPersonLoginQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person[':login'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPersonLoginMutationKey() {
  return ['person', '/person/:login', 'PUT'] as const
}

export function getPutPersonLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPersonLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['$put']>) {
      return parseResponse(client.person[':login'].$put(args, options))
    },
  })
}

export function usePutPersonLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.person)[':login']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPersonLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPersonLoginMutationKey() {
  return ['person', '/person/:login', 'POST'] as const
}

export function getPostPersonLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonLoginMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['$post']>) {
      return parseResponse(client.person[':login'].$post(args, options))
    },
  })
}

export function usePostPersonLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.person)[':login']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPersonLoginGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['group']['$get']>>,
) {
  return ['person', '/person/:login/group', toValue(args)] as const
}

export function getPersonLoginGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['group']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonLoginGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person[':login'].group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonLoginGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['group']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPersonLoginGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['group']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonLoginGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person[':login'].group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonLoginTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['token']['$get']>>,
) {
  return ['person', '/person/:login/token', toValue(args)] as const
}

export function getPersonLoginTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonLoginTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person[':login'].token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonLoginToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':login']['token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPersonLoginTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':login']['token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonLoginTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonLoginTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person[':login'].token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPersonLoginTokenMutationKey() {
  return ['person', '/person/:login/token', 'POST'] as const
}

export function getPostPersonLoginTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonLoginTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.person)[':login']['token']['$post']>) {
      return parseResponse(client.person[':login'].token.$post(args, options))
    },
  })
}

export function usePostPersonLoginToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.person)[':login']['token']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonLoginTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePersonLoginTokenIdMutationKey() {
  return ['person', '/person/:login/token/:id', 'DELETE'] as const
}

export function getDeletePersonLoginTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':login']['token'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePersonLoginTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
    ) {
      return parseResponse(client.person[':login'].token[':id'].$delete(args, options))
    },
  })
}

export function useDeletePersonLoginTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':login']['token'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePersonLoginTokenIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPublishedQueryKey() {
  return ['published', '/published'] as const
}

export function getPublishedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPublishedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublished<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>
          >,
          ReturnType<typeof getPublishedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.published.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublishedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPublishedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.published.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.published)[':project_name']['$get']>>,
) {
  return ['published', '/published/:project_name', toValue(args)] as const
}

export function getPublishedProjectNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.published)[':project_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishedProjectNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublishedProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.published)[':project_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPublishedProjectNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.published)[':project_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishedProjectNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>
  >,
) {
  return ['published', '/published/:project_name/:repository_name', toValue(args)] as const
}

export function getPublishedProjectNameRepositoryNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishedProjectNameRepositoryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'][':repository_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublishedProjectNameRepositoryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
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
                  ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPublishedProjectNameRepositoryNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.published)[':project_name'][':repository_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishedProjectNameRepositoryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'][':repository_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
    >
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name',
    toValue(args),
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishedProjectNameRepositoryNameArchitectureNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function usePublishedProjectNameRepositoryNameArchitectureName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishedProjectNameRepositoryNameArchitectureNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
    >
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename',
    toValue(args),
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'][
          ':binary_filename'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublishedProjectNameRepositoryNameArchitectureNameBinaryFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
    >
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name/:architecture_name/:binary_filename?view=ymp',
    toValue(args),
  ] as const
}

export function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'][':repository_name'][':architecture_name'][
          ':binary_filename?view=ymp'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey
          >
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmpQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'][':repository_name'][':architecture_name'][
            ':binary_filename?view=ymp'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPublishedProjectNameRepositoryNameViewStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
    >
  >,
) {
  return [
    'published',
    '/published/:project_name/:repository_name?view=status',
    toValue(args),
  ] as const
}

export function getPublishedProjectNameRepositoryNameViewStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublishedProjectNameRepositoryNameViewStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.published[':project_name'][':repository_name?view=status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublishedProjectNameRepositoryNameViewStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
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
                    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPublishedProjectNameRepositoryNameViewStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublishedProjectNameRepositoryNameViewStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublishedProjectNameRepositoryNameViewStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.published[':project_name'][':repository_name?view=status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestQueryKey() {
  return ['request', '/request'] as const
}

export function getRequestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRequestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRequest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
          >,
          ReturnType<typeof getRequestQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRequestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.request.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRequestMutationKey() {
  return ['request', '/request', 'POST'] as const
}

export function getPostRequestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
    TError,
    InferRequestType<typeof client.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.request.$post>) {
      return parseResponse(client.request.$post(args, options))
    },
  })
}

export function usePostRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.request.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRequestIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':id']['$get']>>,
) {
  return ['request', '/request/:id', toValue(args)] as const
}

export function getRequestIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRequestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.request[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRequestIdMutationKey() {
  return ['request', '/request/:id', 'PUT'] as const
}

export function getPutRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$put']>) {
      return parseResponse(client.request[':id'].$put(args, options))
    },
  })
}

export function usePutRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestIdMutationKey() {
  return ['request', '/request/:id', 'POST'] as const
}

export function getPostRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$post']>) {
      return parseResponse(client.request[':id'].$post(args, options))
    },
  })
}

export function usePostRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRequestIdMutationKey() {
  return ['request', '/request/:id', 'DELETE'] as const
}

export function getDeleteRequestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id']['$delete']>) {
      return parseResponse(client.request[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRequestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestIdCmdDiffMutationKey() {
  return ['request', '/request/:id?cmd=diff', 'POST'] as const
}

export function getPostRequestIdCmdDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':id?cmd=diff']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestIdCmdDiffMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>) {
      return parseResponse(client.request[':id?cmd=diff'].$post(args, options))
    },
  })
}

export function usePostRequestIdCmdDiff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':id?cmd=diff']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestIdCmdDiffMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRequestViewCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['request?view=collection']['$get']>>,
) {
  return ['request?view=collection', '/request?view=collection', toValue(args)] as const
}

export function getRequestViewCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['request?view=collection']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestViewCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['request?view=collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestViewCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['request?view=collection']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRequestViewCollectionQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client)['request?view=collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestViewCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestViewCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['request?view=collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkerStatusQueryKey() {
  return ['worker', '/worker/status'] as const
}

export function getWorkerStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWorkerStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.worker.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkerStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
          >,
          ReturnType<typeof getWorkerStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.worker.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWorkerStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.worker.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkerArchitectureNameWorkerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>
  >,
) {
  return ['worker', '/worker/:architecture_name:{worker_id}', toValue(args)] as const
}

export function getWorkerArchitectureNameWorkerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkerArchitectureNameWorkerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.worker[':architecture_name:{worker_id}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkerArchitectureNameWorkerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>
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
                  ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWorkerArchitectureNameWorkerIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkerArchitectureNameWorkerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkerArchitectureNameWorkerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.worker[':architecture_name:{worker_id}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkerCmdCheckconstraintsMutationKey() {
  return ['worker?cmd=checkconstraints', '/worker?cmd=checkconstraints', 'POST'] as const
}

export function getPostWorkerCmdCheckconstraintsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['worker?cmd=checkconstraints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkerCmdCheckconstraintsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
    ) {
      return parseResponse(client['worker?cmd=checkconstraints'].$post(args, options))
    },
  })
}

export function usePostWorkerCmdCheckconstraints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['worker?cmd=checkconstraints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkerCmdCheckconstraintsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
