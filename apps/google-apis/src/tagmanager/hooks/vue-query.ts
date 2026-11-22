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

export function getTagmanagerKey() {
  return ['tagmanager'] as const
}

export function getTagmanagerV2AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tagmanager.v2.accounts.$get>>,
) {
  return ['tagmanager', '/tagmanager/v2/accounts', toValue(args)] as const
}

export function getTagmanagerV2AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tagmanager.v2.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tagmanager.v2.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
            >
          >,
          ReturnType<typeof getTagmanagerV2AccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tagmanager.v2.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagmanagerV2AccountsContainersLookupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/accounts/containers:lookup', toValue(args)] as const
}

export function getTagmanagerV2AccountsContainersLookupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2AccountsContainersLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2.accounts['containers:lookup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2AccountsContainersLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2AccountsContainersLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2AccountsContainersLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2AccountsContainersLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2.accounts['containers:lookup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentBuiltInVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/built_in_variables', toValue(args)] as const
}

export function getTagmanagerV2ParentBuiltInVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentBuiltInVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].built_in_variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentBuiltInVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentBuiltInVariablesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentBuiltInVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentBuiltInVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].built_in_variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentBuiltInVariablesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/built_in_variables', 'POST'] as const
}

export function getPostTagmanagerV2ParentBuiltInVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentBuiltInVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']
      >,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].built_in_variables.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentBuiltInVariables<
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
                    (typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentBuiltInVariablesMutationOptions<
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

export function getTagmanagerV2ParentClientsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/clients', toValue(args)] as const
}

export function getTagmanagerV2ParentClientsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentClientsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentClientsMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/clients', 'POST'] as const
}

export function getPostTagmanagerV2ParentClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].clients.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentClientsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentContainersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/containers', toValue(args)] as const
}

export function getTagmanagerV2ParentContainersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentContainersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].containers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentContainers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentContainersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentContainersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentContainersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].containers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentContainersMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/containers', 'POST'] as const
}

export function getPostTagmanagerV2ParentContainersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentContainersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].containers.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentContainers<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentContainersMutationOptions<
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

export function getTagmanagerV2ParentDestinationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/destinations', toValue(args)] as const
}

export function getTagmanagerV2ParentDestinationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].destinations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentDestinationsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].destinations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentDestinationsLinkMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/destinations:link', 'POST'] as const
}

export function getPostTagmanagerV2ParentDestinationsLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentDestinationsLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']
      >,
    ) {
      return parseResponse(
        client.tagmanager.v2[':parent']['destinations:link'].$post(args, options),
      )
    },
  })
}

export function usePostTagmanagerV2ParentDestinationsLink<
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentDestinationsLinkMutationOptions<
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

export function getTagmanagerV2ParentEnvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/environments', toValue(args)] as const
}

export function getTagmanagerV2ParentEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentEnvironmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentEnvironmentsMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/environments', 'POST'] as const
}

export function getPostTagmanagerV2ParentEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].environments.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentEnvironments<
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentEnvironmentsMutationOptions<
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

export function getTagmanagerV2ParentFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/folders', toValue(args)] as const
}

export function getTagmanagerV2ParentFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentFoldersMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/folders', 'POST'] as const
}

export function getPostTagmanagerV2ParentFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].folders.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentFoldersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentGtagConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/gtag_config', toValue(args)] as const
}

export function getTagmanagerV2ParentGtagConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentGtagConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].gtag_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentGtagConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentGtagConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentGtagConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentGtagConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].gtag_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentGtagConfigMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/gtag_config', 'POST'] as const
}

export function getPostTagmanagerV2ParentGtagConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentGtagConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].gtag_config.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentGtagConfig<
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentGtagConfigMutationOptions<
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

export function getTagmanagerV2ParentTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/tags', toValue(args)] as const
}

export function getTagmanagerV2ParentTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentTagsMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/tags', 'POST'] as const
}

export function getPostTagmanagerV2ParentTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].tags.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/templates', toValue(args)] as const
}

export function getTagmanagerV2ParentTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentTemplatesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/templates', 'POST'] as const
}

export function getPostTagmanagerV2ParentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].templates.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentTemplates<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentTemplatesMutationOptions<
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

export function getTagmanagerV2ParentTriggersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/triggers', toValue(args)] as const
}

export function getTagmanagerV2ParentTriggersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].triggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentTriggersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentTriggersMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/triggers', 'POST'] as const
}

export function getPostTagmanagerV2ParentTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].triggers.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentTriggers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentTriggersMutationOptions<
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

export function getTagmanagerV2ParentUserPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/user_permissions', toValue(args)] as const
}

export function getTagmanagerV2ParentUserPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentUserPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].user_permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentUserPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentUserPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentUserPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentUserPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].user_permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentUserPermissionsMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/user_permissions', 'POST'] as const
}

export function getPostTagmanagerV2ParentUserPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentUserPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].user_permissions.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentUserPermissions<
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentUserPermissionsMutationOptions<
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

export function getTagmanagerV2ParentVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/variables', toValue(args)] as const
}

export function getTagmanagerV2ParentVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentVariablesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentVariablesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/variables', 'POST'] as const
}

export function getPostTagmanagerV2ParentVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].variables.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentVariables<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentVariablesMutationOptions<
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

export function getTagmanagerV2ParentVersionHeadersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/version_headers', toValue(args)] as const
}

export function getTagmanagerV2ParentVersionHeadersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentVersionHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].version_headers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentVersionHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentVersionHeadersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentVersionHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentVersionHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].version_headers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentVersionHeadersLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/version_headers:latest', toValue(args)] as const
}

export function getTagmanagerV2ParentVersionHeadersLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentVersionHeadersLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent']['version_headers:latest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentVersionHeadersLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
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
                    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
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
                    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentVersionHeadersLatestQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentVersionHeadersLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentVersionHeadersLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent']['version_headers:latest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentVersionsLiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/versions:live', toValue(args)] as const
}

export function getTagmanagerV2ParentVersionsLiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentVersionsLiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent']['versions:live'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentVersionsLive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>
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
                  ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentVersionsLiveQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentVersionsLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentVersionsLiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent']['versions:live'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagmanagerV2ParentWorkspacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/workspaces', toValue(args)] as const
}

export function getTagmanagerV2ParentWorkspacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentWorkspaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentWorkspacesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentWorkspacesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/workspaces', 'POST'] as const
}

export function getPostTagmanagerV2ParentWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].workspaces.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentWorkspaces<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentWorkspacesMutationOptions<
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

export function getTagmanagerV2ParentZonesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:parent/zones', toValue(args)] as const
}

export function getTagmanagerV2ParentZonesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2ParentZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':parent'].zones.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2ParentZones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2ParentZonesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2ParentZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2ParentZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':parent'].zones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2ParentZonesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:parent/zones', 'POST'] as const
}

export function getPostTagmanagerV2ParentZonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2ParentZonesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':parent'].zones.$post(args, options))
    },
  })
}

export function usePostTagmanagerV2ParentZones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2ParentZonesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagmanagerV2PathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>>,
) {
  return ['tagmanager', '/tagmanager/v2/:path', toValue(args)] as const
}

export function getTagmanagerV2PathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2PathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2Path<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2PathQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2PathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2PathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTagmanagerV2PathMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path', 'PUT'] as const
}

export function getPutTagmanagerV2PathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagmanagerV2PathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']>) {
      return parseResponse(client.tagmanager.v2[':path'].$put(args, options))
    },
  })
}

export function usePutTagmanagerV2Path<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagmanagerV2PathMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagmanagerV2PathMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path', 'DELETE'] as const
}

export function getDeleteTagmanagerV2PathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagmanagerV2PathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']>) {
      return parseResponse(client.tagmanager.v2[':path'].$delete(args, options))
    },
  })
}

export function useDeleteTagmanagerV2Path<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagmanagerV2PathMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathBuiltInVariablesRevertMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path/built_in_variables:revert', 'POST'] as const
}

export function getPostTagmanagerV2PathBuiltInVariablesRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathBuiltInVariablesRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']
      >,
    ) {
      return parseResponse(
        client.tagmanager.v2[':path']['built_in_variables:revert'].$post(args, options),
      )
    },
  })
}

export function usePostTagmanagerV2PathBuiltInVariablesRevert<
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
                    (typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']
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
  const mutationDefaults = getPostTagmanagerV2PathBuiltInVariablesRevertMutationOptions<
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

export function getTagmanagerV2PathStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>
  >,
) {
  return ['tagmanager', '/tagmanager/v2/:path/status', toValue(args)] as const
}

export function getTagmanagerV2PathStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2PathStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':path'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2PathStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2PathStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2PathStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2PathStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':path'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathCombineMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:combine', 'POST'] as const
}

export function getPostTagmanagerV2PathCombineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:combine']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathCombineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:combine'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathCombine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:combine']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathCombineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathCreateVersionMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:create_version', 'POST'] as const
}

export function getPostTagmanagerV2PathCreateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathCreateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:create_version'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathCreateVersion<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathCreateVersionMutationOptions<
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

export function getPostTagmanagerV2PathEntitiesMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:entities', 'POST'] as const
}

export function getPostTagmanagerV2PathEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:entities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:entities'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:entities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathEntitiesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathMoveEntitiesToFolderMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:move_entities_to_folder', 'POST'] as const
}

export function getPostTagmanagerV2PathMoveEntitiesToFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathMoveEntitiesToFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']
      >,
    ) {
      return parseResponse(
        client.tagmanager.v2[':path:move_entities_to_folder'].$post(args, options),
      )
    },
  })
}

export function usePostTagmanagerV2PathMoveEntitiesToFolder<
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
                    (typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathMoveEntitiesToFolderMutationOptions<
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

export function getPostTagmanagerV2PathMoveTagIdMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:move_tag_id', 'POST'] as const
}

export function getPostTagmanagerV2PathMoveTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathMoveTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:move_tag_id'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathMoveTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathMoveTagIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathPublishMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:publish', 'POST'] as const
}

export function getPostTagmanagerV2PathPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:publish'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathPublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathQuickPreviewMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:quick_preview', 'POST'] as const
}

export function getPostTagmanagerV2PathQuickPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathQuickPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:quick_preview'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathQuickPreview<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathQuickPreviewMutationOptions<
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

export function getPostTagmanagerV2PathReauthorizeMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:reauthorize', 'POST'] as const
}

export function getPostTagmanagerV2PathReauthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathReauthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:reauthorize'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathReauthorize<
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
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathReauthorizeMutationOptions<
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

export function getPostTagmanagerV2PathResolveConflictMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:resolve_conflict', 'POST'] as const
}

export function getPostTagmanagerV2PathResolveConflictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathResolveConflictMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:resolve_conflict'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathResolveConflict<
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
                  ReturnType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathResolveConflictMutationOptions<
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

export function getPostTagmanagerV2PathRevertMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:revert', 'POST'] as const
}

export function getPostTagmanagerV2PathRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:revert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:revert'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathRevert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:revert']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathRevertMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathSetLatestMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:set_latest', 'POST'] as const
}

export function getPostTagmanagerV2PathSetLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathSetLatestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:set_latest'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathSetLatest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathSetLatestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagmanagerV2PathSnippetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>,
) {
  return ['tagmanager', '/tagmanager/v2/:path:snippet', toValue(args)] as const
}

export function getTagmanagerV2PathSnippetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagmanagerV2PathSnippetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tagmanager.v2[':path:snippet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagmanagerV2PathSnippet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagmanagerV2PathSnippetQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagmanagerV2PathSnippetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagmanagerV2PathSnippetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tagmanager.v2[':path:snippet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathSyncMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:sync', 'POST'] as const
}

export function getPostTagmanagerV2PathSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathSyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']>) {
      return parseResponse(client.tagmanager.v2[':path:sync'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:sync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathSyncMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagmanagerV2PathUndeleteMutationKey() {
  return ['tagmanager', '/tagmanager/v2/:path:undelete', 'POST'] as const
}

export function getPostTagmanagerV2PathUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagmanagerV2PathUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>,
    ) {
      return parseResponse(client.tagmanager.v2[':path:undelete'].$post(args, options))
    },
  })
}

export function usePostTagmanagerV2PathUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagmanagerV2PathUndeleteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
